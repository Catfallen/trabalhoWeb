const main = document.getElementsByClassName("main")[0];
const slide = document.getElementById("slide");

const p = document.getElementById("date");
const spans = p.getElementsByTagName("span");

const data = new Date();
//console.log("Data de hoje: "+data.getDay());
const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const days = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado","Domingo", "Segunda-feira","Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
// Obtendo o nome do dia da semana
//const dayName = days[dayOfWeek];
const slides = [...document.querySelectorAll(".slider-container")[0].querySelectorAll(".slide")];
const timeSlots = [...document.getElementsByClassName("time-slot")]; 

const semanaDiv = document.querySelectorAll(".slider-container")[1];

let index = 0;
let questions = [intro, services];
let lista = []
var servicos = []
var horario = []
var diasObj = []
window.addEventListener('load', () => {
    intro();
    
    //services("markim");
    //horarios();
});

function intro() {
    let div = document.getElementsByClassName("bot")[0];
    div.style.display = "block";
    inputName();
}

function inputName() {

    let div = document.getElementsByClassName("input")[0];
    div.style.display = "flex";
    document.getElementById("btn1").addEventListener("click", function (event) {
        if (document.getElementById("name").value) {
            let name = document.getElementById('name').value;
            main.removeChild(div);
            services(name);
        }
    });
}

function services(nome) {
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

    input3.getElementsByTagName("button")[0].addEventListener("click", () => {
        if (checkAtivate().length > 0) {
            servicos = checkAtivate()
            horarios()
        }
        
    });

}

function putHorarios(dataString,horaString){
    fetch("http://localhost:3000/api/horarios",{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            data:dataString,
            hora:horaString
        })
    }).then(response=>response.json()).then(data=>{
        console.log(data);
        if(data.horarioId){
            console.log('Horário atualizado com sucesso, ID:'+ data.horarioId);
        }else{
            console.log(data.message);
        }
    }).catch(error => console.error("erro",error));
}

function horarios() {
    let text = "";
    console.log(servicos);
    servicos.forEach(el => {
        console.log(el);
        text += el.getElementsByTagName("p")[0].innerText + " + ";
    });
    text = text.slice(0, -3);
    slide.style.display = "none";
    document.getElementById("btn3").style.display = "none";
    let divName = document.getElementsByClassName("user")[1];

    divName.innerHTML = `<p class = 'name'>${text}</p>`;
    divName.style.display = "flex";

    let agendamentodiv = document.getElementsByClassName("agendamento")[0]
    agendamentodiv.style.display = "flex";
    agendamentodiv.querySelector("button").addEventListener("click",()=>{
        let dt = new Date()
        dt.setDate(checkDayAtivate().querySelectorAll("span")[1].innerText);
        let string = `${dt.getFullYear()}-${dt.getMonth()+1}-${dt.getDate()}`;
        let horas = spans[3].innerText.replace(":","");
        console.log(horas);
        console.log(string);
        
        putHorarios(string,horas);
        
    })
}


//intro();