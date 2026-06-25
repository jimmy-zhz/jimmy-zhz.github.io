const SIDES = ["left", "right"] as const
type Side = (typeof SIDES)[number]

const storageKey = (side: Side) => `sidebar-${side}-collapsed`
const isCollapsed = (side: Side) =>
  document.documentElement.getAttribute(`data-sidebar-${side}`) === "collapsed"

const setCollapsed = (side: Side, collapsed: boolean) => {
  if (collapsed) {
    document.documentElement.setAttribute(`data-sidebar-${side}`, "collapsed")
  } else {
    document.documentElement.removeAttribute(`data-sidebar-${side}`)
  }
  localStorage.setItem(storageKey(side), String(collapsed))
}

// Apply the persisted state before the DOM is painted to avoid a flash of
// the sidebar before it collapses.
for (const side of SIDES) {
  if (localStorage.getItem(storageKey(side)) === "true") {
    document.documentElement.setAttribute(`data-sidebar-${side}`, "collapsed")
  }
}

function setupSidebarToggles() {
  for (const side of SIDES) {
    const button = document.querySelector(
      `.sidebar-toggle[data-sidebar="${side}"]`,
    ) as HTMLButtonElement | null
    if (!button) continue

    const sync = () => {
      const collapsed = isCollapsed(side)
      button.setAttribute("aria-expanded", String(!collapsed))
      button.classList.toggle("is-collapsed", collapsed)
    }
    sync()

    const onClick = () => {
      setCollapsed(side, !isCollapsed(side))
      sync()
    }

    button.addEventListener("click", onClick)
    window.addCleanup(() => button.removeEventListener("click", onClick))
  }
}

document.addEventListener("nav", setupSidebarToggles)
document.addEventListener("render", setupSidebarToggles)
