COSTURY ARTE: Ateliê de Costura e Alta Costura

## Visão Geral do Projeto (Fase 1: Planejamento e Estrutura)

Este projeto consiste na criação de um site web estático e vendável para o **COSTURY ARTE**, um ateliê de costura real que equilibra serviços de ajustes com a costura personalizada (vestidos de festa e sob medida).

O site foi desenvolvido como uma **vitrine digital** para reforçar a imagem de marca sofisticada e facilitar o contato direto para orçamentos, atendendo ao requisito de ser um site vendável.

| Item | Detalhe |
| :--- | :--- |
| **Integrantes** | Melyssa e Matheus |
| **Papéis (Baseado no fluxo de trabalho)** | **Melyssa**: Desenvolvimento HTML/CSS, Versionamento e Publicação. **Matheus**: Design UX/UI, Prototipação Figma e Documentação. |
| **Tecnologias** | HTML (Semântico), CSS (Responsivo). |
| **Link do Protótipo (Figma)** | O Figma tá fora de área |
| **Link do Site Publicado (GitHub Pages)** | https://m-godoi.github.io/Dev-front-end/ |

---

## 1. Escolha do Tema e Definição do Escopo

### Negócio Escolhido

- **Nome:** COSTURY ARTE - Ateliê de Costura.  
- **Informações Reais Usadas:** Fundado em **2023** por Jose Mari, Endereço **St. O QNO 13 loja 02 - Ceilândia, Brasília - DF, 72255-311**.

### Potencial de Negócio (Justificativa)

O site é fundamental para o negócio, pois constrói a **credibilidade e percepção** necessárias para vender vestidos de festa sob medida.  
Ao utilizar um design elegante e com foco na qualidade (dourado e preto), ele atrai o cliente de alto valor.  
A centralização das informações de contato no formato de "Contato" simplifica o funil de vendas e profissionaliza o atendimento.

### Público-Alvo

1. **Alta Costura:** Clientes que buscam exclusividade para eventos (vestidos de festa/noivas).  
2. **Consertos:** Público local que prioriza agilidade, confiança e caimento perfeito em ajustes diários.

### Páginas Principais (Mínimo Atendido)

1. **Home (`index.html`):** Apresentação da marca, galeria de destaque e chamada direta para contato.  
2. **O Ateliê (`pages/sobre.html`):** História, valores e apresentação da fundadora.  
3. **Contato/Orçamento (`pages/contato.html`):** Formulário de *briefing* inicial, contatos rápidos e **mapa de localização**.

---

## 2. Planejamento Visual: Justificativas Detalhadas de Design

Todas as escolhas visuais foram feitas para comunicar **Profissionalismo e Confiança**, alinhadas a Alta Costura.

| Elemento de Design | Escolha Implementada | Justificativa de Design e UX |
| :--- | :--- | :--- |
| **Paleta de Cores** | **Primária:** `#1D1D1D` (Grafite/Preto). **Acento:** `#B8860B` (Dourado/Bronze). | O contraste **Grafite e Dourado** é o padrão atemporal da **alta costura e marcas de luxo**, conferindo imediatamente sofisticação e peso à marca, justificando o valor dos serviços. |
| **Tipografia** | **Títulos:** `Playfair Display` (Serifada). **Corpo:** `Montserrat` (Sans-serif). | A fonte serifada (`Playfair Display`) em títulos evoca elegância e arte. A `Montserrat` no corpo garante uma leitura moderna, limpa e de alta **legibilidade** para formulários e informações de contato. |
| **Layout** | **Estrutura:** Abundância de espaço em branco (*whitespace*) e layouts em colunas duplas (`dual-columns`). | O espaçamento amplo é característico de sites *premium*, focando a atenção nos detalhes (galeria) e nas mensagens-chave. O uso de colunas organiza o conteúdo de forma lógica, especialmente separando o formulário das informações de mapa/contato. |
| **Botões (CTA)** | Destaque máximo na cor **Dourada** (`btn-primary`). | O Dourado é usado como **cor de conversão**, garantindo que as ações mais importantes para o negócio ("Solicitar Orçamento" e "Fale Conosco Agora") sejam o primeiro elemento que o usuário nota na tela. |
| **Responsividade** | Implementação completa de `Media Queries` no `style.css`. | Garante a usabilidade em dispositivos móveis. O layout quebra de colunas para **pilhas verticais** em telas pequenas, mantendo a navegação e o conteúdo fáceis de visualizar e interagir. |

---

## 3. Estrutura de Pastas e Versão do Código

### Estrutura de Pastas

- projeto-costury-arte/

-├── css/

-│ └── style.css (Estilos, variáveis e Media Queries)

-├── img/

-│ ├── Elegance.jpg (Galeria)

-│ ├── Barra.jpg (Galeria)

-│ ├── Madrinha.jpg (Galeria)

-│ └── [Outras imagens]

-├── pages/

-│ ├── sobre.html (O Ateliê)

-│ └── contato.html (Contato/Orçamento com Mapa)

-└── index.html (Home Page)

### Versão do Código

O código foi desenvolvido com foco total no **HTML Semântico** (`<header>`, `<main>`, `<section>`, `<footer>`, etc.),  
e a estilização no `style.css` é modular, facilitando a expansão na próxima fase.

---

## 4. Versionamento, Publicação e Progresso

| Data | Responsável | Etapa Realizada | Status |
| :--- | :--- | :--- | :--- |
| 20/10/2025 | Matheus | Definição de Escopo, Público-Alvo e Identidade Visual (Figma). |  Concluído |
| 20/10/2025 | Melyssa | Estrutura HTML completa (`index.html`, `sobre.html`, `contato.html`) e aplicação de HTML Semântico. |  Concluído |
| 20/10/2025 | Melyssa | Criação e Refinamento do `style.css` (Identidade Visual, Responsividade e Layout). |  Concluído |
| 20/10/2025 | Melyssa | **Versionamento:** `git init`, Commit Inicial e Conexão com GitHub. |  Concluído |
| 20/10/2025 | Melyssa | **Publicação:** Push final para o repositório e ativação do GitHub Pages. |  Concluído |
| 20/10/2025 | Matheus | Geração da Documentação Final (`README.md`). |  Concluído |

---

## 5. Próximos Passos (Próxima Fase)

- **Interatividade (JS):** Adicionar script para validação de formulário e interações dinâmicas.  
- **Refinamento do Conteúdo:** Inserir textos reais do ateliê para aprimorar o SEO.  
- **Expansão:** Desenvolver as páginas de portfólio e serviços planejadas, que não foram incluídas na navegação final desta fase.

---