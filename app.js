const profile = {
  realName: "张祖宁",
  name: "Sharpcaterpillar",
  github: "bestxiangest",
  university: "华东交通大学",
  major: "物联网工程",
  grade: "大三",
  company: "青岛华睿源科技有限公司",
  githubUrl: "https://github.com/bestxiangest",
  email: "13964140811@vip.163.com",
  musicUrl: "https://music.sharpcaterpillar.top/",
  phone: "13964140811",
  gpa: "3.86 / 5",
  rank: "4 / 60",
  cet4: "501",
};

const navItems = [
  { route: "about", code: "Ab", label: "about", icon: "◎" },
  { route: "achievements", code: "Ac", label: "achievements", icon: "★" },
  { route: "experience", code: "Ex", label: "experience", icon: "◇" },
  { route: "works", code: "Wo", label: "works", icon: "⌘" },
  { route: "stack", code: "St", label: "stack", icon: "⚙" },
  { route: "contact", code: "Ct", label: "contact", icon: "✦" },
];

const projects = [
  {
    index: "01",
    title: "Industrial ESH Inspection",
    badge: "COMPANY / PRIVATE",
    description: "公司无纸化系统的一部分。我主要做安全设备点检、安全隐患处理和总务巡检，也参与了权限、接口和巡检大屏的联调。",
    tags: ["Vue", "uni-app", "ThinkPHP", "MySQL", "Industrial IoT"],
    route: "esh-inspection",
    action: "Case study",
  },
  {
    index: "02",
    title: "VS Product Label Check",
    badge: "COMPANY / PRIVATE",
    description: "公司交给我的独立任务。PDA 依次扫描系统标签和自制标签，检查物料、箱号、P/N 与数量，并保存核对记录。",
    tags: ["uni-app Vue 3", "PDA", "REST API", "Barcode", "AI-assisted"],
    route: "label-check",
    action: "Case study",
  },
  {
    index: "03",
    title: "Intelligent Guide Cane",
    badge: "OPEN SOURCE",
    description: "以 ESP32-S3 为主控的智能导盲系统，做了本地避障、语音问答、步行导航、天气、GPS、小程序和 ESP32-CAM。",
    tags: ["C", "ESP32-S3", "Flask", "ASR / TTS", "Mini Program"],
    href: "https://github.com/bestxiangest/Intelligent-Guide-Cane",
    action: "Repository",
  },
  {
    index: "04",
    title: "PIXELBEAT",
    badge: "PRIVATE SOURCE / LIVE",
    description: "给自己做的像素风音乐站。支持歌单、搜索、私人 FM、歌词、评论、多音源播放和直连下载，也部署到了自己的 NAS。",
    tags: ["Vue 3", "Vite", "Pinia", "Express", "Docker / NAS"],
    href: "https://music.sharpcaterpillar.top/",
    action: "Live site",
  },
  {
    index: "05",
    title: "Qt Calendar",
    badge: "OPEN SOURCE",
    description: "用 Qt / C++ 写的桌面日历，可以看月历和全年视图、查询天气，也能把日程保存到本地 JSON 文件。",
    tags: ["C++", "Qt Widgets", "Qt Network", "JSON", "Desktop"],
    href: "https://github.com/bestxiangest/Qt-Calendar",
    action: "Repository",
  },
  {
    index: "06",
    title: "Infusion Alarm System",
    badge: "OPEN SOURCE",
    description: "从传感器采集一路做到云端和小程序的输液监测项目，包含 ESP32、ESP-NOW、华为云 IoTDA 和 Flask 大屏。",
    tags: ["ESP32", "ESP-NOW", "MQTT", "Huawei IoT", "Flask"],
    href: "https://github.com/bestxiangest/Intelligent-infusion-alarm-system",
    action: "Repository",
  },
  {
    index: "07",
    title: "TeamSync",
    badge: "OPEN SOURCE",
    description: "面向团队协作场景的项目管理系统，包含看板、子任务、评论、活动流、周期计划、日历、通知、文件协作与管理大屏。",
    tags: ["Java 21", "Spring Boot", "Vue 3", "PostgreSQL", "WebSocket"],
    href: "https://github.com/bestxiangest/TeamSync",
    action: "Repository",
  },
];

const certificates = [
  { src: "./assets/certificates/bluebridge-national-2025.webp", title: "蓝桥杯全国总决赛三等奖", meta: "国家级 · Python B 组 · 2025", group: "competition", featured: true },
  { src: "./assets/certificates/iot-east-2025.webp", title: "全国大学生物联网设计竞赛一等奖", meta: "华东赛区 · 2025", group: "competition", featured: true },
  { src: "./assets/certificates/bluebridge-jiangxi-2025.webp", title: "蓝桥杯江西赛区一等奖", meta: "省级 · Python B 组 · 2025", group: "competition", featured: true },
  { src: "./assets/certificates/computer-design-2024.webp", title: "中国大学生计算机设计大赛一等奖", meta: "江西省 · 2024", group: "competition", featured: true },
  { src: "./assets/certificates/computer-design-2025.webp", title: "中国大学生计算机设计大赛三等奖", meta: "江西省 · 2025", group: "competition" },
  { src: "./assets/certificates/ican-2024.webp", title: "iCAN 大学生创新创业大赛二等奖", meta: "江西赛区 · 2024", group: "competition" },
  { src: "./assets/certificates/ican-2025.webp", title: "iCAN 大学生创新创业大赛三等奖", meta: "江西赛区 · 2025", group: "competition" },
  { src: "./assets/certificates/acm-campus-2023.webp", title: "ACM“双基”程序设计竞赛三等奖", meta: "校级 · 2023", group: "competition" },
  { src: "./assets/certificates/iot-campus.webp", title: "“双基”物联网比赛一等奖", meta: "校级", group: "competition" },
  { src: "./assets/certificates/scholarship-2024.webp", title: "一等奖学金", meta: "2023—2024 学年", group: "honor" },
  { src: "./assets/certificates/scholarship-2025.webp", title: "一等奖学金", meta: "2024—2025 学年", group: "honor" },
  { src: "./assets/certificates/merit-student-2024.webp", title: "三好学生", meta: "2023—2024 学年", group: "honor" },
  { src: "./assets/certificates/merit-student-2025.webp", title: "三好学生", meta: "2024—2025 学年", group: "honor" },
  { src: "./assets/certificates/science-award-2024.webp", title: "科技活动奖", meta: "2023—2024 学年", group: "honor" },
  { src: "./assets/certificates/science-award-2025.webp", title: "科技活动奖", meta: "2024—2025 学年", group: "honor" },
];

const pageMeta = {
  hello: { title: "Hello World...", icon: "//", documentTitle: "Hello World" },
  about: { title: "// about", icon: "i", documentTitle: "About" },
  achievements: { title: "// achievements", icon: "★", documentTitle: "Achievements" },
  experience: { title: "// experience", icon: "◇", documentTitle: "Experience" },
  works: { title: "// works", icon: "↗", documentTitle: "Works" },
  stack: { title: "// stack", icon: "⚙", documentTitle: "Stack" },
  contact: { title: "// contact", icon: "+", documentTitle: "Contact" },
  "esh-inspection": { title: "// ESH inspection", icon: "01", documentTitle: "ESH Inspection Case Study" },
  "label-check": { title: "// label check", icon: "02", documentTitle: "Label Check Case Study" },
};

const main = document.querySelector("#main");
const menuButton = document.querySelector(".menu");
const menuLayer = document.querySelector(".menu-layer");
const menuOverlay = document.querySelector(".menu-layer__overlay");
const header = document.querySelector(".header");
const routeStatus = document.querySelector(".route-status");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let currentRoute = "hello";
let navigating = false;
let lastScrollY = 0;

function titleMarkup(route) {
  const { title, icon } = pageMeta[route];
  return `
    <h1 class="title-bar" data-title-target>
      <span class="title-bar__background" aria-hidden="true"></span>
      <span class="title-text" data-text="${title}" data-scramble="${title}">
        <span class="title-final">${title}</span>
        <span class="title-scramble" aria-hidden="true"></span>
      </span>
      <span class="title-icon" aria-hidden="true">${icon}</span>
    </h1>
  `;
}

function homeNavMarkup(item, index) {
  return `
    <li class="reveal" style="--order:${index}">
      <a class="element-box" href="#/${item.route}/" data-route="${item.route}">
        <span class="text"><b>${item.code}</b><small>${item.label}</small></span>
        <span class="element-icon" aria-hidden="true">${item.icon}</span>
      </a>
    </li>
  `;
}

function helloPage() {
  return `
    <section class="page page--hello" data-page="hello">
      <div class="container">
        <div class="home-inner">
          ${titleMarkup("hello")}
          <div class="reveal" style="--order:0">
            <p>
              I'm <a href="#/about/" data-route="about">${profile.realName} / ${profile.name},</a>
              ${profile.university}${profile.major}${profile.grade}学生。专业排名前 6.7%，做 AIoT、嵌入式和应用软件，
              也有一年的工业互联网实习经历。
            </p>
            <p>
              如果你在看保研材料，可以先看 <a href="#/achievements/" data-route="achievements">成绩与成果</a>；
              如果更关心开发能力，可以翻翻我的 <a href="#/works/" data-route="works">项目</a>
              和 <a href="#/experience/" data-route="experience">实习经历</a>。
            </p>
          </div>
          <hr class="page-rule" />
          <nav class="home-nav" aria-label="作品集栏目">
            <ul>${navItems.map(homeNavMarkup).join("")}</ul>
          </nav>
          <div class="contact-icons" aria-label="外部链接">
            <ul>
              <li><a href="${profile.githubUrl}" target="_blank" rel="noreferrer" aria-label="GitHub"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49l-.01-1.92c-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.4 9.4 0 0 1 12 6.91a9.4 9.4 0 0 1 2.5.35c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.59.69.49A10.24 10.24 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"/></svg></a></li>
              <li><a href="${profile.musicUrl}" target="_blank" rel="noreferrer" aria-label="PIXELBEAT 在线音乐站"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M9 18V5l10-2v13M9 9l10-2M6.5 21C4.57 21 3 19.88 3 18.5S4.57 16 6.5 16 10 17.12 10 18.5 8.43 21 6.5 21Zm10-2c-1.93 0-3.5-1.12-3.5-2.5s1.57-2.5 3.5-2.5 3.5 1.12 3.5 2.5-1.57 2.5-3.5 2.5Z"/></svg></a></li>
              <li><a href="mailto:${profile.email}" aria-label="电子邮件"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `;
}

function aboutPage() {
  return `
    <section class="page page--about" data-page="about">
      <div class="container">
        ${titleMarkup("about")}
        <div class="two-col">
          <div class="reveal" style="--order:0">
            <p>
              我是${profile.realName}，也用 ${profile.name} 这个名字写代码。目前在${profile.university}读${profile.major}，
              GPA ${profile.gpa}，专业排名 ${profile.rank}。研究和项目兴趣主要在 AIoT、边缘智能与软件工程。
            </p>
            <p>
              我习惯把项目从传感器、嵌入式固件一路做到服务端、网页或 App。
              现在用得比较多的是 <strong>STM32 / ESP32</strong>、Java、Qt、Vue、uni-app、Flask 与 Spring Boot。
            </p>
            <p>
              除了课程和开发，我还担任班级团支部书记、通信电子创新基地负责人，
              也参与新生帮扶与党支部组织工作。完整的 <a href="#/achievements/" data-route="achievements">竞赛、科研和荣誉</a> 单独整理在下一页。
            </p>
          </div>
          <div class="about-skills reveal" style="--order:1">
            <h2 class="section-heading">Skillset Breakdown</h2>
            <div class="focus-bars">
              <div class="focus-bar" style="--bar-width:92%"><b>Embedded / AIoT</b><strong>92.0%</strong></div>
              <div class="focus-bar" style="--bar-width:88%"><b>Full-stack Engineering</b><strong>88.0%</strong></div>
              <div class="focus-bar" style="--bar-width:86%"><b>Industrial Applications</b><strong>86.0%</strong></div>
              <div class="focus-bar" style="--bar-width:84%"><b>Vue / TypeScript</b><strong>84.0%</strong></div>
              <div class="focus-bar" style="--bar-width:82%"><b>Java / Spring Boot</b><strong>82.0%</strong></div>
              <div class="focus-bar" style="--bar-width:78%"><b>Qt / Desktop</b><strong>78.0%</strong></div>
            </div>
          </div>
        </div>
        <div class="identity-row reveal" style="--order:2">
          <div><span>School</span><strong>华东交通大学</strong></div>
          <div><span>Major</span><strong>物联网工程</strong></div>
          <div><span>GPA / Rank</span><strong>${profile.gpa} · ${profile.rank}</strong></div>
          <div><span>English</span><strong>CET-4 ${profile.cet4}</strong></div>
        </div>
      </div>
    </section>
  `;
}

function achievementsPage() {
  const featured = certificates.filter((item) => item.featured);
  const competitionCertificates = certificates.filter((item) => item.group === "competition");
  const honorCertificates = certificates.filter((item) => item.group === "honor");
  const certificateCard = (item, index, featuredCard = false) => `
    <button class="certificate-card${featuredCard ? " certificate-card--featured" : ""}" type="button"
      data-certificate data-src="${item.src}" data-title="${item.title}" data-meta="${item.meta}"
      aria-label="放大查看：${item.title}">
      <span class="certificate-card__image"><img src="${item.src}" alt="${item.title}证书" loading="lazy" decoding="async" /></span>
      <span class="certificate-card__copy"><small>${String(index + 1).padStart(2, "0")} / ${item.meta}</small><strong>${item.title}</strong></span>
      <b aria-hidden="true">＋</b>
    </button>`;

  return `
    <section class="page page--achievements" data-page="achievements">
      <div class="container">
        ${titleMarkup("achievements")}
        <div class="achievement-hero reveal" style="--order:0">
          <div>
            <span class="eyebrow">ACADEMIC RECORD / RESEARCH / HONORS</span>
            <h2>把成绩写在纸上，<br /><span>也把想法做成东西。</span></h2>
          </div>
          <div class="academic-scoreboard" aria-label="学业数据">
            <div><strong>${profile.gpa}</strong><span>GPA</span></div>
            <div><strong>${profile.rank}</strong><span>专业排名 · 前 6.7%</span></div>
            <div><strong>${profile.cet4}</strong><span>CET-4</span></div>
          </div>
        </div>

        <section class="award-showcase reveal" style="--order:1" aria-labelledby="award-showcase-title">
          <div class="award-showcase__intro">
            <span class="record-no">01 / SELECTED AWARDS</span>
            <h3 id="award-showcase-title">重点奖项</h3>
            <p>从程序设计、物联网系统到产品展示，我更看重把项目完整做出来，再带到赛场上接受检验。</p>
            <div class="award-counts">
              <div><strong>01</strong><span>国家级</span></div>
              <div><strong>06</strong><span>省区级</span></div>
              <div><strong>02</strong><span>校级</span></div>
            </div>
          </div>
          <div class="featured-certificates">
            ${featured.map((item, index) => certificateCard(item, index, true)).join("")}
          </div>
        </section>

        <div class="record-grid record-grid--compact">
          <article class="record-card reveal" style="--order:2">
            <span class="record-no">02 / RESEARCH OUTPUTS</span>
            <h3>科研与知识产权</h3>
            <div class="record-item">
              <span class="record-state">第一发明人 · 实质审查阶段</span>
              <h4>一种基于多源信息感知的智慧校园电子班牌系统及方法</h4>
              <p>发明专利申请 · CN 121747168 A · 2026</p>
            </div>
            <div class="record-item">
              <span class="record-state">核心开发 · 已登记</span>
              <h4>基于深度学习的智能驾驶路况障碍预警系统 V1.0</h4>
              <p>计算机软件著作权 · 2025SR1151542 · 2025</p>
            </div>
          </article>
          <article class="record-card reveal" style="--order:3">
            <span class="record-no">03 / CAMPUS HONORS</span>
            <h3>连续两学年的肯定</h3>
            <div class="honor-strip"><strong>一等奖学金</strong><span>2023—2025</span></div>
            <div class="honor-strip"><strong>三好学生</strong><span>2023—2025</span></div>
            <div class="honor-strip"><strong>科技活动奖</strong><span>2023—2025</span></div>
            <p class="record-note">三类荣誉均连续获得两学年。</p>
          </article>
        </div>

        <section class="certificate-archive reveal" style="--order:4">
          <div class="certificate-archive__head">
            <div><span class="record-no">04 / CERTIFICATE ARCHIVE</span><h3>证书档案</h3></div>
            <p>共 15 份材料。点击任意证书可以放大查看。</p>
          </div>
          <div class="certificate-group">
            <div class="certificate-group__label"><b>09</b><span>学科竞赛<br />Competitions</span></div>
            <div class="certificate-wall">${competitionCertificates.map((item, index) => certificateCard(item, index)).join("")}</div>
          </div>
          <div class="certificate-group">
            <div class="certificate-group__label"><b>06</b><span>奖学金与荣誉<br />Honors</span></div>
            <div class="certificate-wall">${honorCertificates.map((item, index) => certificateCard(item, index)).join("")}</div>
          </div>
        </section>

        <article class="leadership-band reveal" style="--order:5">
          <div><span class="record-no">05 / LEADERSHIP</span><h3>组织与实践</h3></div>
          <ul class="leadership-list">
            <li><b>团支部书记</b><span>物联网工程 2023-1 班</span></li>
            <li><b>通信电子创新基地负责人</b><span>培训、竞赛组织与项目辅导</span></li>
            <li><b>带班党员</b><span>计算机（ICT）2025-1 班</span></li>
            <li><b>组织委员</b><span>学院创新创业学生党支部</span></li>
          </ul>
        </article>
      </div>
      <dialog class="certificate-dialog" data-certificate-dialog>
        <button class="certificate-dialog__close" type="button" data-certificate-close aria-label="关闭证书预览">×</button>
        <figure><img src="" alt="" data-certificate-image /><figcaption><strong data-certificate-title></strong><span data-certificate-meta></span></figcaption></figure>
      </dialog>
    </section>
  `;
}

function experiencePage() {
  return `
    <section class="page page--experience" data-page="experience">
      <div class="container">
        ${titleMarkup("experience")}
        <div class="experience-head reveal" style="--order:0">
          <div>
            <span class="eyebrow">INDUSTRIAL INTERNET DEVELOPMENT INTERN</span>
            <h2>${profile.company}</h2>
          </div>
          <div class="experience-duration">ONE-YEAR INTERNSHIP<br />INDUSTRIAL INTERNET</div>
        </div>
        <p class="reveal" style="--order:1; margin-top:28px">
          在公司实习的一年里，我主要维护无纸化系统的 ESH 巡检模块。
          后来公司安排我做一套 VS 成品标签核对 APP，我在 AI 辅助下独立把 APP 搭了起来，并和现有 PC 端、后端一起联调。
        </p>
        <div class="experience-grid">
          <article class="experience-card reveal" style="--order:2">
            <span class="work-label">01 / ESH INSPECTION</span>
            <h3>无纸化系统 ESH 巡检模块</h3>
            <ul>
              <li>安全设备巡检：消防与环境设备任务、扫码点检和问题处理。</li>
              <li>安全隐患巡检：新增隐患、待改善问题，以及从登记到整改的处理流程。</li>
              <li>总务巡检：任务列表、开始巡检、问题记录与状态变更。</li>
              <li>处理权限入口、接口联调，并配合巡检 BI 大屏展示。</li>
            </ul>
          </article>
          <article class="experience-card reveal" style="--order:3">
            <span class="work-label">02 / PRODUCT LABEL CHECK</span>
            <h3>VS 成品标签核对 PDA APP</h3>
            <ul>
              <li>在 AI 辅助下独立完成新 APP，并接入现有 PC 管理端和后端。</li>
              <li>支持 BYD、GEELY、CHERY 标签规则和多系统标签场景。</li>
              <li>扫码时会检查系统标签、自制标签、数量和重复状态。</li>
              <li>实现任务恢复、提交、详情、语音、震动和硬件扫码头输入。</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  `;
}

function projectMarkup(project, index) {
  const tagName = project.href || project.route ? "a" : "article";
  const linkAttrs = project.route
    ? `href="#/${project.route}/" data-route="${project.route}" aria-label="${project.title} — ${project.action}"`
    : project.href
    ? `href="${project.href}" target="_blank" rel="noreferrer" aria-label="${project.title} — ${project.action}"`
    : "";
  return `
    <${tagName} class="project-card reveal" ${linkAttrs} style="--order:${index}">
      <div class="project-card__top">
        <span class="project-card__index">${project.index}</span>
        <span class="privacy-badge">${project.badge}</span>
      </div>
      <h2>${project.title}</h2>
      <p class="project-card__desc">${project.description}</p>
      <div class="project-card__bottom">
        <ul class="tag-list">${project.tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>
        ${project.href || project.route ? `<span class="project-card__action"><small>${project.action}</small> ↗</span>` : ""}
      </div>
    </${tagName}>
  `;
}

function worksPage() {
  return `
    <section class="page page--works" data-page="works">
      <div class="container">
        ${titleMarkup("works")}
        <div class="works-intro reveal" style="--order:0">
          <p>这里既有开源项目，也有公司项目和私有作品。公司项目新增了独立案例页，只讲业务、职责和技术实现，不公开内部代码与数据。</p>
          <a class="button-link" href="${profile.githubUrl}?tab=repositories" target="_blank" rel="noreferrer">Public repositories <span>↗</span></a>
        </div>
        <div class="project-grid">${projects.map(projectMarkup).join("")}</div>
      </div>
    </section>
  `;
}

function caseStudyPage(kind) {
  const isEsh = kind === "esh-inspection";
  const data = isEsh ? {
    route: "esh-inspection",
    eyebrow: "COMPANY PROJECT / INDUSTRIAL INSPECTION",
    title: "无纸化系统 ESH 巡检模块",
    role: "模块开发与维护",
    context: "青岛华睿源科技有限公司 · 工业互联网",
    summary: "将安全设备、安全隐患和总务巡检从纸面记录搬到移动端，让任务下发、现场扫码、问题登记、整改和看板统计能够接在一起。",
    facts: [["范围", "3 类巡检业务"], ["终端", "PC / APP / BI"], ["周期", "一年实习期间"]],
    sections: [
      ["我负责的部分", ["维护 ESH 巡检相关页面、接口与任务状态处理。", "参与安全设备点检、安全隐患登记与整改、总务巡检流程。", "配合权限入口、移动端扫码和巡检 BI 大屏联调。"]],
      ["业务怎么跑", ["PC 端配置任务和巡检对象。", "现场人员在移动端接单、扫码、记录结果或提交问题。", "问题进入后续处理流程，状态和结果回到管理端与 BI 看板。"]],
      ["技术与难点", ["Vue / uni-app 负责 PC 与移动端界面，ThinkPHP 和 MySQL 承接业务数据。", "现场网络、权限差异和历史数据让状态处理比普通表单更复杂。", "修改需要兼顾已有流程，联调时以真实后端返回为准。"]],
    ],
  } : {
    route: "label-check",
    eyebrow: "COMPANY PROJECT / PDA BARCODE WORKFLOW",
    title: "VS 成品标签核对 PDA APP",
    role: "独立完成移动端",
    context: "青岛华睿源科技有限公司 · 生产现场",
    summary: "给生产现场做的一套 PDA 标签核对工具。操作员依次扫描系统标签和自制标签，APP 按客户规则核对物料、箱号、P/N、数量与重复状态，并保存可追溯记录。",
    facts: [["客户规则", "BYD / GEELY / CHERY"], ["输入", "PDA 硬件扫码头"], ["反馈", "语音 / 震动 / 状态色"]],
    sections: [
      ["我负责的部分", ["在 AI 辅助下独立搭建 APP，并接入公司现有 PC 管理端与后端。", "实现任务领取、扫描核对、异常提示、任务恢复、提交和结果详情。", "处理硬件扫码头输入、连续扫描、语音提示与震动反馈。"]],
      ["业务怎么跑", ["管理端维护不同客户和标签类型的解析规则。", "PDA 获取任务后扫描系统标签，再扫描对应的自制标签。", "APP 完成字段比对、数量累计和重复检查，确认无误后提交记录。"]],
      ["技术与难点", ["uni-app / Vue 3 构建移动端，REST API 对接任务、规则和记录数据。", "不同客户二维码格式不一致，需要由配置驱动解析与比对。", "生产现场要求反馈直接、恢复可靠，失败时不能伪造完成状态。"]],
    ],
  };

  return `
    <section class="page page--case-study" data-page="${data.route}">
      <div class="container">
        ${titleMarkup(data.route)}
        <a class="case-back reveal" style="--order:0" href="#/works/" data-route="works">← 返回项目列表</a>
        <header class="case-hero reveal" style="--order:1">
          <div>
            <span class="eyebrow">${data.eyebrow}</span>
            <h2>${data.title}</h2>
            <p>${data.summary}</p>
          </div>
          <aside>
            <span>Role</span><strong>${data.role}</strong>
            <span>Context</span><strong>${data.context}</strong>
            <span>Source</span><strong>Private / No code link</strong>
          </aside>
        </header>
        <div class="case-facts reveal" style="--order:2">
          ${data.facts.map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("")}
        </div>
        <div class="case-sections">
          ${data.sections.map(([title, items], index) => `
            <article class="case-section reveal" style="--order:${index + 3}">
              <span>0${index + 1}</span><h3>${title}</h3>
              <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
            </article>`).join("")}
        </div>
        <div class="case-footer reveal" style="--order:6">
          <p>该项目为公司内部系统，页面内容仅说明本人参与的工作，不展示源代码、客户数据或内部界面。</p>
          <a class="button-link" href="mailto:${profile.email}">联系了解更多 <span>↗</span></a>
        </div>
      </div>
    </section>`;
}

function stackPage() {
  return `
    <section class="page page--stack" data-page="stack">
      <div class="container">
        ${titleMarkup("stack")}
        <p class="reveal" style="--order:0">下面这些技术都在项目里用过，熟悉程度不完全一样。我按用途分了组，找起来会比一长串 Logo 更方便。</p>
        <hr class="page-rule" />
        <div class="stack-grid">
          <article class="stack-group reveal" style="--order:1"><span>01</span><h2>Languages</h2><ul class="stack-list"><li>C</li><li>C++</li><li>Java</li><li>Python</li><li>JavaScript</li><li>TypeScript</li><li>PHP</li><li>SQL</li></ul></article>
          <article class="stack-group reveal" style="--order:2"><span>02</span><h2>Embedded &amp; IoT</h2><ul class="stack-list"><li>STM32</li><li>ESP32-S3</li><li>ESP8266</li><li>51 MCU</li><li>uC/OS-II</li><li>CubeMX / HAL</li><li>PlatformIO</li><li>NB-IoT</li><li>MQTT</li><li>ESP-NOW</li><li>I²C / SPI / UART</li></ul></article>
          <article class="stack-group reveal" style="--order:3"><span>03</span><h2>Web &amp; App</h2><ul class="stack-list"><li>Vue 3</li><li>Vite</li><li>Pinia</li><li>Vue Router</li><li>uni-app</li><li>Android Java / XML</li><li>Qt Widgets</li><li>微信小程序</li><li>Electron</li></ul></article>
          <article class="stack-group reveal" style="--order:4"><span>04</span><h2>Backend &amp; Data</h2><ul class="stack-list"><li>Flask</li><li>ThinkPHP 6</li><li>Express</li><li>REST API</li><li>Socket.IO</li><li>SSE</li><li>MySQL</li><li>SQLite</li><li>JSON</li><li>ECharts</li></ul></article>
          <article class="stack-group reveal" style="--order:5"><span>05</span><h2>AI &amp; Interaction</h2><ul class="stack-list"><li>OpenAI-compatible API</li><li>LLM Intent</li><li>百度 ASR / TTS</li><li>OpenCV</li><li>Playwright</li><li>Markdown</li><li>PDA Barcode</li><li>Voice / Vibration</li></ul></article>
          <article class="stack-group reveal" style="--order:6"><span>06</span><h2>Build &amp; Delivery</h2><ul class="stack-list"><li>Git / GitHub</li><li>GitLab</li><li>Docker</li><li>Compose</li><li>Nginx</li><li>NAS</li><li>CMake / Ninja</li><li>Gradle</li><li>HBuilderX</li><li>Linux</li></ul></article>
        </div>
        <div class="evidence reveal" style="--order:7">
          <h2>这些技术用在了哪里</h2>
          <ul class="evidence-list">
            <li><b>Qt</b><span>电子日历、天气网络请求和 JSON 日程持久化。</span></li>
            <li><b>Java</b><span>SmartIoT Android AI 物联网助手，包含流式对话、多模态附件和 SQLite。</span></li>
            <li><b>RTOS</b><span>基于 STM32F103 与 uC/OS-II 的多任务电梯调度课程设计。</span></li>
            <li><b>STM32</b><span>BearPi 智慧温室：传感器采集、LCD、NB-IoT AT 通信与分层固件。</span></li>
            <li><b>Vue</b><span>PIXELBEAT、TeamSync、工业 PC 管理端和巡检 BI 大屏。</span></li>
            <li><b>IoT</b><span>导盲杖、输液监测、智慧温室和数字孪生救援方向实践。</span></li>
          </ul>
        </div>
      </div>
    </section>
  `;
}

function contactPage() {
  return `
    <section class="page page--contact" data-page="contact">
      <div class="container">
        ${titleMarkup("contact")}
        <div class="contact-stage">
          <div class="contact-copy reveal" style="--order:0">
            <span class="eyebrow">POSTGRADUATE / INTERNSHIP / FULL-TIME</span>
            <h2>一起研究，<br /><span>一起做事。</span></h2>
            <p>我正在关注 AIoT、边缘智能和软件工程方向的保研机会，也欢迎实习、校招与项目交流。可以在邮件里简单说明来意，看到后会尽快回复。</p>
            <div class="availability">目前可通过邮件或 GitHub 联系</div>
          </div>
          <div class="contact-profile reveal" style="--order:1">
            <div class="contact-monogram"><span>ZN</span><small>SHARPCATERPILLAR</small></div>
            <dl>
              <div><dt>School</dt><dd>${profile.university}</dd></div>
              <div><dt>Major</dt><dd>${profile.major}</dd></div>
              <div><dt>Focus</dt><dd>AIoT · Edge Intelligence · Software</dd></div>
              <div><dt>Based in</dt><dd>Nanchang, China · UTC+8</dd></div>
            </dl>
          </div>
        </div>
        <a class="email-marquee reveal" style="--order:2" href="mailto:${profile.email}">
          <span>WRITE TO ME</span><strong>${profile.email}</strong><b>↗</b>
        </a>
        <div class="contact-cards reveal" style="--order:3">
          <a class="contact-card" href="${profile.githubUrl}" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49l-.01-1.92c-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.4 9.4 0 0 1 12 6.91a9.4 9.4 0 0 1 2.5.35c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.59.69.49A10.24 10.24 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"/></svg>
            <span><small>CODE &amp; PROJECTS</small><strong>GitHub / ${profile.github}</strong></span><b>↗</b>
          </a>
          <a class="contact-card" href="${profile.musicUrl}" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M9 18V5l10-2v13M9 9l10-2M6.5 21C4.57 21 3 19.88 3 18.5S4.57 16 6.5 16 10 17.12 10 18.5 8.43 21 6.5 21Zm10-2c-1.93 0-3.5-1.12-3.5-2.5s1.57-2.5 3.5-2.5 3.5 1.12 3.5 2.5-1.57 2.5-3.5 2.5Z"/></svg>
            <span><small>LIVE PRODUCT</small><strong>PIXELBEAT Music</strong></span><b>↗</b>
          </a>
          <a class="contact-card" href="tel:${profile.phone}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.3 3.7 9.4 7c.3.5.2 1.1-.2 1.5L7.8 9.9a14.2 14.2 0 0 0 6.3 6.3l1.4-1.4c.4-.4 1-.5 1.5-.2l3.3 2.1c.5.3.7.9.5 1.4l-.8 2.1c-.2.5-.7.8-1.2.8C10.1 21 3 13.9 3 5.2c0-.5.3-1 .8-1.2l2.1-.8c.5-.2 1.1 0 1.4.5Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span><small>PHONE</small><strong>${profile.phone}</strong></span><b>↗</b>
          </a>
        </div>
      </div>
    </section>
  `;
}

const renderers = {
  hello: helloPage,
  about: aboutPage,
  achievements: achievementsPage,
  experience: experiencePage,
  works: worksPage,
  stack: stackPage,
  contact: contactPage,
  "esh-inspection": () => caseStudyPage("esh-inspection"),
  "label-check": () => caseStudyPage("label-check"),
};

function rawRouteFromHash() {
  return window.location.hash.replace(/^#\//, "").replace(/\/$/, "");
}

function routeFromHash() {
  const route = rawRouteFromHash();
  return renderers[route] ? route : "hello";
}

function setPage(route) {
  main.innerHTML = renderers[route]();
  currentRoute = route;
  document.title = `${pageMeta[route].documentTitle} | Sharpcaterpillar`;
  routeStatus.textContent = `已进入 ${pageMeta[route].documentTitle} 页面`;
  document.querySelectorAll(".primary-nav [data-route]").forEach((link) => {
    link.classList.toggle("active", link.dataset.route === route);
  });
  window.scrollTo({ top: 0, behavior: "auto" });
}

function scrambleTitle(titleText) {
  const finalText = titleText.dataset.scramble;
  const layer = titleText.querySelector(".title-scramble");
  if (reducedMotion.matches) {
    titleText.classList.add("is-ready");
    return Promise.resolve();
  }

  const glyphs = "█▓▒░";
  const start = performance.now();
  const duration = 760;
  titleText.classList.add("is-decoding");

  return new Promise((resolve) => {
    function frame(now) {
      const progress = Math.min((now - start) / duration, 1);
      const revealed = Math.floor(progress * finalText.length);
      layer.textContent = [...finalText]
        .map((char, index) => {
          if (char === " " || index < revealed) return char;
          return glyphs[Math.floor(Math.random() * glyphs.length)];
        })
        .join("");

      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        layer.textContent = "";
        titleText.classList.remove("is-decoding");
        titleText.classList.add("is-ready");
        resolve();
      }
    }
    requestAnimationFrame(frame);
  });
}

function animateEnter() {
  const page = main.querySelector(".page");
  if (!page) return Promise.resolve();

  const background = page.querySelector(".title-bar__background");
  const titleText = page.querySelector(".title-text");
  const titleIcon = page.querySelector(".title-icon");
  const reveals = [...page.querySelectorAll(".reveal")];
  const rules = [...page.querySelectorAll(".page-rule")];
  const contactIcons = [...page.querySelectorAll(".contact-icons li")];
  const focusBars = [...page.querySelectorAll(".focus-bar")];

  if (reducedMotion.matches) {
    background.style.transform = "scaleX(1)";
    titleText.style.opacity = "1";
    titleText.classList.add("is-ready");
    reveals.forEach((item) => { item.style.opacity = "1"; item.style.transform = "none"; });
    rules.forEach((rule) => { rule.style.transform = "scaleX(1)"; });
    contactIcons.forEach((item) => { item.style.opacity = "1"; item.style.transform = "none"; });
    focusBars.forEach((bar) => { bar.style.opacity = "1"; bar.style.transform = "none"; });
    return Promise.resolve();
  }

  const animations = [];
  animations.push(background.animate(
    [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }],
    { duration: 500, easing: "cubic-bezier(.19,1,.22,1)", fill: "forwards" },
  ).finished.catch(() => undefined));

  animations.push(titleText.animate(
    [{ opacity: 0 }, { opacity: 1 }],
    { duration: 300, delay: 250, fill: "forwards" },
  ).finished.catch(() => undefined));
  window.setTimeout(() => scrambleTitle(titleText), 250);

  if (titleIcon) {
    titleIcon.animate(
      [{ opacity: 0, transform: "scale(.45)" }, { opacity: 1, transform: "scale(1)" }],
      { duration: 450, delay: 300, easing: "cubic-bezier(.19,1,.22,1)", fill: "forwards" },
    );
  }

  reveals.forEach((item, index) => {
    const declaredOrder = Number.parseInt(item.style.getPropertyValue("--order"), 10);
    const order = Number.isFinite(declaredOrder) ? declaredOrder : index;
    item.animate(
      [{ opacity: 0, transform: "translateY(50px)" }, { opacity: 1, transform: "translateY(0)" }],
      { duration: 500, delay: 100 + order * 85, easing: "cubic-bezier(.19,1,.22,1)", fill: "forwards" },
    );
  });

  rules.forEach((rule) => {
    rule.animate(
      [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }],
      { duration: 500, delay: 200, easing: "cubic-bezier(.19,1,.22,1)", fill: "forwards" },
    );
  });

  contactIcons.forEach((item, index) => {
    item.animate(
      [{ opacity: 0, transform: "translateY(50px)" }, { opacity: 1, transform: "translateY(0)" }],
      { duration: 500, delay: 550 + index * 100, easing: "cubic-bezier(.19,1,.22,1)", fill: "forwards" },
    );
  });

  focusBars.forEach((bar, index) => {
    const finalWidth = bar.style.getPropertyValue("--bar-width");
    bar.animate(
      [
        { width: "60px", opacity: 0, transform: "translateY(50px)" },
        { width: finalWidth, opacity: 1, transform: "translateY(0)" },
      ],
      { duration: 720, delay: 250 + index * 110, easing: "cubic-bezier(.19,1,.22,1)", fill: "forwards" },
    );
  });

  return Promise.all(animations);
}

function animateExit() {
  if (reducedMotion.matches) return Promise.resolve();

  const homePage = main.querySelector(".page--hello");
  if (homePage) {
    const title = homePage.querySelector(".title-bar");
    const copy = homePage.querySelector(".home-inner > .reveal");
    const rule = homePage.querySelector(".page-rule");
    const navItems = [...homePage.querySelectorAll(".home-nav li")];
    const contactItems = [...homePage.querySelectorAll(".contact-icons li")];
    const animations = [];
    const upFade = (item, delay, duration = 430) => {
      if (!item) return;
      animations.push(item.animate(
        [{ opacity: 1, transform: "translateY(0)" }, { opacity: 0, transform: "translateY(-50px)" }],
        { duration, delay, easing: "cubic-bezier(.77,0,.175,1)", fill: "forwards" },
      ).finished.catch(() => undefined));
    };

    upFade(title, 0);
    upFade(copy, 80);
    upFade(rule, 160);
    navItems.forEach((item, index) => upFade(item, 240 + index * 95));
    const contactStart = 240 + Math.max(navItems.length - 1, 0) * 95 + 350;
    contactItems.forEach((item, index) => upFade(item, contactStart + index * 90));
    return Promise.all(animations);
  }

  const items = [...main.querySelectorAll(".title-bar, .reveal, .page-rule, .contact-icons li, .focus-bar")];
  const animations = items.map((item, index) => item.animate(
    [{ opacity: 1, transform: "translateY(0)" }, { opacity: 0, transform: "translateY(-50px)" }],
    {
      duration: 420,
      delay: Math.min(index * 25, 150),
      easing: "cubic-bezier(.77,0,.175,1)",
      fill: "forwards",
    },
  ).finished.catch(() => undefined));
  return Promise.all(animations);
}

function createRouteClone(trigger) {
  if (!trigger || reducedMotion.matches) return null;
  const source = trigger.closest(".element-box");
  if (!source) return null;
  const rect = source.getBoundingClientRect();
  const icon = source.querySelector(".element-icon")?.textContent.trim() || "◇";
  const clone = document.createElement("div");
  clone.className = "route-clone";
  clone.innerHTML = `<span class="route-clone__icon">${icon}</span>`;
  Object.assign(clone.style, {
    left: `${rect.left}px`,
    top: `${rect.top}px`,
    width: `${rect.width}px`,
    height: `${rect.height}px`,
  });
  document.body.append(clone);
  return { element: clone, rect };
}

function animateRouteClone(cloneData) {
  if (!cloneData) return Promise.resolve();
  const target = main.querySelector("[data-title-target]");
  if (!target) {
    cloneData.element.remove();
    return Promise.resolve();
  }

  const targetRect = target.getBoundingClientRect();
  const { element, rect } = cloneData;
  const icon = element.querySelector(".route-clone__icon");
  target.style.borderLeftColor = "transparent";
  const move = element.animate(
    [
      { left: `${rect.left}px`, top: `${rect.top}px`, width: `${rect.width}px`, height: `${rect.height}px`, borderWidth: "3px", boxShadow: "0 3px 6px rgb(0 0 0 / 18%), 0 3px 6px rgb(0 0 0 / 24%)" },
      { left: `${targetRect.left}px`, top: `${targetRect.top}px`, width: "15px", height: `${targetRect.height}px`, borderWidth: "0", boxShadow: "none" },
    ],
    { duration: 600, easing: "cubic-bezier(.77,0,.175,1)", fill: "forwards" },
  );
  const iconMove = icon.animate(
    [{ opacity: 1, transform: "scale(1)" }, { opacity: 0, transform: "scale(.55)" }],
    { duration: 400, delay: 120, easing: "cubic-bezier(.19,1,.22,1)", fill: "forwards" },
  );

  return Promise.all([
    move.finished.catch(() => undefined),
    iconMove.finished.catch(() => undefined),
  ]).then(() => {
    target.style.borderLeftColor = "";
  }).finally(() => element.remove());
}

async function navigate(route, trigger = null, updateHistory = true) {
  if (!renderers[route] || navigating || route === currentRoute) {
    closeMenu();
    return;
  }

  navigating = true;
  const clone = createRouteClone(trigger);
  closeMenu(true);
  await animateExit();
  setPage(route);
  if (updateHistory) history.pushState({ route }, "", `#/${route}/`);
  await animateRouteClone(clone);
  await animateEnter();
  navigating = false;
}

function openMenu() {
  if (!menuLayer.hidden) return;
  menuLayer.hidden = false;
  menuButton.setAttribute("aria-expanded", "true");
  menuButton.setAttribute("aria-label", "关闭菜单");
  header.classList.add("menu-active");
  document.body.classList.add("menu-open");
  requestAnimationFrame(() => menuLayer.classList.add("active"));
}

function closeMenu(immediate = false) {
  if (menuLayer.hidden) return;
  menuLayer.classList.remove("active");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "打开菜单");
  header.classList.remove("menu-active");
  document.body.classList.remove("menu-open");

  if (immediate || reducedMotion.matches) {
    menuLayer.hidden = true;
  } else {
    window.setTimeout(() => {
      if (!menuLayer.classList.contains("active")) menuLayer.hidden = true;
    }, 430);
  }
}

function addRipple(event) {
  if (reducedMotion.matches) return;
  const target = event.target.closest("a, button");
  if (!target || target === menuOverlay) return;
  if (getComputedStyle(target).position === "static") target.style.position = "relative";
  const rect = target.getBoundingClientRect();
  const ripple = document.createElement("span");
  ripple.className = "ripple";
  ripple.style.left = `${event.clientX - rect.left}px`;
  ripple.style.top = `${event.clientY - rect.top}px`;
  target.append(ripple);
  ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
}

document.addEventListener("click", (event) => {
  const certificateButton = event.target.closest("[data-certificate]");
  if (certificateButton) {
    const dialog = document.querySelector("[data-certificate-dialog]");
    if (!dialog) return;
    const image = dialog.querySelector("[data-certificate-image]");
    image.src = certificateButton.dataset.src;
    image.alt = `${certificateButton.dataset.title}证书`;
    dialog.querySelector("[data-certificate-title]").textContent = certificateButton.dataset.title;
    dialog.querySelector("[data-certificate-meta]").textContent = certificateButton.dataset.meta;
    dialog.showModal();
    return;
  }

  const closeButton = event.target.closest("[data-certificate-close]");
  if (closeButton) {
    closeButton.closest("dialog")?.close();
    return;
  }

  if (event.target.matches("[data-certificate-dialog]")) {
    event.target.close();
    return;
  }

  const routeLink = event.target.closest("[data-route]");
  if (!routeLink) return;
  event.preventDefault();
  navigate(routeLink.dataset.route, routeLink);
});

document.addEventListener("pointerdown", addRipple);

menuButton.addEventListener("click", () => {
  if (menuLayer.hidden) openMenu();
  else closeMenu();
});

menuOverlay.addEventListener("click", () => closeMenu());

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

function handleLocationChange() {
  const route = routeFromHash();
  if (!renderers[rawRouteFromHash()]) {
    history.replaceState({ route }, "", `#/${route}/`);
  }
  if (route !== currentRoute) navigate(route, null, false);
}

window.addEventListener("popstate", handleLocationChange);
window.addEventListener("hashchange", handleLocationChange);

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  header.classList.toggle("shadow", y > 20);
  header.classList.toggle("hide", y > lastScrollY && y > 120 && menuLayer.hidden);
  lastScrollY = y;
}, { passive: true });

async function boot() {
  const route = routeFromHash();
  if (!renderers[rawRouteFromHash()]) {
    history.replaceState({ route }, "", `#/${route}/`);
  }
  setPage(route);
  await new Promise((resolve) => window.setTimeout(resolve, reducedMotion.matches ? 40 : 520));
  document.body.classList.remove("is-loading");
  document.body.classList.add("ready");
  animateEnter();
}

boot();
