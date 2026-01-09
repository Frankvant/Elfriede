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
        id: 'quiz-innovatie',
        type: 'quiz',
        question: 'Wat was de eerste innovatie van T&I?',
        answers: ['Voorleespen', 'Vertaalapparaten', 'Stressmonitoring', 'Exoskelet'],
        correctIndex: 0,
        correctSound: 'goed.mp3',
        wrongSound: 'fout.mp3',
        explanation: 'Het exoskelet was als eerste bij Werkzaak aanwezig, maar die waren al gekocht voor de start van het Programma T&I. De voorleespen werd als eerste geïntroduceerd, de vertaalapparaten en stressmonitoring volgden vlak daarna.'
    },
    {
        id: 'quiz-demo',
        type: 'quiz',
        question: 'Wat gebeurde er met jouw eerste demo van de voorleespen?',
        answers: ['Die ging top!', 'Je snapte niet hoe hij werkte', 'De tekst werd niet herkend', 'Die ging niet door'],
        correctIndex: 3,
        correctSound: 'goed.mp3',
        wrongSound: 'fout.mp3',
        explanation: 'Bij jouw eerste demo van de voorleespen kwam je vlak voor de demo naar Malinda dat je de pen wilde hebben. Malinda vertelde jou toen dat hij niet was opgeladen. Er volgde toen een karakteristiek Rotterdamse verwensing. Maar gelukkig werd hij daarna alsnog prima gebruikt binnen Werkzaak!'
    },
    {
        id: 'quiz-kleding',
        type: 'quiz',
        question: 'Elfriede heeft rode kleren aan vandaag, wat doet een slimme medewerker?',
        answers: ['Beginnen over salarisverhoging', 'Een afspraak met het DB inplannen', 'Haar een kop koffie aanbieden en vragen hoe het gaat', 'De loftrompet over Cedris afsteken'],
        correctIndex: 2,
        correctSound: 'goed.mp3',
        wrongSound: 'fout.mp3',
        explanation: 'Tja, jij was ook maar een mens en hebt soms een dag dat je niet te dichtbij moet komen. Tenzij je een espresso machiato komt brengen natuurlijk! Gelukkig vertelde je kledingkeuze ons al een hoop zo we wisten wat voor dag het ging worden. 😉'
    },
    {
        id: 'quiz-diwi-launch',
        type: 'quiz',
        question: 'Wanneer is DIWI officieel gelanceerd?',
        answers: ['Januari 2024', 'November 2024', 'April 2025', 'Juli 2025'],
        correctIndex: 2,
        correctSound: 'goed.mp3',
        wrongSound: 'fout.mp3',
        explanation: 'In januari 2024 zijn we gestart met de ontwikkeling. In november 2024 kwamen we er achter dat we nooit een MT-voorstel hadden ingediend voor DIWI. Dat is toen toch maar even gedaan. April 2025 hebben we DIWI feestelijk in gebruik genomen. In juli 2025 zijn we gestart met de uitrol van DIWI naar andere SW-bedrijven.'
    },
    {
        id: 'quiz-buddy',
        type: 'quiz',
        question: 'Het heeft een tijdje geduurd voordat we met Buddy aan de slag konden. Wat was de voornaamste reden?',
        answers: ['Het OMT gaf een veto', 'De ontwikkelaar ging failliet', 'Het werd veel te duur', 'De AI werkte niet goed'],
        correctIndex: 1,
        correctSound: 'goed.mp3',
        wrongSound: 'fout.mp3',
        explanation: 'Buddy heeft veel langer geduurd dan verwacht. En het blijkt ontzettend moeilijk om AI goed te laten werken. Maar de voornaamste reden waarom het lang duurde voordat we konden starten, was niet het OMT. Want jij veto-de hun veto. De aanbesteding moest uiteindelijk opnieuw omdat de gekozen ontwikkelaar de opdracht terug gaf. Toen snapten we niet waarom, maar een maand later bleek dat ze failliet gingen.'
    },
    {
        id: 'quiz-malinda',
        type: 'quiz',
        question: 'Wanneer werd Malinda het meest boos?',
        answers: ['Toen Eric weg werd getrokken', 'Toen ze verplicht met Frank moest werken', 'Toen je haar een latte met caffeine ipv decaf gaf', 'Toen je haar een latte met normale melk ipv haver gaf'],
        correctIndex: 0,
        correctSound: 'goed.mp3',
        wrongSound: 'fout.mp3',
        explanation: 'Tja, toen Eric naar het bedrijfsbureau werd gehaald, was Malinda niet blij. En dat heeft ze op genuanceerde toon kenbaar gemaakt, wellicht heb je dat mee gekregen. Maar gelukkig kwam alles weer goed toen Frank kwam en wij samen aan de innovaties bij Werkzaak konden werken.'
    },
    {
        id: 'story-final',
        type: 'text',
        content: 'Dat was de quiz! Bedankt voor alles Elfriede.',
        buttonText: 'Bekijk je cadeau'
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

        // FIX: Zorgt dat video niet fullscreen gaat op mobiel
        video.setAttribute('playsinline', '');
        video.setAttribute('webkit-playsinline', '');

        const button = document.createElement('button');
        button.textContent = step.buttonText;
        button.classList.add('btn-cheerful');
        button.style.display = 'none';
        button.addEventListener('click', nextStep);

        video.addEventListener('ended', () => {
            button.style.display = 'block';

            // FIX: Probeer fullscreen te sluiten als dat toch actief is
            if (document.fullscreenElement) {
                document.exitFullscreen().catch(e => console.log("Exit FS failed", e));
            } else if (document.webkitFullscreenElement) {
                document.webkitExitFullscreen().catch(e => console.log("Exit Webkit FS failed", e));
            }
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
                    nextButton.addEventListener('click', () => {
                        showExplanation(step.explanation);
                    });

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

function showExplanation(explanationText) {
    contentArea.innerHTML = '';

    const explanation = document.createElement('p');
    explanation.textContent = explanationText;
    explanation.classList.add('step-text');

    const button = document.createElement('button');
    button.textContent = 'Volgende';
    button.classList.add('btn-cheerful');
    button.addEventListener('click', nextStep);

    contentArea.appendChild(explanation);
    contentArea.appendChild(button);
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
