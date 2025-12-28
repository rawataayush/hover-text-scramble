const para = document.querySelector('p');
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const originalText = para.innerText;

let interval = null;
let isAnimating = false;

para.addEventListener('mouseenter',() => {
    if (isAnimating) return;
    let iteration =  0;
    isAnimating = true;


    interval = setInterval(() => {
        para.innerText = originalText.split("").map((char, index) => {
            if(index < iteration) {
                return originalText[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
        }).join("");

        if (iteration >= originalText.length) {
            clearInterval(interval);
            isAnimating = false;
        }
        iteration += 1 / 3;
    }, 30);
});
