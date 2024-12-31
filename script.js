
function loadContent(contentId) {
    const contents2 = document.getElementById('contents2');
    switch (contentId) {
        case 'home':
            document.getElementsByClassName("current")[0].className = "not-current";
            document.getElementById("homeNav").className = "current flicker-anim";
            loadHomeContent();
            shouldIscroll();
            break;
        case 'education':
          document.getElementsByClassName("current")[0].className = "not-current";
            document.getElementById("eduNav").className = "current flicker-anim";
            loadEducationContent();
            shouldIscroll();
            break;
        case 'experience':
          document.getElementsByClassName("current")[0].className = "not-current";
            document.getElementById("expNav").className = "current flicker-anim";
            loadExperienceContent();
            shouldIscroll();
            break;
        case 'books':
          document.getElementsByClassName("current")[0].className = "not-current";
            document.getElementById("booksNav").className = "current flicker-anim";
            loadBookContent();
            shouldIscroll();
            break;
        default:
            console.error('Invalid content ID:', contentId);
    }

}
function loadHomeContent() {
    const homeContent = `
                <div class="card id="about-me">
                    <h2>ABOUT ME</h2>
                    <p> Hi there! I'm John (Yiannis in Greek) Maris, currently living in Heraklion, Crete, Greece. I'm passionate about data science, machine learning, and mathematics. I'm in the final stages of my master's at the University of Crete and FORTH, where I also work as a Teaching Assistant. Soon, I'll be moving to Brussels to work as an R&D Data Scientist at Toyota Motor, focusing on BEV range. Additionally, I'm a scholarship student at FORTH, working on Generative AI in Protein Engineering. My motivation comes from never giving up, no matter the odds. All we have to decide is what to do with the time given to us.</p>
                    <br>
                    <p>&#9670; Full Résumé <a class = "proj" target = "_blank" href="src/proj/cvj.pdf">here <i class="fas fa-link"> </i></a></p>
                </div>
                <div class="card" id="interests">
                    <h2>INTERESTS</h2>
                    <p>Machine Learning,  Natural Language Processing & Deep Generative AI, Statistics & Causality, Time Series & Econometrics, Bioinformatics, Big Data, Mathematical Modeling, Dynamical Systems.</p>
                </div>

                <div class="card" id="projects">
                    <h2>PROJECTS/PUBLICATIONS</h2>
                    <ul>
                        <li>
                        <a class="link" href="src/proj/DeepGenAI_Project.pdf" target="_blank">DiMA Protein Design: Generating Antimicrobial Peptides using Diffusion Models <i class="fas fa-link"> </i></a>
                        </li>
                        
                        <li>
                        <a class="link" href="src/proj/Time_Series_Assignment02.pdf" target="_blank"> 15-minutes-ahead forecast of Traffic Volumes time series in Athens using Occupancies and AR models: employing Koyck transformation, autoregressive distributed lag models, ARIMA and GARCH models for residuals and volatility correction; investigating forecast combination schemes using robust quantile regression <i class="fas fa-link"> </i> </a>
                        </li>

                        <li>
                        <a class="link" href="src/proj/Time_Series_Assignment01.pdf" target="_blank"> Evaluating CO2 emission trends; forecasting solar irradiance in Hawaii using additive models with seasonal indicators to harmonic ones, using Quantile regression and analyzing Traffic Volumes using Distributed Lag Models <i class="fas fa-link"> </i> </a>
                        </li>

                        <li>
                        <a class="link" href="src/proj/B_Sc_Thesis.pdf" target="_blank">Bachelor's Thesis: Supervised Classification with Parametric Models <i class="fas fa-link"> </i></a>
                        </li>

                        <li>
                        <a class="link" href="src/proj/ICA2022_Tarou_Maris.pdf" target="_blank">Identification of Normal Modes in Underwater Acoustic Propagation using Convolutional Neural Networks <i class="fas fa-link"> </i> </a>                        
                        <a class="link" href="https://github.com/JohnMarsKun/JohnMarsKun/blob/main/mars_smar_CNN.ipynb" target="_blank"> (Code <i class="fab fa-python"></i> <i class="fab fa-github"></i>) </a>
                        </li>

                        <li>
                        <a class="link" href="src/proj/SLproj4.pdf" target="_blank">Investigating cardiovascular data using penalized estimation, deep & ensemble learning combined with resampling techniques. Developing an AutoML software for model evaluation and employing numerical approaches to MLE using Fisher scoring <i class="fas fa-link"> </i> </a>
                        </li>

                        <li>
                        <a class="link" href="https://www.kaggle.com/datasets/mfaisalqureshi/newyork-air-quality" target="_blank">NewYork Air-Quality dataset analysis using Penalized estimation, Stepwise model building, Adaptive regression and Monte-Carlo experiments</a>
                        <a class="link" href="src/proj/StatsLearn2.pdf" target="_blank">(part 1 <i class="fas fa-link"> </i>)</a> <a class="link" href="src/proj/StatsLearn3.pdf" target="_blank">(part 2 <i class="fas fa-link"> </i>)</a>
                        </li>


                        <li>
                        <a class="link" href="src/proj/PGMproj.pdf" target="_blank">Graphical Lasso - Graphical Learning of Sparse and Structured Biological Networks <i class="fas fa-link"> </i> </a>
                        </li>

                        <li>
                        <a class="link" href="src/proj/CS577proj.pdf" target="_blank">Causal-Based Feature Selection with Kernel-Based Conditional Independence Tests <i class="fas fa-link"> </i> </a>
                        <a class="link" href="https://github.com/JohnMarsKun/JohnMarsKun/blob/main/BC_Causal_Models.ipynb" target="_blank"> (Code <i class="fab fa-python"></i> <i class="fab fa-github"></i>)</a>
                        </li>
                    </ul>
                </div>

    `;


    document.getElementById('contents2').innerHTML = homeContent;
}
function shouldIscroll(){
    var mediaQuery = window.matchMedia('(max-width: 768px)')

    if (mediaQuery.matches) {
        //window.scrollTo(0, 1050);
        document.getElementById("contents2").scrollIntoView();
    }

}

function noGifsOnMobile() {
    var mediaQuery = window.matchMedia('(max-width: 768px)')
    if (!mediaQuery.matches){
        document.getElementsByClassName("contents")[0].innerHTML += `<div>
        <img class="defer-gif" src="src/placeholder.png" data-src="src/diffmodel.gif" alt="diff_model" style="max-width: 104%; border-radius: 16px; opacity: .915656;">
        </div>

        <div style="margin-left: 150px;">
        <img class="defer-gif" src="src/placeholder.png" data-src="src/alphafold3.gif" alt="alphafold3Protein" style="max-width: 55%; border-radius: 16px; opacity: .27;" >
        </div>`;
    }
}    

// Call loadHomeContent and fade in body when page loads
window.onload = function() {
    loadHomeContent();
    noGifsOnMobile();
    window.scrollTo(0, 0);
    document.getElementById("contents2").style.opacity = '1';
}
function loadEducationContent() {
    const educationContent = `
                <div class="card" id="education">
                    <h2>ACADEMIC EDUCATION</h2>
                    <p>- MSc Data Analysis & Machine-Statistical Learning 2023-2025 (90 ECTS) at <a class = "course" target = "_blank" href="https://www.forth.gr/en/home/">FORTH</a></p>
                    <p>- BSc Mathematics & Applied Mathematics 2018-2023 (274 ECTS) at <a class = "course" target = "_blank" href="https://en.uoc.gr">Uoc</a></p>
                    <br>
                    <h3>Relevant Coursework</h3>
                    <p>Here are some relevant courses I took during my years in university:</p>
                    <ul>
                        <li> <a class = "course" target = "_blank" href="https://mscs.uoc.gr/damsl/courses/introduction-to-machine-learning/">Machine Learning (graduate)</a> </li>
                        <li> <a class = "course" target = "_blank" href="https://mscs.uoc.gr/damsl/courses/mathematical-andcomputational-statistics/">Mathematical & Computational Statistics (graduate)</a> </li>
                        <li> <a class = "course" target = "_blank" href="https://mscs.uoc.gr/damsl/courses/time-series-analysis/">Time Series Analysis (graduate)</a> </li>
                        <li> <a class = "course" target = "_blank" href="https://www.csd.uoc.gr/~hy673/index.html">Deep Generative Models (graduate)</a> </li>
                        <li> <a class = "course" target = "_blank" href="https://mscs.uoc.gr/damsl/courses/damsl-188-applied-data-science/">Applied Data Science (graduate)</a> </li>
                        <li> <a class = "course" target = "_blank" href="https://polyhedron.math.uoc.gr/2223/moodle/course/view.php?id=18">Probabilistic Graphical Models (graduate)</a> </li>
                        <li> <a class = "course" target = "_blank" href="https://mscs.uoc.gr/damsl/courses/numerical-algorithms/">Numerical Algorithms (graduate)</a> </li>
                        <li> <a class = "course" target = "_blank" href="https://mscs.uoc.gr/damsl/courses/data-structures/">Data Structures (graduate)</a> </li>
                        <li>Parametric Statistical Inference</li>
                        <li>Dynamical Systems & Chaos (advanced undergraduate)</li>
                        <li>Fourier-Harmonic/Real/Complex/Functional Analysis (4 courses)</li>
                    </ul>
                    Analytical coursework is available on my LinkedIn <i class="fab fa-linkedin"></i> profile.
                </div>
                <div class="card" id="education">
                    <h2>SUPERVISION</h2>
                    <p>- BSc supervisor: <a class = "proj" target = "_blank" href="https://www.iacm.forth.gr/index.php/cb-profile/kamarian">Yiannis Kamarianakis <i class="fas fa-link"> </i></a> </p>
                    <br>
                    <p>Topic: Statistical Learning.</p>
                    <br>
                    <p>During my undergraduate studies,  I had the privilege of working under Dr. Y. Kamarianakis supervision. We focused on generalized supervised classification problems, comparing traditional and innovative methods and exploring non-parametric ensemble learning techniques. This experience greatly enriched my understanding of statistics & machine learning.</p>
                    <br>
                    <p>- MSc supervisor: <a class = "proj" target = "_blank" href="https://www.iacm.forth.gr/index.php/cb-profile/1006-yannis-pantazis">Yiannis Pantazis <i class="fas fa-link"> </i></a> </p>
                    <br>
                    <p>Topic: Generative AI in Protein Engineering using Large Language Diffusion Models. (Ongoing)</p>
                </div>
    `;

    // Get the "EXPERIENCE" button's position
    var expButton = document.getElementById('eduNav');
    var rect = expButton.getBoundingClientRect();

    // Show the nika gif at the button's position (when the button is clicked)
    var lnikaGif = document.getElementById('lnikaGifedu');
    lnikaGif.style.display = 'block'; // Make the GIF visible
    lnikaGif.style.left = rect.left + 35 + 'px'; // Position horizontally
    lnikaGif.style.top = (rect.top + rect.height - 8) + 'px'; // Position vertically just below the button

    document.getElementById('contents2').innerHTML = educationContent;

    // Hide the GIF
    setTimeout(function() {
        lnikaGif.style.opacity = '0';
        // Wait for the transition to finish before hiding the element
        setTimeout(function() {
            lnikaGif.style.display = 'none';
        }, 1000); // Wait an additional 1 second for the fade-out transition
    }, 2000);

}



function loadExperienceContent() {
    const ExperienceContent = `
                    <div class="card" id="education">
                        <h2>INDUSTRY EXPERIENCE</h2> 
                        <p>- <img src="src/toyota-logo.png" alt="Toyota Logo" style="width:26.666px; vertical-align:middle; margin-right:5px;"><a class = "proj" target = "_blank" href="https://www.toyota-europe.com">Toyota Motor Europe: BEV Range Internship - Brussels, Zaventem (R&D)</a> (Dec. 2024 - July 2025) </p>
                        <br>
                        <p>Skills</p>
                        <ul>
                            <li>Data Science & Machine Learning</li>
                            <li>Python, Git, RTBD (Real Time Big Data)</li>
                            <li>Hybrid Models, Physical & Data Driven Models</li>
                            <li>Connected Powetrain</li>
                            <li>BEV Energy Consumption Prediction</li>
                            <li>Range Recommendation</li>
                            <li>Speed Forecast</li>
                            
                        </ul>
                        <br>
                        <p>- <a class = "proj" target = "_blank" href="https://www.iacm.forth.gr/media/filesupload/b01b32d59b_APPLE___McS_STUDEND._APOTELESMATA.pdf"> <i class="fab fa-apple"></i> Apple MSc Scholarship - Disentangled Representation Learning via Mutual Information Optimization</a> (Nov. 2024 - Feb 2025) </p>
                        <ul>Awarded from Apple, through IACM FORTH for my research in protein engineering using large language models to develop enzymes for plastic degradation, aiming to address major environmental challenges through AI and biotechnology.</ul>
                        <p>Skills</p>
                        <ul>
                            <li>Evolutionary Scale Modeling (Meta's ESM)</li>
                            <li>Low-Rank Adaptation of Large Language Models Optimization (LoRA)</li>
                            <li>Ancestral Sequence Reconstruction (ASR)</li>
                            <li>Order-Agnostic Autoregressive Diffusion Models</li>
                            <li>Discrete Denoising Diffusion Probabilistic Models</li>
                        </ul>
                        <br>
                        <p>- <a class = "proj" target = "_blank" href="https://www.iacm.forth.gr/divisions/numerical-analysis-computational-systems/data-science">Statistical Learning Internship</a> at FORTH (Dec. 2022 - July 2023) </p>
                        <br>
                        <p>Skills</p>
                        <ul>
                            <li>Machine Learning & Applied Statistics</li>
                            <li>Data Analysis & Biostatistics</li>
                            <li>Developing Python and R software</li>
                        </ul>
                    </div>

                    <div class="card" id="education">
                        <h2>ACADEMIC EXPERIENCE</h2>
                        <p>- Graduate Teaching Assistant - Machine Learning (<a class = "proj" target = "_blank" href="https://www.csd.uoc.gr/CSD/index.jsp?content=pg_courses_catalog&openmenu=demoAcc4&lang=en&course=156">CS577</a>) - Fall 2023; Tasks: lectures, Tutoring, assigning and grading weekly exercises, grading exams. </p>
                        <br>
                        <p>- Graduate Teaching Assistant - Computer Language Python<i class="fab fa-python"></i> - Fall 2023; Tasks: Tutoring, assigning and grading weekly exercises.</p>
                        <br>
                        <p>- Graduate Teaching Assistant - Numerical Analysis - Spring 2024; Tasks: Tutoring.</p>
                        <br>
                        <p>- Undergraduate Teaching Assistant - Introduction to Linear Algebra - Fall 2022; Tasks: Tutoring.</p>
                    </div>
    `;
    // Get the "EXPERIENCE" button's position
    var expButton = document.getElementById('expNav');
    var rect = expButton.getBoundingClientRect();

    // Show the nika gif at the button's position (when the button is clicked)
    var lnikaGif = document.getElementById('lnikaGifexp');
    lnikaGif.style.display = 'block'; // Make the GIF visible
    lnikaGif.style.left = rect.left + 35 + 'px'; // Position horizontally
    lnikaGif.style.top = (rect.top + rect.height - 8) + 'px'; // Position vertically just below the button

    document.getElementById('contents2').innerHTML = ExperienceContent;

    // Hide the GIF
    setTimeout(function() {
        lnikaGif.style.opacity = '0';
        // Wait for the transition to finish before hiding the element
        setTimeout(function() {
            lnikaGif.style.display = 'none';
        }, 1000); // Wait an additional 1 second for the fade-out transition
    }, 2000);
}

function loadBookContent() {
    const BookContent = `
                    <div class="card" id="education">
                        <h2>SUGGESTED BOOKS</h2>
                        <p>- <a class = "course" target = "_blank" href="https://www.statlearning.com">James, G., Witten, D., Hastie, T., & Tibshirani, R. (2013). An introduction to statistical learning (Vol. 112, p. 18). New York: springer.</a> </p>
                        <br>
                        <p>- <a class = "course" target = "_blank" href="https://hastie.su.domains/Papers/ESLII.pdf">Hastie, Trevor, et al. The elements of statistical learning: data mining, inference, and prediction. Vol. 2. New York: springer, 2009.</a> </p>
                        <br>
                        <p>- <a class = "course" target = "_blank" href="https://probml.github.io/pml-book/book2.html">K. P. Murphy, Probabilistic Machine Learning: Advanced Topics, The MIT Press.</a> </p>
                        <br>  
                        <p>- Christopher M. Bishop, Hugh Bishop - Deep Learning Foundations and Concepts .</p>
                        <br>    
                        <p>- Christian Kleiber , Achim Zeileis,  Applied Econometrics with R.</p>
                        <br>
                        <p>- Bruce E. Hansen, Econometrics, University of Wisconsin, Princeton University Press.</p>
                        <br>    
                        <p>- Andrew V. Metcalfe , Paul S.P. Cowpertwait, Introductory Time Series with R.</p>
                        <br>    
                        <p>- Jonathan D. Cryer Kung-Sik Chan, Time Series Analysis with Applications in R.</p>
                        <br>    
                        <p>- Koenker, Roger, et al., eds. "Handbook of quantile regression." (2017).</p>
                        <br>
                        <p>- Keener, Robert W. Theoretical statistics: Topics for a core course. Springer Science & Business Media, 2010.</p>
                        <br>
                        <p>- Matloff, Norman. The art of R programming: A tour of statistical software design. No Starch Press, 2011.</p>
                        <br>
                        <p>- Thorp, Edward O. Beat the dealer: A winning strategy for the game of twenty-one. Vol. 310. Vintage, 1966.</p>
                        <br>
                        <p>- Xu, Jun. Modern Applied Regressions: Bayesian and Frequentist Analysis of Categorical and Limited Response Variables with R and Stan. CRC Press, 2022.</p>
                        <br>
                        <p>- Bonanno, Giacomo. Game theory: Parts I and II-with 88 solved exercises. An open access textbook. No. 15-2. Working Paper, 2015.</p>
                        <br>
                        <p>- Burnham, Kenneth P., and David R. Anderson. "Model selection and multimodel inference." A practical information-theoretic approach 2 (2004).</p>
                        <br>
                        <p>- O’Neil, Cathy. "Weapons of Math Destruction."</p>
                        <br>
                        <p>- Kaku, Michio. Quantum Supremacy: How the Quantum Computer Revolution Will Change Everything. Doubleday, 2023.</p>
                    </div>
    `;


    // Get the "book" button's position
    var expButton = document.getElementById('booksNav');
    var rect = expButton.getBoundingClientRect();

    // Show the nika gif at the button's position (when the button is clicked)
    var lnikaGif = document.getElementById('lnikaGifbooks');
    lnikaGif.style.display = 'block'; // Make the GIF visible
    lnikaGif.style.left = rect.left + 35 + 'px'; // Position horizontally
    lnikaGif.style.top = (rect.top + rect.height - 8) + 'px'; // Position vertically just below the button

    document.getElementById('contents2').innerHTML = BookContent;


    // Hide the GIF
    setTimeout(function() {
        lnikaGif.style.opacity = '0';
        // Wait for the transition to finish before hiding the element
        setTimeout(function() {
            lnikaGif.style.display = 'none';
        }, 1000); // Wait an additional 1 second for the fade-out transition
    }, 2000);

}

//
function easterEgg() {
    document.getElementById('profile').innerHTML = '<img src="src/easter_egg.png" style="width:250px">';
    setTimeout(() => 
        { document.getElementById('profile').innerHTML = '<img src="src/pfp2.webp" alt="Profile Image" onclick="easterEgg()">'; }, 100);
}
