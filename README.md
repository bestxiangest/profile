# Sharpcaterpillar Portfolio

面向保研、实习与就业场景的个人介绍与作品集静态站点。页面结构与动画节奏参考 `OriginSites/` 中保存的 Infinite Imaginations 本地镜像；内容来自真实简历、获奖证书、科研成果与项目经历。

## 页面内容

- `#/about/`：教育背景、方向与个人经历
- `#/achievements/`：GPA、专业排名、科研成果、重点奖项、学生荣誉与可放大的证书档案
- `#/experience/`：青岛华睿源科技有限公司工业互联网实习经历
- `#/works/`：开源、私有与企业项目作品集
- `#/esh-inspection/`、`#/label-check/`：两家企业项目的独立案例页
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
