

const main = document.getElementsByClassName("main")[0];
const slide = document.getElementById("slide");
let index = 0;
let questions = [intro,services];
let lista = []

window.addEventListener('load',()=>{
    intro();
    //services("markim");
});

function intro(){
    let div = document.getElementsByClassName("bot")[0];
    div.style.display = "block";
    inputName();
}

function inputName(){
    
    let div = document.getElementsByClassName("input")[0];
    div.style.display = "flex";
    document.getElementById("btn1").addEventListener("click",function(event){
        if(document.getElementById("name").value){
            let name = document.getElementById('name').value;
            main.removeChild(div);
            services(name);
        }
    });
}

function services(nome){
    let divName = document.getElementsByClassName("user")[0];
    
    divName.innerHTML = `<p class = 'name'>${nome}</p>`;
    divName.style.display = "flex";  

    let div1 = document.getElementsByClassName("bot")[1];
    div1.innerHTML = `<p>Como vai, ${nome}! Tudo bem?</p><p>Por qual serviço você está procurando?</p>`;    
    div1.style.display = "block";

    document.getElementById("slide").style.display = "flex";
    document.getElementById("slide").scrollIntoView({ behavior: "smooth" });

    let slides = document.getElementsByClassName("slide");
    console.log(slides)

    //console.log(document.getElementsByClassName("input")[1])//style.display = 'flex';
    let input3 = document.getElementsByName("input3")[0]
    input3.style.display = "flex";
    input3.getElementsByTagName("button")[0].addEventListener("click",()=>{

    });

}

//intro();