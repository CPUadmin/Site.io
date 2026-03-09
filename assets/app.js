const translations = {
  ru: {
    navAbout: 'Обо мне', navCases: 'Кейсы', navStack: 'Стек', navServices: 'Услуги', navContacts: 'Контакты',
    pill1: 'Infrastructure Engineer', pill2: 'Windows + Linux', pill3: 'RU / EN',
    heroTitle: 'Никита Малинин',
    heroSubtitle: 'Системный администратор и инфраструктурный инженер для малого бизнеса, офисов и проектных задач.',
    heroLead: 'Закрываю все вопросы по серверам и сетям. Беру на себя мониторинг и рутину, чтобы владелец бизнеса занимался своим делом и не отвлекался на IT каждый день.',
    stat1: 'года практики', stat2: 'пользователей в поддержке', stat3: 'филиала и до 10 серверов',
    heroCtaPrimary: 'Обсудить задачу', heroCtaSecondary: 'Посмотреть услуги', heroCtaResume: 'Скачать резюме', heroCtaContact: 'Контакты',
    quickTitle1: 'Фокус', quickValue1: 'Windows Server, Linux, MikroTik, VPN, виртуализация, Zabbix',
    quickTitle2: 'Подход', quickValue2: 'Сначала стабилизирую, потом довожу до аккуратного и устойчивого решения',
    float1Title: 'Что беру на себя', float1Text: 'Сеть, доступы, серверы, мониторинг, автоматизацию и документацию',
    float2Title: 'Для кого', float2Text: 'Малый бизнес, аутсорс-офисы, проектная работа',
    aboutEyebrow: 'Обо мне',
    aboutTitle: 'Молодой, ровный и вменяемый инженер, который любит порядок в инфраструктуре.',
    aboutText: 'Мне нравится момент, когда после долгой настройки сервер запускается как надо: без хаоса, с понятной схемой, с документацией и нормальным запасом по стабильности. Я не люблю тушить пожары бесконечно. Мне ближе сделать так, чтобы система работала предсказуемо, а типовые проблемы решались быстро.',
    aboutCard1Title: 'Чем полезен', aboutCard1Text: 'Могу в соло закрывать IT-инфраструктуру небольшого бизнеса: рабочие места, домен, серверы, сеть, удалённый доступ, бэкапы, мониторинг и техподдержку.',
    aboutCard2Title: 'Как работаю', aboutCard2Text: 'В аврале сначала быстро возвращаю рабочее состояние, потом разбираю причину, делаю нормальное решение и фиксирую это в документации.',
    aboutCard3Title: 'Что ценю', aboutCard3Text: 'Стабильность, удобство пользователей, красоту решений и автоматизацию. Безопасность и бюджет держу в голове всегда, но без фанатизма ради галочки.',
    casesEyebrow: 'Кейсы', casesTitle: 'Несколько задач, которые уже можно показывать без воды', casesText: 'Не красивые слова, а понятные истории: где был риск, что именно сделал и какой получился результат.',
    case1Meta: 'ООО «Доктрина» · инфраструктура медцентра', case1Title: 'Поддержка IT-инфраструктуры в одиночку', case1Text: 'Сопровождение рабочих мест, Active Directory, Windows Server, 1С, MS SQL, сети, периферии и удалённого доступа для офиса и филиалов.', case1Point1: 'Навёл порядок в учётках, доступах и типовых настройках', case1Point2: 'Снизил ручную рутину через скрипты и шаблоны', case1Point3: 'Сделал инфраструктуру более предсказуемой и спокойной для бизнеса',
    case2Meta: 'Проектная работа · Pilot-BIM', case2Title: 'Пилотное развёртывание среды для удалённой команды', case2Text: 'Развернул серверную часть, интегрировал систему с AD/LDAP, настроил защищённый удалённый доступ и подготовил клиентские рабочие места.', case2Point1: 'Собрал понятную схему входа и доступов', case2Point2: 'Автоматизировал VPN-подключения через PowerShell', case2Point3: 'Подготовил документацию для быстрого онбординга пользователей',
    case3Meta: 'Сеть и доступы', case3Title: 'Безопасный удалённый доступ и сегментация сети', case3Text: 'Настройка MikroTik, VLAN, WireGuard/VPN и правил доступа так, чтобы рабочий и гостевой трафик не мешали друг другу.', case3Point1: 'Разделил трафик по сегментам', case3Point2: 'Организовал стабильный доступ к ресурсам извне', case3Point3: 'Сделал схему понятнее для дальнейшей поддержки',
    case4Meta: 'Мониторинг и автоматизация', case4Title: 'Zabbix и рутинные скрипты вместо вечной ручной работы', case4Text: 'Развернул мониторинг на Linux, настроил базовые метрики и алерты, а повторяющиеся действия вынес в PowerShell/Python-скрипты.', case4Point1: 'Проблемы стали видны раньше, чем о них писал пользователь', case4Point2: 'Сократилось время реакции на типовые инциденты', case4Point3: 'Появилась база для масштабирования без хаоса',
    case5Meta: 'Веб и интеграции', case5Title: 'Сайт с нуля, SEO и уведомления в Telegram / почту', case5Text: 'Собрал сайт по блокам, улучшил структуру и базовую SEO-подачу, подключил форму с уведомлениями и сделал ресурс полезнее для бизнеса.', case5Point1: 'Сайт стал работать как реальный канал заявок', case5Point2: 'Без тяжёлого стека и лишних затрат', case5Point3: 'Техническая часть осталась понятной и поддерживаемой',
    case6Meta: 'Pet-projects', case6Title: 'MESHgate и User Friendly VPN', case6Text: 'Развиваю идеи вокруг удобного сетевого управления и понятных VPN-решений. Часть вещей пока в разработке, но логика уже инженерная: меньше боли, меньше ручных действий, больше предсказуемости.',
    stackEyebrow: 'Стек', stackTitle: 'Технологии и зоны ответственности', stack1Title: 'Серверы и сервисы', stack2Title: 'Сеть', stack3Title: 'Виртуализация', stack4Title: 'Мониторинг', stack5Title: 'Автоматизация', stack6Title: 'Web / Support',
    valuesEyebrow: 'Ценности', valuesTitle: 'Что для меня важнее всего', values1: 'Стабильность', values2: 'Удобство пользователей', values3: 'Красота решений', values4: 'Автоматизация', values5: 'Безопасность', values6: 'Экономия бюджета',
    processEyebrow: 'Процесс', processTitle: 'Как выглядит моя работа в нормальной схеме', process1: 'Стабилизирую ситуацию', process2: 'Разбираю первопричину', process3: 'Делаю устойчивое решение', process4: 'Фиксирую в документации и шаблонах',
    contactsEyebrow: 'Контакты', contactsTitle: 'Готов к работе, проектам и вменяемым предложениям', contactsText: 'Если нужен человек, который может аккуратно закрывать инфраструктурные задачи и не теряться в аврале, пиши.',
    contactEmail: 'Почта', contactPhone: 'Телефон', contactResume: 'Резюме и опыт', contactPdf: 'PDF', contactDownload: 'Скачать резюме',
    footerText: 'Сайт-визитка инфраструктурного инженера',
    servicesEyebrow: 'Услуги', servicesPageTitle: 'Форматы работы, в которых я могу быть полезен', servicesPageText: 'Без пафоса и без расплывчатости. Ниже три нормальных сценария: сопровождение, проектная работа и разовые задачи.',
    price1Label: 'Сопровождение офиса', price1Title: 'Когда нужен человек, который держит инфраструктуру в порядке', price1Item1: 'Поддержка рабочих мест, доступов, серверов и сетевой части', price1Item2: 'Удалённый доступ, мониторинг, резервные копии, типовые инциденты', price1Item3: 'Документация и нормализация того, что раньше было хаосом',
    price2Label: 'Проект', price2Title: 'Когда нужно развернуть, перенести или аккуратно внедрить что-то новое', price2Item1: 'Развёртывание сервисов и серверной части', price2Item2: 'Миграции, VPN, виртуализация, схема доступов', price2Item3: 'Инструкции, шаблоны и запуск пользователей',
    price3Label: 'Разовые задачи', price3Title: 'Когда нужна точечная помощь без полноценного сопровождения', price3Item1: 'Разобрать проблему с сетью, сервером или доступами', price3Item2: 'Настроить мониторинг, скрипт, VPN или рабочую схему', price3Item3: 'Быстро включиться, стабилизировать и объяснить, что дальше',
    includesEyebrow: 'Обычно входит', notIncludesEyebrow: 'По умолчанию не входит', notIncludes1: 'Непрофильная рутина вне договорённости', notIncludes2: 'Бухгалтерские и административные задачи', notIncludes3: 'Неограниченный объём работ без понятной зоны ответственности',
    ctaEyebrow: 'Контакт', ctaTitle: 'Можно прийти с проектом, с проблемой или просто с вопросом', ctaText: 'Если задача вменяемая и у неё есть нормальные рамки, дальше уже разберёмся.'
  },
  en: {
    navAbout: 'About', navCases: 'Cases', navStack: 'Stack', navServices: 'Services', navContacts: 'Contacts',
    pill1: 'Infrastructure Engineer', pill2: 'Windows + Linux', pill3: 'RU / EN',
    heroTitle: 'Nikita Malinin',
    heroSubtitle: 'System administrator and infrastructure engineer for small business, office environments and project work.',
    heroLead: 'I take care of servers, network, access, monitoring and routine operations so the business owner does not have to think about IT every day.',
    stat1: 'years of practice', stat2: 'users supported', stat3: 'branches and up to 10 servers',
    heroCtaPrimary: 'Discuss a task', heroCtaSecondary: 'View services', heroCtaResume: 'Download resume', heroCtaContact: 'Contacts',
    quickTitle1: 'Focus', quickValue1: 'Windows Server, Linux, MikroTik, VPN, virtualization, Zabbix',
    quickTitle2: 'Approach', quickValue2: 'First stabilize, then turn it into a clean and sustainable solution',
    float1Title: 'What I handle', float1Text: 'Network, access, servers, monitoring, automation and documentation',
    float2Title: 'Who it is for', float2Text: 'Small business, outsourced offices, project work',
    aboutEyebrow: 'About',
    aboutTitle: 'A young, calm and hands-on engineer who likes order inside infrastructure.',
    aboutText: 'I like the moment when, after a long setup, a server starts exactly the way it should: no chaos, a clear scheme, documentation and a decent stability margin. I do not enjoy endless firefighting. I prefer building systems that behave predictably and make common issues faster to resolve.',
    aboutCard1Title: 'Value', aboutCard1Text: 'I can handle the IT infrastructure of a small business on my own: workstations, domain, servers, network, remote access, backups, monitoring and user support.',
    aboutCard2Title: 'How I work', aboutCard2Text: 'During an incident, I restore the working state first, then investigate the cause, implement a proper fix and document it.',
    aboutCard3Title: 'What matters', aboutCard3Text: 'Stability, user comfort, clean solutions and automation. Security and budget are always in mind, but not as empty buzzwords.',
    casesEyebrow: 'Cases', casesTitle: 'A few real tasks that can already speak for themselves', casesText: 'Not empty claims, but short stories: where the risk was, what was done and what changed in the end.',
    case1Meta: 'Doctrine LLC · medical center infrastructure', case1Title: 'Running IT infrastructure solo', case1Text: 'Support of workstations, Active Directory, Windows Server, 1C, MS SQL, network, peripherals and remote access for the office and branches.', case1Point1: 'Brought order to accounts, access and standard setup patterns', case1Point2: 'Reduced manual routine with scripts and repeatable templates', case1Point3: 'Made infrastructure more predictable and calmer for the business',
    case2Meta: 'Project work · Pilot-BIM', case2Title: 'Pilot deployment for a remote design team', case2Text: 'Deployed the server side, integrated the platform with AD/LDAP, organized secure remote access and prepared client workstations.', case2Point1: 'Built a clear access and login scheme', case2Point2: 'Automated VPN connections with PowerShell', case2Point3: 'Prepared documentation for faster user onboarding',
    case3Meta: 'Network and access', case3Title: 'Secure remote access and network segmentation', case3Text: 'MikroTik, VLAN, WireGuard/VPN and access rules configured so business and guest traffic do not collide.', case3Point1: 'Separated traffic into segments', case3Point2: 'Built stable access to internal resources from outside', case3Point3: 'Made the scheme easier to support later',
    case4Meta: 'Monitoring and automation', case4Title: 'Zabbix and scripts instead of endless manual work', case4Text: 'Deployed monitoring on Linux, configured baseline metrics and alerts, and moved repetitive actions into PowerShell/Python scripts.', case4Point1: 'Issues became visible before users reported them', case4Point2: 'Response time to common incidents decreased', case4Point3: 'Created a base for scaling without chaos',
    case5Meta: 'Web and integrations', case5Title: 'Website from scratch, SEO basics and Telegram / email notifications', case5Text: 'Built the site block by block, improved structure and basic SEO, connected the form to notifications and made the resource more useful for the business.', case5Point1: 'The website became a practical lead channel', case5Point2: 'No heavy stack and no extra costs', case5Point3: 'Technical side stayed clear and maintainable',
    case6Meta: 'Pet projects', case6Title: 'MESHgate and User Friendly VPN', case6Text: 'I develop ideas around easier network management and clearer VPN workflows. Some parts are still in progress, but the logic is already engineering-focused: less pain, less manual effort, more predictability.',
    stackEyebrow: 'Stack', stackTitle: 'Technologies and responsibility areas', stack1Title: 'Servers and services', stack2Title: 'Network', stack3Title: 'Virtualization', stack4Title: 'Monitoring', stack5Title: 'Automation', stack6Title: 'Web / Support',
    valuesEyebrow: 'Values', valuesTitle: 'What matters to me most', values1: 'Stability', values2: 'User comfort', values3: 'Clean solutions', values4: 'Automation', values5: 'Security', values6: 'Budget efficiency',
    processEyebrow: 'Process', processTitle: 'How my work usually looks when done properly', process1: 'Stabilize the situation', process2: 'Investigate root cause', process3: 'Implement a durable fix', process4: 'Document it and turn it into a template',
    contactsEyebrow: 'Contacts', contactsTitle: 'Open to jobs, projects and sensible offers', contactsText: 'If you need someone who can handle infrastructure tasks carefully and stay functional during incidents, reach out.',
    contactEmail: 'Email', contactPhone: 'Phone', contactResume: 'Resume and experience', contactPdf: 'PDF', contactDownload: 'Download resume',
    footerText: 'Infrastructure engineer portfolio website',
    servicesEyebrow: 'Services', servicesPageTitle: 'Work formats where I can actually be useful', servicesPageText: 'No fluff. Just three normal scenarios: ongoing support, project delivery and one-time tasks.',
    price1Label: 'Office support', price1Title: 'When you need someone to keep infrastructure in shape', price1Item1: 'Workstations, access, servers and network support', price1Item2: 'Remote access, monitoring, backups and common incidents', price1Item3: 'Documentation and cleanup of what used to be chaos',
    price2Label: 'Project', price2Title: 'When something new has to be deployed, migrated or introduced cleanly', price2Item1: 'Service and server-side deployment', price2Item2: 'Migrations, VPN, virtualization, access schemes', price2Item3: 'Guides, templates and user rollout',
    price3Label: 'One-time tasks', price3Title: 'When you need a targeted fix without full support', price3Item1: 'Troubleshoot a network, server or access issue', price3Item2: 'Set up monitoring, a script, VPN or a working scheme', price3Item3: 'Jump in fast, stabilize and explain what comes next',
    includesEyebrow: 'Usually included', notIncludesEyebrow: 'Not included by default', notIncludes1: 'Non-technical routine outside the agreement', notIncludes2: 'Accounting and administrative chores', notIncludes3: 'Unlimited scope without clear responsibility boundaries',
    ctaEyebrow: 'Contact', ctaTitle: 'You can come with a project, a problem or just a question', ctaText: 'If the task is reasonable and has normal boundaries, we can move from there.'
  }
};

const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');
const toast = document.getElementById('toast');

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

function applyLang(lang) {
  const dict = translations[lang] || translations.ru;
  document.documentElement.lang = lang === 'en' ? 'en' : 'ru';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  langToggle.textContent = lang === 'ru' ? 'EN' : 'RU';
  localStorage.setItem('lang', lang);
}

const savedTheme = localStorage.getItem('theme') || 'dark';
const savedLang = localStorage.getItem('lang') || 'ru';
applyTheme(savedTheme);
applyLang(savedLang);

themeToggle?.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
});

langToggle?.addEventListener('click', () => {
  const next = document.documentElement.lang === 'ru' ? 'en' : 'ru';
  applyLang(next);
});

burger?.addEventListener('click', () => {
  mobileNav?.classList.toggle('open');
  const expanded = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', String(!expanded));
});

mobileNav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  burger?.setAttribute('aria-expanded', 'false');
}));

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

const progress = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const value = height > 0 ? (scrollTop / height) * 100 : 0;
  if (progress) progress.style.width = `${value}%`;
}, { passive: true });

const revealItems = document.querySelectorAll('.reveal, .reveal-delay, .reveal-stagger');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });
  revealItems.forEach(el => io.observe(el));
} else {
  revealItems.forEach(el => el.classList.add('is-visible'));
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);
}

document.querySelectorAll('[data-copy]').forEach(btn => {
  btn.addEventListener('click', async () => {
    const value = btn.getAttribute('data-copy');
    try {
      await navigator.clipboard.writeText(value);
      showToast(document.documentElement.lang === 'ru' ? 'Скопировано' : 'Copied');
    } catch {
      showToast(document.documentElement.lang === 'ru' ? 'Не удалось скопировать' : 'Copy failed');
    }
  });
});
