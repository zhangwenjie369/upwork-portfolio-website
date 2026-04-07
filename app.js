// ═══════════════════════════════════════════════════
//  i18n Dictionary
//  Rules:
//    - EN page: show English name (Wenjie Z.), global email, Upwork link
//    - ZH page: show Chinese name (张文杰), both emails, phone, Upwork link
// ═══════════════════════════════════════════════════
const i18n = {
  en: {
    // ── Nav ──
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'nav.hire': 'Hire Me on Upwork',

    // ── Hero ──
    'hero.badge': 'Available for Work',
    'hero.avail': 'Open to Projects',
    'hero.title2': 'Developer',
    'hero.exp': '10+ Years · Pixel-Perfect · Fast Delivery',
    'hero.sub': 'I craft high-performance business websites, landing pages, and Figma-to-code conversions that drive real results. Trusted by 50+ global clients on Upwork.',
    'hero.cta1': 'Hire Me on Upwork',
    'hero.cta2': 'View Services',
    'hero.rating': '5.0 · 80+ Reviews',
    'hero.upwork': 'Top Rated on Upwork',
    'hero.speed': '48h Delivery',
    'hero.scroll': 'Scroll Down',

    // ── Stats ──
    'stat.years': 'Years Exp.',
    'stat.projects': 'Projects Done',
    'stat.clients': 'Happy Clients',
    'stat.rating': 'Rating Score',

    // ── About ──
    'about.badge': 'About Me',
    'about.title': 'Turning Designs Into<br/><span class="gradient-text">High-Performance</span> Websites',
    'about.desc': 'With 10+ years of front-end expertise, I specialize in building pixel-perfect business websites and marketing landing pages. From Figma mockup to fully deployed site — I deliver on time, every time.',
    'about.badge1a': 'Top Rated',
    'about.badge1b': 'Upwork 2024',
    'about.badge2a': 'Fast Delivery',
    'about.badge2b': 'Avg. turnaround',
    'about.exp1t': 'Business Website Specialist',
    'about.exp1d': 'Corporate sites, SaaS landing pages, e-commerce storefronts',
    'about.exp2t': 'Pixel-Perfect Figma-to-Code',
    'about.exp2d': 'I turn any design file into production-ready, responsive HTML/CSS/JS',
    'about.exp3t': 'Global Client Experience',
    'about.exp3d': 'US, UK, AU, CA clients — fluent communication in English',
    'about.process': 'My Process',
    'about.step1t': 'Brief &amp; Discovery',
    'about.step1d': 'Understand your brand, goals, and target audience',
    'about.step2t': 'Design &amp; Develop',
    'about.step2d': 'Pixel-perfect, responsive, and performance-optimized code',
    'about.step3t': 'Deliver &amp; Deploy',
    'about.step3d': 'Clean code handoff + deployment on your preferred platform',

    // ── Services ──
    'services.badge': 'What I Do',
    'services.title': 'Services That<br/><span class="gradient-text">Drive Results</span>',
    'services.desc': 'End-to-end front-end development services for businesses that want to stand out online.',
    's1.title': 'Figma to Website',
    's1.desc': 'Pixel-perfect conversion of any Figma, Adobe XD or Sketch design into clean, optimized HTML/CSS/JS.',
    's1.tag': 'Design → Code',
    's2.title': 'Responsive Business Site',
    's2.desc': 'Full corporate websites that look stunning on every device — desktop, tablet, and mobile.',
    's2.tag': 'All Devices',
    's3.title': 'Landing Page Development',
    's3.desc': 'High-converting marketing landing pages with animations, CTA sections, and optimized performance.',
    's3.tag': 'High Conversion',
    's4.title': 'Website Optimization',
    's4.desc': 'Speed audit, Core Web Vitals improvement, SEO fixes, and code refactoring for better performance.',
    's4.tag': 'Performance ↑',

    // ── Testimonials ──
    't1.text': '"Wenjie delivered our 5-page business website in just 3 days. Pixel-perfect match to our Figma design, clean code, and great communication throughout the project. Helped us get our business online quickly, highly recommend."',
    't1.name': 'James Mitchell',
    't1.loc': '🇺🇸 Small Business Owner, New York, USA',
    't2.text': '"Excellent Figma to HTML work with amazing attention to detail. The site works perfectly on every device, and Wenjie handled all my small tweaks within hours. I\'ll be working with him on all my client projects from now on."',
    't2.name': 'Sarah Clarke',
    't2.loc': '🇬🇧 Freelance Web Designer, London, UK',
    't3.text': '"Fast, professional, and exactly what we needed. The landing page he built boosted our conversion rate by 28%, delivered on time with zero revisions needed. Great value for the price."',
    't3.name': 'Ryan Lee',
    't3.loc': '🇦🇺 Digital Marketing Specialist, Sydney, Australia',

    // ── Skills ──
    'skills.badge': 'Technical Stack',
    'skills.title': 'Skills &amp;<br/><span class="gradient-text">Technologies</span>',
    'skills.desc': 'Modern tools and frameworks for building fast, scalable, and beautiful web experiences.',
    'skills.tools': 'Tools &amp; Ecosystem',
    'skills.spec': 'Core Specialties',
    'spec.p2c': 'Pixel-Perfect',
    'spec.resp': 'Responsive',
    'spec.perf': 'Performance',
    'spec.anim': 'Animations',

    // ── Contact / CTA ──
    'cta.avail': 'Currently Available · Fast Response',
    'cta.title': 'Ready to Build<br/><span class="gradient-text">Your Dream Website?</span>',
    'cta.desc': "Let's create something exceptional together. Click the button below to hire me directly on Upwork — I'll respond within a few hours.",
    'cta.btn1': 'Hire Me on Upwork',
    'cta.emailLabel': 'Email (Global)',
    'cta.resp': 'Response Time',
    'cta.respval': '&lt; 4 Hours',
    'cta.avail2': 'Availability',
    'cta.avail2val': 'Open to Work ✓',
    'cta.timezone': 'Time Zone',
    'cta.tzval': 'UTC+8 · Flexible',
    'cta.rate': 'Rating',

    // ── Footer ──
    'footer.tagline': 'Senior Front-End Developer',
    'footer.copy': '© 2024 Wenjie Z. All rights reserved.',
    'footer.top': '↑ Back to Top',
  },

  zh: {
    // ── Nav ──
    'nav.about': '关于我',
    'nav.services': '服务',
    'nav.skills': '技能',
    'nav.contact': '联系',
    'nav.hire': '在Upwork雇佣我',

    // ── Hero ──
    'hero.badge': '接受工作邀约',
    'hero.avail': '开放合作',
    'hero.title2': '开发工程师',
    'hero.exp': '10年经验 · 像素级还原 · 快速交付',
    'hero.sub': '专注企业官网、营销落地页、Figma转代码，10年经验助力全球50+客户提升品牌形象与转化率。',
    'hero.cta1': '在Upwork雇佣我',
    'hero.cta2': '查看服务',
    'hero.rating': '5.0 · 80+ 条评价',
    'hero.upwork': 'Upwork 顶级认证',
    'hero.speed': '48小时交付',
    'hero.scroll': '向下滚动',

    // ── Stats ──
    'stat.years': '年经验',
    'stat.projects': '项目完成',
    'stat.clients': '满意客户',
    'stat.rating': '评分',

    // ── About ──
    'about.badge': '关于我',
    'about.title': '将设计转化为<br/><span class="gradient-text">高性能</span>网站',
    'about.desc': '10年以上前端开发经验，专注像素级还原企业官网与营销落地页。从 Figma 设计稿到完整部署，准时交付，品质有保障。',
    'about.badge1a': '顶级认证',
    'about.badge1b': 'Upwork 2024',
    'about.badge2a': '快速交付',
    'about.badge2b': '平均周期48h',
    'about.exp1t': '企业官网专家',
    'about.exp1d': '企业官网、SaaS落地页、电商店铺',
    'about.exp2t': '像素级Figma转代码',
    'about.exp2d': '将任何设计稿转化为生产级响应式 HTML/CSS/JS',
    'about.exp3t': '全球客户服务经验',
    'about.exp3d': '服务美国、英国、澳洲、加拿大客户，英文沟通流畅',
    'about.process': '工作流程',
    'about.step1t': '需求沟通',
    'about.step1d': '深入了解您的品牌、目标和目标受众',
    'about.step2t': '设计与开发',
    'about.step2d': '像素级、响应式、高性能优化代码',
    'about.step3t': '交付与部署',
    'about.step3d': '整洁代码交接 + 部署到您偏好的平台',

    // ── Services ──
    'services.badge': '我的服务',
    'services.title': '为业务增长赋能<br/><span class="gradient-text">的服务</span>',
    'services.desc': '为希望在线脱颖而出的企业提供全流程前端开发服务。',
    's1.title': 'Figma 转官网',
    's1.desc': '将 Figma、Adobe XD 或 Sketch 设计稿像素级转化为整洁、优化的 HTML/CSS/JS 代码。',
    's1.tag': '设计 → 代码',
    's2.title': '响应式企业官网',
    's2.desc': '完整企业官网，完美适配桌面、平板、手机所有设备。',
    's2.tag': '全设备适配',
    's3.title': '落地页开发',
    's3.desc': '高转化率营销落地页，带精美动效、CTA区块和性能优化。',
    's3.tag': '高转化率',
    's4.title': '网站性能优化',
    's4.desc': '速度审查、核心网页指标提升、SEO修复和代码重构。',
    's4.tag': '性能提升 ↑',

    // ── Testimonials ──
    't1.text': '"张文杰（Wenjie）仅用3天就交付了我们的5页企业官网，与Figma设计稿像素级还原，代码整洁规范，项目全程沟通顺畅，帮我们快速完成了业务线上化，强烈推荐！"',
    't1.name': 'James Mitchell',
    't1.loc': '🇺🇸 小企业主，美国纽约',
    't2.text': '"非常出色的Figma转代码工作，对细节的把控极其到位。网站在所有设备上都完美适配，几小时内就完成了我所有的微调需求，未来我所有的客户项目都会和他合作。"',
    't2.name': 'Sarah Clarke',
    't2.loc': '🇬🇧 自由网页设计师，英国伦敦',
    't3.text': '"高效、专业，完全符合我们的需求。他开发的落地页帮我们提升了28%的转化率，按时交付零返工，性价比极高。"',
    't3.name': 'Ryan Lee',
    't3.loc': '🇦🇺 数字营销专员，澳大利亚悉尼',

    // ── Skills ──
    'skills.badge': '技术栈',
    'skills.title': '技能与<br/><span class="gradient-text">技术</span>',
    'skills.desc': '现代工具和框架，构建快速、可扩展、精美的网页体验。',
    'skills.tools': '工具与生态',
    'skills.spec': '核心专长',
    'spec.p2c': '像素级还原',
    'spec.resp': '响应式设计',
    'spec.perf': '性能优化',
    'spec.anim': '动效实现',

    // ── Contact / CTA ──
    'cta.avail': '当前可接单 · 快速响应',
    'cta.title': '准备好打造<br/><span class="gradient-text">您的理想网站了吗？</span>',
    'cta.desc': '点击下方按钮在 Upwork 直接雇佣我，或通过邮件/手机联系，我将在数小时内回复。',
    'cta.btn1': '在Upwork雇佣我',
    'cta.emailLabel': '海外邮箱',
    'cta.resp': '响应时间',
    'cta.respval': '&lt; 4 小时',
    'cta.avail2': '接单状态',
    'cta.avail2val': '开放合作 ✓',
    'cta.timezone': '时区',
    'cta.tzval': 'UTC+8 · 灵活配合',
    'cta.rate': '评分',

    // ── Footer ──
    'footer.tagline': '高级前端开发工程师',
    'footer.copy': '© 2024 张文杰（Wenjie Z.）保留所有权利。',
    'footer.top': '↑ 返回顶部',
  }
};

// ═══════════════════════════════════════════════════
//  Language state
// ═══════════════════════════════════════════════════
let currentLang = 'en';
let typedWords = ['Senior Front-End', 'Business Website'];

/**
 * Switch site language.
 * EN → show EN name, hide zh-only elements
 * ZH → show CN name, show zh-only elements
 */
function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key] !== undefined) {
      el.innerHTML = i18n[lang][key];
    }
  });

  // Toggle zh-only elements (domestic email, phone)
  document.querySelectorAll('.zh-only').forEach(el => {
    el.style.display = lang === 'zh' ? '' : 'none';
  });

  // Update name in navbar logo and footer
  const navName = document.getElementById('nav-name');
  const footerName = document.getElementById('footer-name');
  if (navName) navName.textContent = lang === 'zh' ? '张文杰 (Wenjie Z.)' : 'Wenjie Z.';
  if (footerName) footerName.textContent = lang === 'zh' ? '张文杰 (Wenjie Z.)' : 'Wenjie Z.';

  // Sync all lang-toggle buttons (desktop + mobile)
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  // desktop buttons [0,1], mobile buttons [2,3]
  const idx = lang === 'en' ? 0 : 1;
  const allBtns = document.querySelectorAll('.lang-btn');
  if (allBtns[idx])     allBtns[idx].classList.add('active');
  if (allBtns[idx + 2]) allBtns[idx + 2].classList.add('active');

  // Update typed animation words
  typedWords = lang === 'en'
    ? ['Senior Front-End', 'Business Website']
    : ['高级前端开发', '企业官网专家'];
}

// ═══════════════════════════════════════════════════
//  Typed Effect
// ═══════════════════════════════════════════════════
let typedIndex = 0, charIndex = 0, isDeleting = false;
const typedEl = document.getElementById('typed-text');

function typeLoop() {
  const word = typedWords[typedIndex % typedWords.length];
  typedEl.textContent = isDeleting
    ? word.substring(0, --charIndex)
    : word.substring(0, ++charIndex);

  let delay = isDeleting ? 60 : 100;
  if (!isDeleting && charIndex >= word.length) { delay = 2000; isDeleting = true; }
  else if (isDeleting && charIndex <= 0) { isDeleting = false; typedIndex++; charIndex = 0; delay = 400; }
  setTimeout(typeLoop, delay);
}
typeLoop();

// ═══════════════════════════════════════════════════
//  Navbar scroll effect
// ═══════════════════════════════════════════════════
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

// ═══════════════════════════════════════════════════
//  Mobile Menu
// ═══════════════════════════════════════════════════
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const ham = document.getElementById('hamburger');
  menu.classList.toggle('open');
  ham.classList.toggle('open');
  document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
}

// ═══════════════════════════════════════════════════
//  Scroll-triggered fade-up animations
// ═══════════════════════════════════════════════════
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      // Animate skill bars inside the revealed element
      e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

// Skills section: trigger bars when section enters viewport
const skillsSection = document.getElementById('skills');
if (skillsSection) {
  new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      setTimeout(() => {
        document.querySelectorAll('.skill-bar-fill').forEach(b => {
          b.style.width = b.dataset.width + '%';
        });
      }, 200);
    }
  }, { threshold: 0.1 }).observe(skillsSection);
}

// ═══════════════════════════════════════════════════
//  Counter animation for stat cards
// ═══════════════════════════════════════════════════
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.querySelectorAll('.counter-num').forEach(counter => {
      const target = +counter.dataset.target;
      let curr = 0;
      const step = Math.ceil(target / 40);
      const timer = setInterval(() => {
        curr = Math.min(curr + step, target);
        counter.textContent = curr;
        if (curr >= target) clearInterval(timer);
      }, 40);
    });
    counterObserver.unobserve(e.target);
  });
}, { threshold: 0.3 });

document.querySelectorAll('.stat-card').forEach(el => {
  counterObserver.observe(el.parentElement);
});

// ═══════════════════════════════════════════════════
//  Particle Canvas
// ═══════════════════════════════════════════════════
(function () {
  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.r = Math.random() * 1.8 + 0.4;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      const a = Math.random() * 0.5 + 0.1;
      this.color = Math.random() > 0.5
        ? `rgba(37,99,235,${a})` : `rgba(6,182,212,${a})`;
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.color; ctx.fill();
    }
  }

  function init() {
    resize();
    const count = Math.min(Math.floor((W * H) / 8000), 120);
    particles = Array.from({ length: count }, () => new Particle());
  }

  function drawLines() {
    const MAX = 130;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < MAX) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(37,99,235,${(1 - d / MAX) * 0.15})`;
          ctx.lineWidth = 0.8; ctx.stroke();
        }
      }
    }
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    drawLines();
    requestAnimationFrame(loop);
  }

  init(); loop();
  window.addEventListener('resize', init);
})();
