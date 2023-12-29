function loadContent(contentId) {
    const contents2 = document.getElementById('contents2');
    
    switch (contentId) {
        case 'home':
            document.getElementsByClassName("current")[0].className = "not-current";
            console.log(document.getElementById("eduNav").className);
            document.getElementById("homeNav").className = "current flicker-anim";
            loadHomeContent();
            break;
        case 'education':
          document.getElementsByClassName("current")[0].className = "not-current";
            document.getElementById("eduNav").className = "current flicker-anim";
            loadEducationContent();
            break;
        case 'experience':
          document.getElementsByClassName("current")[0].className = "not-current";
            document.getElementById("expNav").className = "current flicker-anim";
            loadExperienceContent();
            break;
        case 'books':
          document.getElementsByClassName("current")[0].className = "not-current";
            document.getElementById("booksNav").className = "current flicker-anim";
            loadBookContent();
            break;
        default:
            console.error('Invalid content ID:', contentId);
    }
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
                        <li> <a class = "course" target = "_blank" href="https://polyhedron.math.uoc.gr/2223/moodle/course/view.php?id=18">Probabilistic Graphical Models (graduate)</a> </li>
                        <li> <a class = "course" target = "_blank" href="https://mscs.uoc.gr/damsl/courses/numerical-algorithms/">Numerical Algorithms (graduate)</a> </li>
                        <li> <a class = "course" target = "_blank" href="https://mscs.uoc.gr/damsl/courses/data-structures/">Data Structures (graduate)</a> </li>
                        <li>Parametric Statistical Inference</li>
                        <li>Dynamical Systems</li>
                        <li>Fourier Analysis</li>
                    </ul>
                </div>
                <div class="card" id="education">
                    <h2>SUPERVISION</h2>
                    <p>- BSc supervisor: <a class = "proj" target = "_blank" href="https://www.iacm.forth.gr/index.php/cb-profile/kamarian">Yiannis Kamarianakis <i class="fas fa-link"> </i></a> </p>
                    <br>
                    <p>During my undergraduate studies,  I had the privilege of working under Dr. Y. Kamarianakis supervision. We focused on supervised classification problems, comparing traditional and innovative methods, and exploring non-parametric ensemble learning methods. This experience greatly enriched my understanding of machine-statistical learning.</p>
                    <br>
                    <p>- MSc supervisor: <a class = "proj" target = "_blank" href="https://www.ioannistsamardinos.com">Ioannis Tsamardinos <i class="fas fa-link"></i> </a></p>
                    <br>
                    <p>In my master's, I collaborated with Dr. I. Tsamardinos on automated and meta machine learning, causal discovery, Bayesian networks and feature selection. My (ongoing) thesis involves developing a Python library with causal-based feature selection algorithms, incorporating both classic statistical methods (kernel-based hypothesis testing)  and modern information criteria like Akaike or Bayesian. This library holds great promise for the machine learning community.</p>
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

function loadHomeContent() {
const homeContent = `
                <div class="card id="about-me">
                    <h2>ABOUT ME</h2>
                    <p> Hi there! I'm John (Ioannis in Greek) Maris, and I currently live in Heraklion, Crete, Greece. I am deeply passionate about artificial intelligence, machine learning, statistics, and mathematics. I'm in the midst of my master's studies in Data Science and Machine Learning at the University of Crete and FORTH. Additionally, I'm working as a Teaching Assistant at the same university. The potential and future of this field excite me and I'm always open to learning new things. My motivation and what keeps me in the game is the fact that I never give up, no matter what the odds are. As we journey through life, the decisions we make are crucial. All we have to decide is what to do with the time that is given to us.</p>
                    <br>
                    <p>&#9670; Collab with me  <a class = "proj" target = "_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">here <i class="fas fa-link"> </i></a></p>
                </div>
                <div class="card" id="interests">
                    <h2>INTERESTS</h2>
                    <p>Machine Learning, Statistics, Deep Learning, Bioinformatics, Econometrics, Mathematical Modeling, Dynamical Systems, Game Theory</p>
                </div>

                <div class="card" id="projects">
                    <h2>PROJECTS/PUBLICATIONS</h2>
                    <ul>
                        <li>
                        <a class="course" href="src/proj/B_Sc_Thesis.pdf" target="_blank">Bachelor's Thesis: Supervised Classification with Parametric Models <i class="fas fa-link"> </i></a>
                        </li>

                        <li>
                        <a class="course" href="src/proj/ICA2022_Tarou_Maris.pdf" target="_blank">Identification of Normal Modes in Underwater Acoustic Propagation using Convolutional Neural Networks <i class="fas fa-link"> </i> </a>                        
                        <a class="course" href="https://github.com/JohnMarsKun/JohnMarsKun/blob/main/mars_smar_CNN.ipynb" target="_blank"> (Code <i class="fab fa-python"></i> <i class="fab fa-github"></i>) </a>
                        </li>

                        <li>
                        <a class="course" href="https://www.kaggle.com/datasets/mfaisalqureshi/newyork-air-quality" target="_blank">NewYork Air-Quality dataset analysis using Penalized estimation, Stepwise model building, Adaptive regression and Monte-Carlo experiments</a>
                        <a class="course" href="src/proj/StatsLearn2.pdf" target="_blank">(part 1 <i class="fas fa-link"> </i>)</a> <a class="course" href="src/proj/StatsLearn3.pdf" target="_blank">(part 2 <i class="fas fa-link"> </i>)</a>
                        </li>

                        <li>
                        <a class="course" href="src/proj/PGMproj.pdf" target="_blank">Graphical Lasso - Graphical Learning of Sparse and Structured Biological Networks <i class="fas fa-link"> </i> </a>
                        </li>

                        <li>
                        <a class="course" href="src/proj/CS577proj.pdf" target="_blank">Causal-Based Feature Selection with Kernel-Based Conditional Independence Tests <i class="fas fa-link"> </i> </a>
                        <a class="course" href="https://github.com/JohnMarsKun/JohnMarsKun/blob/main/BC_Causal_Models.ipynb" target="_blank"> (Code <i class="fab fa-python"></i> <i class="fab fa-github"></i>)</a>
                        </li>
                    </ul>
                </div>

`;


document.getElementById('contents2').innerHTML = homeContent;
}


function loadExperienceContent() {
    const ExperienceContent = `
                    <div class="card" id="education">
                        <h2>ACADEMIC EXPERIENCE</h2>
                        <p>- Graduate Teaching Assistant - Machine Learning (<a class = "proj" target = "_blank" href="https://www.csd.uoc.gr/CSD/index.jsp?content=pg_courses_catalog&openmenu=demoAcc4&lang=en&course=156">CS577</a>) - Fall 2023 Tasks: lectures, Tutoring, assigning and grading weekly exercises, grading exams. </p>
                        <br>
                        <p>- Graduate Teaching Assistant - Computer Language Python<i class="fab fa-python"></i> - Fall 2023 Tasks: Tutoring, assigning and grading weekly exercises.</p>
                        <br>
                        <p>- Undergraduate Teaching Assistant - Introduction to Linear Algebra - Fall 2022 Tasks: Tutoring.</p>
                    </div>

                    <div class="card" id="education">
                        <h2>INDUSTRY EXPERIENCE</h2>
                        <p>- <a class = "proj" target = "_blank" href="https://www.iacm.forth.gr/divisions/numerical-analysis-computational-systems/data-science">Statistical Learning Internship</a> at FORTH (Dec. 2022 - July 2023) </p>
                        <br>
                        <p>Skills</p>
                        <ul>
                            <li>Machine Learning & Applied Statistics</li>
                            <li>Data Analysis & Biostatistics</li>
                            <li>Developing Python and R software</li>
                        </ul>
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

        setTimeout(function() {
            lnikaGif.style.opacity = '0';
            // Wait for the transition to finish before hiding the element
            setTimeout(function() {
                lnikaGif.style.display = 'none';
            }, 1000); // Wait an additional 1 second for the fade-out transition
        }, 2000);
        }
    

// Call loadHomeContent when the page loads
window.onload = function() {
loadHomeContent();
};

function easterEgg() {
    document.getElementById('profile').innerHTML = '<img src="src/G5LuffyEE.png" style="width:250px">';
    setTimeout(() => 
        { document.getElementById('profile').innerHTML = '<img src="src/pfp2.png" alt="Profile Image" onclick="easterEgg()">'; }, 100);
}


/* Clock */
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();


/* Switch clock Animation */

// Switch clock Animation

// Helper function to position the GIF randomly
function positionGif(gif) {
    var maxheight = document.getElementById('profile').clientHeight - 90;
    var maxwidth = document.getElementById('profile').clientWidth - 90;
  
    // Generate a random position within the container
    var randomLeft = Math.floor(Math.random() * maxwidth);
    var randomTop = Math.floor(Math.random() * maxheight);
  
    gif.style.left = randomLeft + 'px';
    gif.style.top = randomTop + 'px';
    gif.style.position = 'absolute';
  }
  
  
  // Function to show the first GIF and set a timeout to show the second GIF
  function showFirstGif() {
    var gif = document.getElementById('gif');
    gif.src = 'src/MM1.gif';
    gif.style.width = '41%'; // Original size
    gif.style.height = '41%'; // Original size
    positionGif(gif);
    // Set a timeout to show the second GIF after 6000 milliseconds
    setTimeout(showSecondGif, 7000);
  }
  
  // Function to show the second GIF and set a timeout to show the third GIF
  function showSecondGif() {
    var gif = document.getElementById('gif');
    gif.src = 'src/MM2.gif';
    gif.style.width = '26%'; // Smaller size
    gif.style.height = '26%'; // Smaller size
    positionGif(gif);
    // Set a timeout to show the third GIF after 2000 milliseconds
    setTimeout(showFourthGif, 2000);
  }
  
  // Function to show the third GIF and set a timeout to show the fourth GIF
  function showThirdGif() {
    var gif = document.getElementById('gif');
    gif.src = 'src/MM3.gif';
    gif.style.width = '35%'; // Size for the third GIF
    gif.style.height = '35%'; // Size for the third GIF
    positionGif(gif);
    // Set a timeout to show the fourth GIF after 485 milliseconds
    setTimeout(showFirstGif, 487);
  }
  
  // Function to show the fourth GIF and set a timeout to show the first GIF
  function showFourthGif() {
    var gif = document.getElementById('gif');
    gif.src = 'src/MM4.gif';
    gif.style.width = '28%';
    gif.style.height = '28%';
    positionGif(gif);
    setTimeout(showFirstGif, 10000);
  }

  // Use `DOMContentLoaded` to ensure all DOM content is loaded before running the script
  document.addEventListener('DOMContentLoaded', function() {
    showThirdGif(); // Start with the fourth GIF
  });
  


  
