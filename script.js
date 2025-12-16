const steps = [
    {
        type: 'video',
        src: 'test_intro.mp4',
        buttonText: 'Verder'
    },
    {
        type: 'quiz',
        question: 'Wat at Elfriede elke lunch?',
        options: ['Broodje Kaas', 'Salade', 'Kroket'],
        answer: 'Kroket'
    },
    {
        type: 'final',
        text: 'Dit was het begin! Straks meer.'
    }
];

let currentStep = 0;
const contentArea = document.getElementById('content-area');

function renderStep() {
    contentArea.innerHTML = '';

    const step = steps[currentStep];

    if (step.type === 'video') {
        const video = document.createElement('video');
        video.src = step.src;
        video.controls = true;
        video.classList.add('w-full', 'max-h-[80vh]');

        const button = document.createElement('button');
        button.textContent = step.buttonText;
        button.classList.add('primary-button');
        button.disabled = true;

        video.addEventListener('ended', () => {
            button.disabled = false;
        });

        // Fallback timeout for testing
        setTimeout(() => {
            button.disabled = false;
        }, 5000);

        button.addEventListener('click', nextStep);

        contentArea.appendChild(video);
        contentArea.appendChild(button);
    }
    else if (step.type === 'quiz') {
        const question = document.createElement('h2');
        question.textContent = step.question;
        question.classList.add('text-2xl', 'font-bold', 'mb-6', 'text-amber-500');

        const optionsContainer = document.createElement('div');
        optionsContainer.classList.add('w-full', 'space-y-2');

        step.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('quiz-button');

            button.addEventListener('click', () => {
                if (option === step.answer) {
                    button.classList.add('correct');
                    setTimeout(nextStep, 1000);
                } else {
                    button.classList.add('incorrect');
                    alert('Helaas!');
                }
            });

            optionsContainer.appendChild(button);
        });

        contentArea.appendChild(question);
        contentArea.appendChild(optionsContainer);
    }
    else if (step.type === 'final') {
        const message = document.createElement('h2');
        message.textContent = step.text;
        message.classList.add('text-3xl', 'font-bold', 'text-amber-500', 'animate-pulse');

        contentArea.appendChild(message);
    }
}

function nextStep() {
    currentStep++;
    if (currentStep < steps.length) {
        renderStep();
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', renderStep);
