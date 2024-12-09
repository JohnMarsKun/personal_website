function generateHomeContent() {
    let homeContent = `<div class="card id="about-me">
                        <h2>ABOUT ME</h2>
                        <p>Hi there! I'm John (Yiannis in Greek) Maris, currently living in Brussels, Evere. I'm passionate about data science, machine learning, and mathematics. I'm in the final stages of my master's at the University of Crete and FORTH, where I also work as a Teaching Assistant. I work as an R&D Data Scientist at Toyota Motor, focusing on BEV range. Additionally, I'm a scholarship student at FORTH, working on Generative AI in Protein Engineering. My motivation comes from never giving up, no matter the odds. All we have to decide is what to do with the time given to us.</p>
                        <br>
                        <p>&#9670; Full Résumé <a class = "proj" target = "_blank" href="src/proj/cvj.pdf">here <i class="fas fa-link"> </i></a></p>
                    </div>
                    <div class="card" id="interests">
                        <h2>INTERESTS</h2>
                        <p>Machine Learning, Statistics & Causality, Deep Learning & Generative Models, Time Series & Econometrics, Bioinformatics, Mathematical Modeling, Dynamical Systems.</p>
                    </div>

                    <div class="card" id="projects">
                        <h2>PROJECTS/PUBLICATIONS</h2>
            <ul>
        `;

    projects.forEach(project => {
        homeContent += `
                <li>
                    <a class="link" href="${project.link}" target="_blank">${project.title} <i class="fas fa-link"></i></a>
            `;

        if (project.codeLink) {
            homeContent += ` <a class="link" href="${project.codeLink}" target="_blank"> (Code <i class="fab fa-python"></i> <i class="fab fa-github"></i>) </a>`;
        }
        if (project.part1Link) {
            homeContent += ` <a class="link" href="${project.part1Link}" target="_blank">(part 1 <i class="fas fa-link"></i>)</a>`;
        }
        if (project.part2Link) {
            homeContent += ` <a class="link" href="${project.part2Link}" target="_blank">(part 2 <i class="fas fa-link"></i>)</a>`;
        }

        homeContent += `</li>`;
    });

    homeContent += `</ul>`;

    return homeContent;
}
function generateBooks() {
    let bookContent = "<div class='card' id='books'><h2>SUGGESTED BOOKS</h2>";
    books.forEach(book => {
        bookContent += `
		<p>
			- <a class="course" target="_blank" href="${book.link}">${book.title}</a>
		</p>
		<br>
		`;
    });
    bookContent += "</div>";

    return bookContent;
}
function generateExperienceContent() {
    let experienceContent = `
        <div class="card" id="education">
            <h2>ACADEMIC EXPERIENCE</h2>
            <p>- Graduate Teaching Assistant - Machine Learning (<a class="proj" target="_blank" href="https://www.csd.uoc.gr/CSD/index.jsp?content=pg_courses_catalog&openmenu=demoAcc4&lang=en&course=156">CS577</a>) - Fall 2023; Tasks: lectures, Tutoring, assigning and grading weekly exercises, grading exams.</p>
            <br>
            <p>- Graduate Teaching Assistant - Computer Language Python<i class="fab fa-python"></i> - Fall 2023; Tasks: Tutoring, assigning and grading weekly exercises.</p>
            <br>
            <p>- Graduate Teaching Assistant - Numerical Analysis - Spring 2024; Tasks: Tutoring.</p>
            <br>
            <p>- Undergraduate Teaching Assistant - Introduction to Linear Algebra - Fall 2022; Tasks: Tutoring.</p>
        </div>
    `;

    let industryExperienceContent = `
        <div class="card" id="industry-experience">
            <h2>INDUSTRY EXPERIENCE</h2>
    `;

    industryExperience.forEach(exp => {
        industryExperienceContent += `
            <p>- <a class="proj" target="_blank" href="${exp.link}">${exp.title}</a> ${exp.duration}</p>
            <br>
            <p><strong>Skills</strong></p>
            <ul>
        `;

        exp.skills.forEach(skill => {
            industryExperienceContent += `<li>${skill}</li>`;
        });

        industryExperienceContent += `</ul><br>`;
    });

    industryExperienceContent += `</div>`;

    // Combine static and dynamic content
    const finalContent = experienceContent + industryExperienceContent;
    return finalContent;

}

// loading
const homeContent = generateHomeContent();
const bookContent = generateBooks();
const experienceContent = generateExperienceContent();
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
