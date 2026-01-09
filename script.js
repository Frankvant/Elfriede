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
        src: 'intro.mp4',
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
        explanation: 'De exoskeletten waren als eerste bij Werkzaak aanwezig, maar die waren al gekocht voor de start van het Programma T&I. De voorleespen werd als eerste geïntroduceerd, de vertaalapparaten en stressmonitoring volgden vlak daarna.'
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
        explanation: 'Tja, jij bent ook maar een mens en hebt soms een dag dat je niet te dichtbij moet komen. Tenzij je een espresso machiato komt brengen natuurlijk! Gelukkig vertelde je kledingkeuze ons al een hoop zo we wisten wat voor dag het ging worden. 😉'
    },
    {
        id: 'quiz-diwi-launch',
        type: 'quiz',
        question: 'Wanneer is DIWI officieel gelanceerd?',
        answers: ['Januari 2024', 'November 2024', 'April 2025', 'Juli 2025'],
        correctIndex: 2,
        correctSound: 'goed.mp3',
        wrongSound: 'fout.mp3',
        explanation: 'In januari 2024 zijn we gestart met de ontwikkeling. In november 2024 kwamen we er achter dat we nooit een MT-voorstel hadden ingediend voor DIWI. Dat is toen toch maar even gedaan. In april 2025 hebben we DIWI feestelijk in gebruik genomen. In juli 2025 zijn we gestart met de uitrol van DIWI naar andere SW-bedrijven.'
    },
    {
        id: 'quiz-buddy',
        type: 'quiz',
        question: 'Het heeft een tijdje geduurd voordat we met Buddy aan de slag konden. Wat was de voornaamste reden?',
        answers: ['Het OMT gaf een veto', 'De ontwikkelaar ging failliet', 'Het werd veel te duur', 'De AI werkte niet goed'],
        correctIndex: 1,
        correctSound: 'goed.mp3',
        wrongSound: 'fout.mp3',
        explanation: 'Buddy heeft veel langer geduurd dan verwacht. En het blijkt ontzettend moeilijk om AI goed te laten werken. Maar de voornaamste reden waarom het lang duurde voordat we konden starten, was niet het OMT. Want jij veto-de hun veto! :-) De aanbesteding moest uiteindelijk opnieuw omdat de gekozen ontwikkelaar de opdracht terug gaf. Toen snapten we niet waarom, maar een maand later bleek dat ze failliet gingen.'
    },
    {
        id: 'quiz-malinda',
        type: 'quiz',
        question: 'Wanneer werd Malinda het meest boos?',
        answers: ['Toen Eric bij het bedrijfsbureau werd geplaatst', 'Toen ze verplicht met Frank moest werken', 'Toen je haar een latte met caffeine in plaats van decaf gaf', 'Toen je haar een latte met normale melk in plaats van havermelk gaf'],
        correctIndex: 0,
        correctSound: 'goed.mp3',
        wrongSound: 'fout.mp3',
        explanation: 'Tja, toen Eric naar het bedrijfsbureau werd gehaald, was Malinda niet blij. En dat heeft ze op genuanceerde toon kenbaar gemaakt, wellicht heb je dat mee gekregen. Maar gelukkig kwam alles weer goed toen Frank kwam en wij samen aan de innovaties bij Werkzaak konden werken.'
    },
    {
        id: 'quiz-arkite',
        type: 'quiz',
        question: 'Waarom is deze foto gemaakt?',
        image: 'arkite.jpeg',
        answers: ['Omdat je die dag nieuwe schoenen had', 'Start implementatie Arkite tafel', 'Om de nieuwe Werkzaak yell te oefenen', 'Oprichting TINT Rivierenland'],
        correctIndex: 3,
        correctSound: 'goed.mp3',
        wrongSound: 'fout.mp3',
        explanation: 'In 2023 was het zover, TINT Rivierenland werd opgericht. En daarom werd deze mooie foto gemaakt. Waarbij jij Flappie schoenen aan mocht!'
    },
    {
        id: 'quiz-video-msg',
        type: 'quiz',
        question: 'Bekijk de video. Wat zeg je na “dus….”?',
        videoQuestion: 'vraag.mp4',
        answers: ['Ik heb mijn studeerkamer net zo ingericht als de Aardbei', 'Malinda en ik hebben een filmpje opgenomen', 'Ik vond jullie blijkbaar niet heel belangrijk', 'Jullie zullen het zonder mij moeten doen maar dat kunnen jullie wel'],
        correctIndex: 1,
        correctSound: 'goed.mp3',
        wrongSound: 'fout.mp3',
        explanation: 'Dit filmpje was gemaakt voor de dag waarop DIWI aan onze collega’s in de branche werd getoond. Vervolgens heb je besloten dat we DIWI aan 8 bedrijven konden vermarkten. Echt ondernemerschap! Zo gaan de Werkzaak innovaties heel Nederland door.',
        videoExplanation: 'antwoord.mp4'
    },
    {
        id: 'quiz-chatgpt',
        type: 'quiz',
        question: 'Hoe lang had jij nodig om in te loggen in Chat GPT tijdens de AI training?',
        answers: ['Zo gepiept, je wist inlog gegevens uit het hoofd', 'Even opzoeken en inloggen, paar minuten', 'Nooit meer dan 10 minuten.', 'Het was toch "Ikbeneenlekkerwijf"? Pff, ik maak wel een nieuw Gmailadres aan.'],
        correctIndex: 3,
        correctSound: 'goed.mp3',
        wrongSound: 'fout.mp3',
        explanation: 'Soms wist je je wachtwoord wel, maar op een gegeven moment had je ook twee abonnementen lopen. Maar als je er eenmaal in zat, ging je wel degelijk volop aan de slag. Weer een teken dat innovatie en jij zo goed bij elkaar passen!'
    },
    {
        id: 'video-outtro',
        type: 'outtro',
        src: 'outtro.mp4',
        finalTitle: 'Bedankt voor alles Elfriede!',
        buttonText: 'Begin opnieuw'
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
        // Check for video question
        if (step.videoQuestion) {
            const video = document.createElement('video');
            video.src = step.videoQuestion;
            video.controls = true;
            video.classList.add('w-full', 'max-h-[40vh]', 'rounded-lg', 'mb-4');
            video.setAttribute('playsinline', '');
            video.setAttribute('webkit-playsinline', '');
            contentArea.appendChild(video);
        }
        // Check for image (existing functionality)
        else if (step.image) {
            const img = document.createElement('img');
            img.src = step.image;
            img.classList.add('w-full', 'max-h-[40vh]', 'object-contain', 'rounded-lg', 'mb-4');
            contentArea.appendChild(img);
        }

        const question = document.createElement('h2');
        question.textContent = step.question;
        question.classList.add('step-title');

        const optionsContainer = document.createElement('div');
        optionsContainer.classList.add('w-full', 'flex', 'flex-col', 'gap-3');

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
                    nextButton.classList.add('btn-cheerful', 'mt-8');
                    nextButton.addEventListener('click', () => {
                        showExplanation(step);
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
    else if (step.type === 'outtro') {
        contentArea.innerHTML = '';

        const video = document.createElement('video');
        video.src = step.src;
        video.controls = true;
        video.autoplay = true;
        video.classList.add('w-full', 'max-h-[80vh]', 'rounded-lg', 'object-cover');
        video.setAttribute('playsinline', '');
        video.setAttribute('webkit-playsinline', '');

        video.addEventListener('ended', () => {
            contentArea.innerHTML = '';

            const title = document.createElement('h1');
            title.textContent = step.finalTitle;
            title.classList.add('step-title');

            const button = document.createElement('button');
            button.textContent = step.buttonText;
            button.classList.add('btn-cheerful');
            button.addEventListener('click', () => {
                currentStep = 0;
                renderStep();
            });

            contentArea.appendChild(title);
            contentArea.appendChild(button);
        });

        video.play().catch(e => {
            console.log('Autoplay blocked', e);
        });

        contentArea.appendChild(video);
    }
}

function showExplanation(step) {
    contentArea.innerHTML = '';

    // Check for video explanation
    if (step.videoExplanation) {
        const video = document.createElement('video');
        video.src = step.videoExplanation;
        video.controls = true;
        video.classList.add('w-full', 'max-h-[40vh]', 'rounded-lg', 'mb-6');
        video.setAttribute('playsinline', '');
        video.setAttribute('webkit-playsinline', '');
        contentArea.appendChild(video);
    }
    // Check for image (existing functionality)
    else if (step.image) {
        const img = document.createElement('img');
        img.src = step.image;
        img.classList.add('w-full', 'max-h-[40vh]', 'object-contain', 'rounded-lg', 'mb-6');
        contentArea.appendChild(img);
    }

    const explanation = document.createElement('p');
    explanation.textContent = step.explanation;
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
