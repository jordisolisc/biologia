document.addEventListener('DOMContentLoaded', function() {
    const courseData = [
        {
            title: "Structure de la matière et notions de base",
            summary: `Ce module couvre les fondements de la chimie. Il aborde la constitution de l'atome (protons, neutrons, électrons), la notion de mole, le nombre d'Avogadro, et l'organisation des éléments dans le tableau périodique de Mendeleïev. La compréhension de ces concepts est essentielle pour aborder les réactions chimiques.`,
            quiz: [
                {
                    question: "Combien y a-t-il de protons, de neutrons et d'électrons dans l'ion 27Al³+?",
                    answers: {
                        a: "13, 14, 10",
                        b: "13, 27, 10",
                        c: "27, 13, 16"
                    },
                    correct: "a"
                },
                {
                    question: "Les isotopes 35Cl et 37Cl n'ont pas le même nombre de: ",
                    answers: {
                        a: "Protons",
                        b: "Électrons",
                        c: "Neutrons"
                    },
                    correct: "c"
                },
                {
                    question: "Quelle est la répartition électronique par couche de l'ion K+ (Z=19)?",
                    answers: {
                        a: "2, 8, 8, 1",
                        b: "2, 8, 8",
                        c: "2, 8, 1"
                    },
                    correct: "b"
                }
            ],
            completed: false
        },
        {
            title: "La réaction chimique : Approche qualitative",
            summary: `Ce module se concentre sur la nomenclature des composés chimiques, l'écriture et l'équilibrage des équations chimiques. Il introduit également les différentes fonctions organiques (acide carboxylique, ester, etc.) et inorganiques, ainsi que la reconnaissance des types de réactions.`,
            quiz: [
                {
                    question: "Quelle est la formule moléculaire de l'ion phosphate?",
                    answers: {
                        a: "PO₄³⁻",
                        b: "PO₄²⁻",
                        c: "PO₃³⁻"
                    },
                    correct: "a"
                },
                {
                    question: "Dans la molécule d'aspirine, quelles fonctions organiques trouve-t-on?",
                    answers: {
                        a: "Acide carboxylique et cétone",
                        b: "Acide carboxylique et ester",
                        c: "Alcool et ester"
                    },
                    correct: "b"
                },
                {
                    question: "Le nom correct pour Ba(OH)₂ est :",
                    answers: {
                        a: "Baryum (II) hydroxyde",
                        b: "Hydroxyde de baryum",
                        c: "Oxyde de baryum hydraté"
                    },
                    correct: "b"
                }
            ],
            completed: false
        },
        {
            title: "Notions de base en chimie (Partie 2)",
            summary: `Cette partie approfondit les notions de base avec des concepts comme l'énergie de première ionisation, les propriétés des solutions (concentration molaire, dilution), et le comportement des gaz. Elle lie les propriétés macroscopiques de la matière à sa structure microscopique.`,
            quiz: [
                {
                    question: "Dans le tableau périodique, l'électronégativité croît de :",
                    answers: {
                        a: "Haut en bas et de droite à gauche",
                        b: "Bas en haut et de gauche à droite",
                        c: "Haut en bas et de gauche à droite"
                    },
                    correct: "b"
                },
                {
                    question: "L'unité de masse atomique relative (uma) correspond à :",
                    answers: {
                        a: "La masse de l'atome d'hydrogène",
                        b: "1/12 de la masse de l'atome de carbone 12",
                        c: "La masse d'un proton"
                    },
                    correct: "b"
                },
                {
                    question: "Un mélange de 180g d'eau (M=18) et 400mL de méthanol (M=32, ρ=0.8) a une fraction molaire en méthanol de :",
                    answers: {
                        a: "0.5",
                        b: "0.64",
                        c: "0.36"
                    },
                    correct: "c"
                }
            ],
            completed: false
        },
        {
            title: "Composition des mélanges",
            summary: `Ce module traite des différents types de mélanges (homogènes, hétérogènes) et des solutions. Il aborde la dissociation des composés ioniques en solution, la notion d'électrolyte fort/faible et la conductivité électrique des solutions.`,
            quiz: [
                {
                    question: "Quelle est l'équation correcte de dissociation du nitrate de zinc?",
                    answers: {
                        a: "Zn(NO₃)₂ → Zn²⁺ + 2 NO₃⁻",
                        b: "ZnNO₃ → Zn²⁺ + NO₃²⁻",
                        c: "Zn(NO₃)₂ → Zn⁺ + (NO₃)₂⁻"
                    },
                    correct: "a"
                },
                {
                    question: "Lequel de ces liquides sera le plus conducteur de l'électricité?",
                    answers: {
                        a: "Un verre d'alcool éthylique",
                        b: "Un verre d'eau avec du sucre",
                        c: "Un verre d'eau avec du sel"
                    },
                    correct: "c"
                }
            ],
            completed: false
        },
        {
            title: "Réaction chimique : Aspect quantitatif",
            summary: `La stœchiométrie est au cœur de ce module. Il s'agit de l'étude quantitative des réactifs et des produits dans une réaction chimique. Les concepts de réactif limitant, de rendement de réaction et les calculs de masse et de mole sont essentiels.`,
            quiz: [
                {
                    question: "4g de H₂ réagissent avec 32g de O₂. Quel est le bilan massique correct pour former de l'eau (H₂O)?",
                    answers: {
                        a: "4g H₂ + 32g O₂ → 36g H₂O",
                        b: "2g H₂ + 32g O₂ → 34g H₂O",
                        c: "4g H₂ + 16g O₂ → 20g H₂O"
                    },
                    correct: "a"
                },
                {
                    question: "Pour la réaction 2Fe + 3/2 O₂ → Fe₂O₃, pour obtenir 0,300 mol de Fe₂O₃, il faut :",
                    answers: {
                        a: "0,600 mol de Fe et 0,450 mol d'O₂",
                        b: "0,300 mol de Fe et 0,450 mol d'O₂",
                        c: "0,600 mol de Fe et 0,200 mol d'O₂"
                    },
                    correct: "a"
                }
            ],
            completed: false
        },
        {
            title: "Équilibre chimique et thermodynamique",
            summary: `Ce module explore les réactions réversibles et l'état d'équilibre. Il introduit la constante d'équilibre (Kc, Kp) et le principe de Le Chatelier, qui prédit comment un système à l'équilibre répond aux changements de conditions (température, pression, concentration).`,
            quiz: [
                {
                    question: "Pour la réaction endothermique H₂O(g) + C(s) ⇌ H₂(g) + CO(g), que faut-il faire pour augmenter le rendement?",
                    answers: {
                        a: "Augmenter la pression totale",
                        b: "Diminuer la température",
                        c: "Ajouter de l'eau (H₂O)"
                    },
                    correct: "c"
                },
                {
                    question: "Une réaction s'arrête lorsque l'équilibre est atteint.",
                    answers: {
                        a: "Vrai",
                        b: "Faux"
                    },
                    correct: "b"
                },
                {
                    question: "Quel paramètre affecte la valeur de la constante d'équilibre Kc?",
                    answers: {
                        a: "La concentration des réactifs",
                        b: "La pression totale",
                        c: "La température"
                    },
                    correct: "c"
                }
            ],
            completed: false
        }
    ];

    const moduleList = document.getElementById('module-list');
    const moduleTitle = document.getElementById('module-title');
    const moduleSummary = document.getElementById('module-summary');
    const quizContainer = document.getElementById('quiz-container');
    const feedbackContainer = document.getElementById('feedback-container');
    const progressBar = document.getElementById('progress-bar');

    function updateProgress() {
        const completedModules = courseData.filter(m => m.completed).length;
        const totalModules = courseData.length;
        const progress = totalModules > 0 ? (completedModules / totalModules) * 100 : 0;
        progressBar.style.width = `${progress}%`;
        progressBar.setAttribute('aria-valuenow', progress);
        progressBar.textContent = `${Math.round(progress)}%`;
    }

    function renderModules() {
        moduleList.innerHTML = '';
        courseData.forEach((module, index) => {
            const moduleElement = document.createElement('a');
            moduleElement.href = '#';
            moduleElement.className = 'list-group-item list-group-item-action';
            if (module.completed) {
                moduleElement.classList.add('list-group-item-success');
            }
            moduleElement.textContent = `Module ${index + 1}: ${module.title}`;
            moduleElement.onclick = () => selectModule(index);
            moduleList.appendChild(moduleElement);
        });
    }

    window.selectModule = function(index) {
        const module = courseData[index];
        moduleTitle.textContent = module.title;
        moduleSummary.textContent = module.summary;
        renderQuiz(module, index);

        document.querySelectorAll('#module-list .list-group-item').forEach((item, idx) => {
            if (idx === index) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    function renderQuiz(module, moduleIndex) {
        quizContainer.innerHTML = '';
        feedbackContainer.innerHTML = '';

        if (module.completed) {
            feedbackContainer.innerHTML = '<div class="alert alert-success">Vous avez déjà complété ce module.</div>';
            return;
        }

        const form = document.createElement('form');
        form.id = `quiz-form-${moduleIndex}`;

        module.quiz.forEach((q, qIndex) => {
            const questionElement = document.createElement('div');
            questionElement.className = 'mb-3';
            const questionLabel = document.createElement('p');
            questionLabel.className = 'fw-bold';
            questionLabel.textContent = `Question ${qIndex + 1}: ${q.question}`;
            questionElement.appendChild(questionLabel);

            for (const key in q.answers) {
                const answerDiv = document.createElement('div');
                answerDiv.className = 'form-check';
                const input = document.createElement('input');
                input.type = 'radio';
                input.name = `question-${qIndex}`;
                input.value = key;
                input.className = 'form-check-input';
                input.id = `q${qIndex}-${key}`;

                const label = document.createElement('label');
                label.className = 'form-check-label';
                label.setAttribute('for', `q${qIndex}-${key}`);
                label.textContent = q.answers[key];

                answerDiv.appendChild(input);
                answerDiv.appendChild(label);
                questionElement.appendChild(answerDiv);
            }
            form.appendChild(questionElement);
        });

        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.className = 'btn btn-primary';
        submitButton.textContent = 'Soumettre le test';
        form.appendChild(submitButton);

        form.onsubmit = (e) => {
            e.preventDefault();
            checkQuiz(module, moduleIndex);
        };

        quizContainer.appendChild(form);
    }

    function checkQuiz(module, moduleIndex) {
        const form = document.getElementById(`quiz-form-${moduleIndex}`);
        let score = 0;
        feedbackContainer.innerHTML = '';

        module.quiz.forEach((q, qIndex) => {
            const selected = form.querySelector(`input[name="question-${qIndex}"]:checked`);
            const feedback = document.createElement('div');
            feedback.className = 'p-2 mb-2 rounded';

            if (selected && selected.value === q.correct) {
                score++;
                feedback.classList.add('bg-success-subtle');
                feedback.innerHTML = `<strong>Question ${qIndex + 1}: Correct!</strong>`;
            } else {
                feedback.classList.add('bg-danger-subtle');
                feedback.innerHTML = `<strong>Question ${qIndex + 1}: Incorrect.</strong> La bonne réponse était: ${q.answers[q.correct]}`;
            }
            feedbackContainer.appendChild(feedback);
        });

        if (score === module.quiz.length) {
            module.completed = true;
            const successMessage = document.createElement('div');
            successMessage.className = 'alert alert-success mt-3';
            successMessage.textContent = 'Félicitations! Vous avez réussi ce module.';
            feedbackContainer.appendChild(successMessage);
        } else {
            const tryAgainMessage = document.createElement('div');
            tryAgainMessage.className = 'alert alert-warning mt-3';
            tryAgainMessage.textContent = `Votre score est de ${score}/${module.quiz.length}. Veuillez réessayer pour valider le module.`;
            feedbackContainer.appendChild(tryAgainMessage);
        }

        renderModules();
        updateProgress();
    }

    // Initial render
    renderModules();
    updateProgress();
});
