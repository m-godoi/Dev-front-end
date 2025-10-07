# Projeto Como Bambu - Recriação de Homepage

## Descrição do Projeto

Este projeto consiste na recriação da página inicial do restaurante Como Bambu, desenvolvido como parte de uma avaliação acadêmica. O objetivo central do projeto foi a aplicação de conceitos fundamentais de desenvolvimento web front-end, utilizando exclusivamente HTML5 e CSS3, sem o auxílio de frameworks ou JavaScript.

---

## Funcionalidades e Requisitos Atendidos

O desenvolvimento foi orientado por uma série de diretrizes técnicas, resultando na implementação das seguintes funcionalidades:

* **Layout Responsivo (Mobile-First):** O desenvolvimento seguiu a metodologia Mobile-First, com a estilização base para dispositivos móveis e adaptações progressivas para telas maiores (tablets e desktops) através de Media Queries.
* **Estrutura Semântica com HTML5:** A estrutura do documento foi construída com HTML5 semântico, utilizando landmarks como `<header>`, `<main>`, `<nav>`, `<footer>`, `<section>` e `<article>` para garantir um código claro, acessível e otimizado para mecanismos de busca.
* **Acessibilidade (A11y):**
    * Implementação de um link "Pular para o conteúdo" para otimizar a navegação via teclado.
    * Utilização de atributos `alt` descritivos em todos os elementos de imagem.
    * Garantia de uma hierarquia de títulos correta, com um único `<h1>` por página.
    * Aplicação de estilos de `:focus` visíveis para todos os elementos interativos.
* **CSS Moderno:** A estilização foi implementada com recursos modernos do CSS3, incluindo:
    * **Flexbox e Grid Layout** para a construção de alinhamentos e estruturas complexas.
    * **Variáveis CSS (`:root`)** para a criação de uma paleta de cores centralizada, facilitando a manutenção do design.
    * **Pseudo-elementos (`::after`)** para a adição de detalhes visuais, como as linhas decorativas dos títulos.
* **Código Limpo e Documentado:** Os códigos-fonte foram documentados com comentários detalhados que explicam as decisões de estrutura e estilo, facilitando a manutenção e a avaliação do projeto.

---

## Tecnologias Utilizadas

* **HTML5:** Utilizado para a estruturação semântica do conteúdo.
* **CSS3:** Utilizado para a estilização, layout e responsividade.
* **Google Fonts:** Utilizado para a importação da família tipográfica "Montserrat".

---

## Estrutura de Arquivos

O projeto está organizado na seguinte estrutura de pastas e arquivos:

/Dev-front-end
-css/
---style.css
-img/
---logo.jpg
---camarao.png
---happy-hour.png
---... (outras imagens)
-index.html
-README.md


---

## Como Executar o Projeto

Por se tratar de um projeto estático, não há dependências ou processos de instalação. Para visualizar a página, siga os passos abaixo.

1.  **Clone o repositório** para a sua máquina local:
    ```bash
    git clone [https://github.com/m-godoi/Dev-front-end.git](https://github.com/m-godoi/Dev-front-end.git)
    ```

2.  **Navegue até o diretório** do projeto:
    ```bash
    cd Dev-front-end
    ```

3.  **Abra o arquivo `index.html`** em qualquer navegador web (ex: Google Chrome, Firefox, Microsoft Edge).

---

## Histórico e Evolução do Código

O desenvolvimento seguiu um processo iterativo de construção e refatoração para atender aos requisitos propostos e alcançar a fidelidade visual com o site de referência:

1.  **Versão Inicial:** Foi criada uma primeira versão do layout a partir de uma interpretação inicial do design.
2.  **Refatoração Visual:** O CSS foi completamente reescrito para se alinhar com as imagens de referência, com ajustes na paleta de cores, tipografia e no estilo dos componentes.
3.  **Correção Semântica do HTML:** O código HTML foi revisado e corrigido para garantir a melhor estrutura semântica possível, incluindo a hierarquia de títulos (`<h1>`), a estruturação de listas e o uso de landmarks.
4.  **Implementação de Acessibilidade:** Foram adicionados recursos como o "skip-link" e estilos de `:focus` para atender aos requisitos obrigatórios de acessibilidade do projeto.
5.  **Refatoração para Mobile-First:** O CSS foi reescrito para seguir a metodologia Mobile-First, garantindo uma base de código mais robusta e performática para a responsividade.
6.  **Documentação:** Por fim, o código-fonte foi detalhadamente comentado para explicar cada etapa do desenvolvimento.

---

## Autores

* Matheus de Souza Godoi Alves
* Melyssa Santos Novaes
* Sharyssa Araujo Rodrigues da Silva