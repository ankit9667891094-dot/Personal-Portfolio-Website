// ===== Typing Animation =====

const roles = [

    "MERN Stack Developer 🚀",
    "Frontend Developer 💻",
    "React Developer ⚛️",
    "Node.js Learner 🔥",
    "C++ Programmer 🧠"

];

let roleIndex = 0;
let charIndex = 0;

const typingText = document.querySelector(".typing-text");

function typeText(){

    if(charIndex < roles[roleIndex].length){

        typingText.innerHTML += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText,100);

    }

    else{

        setTimeout(eraseText,1500);
    }
}

function eraseText(){

    if(charIndex > 0){

        typingText.innerHTML = roles[roleIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseText,50);

    }

    else{

        roleIndex++;

        if(roleIndex >= roles.length){

            roleIndex = 0;
        }

        setTimeout(typeText,300);
    }
}

typeText();


// ===== Contact Form =====

function sendMsg(event){

    event.preventDefault();

    alert("Message Sent Successfully 🚀");

}


// ===== Scroll Animation =====

const allCards = document.querySelectorAll(".card,.skill-box,.cert");

window.addEventListener("scroll",()=>{

    allCards.forEach((item)=>{

        const itemTop = item.getBoundingClientRect().top;

        if(itemTop < window.innerHeight - 50){

            item.style.opacity = "1";

            item.style.transform = "translateY(0px)";
        }
    });
});

allCards.forEach((item)=>{

    item.style.opacity = "0";

    item.style.transform = "translateY(50px)";

    item.style.transition = "0.6s";
});
