# Sharpcaterpillar Portfolio

个人介绍与作品集静态站点。页面结构和动画节奏参考 `OriginSites/` 中保存的 Infinite Imaginations 本地镜像，内容全部替换为 Sharpcaterpillar 的个人经历与真实项目。

## 本地预览

```bash
python3 -m http.server 4173
```

访问：<http://127.0.0.1:4173/#/hello/>

## 技术说明

- 零运行时依赖，直接部署为静态站点。
- 使用原生 Web Animations API 实现标题解码、内容阶梯入场、导航卡片变形切场和菜单动画。
- 标题容器固定尺寸，字符动画位于绝对定位覆盖层，不参与页面排版。
- 支持 `prefers-reduced-motion`。
