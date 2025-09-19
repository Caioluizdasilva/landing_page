document.addEventListener('DOMContentLoaded', function() { 

    // EFEITO DO HEADER AO ROLAR A PÁGINA
    const header = document.getElementById('site-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // LÓGICA DO COUNTDOWN
    const countDownDate = new Date("Oct 5, 2025 13:00:00").getTime();
    const countdownElement = document.getElementById("countdown-timer");
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        if (distance < 0) {
            clearInterval(timer);
            if(countdownElement) countdownElement.innerHTML = "O GRANDE DIA CHEGOU!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        const format = (num) => num.toString().padStart(2, '0');

        if (countdownElement) {
             countdownElement.innerHTML = `
                <span>${days}</span>
                <span class="separator">:</span>
                <span>${format(hours)}</span>
                <span class="separator">:</span>
                <span>${format(minutes)}</span>
                <span class="separator">:</span>
                <span>${format(seconds)}</span>
            `;
        }
    }, 1000);

    // LÓGICA DO FORMULÁRIO PARA MENORES DE IDADE
    const ageInput = document.getElementById('idade');
    const guardianFields = document.getElementById('guardian-fields');
    const guardianNameInput = document.getElementById('responsavel');
    const guardianPhoneInput = document.getElementById('tel_responsavel');
    if (ageInput && guardianFields) {
        ageInput.addEventListener('input', function() {
            const age = parseInt(this.value, 10);
            if (!isNaN(age) && age < 18) {
                guardianFields.classList.remove('hidden');
                guardianNameInput.required = true;
                guardianPhoneInput.required = true;
            } else {
                guardianFields.classList.add('hidden');
                guardianNameInput.required = false;
                guardianPhoneInput.required = false;
            }
        });
    }

    // LÓGICA DO TYPED.JS COM FOTOS
    const saintImageElement = document.getElementById('saint-image');
    const quotesWithImages = [
        { quote: '"A Eucaristia é a minha autoestrada para o Céu." - São Carlo Acutis', image: 'img/sao_carlo.jpg' },
        { quote: '"O amor tudo pode, tudo suporta, tudo crê." - Santa Rita de Cássia', image: 'img/santa_rita.jpg' },
        { quote: '"Os tesouros da Igreja são os pobres e os sofredores." - São Lourenço', image: 'img/sao_lourenco.jpg' },
        { quote: '"Ide a José!" - Santa Teresa D\'Ávila', image: 'img/sao_jose.jpg' },
        { quote: '"O fruto do vosso ventre, bendito para sempre." - Sobre Sant\'Ana e São Joaquim', image: 'img/santana_sao_joaquim.jpg' }
    ];

    const quotes = quotesWithImages.map(item => item.quote);

    if (document.getElementById('hero-quote-typed') && saintImageElement) {
        new Typed('#hero-quote-typed', {
            strings: quotes,
            typeSpeed: 40,
            backSpeed: 20,
            backDelay: 2500,
            startDelay: 500,
            loop: true,
            shuffle: true,
            onStringTyped: function(arrayPos) {
                const currentImage = quotesWithImages[arrayPos].image;
                saintImageElement.style.opacity = 0;
                setTimeout(() => {
                    saintImageElement.src = currentImage;
                    saintImageElement.style.opacity = 1;
                }, 250);
            }
        });
    }
});
