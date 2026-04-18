// =========================
// 🌐 LANGUAGE SYSTEM (FULL)
// =========================

const translations = {
  en: {
    title: "Quiet Growth",
    subtitle: "UI/UX Designer & Front-End Developer",

    aboutTitle: "About Me",
    about: [
      "I’m M. Dzul'Arsyil Aziz, a Software and Game Development student at SMKN 1 Karawang with a focus on UI/UX design and front-end development.",
      "I enjoy turning ideas into structured and user-centered digital experiences through clean interfaces and thoughtful design.",
      "Currently, I’m improving my skills through real projects while also learning Japanese (JLPT N5 level) as part of my personal growth.",
      "Open to internship, collaboration, and opportunities to grow."
    ],

    positioningTitle: "What I Do",
    positioningText:
      "I design and build user-centered interfaces with a focus on clarity, usability, and structured front-end implementation.",

    skillsTitle: "Skills",
    skills: [
      "UI/UX Design",
      "Frontend Development",
      "Design Systems",
      "UX Thinking",
      "Responsive Design"
    ],

    toolsTitle: "Tools",

    storyTitle: "How I Work",
    story: [
      "I start by understanding the problem and the user behind it.",
      "Then I translate ideas into structured design.",
      "Finally, I bring those designs to life through clean code.",
      "Design → Build → Improve"
    ],

    portfolio: "Selected Works",

    quoteText: "「一歩ずつでも前へ」",
    quoteSub: "Even one step forward is still progress",

    cta: "Let’s build something together",
    contact: "Contact Me",
    view: "View Work"
  },

  id: {
    title: "Bertumbuh dengan tenang",
    subtitle: "UI/UX Designer & Front-End Developer",

    aboutTitle: "Tentang Saya",
    about: [
      "Saya M. Dzul'Arsyil Aziz, siswa Rekayasa Perangkat Lunak dan Game di SMKN 1 Karawang.",
      "Saya fokus pada UI/UX dan front-end development.",
      "Saya mengubah ide menjadi pengalaman digital yang terstruktur dan berfokus pada pengguna.",
      "Terbuka untuk magang, kolaborasi, dan kesempatan berkembang."
    ],

    positioningTitle: "Apa yang Saya Lakukan",
    positioningText:
      "Saya merancang dan membangun antarmuka digital yang berfokus pada pengguna dengan pendekatan yang jelas dan terstruktur.",

    skillsTitle: "Keahlian",
    skills: [
      "UI/UX Design",
      "Frontend Development",
      "Design Systems",
      "UX Thinking",
      "Responsive Design"
    ],

    toolsTitle: "Tools",

    storyTitle: "Cara Saya Bekerja",
    story: [
      "Saya mulai dengan memahami masalah dan pengguna.",
      "Kemudian menerjemahkan ide menjadi desain yang terstruktur.",
      "Lalu mengimplementasikannya ke dalam kode.",
      "Design → Build → Improve"
    ],

    portfolio: "Karya Terpilih",

    quoteText: "「一歩ずつでも前へ」",
    quoteSub: "Satu langkah maju tetap berarti kemajuan",

    cta: "Mari kita bangun sesuatu bersama",
    contact: "Hubungi Saya",
    view: "Lihat Karya"
  },

  jp: {
    title: "静かに成長する",
    subtitle: "UI/UXデザイナー & フロントエンド開発者",

    aboutTitle: "私について",
    about: [
      "私はM. Dzul'Arsyil Aziz、ソフトウェアとゲーム開発の学生です。",
      "UI/UXとフロントエンド開発に興味があります。",
      "アイデアをユーザー中心のデジタル体験に変えます。",
      "インターンやコラボレーションの機会を歓迎します。"
    ],

    positioningTitle: "私の役割",
    positioningText:
      "ユーザー中心のインターフェースを設計し、構造的に実装します。",

    skillsTitle: "スキル",
    skills: [
      "UI/UXデザイン",
      "フロントエンド開発",
      "デザインシステム",
      "UX思考",
      "レスポンシブデザイン"
    ],

    toolsTitle: "ツール",

    storyTitle: "仕事の進め方",
    story: [
      "まず問題とユーザーを理解します。",
      "次に構造的なデザインに落とし込みます。",
      "最後にコードで実装します。",
      "Design → Build → Improve"
    ],

    portfolio: "作品",

    quoteText: "「一歩ずつでも前へ」",
    quoteSub: "一歩でも前に進むことが大切です",

    cta: "一緒に作りましょう",
    contact: "連絡する",
    view: "作品を見る"
  }
};

// helper biar aman
function setText(selector, text) {
  const el = document.querySelector(selector);
  if (el) el.innerText = text;
}

function setLang(lang) {
  const t = translations[lang];
  localStorage.setItem("lang", lang);

  setText("#title", t.title);
  setText("#subtitle", t.subtitle);
  setText("#about-title", t.aboutTitle);

  // about
  const about = document.getElementById("about-text");
  if (about) {
    about.innerHTML = t.about.map(p => `<p>${p}</p>`).join("");
  }

  // positioning
  setText("#positioning-title", t.positioningTitle);
  setText("#positioning-text", t.positioningText);

  // skills
  setText("#skills-title", t.skillsTitle);
  const skills = document.getElementById("skills-list");
  if (skills) {
    skills.innerHTML = t.skills.map(s => `<span>${s}</span>`).join("");
  }

  // tools
  setText("#tools-title", t.toolsTitle);

  // story
  setText("#story-title", t.storyTitle);
  const story = document.getElementById("story-text");
  if (story) {
    story.innerHTML = t.story.map(p => `<p>${p}</p>`).join("");
  }

  // portfolio
  setText("#portfolio-title", t.portfolio);

  document.querySelectorAll(".overlay").forEach(el => {
    el.innerText = t.view;
  });

  // quote
  setText("#quote-text", t.quoteText);
  setText("#quote-sub", t.quoteSub);

  // CTA
  setText("#cta-text", t.cta);
  setText("#cta-contact", t.contact);
  setText("#cta-view", t.view);
}

// =========================
// 🌗 THEME
// =========================

function toggleTheme() {
  const body = document.body;
  const newTheme = body.dataset.theme === "dark" ? "light" : "dark";
  body.dataset.theme = newTheme;
  localStorage.setItem("theme", newTheme);
}

// =========================
// 🌸 SAKURA (SAMA AJA)
// =========================

const canvas = document.getElementById("sakura");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight + "px";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let petals = Array.from({ length: 40 }, () => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  size: Math.random() * 6 + 2,
  speed: Math.random() * 1 + 0.5,
  angle: Math.random() * Math.PI
}));

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  petals.forEach(p => {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.angle);

    ctx.fillStyle = "rgba(255,182,193,0.9)";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(2, -p.size, p.size, -p.size, p.size, 0);
    ctx.bezierCurveTo(p.size, p.size, 2, p.size, 0, 0);
    ctx.fill();

    ctx.restore();

    p.y += p.speed;
    p.x += Math.sin(p.y * 0.01);
    p.angle += 0.01;

    if (p.y > window.innerHeight) {
      p.y = 0;
      p.x = Math.random() * window.innerWidth;
    }
  });

  requestAnimationFrame(draw);
}

draw();

// =========================
// INIT
// =========================

window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  const savedTheme = localStorage.getItem("theme") || "dark";

  document.body.dataset.theme = savedTheme;
  setLang(savedLang);
});