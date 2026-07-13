# Sharpcaterpillar Portfolio

面向实习、就业与展示的个人介绍与作品集静态站点。定位偏软件（全栈 / Java 后端 / AI 应用），硬件与 AIoT 为补充。内容对齐真实简历、获奖证书与项目经历。

## 页面内容

- `#/about/`：教育背景、软件向定位与能力结构
- `#/achievements/`：GPA、专业排名、科研成果、重点奖项、学生荣誉与证书档案
- `#/experience/`：青岛华睿源科技有限公司软件开发实习（标签核对主导 + ESH 升级维护）
- `#/works/`：企业交付、全栈开源、AIoT 与自研产品
- `#/label-check/`、`#/esh-inspection/`：企业项目案例页
- `#/stack/`、`#/contact/`：技术栈与联系方式

站点仅发布经压缩的竞赛与荣誉证书图片；个人证件照与公司内部资料不随仓库公开。

## 本地预览

```bash
python3 -m http.server 4173
```

访问：<http://127.0.0.1:4173/#/hello/>

## 技术说明

- 零运行时依赖，可直接部署为静态站点
- 原生 Web Animations API：标题解码、内容阶梯入场、导航卡片变形切场与菜单动画
- 标题容器固定尺寸，字符动画位于绝对定位覆盖层，不参与页面排版
- 支持 `prefers-reduced-motion`
