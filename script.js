const main = document.getElementsByClassName("main")[0];
let index = 0;
let questions = [intro,services];
let lista = []

function intro(){
    div1 = document.createElement("div");
    div1.setAttribute("class","bot");
    div1.innerHTML = "<p>Olá, tudo bem? Sou a assistente virtual do(a) Bonatto Barbeshop 099 e cuido do agendamento dos serviços dos profissionais dele(a), ok?</p>";    
    console.log(div1);
    main.appendChild(div1);
    inputName();
}

function inputName(){
    div = document.createElement("div");
    div.setAttribute("class",'input');
    div.setAttribute("id","divInput");
    div.innerHTML = "<input id = 'name' type='text'><button id = 'btn1'>enviar</button>";
    main.appendChild(div);
    
    document.getElementById("btn1").addEventListener("click",function(event){
        if(document.getElementById("name").value){
            let name = document.getElementById('name').value;
            main.removeChild(div);
            services(name);
        }
    });

}

function services(nome){
    //Mensagem
    div1 = document.createElement("div");
    div1.setAttribute("class","bot");
    div1.innerHTML = `<p>Como vai, ${nome}! Tudo bem?</p>`;    
    console.log(div1);
    main.appendChild(div1);

    //Slide
    div.setAttribute("class","bot");
    div = document.createElement("div");
    div.setAttribute("class",'input');
    div.innerHTML = `<div></div><button>enviar</button>`;
    main.appendChild(div);
    /*
    Corte,barba,hidratação,sobrancelha,limpeza de pele
    */  
}











intro();