const today = new Date();
let dayOfWeek = today.getDay();
// Array de dias da semana
const days = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado","Domingo", "Segunda-feira","Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
// Obtendo o nome do dia da semana
const dayName = days[dayOfWeek];
const slides = [...document.querySelectorAll(".slide")];



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

[...document.querySelectorAll(".slider-container")[1].getElementsByClassName("slide")].forEach(el=>{
    el.addEventListener("click",()=>{
        console.log(el.innerText);
    })
});



function checkAtivate(){
    return slides.filter(slide =>
        slide.classList.contains("active")
    );
}





