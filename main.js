let icon = document.querySelector(".icon i");
let navbar = document.querySelector("nav");
let span_element = document.querySelector("h4 .change");
let words = ["Freelancer", "Designer", "Youtuber", "Graphic Desiner"];
let word_index = 0;
let char_index = 0;
let current_word = '';
let typing = true;
let all_btn = document.querySelectorAll(".buttons button");
icon.addEventListener("click", function() {
    navbar.classList.toggle("active");
    if (icon.classList.contains("fa-bars")) {
        icon.classList.add("fa-x");
        icon.classList.remove("fa-bars");

    } else {
        icon.classList.remove("fa-x");
        icon.classList.add("fa-bars");
    }

});
// start typing effect
span_element.style.borderBottom = "solid 2px #00cc00";
setInterval(() => {
    if (typing) {
        current_word = words[word_index].slice(0, char_index + 1);
        char_index++;
        if (char_index === words[word_index].length) {
            typing = false;

            setTimeout(() => {}, 200)
        }

    } else {
        current_word = words[word_index].slice(0, char_index - 1);
        char_index--;
        if (char_index == 0) {
            typing = true;
            word_index++;

            if (word_index === words.length) {
                {
                    word_index = 0;
                }
            }

        }

    }
    span_element.innerHTML = current_word;
}, 150);
// end typingeffect
// start part expercience
all_btn.forEach((e, index) => {
    let goal = document.querySelector(".parent");
    let result = ``;

    e.onclick = function() {
        if (index == 0) {
            result = `
             <div class="boxes flex-md-nowrap flex-wrap d-flex g-2 mb-2">
                            <div class="box g-2 mb-2" style="width: 100%;margin: 10px;">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title">UI/UX Designer</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">Freelance</h6>
                                        <p class="card-text">
                                            Focused on designing intuitive user interfaces and enhancing user experience through wireframes, prototypes, and usability testing. Skilled in translating user needs into elegant, functional designs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="box mb-2" style="width: 100%;margin: 10px;">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title">API Integrator</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">Upwork Projects</h6>
                                        <p class="card-text">
                                            Proficient in integrating third-party APIs and handling JSON data to build dynamic, data-driven applications. Experienced in troubleshooting and optimizing API performance for seamless functionality.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="boxes flex-md-nowrap flex-wrap d-flex g-2 mb-2">
                            <div class="box g-2 mb-2" style="width: 100%;margin: 10px;">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title">Front-End Developer</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">Portfolio Project</h6>
                                        <p class="card-text">
                                            Developed responsive websites using HTML, CSS, JavaScript, and SASS. Applied clean code principles and Git version control to ensure maintainability and scalability across devices.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="box" style="width: 100%;margin: 10px;">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title">Technical Translator</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">Localization Hub</h6>
                                        <p class="card-text">
                                            Translated and localized technical documentation between Arabic and English with precision and clarity. Ensured terminology consistency and cultural relevance across platforms.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
           
           
           `
            goal.innerHTML = result
        } else if (index == 1) {
            result = `
             <div class="boxes flex-md-nowrap flex-wrap d-flex g-2 mb-2">
                            <div class="box g-2 mb-2" style="width: 100%; margin: 10px;">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5>2024</h5>
                                        <h5 class="card-title">Programming Foundations</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">Online Course</h6>
                                        <p class="card-text">
                                            Covered core programming concepts including variables, loops, functions, and object-oriented principles. Focused on writing clean, efficient code and solving algorithmic challenges using JavaScript and Python.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="box g-2 mb-2" style="width: 100%; margin: 10px;">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5>2022–2023</h5>
                                        <h5 class="card-title">Web Development Bootcamp</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">Online Course Platform</h6>
                                        <p class="card-text">
                                            Intensive training in front-end and back-end technologies including HTML, CSS, JavaScript, Git, and RESTful APIs. Built multiple responsive projects and practiced real-world debugging and deployment techniques.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="boxes flex-md-nowrap flex-wrap d-flex g-2 mb-2">
                            <div class="box g-2 mb-2" style="width: 100%; margin: 10px;">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5>2024</h5>
                                        <h5 class="card-title">Advanced JavaScript</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">Online Course</h6>
                                        <p class="card-text">
                                            Explored advanced topics such as closures, asynchronous programming, ES6+ features, and DOM manipulation. Applied concepts in interactive web applications and optimized performance for better user experience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="box g-2 mb-2" style="width: 100%; margin: 10px;">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5>2022–2023</h5>
                                        <h5 class="card-title">Responsive Web Design</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">Online Course Platform</h6>
                                        <p class="card-text">
                                            Learned to build mobile-first layouts using media queries, Flexbox, and Grid. Emphasized accessibility, cross-browser compatibility, and UI consistency across screen sizes and devices.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
            
            `
            goal.innerHTML = result;




        } else if (index == 2) {
            result = `
             <div class="boxes flex-md-nowrap flex-wrap d-flex g-2 mb-2">
                            <div class="box g-2 mb-2" style="width: 100%; margin: 10px;">
                                <div class="image">
                                    <img src="images/OIP.webp" class="w-100 rounded mb-2" alt="">
                                </div>
                                <div class="image">
                                    <img src="images/R.jpeg" class="w-100 rounded" alt="">
                                </div>
                            </div>
                            <div class="box g-2 mb-2" style="width: 100%; margin: 10px;">
                                <div class="image">
                                    <img src="images/download.webp" class="w-100 rounded mb-2" alt="">
                                </div>
                                <div class="image">
                                    <img src="images/OIP (3).webp" class="w-100 rounded mb-2" alt="">
                                </div>
                            </div>
                        </div>

                        <div class="boxes flex-md-nowrap flex-wrap d-flex g-2 mb-2">
                            <div class="box g-2 mb-2" style="width: 100%; margin: 10px;">
                                <div class="image">
                                    <img src="images/OIP (3).webp" class="w-100 rounded mb-2" alt="">
                                </div>
                                <div class="image">
                                    <img src="images/download (4).webp" class="w-100 rounded" alt="">
                                </div>
                            </div>
                            <div class="box g-2 mb-2" style="width: 100%; margin: 10px;">
                                <div class="image">
                                    <img src="images/download (3).webp" class="w-100 rounded" alt="">
                                </div>
                                <div class="image">
                                    <img src="images/download (3).webp" class="w-100 rounded" alt="">
                                </div>
                            </div>
                        </div>
            `
            goal.innerHTML = result;
        } else if (index == 3) {
            result = `
              <div class="text text-ligth">
                            <div class="row">
                                <div class="col-md-6">
                                    <ul style="list-style: none; padding-left: 0;color: white;">
                                        <li><strong>Full Name:</strong> Luciucs Meshahx
                                        </li>
                                        <li><strong>Status:</strong> Front-End Developer & Technical Translator</li>
                                        <li><strong>Experience:</strong> 2+ Years in Web Development</li>
                                    </ul>

                                </div>
                                <div class="col-md-6">
                                    <ul style="list-style: none; padding-left: 0;color: white;">
                                        </li>
                                        <li><strong>City:</strong> Port Said, Egypt</li>
                                        <li><strong>Age:</strong> 25</li>
                                        <li><strong>Freelance:</strong> Available</li>
                                    </ul>

                                </div>
                                <div class="col-md-6">
                                    <ul style="list-style: none; padding-left: 0;color: white;">
                                        <li><strong>Languages:</strong> Arabic (Native), English (Fluent)</li>
                                        <li><strong>Gender:</strong> Male</li>
                                        <li><strong>Education:</strong> B.Sc. in Computer Science, Port Said University</li>
                                    </ul>

                                </div>
                                <div class="col-md-6">
                                    <ul style="list-style: none; padding-left: 0;color: white;">
                                        <li><strong>Languages:</strong> Arabic (Native), English (Fluent)</li>
                                        <li><strong>Gender:</strong> Male</li>
                                        <li><strong>Education:</strong> B.Sc. in Computer Science, Port Said University</li>
                                    </ul>

                                </div>
                            </div>

                        </div>`
            goal.innerHTML = result;
        }

    }




})