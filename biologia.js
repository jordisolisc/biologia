document.addEventListener('DOMContentLoaded', () => {
    // --- DATA STRUCTURE ---
    const courseData = [
        {
            title: "Module 1: La Chimie du Vivant et la Molécule d'Eau",
            summary: "Ce module explore les fondements chimiques de la biologie, en se concentrant sur les atomes, les liaisons chimiques, et l'importance capitale de l'eau. L'eau, avec sa polarité et ses liaisons hydrogène, est essentielle à la vie, agissant comme solvant universel et régulateur de température.",
            completed: false,
            quiz: [
                // 15 questions valides
                { q: "Quelle liaison est responsable de la cohésion entre les molécules d'eau ?", o: ["Ionique", "Covalente polaire", "Hydrogène", "Covalente non polaire"], a: 2, type: "valid", explanation: "Les liaisons hydrogène sont des attractions faibles entre les molécules d'eau (entre l'oxygène d'une molécule et l'hydrogène d'une autre), responsables de sa cohésion." },
                { q: "Un atome est défini par son nombre de :", o: ["Neutrons", "Protons", "Électrons", "Nucléons"], a: 1, type: "valid", explanation: "Le nombre de protons (le numéro atomique) est unique à chaque élément et définit son identité." },
                { q: "Une solution avec un pH de 3 est considérée comme :", o: ["Acide", "Basique", "Neutre", "Tampon"], a: 0, type: "valid", explanation: "Un pH inférieur à 7 indique une solution acide, car la concentration en ions H+ est élevée." },
                { q: "Lequel de ces éléments n'est PAS un des 4 plus abondants dans les organismes vivants ?", o: ["Carbone", "Oxygène", "Azote", "Fer"], a: 3, type: "valid", explanation: "Les quatre éléments les plus abondants sont l'oxygène, le carbone, l'hydrogène et l'azote. Le fer est un oligo-élément important mais moins abondant." },
                { q: "Les isotopes d'un élément diffèrent par leur nombre de :", o: ["Protons", "Électrons", "Neutrons", "Charges"], a: 2, type: "valid", explanation: "Les isotopes ont le même nombre de protons (même élément) mais un nombre différent de neutrons, ce qui change leur masse atomique." },
                { q: "La capacité de l'eau à dissoudre de nombreuses substances est due à sa :", o: ["Faible chaleur spécifique", "Polarité", "Tension superficielle élevée", "Densité"], a: 1, type: "valid", explanation: "La polarité de l'eau (charges partielles positive et négative) lui permet d'entourer et de séparer les ions et autres molécules polaires." },
                { q: "Dans une liaison covalente non polaire, les électrons sont partagés :", o: ["Inégalement", "Également", "Transférés d'un atome à l'autre", "Uniquement par un atome"], a: 1, type: "valid", explanation: "Dans une liaison non polaire, les atomes ont une électronégativité similaire et partagent donc les électrons de manière égale." },
                { q: "Quelle est la formule chimique de l'eau ?", o: ["CO2", "H2O2", "O2", "H2O"], a: 3, type: "valid", explanation: "La molécule d'eau est composée de deux atomes d'hydrogène et d'un atome d'oxygène." },
                { q: "Les molécules qui repoussent l'eau sont dites :", o: ["Hydrophiles", "Polaires", "Hydrophobes", "Ioniques"], a: 2, type: "valid", explanation: "Les molécules hydrophobes ('peur de l'eau') sont non polaires et ne peuvent pas former de liaisons hydrogène avec l'eau." },
                { q: "Le glycogène est une forme de stockage de glucose chez :", o: ["Les plantes", "Les animaux", "Les bactéries", "Les champignons"], a: 1, type: "valid", explanation: "Les animaux stockent le glucose sous forme de glycogène dans le foie et les muscles. Les plantes le stockent sous forme d'amidon." },
                { q: "Les acides aminés sont les monomères des :", o: ["Lipides", "Acides nucléiques", "Protéines", "Glucides"], a: 2, type: "valid", explanation: "Les protéines sont des polymères constitués de chaînes d'acides aminés reliés par des liaisons peptidiques." },
                { q: "Une liaison peptidique se forme entre :", o: ["Deux monosaccharides", "Un glycérol et un acide gras", "Deux acides aminés", "Deux nucléotides"], a: 2, type: "valid", explanation: "La liaison peptidique est une liaison covalente qui unit le groupe carboxyle d'un acide aminé au groupe amino d'un autre." },
                { q: "L'ADN est un exemple de :", o: ["Protéine", "Lipide", "Glucide", "Acide nucléique"], a: 3, type: "valid", explanation: "L'ADN (Acide Désoxyribonucléique) est un acide nucléique qui porte l'information génétique." },
                { q: "La structure primaire d'une protéine est déterminée par :", o: ["Les liaisons hydrogène", "La séquence des acides aminés", "Les interactions hydrophobes", "Les ponts disulfure"], a: 1, type: "valid", explanation: "La structure primaire est l'ordre unique dans lequel les acides aminés sont liés pour former la chaîne polypeptidique." },
                { q: "Les graisses saturées sont saturées en :", o: ["Oxygène", "Azote", "Hydrogène", "Carbone"], a: 2, type: "valid", explanation: "Dans les graisses saturées, chaque atome de carbone de la chaîne d'acide gras est lié au nombre maximal d'atomes d'hydrogène." },
                // 5 questions mal formulées/pièges
                { q: "Puisque l'eau est partout, sa structure chimique exacte a peu d'importance pour la vie.", o: ["Vrai", "Faux"], a: 1, type: "trap", explanation: "C'est justement sa structure chimique (polarité, liaisons H) qui confère à l'eau ses propriétés vitales. La prémisse est fausse." },
                { q: "Quelle liaison, étant la plus forte, maintient les brins d'ADN ensemble ?", o: ["Hydrogène", "Ionique", "Covalente", "Peptidique"], a: 2, type: "trap", explanation: "Piège ! Les liaisons hydrogène maintiennent les deux brins ensemble, mais elles sont faibles. Les liaisons covalentes au sein d'un même brin sont les plus fortes. La question est ambiguë." },
                { q: "Tous les atomes d'un même élément ont-ils le même poids atomique ?", o: ["Oui, toujours", "Non, à cause des isotopes", "Seulement dans le vide", "Oui, s'ils sont neutres"], a: 1, type: "trap", explanation: "Les isotopes sont des variantes d'un élément avec un nombre différent de neutrons, ce qui modifie leur poids atomique." },
                { q: "Le pH du sang humain est-il légèrement basique ou acide pour optimiser le transport du CO2 ?", o: ["Acide", "Basique", "Neutre", "Ça dépend de l'altitude"], a: 1, type: "trap", explanation: "Le sang est légèrement basique (pH ~7.4). Cette propriété est cruciale pour le système tampon qui gère le CO2, mais la question lie directement le pH à l'optimisation d'une manière simpliste." },
                { q: "Laquelle de ces molécules n'est pas considérée comme une macromolécule organique ?", o: ["Protéine", "Amidon", "Chlorure de sodium (sel)", "ADN"], a: 2, type: "trap", explanation: "Le chlorure de sodium (NaCl) est un composé inorganique, pas une macromolécule organique comme les protéines, les glucides (amidon) ou les acides nucléiques." }
            ]
        },
        {
            title: "Module 2: La Cellule, Unité du Vivant",
            summary: "Ce module présente la cellule comme l'unité fondamentale de la vie. Il détaille les différences entre les cellules procaryotes et eucaryotes, et offre une vue d'ensemble des organites principaux (noyau, mitochondries, ribosomes, etc.) et de leurs fonctions respectives au sein de la cellule eucaryote.",
            completed: false,
            quiz: [
                // 15 questions valides
                { q: "Quel organite est le site de la respiration cellulaire ?", o: ["Noyau", "Ribosome", "Mitochondrie", "Appareil de Golgi"], a: 2, type: "valid", explanation: "La mitochondrie produit la majorité de l'ATP de la cellule par la respiration cellulaire." },
                { q: "La principale différence entre les cellules procaryotes et eucaryotes est l'absence de ___ chez les procaryotes.", o: ["Ribosomes", "Membrane plasmique", "Noyau délimité par une membrane", "ADN"], a: 2, type: "valid", explanation: "Les eucaryotes ont un noyau qui contient l'ADN, tandis que l'ADN des procaryotes se trouve dans une région appelée nucléoïde, non délimitée par une membrane." },
                { q: "Où sont synthétisées les protéines dans la cellule ?", o: ["Dans le noyau", "Sur les ribosomes", "Dans l'appareil de Golgi", "Dans les lysosomes"], a: 1, type: "valid", explanation: "Les ribosomes sont les 'usines' à protéines de la cellule, traduisant l'ARN messager en chaînes polypeptidiques." },
                { q: "Quel organite est responsable de la modification, du tri et de l'emballage des protéines et des lipides ?", o: ["Réticulum endoplasmique", "Appareil de Golgi", "Lysosome", "Peroxysome"], a: 1, type: "valid", explanation: "L'appareil de Golgi fonctionne comme un centre de tri et d'expédition pour les molécules de la cellule." },
                { q: "La membrane plasmique est principalement composée de :", o: ["Protéines et glucides", "Acides nucléiques", "Une bicouche de phospholipides et des protéines", "Cellulose"], a: 2, type: "valid", explanation: "Le modèle de la mosaïque fluide décrit la membrane comme une double couche de phospholipides dans laquelle des protéines sont intégrées." },
                { q: "Le cytosquelette est impliqué dans :", o: ["La synthèse des protéines", "La forme de la cellule et le mouvement", "La digestion intracellulaire", "La production d'énergie"], a: 1, type: "valid", explanation: "Le cytosquelette est un réseau de filaments qui fournit un support structurel, permet le mouvement des organites et de la cellule elle-même." },
                { q: "Quel organite contient les enzymes digestives de la cellule ?", o: ["Mitochondrie", "Noyau", "Lysosome", "Ribosome"], a: 2, type: "valid", explanation: "Les lysosomes sont remplis d'enzymes hydrolytiques qui dégradent les déchets, les débris cellulaires et les particules ingérées." },
                { q: "La photosynthèse a lieu dans quel organite des cellules végétales ?", o: ["Mitochondrie", "Chloroplaste", "Vacuole", "Mur cellulaire"], a: 1, type: "valid", explanation: "Les chloroplastes sont le site de la photosynthèse, convertissant l'énergie lumineuse en énergie chimique." },
                { q: "Le matériel génétique (ADN) d'une cellule eucaryote se trouve principalement dans :", o: ["Le cytoplasme", "Les ribosomes", "Le noyau", "La membrane plasmique"], a: 2, type: "valid", explanation: "Le noyau protège l'ADN de la cellule et contrôle l'expression des gènes." },
                { q: "Le réticulum endoplasmique lisse est impliqué dans :", o: ["La synthèse des protéines", "La synthèse des lipides et la détoxification", "La production d'ATP", "La digestion"], a: 1, type: "valid", explanation: "Le RE lisse a diverses fonctions métaboliques, y compris la synthèse des lipides et la dégradation des toxines." },
                { q: "La paroi cellulaire des plantes est principalement faite de :", o: ["Chitine", "Peptidoglycane", "Cellulose", "Lipides"], a: 2, type: "valid", explanation: "La cellulose est un polysaccharide structurel qui donne de la rigidité aux parois cellulaires des plantes." },
                { q: "Le nucléole est le site de :", o: ["La réplication de l'ADN", "La transcription", "L'assemblage des sous-unités ribosomiques", "La respiration cellulaire"], a: 2, type: "valid", explanation: "Le nucléole est une structure dense à l'intérieur du noyau où les ribosomes sont fabriqués." },
                { q: "Le transport actif à travers une membrane nécessite :", o: ["Un gradient de concentration", "De l'eau", "De l'énergie (ATP)", "Aucune protéine"], a: 2, type: "valid", explanation: "Le transport actif déplace des substances contre leur gradient de concentration et nécessite donc un apport d'énergie, généralement sous forme d'ATP." },
                { q: "L'osmose est le mouvement de ___ à travers une membrane semi-perméable.", o: ["Protéines", "Ions sel", "Eau", "Glucose"], a: 2, type: "valid", explanation: "L'osmose est la diffusion spécifique des molécules d'eau à travers une membrane pour équilibrer les concentrations de soluté." },
                { q: "Les cils et les flagelles sont des extensions de :", o: ["L'appareil de Golgi", "La membrane plasmique", "Le cytosquelette", "Le noyau"], a: 2, type: "valid", explanation: "Les cils et les flagelles sont des structures mobiles composées de microtubules, qui font partie du cytosquelette." },
                // 5 questions mal formulées/pièges
                { q: "Les mitochondries sont-elles présentes dans les cellules végétales ?", o: ["Non, elles ont des chloroplastes à la place", "Oui, pour la respiration quand il n'y a pas de lumière", "Seulement dans les racines", "Non, jamais"], a: 1, type: "trap", explanation: "Les cellules végétales ont des chloroplastes ET des mitochondries. Elles respirent en permanence, comme les cellules animales." },
                { q: "Puisque les procaryotes n'ont pas de noyau, leur ADN flotte librement sans aucune organisation.", o: ["Vrai", "Faux, il est dans une région appelée nucléoïde", "Vrai, c'est un chaos total", "Faux, il est attaché à la membrane"], a: 1, type: "trap", explanation: "L'ADN procaryote n'est pas enfermé dans un noyau, mais il est condensé et organisé dans une région spécifique appelée le nucléoïde." },
                { q: "Quel organite est le plus grand dans toutes les cellules animales ?", o: ["Le noyau", "La mitochondrie", "Ça dépend du type de cellule", "Le lysosome"], a: 2, type: "trap", explanation: "Piège ! Bien que le noyau soit souvent le plus grand, la taille relative des organites varie énormément en fonction de la spécialisation de la cellule." },
                { q: "La membrane plasmique est-elle une barrière rigide et imperméable ?", o: ["Oui, pour protéger la cellule", "Non, elle est fluide et sélectivement perméable", "Seulement chez les plantes", "Oui, sauf pour l'eau"], a: 1, type: "trap", explanation: "La membrane est décrite par le modèle de la mosaïque FLUIDE et elle est sélectivement perméable, contrôlant ce qui entre et sort." },
                { q: "Les ribosomes sont-ils considérés comme des organites au même titre que le noyau ?", o: ["Oui, ce sont les plus petits organites", "Non, car ils ne sont pas entourés d'une membrane", "Oui, car ils sont essentiels", "Non, ce sont des virus symbiotiques"], a: 1, type: "trap", explanation: "La définition stricte d'un organite en biologie cellulaire exige qu'il soit délimité par une membrane. Les ribosomes n'en ont pas." }
            ]
        }
    ];

    // --- DOM Elements ---
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const moduleTitle = document.getElementById('module-title');
    const moduleSummary = document.getElementById('module-summary');
    const questionContainer = document.getElementById('question-container');
    const submitQuizBtn = document.getElementById('submit-quiz-btn');
    const quizResults = document.getElementById('quiz-results');
    const prevModuleBtn = document.getElementById('prev-module-btn');
    const nextModuleBtn = document.getElementById('next-module-btn');

    // --- State ---
    let currentModuleIndex = 0;
    let userAnswers = {};

    // --- Functions ---
    function loadModule(index) {
        const module = courseData[index];
        moduleTitle.textContent = module.title;
        moduleSummary.textContent = module.summary;
        
        renderQuiz(module.quiz);
        updateProgress();
        updateNavigationButtons();
        quizResults.textContent = '';
        submitQuizBtn.style.display = 'block';
        submitQuizBtn.disabled = false;
    }

    function renderQuiz(quiz) {
        questionContainer.innerHTML = '';
        userAnswers = {};
        quiz.forEach((q, i) => {
            const questionElement = document.createElement('div');
            questionElement.className = 'question';
            questionElement.id = `question-${i}`;
            
            let optionsHTML = q.o.map((option, j) => `
                <label>
                    <input type="radio" name="q${i}" value="${j}">
                    ${option}
                </label>
            `).join('');

            questionElement.innerHTML = `
                <p>${i + 1}. ${q.q}</p>
                <div class="options">${optionsHTML}</div>
                <div class="feedback"></div>
            `;
            questionContainer.appendChild(questionElement);
        });

        document.querySelectorAll('input[type="radio"]').forEach(input => {
            input.addEventListener('change', (e) => {
                const qIndex = parseInt(e.target.name.substring(1));
                userAnswers[qIndex] = parseInt(e.target.value);
                // Visually mark selected
                const parentLabel = e.target.parentElement;
                parentLabel.parentElement.querySelectorAll('label').forEach(lbl => lbl.classList.remove('selected'));
                parentLabel.classList.add('selected');
            });
        });
    }

    function handleSubmitQuiz() {
        const quiz = courseData[currentModuleIndex].quiz;
        let score = 0;
        
        quiz.forEach((q, i) => {
            const questionElement = document.getElementById(`question-${i}`);
            const feedbackElement = questionElement.querySelector('.feedback');
            const selectedOption = userAnswers[i];

            questionElement.querySelectorAll('label').forEach(lbl => lbl.classList.remove('selected'));
            const selectedLabel = questionElement.querySelector(`input[value="${selectedOption}"]`)?.parentElement;
            if(selectedLabel) selectedLabel.classList.add('selected');

            if (selectedOption !== undefined) {
                if (selectedOption === q.a) {
                    if (q.type === 'valid') {
                        score++;
                        questionElement.classList.add('correct-answer');
                        feedbackElement.textContent = "Correct !";
                        feedbackElement.className = 'feedback correct';
                    } else {
                        questionElement.classList.add('incorrect-answer');
                        feedbackElement.innerHTML = `<strong>Piège détecté !</strong> Cette question est mal formulée. La bonne réponse est bien celle-ci, mais la prémisse est trompeuse. <br><em>${q.explanation}</em>`;
                        feedbackElement.className = 'feedback incorrect';
                    }
                } else {
                    questionElement.classList.add('incorrect-answer');
                    const correctLabel = questionElement.querySelector(`input[value="${q.a}"]`).parentElement;
                    correctLabel.classList.add('correct');
                    feedbackElement.innerHTML = `<strong>Incorrect.</strong> La bonne réponse était : "<strong>${q.o[q.a]}</strong>". <br><em>${q.explanation}</em>`;
                    feedbackElement.className = 'feedback incorrect';
                }
            } else {
                 feedbackElement.textContent = "Aucune réponse sélectionnée.";
                 feedbackElement.className = 'feedback incorrect';
            }
        });

        const validQuestionsCount = quiz.filter(q => q.type === 'valid').length;
        quizResults.textContent = `Votre score : ${score} / ${validQuestionsCount}`;
        courseData[currentModuleIndex].completed = true;
        submitQuizBtn.style.display = 'none';
        updateProgress();
        updateNavigationButtons();
    }

    function updateProgress() {
        const completedModules = courseData.filter(m => m.completed).length;
        const progress = (completedModules / courseData.length) * 100;
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${Math.round(progress)}%`;
    }

    function updateNavigationButtons() {
        prevModuleBtn.disabled = currentModuleIndex === 0;
        nextModuleBtn.disabled = currentModuleIndex === courseData.length - 1 || !courseData[currentModuleIndex].completed;
    }

    // --- Event Listeners ---
    submitQuizBtn.addEventListener('click', handleSubmitQuiz);

    nextModuleBtn.addEventListener('click', () => {
        if (currentModuleIndex < courseData.length - 1) {
            currentModuleIndex++;
            loadModule(currentModuleIndex);
        }
    });

    prevModuleBtn.addEventListener('click', () => {
        if (currentModuleIndex > 0) {
            currentModuleIndex--;
            loadModule(currentModuleIndex);
        }
    });

    // --- Initial Load ---
    loadModule(currentModuleIndex);
});