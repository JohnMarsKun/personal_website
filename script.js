const NAV_IDS = {
    home: "homeNav",
    education: "eduNav",
    experience: "expNav",
    books: "booksNav"
};

const NAV_GIFS = {
    education: { buttonId: "eduNav", gifId: "lnikaGifedu" },
    experience: { buttonId: "expNav", gifId: "lnikaGifexp" },
    books: { buttonId: "booksNav", gifId: "lnikaGifbooks" }
};

const PROJECT_FILTERS = [
    { label: "All", value: "all" },
    { label: "GenAI", value: "genai" },
    { label: "Forecasting", value: "forecasting" },
    { label: "Statistics", value: "statistics" },
    { label: "Causality", value: "causality" }
];

const BOOK_FILTERS = [
    { label: "All", value: "all" },
    { label: "ML / AI", value: "ml" },
    { label: "Statistics", value: "stats" },
    { label: "Econometrics / TS", value: "econometrics" },
    { label: "Programming", value: "programming" },
    { label: "Broader", value: "broader" }
];

const ABOUT_STATS = [
    { value: "Rener Energy", label: "Current role" },
    { value: "Heraklion, Crete", label: "Home base" },
    { value: "MSc DAMSL", label: "Latest degree" },
    { value: "Forecasting + GenAI", label: "Current technical arc" }
];

const SPOTLIGHT_AREAS = [
    {
        label: "Energy Systems",
        title: "Battery storage",
        description: "Applied data science for grid-scale storage, renewable energy, and system-aware analytics."
    },
    {
        label: "Forecasting",
        title: "Time-aware modeling",
        description: "Time series forecasting, econometrics, and market-facing predictive workflows."
    },
    {
        label: "Research",
        title: "Generative biology",
        description: "Protein engineering and diffusion-driven generative AI with a strong statistical backbone."
    }
];

const INTEREST_GROUPS = [
    {
        label: "Theme 01",
        title: "Learning systems",
        description: "I enjoy building predictive and generative systems that learn structure from noisy real-world data.",
        tags: ["Machine Learning", "Deep Learning", "Generative Models"]
    },
    {
        label: "Theme 02",
        title: "Statistical thinking",
        description: "Statistical modeling, causal reasoning, and careful inference shape how I approach most problems.",
        tags: ["Statistics", "Causality", "Econometrics"]
    },
    {
        label: "Theme 03",
        title: "Scientific computing",
        description: "Mathematics stays close to the work through modeling, time series, and dynamical systems.",
        tags: ["Mathematical Modeling", "Time Series", "Dynamical Systems"]
    },
    {
        label: "Theme 04",
        title: "Applied domains",
        description: "I am especially drawn to work that touches renewable energy, finance, and computational biology.",
        tags: ["Renewable Energy", "Finance", "Bioinformatics"]
    }
];

const PROJECTS = [
    {
        type: "MSc Thesis",
        year: "2025",
        title: "Generative AI in Protein Engineering",
        summary: "Large language diffusion models for protein engineering and biologically grounded sequence generation.",
        tags: ["genai", "statistics"],
        displayTags: ["GenAI", "Protein Engineering", "Diffusion Models"],
        actions: [
            { label: "Read thesis", href: "src/proj/MSc-Thesis-Ioannis-Maris-GenAI-in-protein-eng.pdf", primary: true }
        ]
    },
    {
        type: "Time Series",
        year: "2025",
        title: "Traffic Volume Forecasting in Athens",
        summary: "15-minute-ahead forecasting with AR models, Koyck transformations, ARIMA, GARCH, and robust quantile regression.",
        tags: ["forecasting", "statistics"],
        displayTags: ["Time Series", "Econometrics", "Quantile Regression"],
        actions: [
            { label: "Open report", href: "src/proj/Time_Series_Assignment02.pdf", primary: true }
        ]
    },
    {
        type: "GenAI Project",
        year: "2025",
        title: "DiMA Protein Design",
        summary: "Antimicrobial peptide generation with diffusion models for protein design and sequence discovery.",
        tags: ["genai"],
        displayTags: ["Diffusion Models", "Protein Design", "Bioinformatics"],
        actions: [
            { label: "Open project", href: "src/proj/DeepGenAI_Project.pdf", primary: true }
        ]
    },
    {
        type: "Forecasting",
        year: "2024",
        title: "CO2, Solar, and Traffic Time Series Analysis",
        summary: "Forecasting and explanatory modeling across emissions, solar irradiance, and traffic data using additive and quantile models.",
        tags: ["forecasting", "statistics"],
        displayTags: ["Forecasting", "Energy", "Applied Statistics"],
        actions: [
            { label: "Open report", href: "src/proj/Time_Series_Assignment01.pdf", primary: true }
        ]
    },
    {
        type: "BSc Thesis",
        year: "2023",
        title: "Supervised Classification with Parametric Models",
        summary: "Bachelor's thesis focused on classification, model-based learning, and strong statistical foundations.",
        tags: ["statistics"],
        displayTags: ["Classification", "Parametric Models", "Statistical Learning"],
        actions: [
            { label: "Read thesis", href: "src/proj/B_Sc_Thesis.pdf", primary: true }
        ]
    },
    {
        type: "Deep Learning",
        year: "2022",
        title: "Underwater Acoustic Normal Modes with CNNs",
        summary: "Convolutional neural networks for identifying normal modes in underwater acoustic propagation.",
        tags: ["statistics"],
        displayTags: ["CNNs", "Signal Processing", "Scientific ML"],
        actions: [
            { label: "Open paper", href: "src/proj/ICA2022_Tarou_Maris.pdf", primary: true },
            { label: "View code", href: "https://github.com/JohnMarsKun/JohnMarsKun/blob/main/mars_smar_CNN.ipynb" }
        ]
    },
    {
        type: "Applied Stats",
        year: "2024",
        title: "Cardiovascular Data and AutoML",
        summary: "Penalized estimation, ensemble learning, resampling, and numerical MLE with Fisher scoring for clinical-style data.",
        tags: ["statistics"],
        displayTags: ["AutoML", "Ensemble Learning", "MLE"],
        actions: [
            { label: "Open report", href: "src/proj/SLproj4.pdf", primary: true }
        ]
    },
    {
        type: "Regression",
        year: "2024",
        title: "New York Air Quality Analysis",
        summary: "Penalized estimation, adaptive regression, stepwise modeling, and Monte Carlo experiments on air-quality data.",
        tags: ["statistics"],
        displayTags: ["Regression", "Monte Carlo", "Model Selection"],
        actions: [
            { label: "Dataset", href: "https://www.kaggle.com/datasets/mfaisalqureshi/newyork-air-quality", primary: true },
            { label: "Part 1", href: "src/proj/StatsLearn2.pdf" },
            { label: "Part 2", href: "src/proj/StatsLearn3.pdf" }
        ]
    },
    {
        type: "Graphical Models",
        year: "2024",
        title: "Graphical Lasso for Biological Networks",
        summary: "Sparse and structured biological network learning through graphical lasso and probabilistic modeling.",
        tags: ["statistics"],
        displayTags: ["Graphical Models", "Biological Networks", "Sparse Learning"],
        actions: [
            { label: "Open report", href: "src/proj/PGMproj.pdf", primary: true }
        ]
    },
    {
        type: "Causal ML",
        year: "2024",
        title: "Kernel-Based Causal Feature Selection",
        summary: "Feature selection with kernel conditional independence tests and causal reasoning workflows.",
        tags: ["causality"],
        displayTags: ["Causality", "Kernel Methods", "Feature Selection"],
        actions: [
            { label: "Open report", href: "src/proj/CS577proj.pdf", primary: true },
            { label: "View code", href: "https://github.com/JohnMarsKun/JohnMarsKun/blob/main/BC_Causal_Models.ipynb" }
        ]
    }
];

const DEGREES = [
    {
        title: "MSc in Data Analysis & Machine-Statistical Learning",
        institution: "FORTH and University of Crete",
        dates: "2023 - 2025",
        blurb: "A research-driven master's path with strong focus on machine learning, statistics, time series, and generative AI.",
        metrics: ["110 ECTS", "Valedictorian", "Graduate TA"]
    },
    {
        title: "BSc in Mathematics & Applied Mathematics",
        institution: "University of Crete",
        dates: "2018 - 2023",
        blurb: "Broad mathematical training spanning analysis, inference, modeling, and computational methods.",
        metrics: ["274 ECTS", "Applied Mathematics", "Strong theory base"]
    }
];

const COURSEWORK = [
    { label: "Machine Learning", href: "https://mscs.uoc.gr/damsl/courses/introduction-to-machine-learning/" },
    { label: "Mathematical & Computational Statistics", href: "https://mscs.uoc.gr/damsl/courses/mathematical-andcomputational-statistics/" },
    { label: "Time Series Analysis", href: "https://mscs.uoc.gr/damsl/courses/time-series-analysis/" },
    { label: "Deep Generative Models", href: "https://www.csd.uoc.gr/~hy673/index.html" },
    { label: "Applied Data Science", href: "https://mscs.uoc.gr/damsl/courses/damsl-188-applied-data-science/" },
    { label: "Probabilistic Graphical Models", href: "https://polyhedron.math.uoc.gr/2223/moodle/course/view.php?id=18" },
    { label: "Numerical Algorithms", href: "https://mscs.uoc.gr/damsl/courses/numerical-algorithms/" },
    { label: "Data Structures", href: "https://mscs.uoc.gr/damsl/courses/data-structures/" },
    { label: "Parametric Statistical Inference" },
    { label: "Dynamical Systems & Chaos" },
    { label: "Fourier / Harmonic / Real / Complex / Functional Analysis" }
];

const SUPERVISION = [
    {
        label: "BSc Supervision",
        title: "Yiannis Kamarianakis",
        titleLink: "https://www.iacm.forth.gr/index.php/cb-profile/kamarian",
        meta: "Statistical Learning",
        dates: "Undergraduate research",
        logoSrc: "src/YKam.png",
        logoAlt: "Yiannis Kamarianakis",
        logoClass: "logo-photo",
        open: true,
        summary: "We worked on generalized supervised classification problems, compared traditional and innovative methods, and explored non-parametric ensemble learning.",
        skills: ["Statistical Learning", "Classification", "Ensemble Methods"]
    },
    {
        label: "MSc Supervision",
        title: "Yiannis Pantazis",
        titleLink: "https://www.iacm.forth.gr/index.php/cb-profile/1006-yannis-pantazis",
        meta: "Generative AI in Protein Engineering using Large Language Diffusion Models",
        dates: "Graduate research",
        logoSrc: "src/YPan.png",
        logoAlt: "Yiannis Pantazis",
        logoClass: "logo-photo",
        summary: "Research centered on generative AI for protein engineering, with a focus on large language diffusion models and biologically meaningful generation.",
        skills: ["Generative AI", "Protein Engineering", "Diffusion Models"]
    }
];

const INDUSTRY_EXPERIENCE = [
    {
        label: "Industry Role",
        title: "Rener Energy",
        titleLink: "https://renerenergy.gr",
        meta: "Data Scientist",
        dates: "Apr. 2026 - Today",
        logoSrc: "src/rener-energy-logo.png",
        logoAlt: "Rener Energy Logo",
        open: true,
        summary: "Working on grid-scale battery storage and forecasting-focused problems in an energy setting.",
        skills: [
            "Grid-Scale Battery Storage Analytics",
            "Time Series Forecasting & Econometrics",
            "Stock Market Forecasting",
            "Machine Learning & Statistical Modeling",
            "Renewable Energy Systems"
        ]
    },
    {
        label: "Internship",
        title: "Toyota Motor Europe",
        titleLink: "https://www.toyota-europe.com",
        meta: "BEV Range Internship - Brussels, Zaventem (R&D)",
        dates: "Dec. 2024 - July 2025",
        logoSrc: "src/toyota-logo.png",
        logoAlt: "Toyota Logo",
        summary: "Worked on BEV energy consumption, range recommendation, and hybrid physical-data-driven modeling workflows.",
        skills: [
            "Data Science & Machine Learning",
            "Python, Git, RTBD",
            "Hybrid Models",
            "Connected Powertrain",
            "BEV Energy Consumption Prediction",
            "Range Recommendation",
            "Speed Forecast"
        ]
    },
    {
        label: "Scholarship",
        title: "Apple MSc Scholarship",
        titleLink: "https://www.iacm.forth.gr/media/filesupload/b01b32d59b_APPLE___McS_STUDEND._APOTELESMATA.pdf",
        meta: "Disentangled Representation Learning via Mutual Information Optimization",
        dates: "Nov. 2024 - Feb. 2025",
        logoIcon: "fab fa-apple",
        summary: "Awarded through IACM FORTH for research in protein engineering using large language models to design enzymes for plastic degradation.",
        skills: [
            "Meta ESM",
            "LoRA",
            "Ancestral Sequence Reconstruction",
            "Autoregressive Diffusion",
            "Discrete Denoising Diffusion"
        ]
    },
    {
        label: "Internship",
        title: "FORTH-HELLAS",
        titleLink: "https://www.iacm.forth.gr/divisions/numerical-analysis-computational-systems/data-science",
        meta: "Statistical Learning Internship",
        dates: "Dec. 2022 - July 2023",
        logoSrc: "src/forth-logo.png",
        logoAlt: "FORTH-HELLAS Logo",
        summary: "Hands-on work in statistical learning, biostatistics, and scientific software development under the supervision of Prof. Y. Kamarianakis.",
        skills: [
            "Machine Learning & Applied Statistics",
            "Data Analysis & Biostatistics",
            "Python and R Software"
        ]
    }
];

const ACADEMIC_EXPERIENCE = [
    {
        label: "Teaching",
        title: "Graduate Teaching Assistant",
        meta: "University of Crete",
        dates: "2023 - 2024",
        logoIcon: "fas fa-chalkboard-teacher",
        open: true,
        summary: "Courses taught and supported as a graduate TA:",
        detailsList: [
            "Machine Learning (CS577) - Fall 2023",
            "Computer Language Python - Fall 2023",
            "Numerical Analysis - Spring 2024"
        ],
        skills: ["Teaching", "Mentoring", "Machine Learning", "Python", "Numerical Analysis"],
        actions: [
            { label: "Course page", href: "https://www.csd.uoc.gr/CSD/index.jsp?content=pg_courses_catalog&openmenu=demoAcc4&lang=en&course=156", primary: true }
        ]
    },
    {
        label: "Teaching",
        title: "Undergraduate Teaching Assistant",
        meta: "University of Crete",
        dates: "Fall 2022",
        logoIcon: "fas fa-vector-square",
        summary: "Course taught and supported as an undergraduate TA:",
        detailsList: [
            "Introduction to Linear Algebra - Fall 2022"
        ],
        skills: ["Linear Algebra", "Teaching", "Foundations"]
    }
];

const BOOKS = [
    {
        shelf: "ML / Statistics",
        title: "Introduction to Statistical Learning",
        author: "James, Witten, Hastie, Tibshirani",
        note: "A practical entry point into modern statistical learning.",
        tags: ["ml", "stats"],
        href: "https://www.statlearning.com"
    },
    {
        shelf: "ML / Statistics",
        title: "The Elements of Statistical Learning",
        author: "Hastie, Tibshirani, Friedman",
        note: "A classic text for deeper statistical learning intuition.",
        tags: ["ml", "stats"],
        href: "https://hastie.su.domains/Papers/ESLII.pdf"
    },
    {
        shelf: "ML / AI",
        title: "Probabilistic Machine Learning: Advanced Topics",
        author: "Kevin P. Murphy",
        note: "A broad modern reference for probabilistic ML thinking.",
        tags: ["ml"],
        href: "https://probml.github.io/pml-book/book2.html"
    },
    {
        shelf: "ML / AI",
        title: "Deep Learning Foundations and Concepts",
        author: "Christopher M. Bishop, Hugh Bishop",
        note: "A solid conceptual guide to deep learning foundations.",
        tags: ["ml"]
    },
    {
        shelf: "Econometrics / TS",
        title: "Applied Econometrics with R",
        author: "Christian Kleiber, Achim Zeileis",
        note: "Useful when econometrics needs to stay practical.",
        tags: ["econometrics"]
    },
    {
        shelf: "Econometrics / TS",
        title: "Econometrics",
        author: "Bruce E. Hansen",
        note: "A rigorous econometrics reference with strong intuition.",
        tags: ["econometrics"]
    },
    {
        shelf: "Econometrics / TS",
        title: "Introductory Time Series with R",
        author: "Andrew V. Metcalfe, Paul S. P. Cowpertwait",
        note: "A useful applied bridge into time series modeling.",
        tags: ["econometrics"]
    },
    {
        shelf: "Econometrics / TS",
        title: "Time Series Analysis with Applications in R",
        author: "Jonathan D. Cryer, Kung-Sik Chan",
        note: "A dependable time series reference when details matter.",
        tags: ["econometrics"]
    },
    {
        shelf: "Statistics",
        title: "Handbook of Quantile Regression",
        author: "Roger Koenker et al.",
        note: "Helpful for more robust regression thinking.",
        tags: ["stats", "econometrics"]
    },
    {
        shelf: "Statistics",
        title: "Theoretical Statistics",
        author: "Robert W. Keener",
        note: "A strong theoretical foundation for statistical reasoning.",
        tags: ["stats"]
    },
    {
        shelf: "Programming",
        title: "The Art of R Programming",
        author: "Norman Matloff",
        note: "A practical programming book for statistical computing.",
        tags: ["programming"]
    },
    {
        shelf: "Broader Thinking",
        title: "Beat the Dealer",
        author: "Edward O. Thorp",
        note: "Probability, edge, and decision-making in a compact classic.",
        tags: ["broader"]
    },
    {
        shelf: "Statistics / Regression",
        title: "Modern Applied Regressions",
        author: "Jun Xu",
        note: "Bayesian and frequentist perspectives on rich regression settings.",
        tags: ["stats", "econometrics"]
    },
    {
        shelf: "Broader Thinking",
        title: "Game Theory: Parts I and II",
        author: "Giacomo Bonanno",
        note: "Strategic reasoning with many worked exercises.",
        tags: ["broader"]
    },
    {
        shelf: "Statistics",
        title: "Model Selection and Multimodel Inference",
        author: "Burnham, Anderson",
        note: "A useful guide for choosing models with care.",
        tags: ["stats"]
    },
    {
        shelf: "Broader Thinking",
        title: "Weapons of Math Destruction",
        author: "Cathy O'Neil",
        note: "A reminder that models also have social consequences.",
        tags: ["broader"]
    },
    {
        shelf: "Broader Thinking",
        title: "Quantum Supremacy",
        author: "Michio Kaku",
        note: "A wider-angle read on emerging computational futures.",
        tags: ["broader"]
    }
];

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function renderTags(tags, className = "tag") {
    return tags
        .map(function(tag) {
            return `<span class="${className}">${escapeHtml(tag)}</span>`;
        })
        .join("");
}

function renderActions(actions) {
    if (!actions || actions.length === 0) {
        return "";
    }

    return `
        <div class="card-actions">
            ${actions.map(function(action) {
                const className = action.primary ? "action-link action-link-primary" : "action-link";
                return `<a class="${className}" target="_blank" rel="noopener noreferrer" href="${escapeHtml(action.href)}">${escapeHtml(action.label)}</a>`;
            }).join("")}
        </div>
    `;
}

function renderSectionHeader(eyebrow, title, intro) {
    return `
        <div class="section-heading">
            ${eyebrow ? `<span class="section-eyebrow">${escapeHtml(eyebrow)}</span>` : ""}
            <h2>${escapeHtml(title)}</h2>
            ${intro ? `<p class="section-lead">${escapeHtml(intro)}</p>` : ""}
        </div>
    `;
}

function renderFilterRow(targetId, filters) {
    return `
        <div class="filter-row">
            ${filters.map(function(filter, index) {
                return `<button type="button" class="filter-chip${index === 0 ? " active" : ""}" data-filter-target="${escapeHtml(targetId)}" data-filter="${escapeHtml(filter.value)}">${escapeHtml(filter.label)}</button>`;
            }).join("")}
        </div>
    `;
}

function renderLogoBadge(item) {
    const badgeClass = `logo-badge${item.logoClass ? ` ${item.logoClass}` : ""}`;

    if (item.logoSrc) {
        return `<span class="${badgeClass}"><img src="${escapeHtml(item.logoSrc)}" alt="${escapeHtml(item.logoAlt || item.title)}"></span>`;
    }

    if (item.logoIcon) {
        return `<span class="${badgeClass}"><i class="${escapeHtml(item.logoIcon)}"></i></span>`;
    }

    return `<span class="${badgeClass} logo-initial">${escapeHtml(item.logoText || item.title.charAt(0))}</span>`;
}

function renderProjectCards() {
    return PROJECTS.map(function(project) {
        return `
            <article class="project-card" data-tags="${escapeHtml(project.tags.join(" "))}">
                <div class="card-topline">
                    <span class="mini-badge">${escapeHtml(project.type)}</span>
                    <span class="date-pill">${escapeHtml(project.year)}</span>
                </div>
                <h3>${escapeHtml(project.title)}</h3>
                <p>${escapeHtml(project.summary)}</p>
                <div class="tag-cluster">${renderTags(project.displayTags)}</div>
                ${renderActions(project.actions)}
            </article>
        `;
    }).join("");
}

function renderDegreeTimeline() {
    return `
        <div class="timeline">
            ${DEGREES.map(function(degree) {
                return `
                    <article class="timeline-item">
                        <span class="timeline-marker"></span>
                        <div class="timeline-panel">
                            <div class="degree-header">
                                <div>
                                    <h3>${escapeHtml(degree.title)}</h3>
                                    <p class="meta-line">${escapeHtml(degree.institution)}</p>
                                </div>
                                <span class="date-pill">${escapeHtml(degree.dates)}</span>
                            </div>
                            <p>${escapeHtml(degree.blurb)}</p>
                            <div class="tag-cluster">${renderTags(degree.metrics)}</div>
                        </div>
                    </article>
                `;
            }).join("")}
        </div>
    `;
}

function renderCourseworkCard() {
    return `
        <details class="expand-card course-card" open>
            <summary>
                <div class="expand-summary">
                    <span class="logo-badge"><i class="fas fa-book-open"></i></span>
                    <div class="expand-heading">
                        <span class="mini-badge">Relevant Coursework</span>
                        <h3>Courses that map directly to the work</h3>
                        <p class="meta-line">Graduate and advanced undergraduate training.</p>
                    </div>
                </div>
            </summary>
            <div class="expand-body">
                <div class="course-cloud">
                    ${COURSEWORK.map(function(course) {
                        if (course.href) {
                            return `<a class="course-pill" target="_blank" rel="noopener noreferrer" href="${escapeHtml(course.href)}">${escapeHtml(course.label)}</a>`;
                        }

                        return `<span class="course-pill">${escapeHtml(course.label)}</span>`;
                    }).join("")}
                </div>
                <p class="support-copy">
                    Analytical coursework is also available on
                    <a class="inline-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/john-maris-987534252/">LinkedIn</a>.
                </p>
            </div>
        </details>
    `;
}

function renderExpandableCard(item) {
    return `
        <details class="expand-card"${item.open ? " open" : ""}>
            <summary>
                <div class="expand-summary">
                    ${renderLogoBadge(item)}
                    <div class="expand-heading">
                        <span class="mini-badge">${escapeHtml(item.label)}</span>
                        <h3>
                            ${item.titleLink
                                ? `<a class="inline-link strong-link" target="_blank" rel="noopener noreferrer" href="${escapeHtml(item.titleLink)}">${escapeHtml(item.title)}</a>`
                                : escapeHtml(item.title)}
                        </h3>
                        <p class="meta-line">${escapeHtml(item.meta)}</p>
                    </div>
                    ${item.dates ? `<span class="date-pill">${escapeHtml(item.dates)}</span>` : ""}
                </div>
            </summary>
            <div class="expand-body">
                ${item.summary ? `<p>${escapeHtml(item.summary)}</p>` : ""}
                ${item.detailsList ? `
                    <ul class="detail-list">
                        ${item.detailsList.map(function(detail) {
                            return `<li>${escapeHtml(detail)}</li>`;
                        }).join("")}
                    </ul>
                ` : ""}
                ${item.skills ? `<div class="tag-cluster">${renderTags(item.skills, "tag tag-soft")}</div>` : ""}
                ${renderActions(item.actions)}
            </div>
        </details>
    `;
}

function renderBookCards() {
    return BOOKS.map(function(book) {
        return `
            <article class="book-card" data-tags="${escapeHtml(book.tags.join(" "))}">
                <span class="mini-badge">${escapeHtml(book.shelf)}</span>
                <h3>${escapeHtml(book.title)}</h3>
                <p class="book-author">${escapeHtml(book.author)}</p>
                <p>${escapeHtml(book.note)}</p>
                ${book.href ? renderActions([{ label: "Open reference", href: book.href, primary: true }]) : ""}
            </article>
        `;
    }).join("");
}

function initializeFilters() {
    const filterButtons = document.querySelectorAll(".filter-chip[data-filter-target]");

    filterButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const targetId = button.getAttribute("data-filter-target");
            const filterValue = button.getAttribute("data-filter");
            const relatedButtons = document.querySelectorAll(`.filter-chip[data-filter-target="${targetId}"]`);
            const cards = document.querySelectorAll(`#${targetId} [data-tags]`);

            relatedButtons.forEach(function(relatedButton) {
                relatedButton.classList.toggle("active", relatedButton === button);
            });

            cards.forEach(function(card) {
                const tags = (card.getAttribute("data-tags") || "").split(/\s+/).filter(Boolean);
                const shouldShow = filterValue === "all" || tags.includes(filterValue);
                card.classList.toggle("is-hidden", !shouldShow);
            });
        });
    });
}

function initializeInterestSelector() {
    const tabs = document.querySelectorAll(".interest-tab[data-interest-index]");
    if (tabs.length === 0) {
        return;
    }

    const labelNode = document.querySelector(".interest-detail-label");
    const titleNode = document.getElementById("interest-detail-title");
    const descriptionNode = document.getElementById("interest-detail-description");
    const tagsNode = document.getElementById("interest-detail-tags");

    function setInterest(index) {
        const interest = INTEREST_GROUPS[index];
        if (!interest) {
            return;
        }

        tabs.forEach(function(tab, tabIndex) {
            tab.classList.toggle("active", tabIndex === index);
        });

        if (labelNode) {
            labelNode.textContent = interest.label;
        }

        if (titleNode) {
            titleNode.textContent = interest.title;
        }

        if (descriptionNode) {
            descriptionNode.textContent = interest.description;
        }

        if (tagsNode) {
            tagsNode.innerHTML = renderTags(interest.tags);
        }
    }

    tabs.forEach(function(tab) {
        tab.addEventListener("click", function() {
            const index = Number(tab.getAttribute("data-interest-index"));
            setInterest(index);
        });
    });

    setInterest(0);
}

function initializeInteractiveContent() {
    initializeFilters();
    initializeInterestSelector();
}

function setContent(html) {
    document.getElementById("contents2").innerHTML = html;
    initializeInteractiveContent();
}

function setActiveNav(contentId) {
    Object.keys(NAV_IDS).forEach(function(key) {
        const element = document.getElementById(NAV_IDS[key]);
        if (!element) {
            return;
        }

        element.className = key === contentId ? "current flicker-anim" : "not-current";
    });
}

function showNavSprite(contentId) {
    const config = NAV_GIFS[contentId];
    if (!config) {
        return;
    }

    const button = document.getElementById(config.buttonId);
    const sprite = document.getElementById(config.gifId);

    if (!button || !sprite) {
        return;
    }

    const rect = button.getBoundingClientRect();

    sprite.style.opacity = "1";
    sprite.style.display = "block";
    sprite.style.left = rect.left + 35 + "px";
    sprite.style.top = rect.top + rect.height - 8 + "px";

    setTimeout(function() {
        sprite.style.opacity = "0";

        setTimeout(function() {
            sprite.style.display = "none";
        }, 1000);
    }, 1800);
}

function loadHomeContent() {
    const firstInterest = INTEREST_GROUPS[0];

    const homeContent = `
        <div class="page-shell">
            <section class="section-clean about-section" style="--delay: 0ms;">
                <h2 class="section-title-xl">About Me</h2>
                <div class="about-flow">
                    <div class="about-copy">
                        <p>Based in Heraklion, Crete, I am a data scientist with a quantitative background that blends machine learning, statistics, and applied mathematics.</p>
                        <p>I hold an MSc in Data Analysis & Machine-Statistical Learning from the University of Crete, where I also worked as a Graduate Teaching Assistant and graduated as valedictorian. I have received scholarships from Apple and the Independent Power Transmission Operator.</p>
                        <p>Today I work at Rener Energy on grid-scale battery storage and forecasting-oriented problems. Before that, I interned at Toyota Motor Europe and worked on generative AI and statistics-heavy research projects.</p>
                    </div>
                    <ul class="about-highlights">
                        <li>Current role: Data Scientist at Rener Energy</li>
                        <li>Focus areas: forecasting, energy systems, applied machine learning</li>
                        <li>Background: MSc DAMSL, University of Crete (Valedictorian)</li>
                        <li>Research themes: statistical learning and generative AI</li>
                    </ul>
                </div>
                <p class="resume-inline">
                    <a class="inline-link resume-link" target="_blank" rel="noopener noreferrer" href="src/proj/cvj.pdf">View full resume</a>
                </p>
            </section>

            <section class="section-clean interests-section" style="--delay: 80ms;">
                <h2 class="section-title-lg">Interests</h2>
                <div class="interest-selector">
                    ${INTEREST_GROUPS.map(function(group, index) {
                        return `<button type="button" class="interest-tab${index === 0 ? " active" : ""}" data-interest-index="${index}">${escapeHtml(group.title)}</button>`;
                    }).join("")}
                </div>
                <div class="interest-stage">
                    <p class="interest-detail-label">${escapeHtml(firstInterest.label)}</p>
                    <h3 id="interest-detail-title">${escapeHtml(firstInterest.title)}</h3>
                    <p id="interest-detail-description">${escapeHtml(firstInterest.description)}</p>
                    <div id="interest-detail-tags" class="tag-cluster">${renderTags(firstInterest.tags)}</div>
                </div>
            </section>

            <section class="section-card" style="--delay: 180ms;">
                ${renderSectionHeader(
                    "Projects / Publications",
                    "Selected work, easier to browse",
                    "Filter by theme to jump between generative AI, forecasting, statistics, and causal work."
                )}
                ${renderFilterRow("projects-grid", PROJECT_FILTERS)}
                <div class="project-grid" id="projects-grid">
                    ${renderProjectCards()}
                </div>
            </section>
        </div>
    `;

    setContent(homeContent);
}

function loadEducationContent() {
    const educationContent = `
        <div class="page-shell">
            <section class="section-card" style="--delay: 0ms;">
                ${renderSectionHeader(
                    "Academic Education",
                    "Formal training with mathematical depth",
                    "Degrees, research context, and coursework that shaped how I think about modeling."
                )}
                ${renderDegreeTimeline()}
                ${renderCourseworkCard()}
            </section>

            <section class="section-card" style="--delay: 110ms;">
                ${renderSectionHeader(
                    "Supervision",
                    "Research guidance behind the strongest projects",
                    "Two supervision tracks anchored my work in statistical learning and generative AI."
                )}
                <div class="expand-grid">
                    ${SUPERVISION.map(renderExpandableCard).join("")}
                </div>
            </section>
        </div>
    `;

    setContent(educationContent);
}

function loadExperienceContent() {
    const experienceContent = `
        <div class="page-shell">
            <section class="section-card" style="--delay: 0ms;">
                <div class="section-heading section-heading-tight">
                    <h2 class="section-title-xl">Industry Experience</h2>
                </div>
                <div class="expand-grid">
                    ${INDUSTRY_EXPERIENCE.map(renderExpandableCard).join("")}
                </div>
            </section>

            <section class="section-card" style="--delay: 110ms;">
                <div class="section-heading section-heading-tight">
                    <h2 class="section-title-xl">Academic Experience</h2>
                </div>
                <div class="expand-grid">
                    ${ACADEMIC_EXPERIENCE.map(renderExpandableCard).join("")}
                </div>
            </section>
        </div>
    `;

    setContent(experienceContent);
}

function loadBookContent() {
    const bookContent = `
        <div class="page-shell">
            <section class="section-card" style="--delay: 0ms;">
                ${renderSectionHeader(
                    "Suggested Books",
                    "Books that I like and keep coming back to",
                    "A mix of machine learning, statistics, econometrics, programming, and broader analytical thinking."
                )}
                ${renderFilterRow("books-grid", BOOK_FILTERS)}
                <div class="book-grid" id="books-grid">
                    ${renderBookCards()}
                </div>
            </section>
        </div>
    `;

    setContent(bookContent);
}

function loadContent(contentId) {
    setActiveNav(contentId);

    switch (contentId) {
        case "home":
            loadHomeContent();
            break;
        case "education":
            loadEducationContent();
            break;
        case "experience":
            loadExperienceContent();
            break;
        case "books":
            loadBookContent();
            break;
        default:
            console.error("Invalid content ID:", contentId);
    }

    showNavSprite(contentId);
}

function updateFooterYear() {
    const footerYear = document.getElementById("footer-year");

    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }
}

window.onload = function() {
    loadContent("home");
    updateFooterYear();
    document.body.style.opacity = "1";
};

function easterEgg() {
    document.getElementById("profile").innerHTML = '<img src="src/easter_egg.png" style="width:250px" alt="Easter Egg">';

    setTimeout(function() {
        document.getElementById("profile").innerHTML = '<img src="src/pfp2.png" alt="Profile Image">';
    }, 1200);
}
