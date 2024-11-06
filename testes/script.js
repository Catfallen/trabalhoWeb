// Seleciona os elementos
const mainSection = document.querySelector('.main');
const agendamentosSection = document.querySelector('.agendamentos');
const linkAgendamentos = document.querySelector('.link-agendamentos');
const linkMain = document.querySelector('.link-main');

// Função para mostrar a seção de agendamentos e esconder a main
linkAgendamentos.addEventListener('click', (e) => {
    e.preventDefault();
    mainSection.style.display = 'none';
    agendamentosSection.style.display = 'block';
});

// Função para voltar para a seção main e esconder agendamentos
linkMain.addEventListener('click', (e) => {
    e.preventDefault();
    agendamentosSection.style.display = 'none';
    mainSection.style.display = 'block';
});
