// scripts.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);

    // Aqui você pode adicionar código para enviar os dados do formulário para um servidor
});

