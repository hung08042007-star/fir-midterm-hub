// =========================================================================
// FIR MIDTERM STUDY HUB - DATA REPOSITORY
// Dành riêng cho sinh viên Khoa Quan hệ Quốc tế (FIR) - ĐHKHXH&NV ĐHQG TP.HCM
// Đầy đủ 4 môn thi giữa kỳ: Nhập môn QHQT, Công pháp QT, Lịch sử Ngoại giao VN, Reading in IR
// =========================================================================

const STUDY_DATA = {
  meta: {
    faculty: "Khoa Quan hệ Quốc tế (FIR)",
    university: "Trường Đại học Khoa học Xã hội và Nhân văn – ĐHQG TP.HCM",
    examType: "Thi đóng (Closed-Book Exam)",
    scope: "Trọng tâm Giữa kỳ (Tuần 1 – 7)",
    title: "Sổ tay Ôn thi Giữa kỳ FIR USSH",
    subtitle: "Hệ thống hóa kiến thức trọng tâm & Bộ công cụ ôn tập phản xạ thi đóng"
  },

  // 1. TỔNG QUAN & CHIẾN LƯỢC ÔN THI ĐÓNG
  overview: {
    strategyRules: [
      {
        title: "Quy tắc 1: Học theo Khung logic (Framework), không học vẹt từng chữ",
        desc: "Thi đóng đòi hỏi nhớ chính xác thuật ngữ học thuật và cấu trúc luận điểm. Hãy học theo công thức: [Khái niệm cốt lõi] -> [Phân loại/Yếu tố cấu thành] -> [Ví dụ thực tế/Dẫn chứng] -> [Ý nghĩa đối ngoại]."
      },
      {
        title: "Quy tắc 2: 'Bảo bối' số hiệu điều khoản trong Công pháp quốc tế",
        desc: "Bài thi đóng CPQT sẽ được nâng tầm điểm số vượt trội nếu m trích dẫn chính xác số điều: Điều 2 khoản 4 (Cấm dùng vũ lực), Điều 51 (Quyền tự vệ chính đáng), Điều 38 Quy chế ICJ (Nguồn luật), và Công ước Viên 1969 (VCLT 1969)."
      },
      {
        title: "Quy tắc 3: Công thức 4 bước viết Tự luận Nhân văn điểm cao",
        desc: "Mở bài trực diện định nghĩa -> Thân bài chia rõ 2-3 luận điểm có dẫn chứng lịch sử/thời sự xác thực -> Phân tích biện chứng (mặt được/mặt hạn chế) -> Kết bài liên hệ đường lối đối ngoại của Việt Nam."
      },
      {
        title: "Quy tắc 4: Ôn tập ngắt quãng (Spaced Repetition) với Flashcards",
        desc: "Dành 15-20 phút mỗi ngày lật flashcard thuật ngữ và niên đại. Trí nhớ ngắn hạn sẽ chuyển thành phản xạ dài hạn chỉ sau 3 chu kỳ lặp lại trước ngày thi."
      }
    ],
    timeline: [
      { day: "Ngày 1 - 2", task: "Nắm vững bản chất & các trường phái Nhập môn QHQT + Học thuộc 7 nguyên tắc Công pháp quốc tế." },
      { day: "Ngày 3 - 4", task: "Lập bảng niên biểu Lịch sử Ngoại giao VN (Lý - Trần - Lê Sơ) + Nguồn luật CPQT & Công ước Viên 1969." },
      { day: "Ngày 5", task: "Luyện 50 từ vựng Reading in IR + Phân tích cấu trúc câu tóm tắt học thuật tiếng Anh." },
      { day: "Ngày 6", task: "Luyện viết Dàn ý Tự luận chi tiết 8 câu hỏi kinh điển + Làm trắc nghiệm phản xạ đúng/sai." },
      { day: "Ngày 7", task: "Chạy thử 1 Mock Exam có bấm giờ (Timer) + Đọc lướt Cheat Sheet 1 trang để tự tin vào phòng thi." }
    ],
    matrix: [
      {
        subject: "Nhập môn Quan hệ Quốc tế",
        code: "QTE133 (3 TC)",
        format: "Tự luận hoặc Trắc nghiệm + Tự luận ngắn",
        time: "60 - 90 phút",
        difficulty: "Khá cao (Đòi hỏi tư duy lý thuyết & phân tích tình huống)",
        keyFocus: "Vô chính phủ (Anarchy), Song đề an ninh, Chủ thể quốc gia vs phi quốc gia, Sức mạnh cứng/mềm/thông minh, Hiện thực vs Tự do."
      },
      {
        subject: "Công pháp Quốc tế",
        code: "QTE018.2 (3 TC)",
        format: "Tự luận + Nhận định Đúng/Sai + Tình huống (Case)",
        time: "60 - 90 phút",
        difficulty: "Cao (Cần độ chính xác tuyệt đối về thuật ngữ pháp lý & điều ước)",
        keyFocus: "Đặc thù CPQT, 7 nguyên tắc (đặc biệt cấm vũ lực & ngoại lệ), Nguồn luật theo Điều 38 ICJ, VCLT 1969 (ký kết & bảo lưu), Công nhận quốc tế."
      },
      {
        subject: "Lịch sử Ngoại giao Việt Nam",
        code: "QTE040 (3 TC)",
        format: "Tự luận phân tích (2 - 3 câu)",
        time: "60 - 90 phút",
        difficulty: "Trung bình khá (Cần ghi nhớ mốc lịch sử, sự kiện và tài năng nhân vật)",
        keyFocus: "Thể chế Triều cống - Sách phong, Ngoại vương nội đế, Ngoại giao Lý - Trần, Nghệ thuật tâm công Nguyễn Trãi (Hội thề Đông quan), Bài học kết thúc chiến tranh."
      },
      {
        subject: "Reading in International Relations",
        code: "QTE212 (1 TC)",
        format: "Trắc nghiệm từ vựng + Đọc hiểu + Trả lời ngắn / Tóm tắt",
        time: "45 - 60 phút",
        difficulty: "Trung bình (Đòi hỏi vốn từ vựng học thuật QHQT & kỹ năng skimming/scanning)",
        keyFocus: "Thuật ngữ cốt lõi (Sovereignty, Deterrence, Hegemony...), phân tích ý chính bài đọc, xác định quan điểm tác giả, tóm tắt 3-4 câu."
      }
    ]
  },

  // 2. NỘI DUNG CHI TIẾT 4 MÔN HỌC
  subjects: {
    nhap_mon: {
      id: "nhap_mon",
      name: "Nhập môn Quan hệ Quốc tế",
      code: "QTE133",
      credits: 3,
      lecturers: "TS. Đào Minh Hồng, TS. Nguyễn Tuấn Khanh, ThS. Đoàn Ngọc Anh Khoa (Khoa QHQT - USSH)",
      modules: [
        {
          title: "Chuyên đề 1: Bản chất Quan hệ Quốc tế & Tình trạng Vô chính phủ",
          summary: "Hiểu rõ định nghĩa QHQT và tính chất nền tảng của hệ thống quốc tế hiện đại.",
          content: `
#### 1. Định nghĩa Quan hệ Quốc tế (International Relations - IR)
- **Định nghĩa chuẩn:** Quan hệ quốc tế là tập hợp các quan hệ xã hội phát sinh và tương tác **qua biên giới lãnh thổ quốc gia** giữa các chủ thể quan hệ quốc tế (quốc gia, tổ chức quốc tế liên chính phủ, các tổ chức phi chính phủ, tập đoàn đa quốc gia và các thực thể khác) trên mọi lĩnh vực: chính trị, ngoại giao, kinh tế, quân sự, văn hóa, môi trường, an ninh...
- **Đối tượng nghiên cứu:** Động cơ, hành vi, kết quả tương tác giữa các chủ thể và những quy luật vận động của hệ thống quốc tế.

#### 2. Đặc trưng nền tảng: Tình trạng Vô chính phủ (International Anarchy)
- **Bản chất:** "Vô chính phủ" trong QHQT **không đồng nghĩa với hỗn loạn (chaos)**, mà có nghĩa là **không tồn tại một cơ quan quyền lực tối cao tập trung (Central Global Government)** đứng trên các quốc gia để ban hành luật pháp và cưỡng chế thi hành một cách tuyệt đối.
- **Hệ quả của tình trạng vô chính phủ:**
  1. **Nguyên lý Tự lực cứu trợ (Self-help system):** Vì không có chính phủ toàn cầu bảo vệ, mỗi quốc gia phải tự lo liệu an ninh, sự sống còn và lợi ích của chính mình.
  2. **Song đề an ninh (Security Dilemma - Khái niệm của John Herz):** 
     - Xuất phát từ sự nghi ngờ lẫn nhau trong môi trường vô chính phủ.
     - Khi Quốc gia A gia tăng sức mạnh quân sự nhằm mục đích **phòng thủ tự vệ**, Quốc gia B lại diễn giải hành động đó là sự đe dọa tiềm tàng đối với mình.
     - Quốc gia B buộc phải đáp trả bằng việc tăng cường vũ trang hoặc lập liên minh quân sự.
     - **Kết quả:** Cả hai quốc gia đều tốn kém nguồn lực, mức độ bất an tăng lên và an ninh thực tế của cả hai đều bị suy giảm so với ban đầu.
     - *Dẫn chứng thời sự:* Cạnh tranh vũ trang Mỹ - Trung ở Biển Đông; sự mở rộng của NATO và phản ứng quân sự của Nga tại Đông Âu.
          `
        },
        {
          title: "Chuyên đề 2: Chủ thể trong Quan hệ Quốc tế (Actors)",
          summary: "Phân biệt chủ thể quốc gia (trung tâm) và các chủ thể phi quốc gia đa dạng.",
          content: `
#### 1. Chủ thể Quốc gia (State Actors / Nation-States)
- **Vị thế:** Là **chủ thể cơ bản, truyền thống và có vai trò quyết định nhất** trong hệ thống quốc tế.
- **4 yếu tố cấu thành quốc gia (Theo Công ước Montevideo 1933 về Quyền và Nghĩa vụ của các Quốc gia):**
  1. **Dân cư thường xuyên ổn định (Permanent population):** Cộng đồng dân cư gắn bó với lãnh thổ.
  2. **Lãnh thổ xác định (Defined territory):** Biên giới rõ ràng trên đất liền, vùng trời, vùng biển.
  3. **Chính phủ có thẩm quyền thực tế (Effective Government):** Bộ máy quản lý, thực thi quyền lực pháp lý đối nội và đại diện đối ngoại.
  4. **Khả năng thiết lập quan hệ với các quốc gia khác (Capacity to enter into relations):** Biểu hiện của chủ quyền pháp lý quốc tế.
- **Chủ quyền quốc gia (Sovereignty - bắt nguồn từ Hòa ước Westphalia 1648):**
  - *Đối nội:* Quyền lực tối cao, tuyệt đối của nhà nước trong phạm vi biên giới quốc gia.
  - *Đối ngoại:* Quyền độc lập tự chủ, không chịu sự áp đặt hay chi phối của bất kỳ quyền lực ngoại bang nào.

#### 2. Chủ thể Phi quốc gia (Non-State Actors)
Sự phát triển của toàn cầu hóa làm nổi lên các chủ thể phi quốc gia với ảnh hưởng ngày càng sâu sắc:
- **Tổ chức liên chính phủ (IGOs - Intergovernmental Organizations):**
  - Thành lập bởi các quốc gia thông qua điều ước quốc tế (Hiến chương, Hiệp ước).
  - Ví dụ: Liên Hợp Quốc (UN), Hiệp hội các quốc gia Đông Nam Á (ASEAN), Liên minh châu Âu (EU), WTO, WHO.
  - *Vai trò:* Cung cấp diễn đàn hợp tác đa phương, điều hòa xung đột, ban hành các chuẩn mực quốc tế.
- **Tổ chức phi chính phủ quốc tế (INGOs):**
  - Được thành lập bởi cá nhân hoặc nhóm xã hội dân sự, không vụ lợi kinh tế hoặc chính trị trực tiếp.
  - Ví dụ: Ủy ban Chữ thập đỏ quốc tế (ICRC), Tổ chức Ân xá Quốc tế (Amnesty International), Greenpeace.
  - *Vai trò:* Vận động chính sách nhân đạo, môi trường, giám sát quyền con người.
- **Tập đoàn đa quốc gia (MNCs / TNCs):**
  - Apple, Samsung, Google, Toyota... Nắm giữ nguồn vốn khổng lồ, công nghệ cao, chuỗi cung ứng toàn cầu, có khả năng tác động đến chính sách thương mại và quan hệ đối ngoại của các nước sở tại.
- **Các thực thể đặc biệt khác:** Tòa thánh Vatican (Chủ thể mang tính tôn giáo và ngoại giao độc nhất); các phong tràu giải phóng dân tộc được quốc tế công nhận.
          `
        },
        {
          title: "Chuyên đề 3: Lợi ích Quốc gia & Sức mạnh Quốc gia (Power & Interest)",
          summary: "Động lực hành vi đối ngoại và công cụ hiện thực hóa chính sách.",
          content: `
#### 1. Lợi ích Quốc gia (National Interest)
- Là động lực tối cao thúc đẩy hành vi đối ngoại của một quốc gia trên trường quốc tế.
- **3 nhóm lợi ích cơ bản (theo mức độ ưu tiên):**
  1. **Lợi ích Sinh tồn / An ninh (Survival & Security):** Bảo vệ độc lập, chủ quyền, toàn vẹn lãnh thổ, duy trì sự ổn định của chế độ chính trị và an toàn tính mạng của nhân dân. (Lợi ích sống còn, không thể nhân nhượng).
  2. **Lợi ích Phát triển Kinh tế (Economic Prosperity):** Thúc đẩy tăng trưởng, mở rộng thị trường xuất khẩu, thu hút FDI, tiếp cận công nghệ cao, nâng cao chất lượng sống.
  3. **Lợi ích Vị thế & Ảnh hưởng (Prestige & Influence):** Gia tăng tiếng nói, vai trò trên các diễn đàn đa phương, uy tín ngoại giao và khả năng dẫn dắt các sáng kiến quốc tế.

#### 2. Sức mạnh Quốc gia (National Power)
Sức mạnh là khả năng của chủ thể A tác động, chi phối hoặc kiểm soát hành vi của chủ thể B để đạt được kết quả mong muốn.
- **Sức mạnh cứng (Hard Power):**
  - *Công cụ cấu thành:* Tiềm lực quân sự (quân đội, vũ khí hiện đại), sức mạnh kinh tế (GDP, trừng phạt kinh tế, cấm vận, viện trợ).
  - *Cách thức vận hành:* "Cây gậy và củ cà rốt" (Coercion & Inducement) — đe dọa, trừng phạt hoặc mua chuộc bằng lợi ích vật chất.
- **Sức mạnh mềm (Soft Power - Joseph Nye đề xuất năm 1990):**
  - *Bản chất:* Khả năng đạt được kết quả mong muốn thông qua **sự hấp dẫn và thuyết phục (Attraction & Persuasion)** thay vì ép buộc hoặc trả tiền.
  - *3 nguồn lực chính tạo nên sức mạnh mềm:*
    1. **Văn hóa (Culture):** Bản sắc văn hóa độc đáo, các di sản thế giới, ẩm thực, âm nhạc, phim ảnh có sức lôi cuốn người dân nước ngoài (như Hallyu của Hàn Quốc, văn hóa ẩm thực & truyền thống hiếu khách của Việt Nam).
    2. **Giá trị chính trị (Political values):** Tinh thần yêu chuộng hòa bình, công lý, nhân quyền, dân chủ và tính gương mẫu trong đối nội.
    3. **Chính sách đối ngoại (Foreign policy):** Chính sách nhất quán, tôn trọng luật pháp quốc tế, ủng hộ hòa bình, có trách nhiệm với cộng đồng quốc tế.
- **Sức mạnh thông minh (Smart Power):**
  - Khả năng kết hợp chiến lược, linh hoạt giữa sức mạnh cứng và sức mạnh mềm tùy theo từng hoàn cảnh cụ thể để tối ưu hóa hiệu quả đối ngoại.
          `
        },
        {
          title: "Chuyên đề 4: Các Trường phái Lý thuyết Cơ bản (Realism vs Liberalism)",
          summary: "Hai lăng kính nền tảng phân tích mọi hiện tượng chính trị quốc tế.",
          content: `
| Tiêu chí so sánh | Chủ nghĩa Hiện thực (Realism) | Chủ nghĩa Tự do (Liberalism) |
| :--- | :--- | :--- |
| **Đại diện tiêu biểu** | Thucydides, Machiavelli, Thomas Hobbes, Hans Morgenthau, Kenneth Waltz. | John Locke, Immanuel Kant, Woodrow Wilson, Robert Keohane, Joseph Nye. |
| **Bản chất con người** | Bi quan: Con người ích kỷ, tham vọng quyền lực, luôn cạnh tranh để tồn tại. | Lạc quan: Con người có lý trí, có thể học hỏi, hướng thiện và có năng lực hợp tác. |
| **Bản chất Hệ thống QT** | Vô chính phủ (Anarchy) khắc nghiệt; xung đột và chiến tranh luôn tiềm tàng. | Vô chính phủ nhưng có thể quản trị được thông qua luật pháp và thể chế quốc tế. |
| **Chủ thể trung tâm** | **Quốc gia là chủ thể duy nhất quan trọng**; hành động như một thực thể thống nhất, duy lý. | Quốc gia quan trọng nhưng **các chủ thể phi quốc gia** (IGOs, NGOs, doanh nghiệp) cũng giữ vai trò then chốt. |
| **Mục tiêu tối thượng** | Tìm kiếm quyền lực (Power) và bảo đảm an ninh sinh tồn (Survival). | Hợp tác vì sự phồn vinh kinh tế, hòa bình, phát triển bền vững và nhân quyền. |
| **Bản chất tương tác** | **Trò chơi tổng bằng không (Zero-sum game):** Lợi ích của nước này là tổn thất của nước khác. | **Trò chơi cùng có lợi (Positive-sum game):** Hợp tác mang lại lợi ích chung (Win-Win). |
| **Cơ chế giữ hòa bình** | **Cân bằng quyền lực (Balance of Power):** Răn đe quân sự, lập liên minh để không nước nào thống trị. | **An ninh tập thể (Collective Security)**, thể chế quốc tế (LHQ), liên kết kinh tế và nền dân chủ. |
          `
        },
        {
          title: "Chuyên đề 5: Dàn ý Câu hỏi Tự luận Kinh điển (USSH Midterm)",
          summary: "Gợi ý trả lời các câu hỏi tự luận hay gặp nhất trong đề thi đóng Nhập môn QHQT.",
          content: `
#### Đề 1: "Phân tích khái niệm Song đề an ninh (Security Dilemma). Liên hệ thực tiễn một điểm nóng chính trị thế giới hiện nay."
- **Bước 1 (Mở bài):** Định nghĩa môi trường vô chính phủ và trích dẫn khái niệm Song đề an ninh của John Herz (1950).
- **Bước 2 (Thân bài - Phân tích lý thuyết):**
  - Nguyên nhân: Môi trường Anarchy -> Tự lực cứu trợ (Self-help) -> Nghi ngờ ý đồ đối phương (Intentions are unobservable).
  - Cơ chế vận hành: A phòng thủ -> B cảm thấy bị đe dọa -> B tăng cường quân bị -> A bất an tiếp -> Vòng xoáy chạy đua vũ trang bất tận.
  - Nghịch lý: Cả hai đều tìm kiếm an ninh nhưng kết cục an ninh của cả hai đều suy giảm.
- **Bước 3 (Liên hệ thực tiễn):**
  - Phân tích điểm nóng Biển Đông hoặc cạnh tranh Mỹ - Trung ở Ấn Độ Dương - Thái Bình Dương: Mỹ tăng cường liên minh AUKUS, QUAD; Trung Quốc tăng tốc hiện đại hóa quân đội và xây căn cứ nhân tạo.
- **Bước 4 (Kết bài & Giải pháp):** Song đề an ninh chỉ có thể giảm thiểu thông qua các cơ chế xây dựng lòng tin (CBMs), ngoại giao đa phương (ASEAN, ARF) và minh bạch hóa chính sách quốc phòng.
          `
        }
      ]
    },

    cong_phap: {
      id: "cong_phap",
      name: "Công pháp Quốc tế",
      code: "QTE018.2",
      credits: 3,
      lecturers: "Bộ môn Luật Quốc tế - Khoa QHQT USSH",
      modules: [
        {
          title: "Chuyên đề 1: Bản chất & Tính Đặc thù của Công pháp Quốc tế",
          summary: "Hiểu rõ sự khác biệt bản chất giữa Công pháp quốc tế và Luật quốc gia.",
          content: `
#### 1. Định nghĩa Công pháp Quốc tế (Public International Law)
- Là hệ thống các nguyên tắc và quy phạm pháp lý do các quốc gia và các chủ thể khác của luật quốc tế **thỏa thuận xây dựng nên**, điều chỉnh các mối quan hệ xã hội phát sinh giữa các chủ thể đó trong mọi lĩnh vực của đời sống quốc tế, được bảo đảm thực hiện bằng các biện pháp cưỡng chế riêng biệt phù hợp với luật quốc tế.

#### 2. Ba đặc thù nền tảng so với Luật Quốc gia (Rất hay thi Nhận định Đúng/Sai)
1. **Về trình tự xây dựng pháp luật:**
   - *Luật quốc gia:* Do cơ quan quyền lực nhà nước lập pháp chuyên biệt (Quốc hội/Nghị viện) ban hành từ trên xuống mang tính áp đặt.
   - *Luật quốc tế:* **Không có nghị viện toàn cầu**. Quy phạm luật quốc tế được hình thành thông qua **sự thỏa thuận, thống nhất ý chí (Consensus / Agreement)** bình đẳng giữa các quốc gia có chủ quyền.
2. **Về đối tượng và chủ thể điều chỉnh:**
   - *Luật quốc gia:* Chủ thể chính là cá nhân, công dân, cơ quan, pháp nhân trong phạm vi lãnh thổ.
   - *Luật quốc tế:* Chủ thể là các thực thể độc lập có chủ quyền: **Quốc gia có chủ quyền (chủ thể cơ bản)**, các Tổ chức liên chính phủ (chủ thể phái sinh) và các dân tộc đang đấu tranh giành độc lập. (Không điều chỉnh quan hệ tư nhân).
3. **Về cơ chế thực thi và cưỡng chế:**
   - *Luật quốc gia:* Có bộ máy cưỡng chế tập trung, chuyên trách (Cảnh sát, Tòa án, Viện kiểm sát, Trại giam).
   - *Luật quốc tế:* **Không có lực lượng cảnh sát toàn cầu**. Cơ chế cưỡng chế mang tính chất **phi tập trung**: do chính các quốc gia tự thi hành (tự vệ chính đáng, trả đũa hợp pháp - Retorsion/Reprisal), hoặc thông qua cơ chế an ninh tập thể của Hội đồng Bảo an Liên Hợp Quốc (Chương VII Hiến chương LHQ).
          `
        },
        {
          title: "Chuyên đề 2: Bảy Nguyên tắc Cơ bản của Luật Quốc tế",
          summary: "Cốt lõi pháp lý tối cao được ghi nhận trong Hiến chương LHQ 1945 và Tuyên bố 1970.",
          content: `
Các nguyên tắc này mang giá trị **Jus cogens** (Quy phạm mệnh lệnh tối cao - không một quốc gia nào được phép đơn phương bãi bỏ hoặc làm trái).

#### 1. Nguyên tắc cấm dùng vũ lực hoặc đe dọa dùng vũ lực (Điều 2 khoản 4 Hiến chương LHQ)
- Các quốc gia thành viên từ bỏ việc đe dọa hoặc sử dụng vũ lực chống lại sự toàn vẹn lãnh thổ hoặc nền độc lập chính trị của bất kỳ quốc gia nào.
- **2 NGOẠI LỆ DUY NHẤT ĐƯỢC PHÉP SỬ DỤNG VŨ LỰC HỢP PHÁP (Bắt buộc phải thuộc lòng):**
  1. **Quyền tự vệ chính đáng (Self-defense) theo Điều 51 Hiến chương:** Được phép tự vệ cá nhân hoặc tập thể khi và chỉ khi **bị một cuộc tấn công vũ trang (armed attack) thực tế xảy ra**, và phải báo cáo ngay lập tức cho Hội đồng Bảo an LHQ. Tự vệ phải chấm dứt khi HĐBA đã áp dụng các biện pháp cần thiết.
  2. **Hành động cưỡng chế quân sự do Hội đồng Bảo an LHQ quyết định (Điều 42 Chương VII):** Khi có đe dọa hòa bình, phá hoại hòa bình hoặc hành vi xâm lược, và các biện pháp phi quân sự (cấm vận kinh tế theo Điều 41) tỏ ra không hiệu quả.

#### 2. Nguyên tắc Hòa bình giải quyết các tranh chấp quốc tế (Điều 2 khoản 3 & Điều 33)
- Các biện pháp hòa bình gồm: Đàm phán (Negotiation), Điều tra (Inquiry), Trung gian (Mediation), Hòa giải (Conciliation), Trọng tài quốc tế (Arbitration), Tòa án quốc tế (Judicial settlement).

#### 3. Nguyên tắc Bình đẳng chủ quyền giữa các quốc gia (Sovereign Equality - Điều 2 khoản 1)
- Mọi quốc gia, dù lớn hay nhỏ, giàu hay nghèo, quân sự mạnh hay yếu, đều bình đẳng về mặt pháp lý quốc tế.

#### 4. Nguyên tắc Không can thiệp vào công việc nội bộ của quốc gia khác (Điều 2 khoản 7)
- Cấm mọi hành vi can thiệp trực tiếp hoặc gián tiếp vào công việc thuộc thẩm quyền nội bộ (kinh tế, chính trị, văn hóa, xã hội).

#### 5. Nguyên tắc Tận tâm thực hiện các cam kết quốc tế (Pacta sunt servanda - Điều 2 khoản 2)
- Các quốc gia phải thực hiện các nghĩa vụ điều ước quốc tế một cách thiện chí, trung thực.
- *Lưu ý quan trọng:* Quốc gia **không được viện dẫn những quy định trong pháp luật nội bộ của mình** làm lý do để thoái thác việc thực hiện điều ước quốc tế đã cam kết có hiệu lực (Điều 27 Công ước Viên 1969).

#### 6. Nguyên tắc Quyền dân tộc tự quyết (Self-determination).
#### 7. Nguyên tắc Các quốc gia có nghĩa vụ hợp tác với nhau.
          `
        },
        {
          title: "Chuyên đề 3: Nguồn của Luật Quốc tế & Công ước Viên 1969 (VCLT)",
          summary: "Các hình thức thể hiện quy phạm pháp luật theo Điều 38 Quy chế Tòa ICJ.",
          content: `
#### 1. Hệ thống Nguồn theo Điều 38 Quy chế Tòa án Công lý Quốc tế (ICJ)
1. **Điều ước quốc tế (Treaties / Conventions):** Nguồn thành văn, quan trọng và phổ biến nhất trong quan hệ hiện đại.
2. **Tập quán quốc tế (Customary International Law):** Nguồn bất thành văn, gồm 2 yếu tố bắt buộc:
   - *Yếu tố khách quan:* Thực tiễn chung, nhất quán và lâu dài của các quốc gia (*State practice*).
   - *Yếu tố chủ quan:* Niềm tin pháp lý rằng hành vi đó mang tính bắt buộc thi hành theo luật (*Opinio juris sive necessitatis*).
3. **Các nguyên tắc pháp luật chung:** Nguyên tắc suy đoán vô tội, nguyên tắc bình đẳng trước pháp luật, nguyên tắc cấm hưởng lợi từ hành vi sai trái của chính mình...
4. **Nguồn bổ trợ (Subsidiary means):** Phán quyết của các tòa án quốc tế và học thuyết của các luật gia có uy tín cao nhất của các quốc gia.

#### 2. Trọng tâm Công ước Viên 1969 về Luật Điều ước Quốc tế (VCLT 1969)
- **Quy trình ký kết điều ước:**
  1. Đàm phán và soạn thảo văn bản.
  2. Thông qua và xác thực văn bản (Ký tắt / Ký chính thức).
  3. Thể hiện sự đồng ý chịu sự ràng buộc (Phê chuẩn - *Ratification*, Phê duyệt - *Approval*, hoặc Gia nhập - *Accession*).
  4. Đăng ký tại Ban Thư ký Liên Hợp Quốc (theo Điều 102 Hiến chương LHQ để có quyền viện dẫn trước các cơ quan LHQ).
- **Chế định Bảo lưu điều ước quốc tế (Reservation - Điều 19-23 VCLT 1969):**
  - *Khái niệm:* Tuyên bố đơn phương của một quốc gia đưa ra khi ký kết, phê chuẩn hoặc gia nhập điều ước, nhằm mục đích **loại trừ hoặc sửa đổi hiệu lực pháp lý của một hoặc một số điều khoản** của điều ước đó trong việc áp dụng đối với quốc gia mình.
  - *Điều kiện bảo lưu hợp pháp:* Điều ước không cấm bảo lưu; hoặc điều khoản bảo lưu không nằm trong danh mục cấm bảo lưu; và bảo lưu **không trái với mục đích và tôn chỉ của điều ước quốc tế**.
  - *Lưu ý:* Bảo lưu chỉ áp dụng trong điều ước quốc tế đa phương, không áp dụng cho điều ước song phương.
          `
        },
        {
          title: "Chuyên đề 4: Chủ thể & Chế định Công nhận Quốc tế (Recognition)",
          summary: "Quy chế pháp lý của các chủ thể và ý nghĩa pháp lý của hành vi công nhận.",
          content: `
#### 1. Phân loại Chủ thể Luật Quốc tế
- **Quốc gia có chủ quyền:** Chủ thể cơ bản, nguyên sinh, có đầy đủ năng lực hành vi và thẩm quyền pháp lý quốc tế nhất (Jus ad bellum, ký kết điều ước, hưởng quyền miễn trừ tư pháp).
- **Tổ chức quốc tế liên chính phủ (IGOs):** Chủ thể phái sinh (do các quốc gia lập ra), năng lực pháp lý bị giới hạn trong khuôn khổ Hiến chương/Điều lệ thành lập.
- **Các dân tộc đang đấu tranh giành quyền tự quyết:** Chủ thể trong thời kỳ quá độ, được hưởng các quyền bảo vệ theo luật nhân đạo quốc tế.

#### 2. Chế định Công nhận Quốc tế (Recognition)
- **Khái niệm:** Hành vi chính trị - pháp lý của một hoặc nhiều quốc gia công nhận một thực thể mới xuất hiện là một quốc gia có chủ quyền hoặc công nhận một chính phủ mới lên nắm quyền.
- **Hai trường phái lý thuyết về công nhận:**
  1. **Thuyết cấu thành (Constitutive Theory):** Sự công nhận tạo nên tư cách pháp nhân quốc tế của quốc gia mới. (Quan điểm này đã lỗi thời và bị đa số bác bỏ).
  2. **Thuyết tuyên bố (Declaratory Theory - Chiếm ưu thế hiện nay):** Tư cách quốc gia tồn tại khách quan ngay khi đáp ứng đủ 4 tiêu chí của Công ước Montevideo 1933; hành vi công nhận chỉ mang tính chất **xác nhận một thực tế đã tồn tại** và thể hiện ý định thiết lập quan hệ ngoại giao chính thức.
- **Hình thức công nhận:**
  - *Công nhận De jure:* Công nhận chính thức, đầy đủ, toàn diện và không thể đảo ngược.
  - *Công nhận De facto:* Công nhận trên thực tế, có tính chất tạm thời, dè dặt, hạn chế.
          `
        },
        {
          title: "Chuyên đề 5: Ngân hàng Bài tập Tình huống & Nhận định Đúng/Sai",
          summary: "Rèn luyện tư duy pháp lý phản xạ đúng chuẩn đề thi Nhân văn.",
          content: `
#### Câu 1: "Luật quốc tế không có hiệu lực thực thi vì không có cảnh sát quốc tế và quân đội thường trực?"
- **Đáp án: SAI.**
- **Giải thích pháp lý:** Mặc dù không có cơ quan cảnh sát tập trung như luật quốc gia, nhưng Luật quốc tế vẫn có hiệu lực thực thi mạnh mẽ nhờ: (1) Ý chí tự nguyện tuân thủ vì lợi ích chung và uy tín quốc tế của quốc gia; (2) Cơ chế tự vệ và trả đũa hợp pháp (Retorsion, Reprisal); (3) Cơ chế cưỡng chế tập thể tối cao của Hội đồng Bảo an LHQ theo Chương VII Hiến chương (Điều 41 về cấm vận, Điều 42 về hành động quân sự).

#### Câu 2: "Một quốc gia có quyền sử dụng vũ lực tấn công phủ đầu (Pre-emptive Strike) vào nước láng giềng nếu nghi ngờ nước này sắp tấn công mình?"
- **Đáp án: SAI.**
- **Giải thích pháp lý:** Theo Điều 51 Hiến chương LHQ, quyền tự vệ chỉ phát sinh khi có **"một cuộc tấn công vũ trang xảy ra" (if an armed attack occurs)** trên thực tế. Mọi hành vi tấn công phủ đầu dựa trên nghi ngờ hoặc nguy cơ tiềm tàng đều vi phạm nghiêm trọng Nguyên tắc cấm dùng vũ lực (Điều 2 khoản 4) và bị coi là hành vi xâm lược bất hợp pháp.
          `
        }
      ]
    },

    ngoai_giao_vn: {
      id: "ngoai_giao_vn",
      name: "Lịch sử Ngoại giao Việt Nam",
      code: "QTE040",
      credits: 3,
      lecturers: "TS. Đào Minh Hồng (Tác giả 'Tập bài đọc Lịch sử Ngoại giao Việt Nam')",
      modules: [
        {
          title: "Chuyên đề 1: Thể chế Bang giao 'Triều cống – Sách phong' & Tư tưởng Ngoại vương Nội đế",
          summary: "Quy luật ứng xử chiến lược sống còn của các vương triều phong kiến Việt Nam với phương Bắc.",
          content: `
#### 1. Bối cảnh Địa - Chính trị đặc thù của Việt Nam
- Nằm liền kề một đế chế phong kiến Trung Hoa khổng lồ với tư tưởng Đại Hán, luôn nuôi dưỡng dã tâm bành trướng lãnh thổ và đồng hóa phương Nam.
- Tương quan lực lượng: Đại Việt luôn ở thế nước nhỏ đối diện với nước lớn có quy mô dân số và quân sự gấp bội phần.
- **Yêu cầu lịch sử:** Phải vừa kiên quyết bảo vệ nền độc lập, chủ quyền lãnh thổ, vừa phải khéo léo gìn giữ hòa hiếu để nhân dân không rơi vào cảnh chiến tranh triền miên.

#### 2. Thể chế Bang giao "Triều cống – Sách phong" (Tributary System)
- **Triều cống (Tribute):** Định kỳ cử sứ bộ đem sản vật sang phương Bắc để cống nạp theo lễ nghi phong kiến.
- **Sách phong (Investiture):** Vua Trung Quốc sai sứ sang ban sắc phong công nhận vua nước Việt cai quản đất Giao Chỉ / An Nam.
- **Bản chất thực chất:** Đây là một **thỏa hiệp ngoại giao mang tính lễ nghi, hình thức**. Cha ông ta khôn khéo trao cho phương Bắc cái "danh" (sự thần phục bề ngoài làm vừa lòng Thiên triều) để đổi lấy cái "thực" vô giá: **quyền tự chủ độc lập hoàn toàn, biên giới bình yên và hòa bình để dựng nước**.

#### 3. Tư tưởng "Ngoại vương – Nội đế" (Ngoài xưng Vương, trong xưng Đế)
- *Đối ngoại:* Với vua phương Bắc, xưng là "An Nam Quốc vương" để hòa hiếu danh nghĩa.
- *Đối nội:* Trong nước, tự xưng là **Hoàng đế**, lập niên hiệu riêng, ban sắc phong riêng, khẳng định vị thế quốc gia độc lập, bình đẳng ngang hàng với thiên triều phương Bắc theo quy luật trời đất.
          `
        },
        {
          title: "Chuyên đề 2: Ngoại giao Thời Lý (1009 – 1225) & Khí phách 'Tiên phát chế nhân'",
          summary: "Ngoại giao chủ động, khẳng định chủ quyền sắt đá và kết thúc chiến tranh trong danh dự.",
          content: `
#### 1. Tư tưởng Quân sự - Ngoại giao "Tiên phát chế nhân" (Lý Thường Kiệt 1075)
- Nhận thấy nhà Tống chuẩn bị lực lượng, tích trữ lương thảo ở Ung Châu, Khâm Châu để xâm lược Đại Việt.
- Lý Thường Kiệt đề ra tư tưởng chiến lược: *"Ngồi yên đợi giặc không bằng đem quân đánh trước để chặn mũi nhọn của giặc"*.
- Hành động đánh sang đất Tống năm 1075 mang tính chất **chủ động phòng ngự chiến lược**, triệt phá căn cứ hậu cần xâm lược của địch rồi lập tức rút quân về nước lập phòng tuyến sông Như Nguyệt, chứ không chiếm đất giữ thành.

#### 2. Tuyên ngôn Độc lập đầu tiên: "Nam quốc sơn hà" (1077)
- Bài thơ thần vang lên trên phòng tuyến sông Như Nguyệt khẳng định 2 chân lý bất biến:
  1. *Chủ quyền lãnh thổ được phân định bởi sách trời (thiên định):* "Nam quốc sơn hà Nam đế cư / Tiệt nhiên định phận tại thiên thư".
  2. *Cảnh báo đanh thép kẻ thù xâm lược sẽ phải chuốc lấy thất bại nhục nhã:* "Như hà nghịch lỗ lai xâm phạm / Nhữ đẳng hành khan thủ bại hư".

#### 3. Nghệ thuật Kết thúc Chiến tranh trong Danh dự (1077)
- Khi quân Tống của Quách Quỳ sa lầy bên bờ bắc sông Như Nguyệt, lâm vào cảnh tiến thoái lưỡng nan, kiệt quệ lương thảo và dịch bệnh hoành hành.
- Thay vì tiêu diệt đến cùng, **Lý Thường Kiệt chủ động đề nghị "giảng hòa"**, mở lối thoát cho Quách Quỳ rút quân về nước an toàn.
- **Ý nghĩa ngoại giao:** Giữ thể diện cho hoàng đế nhà Tống, chấm dứt chiến tranh nhanh chóng, tránh việc triều đình Tống điều thêm quân cứu viện trả thù, đem lại nền hòa bình lâu dài cho dân tộc.
          `
        },
        {
          title: "Chuyên đề 3: Ngoại giao Thời Trần (1225 – 1400) & Nghệ thuật Vừa Đánh Vừa Đàm",
          summary: "Bản lĩnh kiên định nguyên tắc, khôn khéo trong đối sách trước đế chế Mông - Nguyên.",
          content: `
#### 1. Sách lược Ngoại giao Hoãn binh & Kiên định Chủ quyền
- Trước thế giặc Mông - Nguyên mạnh như vũ bão, nhà Trần áp dụng xuất sắc chiến lược ngoại giao **trì hoãn, kéo dài thời gian** để chuẩn bị lực lượng quân sự (cử các sứ giả tài năng như Lê Phụ Trần, Đỗ Khắc Chung sang tận doanh trại địch đàm phán).
- **Kiên quyết cự tuyệt 6 yêu sách phi lý của Hốt Tất Liệt:**
  1. Vua Trần phải thân hành sang chầu.
  2. Nộp con em hoàng gia làm con tin.
  3. Cho kê khai dân số và tài sản.
  4. Chịu sự kiểm soát của quan Đạt Lỗ Hoa Xích (Darughachi).
  5. Cung cấp quân đội phục vụ chiến tranh bành trướng của Nguyên.
  6. Nộp cống vật nặng nề.
- Nhà Trần chỉ chấp nhận nộp cống phẩm danh nghĩa, kiên quyết bác bỏ các yêu sách xâm phạm chủ quyền nội trị.

#### 2. Ngoại giao Chủ động Hòa giải sau Chiến thắng (1288)
- Sau đại thắng Bạch Đằng năm 1288 đập tan hoàn toàn cuộc xâm lược lần 3, vua tôi nhà Trần đã thể hiện tầm nhìn ngoại giao kiệt xuất:
- Trả tự do cho tù binh, cử ngay sứ bộ sang Đại Đô (Yên Kinh) trần tình, xin tiếp tục triều cống theo thông lệ cũ để làm dịu cơn thịnh nộ của Hốt Tất Liệt.
- **Bài học cốt lõi:** Chiến thắng quân sự rực rỡ nhưng không kiêu ngạo, dùng ngoại giao xoa dịu hiếu chiến của đối phương để khôi phục bang giao hòa bình.
          `
        },
        {
          title: "Chuyên đề 4: Ngoại giao Khởi nghĩa Lam Sơn & Đỉnh cao Nhân văn Nguyễn Trãi",
          summary: "Tư tưởng ngoại giao 'Tâm công', Hội thề Đông Quan và sắc lệnh biên cương Lê Thánh Tông.",
          content: `
#### 1. Nghệ thuật Ngoại giao "Tâm công" (Đánh vào lòng người) của Nguyễn Trãi
- Trong tác phẩm kinh điển *Quân trung từ mệnh tập*, Nguyễn Trãi đã vận dụng ngòi bút ngoại giao sắc bén như hàng vạn binh mã:
- Thuyết phục các tướng Minh (đặc biệt là Vương Thông) hiểu rõ lẽ hưng vong thuận theo ý trời, phân tích cục diện thất bại tất yếu để địch tự động mở cửa thành đầu hàng mà không cần đổ máu.
- Tư tưởng xuyên suốt: *"Đem đại nghĩa để thắng hung tàn / Lấy chí nhân để thay cường bạo"* (*Bình Ngô Đại Cáo*).

#### 2. Hội thề Đông Quan (Tháng 12/1427) – Mẫu mực của Chủ nghĩa Nhân văn trong Ngoại giao
- Khi Vương Thông đã cùng đường trong thành Đông Quan (Hà Nội ngày nay), nghĩa quân Lam Sơn tổ chức Hội thề hòa giải công khai.
- Lê Lợi và Nguyễn Trãi không những tha mạng cho hơn 10 vạn quân Minh, mà còn **chu cấp 500 chiến thuyền, hàng ngàn cỗ ngựa và lương thảo đầy đủ** để quân Minh rút về nước an toàn, lành lặn.
- **Ý nghĩa:** Chấm dứt 20 năm thống trị tàn bạo của nhà Minh, bảo vệ uy danh nước lớn của triều đình Minh để tránh cuộc chiến tranh trả thù tiếp theo, mở ra kỷ nguyên thái bình cho Đại Việt.

#### 3. Ý chí bảo vệ biên cương của Vua Lê Thánh Tông (1473)
- Lời răn dạy bất hủ với các quan phụ trách biên cương:
  > *"Một thước núi, một tấc sông của ta, lẽ nào lại nên tự tiện vứt bỏ? Ngươi phải kiên quyết tranh biện, chớ cho họ lấn dần. Nếu họ không nghe, còn có thể sai sứ sang tận triều đình của họ phân trần rõ lẽ phải trái. Kẻ nào dám đem một thước núi, một tấc đất của Thái Tổ làm mồi cho giặc, phải tội tru di!"* (Đại Việt sử ký toàn thư).
          `
        },
        {
          title: "Chuyên đề 5: Tổng kết Bài học Ngoại giao Truyền thống & Liên hệ Hiện đại",
          summary: "Các bài học vàng từ lịch sử và sự kế thừa trong 'Ngoại giao Cây tre Việt Nam'.",
          content: `
#### 1. Bốn Bài học Ngoại giao Truyền thống của Cha Ông
1. **Độc lập, chủ quyền quốc gia là nguyên tắc bất di bất dịch:** Mọi sách lược mềm mỏng chỉ có giá trị khi giữ vững được cốt lõi độc lập dân tộc.
2. **Nghệ thuật "Dĩ bất biến, ứng vạn biến":** Kiên định về mục tiêu chiến lược nhưng hết sức linh hoạt, uyển chuyển về phương pháp, sách lược đối ngoại.
3. **Kết hợp sức mạnh dân tộc với sức mạnh thời đại ("Vừa đánh vừa đàm"):** Ngoại giao luôn song hành với quân sự, chính trị và kinh tế để tạo nên sức mạnh tổng hợp.
4. **Ngoại giao nhân đạo và hòa hiếu:** Không dồn kẻ thù vào đường cùng, luôn mở lối thoát danh dự cho đối phương để giữ hòa bình lâu dài.

#### 2. Kế thừa trong Trường phái "Ngoại giao Cây tre Việt Nam"
- Tổng Bí thư Nguyễn Phú Trọng đúc kết: *"Gốc vững, thân chắc, cành uyển chuyển"*.
  - **Gốc vững:** Lợi ích quốc gia - dân tộc, độc lập, tự chủ, đường lối đối ngoại độc lập, đa phương hóa, đa dạng hóa, kiên định chính sách "4 Không" trong quốc phòng.
  - **Thân chắc:** Bản lĩnh kiên cường, sức mạnh đoàn kết dân tộc, tiềm lực kinh tế và uy tín quốc tế ngày càng cao.
  - **Cành uyển chuyển:** Khôn khéo, linh hoạt trong đàm phán, thích ứng nhanh với biến động địa chính trị phức tạp của thời đại.
          `
        }
      ]
    },

    reading_ir: {
      id: "reading_ir",
      name: "Reading in International Relations",
      code: "QTE212",
      credits: 1,
      lecturers: "Tổ Anh văn Chuyên ngành - Khoa QHQT USSH",
      modules: [
        {
          title: "Chuyên đề 1: 30 Thuật ngữ Học thuật Cốt lõi (Academic IR Terminology)",
          summary: "Bảng từ vựng chuyên ngành bắt buộc phải nắm vững định nghĩa và collocation.",
          content: `
| Term (Thuật ngữ) | Loại từ & Phát âm | Định nghĩa tiếng Anh chuẩn | Dịch nghĩa & Collocations |
| :--- | :--- | :--- | :--- |
| **Sovereignty** | n. /ˈsɒvrənti/ | The supreme authority within a territorial border. | Chủ quyền quốc gia. *Ex: violate / uphold national sovereignty*. |
| **Anarchy** | n. /ˈænəki/ | The lack of a central global government or overriding authority. | Tình trạng vô chính phủ. *Ex: international anarchy, anarchic system*. |
| **Hegemony** | n. /hɪˈɡeməni/ | Leadership or dominance, especially by one state over others. | Bá quyền, quyền bá chủ. *Ex: regional hegemony, challenge US hegemony*. |
| **Bilateralism** | n. /baɪˈlætərəlɪzəm/ | Relations or policies conducted between two sovereign states. | Chủ nghĩa song phương. *Ex: bilateral diplomatic ties, bilateral trade*. |
| **Multilateralism** | n. /ˌmʌltiˈlætərəlɪzəm/ | Cooperative relationships involving three or more nations. | Chủ nghĩa đa phương. *Ex: commit to multilateralism, multilateral forums*. |
| **Deterrence** | n. /dɪˈterəns/ | Discouraging an action through the instigation of fear or retribution. | Răn đe (quân sự). *Ex: nuclear deterrence, effective deterrence strategy*. |
| **Ratification** | n. /ˌrætɪfɪˈkeɪʃn/ | Official formal consent to make a treaty legally binding. | Phê chuẩn điều ước. *Ex: instrument of ratification, subject to ratification*. |
| **Interdependence** | n. /ˌɪntədɪˈpendəns/ | Mutual reliance between two or more groups/states. | Sự phụ thuộc lẫn nhau. *Ex: complex interdependence, economic interdependence*. |
| **Sanctions** | n. pl. /ˈsæŋkʃnz/ | Punitive measures taken by nations against a target state. | Biện pháp trừng phạt. *Ex: impose economic sanctions, lift sanctions*. |
| **Zero-sum game** | n phr. /ˌzɪərəʊ ˈsʌm/ | Situation where one party's gain equals another's loss. | Trò chơi tổng bằng không (được mất cân bằng). |
| **Positive-sum** | adj. /ˈpɒzətɪv sʌm/ | Outcomes where all participating parties gain benefits. | Trò chơi cùng có lợi (Win-Win). |
| **Jurisdiction** | n. /ˌdʒʊərɪsˈdɪkʃn/ | Official legal power to make legal decisions and judgments. | Thẩm quyền tài phán. *Ex: territorial jurisdiction, ICJ jurisdiction*. |
| **Appeasement** | n. /əˈpiːzmənt/ | Policy of pacifying an aggrieved nation through concessions. | Chính sách nhân nhượng, xoa dịu. |
| **Status quo** | n. /ˌsteɪtəs ˈkwəʊ/ | The existing state of political and international affairs. | Hiện trạng nguyên vẹn. *Ex: maintain / alter the status quo*. |
| **Diplomatic Immunity**| n phr. | Legal immunity ensuring diplomats safe passage and exemption from laws. | Quyền miễn trừ ngoại giao (Vienna 1961). |
          `
        },
        {
          title: "Chuyên đề 2: Kỹ năng Đọc hiểu Skimming/Scanning Bài báo Học thuật IR",
          summary: "Bí quyết giải quyết nhanh các câu hỏi trắc nghiệm và đọc hiểu trong phòng thi đóng.",
          content: `
#### 1. Cấu trúc bài đọc học thuật QHQT thường gặp:
- **Đoạn 1 (Introduction):** Nêu bối cảnh quốc tế (Global context) + Luận điểm trung tâm (Thesis statement).
- **Các đoạn thân bài (Body paragraphs):** Mỗi đoạn bắt đầu bằng một **Topic sentence** nêu một luận cứ chính:
  - Trường phái lý thuyết áp dụng (Realist, Liberal, Constructivist).
  - Tác động đối với chủ thể quốc gia hoặc an ninh khu vực.
  - Dữ kiện dẫn chứng (treaties, summits, diplomatic shifts).
- **Đoạn kết (Conclusion):** Tóm lược kết quả và đưa ra dự báo tương lai (Future implications).

#### 2. Chiến lược xử lý các dạng câu hỏi thi đóng:
1. **Dạng Main Idea / Primary Purpose:**
   - Đọc kỹ câu đầu và câu cuối của đoạn 1 và đoạn kết.
   - Loại bỏ ngay các phương án quá chi tiết (narrow) hoặc quá phóng đại (overgeneralized).
2. **Dạng Từ vựng trong ngữ cảnh (Vocabulary in Context):**
   - Đừng vội chọn nghĩa phổ thông. Hãy thay thế 4 đáp án vào câu văn để kiểm tra tính hợp lý về quan hệ đối ngoại.
   - Ví dụ: *"coercion"* trong IR luôn đồng nghĩa với *"compulsion / force / pressure"*, không dịch là *"persuasion"*.
3. **Dạng True / False / Not Given (hoặc According to the passage):**
   - Xác định từ khóa (Keywords: tên hiệp ước, năm, tên quốc gia, thuật ngữ).
   - Scan nhanh vị trí chứa từ khóa trong đoạn văn; chú ý các từ giới hạn như *always, never, exclusively, primarily*.
          `
        },
        {
          title: "Chuyên đề 3: Bài đọc Mẫu Phân tích Thực chiến (Sample Academic Text)",
          summary: "Bài đọc trích đoạn chuẩn phong cách Baylis & Smith kèm câu hỏi và đáp án chi tiết.",
          content: `
#### Passage: The Anarchic Nature of World Politics and Realist Paradigm
> *"The foundational premise of realism is that the international system is anarchic. Anarchy does not imply complete disorder or permanent violence; rather, it indicates the absence of an overarching sovereign authority capable of enforcing international covenants and regulating inter-state competition. In such a self-help environment, nation-states remain the paramount actors, relentlessly pursuing their own national security and core interests. Because intentions of other states can never be verified with absolute certainty, security-seeking behaviors—such as military modernization and tactical balancing—inevitably trigger what scholars term the 'security dilemma'. Consequently, cooperation under anarchy is perpetually fragile, constrained by pervasive fears of relative gains and deception."*

#### Practice Questions & Explanations:
1. **What is the primary function of paragraph 1?**
   - *A.* To argue that international law has rendered the state obsolete.
   - *B.* To explain how the anarchic structure shapes state behavior within realism. *(ĐÁP ÁN ĐÚNG)*
   - *C.* To propose solutions for resolving military conflicts worldwide.
   - *D.* To criticize nation-states for refusing to join global institutions.
   - *Giải thích:* Toàn đoạn tập trung giải thích luận điểm của Realism về tác động của tình trạng Anarchy đối với hành vi tìm kiếm an ninh của quốc gia.

2. **According to the passage, why is inter-state cooperation inherently fragile?**
   - *A.* States lack adequate financial and military resources.
   - *B.* States fear that partners may achieve greater relative gains or cheat. *(ĐÁP ÁN ĐÚNG)*
   - *C.* International treaties prohibit diplomatic negotiations.
   - *D.* Non-state actors dominate diplomatic affairs.
   - *Giải thích:* Câu cuối nêu rõ: *"cooperation under anarchy is perpetually fragile, constrained by pervasive fears of relative gains and deception"*.
          `
        },
        {
          title: "Chuyên đề 4: Mẫu Câu Tóm tắt Học thuật (Academic Summary Templates)",
          summary: "Khung câu tiếng Anh chuẩn giúp ăn trọn điểm phần Short-Answer / Summary Writing.",
          content: `
#### Mẫu khung tóm tắt 3 câu hoàn chỉnh:
- **Câu 1 (Mở bài - Nêu tác giả & Luận điểm chính):**
  > *"In this excerpt, the author examines the concept of [Subject/Topic], arguing that [Main thesis statement]."*
  *(Ví dụ: In this excerpt, the author examines the concept of international anarchy, arguing that it fundamentally compels sovereign states into competitive self-help behaviors.)*
- **Câu 2 (Thân bài - Nêu luận cứ then chốt):**
  > *"Specifically, the text underscores that [Key argument 1], which frequently leads to [Consequence/Key argument 2]."*
  *(Ví dụ: Specifically, the text underscores that unobservable intentions generate a pervasive security dilemma, which frequently hampers sustained multilateral cooperation.)*
- **Câu 3 (Kết bài - Ý nghĩa & Kết luận):**
  > *"Ultimately, the author concludes that [Final implication / Takeaway]."*
  *(Ví dụ: Ultimately, the author concludes that fear of relative gains remains the primary obstacle to enduring international peace.)*
          `
        }
      ]
    }
  },

  // 3. FLASHCARDS TƯƠNG TÁC (40 Thẻ chất lượng cao chia đều 4 môn)
  flashcards: [
    // Nhập môn QHQT
    {
      id: 1,
      subjectId: "nhap_mon",
      subjectName: "Nhập môn QHQT",
      front: "Tình trạng Vô chính phủ (Anarchy) trong Quan hệ Quốc tế là gì?",
      back: "Là sự vắng mặt của một cơ quan quyền lực tối cao tập trung (Central Global Government) đứng trên các quốc gia để ban hành và cưỡng chế thi hành luật pháp toàn cầu. Anarchy không đồng nghĩa với hỗn loạn, mà dẫn đến nguyên lý tự lực cứu trợ (Self-help)."
    },
    {
      id: 2,
      subjectId: "nhap_mon",
      subjectName: "Nhập môn QHQT",
      front: "Song đề An ninh (Security Dilemma) do ai đề xuất và bản chất là gì?",
      back: "Do John Herz đề xuất (1950). Bản chất: Hành động tăng cường quân sự để tự vệ của nước A vô tình làm nước B cảm thấy bị đe dọa. Nước B phản ứng bằng cách chạy đua vũ trang tương ứng, khiến an ninh thực tế của cả hai nước đều giảm sút."
    },
    {
      id: 3,
      subjectId: "nhap_mon",
      subjectName: "Nhập môn QHQT",
      front: "4 tiêu chí cấu thành Quốc gia theo Công ước Montevideo 1933 là gì?",
      back: "1. Dân cư thường xuyên ổn định (Permanent population)\n2. Lãnh thổ xác định (Defined territory)\n3. Chính phủ có thẩm quyền thực tế (Effective government)\n4. Khả năng thiết lập quan hệ với các quốc gia khác (Capacity to enter relations)."
    },
    {
      id: 4,
      subjectId: "nhap_mon",
      subjectName: "Nhập môn QHQT",
      front: "Sức mạnh mềm (Soft Power) gồm 3 nguồn lực cơ bản nào?",
      back: "Theo Joseph Nye gồm 3 nguồn lực:\n1. Văn hóa (Culture - sức hấp dẫn văn hóa)\n2. Giá trị chính trị (Political values - dân chủ, công bằng, nhân đạo)\n3. Chính sách đối ngoại (Foreign policy - chính nghĩa, tôn trọng luật pháp quốc tế)."
    },
    {
      id: 5,
      subjectId: "nhap_mon",
      subjectName: "Nhập môn QHQT",
      front: "So sánh Zero-sum game và Positive-sum game trong QHQT?",
      back: "- Zero-sum game (Hiện thực): Lợi ích của bên này chính là sự mất mát của bên kia (Tổng bằng 0).\n- Positive-sum game (Tự do): Các bên cùng hợp tác để cùng có lợi lớn hơn (Win-Win)."
    },

    // Công pháp Quốc tế
    {
      id: 6,
      subjectId: "cong_phap",
      subjectName: "Công pháp Quốc tế",
      front: "Điều 2 khoản 4 Hiến chương LHQ quy định nguyên tắc gì?",
      back: "Nguyên tắc cấm dùng vũ lực hoặc đe dọa dùng vũ lực trong quan hệ quốc tế, chống lại sự toàn vẹn lãnh thổ hoặc nền độc lập chính trị của bất kỳ quốc gia nào."
    },
    {
      id: 7,
      subjectId: "cong_phap",
      subjectName: "Công pháp Quốc tế",
      front: "Hai ngoại lệ duy nhất được phép sử dụng vũ lực hợp pháp là gì?",
      back: "1. Quyền tự vệ chính đáng cá nhân hoặc tập thể khi bị tấn công vũ trang (Điều 51 Hiến chương LHQ).\n2. Hành động cưỡng chế quân sự do Hội đồng Bảo an LHQ quyết định/ủy quyền để duy trì hòa bình (Điều 42 Chương VII)."
    },
    {
      id: 8,
      subjectId: "cong_phap",
      subjectName: "Công pháp Quốc tế",
      front: "Nguyên tắc Pacta sunt servanda có ý nghĩa gì và ghi nhận ở đâu?",
      back: "Tận tâm thực hiện các cam kết quốc tế. Quốc gia không được viện dẫn pháp luật nội bộ để thoái thác nghĩa vụ điều ước quốc tế mà mình đã ký kết (Điều 2 khoản 2 Hiến chương LHQ & Điều 27 Công ước Viên 1969)."
    },
    {
      id: 9,
      subjectId: "cong_phap",
      subjectName: "Công pháp Quốc tế",
      front: "Bảo lưu điều ước quốc tế (Reservation) là gì?",
      back: "Là tuyên bố đơn phương của một quốc gia đưa ra khi ký kết, phê chuẩn hoặc gia nhập điều ước, nhằm loại trừ hoặc sửa đổi hiệu lực pháp lý của một số điều khoản đối với mình (Điều 19 VCLT 1969). Chỉ áp dụng cho điều ước đa phương."
    },
    {
      id: 10,
      subjectId: "cong_phap",
      subjectName: "Công pháp Quốc tế",
      front: "2 yếu tố bắt buộc cấu thành Tập quán quốc tế (Customary Law)?",
      back: "1. Thực tiễn chung, nhất quán của các quốc gia (State practice - yếu tố khách quan).\n2. Niềm tin pháp lý rằng hành vi đó mang tính bắt buộc thi hành theo luật (Opinio juris - yếu tố chủ quan)."
    },

    // Lịch sử Ngoại giao VN
    {
      id: 11,
      subjectId: "ngoai_giao_vn",
      subjectName: "Lịch sử Ngoại giao VN",
      front: "Tư tưởng 'Ngoại vương – Nội đế' của cha ông ta có bản chất là gì?",
      back: "Đối ngoại với phương Bắc chấp nhận xưng Vương, chịu nhận sắc phong và triều cống danh nghĩa để giữ gìn hòa hiếu; nhưng đối nội tự xưng Hoàng đế, định niên hiệu riêng, khẳng định chủ quyền độc lập bình đẳng với thiên triều."
    },
    {
      id: 12,
      subjectId: "ngoai_giao_vn",
      subjectName: "Lịch sử Ngoại giao VN",
      front: "Tư tưởng ngoại giao 'Tiên phát chế nhân' của Lý Thường Kiệt (1075)?",
      back: "'Ngồi yên đợi giặc không bằng đem quân đánh trước để chặn mũi nhọn của giặc'. Chủ động tấn công sang căn cứ hậu cần Ung Châu, Khâm Châu của Tống để tự vệ phòng ngự, sau đó rút về phòng tuyến sông Như Nguyệt."
    },
    {
      id: 13,
      subjectId: "ngoai_giao_vn",
      subjectName: "Lịch sử Ngoại giao VN",
      front: "Hội thề Đông Quan (12/1427) thể hiện truyền thống ngoại giao gì?",
      back: "Thể hiện đỉnh cao của chủ nghĩa nhân văn và nghệ thuật ngoại giao hòa hiếu. Lê Lợi - Nguyễn Trãi tha mạng cho hơn 10 vạn quân Minh, chu cấp 500 thuyền và hàng ngàn ngựa chiến để quân giặc rút về nước an toàn, giữ thể diện cho triều Minh."
    },
    {
      id: 14,
      subjectId: "ngoai_giao_vn",
      subjectName: "Lịch sử Ngoại giao VN",
      front: "Ngoại giao 'Tâm công' của Nguyễn Trãi được thể hiện qua tác phẩm nào?",
      back: "Tác phẩm kinh điển 'Quân trung từ mệnh tập' — dùng ngòi bút đánh vào lòng người, phân tích lẽ hưng vong và chính nghĩa để thuyết phục quân tướng giặc Minh đầu hàng không cần đổ máu."
    },
    {
      id: 15,
      subjectId: "ngoai_giao_vn",
      subjectName: "Lịch sử Ngoại giao VN",
      front: "Lời căn dặn bất hủ của vua Lê Thánh Tông về biên cương năm 1473?",
      back: "'Một thước núi, một tấc sông của ta, lẽ nào lại nên tự tiện vứt bỏ... Kẻ nào dám đem một thước núi, một tấc đất của Thái Tổ làm mồi cho giặc, phải tội tru di!'."
    },

    // Reading in IR
    {
      id: 16,
      subjectId: "reading_ir",
      subjectName: "Reading in IR",
      front: "What is the exact academic definition of 'Sovereignty'?",
      back: "The supreme, independent authority of a state over its territory and population, free from external control or intervention. (Chủ quyền tối cao của quốc gia)."
    },
    {
      id: 17,
      subjectId: "reading_ir",
      subjectName: "Reading in IR",
      front: "Distinguish 'Bilateralism' vs 'Multilateralism'?",
      back: "- Bilateralism: Political, economic, or diplomatic relations conducted between TWO sovereign states.\n- Multilateralism: Alliance or cooperation involving THREE OR MORE nations (e.g. UN, ASEAN)."
    },
    {
      id: 18,
      subjectId: "reading_ir",
      subjectName: "Reading in IR",
      front: "What does 'Deterrence' mean in security studies?",
      back: "A military/political strategy intended to dissuade an adversary from taking hostile action by demonstrating credible threat of devastating retaliation (e.g. Nuclear Deterrence)."
    },
    {
      id: 19,
      subjectId: "reading_ir",
      subjectName: "Reading in IR",
      front: "Define 'Ratification' in treaty law?",
      back: "The formal process by which a nation's legislative or executive body officially approves a treaty, thereby making it legally binding under international law (Phê chuẩn điều ước)."
    },
    {
      id: 20,
      subjectId: "reading_ir",
      subjectName: "Reading in IR",
      front: "What is 'Diplomatic Immunity' based on Vienna Convention 1961?",
      back: "A principle of international law granting foreign diplomats safe passage and freedom from legal jurisdiction and prosecution by the host country."
    }
  ],

  // 4. TRẮC NGHIỆM & NHẬN ĐỊNH ĐÚNG/SAI CÓ GIẢI THÍCH CHI TIẾT
  quizzes: [
    {
      id: 1,
      subject: "Nhập môn Quan hệ Quốc tế",
      question: "Trong Quan hệ Quốc tế, tình trạng 'Vô chính phủ' (International Anarchy) có nghĩa là:",
      options: [
        "Hệ thống quốc tế hoàn toàn rơi vào trạng thái hỗn loạn, chiến tranh triền miên.",
        "Không có một chính phủ toàn cầu hoặc cơ quan quyền lực tối cao tập trung đứng trên các quốc gia.",
        "Các tổ chức quốc tế như Liên Hợp Quốc không có bất kỳ thẩm quyền pháp lý nào.",
        "Tất cả các quốc gia đều có sức mạnh quân sự và kinh tế ngang bằng nhau."
      ],
      correctIndex: 1,
      explanation: "Chính xác! Anarchy trong IR không có nghĩa là chaos (hỗn loạn), mà là không tồn tại một chính phủ toàn cầu nắm quyền lực tuyệt đối để điều hành và thực thi pháp luật đối với các quốc gia có chủ quyền."
    },
    {
      id: 2,
      subject: "Công pháp Quốc tế",
      question: "Nhận định sau ĐÚNG hay SAI: 'Theo luật quốc tế, một quốc gia có quyền tiến hành tấn công quân sự phủ đầu (pre-emptive strike) nếu phát hiện nước láng giềng đang tập trận sát biên giới?'",
      options: [
        "ĐÚNG, vì quốc gia có quyền tự vệ phòng ngừa để bảo vệ sinh tồn.",
        "SAI, vì Điều 51 Hiến chương LHQ chỉ cho phép quyền tự vệ khi có một cuộc tấn công vũ trang xảy ra trên thực tế.",
        "ĐÚNG, nếu quốc gia đó đã thông báo trước cho Hội đồng Bảo an.",
        "SAI, vì các quốc gia hoàn toàn bị cấm sở hữu quân đội."
      ],
      correctIndex: 1,
      explanation: "Đúng! Theo Điều 51 Hiến chương LHQ, quyền tự vệ chỉ phát sinh 'khi và chỉ khi bị tấn công vũ trang' (armed attack occurs). Tấn công phủ đầu dựa trên nghi ngờ hoặc tập trận là hành vi vi phạm Điều 2 khoản 4 (cấm dùng vũ lực)."
    },
    {
      id: 3,
      subject: "Lịch sử Ngoại giao Việt Nam",
      question: "Sau đại thắng Bạch Đằng năm 1288 đập tan quân Nguyên, vua tôi nhà Trần đã thực hiện chính sách ngoại giao nào?",
      options: [
        "Cắt đứt toàn bộ quan hệ ngoại giao với nhà Nguyên và chuẩn bị xâm lược phương Bắc.",
        "Yêu cầu nhà Nguyên phải bồi thường chiến phí và nộp lại đất đai.",
        "Chủ động cử sứ bộ sang Yên Kinh xin tiếp tục triều cống theo lệ cũ để giữ hòa khí.",
        "Lập liên minh quân sự với các nước láng giềng để bao vây phương Bắc."
      ],
      correctIndex: 2,
      explanation: "Chính xác! Đây là bài học ngoại giao đỉnh cao của nhà Trần: chiến thắng oanh liệt nhưng lập tức xoa dịu hiếu chiến của đối phương bằng cách cử sứ sang tạ tội danh nghĩa và triều cống để giữ gìn hòa bình dài lâu."
    },
    {
      id: 4,
      subject: "Reading in International Relations",
      question: "In academic IR context, which word is CLOSEST in meaning to 'coercion'?",
      options: [
        "Persuasion",
        "Force / Compulsion",
        "Negotiation",
        "Consensus"
      ],
      correctIndex: 1,
      explanation: "Correct! 'Coercion' (sự cưỡng chế, ép buộc) means compelling an adversary by threat or force, directly associated with hard power mechanisms."
    },
    {
      id: 5,
      subject: "Công pháp Quốc tế",
      question: "Hành vi bảo lưu điều ước quốc tế (Reservation) KHÔNG được chấp nhận trong trường hợp nào sau đây?",
      options: [
        "Điều ước quốc tế có nhiều hơn 10 quốc gia tham gia.",
        "Điều ước song phương giữa 2 quốc gia.",
        "Bảo lưu được đưa ra vào thời điểm nộp văn kiện phê chuẩn.",
        "Quốc gia khác gửi thông báo đồng ý với nội dung bảo lưu."
      ],
      correctIndex: 1,
      explanation: "Chính xác! Theo Công ước Viên 1969, bảo lưu chỉ được áp dụng đối với điều ước quốc tế đa phương. Đối với điều ước song phương, nếu một bên muốn thay đổi điều khoản thì phải tiến hành đàm phán lại từ đầu."
    },
    {
      id: 6,
      subject: "Nhập môn Quan hệ Quốc tế",
      question: "Theo quan điểm của Chủ nghĩa Hiện thực (Realism), mục tiêu tối thượng chi phối mọi hành vi của quốc gia là gì?",
      options: [
        "Thúc đẩy dân chủ và nhân quyền trên toàn cầu.",
        "Xây dựng các định chế quốc tế đa phương vững mạnh.",
        "Tìm kiếm quyền lực (Power) và bảo đảm an ninh sinh tồn (Survival).",
        "Tối đa hóa lợi nhuận kinh tế thông qua thương mại tự do."
      ],
      correctIndex: 2,
      explanation: "Chính xác! Đối với các nhà Hiện thực (như Morgenthau, Waltz), trong môi trường vô chính phủ, quốc gia hành động duy lý và luôn ưu tiên sống còn (survival) cùng quyền lực (power) lên hàng đầu."
    },
    {
      id: 7,
      subject: "Lịch sử Ngoại giao Việt Nam",
      question: "Nội dung nào sau đây thể hiện bản chất tư tưởng 'Ngoại vương nội đế' của các triều đại phong kiến Việt Nam?",
      options: [
        "Đối ngoại xưng Đế để dằn mặt phương Bắc, đối nội xưng Vương để thể hiện khiêm nhường.",
        "Đối ngoại chấp nhận xưng Vương nhận sắc phong để hòa hiếu, đối nội xưng Hoàng đế để khẳng định độc lập dân tộc.",
        "Khước từ hoàn toàn thể chế triều cống - sách phong của phương Bắc.",
        "Chỉ cử quan lại cấp thấp đi sứ sang Trung Quốc để hạ thấp vị thế thiên triều."
      ],
      correctIndex: 1,
      explanation: "Chính xác! Nhượng bộ cái 'danh' bên ngoài (xưng vương) để bảo vệ trọn vẹn cái 'thực' bên trong (xưng hoàng đế, làm chủ tuyệt đối đất nước)."
    },
    {
      id: 8,
      subject: "Công pháp Quốc tế",
      question: "Nhận định sau ĐÚNG hay SAI: 'Một quốc gia có thể viện dẫn hiến pháp hoặc luật nội bộ của mình để từ chối thực hiện nghĩa vụ trong điều ước quốc tế đã ký kết có hiệu lực?'",
      options: [
        "ĐÚNG, vì luật quốc gia có hiệu lực pháp lý cao hơn luật quốc tế trong phạm vi lãnh thổ.",
        "SAI, vì theo Điều 27 Công ước Viên 1969 và nguyên tắc Pacta sunt servanda, luật quốc nội không thể làm cái cớ từ chối nghĩa vụ điều ước.",
        "ĐÚNG, nếu Tòa án Tối cao của quốc gia đó tuyên bố điều ước vi hiến.",
        "SAI, nhưng chỉ áp dụng với các thành viên thường trực Hội đồng Bảo an."
      ],
      correctIndex: 1,
      explanation: "Chính xác! Điều 27 Công ước Viên 1969 quy định rõ: 'Một bên không thể viện dẫn những quy định trong pháp luật trong nước của mình làm lý do để không thi hành điều ước'."
    }
  ],

  // 5. NGÂN HÀNG DÀN Ý TỰ LUẬN ĐẠT ĐIỂM TỐI ĐA (Essay Blueprints)
  essays: [
    {
      id: "essay_1",
      subject: "Nhập môn Quan hệ Quốc tế",
      title: "Phân tích Song đề An ninh (Security Dilemma) trong Quan hệ Quốc tế. Liên hệ với cục diện cạnh tranh chiến lược Mỹ - Trung tại khu vực Châu Á - Thái Bình Dương.",
      difficulty: "Trọng điểm thi Giữa kỳ (Thường chiếm 4 - 5 điểm tự luận)",
      outline: {
        intro: "Giới thiệu khái niệm: Môi trường quan hệ quốc tế đặc trưng bởi tình trạng vô chính phủ (Anarchy). Khái niệm 'Song đề an ninh' do John Herz đề xuất năm 1950, sau đó được Robert Jervis phát triển, là một trong những nghịch lý cốt lõi giải thích nguyên nhân của các cuộc chạy đua vũ trang và xung đột quốc tế.",
        arguments: [
          {
            point: "1. Bản chất & Cơ chế vận hành của Song đề An ninh",
            detail: "Xuất phát từ 2 yếu tố: (a) Môi trường Anarchy buộc các nước phải tự lực cứu trợ (Self-help); (b) Ý đồ của quốc gia khác là không thể quan sát chắc chắn (Uncertainty of intentions). Khi nước A tăng chi tiêu quốc phòng vì mục đích tự vệ thuần túy, nước B lại suy đoán đây là hành động đe dọa tấn công. Nước B phản ứng bằng việc mua sắm vũ khí hoặc thành lập liên minh. Vòng xoáy này khiến cả hai nước tiêu tốn nguồn lực mà bất an lại tăng lên."
          },
          {
            point: "2. Biểu hiện cụ thể trong cạnh tranh chiến lược Mỹ - Trung",
            detail: "- Trung Quốc: Hiện đại hóa quân đội thần tốc, xây dựng chiến lược chống tiếp cận/khu vực phong tỏa (A2/AD) ở Biển Đông và eo biển Đài Loan nhằm bảo vệ không gian an ninh ven biển.\n- Phía Mỹ: Diễn giải hành động của Trung Quốc là đe dọa quyền tự do hàng hải và trật tự dựa trên luật lệ. Mỹ đáp trả bằng cách tái cân bằng lực lượng, tăng cường hiện diện quân sự, củng cố các cơ chế AUKUS, QUAD.\n- Kết quả: Khu vực rơi vào vòng xoáy gia tăng căng thẳng quân sự rõ rệt."
          },
          {
            point: "3. Các biện pháp xoa dịu Song đề An ninh",
            detail: "Cần xây dựng các biện pháp xây dựng lòng tin (CBMs), duy trì kênh liên lạc quân sự cấp cao, tuân thủ luật pháp quốc tế (UNCLOS 1982) và phát huy vai trò trung tâm của ASEAN thông qua các diễn đàn đa phương (ARF, ADMM+)."
          }
        ],
        conclusion: "Khẳng định: Song đề an ninh là quy luật phổ biến nhưng không phải định mệnh không thể tránh khỏi. Khả năng kiềm chế xung đột phụ thuộc vào sự khôn khéo ngoại giao, tính minh bạch chiến lược và các thể chế hợp tác đa phương."
      }
    },
    {
      id: "essay_2",
      subject: "Công pháp Quốc tế",
      title: "Phân tích Nguyên tắc Cấm dùng vũ lực hoặc đe dọa dùng vũ lực trong Quan hệ Quốc tế (Điều 2 khoản 4 Hiến chương LHQ) và các ngoại lệ hợp pháp.",
      difficulty: "Câu hỏi kinh điển bậc nhất môn Công pháp Quốc tế",
      outline: {
        intro: "Nêu vị trí: Đây là hòn đá tảng của trật tự an ninh quốc tế đương đại, mang giá trị quy phạm mệnh lệnh tối cao (Jus cogens). Nguyên tắc được ghi nhận tại Điều 2 khoản 4 Hiến chương LHQ 1945 và Tuyên bố 1970 của Đại hội đồng LHQ.",
        arguments: [
          {
            point: "1. Nội dung cốt lõi của nguyên tắc",
            detail: "Cấm mọi hành vi xâm lược, chiếm đóng lãnh thổ bất hợp pháp, sử dụng vũ lực vũ trang hoặc đe dọa vũ trang nhằm xâm phạm chủ quyền, toàn vẹn lãnh thổ hoặc nền độc lập chính trị của một quốc gia khác. Nghiêm cấm mọi hình thức 'tấn công phủ đầu' hoặc dùng vũ lực để giải quyết tranh chấp lãnh thổ."
          },
          {
            point: "2. Ngoại lệ 1: Quyền tự vệ chính đáng theo Điều 51 Hiến chương LHQ",
            detail: "- Điều kiện bắt buộc: Phải có 'một cuộc tấn công vũ trang xảy ra' trên thực tế (if an armed attack occurs).\n- Phải thông báo ngay lập tức cho Hội đồng Bảo an LHQ.\n- Hành động tự vệ phải đáp ứng 2 tiêu chuẩn tập quán quốc tế: Tính cần thiết (Necessity) và Tính cân xứng (Proportionality).\n- Quyền tự vệ chấm dứt khi HĐBA đã áp dụng các biện pháp cần thiết để duy trì hòa bình."
          },
          {
            point: "3. Ngoại lệ 2: Quyết định cưỡng chế của Hội đồng Bảo an LHQ theo Chương VII",
            detail: "Theo Điều 42 Hiến chương, khi có hành vi đe dọa hòa bình, phá hoại hòa bình hoặc xâm lược, sau khi các biện pháp phi vũ lực (cấm vận kinh tế, ngoại giao theo Điều 41) không hiệu quả, HĐBA có quyền quyết định triển khai các hành động quân sự chung của Liên Hợp Quốc."
          }
        ],
        conclusion: "Nhấn mạnh: Việc bảo đảm tuân thủ nghiêm ngặt nguyên tắc này và không lạm dụng các ngoại lệ là điều kiện tiên quyết để bảo vệ hòa bình thế giới và sự toàn vẹn chủ quyền của các quốc gia vừa và nhỏ."
      }
    },
    {
      id: "essay_3",
      subject: "Lịch sử Ngoại giao Việt Nam",
      title: "Phân tích Nghệ thuật Kết thúc Chiến tranh trong Danh dự của Cha Ông qua cuộc Kháng chiến chống Tống thời Lý (1077) và Khởi nghĩa Lam Sơn (1427).",
      difficulty: "Câu hỏi điểm 9-10 đòi hỏi tư duy tổng hợp sâu sắc",
      outline: {
        intro: "Giới thiệu truyền thống ngoại giao độc đáo của dân tộc: Đánh thắng giặc bằng quân sự là cần thiết, nhưng kết thúc chiến tranh bằng ngoại giao nhân đạo, giữ hòa hiếu lâu dài mới là đỉnh cao trí tuệ bang giao của Đại Việt.",
        arguments: [
          {
            point: "1. Cuộc kháng chiến chống Tống thời Lý (1077) - Lý Thường Kiệt",
            detail: "- Bối cảnh: Sau trận đánh then chốt bên sông Như Nguyệt, quân Tống của Quách Quỳ lâm vào thế cùng lực kiệt, dịch bệnh hoành hành nhưng chưa chịu rút quân vì sợ triều đình Tống xử phạt.\n- Hành động ngoại giao: Lý Thường Kiệt chủ động đề nghị 'nghị hòa', mở lối thoát danh dự cho Quách Quỳ đem tàn quân về nước.\n- Nghệ thuật: Không ham tiêu diệt sạch tàn quân, tránh làm hoàng đế Tống bẽ mặt dẫn đến chiến tranh phục thù kéo dài; nhanh chóng khôi phục quan hệ triều cống bình thường."
          },
          {
            point: "2. Khởi nghĩa Lam Sơn (1427) - Lê Lợi & Nguyễn Trãi",
            detail: "- Bối cảnh: Hơn 10 vạn quân Minh bị bao vây chặt trong thành Đông Quan sau khi viện binh Liễu Thăng bị chém đầu ở Chi Lăng.\n- Hội thề Đông Quan (12/1427): Lê Lợi và Nguyễn Trãi không trả thù tàn sát, mà tổ chức lễ thề kết thúc chiến tranh, cấp 500 thuyền và hàng ngàn ngựa chiến cùng lương thảo đầy đủ cho giặc về nước an toàn.\n- Tư tưởng chỉ đạo: 'Lấy chí nhân thay cường bạo, đem đại nghĩa thắng hung tàn'."
          },
          {
            point: "3. Ý nghĩa lịch sử và bài học đối ngoại đương đại",
            detail: "Ngoại giao nhân đạo thể hiện tầm nhìn chiến lược: Biết mình biết người, lấy hòa bình và an cư lạc nghiệp của nhân dân làm gốc. Bài học này là nguồn cảm hứng trực tiếp cho tư tưởng 'Ngoại giao cây tre' của Việt Nam ngày nay."
          }
        ],
        conclusion: "Tổng kết: Kết thúc chiến tranh trong danh dự cho đối phương là biểu tượng sáng ngời của văn hiến Đại Việt, chứng minh sức mạnh của một dân tộc yêu chuộng hòa bình nhưng bất khuất bảo vệ chủ quyền."
      }
    }
  ],

  // 6. PHÒNG THI THỬ (Mock Exams)
  mockExams: [
    {
      id: "mock_nhap_mon",
      subject: "Nhập môn Quan hệ Quốc tế",
      durationMinutes: 60,
      totalScore: 10,
      instructions: "Thể thức thi đóng. Thí sinh không được sử dụng tài liệu dưới bất kỳ hình thức nào.",
      questions: [
        {
          number: 1,
          score: 3.0,
          type: "Lý thuyết & Khái niệm",
          prompt: "Trình bày 4 tiêu chí cấu thành quốc gia theo Công ước Montevideo 1933. Tại sao trong bối cảnh toàn cầu hóa hiện nay, quốc gia vẫn là chủ thể trung tâm của quan hệ quốc tế?"
        },
        {
          number: 2,
          score: 3.0,
          type: "So sánh Lý luận",
          prompt: "So sánh quan điểm của Chủ nghĩa Hiện thực (Realism) và Chủ nghĩa Tự do (Liberalism) về: (a) Bản chất hệ thống quốc tế, (b) Khả năng hợp tác giữa các quốc gia."
        },
        {
          number: 3,
          score: 4.0,
          type: "Phân tích Tình huống",
          prompt: "Phân tích khái niệm 'Sức mạnh mềm' (Soft Power) của Joseph Nye. Nêu 02 ví dụ cụ thể về việc Việt Nam vận dụng sức mạnh mềm để nâng cao vị thế quốc tế trong thời gian qua."
        }
      ]
    },
    {
      id: "mock_cong_phap",
      subject: "Công pháp Quốc tế",
      durationMinutes: 60,
      totalScore: 10,
      instructions: "Thể thức thi đóng. Yêu cầu trích dẫn chính xác các điều khoản của Hiến chương LHQ và Công ước Viên 1969.",
      questions: [
        {
          number: 1,
          score: 3.0,
          type: "Nhận định Đúng/Sai có giải thích",
          prompt: "a) 'Mọi hành vi đe dọa hoặc sử dụng vũ lực qua biên giới đều là vi phạm pháp luật quốc tế mà không có bất kỳ ngoại lệ nào?'\nb) 'Một quốc gia có thể hủy bỏ điều ước quốc tế nếu quốc hội nước đó thông qua luật mới trái với điều ước đã ký?'"
        },
        {
          number: 2,
          score: 3.5,
          type: "Lý thuyết Nguồn luật",
          prompt: "Phân tích 2 yếu tố cấu thành Tập quán quốc tế theo quy định của Điều 38 Quy chế Tòa án Công lý Quốc tế (ICJ). Cho ví dụ minh họa."
        },
        {
          number: 3,
          score: 3.5,
          type: "Tình huống Pháp lý",
          prompt: "Quốc gia A và B cùng tham gia ký kết Điều ước đa phương X về bảo vệ môi trường biển. Quốc gia A đưa ra tuyên bố bảo lưu đối với Điều 15 của điều ước. Quốc gia B gửi công hàm phản đối bảo lưu của A nhưng không phản đối việc điều ước có hiệu lực giữa A và B. Hãy xác định hiệu lực pháp lý của Điều 15 giữa Quốc gia A và B theo Công ước Viên 1969."
        }
      ]
    }
  ],

  // 7. CHEAT SHEET TRA CỨU SIÊU TỐC (15 phút trước giờ thi)
  cheatSheet: {
    legalArticles: [
      { doc: "Hiến chương LHQ (UN Charter)", article: "Điều 2 khoản 4", content: "Nguyên tắc cấm dùng vũ lực hoặc đe dọa dùng vũ lực trong quan hệ quốc tế." },
      { doc: "Hiến chương LHQ", article: "Điều 51", content: "Quyền tự vệ chính đáng cá nhân hoặc tập thể khi bị tấn công vũ trang." },
      { doc: "Hiến chương LHQ", article: "Điều 42 Chương VII", content: "HĐBA quyết định biện pháp quân sự duy trì/khôi phục hòa bình an ninh quốc tế." },
      { doc: "Quy chế Tòa ICJ", article: "Điều 38", content: "Hệ thống 4 nguồn luật quốc tế (Điều ước, Tập quán, Nguyên tắc chung, Phán quyết/Học thuyết)." },
      { doc: "Công ước Viên 1969 (VCLT)", article: "Điều 19 - 23", content: "Chế định Bảo lưu điều ước quốc tế đa phương." },
      { doc: "Công ước Viên 1969 (VCLT)", article: "Điều 27", content: "Không được viện dẫn luật nội bộ để từ chối thực hiện nghĩa vụ điều ước quốc tế." },
      { doc: "Công ước Montevideo 1933", article: "Điều 1", content: "4 tiêu chí cấu thành quốc gia (Dân cư, Lãnh thổ, Chính phủ, Quan hệ quốc tế)." }
    ],
    historicalDiplomacy: [
      { year: "1075", figure: "Lý Thường Kiệt", event: "Tập kích Ung Châu - Khâm Châu; tư tưởng 'Tiên phát chế nhân' chủ động tự vệ." },
      { year: "1077", figure: "Lý Thường Kiệt", event: "Bài thơ thần 'Nam quốc sơn hà' trên sông Như Nguyệt & chủ động nghị hòa giữ thể diện cho Tống." },
      { year: "1258, 1285, 1288", figure: "Trần Hưng Đạo, Đỗ Khắc Chung", event: "Ngoại giao hoãn binh, bác bỏ 6 yêu sách của Hốt Tất Liệt; chủ động hòa giải sau trận Bạch Đằng." },
      { year: "1427", figure: "Lê Lợi, Nguyễn Trãi", event: "Ngoại giao tâm công (Quân trung từ mệnh tập) & Hội thề Đông Quan cấp thuyền ngựa cho quân Minh rút an toàn." },
      { year: "1473", figure: "Vua Lê Thánh Tông", event: "Sắc lệnh bảo vệ từng tấc đất biên cương: 'Kẻ nào đem một tấc đất Thái Tổ làm mồi cho giặc phải tru di'." },
      { year: "1789", figure: "Quang Trung, Ngô Thì Nhậm", event: "Đại thắng Đống Đa & Sách lược ngoại giao mềm mỏng hòa hoãn mừng thọ 80 tuổi vua Càn Long." }
    ],
    irTheories: [
      { theory: "Chủ nghĩa Hiện thực (Realism)", scholars: "Thucydides, Machiavelli, Hobbes, Morgenthau, Waltz", keyword: "Anarchy, Power, Survival, Zero-sum, Balance of Power" },
      { theory: "Chủ nghĩa Tự do (Liberalism)", scholars: "Locke, Kant, Wilson, Keohane, Nye", keyword: "Institutions, Interdependence, Democratic Peace, Positive-sum" },
      { theory: "Song đề An ninh (Security Dilemma)", scholars: "John Herz (1950), Robert Jervis", keyword: "Self-help, Spiral model, Uncertainty, Armed race" },
      { theory: "Sức mạnh Mềm (Soft Power)", scholars: "Joseph Nye (1990)", keyword: "Attraction, Persuasion, Culture, Political values, Foreign policy" }
    ]
  }
};
