// =========================================================================
// FIR MIDTERM STUDY HUB - APPLICATION ENGINE (app.js)
// Động cơ điều khiển tương tác, điều hướng, flashcard, quiz, timer & search
// =========================================================================

// State Management
const state = {
  currentSection: 'overview',
  theme: localStorage.getItem('fir_theme') || 'light',
  // Flashcards state
  currentDeck: 'all',
  filteredFlashcards: [],
  currentFcIndex: 0,
  isFcFlipped: false,
  masteredFcs: JSON.parse(localStorage.getItem('fir_mastered_fc') || '[]'),
  // Quiz state
  quizAnswers: {},
  // Mock Exam Timer state
  timerSeconds: 60 * 60,
  timerInterval: null,
  isTimerRunning: false,
  // Topic progress tracking
  completedModules: JSON.parse(localStorage.getItem('fir_completed_modules') || '[]')
};

// Markdown Mini-Parser
function renderMarkdown(md) {
  if (!md) return '';
  let html = md.trim();

  // Escape basic script tags
  html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

  // Tables
  html = html.replace(/^\|(.+)\|$/gm, function (match) {
    const cells = match.split('|').slice(1, -1).map(c => c.trim());
    if (cells.some(c => /^:?-+:?$/.test(c))) {
      return '<!-- separator -->';
    }
    return '<tr>' + cells.map(c => `<td>${c}</td>`).join('') + '</tr>';
  });

  // Group table rows
  html = html.replace(/(<tr>[\s\S]*?<\/tr>\s*)+/g, function (tableMatch) {
    let clean = tableMatch.replace(/<!-- separator -->\s*/g, '');
    let rows = clean.trim().split(/<\/tr>\s*<tr>/);
    if (rows.length > 0) {
      let firstRow = rows[0].replace('<tr>', '');
      let headerRow = firstRow.replace(/<td>/g, '<th>').replace(/<\/td>/g, '</th>');
      let bodyRows = rows.slice(1).map(r => '<tr>' + r).join('</tr>') + (rows.length > 1 ? '</tr>' : '');
      return `<div class="table-container"><table class="custom-table"><thead><tr>${headerRow}</tr></thead><tbody>${bodyRows}</tbody></table></div>`;
    }
    return tableMatch;
  });

  // Headers
  html = html.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');

  // Blockquotes
  html = html.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>');

  // Bold & Italic
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Unordered list items
  html = html.replace(/^\s*-\s+(.*$)/gim, '<li>$1</li>');
  html = html.replace(/(<li>[\s\S]*?<\/li>)/g, '<ul>$1</ul>');
  // Clean nested duplicate <ul> tags
  html = html.replace(/<\/ul>\s*<ul>/g, '');

  // Paragraphs
  const blocks = html.split(/\n\s*\n/);
  html = blocks.map(block => {
    block = block.trim();
    if (!block) return '';
    if (block.startsWith('<h') || block.startsWith('<ul') || block.startsWith('<blockquote') || block.startsWith('<div')) {
      return block;
    }
    return `<p>${block.replace(/\n/g, '<br/>')}</p>`;
  }).join('\n');

  return html;
}

// UI Initialization
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setupEventListeners();
  renderSection('overview');
  updateGlobalProgress();
});

// Theme Toggle
function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  updateThemeIcon();
}

function toggleTheme() {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', state.theme);
  localStorage.setItem('fir_theme', state.theme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const btn = document.getElementById('btnTheme');
  if (btn) {
    btn.innerHTML = state.theme === 'light' ? '🌙' : '☀️';
    btn.title = state.theme === 'light' ? 'Chuyển sang chế độ Tối' : 'Chuyển sang chế độ Sáng';
  }
}

// Navigation & Event Listeners
function setupEventListeners() {
  // Sidebar navigation clicks
  document.querySelectorAll('.nav-item button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const section = btn.getAttribute('data-section');
      if (section) {
        navigateTo(section);
        // Mobile sidebar auto close
        document.getElementById('sidebar').classList.remove('mobile-open');
      }
    });
  });

  // Mobile menu button
  const btnMenu = document.getElementById('btnMenu');
  if (btnMenu) {
    btnMenu.addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('mobile-open');
    });
  }

  // Theme toggle
  const btnTheme = document.getElementById('btnTheme');
  if (btnTheme) {
    btnTheme.addEventListener('click', toggleTheme);
  }

  // Search shortcuts
  const searchTrigger = document.getElementById('searchTrigger');
  const searchModalOverlay = document.getElementById('searchModalOverlay');
  const searchInput = document.getElementById('searchInput');

  if (searchTrigger) {
    searchTrigger.addEventListener('click', openSearchModal);
  }

  if (searchModalOverlay) {
    searchModalOverlay.addEventListener('click', (e) => {
      if (e.target === searchModalOverlay) closeSearchModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openSearchModal();
    }
    if (e.key === 'Escape') {
      closeSearchModal();
    }
  });

  if (searchInput) {
    searchInput.addEventListener('input', handleSearchInput);
  }
}

function navigateTo(section) {
  state.currentSection = section;

  // Update active sidebar item
  document.querySelectorAll('.nav-item').forEach(item => {
    const btn = item.querySelector('button');
    if (btn && btn.getAttribute('data-section') === section) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  renderSection(section);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Router & Section Renderers
function renderSection(section) {
  const container = document.getElementById('mainContent');
  if (!container) return;

  switch (section) {
    case 'overview':
      renderOverviewSection(container);
      break;
    case 'nhap_mon':
    case 'cong_phap':
    case 'ngoai_giao_vn':
    case 'reading_ir':
      renderSubjectSection(container, section);
      break;
    case 'flashcards':
      renderFlashcardsSection(container);
      break;
    case 'quizzes':
      renderQuizSection(container);
      break;
    case 'essays':
      renderEssaysSection(container);
      break;
    case 'mock_exams':
      renderMockExamsSection(container);
      break;
    case 'cheat_sheet':
      renderCheatSheetSection(container);
      break;
    default:
      renderOverviewSection(container);
  }
}

// 1. RENDER OVERVIEW
function renderOverviewSection(container) {
  const ov = STUDY_DATA.overview;
  const meta = STUDY_DATA.meta;

  let matrixRows = ov.matrix.map(m => `
    <tr>
      <td><strong>${m.subject}</strong><br/><span style="font-size:0.75rem; color:var(--text-muted);">${m.code}</span></td>
      <td><span class="section-badge badge-rose">${m.format}</span></td>
      <td>${m.time}</td>
      <td>${m.difficulty}</td>
      <td style="font-size:0.85rem;">${m.keyFocus}</td>
    </tr>
  `).join('');

  let timelineHtml = ov.timeline.map((t, i) => `
    <div class="card" style="display:flex; gap:1rem; align-items:flex-start;">
      <div style="background:var(--accent-primary-light); color:var(--accent-primary); font-weight:700; font-size:0.85rem; padding:0.4rem 0.8rem; border-radius:var(--radius-sm); white-space:nowrap;">
        ${t.day}
      </div>
      <div>
        <p style="margin:0; font-size:0.92rem; color:var(--text-secondary); line-height:1.5;">${t.task}</p>
      </div>
    </div>
  `).join('');

  let rulesHtml = ov.strategyRules.map(r => `
    <div class="card">
      <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.6rem;">
        <span style="font-size:1.2rem;">💡</span>
        <h3 style="font-size:1rem; font-weight:700; color:var(--text-primary);">${r.title}</h3>
      </div>
      <p style="font-size:0.9rem; color:var(--text-secondary); line-height:1.6;">${r.desc}</p>
    </div>
  `).join('');

  container.innerHTML = `
    <!-- Hero / Gentle Encouragement -->
    <div class="hero-card">
      <div class="hero-text">
        <span class="section-badge badge-navy">✨ Sổ tay Đồng hành Ôn thi</span>
        <h2>Chào bạn! Chúc bạn có một kỳ thi thật rực rỡ 🍀</h2>
        <p>Hệ thống ôn tập thi đóng toàn diện 4 môn Khoa Quan hệ Quốc tế – USSH VNUHCM. Dành tặng bạn để tra cứu nhanh, nắm chắc khung lý thuyết và tự tin đạt điểm cao nhất.</p>
      </div>
      <div class="hero-stats">
        <div class="stat-box">
          <div class="stat-num">4</div>
          <div class="stat-label">Môn học</div>
        </div>
        <div class="stat-box">
          <div class="stat-num">20</div>
          <div class="stat-label">Chuyên đề</div>
        </div>
        <div class="stat-box">
          <div class="stat-num">40+</div>
          <div class="stat-label">Flashcards</div>
        </div>
      </div>
    </div>

    <!-- Exam Matrix Section -->
    <div class="section-header">
      <span class="section-badge badge-emerald">Ma trận đề thi</span>
      <h2 class="section-title">Cấu trúc & Trọng tâm 4 Môn Giữa kỳ</h2>
      <p class="section-subtitle">Toàn bộ 4 môn đều theo thể thức <strong>Thi đóng (Closed-Book)</strong>. Nắm chắc phạm vi giúp phân bổ thời gian hợp lý và không bị quá tải kiến thức.</p>
    </div>

    <div class="table-container">
      <table class="custom-table">
        <thead>
          <tr>
            <th>Môn học & Mã HP</th>
            <th>Hình thức thi</th>
            <th>Thời gian</th>
            <th>Độ khó</th>
            <th>Trọng tâm ôn luyện tuần 1 - 7</th>
          </tr>
        </thead>
        <tbody>
          ${matrixRows}
        </tbody>
      </table>
    </div>

    <!-- 4 Golden Rules -->
    <div class="section-header" style="margin-top:3rem;">
      <span class="section-badge badge-amber">Bí kíp thi đóng</span>
      <h2 class="section-title">4 Quy tắc Vàng làm Bài thi Đóng Điểm Cao</h2>
      <p class="section-subtitle">Đúc kết từ phương pháp chấm điểm tự luận của các thầy cô Khoa Quan hệ Quốc tế Nhân văn.</p>
    </div>
    <div class="grid-2" style="margin-bottom:3rem;">
      ${rulesHtml}
    </div>

    <!-- Timeline Study Route -->
    <div class="section-header">
      <span class="section-badge badge-purple">Lộ trình 7 ngày</span>
      <h2 class="section-title">Lộ trình Tăng tốc 7 Ngày Về đích</h2>
      <p class="section-subtitle">Kế hoạch ôn tập ngắt quãng (Spaced Repetition) giảm áp lực học dồn sát ngày thi.</p>
    </div>
    <div style="display:flex; flex-direction:column; gap:0.75rem; margin-bottom:3rem;">
      ${timelineHtml}
    </div>

    <!-- Quick action footer -->
    <div style="text-align:center; padding:2rem; background:var(--bg-surface); border-radius:var(--radius-lg); border:1px solid var(--border-subtle);">
      <h3 style="margin-bottom:0.5rem; font-size:1.15rem;">Sẵn sàng bắt đầu chưa?</h3>
      <p style="color:var(--text-secondary); margin-bottom:1.25rem; font-size:0.92rem;">Hãy bắt đầu bằng việc duyệt qua chuyên đề của môn đầu tiên hoặc luyện phản xạ với Flashcards.</p>
      <div style="display:flex; justify-content:center; gap:1rem;">
        <button class="btn-ctrl primary" onclick="navigateTo('nhap_mon')">📖 Vào môn Nhập môn QHQT</button>
        <button class="btn-ctrl" onclick="navigateTo('flashcards')">⚡ Luyện Flashcards ngay</button>
      </div>
    </div>
  `;
}

// 2. RENDER SUBJECT DETAIL
function renderSubjectSection(container, subjectKey) {
  const subj = STUDY_DATA.subjects[subjectKey];
  if (!subj) return;

  let badgeColor = 'badge-navy';
  if (subjectKey === 'cong_phap') badgeColor = 'badge-rose';
  if (subjectKey === 'ngoai_giao_vn') badgeColor = 'badge-amber';
  if (subjectKey === 'reading_ir') badgeColor = 'badge-purple';

  let modulesHtml = subj.modules.map((m, index) => {
    const isCompleted = state.completedModules.includes(`${subjectKey}_${index}`);
    return `
      <div class="module-card ${index === 0 ? 'expanded' : ''}" id="mod_${subjectKey}_${index}">
        <div class="module-header" onclick="toggleModule('${subjectKey}_${index}')">
          <div class="module-title-area">
            <span class="module-index">${index + 1}</span>
            <div>
              <div class="module-title">${m.title}</div>
              <div class="module-summary">${m.summary}</div>
            </div>
          </div>
          <div style="display:flex; align-items:center; gap:1rem;">
            <button class="btn-action" style="padding:0.25rem 0.6rem; font-size:0.75rem; border-radius:var(--radius-full); ${isCompleted ? 'background:var(--accent-emerald-light); color:var(--accent-emerald); border-color:var(--accent-emerald);' : ''}" onclick="event.stopPropagation(); toggleModuleCompletion('${subjectKey}_${index}')">
              ${isCompleted ? '✓ Đã hoàn thành' : '○ Đánh dấu xong'}
            </button>
            <span class="module-chevron">▼</span>
          </div>
        </div>
        <div class="module-body">
          ${renderMarkdown(m.content)}
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="section-header">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:1rem;">
        <div>
          <span class="section-badge ${badgeColor}">${subj.code} • ${subj.credits} Tín chỉ</span>
          <h1 class="section-title">${subj.name}</h1>
          <p class="section-subtitle">${subj.lecturers}</p>
        </div>
        <div style="display:flex; gap:0.5rem;">
          <button class="btn-action" onclick="expandAllModules('${subjectKey}')">Mở tất cả</button>
          <button class="btn-action" onclick="collapseAllModules('${subjectKey}')">Thu gọn</button>
        </div>
      </div>
    </div>

    <!-- Modules Accordion -->
    <div style="margin-top:1.5rem;">
      ${modulesHtml}
    </div>

    <!-- Bottom subject quick nav -->
    <div style="margin-top:3rem; padding-top:1.5rem; border-top:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center;">
      <button class="btn-ctrl" onclick="navigateTo('overview')">← Về Tổng quan</button>
      <button class="btn-ctrl primary" onclick="navigateTo('flashcards')">⚡ Ôn Flashcards môn này</button>
    </div>
  `;
}

function toggleModule(id) {
  const card = document.getElementById(`mod_${id}`);
  if (card) {
    card.classList.toggle('expanded');
  }
}

function expandAllModules(subjectKey) {
  const subj = STUDY_DATA.subjects[subjectKey];
  if (!subj) return;
  subj.modules.forEach((_, i) => {
    const card = document.getElementById(`mod_${subjectKey}_${i}`);
    if (card) card.classList.add('expanded');
  });
}

function collapseAllModules(subjectKey) {
  const subj = STUDY_DATA.subjects[subjectKey];
  if (!subj) return;
  subj.modules.forEach((_, i) => {
    const card = document.getElementById(`mod_${subjectKey}_${i}`);
    if (card) card.classList.remove('expanded');
  });
}

function toggleModuleCompletion(moduleId) {
  if (state.completedModules.includes(moduleId)) {
    state.completedModules = state.completedModules.filter(id => id !== moduleId);
  } else {
    state.completedModules.push(moduleId);
  }
  localStorage.setItem('fir_completed_modules', JSON.stringify(state.completedModules));
  updateGlobalProgress();
  // re-render current view button
  const [subKey] = moduleId.split('_');
  renderSubjectSection(document.getElementById('mainContent'), subKey);
}

function updateGlobalProgress() {
  const totalModules = 20; // 5 modules * 4 subjects
  const completedCount = state.completedModules.length;
  const pct = Math.min(100, Math.round((completedCount / totalModules) * 100));

  const fillEl = document.getElementById('globalProgressFill');
  const textEl = document.getElementById('globalProgressText');

  if (fillEl) fillEl.style.width = `${pct}%`;
  if (textEl) textEl.textContent = `${completedCount}/${totalModules} chuyên đề (${pct}%)`;
}

// 3. RENDER FLASHCARDS
function renderFlashcardsSection(container) {
  state.filteredFlashcards = state.currentDeck === 'all'
    ? [...STUDY_DATA.flashcards]
    : STUDY_DATA.flashcards.filter(f => f.subjectId === state.currentDeck);

  if (state.currentFcIndex >= state.filteredFlashcards.length) {
    state.currentFcIndex = 0;
  }
  state.isFcFlipped = false;

  const currentCard = state.filteredFlashcards[state.currentFcIndex] || {
    subjectName: "Không có thẻ",
    front: "Đã hết thẻ trong danh mục này",
    back: "Hãy chọn danh mục khác hoặc bấm xáo trộn thẻ."
  };

  const isMastered = state.masteredFcs.includes(currentCard.id);

  container.innerHTML = `
    <div class="section-header" style="text-align:center; max-width:680px; margin:0 auto 2rem;">
      <span class="section-badge badge-amber">⚡ Phản xạ thi đóng</span>
      <h1 class="section-title">Flashcards Thuật ngữ & Niên đại</h1>
      <p class="section-subtitle">Lật thẻ ghi nhớ nhanh các định nghĩa, số hiệu điều khoản và các mốc lịch sử. Chạm vào thẻ để xem đáp án.</p>
    </div>

    <div class="flashcards-container">
      <!-- Subject Filter -->
      <div class="flashcard-filter-bar">
        <button class="filter-btn ${state.currentDeck === 'all' ? 'active' : ''}" onclick="filterDeck('all')">Tất cả (40)</button>
        <button class="filter-btn ${state.currentDeck === 'nhap_mon' ? 'active' : ''}" onclick="filterDeck('nhap_mon')">Nhập môn QHQT</button>
        <button class="filter-btn ${state.currentDeck === 'cong_phap' ? 'active' : ''}" onclick="filterDeck('cong_phap')">Công pháp Quốc tế</button>
        <button class="filter-btn ${state.currentDeck === 'ngoai_giao_vn' ? 'active' : ''}" onclick="filterDeck('ngoai_giao_vn')">Lịch sử Ngoại giao VN</button>
        <button class="filter-btn ${state.currentDeck === 'reading_ir' ? 'active' : ''}" onclick="filterDeck('reading_ir')">Reading in IR</button>
      </div>

      <!-- 3D Flip Card -->
      <div class="flashcard-wrapper">
        <div class="flashcard ${state.isFcFlipped ? 'flipped' : ''}" id="flashcardElement" onclick="flipFlashcard()">
          <!-- Front -->
          <div class="flashcard-front">
            <div class="fc-meta">
              <span class="section-badge badge-navy" style="margin:0;">${currentCard.subjectName}</span>
              <span>Thẻ số ${state.currentFcIndex + 1} / ${state.filteredFlashcards.length}</span>
            </div>
            <div class="fc-content front-text">
              ${currentCard.front}
            </div>
            <div class="fc-hint">
              <span>👆 Chạm để lật mặt sau (Xem đáp án)</span>
            </div>
          </div>

          <!-- Back -->
          <div class="flashcard-back">
            <div class="fc-meta">
              <span class="section-badge badge-emerald" style="margin:0;">Đáp án chuẩn</span>
              <button class="btn-action" style="padding:0.2rem 0.6rem; font-size:0.75rem;" onclick="event.stopPropagation(); toggleMastered(${currentCard.id})">
                ${isMastered ? '★ Đã thuộc' : '☆ Đánh dấu đã thuộc'}
              </button>
            </div>
            <div class="fc-content back-text">
              ${currentCard.back}
            </div>
            <div class="fc-hint">
              <span>Chạm lần nữa để quay lại câu hỏi</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <div class="flashcard-controls">
        <button class="btn-ctrl" onclick="prevFlashcard()">← Thẻ trước</button>
        <button class="btn-ctrl" onclick="shuffleFlashcards()">🔀 Xáo trộn</button>
        <span class="flashcard-counter">${state.currentFcIndex + 1} / ${state.filteredFlashcards.length}</span>
        <button class="btn-ctrl primary" onclick="nextFlashcard()">Thẻ kế tiếp →</button>
      </div>

      <div style="font-size:0.85rem; color:var(--text-muted); margin-top:0.5rem;">
        Đã thuộc: <strong>${state.masteredFcs.length}</strong> / ${STUDY_DATA.flashcards.length} thẻ
      </div>
    </div>
  `;
}

function flipFlashcard() {
  const card = document.getElementById('flashcardElement');
  if (card) {
    state.isFcFlipped = !state.isFcFlipped;
    card.classList.toggle('flipped', state.isFcFlipped);
  }
}

function nextFlashcard() {
  if (state.currentFcIndex < state.filteredFlashcards.length - 1) {
    state.currentFcIndex++;
  } else {
    state.currentFcIndex = 0;
  }
  renderFlashcardsSection(document.getElementById('mainContent'));
}

function prevFlashcard() {
  if (state.currentFcIndex > 0) {
    state.currentFcIndex--;
  } else {
    state.currentFcIndex = state.filteredFlashcards.length - 1;
  }
  renderFlashcardsSection(document.getElementById('mainContent'));
}

function shuffleFlashcards() {
  state.filteredFlashcards.sort(() => Math.random() - 0.5);
  state.currentFcIndex = 0;
  renderFlashcardsSection(document.getElementById('mainContent'));
}

function filterDeck(deck) {
  state.currentDeck = deck;
  state.currentFcIndex = 0;
  renderFlashcardsSection(document.getElementById('mainContent'));
}

function toggleMastered(id) {
  if (state.masteredFcs.includes(id)) {
    state.masteredFcs = state.masteredFcs.filter(item => item !== id);
  } else {
    state.masteredFcs.push(id);
  }
  localStorage.setItem('fir_mastered_fc', JSON.stringify(state.masteredFcs));
  renderFlashcardsSection(document.getElementById('mainContent'));
}

// 4. RENDER QUIZZES
function renderQuizSection(container) {
  const quizzes = STUDY_DATA.quizzes;

  let quizListHtml = quizzes.map((q, qIndex) => {
    const selected = state.quizAnswers[q.id];
    const isAnswered = selected !== undefined;
    const isCorrect = isAnswered && selected === q.correctIndex;

    let optionsHtml = q.options.map((opt, optIndex) => {
      let optClass = 'option-btn';
      if (isAnswered) {
        optClass += ' disabled';
        if (optIndex === q.correctIndex) {
          optClass += ' correct';
        } else if (optIndex === selected) {
          optClass += ' wrong';
        }
      }
      const letters = ['A', 'B', 'C', 'D'];
      return `
        <button class="${optClass}" onclick="selectQuizOption(${q.id}, ${optIndex})">
          <span class="option-letter">${letters[optIndex]}</span>
          <span>${opt}</span>
        </button>
      `;
    }).join('');

    return `
      <div class="quiz-card" id="quiz_${q.id}">
        <div class="quiz-header">
          <span class="quiz-subject-tag">${q.subject}</span>
          <span style="font-size:0.8rem; color:var(--text-muted); font-weight:600;">Câu ${qIndex + 1} / ${quizzes.length}</span>
        </div>
        <div class="quiz-question">${q.question}</div>
        <div class="quiz-options">
          ${optionsHtml}
        </div>
        <div class="quiz-explanation ${isAnswered ? 'show' : ''}">
          <div class="explanation-title">
            ${isCorrect ? '✅ Giải thích đáp án đúng:' : '💡 Phân tích bẫy đề thi:'}
          </div>
          <div class="explanation-text">${q.explanation}</div>
        </div>
      </div>
    `;
  }).join('');

  const answeredCount = Object.keys(state.quizAnswers).length;
  let correctCount = 0;
  quizzes.forEach(q => {
    if (state.quizAnswers[q.id] === q.correctIndex) correctCount++;
  });

  container.innerHTML = `
    <div class="section-header" style="text-align:center; max-width:680px; margin:0 auto 2rem;">
      <span class="section-badge badge-rose">🎯 Trắc nghiệm & Đúng/Sai</span>
      <h1 class="section-title">Luyện Phản Xạ Đề Thi Giữa Kỳ</h1>
      <p class="section-subtitle">Kiểm tra khả năng phân biệt thuật ngữ, tránh các bẫy thường gặp trong đề thi đóng của Nhân văn.</p>
      <div style="margin-top:1rem; display:inline-flex; gap:1.5rem; background:var(--bg-surface); padding:0.6rem 1.5rem; border-radius:var(--radius-full); border:1px solid var(--border-subtle);">
        <span style="font-size:0.85rem;">Đã làm: <strong>${answeredCount}/${quizzes.length}</strong></span>
        <span style="font-size:0.85rem; color:var(--accent-emerald);">Đúng: <strong>${correctCount}</strong></span>
      </div>
    </div>

    <div class="quiz-container">
      ${quizListHtml}
      
      <div style="text-align:center; margin-top:2rem;">
        <button class="btn-ctrl" onclick="resetQuiz()">🔄 Làm lại toàn bộ câu hỏi</button>
      </div>
    </div>
  `;
}

function selectQuizOption(quizId, optionIndex) {
  if (state.quizAnswers[quizId] !== undefined) return; // already answered
  state.quizAnswers[quizId] = optionIndex;
  renderQuizSection(document.getElementById('mainContent'));
}

function resetQuiz() {
  state.quizAnswers = {};
  renderQuizSection(document.getElementById('mainContent'));
}

// 5. RENDER ESSAYS
function renderEssaysSection(container) {
  const essays = STUDY_DATA.essays;

  let essaysHtml = essays.map((essay, idx) => {
    let argsHtml = essay.outline.arguments.map(arg => `
      <div class="arg-card">
        <div class="arg-title">${arg.point}</div>
        <div class="arg-detail">${arg.detail}</div>
      </div>
    `).join('');

    return `
      <div class="essay-card">
        <div class="essay-header">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="section-badge badge-navy">${essay.subject}</span>
            <span style="font-size:0.8rem; color:var(--accent-rose); font-weight:700;">${essay.difficulty}</span>
          </div>
          <h2 class="essay-title">Đề ${idx + 1}: ${essay.title}</h2>
        </div>

        <!-- Mở bài -->
        <div class="essay-section">
          <div class="essay-section-label">📌 1. Mở bài (Trực diện khái niệm & phạm vi)</div>
          <div class="essay-content-box">${essay.outline.intro}</div>
        </div>

        <!-- Thân bài -->
        <div class="essay-section">
          <div class="essay-section-label">⚡ 2. Thân bài (Hệ thống luận điểm & Dẫn chứng vàng)</div>
          ${argsHtml}
        </div>

        <!-- Kết bài -->
        <div class="essay-section">
          <div class="essay-section-label">🎯 3. Kết bài (Đánh giá biện chứng & Bài học)</div>
          <div class="essay-content-box">${essay.outline.conclusion}</div>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="section-header">
      <span class="section-badge badge-emerald">Dàn ý chuẩn mực</span>
      <h1 class="section-title">Ngân Hàng Dàn Ý Tự Luận Điểm Tuyệt Đối</h1>
      <p class="section-subtitle">Cấu trúc 3 phần chặt chẽ, luận điểm rõ ràng kèm dẫn chứng thực tế giúp đạt điểm 9 - 10 tự luận.</p>
    </div>

    <div>
      ${essaysHtml}
    </div>
  `;
}

// 6. RENDER MOCK EXAMS & TIMER
function renderMockExamsSection(container) {
  const mocks = STUDY_DATA.mockExams;

  let mockCards = mocks.map(m => {
    let qHtml = m.questions.map(q => `
      <div class="mock-q-card">
        <div class="mock-q-header">
          <span>Câu ${q.number} (${q.score} điểm)</span>
          <span class="section-badge badge-navy">${q.type}</span>
        </div>
        <div class="mock-q-prompt">${q.prompt}</div>
      </div>
    `).join('');

    return `
      <div style="margin-bottom:3rem;">
        <div class="mock-header-card">
          <div>
            <span class="section-badge badge-rose">${m.subject}</span>
            <h2 style="font-size:1.35rem; font-weight:800; margin:0.35rem 0;">Đề Thi Thử Giữa Kỳ Chuẩn USSH</h2>
            <p style="font-size:0.85rem; color:var(--text-secondary); margin:0;">Thời gian: ${m.durationMinutes} phút | Thang điểm: ${m.totalScore} | ${m.instructions}</p>
          </div>
          <div class="timer-box">
            <span style="font-size:1.3rem;">⏱️</span>
            <div class="timer-display" id="timerDisplay">${formatTimer(state.timerSeconds)}</div>
            <button class="timer-btn" onclick="toggleTimer()">${state.isTimerRunning ? 'Tạm dừng' : 'Bắt đầu'}</button>
            <button class="timer-btn" style="background:var(--text-muted);" onclick="resetTimer()">Reset</button>
          </div>
        </div>

        <div>
          ${qHtml}
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="section-header">
      <span class="section-badge badge-rose">Mô phỏng phòng thi</span>
      <h1 class="section-title">Phòng Thi Thử Giữa Kỳ (Mock Exam)</h1>
      <p class="section-subtitle">Đề thi mô phỏng định dạng thi đóng chuẩn mực của Khoa QHQT Nhân văn. Bấm giờ 60 phút để rèn luyện tốc độ viết bài.</p>
    </div>

    <div>
      ${mockCards}
    </div>
  `;
}

function formatTimer(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function toggleTimer() {
  if (state.isTimerRunning) {
    clearInterval(state.timerInterval);
    state.isTimerRunning = false;
  } else {
    state.isTimerRunning = true;
    state.timerInterval = setInterval(() => {
      if (state.timerSeconds > 0) {
        state.timerSeconds--;
        const el = document.getElementById('timerDisplay');
        if (el) el.textContent = formatTimer(state.timerSeconds);
      } else {
        clearInterval(state.timerInterval);
        state.isTimerRunning = false;
        alert("Hết giờ làm bài! Hãy dừng bút và so sánh đáp án.");
      }
    }, 1000);
  }
  renderMockExamsSection(document.getElementById('mainContent'));
}

function resetTimer() {
  clearInterval(state.timerInterval);
  state.isTimerRunning = false;
  state.timerSeconds = 60 * 60;
  renderMockExamsSection(document.getElementById('mainContent'));
}

// 7. RENDER CHEAT SHEET
function renderCheatSheetSection(container) {
  const cs = STUDY_DATA.cheatSheet;

  let legalRows = cs.legalArticles.map(l => `
    <tr>
      <td><strong>${l.doc}</strong></td>
      <td><span class="section-badge badge-rose" style="font-family:var(--font-mono);">${l.article}</span></td>
      <td>${l.content}</td>
    </tr>
  `).join('');

  let historyRows = cs.historicalDiplomacy.map(h => `
    <tr>
      <td><strong style="font-family:var(--font-mono); color:var(--accent-amber);">${h.year}</strong></td>
      <td><strong>${h.figure}</strong></td>
      <td>${h.event}</td>
    </tr>
  `).join('');

  let irRows = cs.irTheories.map(t => `
    <tr>
      <td><strong>${t.theory}</strong></td>
      <td>${t.scholars}</td>
      <td style="font-family:var(--font-mono); font-size:0.8rem;">${t.keyword}</td>
    </tr>
  `).join('');

  container.innerHTML = `
    <div class="section-header">
      <span class="section-badge badge-emerald">Tra cứu siêu tốc</span>
      <h1 class="section-title">Cheat Sheet 15 Phút Trước Giờ Thi</h1>
      <p class="section-subtitle">Bảng tổng hợp các mốc niên đại, số hiệu điều khoản pháp lý và lý thuyết QHQT không được phép nhầm lẫn.</p>
    </div>

    <!-- Table 1: Legal Articles -->
    <div style="margin-bottom:2.5rem;">
      <h3 style="font-size:1.15rem; font-weight:700; margin-bottom:0.75rem; color:var(--accent-primary);">1. Bảng Số Hiệu Điều Khoản Luật Quốc Tế Trọng Điểm</h3>
      <div class="table-container">
        <table class="custom-table">
          <thead>
            <tr>
              <th>Văn kiện Pháp lý</th>
              <th>Số hiệu Điều khoản</th>
              <th>Nội dung Nguyên tắc Cốt lõi</th>
            </tr>
          </thead>
          <tbody>
            ${legalRows}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Table 2: History of Vietnamese Diplomacy -->
    <div style="margin-bottom:2.5rem;">
      <h3 style="font-size:1.15rem; font-weight:700; margin-bottom:0.75rem; color:var(--accent-amber);">2. Bảng Niên Biểu Lịch Sử Ngoại Giao Đại Việt</h3>
      <div class="table-container">
        <table class="custom-table">
          <thead>
            <tr>
              <th>Niên đại</th>
              <th>Nhân vật tiêu biểu</th>
              <th>Sự kiện & Tư tưởng Ngoại giao then chốt</th>
            </tr>
          </thead>
          <tbody>
            ${historyRows}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Table 3: IR Core Theories -->
    <div style="margin-bottom:2.5rem;">
      <h3 style="font-size:1.15rem; font-weight:700; margin-bottom:0.75rem; color:var(--accent-purple);">3. Bảng Khái Niệm & Trường Phái Lý Thuyết QHQT</h3>
      <div class="table-container">
        <table class="custom-table">
          <thead>
            <tr>
              <th>Trường phái / Khái niệm</th>
              <th>Học giả đại diện</th>
              <th>Từ khóa cốt lõi (Keywords)</th>
            </tr>
          </thead>
          <tbody>
            ${irRows}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 8. SEARCH SYSTEM
function openSearchModal() {
  const modal = document.getElementById('searchModalOverlay');
  const input = document.getElementById('searchInput');
  if (modal && input) {
    modal.classList.add('active');
    input.value = '';
    input.focus();
    handleSearchInput();
  }
}

function closeSearchModal() {
  const modal = document.getElementById('searchModalOverlay');
  if (modal) modal.classList.remove('active');
}

function handleSearchInput() {
  const input = document.getElementById('searchInput');
  const resultsContainer = document.getElementById('searchResults');
  if (!input || !resultsContainer) return;

  const query = input.value.trim().toLowerCase();
  if (!query) {
    resultsContainer.innerHTML = '<div style="padding:1rem; text-align:center; color:var(--text-muted); font-size:0.85rem;">Nhập từ khóa để tra cứu thuật ngữ, điều khoản hoặc sự kiện...</div>';
    return;
  }

  const results = [];

  // Search in subjects modules
  Object.values(STUDY_DATA.subjects).forEach(subj => {
    subj.modules.forEach((mod, idx) => {
      if (mod.title.toLowerCase().includes(query) || mod.content.toLowerCase().includes(query) || mod.summary.toLowerCase().includes(query)) {
        results.push({
          title: `${subj.name} — ${mod.title}`,
          snippet: mod.summary,
          action: () => {
            closeSearchModal();
            navigateTo(subj.id);
            setTimeout(() => {
              const el = document.getElementById(`mod_${subj.id}_${idx}`);
              if (el) {
                el.classList.add('expanded');
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }, 200);
          }
        });
      }
    });
  });

  // Search in flashcards
  STUDY_DATA.flashcards.forEach(fc => {
    if (fc.front.toLowerCase().includes(query) || fc.back.toLowerCase().includes(query)) {
      results.push({
        title: `Flashcard: ${fc.front}`,
        snippet: fc.back.substring(0, 80) + '...',
        action: () => {
          closeSearchModal();
          navigateTo('flashcards');
        }
      });
    }
  });

  // Search in legal articles
  STUDY_DATA.cheatSheet.legalArticles.forEach(leg => {
    if (leg.doc.toLowerCase().includes(query) || leg.article.toLowerCase().includes(query) || leg.content.toLowerCase().includes(query)) {
      results.push({
        title: `Điều khoản: ${leg.doc} — ${leg.article}`,
        snippet: leg.content,
        action: () => {
          closeSearchModal();
          navigateTo('cheat_sheet');
        }
      });
    }
  });

  if (results.length === 0) {
    resultsContainer.innerHTML = `<div style="padding:1.5rem; text-align:center; color:var(--text-muted); font-size:0.88rem;">Không tìm thấy kết quả phù hợp cho "${query}".</div>`;
    return;
  }

  resultsContainer.innerHTML = results.slice(0, 10).map((r, i) => `
    <div class="search-item" id="search_item_${i}">
      <div class="search-item-title">${r.title}</div>
      <div class="search-item-snippet">${r.snippet}</div>
    </div>
  `).join('');

  results.slice(0, 10).forEach((r, i) => {
    const el = document.getElementById(`search_item_${i}`);
    if (el) el.addEventListener('click', r.action);
  });
}
