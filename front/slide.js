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
            servicos = 0;
            // Adiciona a classe 'active' apenas na slide clicada
            slide.classList.add('active');
        } else if(slideIndex >= 2 && slideIndex <= slides.length){
            slides[0].classList.remove("active");
            slides[1].classList.remove("active");
            slide.classList.add('active');
            servicos.push(slide);
        }
    });
});

/*
document.querySelectorAll('.time-slot').forEach(slot => {
    slot.addEventListener('click', () => {
        // Remove a classe 'active' de todas as divs
        document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('active'));
        
        // Adiciona a classe 'active' à div clicada
        slot.classList.add('active');
        updateHorario(checkDayAtivate());
    });
});
*/

document.querySelectorAll('.time-slot').forEach(slot => {
    slot.addEventListener('click', () => {
        // Remove a classe 'active' de todas as divs
        document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('active'));
        
        // Adiciona a classe 'active' à div clicada
        slot.classList.add('active');
    });
});


let diacontador = new Date().getDay();
let novaData = new Date();
let mes = data.getMonth();
spans[2].innerText = mes;
//console.log(mes);
[...semanaDiv.getElementsByClassName("slide")].forEach(el=>{
    el.addEventListener("click",(s)=>{
        [...semanaDiv.getElementsByClassName("slide")].forEach(s=>{
            s.classList.remove('active');
            
        });
        el.classList.add("active");
        updateHorario(checkDayAtivate());
        appendHorarios(updateHorasDiv(el));
        
    });
    
    el.innerHTML = `<span>${days[diacontador]}</span> <hr> <span>${novaData.getDate()}</span>`;
    
    let text =  `${new Date().getFullYear()}-${novaData.getMonth()+1}-${novaData.getDate()}`;
    console.log("Texto: "+text);
    //diasObj.push(getHoras(text));
    armazenarHorarios(text);
    el.setAttribute("id",text);
    novaData.setDate(novaData.getDate()+1);
    diacontador+=1;
});
[...semanaDiv.getElementsByClassName("slide")][0].classList.add("active");
//updateHorario(checkAtivate());

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
    //console.log(timeSlots);
    return [...document.querySelectorAll(".time-slot")].find(el=>el.classList.contains("active"));
}

function getMaxDiaDoMes(ano, mes) {
    // Lembre-se: o mês é 0-indexado em JavaScript (0 para janeiro, 1 para fevereiro, etc.)
    return new Date(ano, mes, 0).getDate();
}

function updateHorario(){
    //console.log("updtate:"+dia);
    let dia = checkDayAtivate();
    console.log(dia);
    let text = checkDayAtivate().innerText;
    spans[0].innerText = text;
    let span1 = checkDayAtivate().querySelectorAll("span")[1].innerText;
    let stringSplit = dia.getAttribute("id").split("-")[1]
    spans[1].innerText = meses[parseInt(stringSplit)-1];
    let ano = new Date(data.getFullYear());
    spans[2].innerText = data.getFullYear();
    if (checkHorario()){

    spans[3].innerText = checkHorario().innerText;
    }
    //document.getElementsByClassName("grid-container")
    //console.log(meses.indexOf(spans[1].innerText))
}  

function updateHorasDiv(el){
    document.getElementsByClassName("grid-container")[0].innerHTML = "";
    //<div class="time-slot">08:00</div>
    let id = el.getAttribute("id");
    let listaAtualizada = diaHorarios.find(obj => obj.dia === id);
    return listaAtualizada;
}


function appendHorarios(lista){
    let grid = document.getElementsByClassName("grid-container")[0];
    console.log(lista)
    
    for (const horario of lista.horarios){
        //<div class="time-slot">08:00</div>
        let div = document.createElement("div");
        div.setAttribute("class","time-slot");
        div.innerText = horario.horas;
        grid.appendChild(div);
        console.log(horario.horas);
    }
    document.querySelectorAll('.time-slot').forEach(slot => {
        slot.addEventListener('click', () => {
            // Remove a classe 'active' de todas as divs
            document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('active'));
            
            // Adiciona a classe 'active' à div clicada
            slot.classList.add('active');
            updateHorario();
        });
    });   
}


async function getHoras(dia, tentativas = 3) {
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
        console.error("Erro:", error.message);
        if (tentativas > 0) {
            console.log(`Tentando novamente... (${4 - tentativas} de 3 tentativas restantes)`);
            await gerarHorarios(dia);
            return await getHoras(dia, tentativas - 1);
        } else {
            console.error("Número máximo de tentativas alcançado. Verifique a conexão ou o servidor.");
            throw error; // Repassa o erro após o limite de tentativas
        }
    }
}


// Declara diaHorarios no escopo global, para que esteja disponível em toda a função


async function armazenarHorarios(dia) {
    try {
        const horarios = await getHoras(dia);
        if (horarios) {
            diaHorarios.push({"dia":dia,"horarios":horarios}); // Adiciona os horários disponíveis à lista
        }
        //console.log("Lista atual de horários:", diaHorarios);
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

async function fetchServices() {
    try {
        const response = await fetch('http://localhost:3000/api/servicos', { // Substitua '/api/services' pelo endpoint correto
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            if (response.status === 404) {
                console.log("Nenhum serviço encontrado.");
            } else {
                console.log("Erro ao buscar serviços:", response.statusText);
            }
            return;
        }
        const services = await response.json();
        return services;
    } catch (error) {
        console.error("Erro ao consumir a API:", error);
    }
}