const profile = {
  realName: "张祖宁",
  name: "Sharpcaterpillar",
  github: "bestxiangest",
  university: "华东交通大学",
  major: "物联网工程",
  grade: "2027 届",
  company: "青岛华睿源科技有限公司",
  role: "软件开发实习生",
  internPeriod: "2025.06 — 2026.06",
  githubUrl: "https://github.com/bestxiangest",
  email: "13964140811@vip.163.com",
  musicUrl: "https://nas.lovezzn.com:13149",
  phone: "13964140811",
  gpa: "3.87 / 5.00",
  gpaShort: "3.87",
  rank: "4 / 63",
  rankPercent: "前 6.3%",
  classRank: "2 / 28",
  cet4: "501",
  cet6: "已通过",
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
    title: "Industrial Agent Gateway",
    badge: "COMPANY / PRIVATE",
    description: "把设备资产管理平台的业务能力按 MCP 协议开放给智能体调用。9 个工具分只读与写两档，传输层为规避依赖冲突自己手写，写操作必须过票据式人工确认闸门才会真的执行。",
    tags: ["MCP", "Spring Boot 3", "PostgreSQL", "LangChain4j", "SSE"],
    route: "agent-gateway",
    action: "Case study",
  },
  {
    index: "02",
    title: "VS Product Label Check",
    badge: "COMPANY / PRIVATE",
    description: "汽车零部件产线的成品标签核对系统，PC 管理端、后端与 PDA 三端由我独立完成。四套差异极大的客户标签规则被抽象成可配置项，现场扫码后即时判定并留档追溯。",
    tags: ["ThinkPHP 6", "Vue 3", "uni-app", "MySQL", "PDA"],
    route: "label-check",
    action: "Case study",
  },
  {
    index: "03",
    title: "Research Analytics Frontend",
    badge: "COMPANY / PRIVATE",
    description: "证券投研数据平台前端，负责 230 余个 Vue 文件。对接 50 余个金融数据源，把各页重复的表格与筛选收敛进一个自封装的高级表格组件，接口契约以运行中的 OpenAPI 为准。",
    tags: ["Vue 3", "Element Plus", "Pinia", "Vite", "OpenAPI"],
    route: "research-frontend",
    action: "Case study",
  },
  {
    index: "04",
    title: "Industrial ESH Inspection",
    badge: "COMPANY / PRIVATE",
    description: "无纸化系统里的安全巡检模块，做结构升级并在生产环境持续维护：设备点检计划与任务、隐患排查闭环、BI 大屏状态筛选，以及安全邮件的字段联调。",
    tags: ["Vue 3", "ThinkPHP 6", "MySQL", "BI Dashboard", "Element Plus"],
    route: "esh-inspection",
    action: "Case study",
  },
  {
    index: "05",
    title: "TeamSync",
    badge: "OPEN SOURCE",
    description: "独立完成的团队协作系统，从 17 张核心表的结构设计一直做到前端页面，已部署在企业内网供团队日常使用。看板与周期计划联动，站内通知只用 WebSocket 推刷新信号，到期提醒交给定时任务发邮件。",
    tags: ["Java 21", "Spring Boot 3", "Vue 3", "PostgreSQL", "WebSocket"],
    route: "teamsync",
    action: "Case study",
  },
  {
    index: "06",
    title: "Intelligent Guide Cane",
    badge: "OPEN SOURCE / AWARD",
    description: "《聆途睿行》智慧导盲系统。ESP32-S3 接多路传感器，云侧只承担视觉识别与语音；避障提示、蜂鸣、震动与照明留在设备端，断网时基础安全反馈照常工作。获全国大学生物联网设计竞赛华东赛区一等奖。",
    tags: ["ESP32-S3", "Flask", "Qwen", "ASR / TTS", "Mini Program"],
    href: "https://github.com/bestxiangest/Intelligent-Guide-Cane",
    action: "Repository",
  },
  {
    index: "07",
    title: "Infusion Alarm System",
    badge: "OPEN SOURCE",
    description: "端到云的输液监测链路。ESP32 采集数据经 ESP-NOW 组网上行，华为云 IoTDA 负责存储，Flask 大屏与小程序做液位监测、剩余时间预测和异常报警。",
    tags: ["ESP32", "ESP-NOW", "MQTT", "Huawei IoT", "Flask"],
    href: "https://github.com/bestxiangest/Intelligent-infusion-alarm-system",
    action: "Repository",
  },
  {
    index: "08",
    title: "CampusEcho",
    badge: "REBUILT / PRACTICE",
    description: "校园二手交易平台，从课程期的 Flask 版本重构为 Spring Boot 与 Vue 3 实现，补齐了评价、消息、举报治理与争议仲裁这条治理闭环。",
    tags: ["Spring Boot", "Vue 3", "JWT", "REST API"],
    action: "Practice project",
  },
  {
    index: "09",
    title: "PIXELBEAT",
    badge: "PRIVATE SOURCE / LIVE",
    description: "自己写的像素风在线音乐站：歌单、搜索、私人 FM、歌词、评论与多音源播放。Vue 3 全栈，自托管在 NAS 上对外可访问。",
    tags: ["Vue 3", "Vite", "Pinia", "Express", "Docker / NAS"],
    href: "https://nas.lovezzn.com:13149",
    action: "Live site",
  },
  {
    index: "10",
    title: "Qt Calendar",
    badge: "OPEN SOURCE",
    description: "Qt 与 C++ 写的桌面日历，含月历与全年视图、天气查询，日程用本地 JSON 持久化。",
    tags: ["C++", "Qt Widgets", "Qt Network", "JSON", "Desktop"],
    href: "https://github.com/bestxiangest/Qt-Calendar",
    action: "Repository",
  },
];

const certificates = [
  { src: "./assets/certificates/bluebridge-national-2025.webp", title: "蓝桥杯全国总决赛三等奖", meta: "国家级　Python B 组　2025", group: "competition", level: "national", featured: true },
  { src: "./assets/certificates/iot-east-2025.webp", title: "全国大学生物联网设计竞赛一等奖", meta: "华东赛区　2025", group: "competition", level: "provincial", featured: true },
  { src: "./assets/certificates/bluebridge-jiangxi-2025.webp", title: "蓝桥杯江西赛区一等奖", meta: "省级　Python B 组　2025", group: "competition", level: "provincial", featured: true },
  { src: "./assets/certificates/raicom-2026.webp", title: "睿抗机器人开发者大赛一等奖", meta: "江西省　2026", group: "competition", level: "provincial", featured: true },
  { src: "./assets/certificates/computer-design-2024.webp", title: "中国大学生计算机设计大赛一等奖", meta: "江西省　2024", group: "competition", level: "provincial" },
  { src: "./assets/certificates/ican-2024.webp", title: "iCAN 大学生创新创业大赛二等奖", meta: "江西赛区　2024", group: "competition", level: "provincial" },
  { src: "./assets/certificates/computer-design-2025.webp", title: "中国大学生计算机设计大赛三等奖", meta: "江西省　2025", group: "competition", level: "provincial" },
  { src: "./assets/certificates/ican-2025.webp", title: "iCAN 大学生创新创业大赛三等奖", meta: "江西赛区　2025", group: "competition", level: "provincial" },
  { src: "./assets/certificates/iot-campus.webp", title: "“双基”物联网比赛一等奖", meta: "校级", group: "competition", level: "campus" },
  { src: "./assets/certificates/acm-campus-2023.webp", title: "ACM“双基”程序设计竞赛三等奖", meta: "校级　2023", group: "competition", level: "campus" },
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
  "agent-gateway": { title: "// agent gateway", icon: "01", documentTitle: "Agent Gateway Case Study" },
  "label-check": { title: "// label check", icon: "02", documentTitle: "Label Check Case Study" },
  "research-frontend": { title: "// research frontend", icon: "03", documentTitle: "Research Frontend Case Study" },
  "esh-inspection": { title: "// ESH inspection", icon: "04", documentTitle: "ESH Inspection Case Study" },
  teamsync: { title: "// teamsync", icon: "05", documentTitle: "TeamSync Case Study" },
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
              我是 <a href="#/about/" data-route="about">${profile.realName}</a>，
              网上多用 ${profile.name}。${profile.university}${profile.major} ${profile.grade}，
              专业排名 ${profile.rank}。重心在软件这一侧，业务系统、Java 后端与 Vue 前端写得最多；
              嵌入式和 AIoT 也动手，主要用来把设备端接到云上。
            </p>
            <p>
              ${profile.internPeriod} 在${profile.company}做${profile.role}，交的都是要在现场跑起来的东西：
              成品标签核对系统的三端由我独立完成，设备管理平台的 Agent 能力网关也是我一个人写的。
              习惯先把边界问清楚，再落到表结构、接口和联调；AI 用来加快起草，
              但权限、状态流转和上线结果都自己过一遍。
            </p>
            <p>
              项目与实习见 <a href="#/works/" data-route="works">作品</a>
              和 <a href="#/experience/" data-route="experience">实习</a>，
              成绩、竞赛与知识产权在 <a href="#/achievements/" data-route="achievements">成果</a>。
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
              我是${profile.realName}，代码里多用 ${profile.name}。${profile.university}${profile.major} ${profile.grade}，
              平均学分绩点 ${profile.gpa}，专业排名 ${profile.rank}，班级排名 ${profile.classRank}，${profile.party}。
              方向是软件开发与全栈工程，落点在 Java 后端和 AI 应用，硬件那侧能把设备接到云上。
            </p>
            <p>
              企业侧交付过三件事：汽车零部件产线的成品标签核对系统，PC 管理端、后端与 PDA 三端由我独立完成；
              设备资产管理平台的 Agent 能力网关，把业务能力按 MCP 协议开给智能体调用，写操作必须过人工确认闸门；
              还有安全巡检模块的结构升级与生产维护。另有一段证券投研平台的前端工作，负责 230 余个 Vue 文件、
              对接 50 余个金融数据源。
            </p>
            <p>
              开源侧的 TeamSync 从 17 张核心表的设计到前端页面全部由我自己写，现在跑在企业内网上。
              常用的栈是 <strong>Java / Spring Boot</strong>、Vue 3 / TypeScript、uni-app、ThinkPHP 与 Flask，
              嵌入式用 ESP32 与 STM32。校内担任班级团支部书记与通信电子创新基地负责人，
              也在学院创新创业学生党支部做组织委员。竞赛、专利与荣誉详见
              <a href="#/achievements/" data-route="achievements">成果页</a>。
            </p>
          </div>
          <div class="about-skills reveal" style="--order:1">
            <h2 class="section-heading">Focus Distribution</h2>
            <div class="focus-bars">
              <div class="focus-bar" style="--bar-width:94%"><b>业务系统全栈交付</b><strong>94%</strong></div>
              <div class="focus-bar" style="--bar-width:90%"><b>Java / Spring Boot</b><strong>90%</strong></div>
              <div class="focus-bar" style="--bar-width:88%"><b>Vue 3 / TypeScript</b><strong>88%</strong></div>
              <div class="focus-bar" style="--bar-width:82%"><b>AI Agent 与 MCP</b><strong>82%</strong></div>
              <div class="focus-bar" style="--bar-width:78%"><b>工业现场与多端联调</b><strong>78%</strong></div>
              <div class="focus-bar" style="--bar-width:70%"><b>嵌入式与 AIoT</b><strong>70%</strong></div>
            </div>
            <p class="record-note">按近一年的实际投入自评，不是能力评分。</p>
          </div>
        </div>
        <div class="identity-row reveal" style="--order:2">
          <div><span>School</span><strong>${profile.university}</strong></div>
          <div><span>Major</span><strong>${profile.major}　${profile.grade}</strong></div>
          <div><span>GPA</span><strong>${profile.gpa}</strong></div>
          <div><span>Rank</span><strong>${profile.rank}　${profile.rankPercent}</strong></div>
        </div>
      </div>
    </section>
  `;
}

function achievementsPage() {
  const featured = certificates.filter((item) => item.featured);
  const competitionCertificates = certificates.filter((item) => item.group === "competition");
  const honorCertificates = certificates.filter((item) => item.group === "honor");
  const countByLevel = (level) =>
    String(competitionCertificates.filter((item) => item.level === level).length).padStart(2, "0");
  const pad = (value) => String(value).padStart(2, "0");
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
            <h2>成绩可以核验，<br /><span>项目都还在跑。</span></h2>
          </div>
          <div class="academic-scoreboard" aria-label="学业数据">
            <div><strong>${profile.gpaShort}</strong><span>平均学分绩点　满分 5.00</span></div>
            <div><strong>${profile.rank}</strong><span>专业排名　${profile.rankPercent}</span></div>
            <div><strong>${profile.cet4}</strong><span>CET-4　六级${profile.cet6}</span></div>
          </div>
        </div>

        <section class="award-showcase reveal" style="--order:1" aria-labelledby="award-showcase-title">
          <div class="award-showcase__intro">
            <span class="record-no">01 / SELECTED AWARDS</span>
            <h3 id="award-showcase-title">重点奖项</h3>
            <p>从算法题到业务系统再到 AIoT 链路，先把工程跑通，再拿去赛场和生产现场检验。</p>
            <div class="award-counts">
              <div><strong>${countByLevel("national")}</strong><span>国家级</span></div>
              <div><strong>${countByLevel("provincial")}</strong><span>省区级</span></div>
              <div><strong>${countByLevel("campus")}</strong><span>校级</span></div>
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
              <span class="record-state">第一发明人　已公开　实质审查中</span>
              <h4>一种基于多源信息感知的智慧校园电子班牌系统及方法</h4>
              <p>发明专利申请　申请号 202511818264.2　公布号 CN 121747168 A　终端采集人脸、表情、环境与宿舍用电数据，服务器分析后触发安全联动。</p>
            </div>
            <div class="record-item">
              <span class="record-state">核心开发　已登记</span>
              <h4>基于深度学习的智能驾驶路况障碍预警系统 V1.0</h4>
              <p>计算机软件著作权　登记号 2025SR1151542　负责图像采集、障碍识别、风险预警与结果展示。</p>
            </div>
          </article>
          <article class="record-card reveal" style="--order:3">
            <span class="record-no">03 / CAMPUS HONORS</span>
            <h3>连续两学年拿到的</h3>
            <div class="honor-strip"><strong>一等奖学金</strong><span>2023—2025</span></div>
            <div class="honor-strip"><strong>三好学生</strong><span>2023—2025</span></div>
            <div class="honor-strip"><strong>科技活动奖</strong><span>2023—2025</span></div>
            <p class="record-note">三项都是连续两个学年获得，证书扫描件在下方档案里。</p>
          </article>
        </div>

        <section class="certificate-archive reveal" style="--order:4">
          <div class="certificate-archive__head">
            <div><span class="record-no">04 / CERTIFICATE ARCHIVE</span><h3>证书档案</h3></div>
            <p>共 ${certificates.length} 份材料，点击任一证书可放大查看。</p>
          </div>
          <div class="certificate-group">
            <div class="certificate-group__label"><b>${pad(competitionCertificates.length)}</b><span>学科竞赛<br />Competitions</span></div>
            <div class="certificate-wall">${competitionCertificates.map((item, index) => certificateCard(item, index)).join("")}</div>
          </div>
          <div class="certificate-group">
            <div class="certificate-group__label"><b>${pad(honorCertificates.length)}</b><span>奖学金与荣誉<br />Honors</span></div>
            <div class="certificate-wall">${honorCertificates.map((item, index) => certificateCard(item, index)).join("")}</div>
          </div>
        </section>

        <article class="leadership-band reveal" style="--order:5">
          <div><span class="record-no">05 / LEADERSHIP</span><h3>组织与实践</h3></div>
          <ul class="leadership-list">
            <li><b>团支部书记</b><span>物联网工程 2023-1 班　2023.09 至今，组织主题团日与团课 12 场</span></li>
            <li><b>通信电子创新基地负责人</b><span>2024.09 至今，组织软硬件培训并推进竞赛，协助基地获国家级 2 项、省级 7 项以上</span></li>
            <li><b>带班党员</b><span>计算机（ICT）2025-1 班　2025 级</span></li>
            <li><b>组织委员</b><span>学院创新创业学生党支部　2026.06 至今</span></li>
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
          <div class="experience-duration">${profile.internPeriod}<br />ONE-YEAR INTERNSHIP</div>
        </div>
        <p class="reveal" style="--order:1; margin-top:28px">
          一年实习里同时推进了四件事，交付物都要在真实环境里跑：设备管理平台的 Agent 能力网关由我独立设计实现；
          成品标签核对系统的 PC 管理端、后端与 PDA 三端由我独立完成；安全巡检模块做了结构升级并在生产环境持续维护；
          TeamSync 从库表设计到前端页面全部自己写完并已开源。日常用 AI 加快起草，
          但权限边界、状态流转和上线结果都自己复核一遍。此外还有一段证券投研平台的前端开发经历，
          负责 230 余个 Vue 文件，要点写在<a href="#/research-frontend/" data-route="research-frontend">案例页</a>里。
        </p>
        <div class="experience-grid">
          <article class="experience-card reveal" style="--order:2">
            <span class="work-label">01 / AGENT GATEWAY</span>
            <h3>Agent 能力网关（独立设计实现）</h3>
            <ul>
              <li>按 MCP 协议对外暴露 9 个工具，7 个只读、2 个写，覆盖设备定位、履历追溯、备件判断与工单创建。</li>
              <li>官方 SDK 会顶起 reactor 与 jackson 版本，改为参照客户端实现手写约 700 行服务端协议面。</li>
              <li>写操作设票据式人工确认闸门，票据绑定参数指纹，签发、核准与执行全程落库审计。</li>
              <li>tools/list 按用户真实权限过滤，工具不透传租户 ID；确认面板放在设备管理宿主前端而非 AI 前端。</li>
            </ul>
          </article>
          <article class="experience-card reveal" style="--order:3">
            <span class="work-label">02 / PRODUCT LABEL CHECK</span>
            <h3>VS 成品标签核对系统（独立三端）</h3>
            <ul>
              <li>独立负责 ThinkPHP 6 后端、Vue 3 与 TypeScript 管理端、uni-app PDA 与 MySQL 数据层。</li>
              <li>把四套客户标签规则抽象成可配置项，支持 Excel 批量导入并校验必填、重复与状态。</li>
              <li>PDA 兼容相机、手动输入与硬件扫码头，支持多标签累加、重复扫码拦截与三类结果语音播报。</li>
              <li>整理本地、内网测试与生产三套环境配置，写了环境切换与前后端构建部署脚本。</li>
            </ul>
          </article>
          <article class="experience-card reveal" style="--order:4">
            <span class="work-label">03 / ESH INSPECTION</span>
            <h3>安全巡检模块（升级与维护）</h3>
            <ul>
              <li>参与 PC 端菜单与路由重构：设备台账、点检计划与任务、设备问题、日常与专项隐患排查。</li>
              <li>隐患列表按安全、消防、环境切换接口与导出，补齐隐患类型与责任人筛选维度。</li>
              <li>联调巡检任务调度、问题状态流转、验收权限，以及安全邮件里的隐患类型字段。</li>
              <li>BI 大屏的未完成数据、状态筛选映射与部门维度导出，多端验证后上线。</li>
            </ul>
          </article>
          <article class="experience-card reveal" style="--order:5">
            <span class="work-label">04 / TEAMSYNC</span>
            <h3>TeamSync 协作系统（独立全栈，已开源）</h3>
            <ul>
              <li>17 张核心表的结构设计，后端 172 个 Java 文件、75 个接口，前端 146 个 Vue 文件也全部自己写。</li>
              <li>看板支持阶段划分、任务拖拽、子任务与评论，周期计划可按期生成看板任务。</li>
              <li>站内通知用 WebSocket 只推刷新信号，到期与逾期提醒交给定时任务发邮件。</li>
              <li>项目文件与任务附件接入对象存储，鉴权由 JWT 拦截器统一处理。</li>
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
          <p>主线是软件交付：企业业务系统、Java 与 Vue 全栈、自研 Web 产品，另有 AIoT 竞赛与嵌入式开源作为补充。四个企业项目另设案例页，只写职责与实现要点，不公开内部代码与业务数据。</p>
          <a class="button-link" href="${profile.githubUrl}?tab=repositories" target="_blank" rel="noreferrer">Public repositories <span>↗</span></a>
        </div>
        <div class="project-grid">${projects.map(projectMarkup).join("")}</div>
      </div>
    </section>
  `;
}

const CASE_STUDIES = {
  "agent-gateway": {
    route: "agent-gateway",
    eyebrow: "COMPANY PROJECT / AGENT ENGINEERING",
    title: "设备管理平台 Agent 能力网关",
    role: "独立设计并实现",
    context: "青岛华睿源科技有限公司　工业设备资产管理平台",
    summary: "设备资产管理的日常使用集中在跨模块查询：一台设备现在什么状态，上次大修换了哪些件，同类故障以前怎么处理，备件还剩多少。这些信息分散在台账、工单、点检、库存与故障树里，本模块把它们按 MCP 协议开放给智能体调用，让跨模块的查询与派工收敛为一次对话。",
    facts: [["工具", "7 只读 + 2 写"], ["协议", "MCP over HTTP / SSE"], ["产出", "39 个实现类　17 个测试类"]],
    shots: [
      ["agent-01-context", "进入设备详情的智能助手页，会话自动带上当前设备作为上下文，右上角可切换模型与查看已授权工具"],
      ["agent-02-tools", "模型按需调用网关工具，执行步骤与单次耗时实时回显，推理过程可展开查看"],
      ["agent-03-answer", "两个工具返回后归纳出结论：无活跃报警、近期维修问题，以及被它自己识别为测试数据的异常工单"],
    ],
    sections: [
      ["我负责的部分", [
        "独立完成协议层、工具层、票据闸门与前端确认面板的设计与实现，落在一个已有 270 余个 Controller 的多租户 Spring Boot 应用上。",
        "9 个工具按设备运维链路组织：设备台账与单台档案、维修与保养履历、点检巡检记录、备件库存与 BOM、设备报警关联、故障树检索，加上备件预占与维修工单创建两个写工具。",
        "为让只读工具拿到准确数据，改了设备管理核心模块的三处查询逻辑。工单查询原来用 LIKE 模糊匹配，设备编号 DEV-001 会命中 13 条工单，模型会把别的设备的故障讲成这一台的，于是补上精确匹配路径。",
        "一个工具一个权限码，tools/list 阶段就按当前用户的真实权限过滤，没有授权的工具连名字都不会出现在模型看到的清单里；工具绝不透传租户 ID，以防越租户查询。",
        "工具描述里不能出现尚未注册的工具名。早期有一处描述写了“请改用 device_detail”，而该工具当时并未实现，模型照此调用导致整条推理链中途终止。",
        "确认面板做在设备管理宿主前端而不是 AI 前端，因为令牌与动作都属于设备管理侧；倒计时用服务端返回的剩余秒数加本地计时，轮询只在面板真正可见时运行。",
        "17 个测试类共 193 个用例，测试代码约为实现代码的七成。",
      ]],
      ["为什么没用官方 MCP SDK", [
        "官方 SDK 会把 reactor 与 jackson 顶到主工程 BOM 管不住的版本。为一个新模块在几百个 Controller 的成熟应用上做全进程依赖升级，风险与收益不成比例。",
        "于是对照 LangChain4j 的客户端实现，用 Spring MVC 的 SseEmitter 手写了约 700 行协议面：JSON-RPC 2.0 编解码、会话注册表与 initialize、ping、tools/list、tools/call 等方法，全程没有引入 reactive 栈。",
        "GET 建立 SSE 后首帧必须下发 event: endpoint 告知消息通道地址，所有 JSON-RPC 响应统一由 event: message 推送，POST 只返回 202；会话靠 25 秒心跳保活，最长存活 30 分钟。",
        "协议错误走 JSON-RPC error，工具错误走 result.isError。前者在客户端会抛异常并终止整轮推理，而“当前用户无此权限”这类信息应该让模型看到并自行改正。",
        "手写的只是服务端协议面，客户端侧仍然复用 LangChain4j 的 MCP client；协议层与工具层刻意分置两个包，日后换回官方 SDK 只需要替换协议层。",
      ]],
      ["写操作怎么守住", [
        "模型首次调用不带确认令牌时网关并不执行，只签发一张 PENDING 票据，把将要执行的动作与票据编号作为正常结果返回；人工核准后模型以相同参数附令牌再调一次才真正执行。",
        "安全性不依赖票据编号的保密，它本身就明文回给了模型。真正起作用的是 PENDING 到 APPROVED 这次迁移只存在于人工确认端点上，而模型能触达的通道只有 tools/call，闸门守的是通道差异。",
        "票据绑定入参的 SHA-256 指纹，人工同意的是那一组具体参数而不是那个工具，避免一张“领用 1 个轴承”的批准被拿去执行“领用 1000 个”。",
        "可逆写票据有效期 10 分钟，不可逆写缩短到 3 分钟且确认时必须显式勾选；撤销句柄还没做出来，所以可逆写目前和不可逆写一样强制人工确认——没有撤销能力的“可逆”只是一句承诺。",
        "票据的签发、核准、拒绝、消费、执行成功与执行失败分别落库审计，闸门放行与工具真的跑成功是两件事，必须分开记。",
      ]],
    ],
  },
  "label-check": {
    route: "label-check",
    eyebrow: "COMPANY PROJECT / FULL-STACK DELIVERY",
    title: "VS 成品标签核对系统",
    role: "独立完成三端",
    context: "青岛华睿源科技有限公司　汽车零部件生产现场",
    summary: "成品出货前要核对客户系统标签与厂内自制标签是否对应，物料编码、箱号与数量三者都不能错，此前靠人工逐张比对，一次错漏的代价直接落在出货批次上。系统把这道工序搬到 PDA：现场先扫客户标签再扫自制标签，后端按规则判定，结果实时播报并留档。",
    facts: [["客户规则", "四套，可配置"], ["端侧", "PC 管理端 + PDA"], ["栈", "ThinkPHP 6 + Vue 3 + uni-app"]],
    shots: [
      ["label-01-rules", "料号对照类规则：系统标签料号与厂内自制编码一对一维护，支持 Excel 模板批量导入。客户名与真实料号已做脱敏处理"],
      ["label-02-rules-alt", "同一套界面切到另一家客户，字段来源与匹配方式由规则配置决定，核心流程不随客户增加而改动"],
      ["label-03-records", "核对结果按客户、时间、人员与料号可筛可导出，每次核对的起止时间都留档"],
      ["label-04-detail", "核对详情保留每次扫码的系统标签料号、自制编码与双方数量，数量不匹配时的二次确认人也一并记下"],
    ],
    sections: [
      ["我负责的部分", [
        "独立负责 ThinkPHP 6 后端、Vue 3 与 TypeScript 管理端、uni-app PDA 与 MySQL 数据层，共约 1.2 万行。",
        "设计规则、箱号池、导入批次、核对任务、核对记录、系统标签逐条明细与 KD 装箱快照共 7 张表，全部软删除。",
        "完成规则增删改停用、Excel 与 PDF 导入、记录详情与导出、App 端独立鉴权、扫码校验与任务提交，管理端 19 个接口、PDA 端 11 个接口。",
        "整理本地、内网测试与生产三套环境的接口与数据库配置，写了环境切换与前后端构建部署脚本，构建产物附带清单与备份。",
      ]],
      ["四套规则怎么不写成四套代码", [
        "四家整车厂客户的标签体系互不相同：两家按料号直接对照自制编码；一家的箱号要先由 PDF 导入形成独立箱号池，再按 HU 反查核销；还有一套 KD 模式要逐项比对两张键值型二维码里的四个指定字段。",
        "若按客户分别实现，每新增一家都要改动核心流程，于是把差异归纳为字段来源、匹配方式与核销策略三个维度，抽象成可配置规则。",
        "带箱号池的那家单独提供池管理，箱号只有在对应料号已有生效规则时才允许入池，核销走锁定、占用、落定、释放的完整生命周期，已占用的箱号再次扫码会被拦截。",
        "PDF 导入实现了两种版式的解析器，导入按批次记录，失败行可导出错误报告。",
      ]],
      ["现场输入条件与误操作", [
        "产线的输入条件并不理想，PDA 端兼容四种输入：全屏相机扫码、页面内嵌的连续扫码、手动键入与硬件扫码头，每条记录都留下扫码来源。",
        "一个产品对应多张客户标签时支持多标签累加后再比对数量；同一任务内重复扫同一张标签会被拦截，去重以系统标签为准。",
        "判定结果分进行中、正确、错误、数量错误、已取消与重复六种，分别语音播报；数量不匹配时允许操作员改数量后二次确认，避免一次误扫作废整个任务。",
        "记录详情保留每次扫码的双方原文与判定结果，可按时间、人员、物料与箱号筛选导出。",
      ]],
    ],
  },
  "research-frontend": {
    route: "research-frontend",
    eyebrow: "COMPANY PROJECT / DATA-HEAVY FRONTEND",
    title: "证券投研数据平台前端",
    role: "前端开发",
    context: "山东远端网络科技股份有限公司　证券投研数据服务",
    summary: "面向证券投研的数据服务平台前端，涉及 230 余个 Vue 文件。基础数据模块工作量最大，对接 50 余个金融数据源，每个数据源对应一个列表页和部分详情页，重复的表格与筛选被收敛进一个自封装的通用组件。",
    facts: [["规模", "230+ 个 Vue 文件"], ["数据源", "50+ 个"], ["栈", "Vue 3 + Element Plus + Pinia"]],
    sections: [
      ["我负责的部分", [
        "基础数据、题材、典型题材、行业、涨价概念、自选、趋势、主板打板、科创打板、业绩与天气等模块的前端开发。",
        "对接的数据源包括复权因子、涨跌停与集合竞价表现、龙虎榜、券商研报、新闻快讯、互动易、融资融券汇总与明细、个股与行业资金流向、业绩快报、股权质押、央行货币政策报告、政策法规、沪深港股通持股、板块指数行情与可转债合约信息。",
        "可转债做了独立的合约信息列表与详情页，详情按字段分组卡片展示，数据经 sessionStorage 缓存，缺失时按债券代码回查列表接口。",
        "另做了侧边栏拖拽调宽并把宽度写入 Cookie、品牌由图片改文字与控件视觉打磨，并修掉一处叶子菜单误配 Layout 导致侧栏闪现嵌套的问题。",
      ]],
      ["把重复收敛成一个组件", [
        "50 余个数据源意味着 50 余个结构相似的列表页，逐页实现会让密度切换、全屏、列显隐、分页这些行为各写一遍，改一次要改五十处。",
        "自封装的高级表格组件统一处理密度、全屏、列显隐、斑马纹、表头背景、高度计算与内置分页。",
        "筛选区统一用固定定位结构把搜索表单和工具栏排到同一行，避免每个页面重复实现布局。",
      ]],
      ["接口协作上的规矩", [
        "请求参数统一驼峰命名，日期统一转成 YYYYMMDD 提交，接口契约以运行中的 OpenAPI 为准，不维护本地快照。",
        "不用 Mock 数据伪造功能完成，功能以真实接口跑通为准。",
        "遇到查询慢、字段缺失或语义不一致，先确认根因在前端还是后端，再提最小后端修改需求，而不是在前端打补丁掩盖。",
        "为此写过题材、行业、涨价概念、自选、趋势、打板与天气等多个模块的后端接口重构建议文档。",
      ]],
    ],
  },
  "esh-inspection": {
    route: "esh-inspection",
    eyebrow: "COMPANY PROJECT / INDUSTRIAL ESH",
    title: "无纸化系统 ESH 巡检模块",
    role: "结构升级与持续维护",
    context: "青岛华睿源科技有限公司　制造业无纸化系统",
    summary: "ESH 巡检是无纸化系统里的安全业务域，覆盖设备台账、点检计划与任务、设备问题闭环、隐患排查，以及 BI 大屏与邮件通知。本人参与模块的结构升级，并在生产环境持续维护。",
    facts: [["业务域", "设备点检 + 隐患排查"], ["终端", "PC 管理端 + BI 大屏"], ["栈", "Vue 3 + ThinkPHP 6"]],
    sections: [
      ["我负责的部分", [
        "参与 PC 端菜单与路由升级：设备管理下的基础设备、点检计划、节假日设置、点检任务与设备问题，以及排查管理下的日常与专项隐患。",
        "隐患列表按安全、消防、环境切换接口与导出，补齐隐患类型与责任人等筛选维度。",
        "后端侧联调巡检任务调度、问题模型状态流转、验收权限，以及安全邮件正文纳入隐患类型字段。",
        "巡检 BI 大屏的未完成隐患列表、状态筛选映射与部门维度导出。",
      ]],
      ["业务怎么跑", [
        "管理端维护消防与环境等设备台账和点检计划，可配置节假日规则。",
        "系统按计划生成点检任务，现场执行后回写结果，异常进入设备问题闭环。",
        "隐患排查支持登记、处理与验收，大屏按状态聚合展示，邮件用于安全通知触达。",
      ]],
      ["改动面向生产的约束", [
        "在既有 ThinkPHP 6 与 Vue 3 工业系统上做结构升级，要兼容历史权限、旧 URL 重定向与多类型隐患接口。",
        "大屏的状态枚举与业务库 status 不完全一一对应，筛选与导出需要单独做映射。",
        "任务完成态、验收权限与邮件内容一律以后端真实数据为准，不在前端伪造。",
      ]],
    ],
  },
  teamsync: {
    route: "teamsync",
    eyebrow: "OPEN SOURCE / FULL-STACK",
    title: "TeamSync 团队协作与项目管理系统",
    role: "独立完成全部开发",
    context: "实习期间独立立项　已部署在企业内网供团队日常使用",
    source: "Open source / 代码完整公开",
    repo: "https://github.com/bestxiangest/TeamSync",
    footerNote: "本项目代码完整公开，可按仓库地址查阅库表设计、后端接口与前端实现。界面截图取自企业内网的真实使用环境，其中的组织标识、项目名称与成员姓名已做脱敏处理。",
    summary: "团队此前用表格和聊天记录推进项目，任务状态与责任人常常对不上，周期性事务全靠记忆。TeamSync 把项目分组、看板协作、周期计划、统计与通知收在一处，让任务的归属与进度只有一个来源。库表设计、后端接口与前端页面全部由我一个人完成，代码全部公开。",
    facts: [["后端", "172 个 Java 文件　17 张表"], ["前端", "146 个 Vue 文件"], ["接口", "75 个 REST 端点"]],
    shots: [
      ["teamsync-01-board", "看板支持阶段自定义、任务拖拽、负责人与关注人、子任务与活动日志，项目进度按子任务完成度自动汇总"],
      ["teamsync-02-overview", "管理侧的平台概览：项目与任务总量、逾期与风险项目、近 7 天任务趋势与项目健康分布"],
      ["teamsync-03-recurring", "周期计划维护重复性事务，支持按周、月、年设定周期并自动生成本期待办。项目名与成员名已做脱敏处理"],
    ],
    sections: [
      ["做了什么", [
        "后端 Spring Boot 3 与 MyBatis-Plus 配 PostgreSQL，163 个实现类、17 张表、75 个 REST 端点；前端 Vue 3 与 TypeScript，146 个组件与页面。",
        "项目管理支持共享分组、成员角色与权限控制以及归档移动；看板支持阶段划分、任务拖拽、负责人与关注人、子任务、评论和活动日志。",
        "周期计划维护周期待办与执行记录，可按期生成看板任务；工作台与统计用 ECharts 呈现项目健康度、任务趋势、成员负载与活动热力，另有看板大屏视图。",
        "日历视图把任务截止时间与周期计划的执行、截止时间聚合到一起；项目文件与任务附件接入对象存储，鉴权由 JWT 拦截器统一处理。",
      ]],
      ["几处实现上的取舍", [
        "站内通知通过 WebSocket 只推刷新信号而不推内容本体：推送体只有动作类型、任务 ID 与操作人几个字段，客户端收到后再拉取，这样多端同时打开时不会因为推送时序不同而出现状态分歧。",
        "到期与逾期提醒由每小时一次的定时任务以邮件发出，并留出用户级开关，避免通知量压过有效信息；已发提醒落表去重，任务恢复正常时回收提醒记录。",
        "未读计数与通知中心共用同一份查询逻辑，保证角标数字和列表内容一致。",
      ]],
      ["为什么把它开源", [
        "这是我在实习期间独立完成的完整系统，从表结构到前端页面都由我决定，因此可以公开全部代码作为工程能力的直接证据。",
        "另外两个企业项目受版权与保密约束无法提供源码，本项目可作为代码层面的替代参考。",
        "系统已在企业内网真实使用，团队用它管着几十个项目与四百余条任务，不是只跑通了演示流程的作品。",
      ]],
    ],
  },
};

function caseStudyPage(kind) {
  const data = CASE_STUDIES[kind];
  const shots = data.shots ?? [];
  const shotsOrder = data.sections.length + 3;

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
            <span>Source</span><strong>${data.source ?? "Private / No code link"}</strong>
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
        ${shots.length ? `
        <section class="case-shots reveal" style="--order:${shotsOrder}">
          <h3>界面</h3>
          ${shots.map(([file, caption]) => `
            <figure>
              <img src="./assets/shots/${file}.webp" alt="${caption}" loading="lazy" decoding="async" />
              <figcaption>${caption}</figcaption>
            </figure>`).join("")}
        </section>` : ""}
        <div class="case-footer reveal" style="--order:${shotsOrder + (shots.length ? 1 : 0)}">
          <p>${data.footerNote ?? "本项目为公司内部系统。本页只说明本人参与的工作范围与实现要点，界面截图中的组织标识、客户名称与业务数据均已脱敏，不展示源代码与库表结构。"}</p>
          ${data.repo
            ? `<a class="button-link" href="${data.repo}" target="_blank" rel="noreferrer">查看源代码 <span>↗</span></a>`
            : `<a class="button-link" href="mailto:${profile.email}">联系了解更多 <span>↗</span></a>`}
        </div>
      </div>
    </section>`;
}

function stackPage() {
  return `
    <section class="page page--stack" data-page="stack">
      <div class="container">
        ${titleMarkup("stack")}
        <p class="reveal" style="--order:0">下面的技术都在真实项目里用过，熟练度按场景差别不小。排序按软件交付的权重来，硬件与 AIoT 放在后面，用途是把设备接上云。</p>
        <hr class="page-rule" />
        <div class="stack-grid">
          <article class="stack-group reveal" style="--order:1"><span>01</span><h2>Languages</h2><ul class="stack-list"><li>Java</li><li>Python</li><li>PHP</li><li>JavaScript</li><li>TypeScript</li><li>C / C++</li><li>SQL</li></ul></article>
          <article class="stack-group reveal" style="--order:2"><span>02</span><h2>Backend &amp; Data</h2><ul class="stack-list"><li>Spring Boot 3</li><li>MyBatis-Plus</li><li>ThinkPHP 6</li><li>Flask</li><li>Express</li><li>MySQL</li><li>PostgreSQL</li><li>Redis</li><li>JWT / Token</li><li>REST API</li><li>WebSocket</li></ul></article>
          <article class="stack-group reveal" style="--order:3"><span>03</span><h2>Web &amp; App</h2><ul class="stack-list"><li>Vue 3</li><li>Vite</li><li>TypeScript</li><li>Element Plus</li><li>Pinia</li><li>uni-app</li><li>微信小程序</li><li>ECharts</li><li>Qt Widgets</li><li>Android Java</li></ul></article>
          <article class="stack-group reveal" style="--order:4"><span>04</span><h2>AI Engineering</h2><ul class="stack-list"><li>MCP</li><li>LangChain4j</li><li>Tool Calling</li><li>Claude Code / Codex</li><li>OpenCode</li><li>Qwen Intent</li><li>百度 ASR / TTS</li><li>OpenAI-compatible API</li><li>OpenCV</li></ul></article>
          <article class="stack-group reveal" style="--order:5"><span>05</span><h2>AIoT &amp; Hardware</h2><ul class="stack-list"><li>ESP32-S3</li><li>STM32</li><li>MQTT</li><li>ESP-NOW</li><li>NB-IoT</li><li>I²C / SPI / UART</li><li>PlatformIO</li><li>CubeMX / HAL</li></ul></article>
          <article class="stack-group reveal" style="--order:6"><span>06</span><h2>Build &amp; Delivery</h2><ul class="stack-list"><li>Git / GitHub</li><li>Linux</li><li>Docker</li><li>Nginx</li><li>NAS</li><li>HBuilderX</li><li>CMake</li><li>Playwright</li></ul></article>
        </div>
        <div class="evidence reveal" style="--order:7">
          <h2>这些技术用在了哪里</h2>
          <ul class="evidence-list">
            <li><b>Agent 网关</b><span>手写 MCP 协议层与 9 个业务工具，写操作过票据式确认闸门并全链路审计。</span></li>
            <li><b>TeamSync</b><span>Spring Boot 3 分层接口配 Vue 看板：权限、任务流、通知与工作台统计。</span></li>
            <li><b>标签核对</b><span>ThinkPHP 规则与任务接口，Vue 管理端配规则，uni-app PDA 扫码提交。</span></li>
            <li><b>投研前端</b><span>Vue 3 与 Element Plus 把 50 余个数据源的列表与筛选收进一个组件。</span></li>
            <li><b>导盲系统</b><span>ESP32-S3 端侧闭环，配 Flask 语音中枢与小程序监护，竞赛落地。</span></li>
            <li><b>PIXELBEAT</b><span>Vue 3 自托管音乐站：歌单、播放与 NAS 上的部署运维。</span></li>
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
            <span class="eyebrow">POSTGRADUATE / COLLAB / OPPORTUNITY</span>
            <h2>有事直接说，<br /><span>看到就回。</span></h2>
            <p>
              正在准备 2027 年推免申请，感兴趣的方向是边缘智能、智能物联网与端云协同，
              以及可信 AI 与智能体系统的工程化。软件开发与全栈方向的交流、开源协作也都欢迎。
              邮件写清来意就行，看到会尽快回。
            </p>
            <div class="availability">邮件优先</div>
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
              <div><dt>Major</dt><dd>${profile.major}　${profile.grade}</dd></div>
              <div><dt>Focus</dt><dd>Full-stack　Java　AI</dd></div>
              <div><dt>Based in</dt><dd>Nanchang　UTC+8</dd></div>
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
  "agent-gateway": () => caseStudyPage("agent-gateway"),
  "label-check": () => caseStudyPage("label-check"),
  "research-frontend": () => caseStudyPage("research-frontend"),
  "esh-inspection": () => caseStudyPage("esh-inspection"),
  teamsync: () => caseStudyPage("teamsync"),
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
