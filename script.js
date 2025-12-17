const steps = [
    {
        id: 'welcome',
        type: 'start',
        title: 'Hoi Elfriede!',
        buttonText: 'Druk hier om te beginnen!'
    },
    {
        id: 'video-intro',
        type: 'video',
        src: 'testvideo_mp4.mp4',
        buttonText: 'Volgende'
    },
    {
        id: 'quiz-diwi',
        type: 'quiz',
        question: 'Wanneer is DIWI bedacht?',
        answers: ['Antwoord 1', 'Antwoord 2', 'Antwoord 3', 'Antwoord 4'],
        correctIndex: 0,
        correctSound: 'goed.mp3',
        wrongSound: 'fout.mp3'
    },
    {
        id: 'story-diwi',
        type: 'text',
        content: 'Het eerste idee van DIWI is al ontstaan in september 2023. Het kwam voort uit frustratie met Azumuta. Het duurde nog even tot de officiële lancering in mei 2025. Maar ondertussen kunnen we niet meer zonder!',
        buttonText: 'Volgende'
    }
];

let currentStep = 0;
const contentArea = document.getElementById('content-area');

function createBackground() {
    const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#FF9F43'];
    const body = document.body;

    for (let i = 0; i < 15; i++) {
        const ball = document.createElement('div');
        ball.classList.add('floating-ball');

        const size = Math.floor(Math.random() * 100) + 50;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const duration = Math.floor(Math.random() * 10) + 10;
        const delay = Math.random() * 10;

        ball.style.width = `${size}px`;
        ball.style.height = `${size}px`;
        ball.style.left = `${left}%`;
        ball.style.top = `${top}%`;
        ball.style.backgroundColor = color;
        ball.style.animationDuration = `${duration}s`;
        ball.style.animationDelay = `${delay}s`;

        body.appendChild(ball);
    }
}

function playSound(soundFile) {
    if (soundFile) {
        const audio = new Audio(soundFile);
        audio.play().catch(e => console.log("Audio play failed:", e));
    }
}

function fireConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

function renderStep() {
    contentArea.innerHTML = '';

    const step = steps[currentStep];

    if (step.type === 'start') {
        const title = document.createElement('h1');
        title.textContent = step.title;
        title.classList.add('step-title');

        const button = document.createElement('button');
        button.textContent = step.buttonText;
        button.classList.add('btn-cheerful');
        button.addEventListener('click', nextStep);

        contentArea.appendChild(title);
        contentArea.appendChild(button);
    }
    else if (step.type === 'video') {
        const video = document.createElement('video');
        video.src = step.src;
        video.controls = true;
        video.classList.add('w-full', 'max-h-[80vh]', 'rounded-lg');

        const button = document.createElement('button');
        button.textContent = step.buttonText;
        button.classList.add('btn-cheerful');
        button.style.display = 'none';
        button.addEventListener('click', nextStep);

        video.addEventListener('ended', () => {
            button.style.display = 'block';
        });

        // Fallback timeout for testing
        setTimeout(() => {
            button.style.display = 'block';
        }, 5000);

        contentArea.appendChild(video);
        contentArea.appendChild(button);
    }
    else if (step.type === 'quiz') {
        const question = document.createElement('h2');
        question.textContent = step.question;
        question.classList.add('step-title');

        const optionsContainer = document.createElement('div');
        optionsContainer.classList.add('w-full', 'space-y-3');

        step.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.classList.add('btn-quiz');

            button.addEventListener('click', () => {
                if (index === step.correctIndex) {
                    button.classList.add('correct');
                    playSound(step.correctSound);
                    fireConfetti();

                    const nextButton = document.createElement('button');
                    nextButton.textContent = 'Volgende';
                    nextButton.classList.add('btn-cheerful', 'mt-4');
                    nextButton.addEventListener('click', nextStep);

                    setTimeout(() => {
                        optionsContainer.appendChild(nextButton);
                    }, 1000);
                } else {
                    button.classList.add('incorrect');
                    playSound(step.wrongSound);
                }
            });

            optionsContainer.appendChild(button);
        });

        contentArea.appendChild(question);
        contentArea.appendChild(optionsContainer);
    }
    else if (step.type === 'text') {
        const text = document.createElement('p');
        text.textContent = step.content;
        text.classList.add('step-text');

        const button = document.createElement('button');
        button.textContent = step.buttonText;
        button.classList.add('btn-cheerful');
        button.addEventListener('click', nextStep);

        contentArea.appendChild(text);
        contentArea.appendChild(button);
    }
}

function nextStep() {
    currentStep++;
    if (currentStep < steps.length) {
        renderStep();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createBackground();
    renderStep();
});
