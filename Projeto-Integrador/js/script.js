document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.custom-form');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const nome = document.getElementById('nome');
            const email = document.getElementById('email');
            const descricao = document.getElementById('descricao');
            const tipoServico = document.getElementById('tipo_servico');

            let isValid = true;

            function setError(element, message) {
                const parent = element.parentElement;
                let errorDisplay = parent.querySelector('.error-message');
                if (!errorDisplay) {
                    errorDisplay = document.createElement('div');
                    errorDisplay.classList.add('error-message');
                    parent.appendChild(errorDisplay);
                }
                errorDisplay.textContent = message;
                element.style.borderColor = 'red';
                isValid = false;
            }

            function clearError(element) {
                const parent = element.parentElement;
                const errorDisplay = parent.querySelector('.error-message');
                if (errorDisplay) {
                    errorDisplay.remove();
                }
                element.style.borderColor = '#ccc';
            }

            
            if (nome.value.trim() === '') {
                setError(nome, 'Por favor, insira seu nome.');
            } else {
                clearError(nome);
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value.trim())) {
                setError(email, 'Insira um e-mail válido.');
            } else {
                clearError(email);
            }

            if (descricao.value.trim().length < 10) {
                setError(descricao, 'Descreva seu projeto em mais detalhes (mínimo 10 caracteres).');
            } else {
                clearError(descricao);
            }
            
             if (tipoServico.value.trim() === '') {
                setError(tipoServico, 'Indique o tipo de serviço desejado.');
            } else {
                clearError(tipoServico);
            }
            
            if (isValid) {
                alert('Sua solicitação foi enviada com sucesso! Em breve entraremos em contato.');
                form.reset(); 
            }
        });
    }
});

function toggleMobileMenu() {
    const navUl = document.querySelector('header nav ul');
    if (navUl) {
        navUl.classList.toggle('menu-open'); 
    }
}