const profile = {
  realName: "张祖宁",
  name: "Sharpcaterpillar",
  github: "bestxiangest",
  university: "华东交通大学",
  major: "物联网工程",
  grade: "2027 届",
  company: "青岛华睿源科技有限公司",
  role: "软件开发实习生",
  githubUrl: "https://github.com/bestxiangest",
  email: "13964140811@vip.163.com",
  musicUrl: "https://nas.lovezzn.com:13149",
  phone: "13964140811",
  gpa: "3.86 / 5",
  rank: "4 / 60",
  cet4: "501",
  party: "中共党员",
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
    title: "VS Product Label Check",
    badge: "COMPANY / PRIVATE",
    description: "主导制造业成品标签核对系统：ThinkPHP 6 后端 + Vue 3 PC 管理端 + uni-app PDA，覆盖 BYD / CHERY / GEELY 产线规则、扫码核对、任务追溯与导出闭环。",
    tags: ["ThinkPHP 6", "Vue 3", "uni-app", "MySQL", "PDA"],
    route: "label-check",
    action: "Case study",
  },
  {
    index: "02",
    title: "Industrial ESH Inspection",
    badge: "COMPANY / PRIVATE",
    description: "无纸化系统 ESH 巡检模块升级与维护：设备点检计划/任务/问题、隐患排查、节假日与邮件配置，以及巡检 BI 大屏状态筛选与导出联调。",
    tags: ["Vue 3", "ThinkPHP 6", "MySQL", "BI Dashboard", "Element Plus"],
    route: "esh-inspection",
    action: "Case study",
  },
  {
    index: "03",
    title: "TeamSync",
    badge: "OPEN SOURCE",
    description: "团队协作与项目管理系统：项目看板、周期计划、站内通知 + 邮件、附件与工作台统计；参与后端模块拆分、接口实现与前端看板联调。",
    tags: ["Java 21", "Spring Boot 3", "Vue 3", "PostgreSQL", "WebSocket"],
    href: "https://github.com/bestxiangest/TeamSync",
    action: "Repository",
  },
  {
    index: "04",
    title: "Intelligent Guide Cane",
    badge: "OPEN SOURCE / AWARD",
    description: "《聆途睿行》智慧导盲系统：端侧 ESP32-S3 + 云端 Flask/Qwen 语音中枢 + 小程序监护；获全国大学生物联网设计竞赛华东赛区一等奖。",
    tags: ["ESP32-S3", "Flask", "Qwen", "ASR / TTS", "Mini Program"],
    href: "https://github.com/bestxiangest/Intelligent-Guide-Cane",
    action: "Repository",
  },
  {
    index: "05",
    title: "Campus Second-hand Platform",
    badge: "COURSE / PRACTICE",
    description: "校园二手交易 REST 服务：用户、商品、交易、消息与评价模块拆分；JWT 鉴权、分页筛选、上传与统一错误处理，沉淀接口设计与联调经验。",
    tags: ["Flask", "MySQL", "SQLAlchemy", "JWT", "REST API"],
    action: "Practice project",
  },
  {
    index: "06",
    title: "PIXELBEAT",
    badge: "PRIVATE SOURCE / LIVE",
    description: "自研像素风在线音乐站：歌单、搜索、私人 FM、歌词、评论、多音源播放与直链下载；Vue 3 全栈自托管于 NAS 并对外可访问。",
    tags: ["Vue 3", "Vite", "Pinia", "Express", "Docker / NAS"],
    href: "https://nas.lovezzn.com:13149",
    action: "Live site",
  },
  {
    index: "07",
    title: "Qt Calendar",
    badge: "OPEN SOURCE",
    description: "基于 Qt / C++ 的桌面日历：月历与全年视图、天气查询，以及本地 JSON 日程持久化。",
    tags: ["C++", "Qt Widgets", "Qt Network", "JSON", "Desktop"],
    href: "https://github.com/bestxiangest/Qt-Calendar",
    action: "Repository",
  },
  {
    index: "08",
    title: "Infusion Alarm System",
    badge: "OPEN SOURCE",
    description: "端到云输液监测链路：ESP32 采集与 ESP-NOW 组网、华为云 IoTDA 上云，Flask 大屏与小程序联动。",
    tags: ["ESP32", "ESP-NOW", "MQTT", "Huawei IoT", "Flask"],
    href: "https://github.com/bestxiangest/Intelligent-infusion-alarm-system",
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
  "label-check": { title: "// label check", icon: "01", documentTitle: "Label Check Case Study" },
  "esh-inspection": { title: "// ESH inspection", icon: "02", documentTitle: "ESH Inspection Case Study" },
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
              ${profile.university}${profile.major}${profile.grade}，专业排名前 6.7%。
              路线偏软件：全栈、Java 后端与 AI 应用为主，AIoT / 嵌入式作硬实力补充；
              目前在${profile.company}做${profile.role}。
            </p>
            <p>
              写业务时习惯把链路做完整——需求拆解、接口与表结构、前后端联调、测试与上线。
              也会把 Claude Code / Codex / OpenCode 等 AI Agent 放进正式工具链：先写清边界和验收，
              再让 Agent 分步出草案与改写；状态流转、权限与数据一致性仍由自己审查拍板。
            </p>
            <p>
              想看交付能力，直接看 <a href="#/works/" data-route="works">项目</a>
              和 <a href="#/experience/" data-route="experience">实习</a>；
              成绩、竞赛与知识产权在 <a href="#/achievements/" data-route="achievements">成果页</a>。
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
              我是${profile.realName}，代码世界里多用 ${profile.name}。${profile.university}${profile.major}${profile.grade}，
              GPA ${profile.gpa}，专业排名 ${profile.rank}，${profile.party}。
              求职与成长方向：软件开发、全栈工程、Java 后端与 AI 应用；硬件与 AIoT 能从端侧联到云。
            </p>
            <p>
              企业侧做过制造业标签核对系统的全栈交付，也维护过巡检业务的生产问题；
              课程与开源侧用 Spring Boot、Vue、Flask 把权限、状态流转与接口工程化做扎实。
              高频栈：<strong>Java / Spring Boot</strong>、Vue 3 / TypeScript、uni-app、ThinkPHP、Flask，以及 ESP32 / STM32。
            </p>
            <p>
              学业与开发之外，担任班级团支部书记、通信电子创新基地负责人（组织软硬件培训与竞赛推进），
              并参与带班党员与党支部工作。竞赛、科研与荣誉详见
              <a href="#/achievements/" data-route="achievements">成果页</a>。
            </p>
          </div>
          <div class="about-skills reveal" style="--order:1">
            <h2 class="section-heading">Skillset Breakdown</h2>
            <div class="focus-bars">
              <div class="focus-bar" style="--bar-width:92%"><b>Full-stack Engineering</b><strong>92.0%</strong></div>
              <div class="focus-bar" style="--bar-width:90%"><b>Java / Spring Boot</b><strong>90.0%</strong></div>
              <div class="focus-bar" style="--bar-width:88%"><b>Vue / TypeScript</b><strong>88.0%</strong></div>
              <div class="focus-bar" style="--bar-width:86%"><b>Industrial Applications</b><strong>86.0%</strong></div>
              <div class="focus-bar" style="--bar-width:84%"><b>Embedded / AIoT</b><strong>84.0%</strong></div>
              <div class="focus-bar" style="--bar-width:82%"><b>AI Agent Workflow</b><strong>82.0%</strong></div>
            </div>
          </div>
        </div>
        <div class="identity-row reveal" style="--order:2">
          <div><span>School</span><strong>华东交通大学</strong></div>
          <div><span>Major</span><strong>物联网工程 · ${profile.grade}</strong></div>
          <div><span>GPA / Rank</span><strong>${profile.gpa} · ${profile.rank}</strong></div>
          <div><span>Target</span><strong>软件 / 全栈 / Java</strong></div>
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
            <h2>成绩有据可查，<br /><span>想法落地成物。</span></h2>
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
            <p>程序设计、业务系统与 AIoT 链路——先把工程跑通，再上赛场与生产现场检验。</p>
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
              <span class="record-state">第一发明人 · 已公布 · 尚未授权</span>
              <h4>一种基于多源信息感知的智慧校园电子班牌系统及方法</h4>
              <p>发明专利申请 · 申请号 202511818264.2 · 公布号 CN 121747168 A · 2025.12 申请 / 2026.03 公布</p>
            </div>
            <div class="record-item">
              <span class="record-state">核心开发 · 已登记</span>
              <h4>基于深度学习的智能驾驶路况障碍预警系统 V1.0</h4>
              <p>计算机软件著作权 · 2025SR1151542 · 2025</p>
            </div>
          </article>
          <article class="record-card reveal" style="--order:3">
            <span class="record-no">03 / CAMPUS HONORS</span>
            <h3>连续两学年的认可</h3>
            <div class="honor-strip"><strong>一等奖学金</strong><span>2023—2025</span></div>
            <div class="honor-strip"><strong>三好学生</strong><span>2023—2025</span></div>
            <div class="honor-strip"><strong>科技活动奖</strong><span>2023—2025</span></div>
            <p class="record-note">三类荣誉均连续两学年获得。</p>
          </article>
        </div>

        <section class="certificate-archive reveal" style="--order:4">
          <div class="certificate-archive__head">
            <div><span class="record-no">04 / CERTIFICATE ARCHIVE</span><h3>证书档案</h3></div>
            <p>共 15 份材料。点击任一证书可放大查看。</p>
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
            <li><b>通信电子创新基地负责人</b><span>2024.09 — 至今 · 软硬件培训与竞赛推进；协助基地获国家级 2 项、省级 7 余项</span></li>
            <li><b>带班党员</b><span>计算机（ICT）2025-1 班 · 2025 级</span></li>
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
            <span class="eyebrow">SOFTWARE DEVELOPMENT INTERN</span>
            <h2>${profile.company}</h2>
          </div>
          <div class="experience-duration">2026.06 — PRESENT<br />${profile.role.toUpperCase()}</div>
        </div>
        <p class="reveal" style="--order:1; margin-top:28px">
          在制造业无纸化系统上，主导 VS 成品标签核对系统（后端 / PC / PDA 全栈），
          并参与 ESH 巡检模块的结构升级与持续维护（设备点检、隐患排查、BI 大屏与邮件通知）；
          日常结合 AI Agent 提效，上线决策仍坚持人工审查。
        </p>
        <div class="experience-grid">
          <article class="experience-card reveal" style="--order:2">
            <span class="work-label">01 / PRODUCT LABEL CHECK</span>
            <h3>VS 成品标签核对系统（主导）</h3>
            <ul>
              <li>独立负责 ThinkPHP 6 后端、Vue 3/TS PC 管理端、uni-app PDA 与 MySQL 数据层。</li>
              <li>对接 BYD / CHERY / GEELY 规则：物料编码、HU/箱号、P/N、数量多维比对与累加校验。</li>
              <li>设计规则、任务、核对记录等核心表；完成导入导出、App 鉴权、扫码校验与任务提交。</li>
              <li>PDA 支持相机/手动/硬件扫码头与语音震动反馈；完成测试服与生产联调及部署文档。</li>
            </ul>
          </article>
          <article class="experience-card reveal" style="--order:3">
            <span class="work-label">02 / ESH INSPECTION</span>
            <h3>无纸化系统 ESH 巡检（升级 + 维护）</h3>
            <ul>
              <li>参与 PC 端 ESH 路由与菜单重构：设备管理、点检计划/任务/问题、排查管理与节假日设置。</li>
              <li>隐患列表支持安全/消防/环境多类型接口与导出，补齐隐患类型筛选与责任人检索。</li>
              <li>后端联调巡检任务调度、问题状态流转、验收权限与安全邮件（含隐患类型字段）。</li>
              <li>巡检 BI 大屏：未完成数据、状态筛选映射、部门导出与多端联调验证。</li>
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
          <p>以软件交付为主线：企业业务系统、Java/Vue 全栈、自研 Web 产品，辅以 AIoT 竞赛与嵌入式开源。企业项目另设案例页，只写职责与实现要点，不公开内部代码与数据。</p>
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
    eyebrow: "COMPANY PROJECT / INDUSTRIAL ESH",
    title: "无纸化系统 ESH 巡检模块",
    role: "模块升级与持续维护",
    context: "青岛华睿源科技有限公司 · 软件开发实习",
    summary: "ESH（Environment / Safety / Health）巡检是无纸化系统中的安全业务域：覆盖设备台账、点检计划与任务、设备问题闭环、隐患排查，以及 BI 大屏与邮件通知。本人参与模块结构升级，并在生产环境持续维护。",
    facts: [["业务域", "设备点检 + 隐患排查"], ["终端", "PC 管理端 / BI"], ["栈", "Vue 3 + ThinkPHP 6"]],
    sections: [
      ["我负责的部分", [
        "参与 PC 端 ESH 菜单与路由升级：设备管理（基础设备 / 点检计划 / 节假日 / 点检任务 / 设备问题）、排查管理（日常/专项隐患）。",
        "隐患列表按安全 / 消防 / 环境切换接口与导出，补齐隐患类型、责任人等筛选维度。",
        "后端侧联调巡检任务调度（InsTask）、问题模型状态流转、验收权限与安全邮件（邮件正文纳入隐患类型）。",
        "巡检 BI 大屏：未完成隐患列表、状态筛选映射、部门维度导出与接口联调。",
      ]],
      ["业务怎么跑", [
        "管理端维护消防 / 环境等设备台账与点检计划，可配置节假日规则。",
        "系统按计划生成点检任务；现场执行后回写结果，异常进入设备问题闭环。",
        "隐患排查支持登记、处理、验收；大屏按状态聚合展示，邮件用于安全通知触达。",
      ]],
      ["技术与难点", [
        "在既有 ThinkPHP 6 + Vue 3 工业系统上做结构升级，需兼容历史权限、旧 URL 重定向与多类型隐患接口。",
        "大屏状态枚举与业务库 status 不完全一一对应，筛选与导出逻辑要单独映射。",
        "改动面向生产：任务完成态、验收权限与邮件内容以后端真实数据为准，避免前端伪造。",
      ]],
    ],
  } : {
    route: "label-check",
    eyebrow: "COMPANY PROJECT / FULL-STACK DELIVERY",
    title: "VS 成品标签核对系统",
    role: "主导全栈交付",
    context: "青岛华睿源科技有限公司 · 生产现场",
    summary: "面向汽车零部件产线的标签质量核对系统：规则配置、扫码核对、任务提交、记录追溯与导出闭环，覆盖 BYD / CHERY / GEELY 三条客户规则。",
    facts: [["客户规则", "BYD / CHERY / GEELY"], ["端侧", "PC 管理端 + PDA"], ["数据", "6 张核心业务表"]],
    sections: [
      ["我负责的部分", ["独立负责 ThinkPHP 6 后端、Vue 3/TS PC 管理端、uni-app Vue 3 PDA 与 MySQL。", "设计规则、GEELY 箱号池、导入批次、任务、核对记录与系统标签明细等表结构。", "完成规则 CRUD、Excel/PDF 导入、记录详情/导出、App 鉴权、扫码校验与任务提交。", "PDA 支持相机扫码 / 手动输入 / 硬件扫码头，以及语音震动反馈与未完成任务恢复。"]],
      ["业务怎么跑", ["管理端维护客户标签解析规则与导入数据。", "PDA 初始化任务后依次扫描系统标签与自制标签。", "多维比对物料编码、HU/箱号、P/N 与数量；支持累加、重复拦截与数量错误二次确认。", "提交后以后端返回为完成态，记录可追溯、可导出。"]],
      ["技术与难点", ["配置驱动解析，兼容多客户二维码格式与多系统标签场景。", "GEELY PDF 箱号池导入、扫码核销与任务取消回退需保证状态一致。", "产线要求反馈即时、恢复可靠；AI 辅助开发后仍对权限边界与数据一致性做人工验收。"]],
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
          <p>本项目为公司内部系统。本页仅说明本人参与的工作范围与实现要点，不展示源代码、客户数据或内部界面。</p>
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
        <p class="reveal" style="--order:0">以下技术均在真实项目中使用过，熟练度因场景而异。按软件交付优先排序，硬件与 AIoT 作为可落地补充。</p>
        <hr class="page-rule" />
        <div class="stack-grid">
          <article class="stack-group reveal" style="--order:1"><span>01</span><h2>Languages</h2><ul class="stack-list"><li>Java</li><li>Python</li><li>PHP</li><li>JavaScript</li><li>TypeScript</li><li>C / C++</li><li>SQL</li></ul></article>
          <article class="stack-group reveal" style="--order:2"><span>02</span><h2>Backend &amp; Data</h2><ul class="stack-list"><li>Spring Boot 3</li><li>MyBatis-Plus</li><li>ThinkPHP 6</li><li>Flask</li><li>Express</li><li>MySQL</li><li>PostgreSQL</li><li>Redis</li><li>JWT / Token</li><li>REST API</li><li>WebSocket</li></ul></article>
          <article class="stack-group reveal" style="--order:3"><span>03</span><h2>Web &amp; App</h2><ul class="stack-list"><li>Vue 3</li><li>Vite</li><li>TypeScript</li><li>Element Plus</li><li>Pinia</li><li>uni-app</li><li>微信小程序</li><li>ECharts</li><li>Qt Widgets</li><li>Android Java</li></ul></article>
          <article class="stack-group reveal" style="--order:4"><span>04</span><h2>AI Engineering</h2><ul class="stack-list"><li>Claude Code / Codex</li><li>OpenCode</li><li>Qwen Intent</li><li>Tool Calling</li><li>百度 ASR / TTS</li><li>OpenAI-compatible API</li><li>OpenCV</li></ul></article>
          <article class="stack-group reveal" style="--order:5"><span>05</span><h2>AIoT &amp; Hardware</h2><ul class="stack-list"><li>ESP32-S3</li><li>STM32</li><li>MQTT</li><li>ESP-NOW</li><li>NB-IoT</li><li>I²C / SPI / UART</li><li>PlatformIO</li><li>CubeMX / HAL</li></ul></article>
          <article class="stack-group reveal" style="--order:6"><span>06</span><h2>Build &amp; Delivery</h2><ul class="stack-list"><li>Git / GitHub</li><li>Linux</li><li>Docker</li><li>Nginx</li><li>NAS</li><li>HBuilderX</li><li>CMake</li><li>Playwright</li></ul></article>
        </div>
        <div class="evidence reveal" style="--order:7">
          <h2>这些技术用在了哪里</h2>
          <ul class="evidence-list">
            <li><b>Java / Spring Boot</b><span>TeamSync：权限、看板任务、通知提醒、附件与工作台统计。</span></li>
            <li><b>ThinkPHP + Vue + uni-app</b><span>标签核对系统与 ESH 巡检：企业业务闭环与生产联调。</span></li>
            <li><b>Flask / JWT</b><span>导盲系统云端中枢、校园二手交易 REST 与统一鉴权。</span></li>
            <li><b>Vue 3</b><span>PIXELBEAT、TeamSync 前端、工业 PC 管理端与 BI 大屏。</span></li>
            <li><b>AI Agent</b><span>需求拆解、代码生成与重构联调；关键路径人工审查验收。</span></li>
            <li><b>AIoT</b><span>导盲杖、输液监测等端云协同；补齐从设备到应用的完整链路。</span></li>
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
        <div class="contact-hero reveal" style="--order:0">
          <div class="contact-hero__copy">
            <span class="eyebrow">INTERNSHIP / FULL-TIME / COLLAB</span>
            <h2>有事可以说，<br /><span>有空会回。</span></h2>
            <p>
              正在寻找软件开发、全栈、Java 后端与 AI 应用方向的实习 / 校招机会；
              也欢迎开源协作与项目交流。邮件写清来意即可，收到后会尽快回复。
            </p>
            <div class="availability">邮件 / GitHub 优先</div>
          </div>
          <aside class="contact-meta" aria-label="基本信息">
            <div class="contact-meta__brand">
              <b>ZN</b>
              <div>
                <strong>${profile.realName}</strong>
                <small>${profile.name}</small>
              </div>
            </div>
            <dl>
              <div><dt>School</dt><dd>${profile.university}</dd></div>
              <div><dt>Major</dt><dd>${profile.major} · ${profile.grade}</dd></div>
              <div><dt>Focus</dt><dd>Full-stack · Java · AI</dd></div>
              <div><dt>Based in</dt><dd>Nanchang · UTC+8</dd></div>
            </dl>
          </aside>
        </div>
        <a class="email-marquee reveal" style="--order:1" href="mailto:${profile.email}">
          <span>WRITE TO ME</span>
          <strong>${profile.email}</strong>
          <b aria-hidden="true">↗</b>
        </a>
        <div class="contact-cards reveal" style="--order:2">
          <a class="contact-card" href="${profile.githubUrl}" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49l-.01-1.92c-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.4 9.4 0 0 1 12 6.91a9.4 9.4 0 0 1 2.5.35c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.59.69.49A10.24 10.24 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"/></svg>
            <span><small>CODE &amp; PROJECTS</small><strong>GitHub / ${profile.github}</strong></span>
            <b aria-hidden="true">↗</b>
          </a>
          <a class="contact-card" href="${profile.musicUrl}" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M9 18V5l10-2v13M9 9l10-2M6.5 21C4.57 21 3 19.88 3 18.5S4.57 16 6.5 16 10 17.12 10 18.5 8.43 21 6.5 21Zm10-2c-1.93 0-3.5-1.12-3.5-2.5s1.57-2.5 3.5-2.5 3.5 1.12 3.5 2.5-1.57 2.5-3.5 2.5Z"/></svg>
            <span><small>LIVE PRODUCT</small><strong>PIXELBEAT Music</strong></span>
            <b aria-hidden="true">↗</b>
          </a>
          <a class="contact-card" href="tel:${profile.phone}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.3 3.7 9.4 7c.3.5.2 1.1-.2 1.5L7.8 9.9a14.2 14.2 0 0 0 6.3 6.3l1.4-1.4c.4-.4 1-.5 1.5-.2l3.3 2.1c.5.3.7.9.5 1.4l-.8 2.1c-.2.5-.7.8-1.2.8C10.1 21 3 13.9 3 5.2c0-.5.3-1 .8-1.2l2.1-.8c.5-.2 1.1 0 1.4.5Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span><small>PHONE</small><strong>${profile.phone}</strong></span>
            <b aria-hidden="true">↗</b>
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
