// PixGen Studio Premium Bento Website Core Javascript

// Project meta information for client showroom
const projectData = [
  {
    category: "PERFORMANCE MARKETING",
    title: "Plasma Paints Meta Ads",
    stats: ["190", "₹216.85", "₹41,200.76"],
    labels: ["Leads", "Cost Per Lead", "Amount Spent"],
    description: "We structured a high-converting Meta Ads lead generation funnel for Plasma Paints. Deployed demographic audience segmenting and copy testing, generating 190 verified lead forms at a highly optimized ₹216.85 per lead, with total spending kept at ₹41,200.76.",
    chartData: [25, 60, 105, 140, 170, 190],
    screenshot: "assets/plasma_meta.png",
    liveUrl: "https://www.plasmapaints.com/"
  },
  {
    category: "PERFORMANCE MARKETING",
    title: "Plasma Paints Google Ads",
    stats: ["13K", "722.00", "₹2.41L"],
    labels: ["Clicks", "Conversions", "Total Cost"],
    description: "We scaled Plasma Paints' search visibility through Google Ads. Optimizing high-intent search terms and custom smart bidding scripts drove 13K clicks, 140K impressions, and 722 conversions, keeping total campaign costs at ₹2.41 Lakhs.",
    chartData: [90, 230, 410, 540, 670, 722],
    screenshot: "assets/plasma_google.png",
    liveUrl: "https://www.plasmapaints.com/"
  },
  {
    category: "PERFORMANCE MARKETING",
    title: "Curtains Direct Meta Ads",
    stats: ["171", "$44.51", "$7,610.67"],
    labels: ["Leads", "Cost Per Lead", "Amount Spent"],
    description: "Designed a targeted lead capture system for Melbourne-based Curtains Direct. Deployed geographic audience filters and focused instant-form campaigns, producing 171 high-quality leads at $44.51 per lead, totaling $7,610.67 spent.",
    chartData: [35, 70, 100, 130, 155, 171],
    screenshot: "assets/curtains_meta.png",
    liveUrl: "https://www.curtainsdirect.com.au/"
  },
  {
    category: "PERFORMANCE MARKETING",
    title: "Hallams Home Meta Ads",
    stats: ["227", "₹117.92", "₹26,766.84"],
    labels: ["Purchases", "Avg CPA", "Amount Spent"],
    description: "Structured high-performance catalog purchase campaigns for Hallams Home. By targeting lookalike buyer segments and scaling advantage catalog delivery, we generated 227 purchases at an average CPA of ₹117.92, with total spending at ₹26,766.84.",
    chartData: [40, 85, 130, 175, 205, 227],
    screenshot: "assets/hallams_meta.png",
    liveUrl: "https://hallamshome.com.au/"
  },
  {
    category: "PERFORMANCE MARKETING",
    title: "Hallams Home Google Ads",
    stats: ["198K", "1.56K", "₹2.82L"],
    labels: ["Clicks", "Conversions", "Total Cost"],
    description: "Deployed full-funnel search and display campaigns for Hallams Home. Driven by smart bidding and dynamic inventory ads, this setup delivered 198K clicks, 14.8M impressions, and 1.56K purchase conversions, managing ₹2.82L in total ad spend.",
    chartData: [200, 550, 920, 1200, 1410, 1560],
    screenshot: "assets/hallams_google.png",
    liveUrl: "https://hallamshome.com.au/"
  },
  {
    category: "PERFORMANCE MARKETING",
    title: "Insane Traders Google Ads",
    stats: ["220K", "₹4.79M", "₹2.24M"],
    labels: ["Clicks", "Conv. Value", "Total Spend"],
    description: "Scaled Google PPC campaigns for Insane Traders. Deployed search keyword matching and custom smart-bidding workflows, generating 220K clicks, a conversion value of ₹4.79M (representing a 2.13x Conv. Value/Cost ratio), and ₹2.24M in total spend.",
    chartData: [50, 100, 140, 180, 205, 220],
    screenshot: "assets/traders_google.png"
  },
  {
    category: "PERFORMANCE MARKETING",
    title: "Intelisys Google Ads",
    stats: ["12M", "₹1.42M", "₹1.7M"],
    labels: ["Impressions", "Conv. Value", "Total Spend"],
    description: "Structured Search & Performance Max campaigns for Intelisys. Generated 12M impressions and ₹1.42M in conversion value, maintaining a highly optimized ₹1.7M total ad spend with an 83.57% actual ROAS.",
    chartData: [100, 350, 700, 1100, 1300, 1420],
    screenshot: "assets/intelisys_google.png"
  },
  {
    category: "PERFORMANCE MARKETING",
    title: "Intelisys Subscribes",
    stats: ["1,243", "₹219.00", "₹2.72L"],
    labels: ["Subscribes", "Cost Per Sub", "Amount Spent"],
    description: "Designed subscription campaigns for Intelisys. Achieved 1,243 website subscribes at ₹219.00 cost per subscription, keeping overall sign-up campaign budgets at ₹2.72 Lakhs.",
    chartData: [200, 450, 700, 950, 1100, 1243],
    screenshot: "assets/intelisys_meta1.png"
  },
  {
    category: "PERFORMANCE MARKETING",
    title: "Intelisys MCX Leads",
    stats: ["3,431", "₹69.42", "₹2.38L"],
    labels: ["Leads", "Cost Per Lead", "Amount Spent"],
    description: "Structured and scaled high-intent lead capture ads for IntelisysDM. Generated 3,431 leads at a highly optimized average cost of ₹69.42 per lead, managing a total combined ad spend of ₹2.38 Lakhs.",
    chartData: [400, 1000, 1800, 2500, 3000, 3431],
    screenshot: "assets/intelisys_meta2.png"
  },
  {
    category: "WEBSITE DEVELOPMENT",
    title: "Plasma Paints Custom Portal",
    stats: ["99", "6.8%", "+185%"],
    labels: ["Speed Score", "Conversion Rate", "Sales Growth"],
    description: "We engineered a custom interactive digital portal for www.plasmapaints.com. Deployed lightweight WebGL animations and structured UI pathways, yielding an exceptional 99 speed performance score and boosting conversions by 185%.",
    chartData: [110, 160, 230, 360, 490, 680],
    screenshot: "assets/web_design.png",
    liveUrl: "https://www.plasmapaints.com/"
  },
  {
    category: "WEBSITE DEVELOPMENT",
    title: "CA Sunny Balani Portal",
    stats: ["98", "99.2%", "+210%"],
    labels: ["Speed Score", "Chatbot Accuracy", "Retention Boost"],
    description: "Designed, coded, and deployed a high-performance web portal for www.casunnybalani.com. Completed all copy content write-ups, custom responsive layouts, and integrated an intelligent AI chatbot trained to autonomously solve user business & tax queries.",
    chartData: [120, 250, 410, 580, 710, 890],
    screenshot: "assets/sunny_balani.png",
    liveUrl: "https://casunnybalani.com/"
  }
];

let performanceChart = null;

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Custom Magnetic Cursor
  initCustomCursor();

  // 3. Main Header Scroll Effect
  initHeaderScroll();

  // 4. Navigation Links Observer
  initNavObserver();

  // 5. Initialize Futuristic Quantum HUD Showcase
  initHUDConsole();

  // 6. Mobile Menu Overlay controls
  initMobileMenuControls();

  // 7. ROI Calculator Engine
  initRoiEngine();

  // 8. Contact Form Handling
  initContactForm();

  // 8.5. Consultation Form Handling
  initConsultationForm();

  // 9. Premium entrance animations
  initScrollAnimations();
});

/* --- 2. Custom Magnetic Cursor Trailer --- */
function initCustomCursor() {
  const cursor = document.getElementById('custom-cursor');
  const glow = document.getElementById('custom-cursor-glow');
  if (!cursor || !glow) return;

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let glowX = 0, glowY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const interactiveSelector = 'a, button, input, select, textarea, [data-tilt], .hud-dock-btn';
  
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.remove('cursor-hover');
    }
  });

  document.addEventListener('mousedown', () => {
    document.body.classList.add('cursor-active');
  });

  document.addEventListener('mouseup', () => {
    document.body.classList.remove('cursor-active');
  });

  // Custom Cursor LERP loop
  function renderCursor() {
    cursorX += (mouseX - cursorX) * 0.25;
    cursorY += (mouseY - cursorY) * 0.25;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;

    glowX += (mouseX - glowX) * 0.12;
    glowY += (mouseY - glowY) * 0.12;
    glow.style.left = `${glowX}px`;
    glow.style.top = `${glowY}px`;

    requestAnimationFrame(renderCursor);
  }
  renderCursor();
}

/* --- 3. Header Scroll Effect --- */
function initHeaderScroll() {
  const header = document.querySelector('.main-header');
  const scrollProgressBar = document.getElementById('scroll-progress');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (windowHeight > 0) {
      const scrollPercent = (window.scrollY / windowHeight) * 100;
      scrollProgressBar.style.width = `${scrollPercent}%`;
    }
  });
}

/* --- 4. Navigation Active Links Observer --- */
function initNavObserver() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  const options = {
    threshold: 0.35,
    rootMargin: "-80px 0px 0px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, options);

  sections.forEach(section => observer.observe(section));
}

/* --- 5. Futuristic Quantum HUD Showcase Console --- */
const codeNames = [
  "PLASMA-META", "PLASMA-GOOG", "CURTAINS-META", "HALLAMS-META", "HALLAMS-GOOG",
  "TRADERS-GOOG", "INTELISYS-GOOG", "INTELISYS-SUBS", "INTELISYS-MCX", "PLASMA-PORTAL", "SUNNY-PORTAL"
];
const statusTexts = [
  "SCALING", "ONLINE", "ACTIVE", "SCALING", "SCALING",
  "ACTIVE", "ONLINE", "ACTIVE", "ACTIVE", "OPTIMIZED", "OPTIMIZED"
];

let terminalTimeout = null;

function initHUDConsole() {
  const dockContainer = document.getElementById('hud-dock-buttons');
  if (!dockContainer) return;

  dockContainer.innerHTML = '';

  projectData.forEach((project, idx) => {
    project.codeName = codeNames[idx] || `NODE-${idx}`;
    project.statusText = statusTexts[idx] || "ONLINE";

    const btn = document.createElement('button');
    btn.className = 'hud-dock-btn';
    btn.setAttribute('data-index', idx);
    if (idx === 0) btn.classList.add('active');

    const cleanName = project.title
      .replace(" Meta Ads", "")
      .replace(" Google Ads", "")
      .replace(" Custom Portal", "")
      .replace(" Subscribes", "")
      .replace(" MCX Leads", "")
      .replace(" Portal", "");
    const tagText = project.category.includes("MARKETING") ? "Ads" : "Web";

    btn.innerHTML = `
      <span class="hud-btn-name">${cleanName}</span>
      <span class="hud-btn-status">${tagText}</span>
    `;

    btn.addEventListener('click', () => {
      document.querySelectorAll('.hud-dock-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      onNodeSelect(idx, project);
    });

    dockContainer.appendChild(btn);
  });

  if (projectData.length > 0) {
    onNodeSelect(0, projectData[0], true);
  }

  // Debounced Window Resize chart redraw
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      const activeBtn = document.querySelector('.hud-dock-btn.active');
      if (activeBtn) {
        const idx = parseInt(activeBtn.getAttribute('data-index'));
        const project = projectData[idx];
        if (project && performanceChart) {
          renderHUDChart(project.chartData, project.labels[0]);
        }
      }
    }, 150);
  });
}

function onNodeSelect(index, data, isInitial = false) {
  const telemetryContent = document.querySelector('.hud-telemetry-content');
  const monitorFooter = document.querySelector('.hud-monitor-footer');
  
  if (!telemetryContent || !monitorFooter) return;

  if (isInitial) {
    populateHUDTelemetry(data);
    const logContainer = document.getElementById('hud-terminal-log');
    if (logContainer) {
      logContainer.innerHTML = `>> Connection secure.\n>> Loading verified metrics for [${data.codeName}]...\n>> Data synced. Displaying case study diagnostics.\n<span class="hud-terminal-cursor"></span>`;
    }
  } else {
    telemetryContent.style.opacity = '0.35';
    monitorFooter.style.opacity = '0.5';
    telemetryContent.style.transition = 'opacity 0.25s';
    monitorFooter.style.transition = 'opacity 0.25s';

    runTerminalDiagnostics(data, () => {
      populateHUDTelemetry(data);
      telemetryContent.style.opacity = '1';
      monitorFooter.style.opacity = '1';
    });
  }
}

function runTerminalDiagnostics(project, onComplete) {
  const logContainer = document.getElementById('hud-terminal-log');
  if (!logContainer) {
    if (onComplete) onComplete();
    return;
  }

  if (terminalTimeout) {
    clearTimeout(terminalTimeout);
  }

  logContainer.innerHTML = '';

  const lines = [
    `>> Connecting to active channel database for [PXG-${project.codeName}]...`,
    `>> Querying ad account and web performance database... DONE.`,
    `>> Extracting verified CPA, conversion rates, and revenue benchmarks...`,
    `>> Masking client-sensitive credentials and account identifiers...`,
    `>> Sync complete. Loading dashboard metrics telemetry.`
  ];

  let currentLine = 0;
  
  function printLine() {
    if (currentLine < lines.length) {
      logContainer.innerHTML += lines[currentLine] + '\n';
      logContainer.scrollTop = logContainer.scrollHeight;
      currentLine++;
      terminalTimeout = setTimeout(printLine, 120);
    } else {
      logContainer.innerHTML += '<span class="hud-terminal-cursor"></span>';
      if (onComplete) onComplete();
    }
  }

  printLine();
}

function populateHUDTelemetry(data) {
  document.getElementById('hud-client-cat').innerText = data.category;
  document.getElementById('hud-client-title').innerText = data.title;
  document.getElementById('hud-client-desc').innerText = data.description;

  for (let i = 1; i <= 3; i++) {
    const cardEl = document.getElementById(`hud-metric-${i}`);
    if (cardEl) {
      const lblEl = cardEl.querySelector('.hud-metric-lbl');
      const valEl = cardEl.querySelector('.hud-metric-val');
      if (lblEl) lblEl.innerText = data.labels[i-1].toUpperCase();
      if (valEl) valEl.innerText = data.stats[i-1];
    }
  }

  const screenshotImg = document.getElementById('hud-screenshot-img');
  const cropCoords = document.getElementById('hud-crop-coords');
  if (screenshotImg && data.screenshot) {
    screenshotImg.style.opacity = '0';
    setTimeout(() => {
      screenshotImg.src = data.screenshot;
      screenshotImg.alt = `${data.title} Telemetry Screenshot`;
      screenshotImg.style.opacity = '1';
    }, 150);
  }
  
  if (cropCoords) {
    cropCoords.innerText = `CROP: X=-48px Y=-42px [MASKED]`;
  }

  const btnVisit = document.getElementById('hud-btn-visit');
  if (btnVisit) {
    if (data.liveUrl) {
      btnVisit.href = data.liveUrl;
      btnVisit.style.display = 'inline-flex';
    } else {
      btnVisit.href = '#';
      btnVisit.style.display = 'none';
    }
  }

  renderHUDChart(data.chartData, data.labels[0]);
}

function renderHUDChart(dataPoints, metricName) {
  const ctx = document.getElementById('hud-growth-chart');
  if (!ctx) return;

  if (performanceChart) {
    performanceChart.destroy();
  }

  const canvasCtx = ctx.getContext('2d');
  const gradient = canvasCtx.createLinearGradient(0, 0, 0, 180);
  gradient.addColorStop(0, 'rgba(0, 0, 0, 0.06)');
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0.0)');

  const months = ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6'];
  
  performanceChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: months,
      datasets: [{
        label: metricName,
        data: dataPoints,
        borderColor: '#000000',
        borderWidth: 3,
        pointBackgroundColor: '#000000',
        pointBorderColor: '#ffffff',
        pointRadius: 4,
        pointHoverRadius: 6,
        backgroundColor: gradient,
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: '#0a0a0a',
          titleFont: { family: 'Poppins', size: 11, weight: 'bold' },
          bodyFont: { family: 'Courier New', size: 11 },
          titleColor: '#ffffff',
          bodyColor: '#ffffff',
          borderColor: 'rgba(0, 0, 0, 0.15)',
          borderWidth: 1,
          displayColors: false
        }
      },
      scales: {
        x: {
          grid: {
            color: 'rgba(0, 0, 0, 0.08)'
          },
          ticks: {
            color: '#000000',
            font: { family: 'Courier New', size: 9 }
          }
        },
        y: {
          grid: {
            color: 'rgba(0, 0, 0, 0.08)'
          },
          ticks: {
            color: '#000000',
            font: { family: 'Courier New', size: 9 }
          }
        }
      }
    }
  });
}

/* --- 6. Mobile Menu Overlay Controls --- */
function initMobileMenuControls() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

  // Escape key close handler for mobile menu
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (mobileMenuOverlay && mobileMenuOverlay.classList.contains('active')) {
        mobileMenuOverlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
        if (mobileMenuBtn) {
          mobileMenuBtn.innerHTML = '<i data-lucide="menu"></i>';
          if (window.lucide) {
            window.lucide.createIcons();
          }
        }
      }
    }
  });

  if (mobileMenuBtn && mobileMenuOverlay) {
    mobileMenuBtn.addEventListener('click', () => {
      const isActive = mobileMenuOverlay.classList.toggle('active');
      document.body.classList.toggle('no-scroll', isActive);
      
      mobileMenuBtn.innerHTML = isActive ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
      if (window.lucide) {
        window.lucide.createIcons();
      }
    });
  }

  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenuOverlay) {
        mobileMenuOverlay.classList.remove('active');
      }
      document.body.classList.remove('no-scroll');
      if (mobileMenuBtn) {
        mobileMenuBtn.innerHTML = '<i data-lucide="menu"></i>';
        if (window.lucide) {
          window.lucide.createIcons();
        }
      }
    });
  });
}

/* --- 7. ROI Calculator Engine --- */
function initRoiEngine() {
  const spendSlider = document.getElementById('monthly-ad-spend');
  const valueSlider = document.getElementById('customer-value');
  const aiSlider = document.getElementById('ai-automation-rate');

  const spendBubble = document.getElementById('ad-spend-val');
  const valueBubble = document.getElementById('customer-val');
  const aiBubble = document.getElementById('ai-rate-val');

  if (!spendSlider || !valueSlider || !aiSlider) return;

  function updateCalculator() {
    const spend = parseInt(spendSlider.value);
    const value = parseInt(valueSlider.value);
    const aiRate = parseInt(aiSlider.value) / 100;

    spendBubble.innerText = `₹${spend.toLocaleString('en-IN')}`;
    valueBubble.innerText = `₹${value.toLocaleString('en-IN')}`;
    aiBubble.innerText = `${Math.round(aiRate * 100)}%`;

    const conversionMultiplier = 4.6 + (aiRate * 1.5);
    const projectedRevenue = spend * conversionMultiplier;
    
    const leadsGenerated = Math.round((spend * 0.12) / (1 + (1 - aiRate) * 0.5));
    const supportHoursSaved = Math.round(leadsGenerated * 1.8 * aiRate);
    const netRoi = Math.round(((projectedRevenue - spend) / spend) * 100);

    animateValue('roi-projected-revenue', projectedRevenue, true);
    animateValue('roi-qualified-leads', leadsGenerated, false);
    animateValue('roi-hours-saved', supportHoursSaved, false, ' hrs');
    animateValue('roi-net-percentage', netRoi, false, '%');

    updateSvgGraph(netRoi);
  }

  spendSlider.addEventListener('input', updateCalculator);
  valueSlider.addEventListener('input', updateCalculator);
  aiSlider.addEventListener('input', updateCalculator);

  updateCalculator();
}

function animateValue(id, targetVal, isCurrency, suffix = '') {
  const element = document.getElementById(id);
  if (!element) return;

  let currentVal = parseInt(element.innerText.replace(/[^0-9-]/g, '')) || 0;
  if (element.innerText.includes('hrs')) currentVal = parseInt(element.innerText) || 0;

  const duration = 0.5;
  const obj = { val: currentVal };

  gsap.to(obj, {
    val: targetVal,
    duration: duration,
    ease: "power2.out",
    onUpdate: () => {
      let displayValue = Math.round(obj.val);
      if (isCurrency) {
        element.innerText = `₹${displayValue.toLocaleString('en-IN')}`;
      } else {
        element.innerText = `${displayValue.toLocaleString()}${suffix}`;
      }
    }
  });
}

function updateSvgGraph(netRoi) {
  const linePath = document.getElementById('graph-line-path');
  const bgPath = document.getElementById('graph-bg-path');
  const dot = document.getElementById('graph-dot');

  if (!linePath || !bgPath || !dot) return;

  const normalizedRoi = Math.max(100, Math.min(1000, netRoi));
  const peakY = Math.max(5, 110 - (normalizedRoi - 100) * 0.11);
  const midY = 115 - (115 - peakY) * 0.5;
  
  const lineD = `M0,115 Q120,${midY} 240,${midY} T400,${peakY}`;
  const bgD = `${lineD} L400,120 L0,120 Z`;

  gsap.to(linePath, { attr: { d: lineD }, duration: 0.5, ease: "power2.out" });
  gsap.to(bgPath, { attr: { d: bgD }, duration: 0.5, ease: "power2.out" });
  gsap.to(dot, { attr: { cx: 400, cy: peakY }, duration: 0.5, ease: "power2.out" });
}

/* --- 8. Contact Form Handling --- */
function initContactForm() {
  const form = document.getElementById('audit-form');
  const successState = document.getElementById('form-success');
  const resetBtn = document.getElementById('btn-reset-form');

  if (!form || !successState) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Collect values
    const clientData = {
      name: document.getElementById('client-name').value,
      email: document.getElementById('client-email').value,
      url: document.getElementById('client-url').value,
      phone: document.getElementById('client-phone').value,
      objective: document.getElementById('client-interest').value,
      message: document.getElementById('client-msg').value
    };

    const submitBtn = document.getElementById('btn-submit-form');
    if (submitBtn) {
      submitBtn.innerHTML = `<span>Transmitting parameters...</span> <i data-lucide="loader" class="icon-pulse"></i>`;
      if (window.lucide) window.lucide.createIcons();
    }

    const showSuccess = () => {
      form.style.display = 'none';
      successState.style.display = 'flex';
      successState.classList.add('active');

      if (submitBtn) {
        submitBtn.innerHTML = `<span>Send Growth Audit Request</span> <i data-lucide="send"></i>`;
        if (window.lucide) window.lucide.createIcons();
      }
    };

    fetch('https://formsubmit.co/ajax/shaikhmdkashif19@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        Name: clientData.name,
        Email: clientData.email,
        Website: clientData.url,
        Phone: clientData.phone,
        Objective: clientData.objective,
        Message: clientData.message,
        _subject: "New Lead from PixGen Studio 3D Portfolio!"
      })
    })
    .then(() => {
      showSuccess();
    })
    .catch((error) => {
      console.warn("FormSubmit submission blocked or failed:", error);
      showSuccess();
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      successState.style.display = 'none';
      successState.classList.remove('active');
      form.style.display = 'flex';
    });
  }
}

/* --- 8.5. Hero Consultation Form AJAX Submission --- */
function initConsultationForm() {
  const form = document.getElementById('hero-signup-form');
  const statusEl = document.getElementById('hero-signup-status');
  if (!form || !statusEl) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('hero-signup-email');
    const email = emailInput ? emailInput.value : '';

    const submitBtn = form.querySelector('button');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i data-lucide="loader" class="icon-pulse"></i>`;
      if (window.lucide) window.lucide.createIcons();
    }

    const showStatus = () => {
      statusEl.style.display = 'block';
      form.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<i data-lucide="check"></i>`;
        if (window.lucide) window.lucide.createIcons();
      }
    };

    fetch('https://formsubmit.co/ajax/shaikhmdkashif19@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        Email: email,
        _subject: "New Consultation Signup from PixGen Studio 3D Portfolio!"
      })
    })
    .then(() => {
      showStatus();
    })
    .catch((error) => {
      console.warn("Hero Consultation Signup FormSubmit submission blocked or failed:", error);
      showStatus();
    });
  });
}

/* --- 9. Premium Entrance Animations --- */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.service-card, .hud-console-container, .info-card, .calc-inputs-panel, .calc-outputs-panel, .impact-card');
  
  const options = {
    threshold: 0.12,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  animatedElements.forEach(el => {
    el.classList.add('reveal-on-scroll');
    observer.observe(el);
  });
}
