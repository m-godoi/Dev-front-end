document.addEventListener("DOMContentLoaded", () => {
    const isPages = window.location.pathname.includes("/pages/");
    const prefix = isPages ? "../" : "./";

    function loadHTML(id, file) {
        fetch(prefix + file)
            .then(response => {
                if (!response.ok) throw new Error("Erro ao carregar componente");
                return response.text();
            })
            .then(data => {
                document.getElementById(id).innerHTML = data;
                if (isPages) {
                    const container = document.getElementById(id);
                    const links = container.querySelectorAll("a");
                    
                    links.forEach(link => {
                        const href = link.getAttribute("href");
                        if (href === "index.html") {
                            link.setAttribute("href", "../index.html");
                        } 
                        else if (href && href.includes("pages/")) {
                            link.setAttribute("href", href.replace("pages/", ""));
                        }
                    });
                }
            })
            .catch(err => console.error("Erro:", err));
    }

    loadHTML("header-container", "componentes/header.html");
    loadHTML("footer-container", "componentes/footer.html");

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

           if (nome.value.trim() === '') setError(nome, 'Por favor, insira seu nome.');
            else clearError(nome);

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value.trim())) setError(email, 'Insira um e-mail válido.');
            else clearError(email);

            if (descricao.value.trim().length < 10) setError(descricao, 'Descreva com mais detalhes (mínimo 10 letras).');
            else clearError(descricao);
            
             if (tipoServico.value.trim() === '') setError(tipoServico, 'Indique o tipo de serviço.');
            else clearError(tipoServico);
            
            if (isValid) {
                alert('Solicitação enviada com sucesso! Entraremos em contato.');
                form.reset(); 
            }
        });
    }
});