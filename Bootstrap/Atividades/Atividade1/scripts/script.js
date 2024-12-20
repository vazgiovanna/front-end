// Esperar o DOM estar pronto
document.addEventListener('DOMContentLoaded', function () {
    // Selecionar todos os botões "Saiba mais"
    const buttons = document.querySelectorAll('[data-bs-toggle="modal"]');

    // Adicionar um evento de clique para cada botão
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Captura os dados do botão
            const title = button.getAttribute('data-title');
            const text = button.getAttribute('data-text');

            // Atualizar o título do modal
            const modalTitle = document.querySelector('#myModal .modal-title');
            modalTitle.textContent = title;

            // Atualizar o corpo do modal com o texto
            const modalBody = document.querySelector('#myModal .modal-body');
            modalBody.innerHTML = `<p>${text}</p>`;
        });
    });
});
