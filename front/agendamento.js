const data = new Date();
//console.log("Data de hoje: "+data.getDay());
const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];
const p = document.getElementById("date");
const spans = p.getElementsByTagName("span");

spans[0].innerText = days[data.getDay()];
spans[1].innerText = data.getDate();
spans[2].innerText = meses[data.getMonth()];
spans[3].innerText = data.getFullYear();


function updateHorario(){
    
    let newData = new Date();
}