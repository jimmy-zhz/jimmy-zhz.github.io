// 让右侧栏里的「关系图谱」「反向链接」支持单独折叠，默认折叠并沉到底部，
// 把空间让给目录（.toc 用 flex:1 占满剩余空间，样式在 sidebarToggle.scss 里）。
const SECTION_SELECTORS = [".graph", ".backlinks"] as const

const storageKey = (selector: string) => `sidebar-section-${selector.replace(".", "")}-collapsed`

function setupSectionToggles() {
  for (const selector of SECTION_SELECTORS) {
    const sections = document.querySelectorAll<HTMLElement>(`.sidebar.right ${selector}`)
    for (const section of sections) {
      const heading = section.querySelector("h3")
      if (!heading) continue

      const key = storageKey(selector)
      const stored = localStorage.getItem(key)
      // 没有记录过状态时，默认折叠
      const collapsed = stored === null ? true : stored === "true"
      section.classList.toggle("is-collapsed", collapsed)
      heading.setAttribute("role", "button")
      heading.setAttribute("tabindex", "0")
      heading.setAttribute("aria-expanded", String(!collapsed))

      const toggle = () => {
        const next = !section.classList.contains("is-collapsed")
        section.classList.toggle("is-collapsed", next)
        heading.setAttribute("aria-expanded", String(!next))
        localStorage.setItem(key, String(next))
      }

      const onKeydown = (e: KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          toggle()
        }
      }

      heading.addEventListener("click", toggle)
      heading.addEventListener("keydown", onKeydown)
      window.addCleanup(() => {
        heading.removeEventListener("click", toggle)
        heading.removeEventListener("keydown", onKeydown)
      })
    }
  }
}

document.addEventListener("nav", setupSectionToggles)
document.addEventListener("render", setupSectionToggles)
