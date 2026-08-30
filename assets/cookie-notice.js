/* ============================================================
   Centerscout GmbH — Cookie-/Datenschutzhinweis
   Rein informativ: Die Website setzt keine Cookies zu Analyse-
   oder Marketingzwecken und lädt keine Inhalte von Dritten.
   Der Hinweis blendet sich nach Bestätigung dauerhaft aus;
   dazu wird ein einzelner Wert technisch notwendig lokal im
   Browser gespeichert (localStorage, keine Übertragung).
   ============================================================ */
(function () {
  "use strict";

  var KEY = "cs-hinweis-bestaetigt";

  try {
    if (window.localStorage && localStorage.getItem(KEY) === "1") return;
  } catch (e) {
    /* localStorage nicht verfügbar — Hinweis wird bei jedem Aufruf gezeigt */
  }

  var css =
    '.cs-notice{position:fixed;left:0;right:0;bottom:0;z-index:9999;' +
    'background:var(--white,#fff);border-top:2px solid var(--ink,#2E3440);' +
    'font-family:var(--mono,ui-monospace,monospace);color:var(--mid,#5A6270);' +
    'font-size:13px;line-height:1.55}' +
    '.cs-notice__inner{width:100%;max-width:var(--page,1180px);margin-inline:auto;' +
    'padding:16px var(--gutter,24px);display:flex;flex-wrap:wrap;align-items:center;' +
    'gap:14px 28px;justify-content:space-between}' +
    '.cs-notice__text{margin:0;max-width:72ch}' +
    '.cs-notice__text a{color:var(--blue,#3A82D6)}' +
    '.cs-notice__btn{flex-shrink:0;font-family:inherit;font-size:13px;cursor:pointer;' +
    'padding:9px 20px;border:1px solid var(--ink,#2E3440);background:var(--ink,#2E3440);' +
    'color:var(--paper,#FAF9F7);letter-spacing:0.04em}' +
    '.cs-notice__btn:hover{background:#1f2530}' +
    '@media (max-width:640px){.cs-notice__inner{padding:14px 24px}.cs-notice__btn{width:100%}}';

  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  var bar = document.createElement("aside");
  bar.className = "cs-notice";
  bar.setAttribute("role", "region");
  bar.setAttribute("aria-label", "Datenschutzhinweis");
  bar.innerHTML =
    '<div class="cs-notice__inner">' +
    '<p class="cs-notice__text">Diese Website nutzt ausschließlich technisch notwendige Mittel. ' +
    'Es werden keine Cookies zu Analyse- oder Marketingzwecken gesetzt und keine Inhalte von Dritten nachgeladen. ' +
    'Einzelheiten in der <a href="datenschutz.html">Datenschutzerklärung</a>.</p>' +
    '<button type="button" class="cs-notice__btn">Verstanden</button>' +
    "</div>";

  function dismiss() {
    try {
      if (window.localStorage) localStorage.setItem(KEY, "1");
    } catch (e) {}
    bar.remove();
  }

  bar.querySelector(".cs-notice__btn").addEventListener("click", dismiss);
  document.body.appendChild(bar);
})();
