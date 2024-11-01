//const { timeStamp } = require("console");
var diaHorarios = [];
const today = new Date();

let dayOfWeek = today.getDay();
// Array de dias da semana

let c = dayOfWeek;
[...document.querySelectorAll(".slider-container")[0].getElementsByClassName("slide")].forEach(slide => {
    //slide.innerText = days[c];
    //c+= 1
    slide.addEventListener('click', (event) => {
        console.log("preto");
        console.log(event.target.innerText)
        let slideIndex = slides.indexOf(slide);
        console.log(slideIndex);
        if (slideIndex >=0  && slideIndex < 2){
             // Remove a classe 'active' de todas as slides
            document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
        
            // Adiciona a classe 'active' apenas na slide clicada
            slide.classList.add('active');
        } else if(slideIndex >= 2 && slideIndex <= slides.length){
            slides[0].classList.remove("active");
            slides[1].classList.remove("active");
            slide.classList.add('active');
        }
    });
});


document.querySelectorAll('.time-slot').forEach(slot => {
    slot.addEventListener('click', () => {
        // Remove a classe 'active' de todas as divs
        document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('active'));
        
        // Adiciona a classe 'active' à div clicada
        slot.classList.add('active');
        updateHorario(checkDayAtivate());
    });
});


document.querySelectorAll('.time-slot').forEach(slot => {
    slot.addEventListener('click', () => {
        // Remove a classe 'active' de todas as divs
        document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('active'));
        
        // Adiciona a classe 'active' à div clicada
        slot.classList.add('active');
    });
});


let diacontador = new Date().getDay();
let diaMes = new Date().getDate();
let mes = data.getMonth();
spans[2].innerText = mes;
console.log(mes);
[...semanaDiv.getElementsByClassName("slide")].forEach(el=>{
    el.addEventListener("click",(s)=>{
        [...semanaDiv.getElementsByClassName("slide")].forEach(s=>{
            s.classList.remove('active');
            
        });
        el.classList.add("active");
        updateHorario(checkDayAtivate());
    });
    
    el.innerHTML = `<span>${days[diacontador]}</span> <hr> <span>${diaMes}</span>`;

    
    let text =  `${new Date().getFullYear()}-10-${diaMes}`;
    console.log(text);
    //diasObj.push(getHoras(text));
    


    diaMes += 1;
    if (diaMes > getMaxDiaDoMes(mes,data.getFullYear())){
        diaMes = 1;    
    }
    diacontador += 1;
});
[...semanaDiv.getElementsByClassName("slide")][0].classList.add("active");
updateHorario(checkAtivate());

//const horarios = document.getElementsByClassName("time-slot");
function checkAtivate(){
    return slides.filter(slide =>
        slide.classList.contains("active")
    );
}

function checkDayAtivate(){
    return [...semanaDiv.getElementsByClassName("slide")].find(d=>d.classList.contains("active"));
}


function checkHorario(){
    console.log(timeSlots);
    return timeSlots.find(el=>el.classList.contains("active"));
}

function getMaxDiaDoMes(ano, mes) {
    // Lembre-se: o mês é 0-indexado em JavaScript (0 para janeiro, 1 para fevereiro, etc.)
    return new Date(ano, mes, 0).getDate();
}

function updateHorario(dia){
    console.log(dia);
    let text = checkDayAtivate().innerText;
    spans[0].innerText = text;
    let span1 = checkDayAtivate().querySelectorAll("span")[1].innerText;
    let maxdia = getMaxDiaDoMes(mes,data.getFullYear());
    if(parseInt(span1) < maxdia){
        let newDate = new Date(data.getFullYear(),data.getMonth()+1,parseInt(span1));
        console.log(newDate);
        spans[1].innerText = meses[newDate.getMonth()]; 
    }else{
        spans[1].innerText = meses[data.getMonth()];
    }
    spans[2].innerText = data.getFullYear();
    spans[3].innerText = checkHorario().innerText;
}  

async function getHoras(dia) {
    try {
        const response = await fetch(`http://localhost:3000/api/horarios?dia=${dia}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Erro ao buscar horários disponíveis');
        }

        const data = await response.json();
        console.log("Horários disponíveis:", data);
        return data;
    } catch (error) {
        //console.error("Erro:", error.message);
        await gerarHorarios(dia);
        return await getHoras(dia);
    }
}

// Declara diaHorarios no escopo global, para que esteja disponível em toda a função


async function armazenarHorarios(dia) {
    try {
        const horarios = await getHoras(dia);
        if (horarios) {
            diaHorarios.push(horarios); // Adiciona os horários disponíveis à lista
        }
        console.log("Lista atual de horários:", diaHorarios);
    } catch (error) {
        console.log(false);
    }
}
async function gerarHorarios(dia) {
    try {
        const response = await fetch(`http://localhost:3000/api/gerarHorarios`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ dia }) // Passa o dia no corpo da requisição
        });

        if (!response.ok) {
            throw new Error('Erro ao gerar horários');
        }

        const result = await response.json();
        console.log(result.message); // Exibe mensagem de sucesso ao gerar horários
    } catch (error) {
        console.error("Erro ao gerar horários:", error);
    }
}