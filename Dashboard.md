# 📊 Knowledge Gallery

```dataviewjs
const pages = dv.pages()
    .where(p => p.type == "concept");

for (let page of pages) {

    dv.el("div", `
<div class="notion-card">

<div class="title">${page.file.name}</div>

<div class="meta">
${page.domain ?? "no domain"} / ${page.topic ?? ""}
</div>

</div>
`);
}
```