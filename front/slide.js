
const today = new Date();

let dayOfWeek = today.getDay();
// Array de dias da semana

let c = dayOfWeek;
[...document.querySelectorAll(".slider-container")[0].getElementsByClassName("slide")].forEach(slide => {
    //slide.innerText = days[c];
    //c+= 1
    slide.addEventListener('click', (event) => {
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
    diaMes += 1;
    if (diaMes > getMaxDiaDoMes(mes,data.getFullYear())){
        diaMes = 1;    
    }
    diacontador += 1;
});


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
    let span1 = dia.querySelectorAll("span")[1].innerText;
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
    //alert(checkHorario());
    /*let fimIndex = [...semanaDiv.querySelectorAll(".slide")].
    
    find(el=>{
        
        console.log(spanInt);
        console.log("Max: "+getMaxDiaDoMes(mes,data.getFullYear()));
        return spanInt > getMaxDiaDoMes(mes,data.getFullYear());
    });
    console.log(fimIndex);
    */  
}  
