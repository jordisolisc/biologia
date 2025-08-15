// Función para cargar el progreso desde localStorage
function loadProgress() {
    const modules = ['A', 'B', 'C', 'D', 'simulaciones'];
    modules.forEach(module => {
        const progress = localStorage.getItem(`module_${module}_progress`) || 0;
        const progressElement = document.querySelector(`.module-card:nth-child(${modules.indexOf(module) + 1}) .progress`);
        const progressText = document.querySelector(`.module-card:nth-child(${modules.indexOf(module) + 1}) .progress-text`);
        
        if (progressElement && progressText) {
            progressElement.style.width = `${progress}%`;
            progressText.textContent = `${progress}% completado`;
        }
    });
}

// Función para inicializar los quizzes
function initQuizzes() {
    document.querySelectorAll('.quiz-options li').forEach(option => {
        option.addEventListener('click', function() {
            // Remover selección previa en esta pregunta
            this.parentElement.querySelectorAll('li').forEach(li => {
                li.classList.remove('selected');
            });
            
            // Seleccionar esta opción
            this.classList.add('selected');
            
            // Guardar la respuesta seleccionada
            const questionId = this.closest('.quiz-question').id;
            sessionStorage.setItem(questionId, this.getAttribute('data-option'));
        });
    });
    
    // Configurar botón de enviar
    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn) {
        submitBtn.addEventListener('click', checkQuizAnswers);
    }
}

// Función para verificar las respuestas del quiz
function checkQuizAnswers() {
    let correctAnswers = 0;
    const totalQuestions = document.querySelectorAll('.quiz-question').length;
    
    document.querySelectorAll('.quiz-question').forEach(question => {
        const questionId = question.id;
        const selectedOption = sessionStorage.getItem(questionId);
        const correctOption = question.getAttribute('data-correct');
        
        // Mostrar retroalimentación
        const feedback = question.querySelector('.feedback');
        const options = question.querySelectorAll('.quiz-options li');
        
        // Marcar opciones correctas e incorrectas
        options.forEach(option => {
            option.classList.remove('correct', 'incorrect');
            if (option.getAttribute('data-option') === correctOption) {
                option.classList.add('correct');
            } else if (option.getAttribute('data-option') === selectedOption && selectedOption !== correctOption) {
                option.classList.add('incorrect');
            }
        });
        
        // Mostrar retroalimentación
        if (selectedOption === correctOption) {
            feedback.classList.add('correct');
            feedback.classList.remove('incorrect');
            feedback.textContent = "¡Correcto! " + question.getAttribute('data-feedback');
            correctAnswers++;
        } else {
            feedback.classList.add('incorrect');
            feedback.classList.remove('correct');
            feedback.textContent = "Incorrecto. " + question.getAttribute('data-feedback');
        }
    });
    
    // Mostrar resultados
    const resultsContainer = document.querySelector('.results');
    const score = Math.round((correctAnswers / totalQuestions) * 100);
    resultsContainer.innerHTML = `
        <h3>Resultados del Test</h3>
        <p>Has acertado ${correctAnswers} de ${totalQuestions} preguntas (${score}%).</p>
    `;
    resultsContainer.style.display = 'block';
    
    // Actualizar progreso si es mayor que el actual
    const currentModule = window.location.pathname.split('-')[1].split('.')[0].replace('modulo', '');
    const currentProgress = localStorage.getItem(`module_${currentModule}_progress`) || 0;
    
    if (score > currentProgress) {
        localStorage.setItem(`module_${currentModule}_progress`, score);
        updateProgressBars();
    }
    
    // Desplazarse a los resultados
    resultsContainer.scrollIntoView({ behavior: 'smooth' });
}

// Función para actualizar las barras de progreso
function updateProgressBars() {
    const modules = ['A', 'B', 'C', 'D', 'simulaciones'];
    modules.forEach(module => {
        const progress = localStorage.getItem(`module_${module}_progress`) || 0;
        const progressElement = document.querySelector(`.module-card:nth-child(${modules.indexOf(module) + 1}) .progress`);
        const progressText = document.querySelector(`.module-card:nth-child(${modules.indexOf(module) + 1}) .progress-text`);
        
        if (progressElement && progressText) {
            progressElement.style.width = `${progress}%`;
            progressText.textContent = `${progress}% completado`;
        }
    });
}

// Inicialización cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    loadProgress();
    initQuizzes();
    
    // Configurar navegación entre módulos
    document.querySelectorAll('.module-card').forEach(card => {
        card.addEventListener('click', function() {
            window.location.href = this.getAttribute('onclick').match(/'(.*?)'/)[1];
        });
    });
});