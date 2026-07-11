const profile = {
  name: "Sharpcaterpillar",
  github: "bestxiangest",
  university: "华东交通大学",
  major: "物联网工程",
  grade: "大三",
  company: "青岛华睿源科技有限公司",
  githubUrl: "https://github.com/bestxiangest",
  email: "13964140811@vip.163.com",
  musicUrl: "https://music.sharpcaterpillar.top/",
};

const navItems = [
  { route: "about", code: "Ab", label: "about", icon: "◎" },
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
  },
  {
    index: "02",
    title: "VS Product Label Check",
    badge: "COMPANY / PRIVATE",
    description: "公司交给我的独立任务。PDA 依次扫描系统标签和自制标签，检查物料、箱号、P/N 与数量，并保存核对记录。",
    tags: ["uni-app Vue 3", "PDA", "REST API", "Barcode", "AI-assisted"],
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
];

const pageMeta = {
  hello: { title: "Hello World...", icon: "//", documentTitle: "Hello World" },
  about: { title: "// about", icon: "i", documentTitle: "About" },
  experience: { title: "// experience", icon: "◇", documentTitle: "Experience" },
  works: { title: "// works", icon: "↗", documentTitle: "Works" },
  stack: { title: "// stack", icon: "⚙", documentTitle: "Stack" },
  contact: { title: "// contact", icon: "+", documentTitle: "Contact" },
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
              I'm <a href="#/about/" data-route="about">${profile.name},</a>
              ${profile.university}${profile.major}${profile.grade}学生。曾在${profile.company}实习一年，
              做过工业巡检、PDA 扫码，也折腾过不少软硬件项目。
            </p>
            <p>
              想先认识我，可以看看 <a href="#/experience/" data-route="experience">这一年的实习经历</a>，
              也可以直接翻翻我的 <a href="#/works/" data-route="works">项目</a>
              和 <a href="#/stack/" data-route="stack">技术栈</a>。
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
              我是 ${profile.name}，目前在${profile.university}读${profile.major}。
              我做项目时经常从硬件接线一路做到网页或 App，碰到问题就先拆开，再一层层把数据跑通。
            </p>
            <p>
              现在用得比较多的是 <strong>STM32 / ESP32</strong>、Android、Qt、Vue、uni-app、Flask 和 ThinkPHP。
              工业现场的 PDA 扫码、语音提示和任务状态也实际做过。
            </p>
            <p>
              GitHub 上能看到一部分项目。公司项目和一些课程作品是私有仓库，
              所以这里会写清楚 <a href="#/works/" data-route="works">具体做了什么</a>，但不会放内部代码。
            </p>
          </div>
          <div class="reveal" style="--order:1">
            <h2 class="section-heading">Focus Breakdown</h2>
            <div class="focus-bars">
              <div class="focus-bar" style="--bar-width:96%"><b>Embedded / IoT</b><small>CORE</small></div>
              <div class="focus-bar" style="--bar-width:91%"><b>Industrial Applications</b><small>1 YEAR</small></div>
              <div class="focus-bar" style="--bar-width:86%"><b>Full-stack Tools</b><small>BUILD</small></div>
              <div class="focus-bar" style="--bar-width:80%"><b>Android / Desktop</b><small>APP</small></div>
              <div class="focus-bar" style="--bar-width:73%"><b>AI Integration</b><small>APPLY</small></div>
            </div>
          </div>
        </div>
        <div class="identity-row reveal" style="--order:2">
          <div><span>School</span><strong>华东交通大学</strong></div>
          <div><span>Major</span><strong>物联网工程</strong></div>
          <div><span>Current</span><strong>大三学生</strong></div>
          <div><span>GitHub</span><strong>@${profile.github}</strong></div>
        </div>
      </div>
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
  const tagName = project.href ? "a" : "article";
  const linkAttrs = project.href
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
        ${project.href ? `<span class="project-card__action" aria-hidden="true">↗</span>` : ""}
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
          <p>这里既有公开项目，也有公司项目和私有仓库。能公开的会直接跳到 GitHub；公司项目只介绍我做的部分，PIXELBEAT 则可以打开在线站点体验。</p>
          <a class="button-link" href="${profile.githubUrl}?tab=repositories" target="_blank" rel="noreferrer">Public repositories <span>↗</span></a>
        </div>
        <div class="project-grid">${projects.map(projectMarkup).join("")}</div>
      </div>
    </section>
  `;
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
        <div class="contact-layout">
          <div class="contact-copy reveal" style="--order:0">
            <span class="eyebrow">IOT / INDUSTRIAL INTERNET / APPLICATIONS</span>
            <h2>有想法，<br /><span>聊聊。</span></h2>
            <p>如果你也在做物联网、嵌入式或工业软件，欢迎来交流。GitHub 和邮件都能找到我，PIXELBEAT 也可以直接打开玩一玩。</p>
            <div class="availability">GitHub 和邮件都可以联系</div>
          </div>
          <div class="contact-links reveal" style="--order:1">
            <a class="contact-link" href="${profile.githubUrl}" target="_blank" rel="noreferrer"><span>GitHub / ${profile.github}</span><b>↗</b></a>
            <a class="contact-link" href="mailto:${profile.email}"><span>${profile.email}</span><b>@</b></a>
            <a class="contact-link" href="${profile.musicUrl}" target="_blank" rel="noreferrer"><span>PIXELBEAT / Live site</span><b>♪</b></a>
          </div>
        </div>
      </div>
    </section>
  `;
}

const renderers = {
  hello: helloPage,
  about: aboutPage,
  experience: experiencePage,
  works: worksPage,
  stack: stackPage,
  contact: contactPage,
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
