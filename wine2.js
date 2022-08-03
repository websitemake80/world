let counter1 = 0;
let counter2 = 1;
let bool = true;

const sections = document.querySelectorAll("sections");
const progress = document.querySelector('.progress h2');
const circles = document.querySelectorAll(".circle");
const menu = document.querySelector(".menu");

const progressCounter = () =>{
progress.textContent = `${counter2}/${sections.length}`;

Array.from(circles).forEach(circle => {
    circle.style.backgroundColor = "transparent";
});
document.querySelector(`.circle-${counter2}`).style.backgroundColor = '#ddd';
};

const pageController = () =>{
bool = true;

    if(counter1 === 5){
        Array.from(sections).forEach((section) => {
          section.style.left = '0';
        });
        counter1 = 0;
        counter2 = 1;
        progressCounter()
        bool = false;
    }
    
    if(counter1 === -1) {
        Array.from(sections).forEach(section => { 
            if (section.classList[0] === 'section-5'){
                return;
            }
            section.style.left = "-100vw";
        });
        counter1 = 4;
        counter2 = 5; 
        progressCounter();
        bool = false;
    }
    progressCounter()
    return bool;
}

window.addEventListener("wheel", (e)=>{
     const deltaY = e.deltaY > 0;

   if(deltaY){
    counter1++;
    counter2++;
} else {
    counter1--;
    counter2--;
}



pageController()
progressCounter()
console.log(counter1, counter2);
bool && (document.querySelector(`.section-${deltaY ? counter1:counter2}`).style.left = `${deltaY ? "-100vw" : "0"}`);


});

document.querySelector('.left-btn').addEventListener('click', () =>{
    counter1--;
    counter2--;
    pageController()&&(document.querySelector(`.section-${counter2}`).style.left = "0");
 })

document.querySelector('.right-btn').addEventListener('click', () =>{
    counter1++;
    counter2++;
    pageController()&&(document.querySelector(`.section-${counter1}`).style.left = "-100vw");
 })



 const btn = document.querySelector('.popup-btn');

 const videoContainer = document.querySelector('.video-container');

 const close = document.querySelector('.close');

 btn.addEventListener('click', ()=>{
    videoContainer.classList.add('show');
 })

 close.addEventListener('click', ()=>{
    videoContainer.classList.remove('show');
 })


 menu.addEventListener('click', () =>{
    document.querySelector('.navbar').classList.toggle("change");
 })