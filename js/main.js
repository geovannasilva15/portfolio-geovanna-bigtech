(() => {
  "use strict";
  const $=(s,c=document)=>c.querySelector(s);
  const $$=(s,c=document)=>[...c.querySelectorAll(s)];

  const translations={
    pt:{
      navAbout:"Sobre",navWork:"Atuação",navProjects:"Projetos",navJourney:"Trajetória",navResearch:"Pesquisa",navSkills:"Competências",navContact:"Contato",
      heroEyebrow:"Analista de Inteligência Artificial",
      heroTitle:"Transformo IA em soluções práticas para pessoas e negócios.",
      heroLead:"Trabalho na interseção entre IA Generativa, software, automação e aprendizagem. Minha trajetória combina tecnologia, comunicação e construção de soluções com aplicação real.",
      heroProjects:"Conheça meus projetos",
      proofHackathons:"2º lugar em hackathons",proofPostgrad:"pós concluída",proofGoogle:"Embaixadora 2026",photoRole:"AI Analyst • GenAI • RAG • Automation",
      aboutLabel:"01 • Sobre mim",aboutTitle:"Uma trajetória que começou em TI e evoluiu para Inteligência Artificial.",
      aboutText1:"Minha trajetória começou com suporte e infraestrutura de TI e, ao longo do tempo, evoluiu para Inteligência Artificial. Hoje atuo com IA aplicada à capacitação, criando treinamentos, trilhas, materiais educacionais e iniciativas que ajudam pessoas a usar tecnologia de forma mais prática e estratégica.",
      aboutText2:"Paralelamente, desenvolvo projetos em IA Generativa, RAG, automação, dados e software. Gosto de transformar problemas em produtos simples, úteis e bem estruturados.",
      workLabel:"02 • O que eu faço",workTitle:"Quatro frentes que resumem minha atuação profissional.",
      cap1Title:"IA Generativa",cap1Text:"LLMs, RAG, prompting, agentes e soluções inteligentes aplicadas a contextos reais.",
      cap2Title:"Automação",cap2Text:"Python, APIs, n8n e fluxos para reduzir tarefas manuais e acelerar processos.",
      cap3Title:"Produtos digitais",cap3Text:"Aplicações e protótipos com foco no problema, experiência do usuário e entrega.",
      cap4Title:"IA & Aprendizagem",cap4Text:"Treinamentos, trilhas, materiais educacionais e adoção de IA no ambiente profissional.",
      projectsLabel:"03 • Projetos",projectsTitle:"Projetos que mostram como eu penso e construo tecnologia.",projectsLead:"Selecionei apenas os projetos que melhor representam meu perfil profissional.",
      neuralMeta:"Liderança • 2º lugar",neuralTitle:"IA preditiva para antecipar riscos de fornecedores.",neuralText:"Projeto criado no Hackathon WeHandle × PUC Campinas, entre 6 equipes participantes. Fui líder do grupo Neural Rose, formado 100% por mulheres, conduzindo a organização do time, priorização da solução, narrativa de valor e apresentação para a banca. Conquistamos o 2º lugar.",neuralHighlightTitle:"Líder do time",neuralHighlightText:"Equipe 100% feminina • 2º lugar",
      devMeta:"2º lugar • Hackathon",devTitle:"Preparação inteligente para processos seletivos de tecnologia.",devText:"Fui responsável pelas sessões de treino por vaga e modalidades de preparação, incluindo quiz técnico, respostas STAR e desafios práticos.",
      proofTitle:"IA responsável aplicada à revisão de evidências antes da publicação.",proofText:"Produto bilíngue para comparar fontes, registrar avaliação humana e gerar um Evidence Receipt sem delegar à IA o julgamento sobre o que é verdadeiro.",
      clariMeta:"Acessibilidade • Impacto",clariTitle:"Tecnologia assistiva para tornar informação mais acessível.",clariText:"Protótipo com leitura em voz alta, simplificação de textos e ajustes visuais para reduzir barreiras de compreensão e ampliar autonomia.",
      allProjects:"Ver todos os projetos no GitHub",
      journeyLabel:"04 • Trajetória & Formação",journeyTitle:"Uma evolução profissional direta e consistente.",
      journey1Title:"Entrada em Tecnologia",journey1Text:"Suporte técnico e infraestrutura de TI.",
      journey2Title:"Inteligência Artificial",journey2Text:"Atuação profissional com IA aplicada à capacitação e transformação digital.",
      journey3Title:"Expansão",journey3Text:"Pós em IA & ML, hackathons, pesquisa, projetos e Embaixadora Google 2026.",
      edu1:"Pós-graduação — Inteligência Artificial e Machine Learning",edu1Meta:"PUC Campinas • Concluída",edu2:"Engenharia de Software",edu2Meta:"Em andamento",edu3:"Gestão da Tecnologia da Informação",edu3Meta:"Concluída",
      researchLabel:"05 • Pesquisa",researchTitle:"Tecnologia também é sobre quem participa dela.",researchLead:"Desenvolvi uma pesquisa sobre mulheres na tecnologia, pertencimento, inteligência artificial e viés algorítmico.",researchStat1:"participantes",researchStat2:"utilizam IA frequentemente ou às vezes",researchStat3:"perceberam tecnologia como área mais masculina",
      skillsLabel:"06 • Competências",skillsTitle:"O que sustenta meus projetos e minha atuação.",skillsAI:"IA",skillsDev:"Desenvolvimento",skillsData:"Dados & Automação",
      beyondLabel:"07 • Além do código",beyondTitle:"Tecnologia, para mim, também é comunidade, aprendizagem e colaboração.",beyond1Title:"Hackathons",beyond1Text:"Construção rápida, colaboração, liderança e visão de produto.",beyond2Title:"Comunidade",beyond2Text:"Participação em eventos, iniciativas de tecnologia e representatividade feminina.",beyond3Title:"Aprendizagem",beyond3Text:"Ensinar IA e tornar tecnologia mais acessível também fazem parte da minha atuação.",
      contactLabel:"08 • Contato",contactTitle:"Vamos conversar?",contactText:"Tenho interesse em projetos, oportunidades e conexões nas áreas de Inteligência Artificial, IA Generativa, automação e software."
    },
    en:{
      navAbout:"About",navWork:"What I do",navProjects:"Projects",navJourney:"Journey",navResearch:"Research",navSkills:"Skills",navContact:"Contact",
      heroEyebrow:"Artificial Intelligence Analyst",
      heroTitle:"I turn AI into practical solutions for people and businesses.",
      heroLead:"I work at the intersection of Generative AI, software, automation and learning. My career combines technology, communication and building solutions with real-world application.",
      heroProjects:"Explore my projects",
      proofHackathons:"2nd place in hackathons",proofPostgrad:"postgraduate completed",proofGoogle:"Ambassador 2026",photoRole:"AI Analyst • GenAI • RAG • Automation",
      aboutLabel:"01 • About me",aboutTitle:"A career that started in IT and evolved into Artificial Intelligence.",
      aboutText1:"My career started with IT support and infrastructure and gradually evolved into Artificial Intelligence. Today I work with AI applied to enablement, creating training programs, learning paths, educational materials and initiatives that help people use technology more practically and strategically.",
      aboutText2:"Alongside my professional work, I build projects in Generative AI, RAG, automation, data and software. I like turning problems into simple, useful and well-structured products.",
      workLabel:"02 • What I do",workTitle:"Four areas that summarize my professional work.",
      cap1Title:"Generative AI",cap1Text:"LLMs, RAG, prompting, agents and intelligent solutions applied to real-world contexts.",
      cap2Title:"Automation",cap2Text:"Python, APIs, n8n and workflows to reduce manual tasks and accelerate processes.",
      cap3Title:"Digital products",cap3Text:"Applications and prototypes focused on the problem, user experience and delivery.",
      cap4Title:"AI & Learning",cap4Text:"Training, learning paths, educational materials and AI adoption in professional environments.",
      projectsLabel:"03 • Projects",projectsTitle:"Projects that show how I think about and build technology.",projectsLead:"I selected only the projects that best represent my professional profile.",
      neuralMeta:"Leadership • 2nd place",neuralTitle:"Predictive AI to anticipate supplier risks.",neuralText:"Built for the WeHandle × PUC Campinas Hackathon among 6 participating teams. I led the Neural Rose team, an all-women group, coordinating team organization, solution prioritization, value narrative and presentation to the judges. We achieved 2nd place.",neuralHighlightTitle:"Team leader",neuralHighlightText:"All-women team • 2nd place",
      devMeta:"2nd place • Hackathon",devTitle:"Smart preparation for technology hiring processes.",devText:"I was responsible for job-specific training sessions and preparation modes, including technical quizzes, STAR responses and practical challenges.",
      proofTitle:"Responsible AI applied to evidence review before publishing.",proofText:"A bilingual product for comparing sources, recording human assessment and generating an Evidence Receipt without delegating truth judgment to AI.",
      clariMeta:"Accessibility • Impact",clariTitle:"Assistive technology to make information more accessible.",clariText:"A prototype with text-to-speech, text simplification and visual adjustments designed to reduce comprehension barriers and increase autonomy.",
      allProjects:"View all projects on GitHub",
      journeyLabel:"04 • Journey & Education",journeyTitle:"A direct and consistent professional evolution.",
      journey1Title:"Starting in Technology",journey1Text:"Technical support and IT infrastructure.",
      journey2Title:"Artificial Intelligence",journey2Text:"Professional work with AI applied to enablement and digital transformation.",
      journey3Title:"Expansion",journey3Text:"Postgraduate studies in AI & ML, hackathons, research, projects and Google Ambassador 2026.",
      edu1:"Postgraduate — Artificial Intelligence and Machine Learning",edu1Meta:"PUC Campinas • Completed",edu2:"Software Engineering",edu2Meta:"In progress",edu3:"Information Technology Management",edu3Meta:"Completed",
      researchLabel:"05 • Research",researchTitle:"Technology is also about who gets to participate.",researchLead:"I developed research on women in technology, belonging, artificial intelligence and algorithmic bias.",researchStat1:"participants",researchStat2:"use AI frequently or sometimes",researchStat3:"perceived technology as a more male-dominated field",
      skillsLabel:"06 • Skills",skillsTitle:"What supports my projects and professional work.",skillsAI:"AI",skillsDev:"Development",skillsData:"Data & Automation",
      beyondLabel:"07 • Beyond code",beyondTitle:"For me, technology is also about community, learning and collaboration.",beyond1Title:"Hackathons",beyond1Text:"Fast building, collaboration, leadership and product thinking.",beyond2Title:"Community",beyond2Text:"Participation in technology events, initiatives and women-in-tech representation.",beyond3Title:"Learning",beyond3Text:"Teaching AI and making technology more accessible are also part of my professional work.",
      contactLabel:"08 • Contact",contactTitle:"Let's connect.",contactText:"I am interested in projects, opportunities and connections in Artificial Intelligence, Generative AI, automation and software."
    },
    es:{
      navAbout:"Sobre mí",navWork:"Qué hago",navProjects:"Proyectos",navJourney:"Trayectoria",navResearch:"Investigación",navSkills:"Competencias",navContact:"Contacto",
      heroEyebrow:"Analista de Inteligencia Artificial",
      heroTitle:"Transformo la IA en soluciones prácticas para personas y negocios.",
      heroLead:"Trabajo en la intersección entre IA Generativa, software, automatización y aprendizaje. Mi trayectoria combina tecnología, comunicación y construcción de soluciones con aplicación real.",
      heroProjects:"Conoce mis proyectos",
      proofHackathons:"2º lugar en hackathons",proofPostgrad:"posgrado concluido",proofGoogle:"Embajadora 2026",photoRole:"AI Analyst • GenAI • RAG • Automation",
      aboutLabel:"01 • Sobre mí",aboutTitle:"Una trayectoria que comenzó en TI y evolucionó hacia la Inteligencia Artificial.",
      aboutText1:"Mi trayectoria comenzó con soporte e infraestructura de TI y, con el tiempo, evolucionó hacia la Inteligencia Artificial. Hoy trabajo con IA aplicada a capacitación, creando entrenamientos, rutas de aprendizaje, materiales educativos e iniciativas que ayudan a las personas a usar la tecnología de forma más práctica y estratégica.",
      aboutText2:"En paralelo, desarrollo proyectos de IA Generativa, RAG, automatización, datos y software. Me gusta transformar problemas en productos simples, útiles y bien estructurados.",
      workLabel:"02 • Qué hago",workTitle:"Cuatro áreas que resumen mi actuación profesional.",
      cap1Title:"IA Generativa",cap1Text:"LLMs, RAG, prompting, agentes y soluciones inteligentes aplicadas a contextos reales.",
      cap2Title:"Automatización",cap2Text:"Python, APIs, n8n y flujos para reducir tareas manuales y acelerar procesos.",
      cap3Title:"Productos digitales",cap3Text:"Aplicaciones y prototipos centrados en el problema, la experiencia de usuario y la entrega.",
      cap4Title:"IA & Aprendizaje",cap4Text:"Entrenamientos, rutas, materiales educativos y adopción de IA en entornos profesionales.",
      projectsLabel:"03 • Proyectos",projectsTitle:"Proyectos que muestran cómo pienso y construyo tecnología.",projectsLead:"Seleccioné solo los proyectos que mejor representan mi perfil profesional.",
      neuralMeta:"Liderazgo • 2º lugar",neuralTitle:"IA predictiva para anticipar riesgos de proveedores.",neuralText:"Proyecto creado en el Hackathon WeHandle × PUC Campinas entre 6 equipos participantes. Fui líder del grupo Neural Rose, formado 100% por mujeres, coordinando la organización del equipo, la priorización de la solución, la narrativa de valor y la presentación ante el jurado. Obtuvimos el 2º lugar.",neuralHighlightTitle:"Líder del equipo",neuralHighlightText:"Equipo 100% femenino • 2º lugar",
      devMeta:"2º lugar • Hackathon",devTitle:"Preparación inteligente para procesos selectivos de tecnología.",devText:"Fui responsable de las sesiones de entrenamiento por vacante y modalidades de preparación, incluyendo quiz técnico, respuestas STAR y desafíos prácticos.",
      proofTitle:"IA responsable aplicada a la revisión de evidencias antes de publicar.",proofText:"Producto bilingüe para comparar fuentes, registrar evaluación humana y generar un Evidence Receipt sin delegar a la IA el juicio sobre lo verdadero.",
      clariMeta:"Accesibilidad • Impacto",clariTitle:"Tecnología asistiva para hacer la información más accesible.",clariText:"Prototipo con lectura en voz alta, simplificación de textos y ajustes visuales para reducir barreras de comprensión y ampliar autonomía.",
      allProjects:"Ver todos los proyectos en GitHub",
      journeyLabel:"04 • Trayectoria y Formación",journeyTitle:"Una evolución profesional directa y consistente.",
      journey1Title:"Entrada en Tecnología",journey1Text:"Soporte técnico e infraestructura de TI.",
      journey2Title:"Inteligencia Artificial",journey2Text:"Trabajo profesional con IA aplicada a capacitación y transformación digital.",
      journey3Title:"Expansión",journey3Text:"Posgrado en IA & ML, hackathons, investigación, proyectos y Embajadora Google 2026.",
      edu1:"Posgrado — Inteligencia Artificial y Machine Learning",edu1Meta:"PUC Campinas • Concluido",edu2:"Ingeniería de Software",edu2Meta:"En curso",edu3:"Gestión de Tecnología de la Información",edu3Meta:"Concluido",
      researchLabel:"05 • Investigación",researchTitle:"La tecnología también trata de quién puede participar.",researchLead:"Desarrollé una investigación sobre mujeres en tecnología, pertenencia, inteligencia artificial y sesgo algorítmico.",researchStat1:"participantes",researchStat2:"usan IA frecuentemente o a veces",researchStat3:"percibieron la tecnología como un área más masculinizada",
      skillsLabel:"06 • Competencias",skillsTitle:"Lo que sostiene mis proyectos y mi actuación profesional.",skillsAI:"IA",skillsDev:"Desarrollo",skillsData:"Datos & Automatización",
      beyondLabel:"07 • Más allá del código",beyondTitle:"Para mí, la tecnología también es comunidad, aprendizaje y colaboración.",beyond1Title:"Hackathons",beyond1Text:"Construcción rápida, colaboración, liderazgo y visión de producto.",beyond2Title:"Comunidad",beyond2Text:"Participación en eventos, iniciativas tecnológicas y representación femenina en tecnología.",beyond3Title:"Aprendizaje",beyond3Text:"Enseñar IA y hacer la tecnología más accesible también forman parte de mi trabajo.",
      contactLabel:"08 • Contacto",contactTitle:"¿Hablamos?",contactText:"Tengo interés en proyectos, oportunidades y conexiones en Inteligencia Artificial, IA Generativa, automatización y software."
    }
  };

  function applyLanguage(lang){
    const selected=translations[lang]?lang:"pt";
    const dict=translations[selected];
    localStorage.setItem("portfolio_language",selected);
    document.documentElement.lang=selected==="pt"?"pt-BR":selected;
    $$("[data-i18n]").forEach(el=>{const t=dict[el.dataset.i18n]; if(t) el.textContent=t;});
    $$(".lang-btn").forEach(btn=>{const active=btn.dataset.lang===selected;btn.classList.toggle("active",active);btn.setAttribute("aria-pressed",String(active));});
  }

  function setupMenu(){
    const toggle=$(".nav-toggle"),menu=$(".menu"); if(!toggle||!menu)return;
    toggle.addEventListener("click",()=>{const open=menu.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});
    menu.addEventListener("click",e=>{if(e.target.closest("a")){menu.classList.remove("open");toggle.setAttribute("aria-expanded","false");}});
  }

  function setupReveal(){
    const items=$$(".reveal");
    if(!("IntersectionObserver" in window)){items.forEach(i=>i.classList.add("visible"));return;}
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}}),{threshold:.12,rootMargin:"0px 0px -35px 0px"});
    items.forEach(i=>observer.observe(i));
  }

  function setupScroll(){
    const button=$(".back-to-top");
    const update=()=>button?.classList.toggle("show",window.scrollY>600);
    window.addEventListener("scroll",update,{passive:true});update();
    button?.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
  }

  function init(){
    setupMenu();setupReveal();setupScroll();
    $$(".lang-btn").forEach(btn=>btn.addEventListener("click",()=>applyLanguage(btn.dataset.lang)));
    applyLanguage(localStorage.getItem("portfolio_language")||"pt");
    const year=$("#year"); if(year)year.textContent=new Date().getFullYear();
  }

  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();