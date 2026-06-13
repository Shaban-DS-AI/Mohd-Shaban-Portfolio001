
const element = document.getElementById("typing");

if (!element) {
    console.log("Typing element not found!");
} else {

const text=[
"AI Engineer",
"Data Scientist",
"Machine Learning Engineer",
"NLP Developer",
"Power BI Analyst"
];

let i=0;
let j=0;
let erase=false;

function type(){

if(!erase){

element.innerHTML=text[i].substring(0,j++);

if(j>text[i].length){

erase=true;
setTimeout(type,1200);
return;

}

}
else{

element.innerHTML=text[i].substring(0,j--);

if(j<0){

erase=false;
i=(i+1)%text.length;

}

}

setTimeout(type,100);

}

type();

}






const text=[
"AI Engineer",
"Data Scientist",
"Machine Learning Engineer",
"NLP Developer",
"Power BI Analyst"
];

let i=0;
let j=0;
let erase=false;

function type(){

let element=document.getElementById("typing");

if(!erase){

element.innerHTML=text[i].substring(0,j++);

if(j>text[i].length){

erase=true;

setTimeout(type,1200);

return;

}

}

else{

element.innerHTML=text[i].substring(0,j--);

if(j<0){

erase=false;

i=(i+1)%text.length;

}

}

setTimeout(type,100);

}

type();


#-----
window.onscroll=function(){

let winScroll=document.body.scrollTop||
document.documentElement.scrollTop;

let height=document.documentElement.scrollHeight-
document.documentElement.clientHeight;

let scrolled=(winScroll/height)*100;

document.getElementById("progress-bar").style.width=scrolled+"%";

}

#----
const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.pageYOffset>300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;
const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

const menu=document.querySelector(".menu-toggle");
const navMenu=document.querySelector("nav ul");

menu.addEventListener("click",()=>{

navMenu.classList.toggle("active");

});

document.querySelectorAll("nav ul li a").forEach(link=>{

link.addEventListener("click",()=>{

navMenu.classList.remove("active");

});

});