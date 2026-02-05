// 年号
document.getElementById("year").textContent = new Date().getFullYear();

// SPメニュー
const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const open = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  // メニュークリックで閉じる（SP）
  siteNav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// スクロールで表示（reveal）
const targets = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("is-visible");
    });
  },
  { threshold: 0.12 }
);

targets.forEach((t) => io.observe(t));

// フォーム（サンプル送信）
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

if (form && msg) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    msg.textContent = "送信ありがとうございます。内容を確認し、折り返しご連絡いたします。";
    form.reset();
  });
}
