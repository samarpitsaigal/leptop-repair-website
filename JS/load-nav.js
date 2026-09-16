document.addEventListener("DOMContentLoaded", () => {

  const inPages = /\/PAGES\//.test(location.pathname);

  fetch(inPages ? "./navbar.html" : "./PAGES/navbar.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("navbar").innerHTML = html;

      document.querySelectorAll("#navbar a").forEach(a => {
        let href = a.getAttribute("href") || "";
        if (inPages) {
          href = href.replace(/^\.\/PAGES\//, "./");
        } else {
          href = href.replace(/^\.\.\/index\.html$/, "./index.html");
        }
        a.setAttribute("href", href);
      });

      setupDrawer();
    })
    .catch(() => {});

});

function setupDrawer() {
  const toggle = document.querySelector("#navbar .menu-toggle");
  const drawer = document.querySelector("#navbar .nav-drawer");
  const overlay = document.querySelector("#navbar .drawer-overlay");
  if (!toggle || !drawer || !overlay) return;

  const open = () => {
    drawer.classList.add("open");
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    drawer.classList.remove("open");
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  };

  toggle.addEventListener("click", () => {
    drawer.classList.contains("open") ? close() : open();
  });
  overlay.addEventListener("click", close);
  drawer.querySelectorAll("a, .drawer-close").forEach(el =>
    el.addEventListener("click", close)
  );
}