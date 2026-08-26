(() => {
  "use strict";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  const projectCards = `
    <article class="project-card reveal visible" data-project="Neural Rose">
      <img src="./assets/projects/neural-rose.svg" alt="Preview visual do projeto Neural Rose" loading="lazy" />
      <div class="project-body"><span class="project-meta">IA • Risco • Fornecedores</span><h3>Neural Rose</h3><p>Plataforma de IA preditiva para análise de riscos em fornecedores, criada no Hackathon WeHandle x PUC Campinas 2026.</p><div class="tags"><span>IA</span><span>Risk Scoring</span><span>Hackathon</span></div><div class="project-actions"><a href="https://github.com/geovannasilva15/Neural-rose" target="_blank" rel="noopener">GitHub</a></div></div>
    </article>
    <article class="project-card reveal visible" data-project="Proof Before Post">
      <img src="./assets/projects/proof-before-post.svg" alt="Preview visual do projeto Proof Before Post" loading="lazy" />
      <div class="project-body"><span class="project-meta">Educação • Evidências • Web</span><h3>Proof Before Post</h3><p>Ferramenta bilíngue que ajuda criadores a examinar evidências antes de publicar conteúdo, conectando tecnologia, educação e responsabilidade digital.</p><div class="tags"><span>Web</span><span>UX</span><span>Educação</span></div><div class="project-actions"><a href="https://github.com/geovannasilva15/proof-before-post" target="_blank" rel="noopener">GitHub</a><a href="https://proof-before-post.vercel.app/" target="_blank" rel="noopener">Live</a></div></div>
    </article>
    <article class="project-card reveal visible" data-project="BeautyFlow AI">
      <img src="./assets/projects/beautyflow-ai.svg" alt="Preview visual do projeto BeautyFlow AI" loading="lazy" />
      <div class="project-body"><span class="project-meta">SaaS • IA • Gestão</span><h3>BeautyFlow AI</h3><p>Aplicativo inteligente para gestão de negócios da beleza, com proposta de agenda, clientes, serviços, IA generativa e recomendação de serviços.</p><div class="tags"><span>Python</span><span>FastAPI</span><span>LLM</span></div><div class="project-actions"><a href="https://github.com/geovannasilva15/Beautyflow-ai" target="_blank" rel="noopener">GitHub</a></div></div>
    </article>
    <article class="project-card reveal visible" data-project="ETL Python IA">
      <img src="./assets/projects/etl-python-ia.svg" alt="Preview visual do projeto ETL Python IA" loading="lazy" />
      <div class="project-body"><span class="project-meta">Dados • ETL • Automação</span><h3>ETL Python IA</h3><p>Pipeline de ETL com Python e IA para leitura de CSV, geração de mensagens personalizadas e exportação em CSV e JSON.</p><div class="tags"><span>Python</span><span>ETL</span><span>CSV</span></div><div class="project-actions"><a href="https://github.com/geovannasilva15/Etl-python-ia" target="_blank" rel="noopener">GitHub</a></div></div>
    </article>
    <article class="project-card reveal visible" data-project="Projeto AWS Farmácia">
      <img src="./assets/projects/aws-farmacia.svg" alt="Preview visual do projeto AWS Farmácia" loading="lazy" />
      <div class="project-body"><span class="project-meta">Cloud • Arquitetura • AWS</span><h3>Projeto AWS Farmácia</h3><p>Arquitetura em nuvem para uma farmácia fictícia, usando Amazon S3, AWS Lambda e Amazon DynamoDB para automação e escalabilidade.</p><div class="tags"><span>AWS</span><span>Lambda</span><span>DynamoDB</span></div><div class="project-actions"><a href="https://github.com/geovannasilva15/projeto-aws-farmacia" target="_blank" rel="noopener">GitHub</a></div></div>
    </article>
    <article class="project-card reveal visible" data-project="ClariVoz">
      <img src="./assets/projects/clarivoz.svg" alt="Preview visual do projeto ClariVoz" loading="lazy" />
      <div class="project-body"><span class="project-meta">Acessibilidade • Voz • Produto</span><h3>ClariVoz</h3><p>Projeto em evolução com proposta ligada à comunicação, clareza e tecnologia aplicada à experiência de pessoas.</p><div class="tags"><span>Acessibilidade</span><span>Produto</span><span>Web</span></div><div class="project-actions"><a href="https://github.com/geovannasilva15/clarivoz" target="_blank" rel="noopener">GitHub</a></div></div>
    </article>`;

  const minimalTranslations = {
    pt: {
      navHome:"Home", navAbout:"Sobre", navAchievements:"Conquistas", navJourney:"Jornada", navEducation:"Formação", navSkills:"Competências", navProjects:"Projetos", navContact:"Contato", navServices:"Serviços",
      projectsEyebrow:"Projetos com base no GitHub", projectsTitle:"Projetos reais com preview visual, contexto e impacto.",
      project1Text:"Plataforma de IA preditiva para análise de riscos em fornecedores, criada no Hackathon WeHandle x PUC Campinas 2026.",
      project2Text:"Ferramenta bilíngue para ajudar criadores a examinar evidências antes de publicar conteúdo.",
      project3Text:"Projeto em evolução com proposta ligada à comunicação, clareza e tecnologia aplicada à experiência de pessoas."
    },
    en: {
      navHome:"Home", navAbout:"About", navAchievements:"Achievements", navJourney:"Journey", navEducation:"Education", navSkills:"Skills", navProjects:"Projects", navContact:"Contact", navServices:"Services",
      projectsEyebrow:"GitHub-based projects", projectsTitle:"Real projects with visual previews, context and impact.",
      project1Text:"Predictive AI platform for supplier risk analysis, created at the WeHandle x PUC Campinas 2026 Hackathon.",
      project2Text:"Bilingual tool that helps creators examine evidence before publishing content.",
      project3Text:"Evolving project connected to communication, clarity and technology applied to people's experience."
    },
    es: {
      navHome:"Inicio", navAbout:"Sobre mí", navAchievements:"Logros", navJourney:"Trayectoria", navEducation:"Formación", navSkills:"Competencias", navProjects:"Proyectos", navContact:"Contacto", navServices:"Servicios",
      projectsEyebrow:"Proyectos basados en GitHub", projectsTitle:"Proyectos reales con preview visual, contexto e impacto.",
      project1Text:"Plataforma de IA predictiva para análisis de riesgos en proveedores, creada en el Hackathon WeHandle x PUC Campinas 2026.",
      project2Text:"Herramienta bilingüe para ayudar a creadores a examinar evidencias antes de publicar contenido.",
      project3Text:"Proyecto en evolución conectado a comunicación, claridad y tecnología aplicada a la experiencia de personas."
    }
  };

  const typingWords = {
    pt:["IA aplicada a negócios","Engenharia de Software","Liderança feminina em tecnologia","Projetos com impacto real"],
    en:["AI applied to business","Software Engineering","Female leadership in tech","Projects with real impact"],
    es:["IA aplicada a negocios","Ingeniería de Software","Liderazgo femenino en tecnología","Proyectos con impacto real"]
  };

  function injectProfessionalStyles(){
    const style = document.createElement("style");
    style.textContent = `
      .card-icon{display:flex!important;align-items:center!important;justify-content:center!important;width:auto!important;min-width:64px!important;height:auto!important;min-height:38px!important;padding:9px 12px!important;border-radius:999px!important;background:rgba(255,79,135,.12)!important;border:1px solid rgba(255,122,168,.35)!important;color:#fff!important;font-size:.72rem!important;font-weight:900!important;letter-spacing:.08em!important;text-transform:uppercase!important}
      .project-grid{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:18px!important}.project-card{overflow:hidden!important}.project-card img{width:100%!important;aspect-ratio:16/10!important;object-fit:cover!important;background:#101b31!important;border-bottom:1px solid rgba(255,255,255,.12)!important}.project-meta{display:inline-flex;margin-bottom:12px;color:#ff7aa8;font-weight:900;font-size:.76rem;text-transform:uppercase;letter-spacing:.08em}.project-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:18px}.project-actions a{display:inline-flex;padding:8px 12px;border:1px solid rgba(255,255,255,.12);border-radius:999px;font-weight:900;color:#fff;background:rgba(255,255,255,.055)}.project-actions a:hover{border-color:rgba(255,122,168,.45)}
      @media(max-width:1180px){.project-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}}@media(max-width:680px){.project-grid{grid-template-columns:1fr!important}}
    `;
    document.head.appendChild(style);
  }

  function refineVisualIdentity(){
    const labels = ["GOOGLE", "2º LUGAR", "AI + ML", "PESQUISA", "AI OPS"];
    $$(".card-icon").forEach((el, i) => { el.textContent = labels[i] || "TECH"; });
    const projectGrid = $("#projects .project-grid");
    if(projectGrid) projectGrid.innerHTML = projectCards;
    const projectEyebrow = $("#projects .eyebrow");
    if(projectEyebrow) projectEyebrow.textContent = "Projetos com base no GitHub";
    const projectTitle = $("#projects .section-title");
    if(projectTitle) projectTitle.textContent = "Projetos reais com preview visual, contexto e impacto.";
  }

  function setupMenu(){
    const menu = $(".menu"), toggle = $(".nav-toggle");
    if(!menu || !toggle) return;
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      document.body.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.addEventListener("click", e => {
      if(e.target.closest("a")) { menu.classList.remove("open"); document.body.classList.remove("menu-open"); toggle.setAttribute("aria-expanded","false"); }
    });
  }

  function setupReveal(){
    const els = $$(".reveal");
    if(!("IntersectionObserver" in window)){ els.forEach(el=>el.classList.add("visible")); return; }
    const io = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add("visible"); io.unobserve(entry.target); } }), {threshold:.14, rootMargin:"0px 0px -40px 0px"});
    els.forEach(el => io.observe(el));
  }

  function setupScroll(){
    const back = $(".back-to-top"), header = $(".site-header");
    window.addEventListener("scroll", () => { header?.classList.toggle("scrolled", scrollY > 8); back?.classList.toggle("show", scrollY > 520); }, {passive:true});
    back?.addEventListener("click", () => scrollTo({top:0,behavior:"smooth"}));
  }

  function setupLang(){
    let lang = localStorage.getItem("gs_lang") || "pt";
    let timer;
    function startTyping(){
      const el = $("#typing-text"); if(!el) return; clearTimeout(timer);
      const words = typingWords[lang] || typingWords.pt; let w=0,c=0,del=false;
      const loop = () => { const word = words[w]; el.textContent = word.slice(0,c); if(!del && c < word.length){c++; timer=setTimeout(loop,65); return;} if(!del){del=true; timer=setTimeout(loop,1300); return;} if(c>0){c--; timer=setTimeout(loop,32); return;} del=false; w=(w+1)%words.length; timer=setTimeout(loop,180); };
      loop();
    }
    function apply(l){
      lang = minimalTranslations[l] ? l : "pt"; localStorage.setItem("gs_lang", lang);
      document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
      $$('[data-i18n]').forEach(el => { const k = el.dataset.i18n; if(minimalTranslations[lang][k]) el.textContent = minimalTranslations[lang][k]; });
      $$(".lang-btn").forEach(btn => { const active = btn.dataset.lang === lang; btn.classList.toggle("active", active); btn.setAttribute("aria-pressed", active ? "true" : "false"); });
      startTyping();
    }
    $$(".lang-btn").forEach(btn => btn.addEventListener("click", () => apply(btn.dataset.lang)));
    apply(lang);
  }

  function boot(){
    injectProfessionalStyles(); refineVisualIdentity(); setupMenu(); setupReveal(); setupScroll(); setupLang();
    const year = $("#year"); if(year) year.textContent = new Date().getFullYear();
  }
  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();