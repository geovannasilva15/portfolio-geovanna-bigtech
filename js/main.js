(() => {
  "use strict";

  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

  const translations = {
    pt: {
      navAbout:"Sobre", navWork:"Atuação", navProjects:"Projetos", navJourney:"Trajetória", navResearch:"Pesquisa", navSkills:"Competências", navContact:"Contato",
      heroEyebrow:"Analista de Inteligência Artificial",
      heroTitle:"Transformo IA em soluções práticas para pessoas e negócios.",
      heroLead:"Trabalho na interseção entre IA Generativa, software, automação e aprendizagem. Minha trajetória combina tecnologia, comunicação e construção de soluções com aplicação real.",
      heroProjects:"Conheça meus projetos",
      aboutLabel:"01 • Sobre mim", aboutTitle:"Uma trajetória que começou em TI e evoluiu para Inteligência Artificial.",
      workLabel:"02 • O que eu faço", workTitle:"Quatro frentes que resumem minha atuação profissional.",
      projectsLabel:"03 • Projetos", projectsTitle:"Projetos que mostram como eu penso e construo tecnologia.",
      journeyLabel:"04 • Trajetória & Formação", journeyTitle:"Uma evolução profissional direta e consistente.",
      researchLabel:"05 • Pesquisa", researchTitle:"Tecnologia também é sobre quem participa dela.",
      skillsLabel:"06 • Competências", skillsTitle:"O que sustenta meus projetos e minha atuação.",
      beyondLabel:"07 • Além do código", beyondTitle:"Tecnologia, para mim, também é comunidade, aprendizagem e colaboração.",
      contactLabel:"08 • Contato", contactTitle:"Vamos conversar?"
    },
    en: {
      navAbout:"About", navWork:"What I do", navProjects:"Projects", navJourney:"Journey", navResearch:"Research", navSkills:"Skills", navContact:"Contact",
      heroEyebrow:"Artificial Intelligence Analyst",
      heroTitle:"I turn AI into practical solutions for people and businesses.",
      heroLead:"I work at the intersection of Generative AI, software, automation and learning. My career combines technology, communication and building solutions with real-world application.",
      heroProjects:"Explore my projects",
      aboutLabel:"01 • About me", aboutTitle:"A career that started in IT and evolved into Artificial Intelligence.",
      workLabel:"02 • What I do", workTitle:"Four areas that summarize my professional work.",
      projectsLabel:"03 • Projects", projectsTitle:"Projects that show how I think about and build technology.",
      journeyLabel:"04 • Journey & Education", journeyTitle:"A direct and consistent professional evolution.",
      researchLabel:"05 • Research", researchTitle:"Technology is also about who gets to participate.",
      skillsLabel:"06 • Skills", skillsTitle:"The skills behind my projects and professional work.",
      beyondLabel:"07 • Beyond code", beyondTitle:"For me, technology is also about community, learning and collaboration.",
      contactLabel:"08 • Contact", contactTitle:"Let's connect."
    },
    es: {
      navAbout:"Sobre mí", navWork:"Qué hago", navProjects:"Proyectos", navJourney:"Trayectoria", navResearch:"Investigación", navSkills:"Competencias", navContact:"Contacto",
      heroEyebrow:"Analista de Inteligencia Artificial",
      heroTitle:"Transformo la IA en soluciones prácticas para personas y negocios.",
      heroLead:"Trabajo en la intersección entre IA Generativa, software, automatización y aprendizaje. Mi trayectoria combina tecnología, comunicación y construcción de soluciones con aplicación real.",
      heroProjects:"Conoce mis proyectos",
      aboutLabel:"01 • Sobre mí", aboutTitle:"Una trayectoria que comenzó en TI y evolucionó hacia la Inteligencia Artificial.",
      workLabel:"02 • Qué hago", workTitle:"Cuatro áreas que resumen mi actuación profesional.",
      projectsLabel:"03 • Proyectos", projectsTitle:"Proyectos que muestran cómo pienso y construyo tecnología.",
      journeyLabel:"04 • Trayectoria y Formación", journeyTitle:"Una evolución profesional directa y consistente.",
      researchLabel:"05 • Investigación", researchTitle:"La tecnología también trata de quién puede participar.",
      skillsLabel:"06 • Competencias", skillsTitle:"Las competencias que sostienen mis proyectos y mi trabajo.",
      beyondLabel:"07 • Más allá del código", beyondTitle:"Para mí, la tecnología también es comunidad, aprendizaje y colaboración.",
      contactLabel:"08 • Contacto", contactTitle:"¿Hablamos?"
    }
  };

  function applyLanguage(lang) {
    const selected = translations[lang] ? lang : "pt";
    const dict = translations[selected];
    localStorage.setItem("portfolio_language", selected);
    document.documentElement.lang = selected === "pt" ? "pt-BR" : selected;

    $$("[data-i18n]").forEach(el => {
      const text = dict[el.dataset.i18n];
      if (text) el.textContent = text;
    });

    $$(".lang-btn").forEach(btn => {
      const active = btn.dataset.lang === selected;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
  }

  function setupMenu() {
    const toggle = $(".nav-toggle");
    const menu = $(".menu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    menu.addEventListener("click", event => {
      if (event.target.closest("a")) {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  function setupReveal() {
    const items = $$(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(item => item.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .12, rootMargin: "0px 0px -35px 0px" });

    items.forEach(item => observer.observe(item));
  }

  function setupScroll() {
    const button = $(".back-to-top");
    const update = () => button?.classList.toggle("show", window.scrollY > 600);
    window.addEventListener("scroll", update, { passive: true });
    update();
    button?.addEventListener("click", () => window.scrollTo({ top:0, behavior:"smooth" }));
  }

  function init() {
    setupMenu();
    setupReveal();
    setupScroll();

    $$(".lang-btn").forEach(btn => {
      btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
    });

    applyLanguage(localStorage.getItem("portfolio_language") || "pt");

    const year = $("#year");
    if (year) year.textContent = new Date().getFullYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();