$('#telefone').mask('(00) 00000-0000');

$('form').validate({
    rules: {
        nome: {
            required: true,
            minlength: 3,
            maxlength: 50
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: false,
            minlength: 15,
        },
        mensagem: {
            required: true,
            minlength: 10,
            maxlength: 500
        }
    },
    messages: {
        nome: {
            required: 'Por favor, informe o seu nome.',
        },
        email: {
            required: 'Por favor, informe o seu email.',
        },
        telefone: {
            minlength: 'Por favor, informe um telefone completo.',
        },
        mensagem: {
            required: 'Por favor, escreva uma mensagem.'
        }
    }
});