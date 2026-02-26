const messages = [
"Te quiero muchisimo mi Genesi",
    "Te adoro",
    "Quiero que seas mia y solo mia",
    "Kiss kiss",
"🥰​",
"Gracias por estar en mi vida",
"​💖​​​​​",
"Eres la luz de mi vida",
"💗​​",
"Tu y yo para siempre mami Gen",
"😍​​",
"Te quiero comer a besos",
"😘​​",
"Abrazame tan fuerte hasta que seamos uno",
"❤️‍🔥​",
"Mi corazon te pertenece",
"Eres la mas bonita en mis ojos",
"No paro de pensar en ti",
"espero que te guste el detalle",
"MUUUUUAAAAAAAK",
"Boo💖Bae",
"Besitos para mi reina",
];

function createTextBubble() {
const bubble = document.createElement("div");
bubble.className = "text-bubble";
bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

const left = Math.random() * 80 + 10;
const top = Math.random() *80 + 10;

bubble.style.position = "absolute";
bubble.style.left = left + "vw";
bubble.style.top = top + "vh";

const container = document.getElementById("bubbles-text");
container.appendChild(bubble);

setTimeout(() => {
const rect = bubble.getBoundingClientRect();

if (rect.right > window.innerWidth) {
    const newLeft = window.innerWidth - rect.width - 10;
    bubble.style.left = `${newLeft}px`;
    }

    if (rect.bottom > window.innerHeight) {
    const newTop = window.innerHeight - rect.height - 10;
    bubble.style.top = `${newTop}px`;
    }

    if (rect.left < 0) {
    bubble.style.left = "10px";
    }

    if (rect.top < 0) {
    bubble.style.top = "10px";
    }
}, 10);

setTimeout(() => {
bubble.remove();
}, 8000);

}


setInterval(createTextBubble, 500);
