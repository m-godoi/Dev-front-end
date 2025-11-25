# COSTURY ARTE: Ateliê de Costura e Alta Costura

## Visão Geral do Projeto (Fase 2: Modularização e Refinamento)

Este projeto consiste na evolução do site web para o **COSTURY ARTE**, um ateliê de costura real. Nesta **Parte 2**, o foco foi a profissionalização do código através da **modularização de componentes**, aprimoramento da **acessibilidade** e garantia de **responsividade total**.

O site continua sendo uma **vitrine digital** para reforçar a imagem de marca sofisticada, mas agora com uma arquitetura de código escalável e profissional.

| Item | Detalhe |
| :--- | :--- |
| **Integrantes** | Melyssa e Matheus |
| **Papéis** | **Melyssa**: Desenvolvimento Front-end (Modularização JS, CSS Responsivo). **Matheus**: Design UX/UI, Documentação e Testes de Usabilidade. |
| **Tecnologias** | HTML5 Semântico, CSS3 (Flexbox/Grid), **JavaScript (Fetch API & DOM Manipulation)**. |

---

## 1. Escolha do Tema e Definição do Escopo

### Negócio Escolhido
- **Nome:** COSTURY ARTE - Ateliê de Costura.
- **Informações Reais Usadas:** Fundado em **2023** por Jose Mari, Endereço **St. O QNO 13 loja 02 - Ceilândia, Brasília - DF, 72255-311**.

### Potencial de Negócio (Justificativa)
O site é fundamental para o negócio, pois constrói a **credibilidade e percepção** necessárias para vender vestidos de festa sob medida. Ao utilizar um design elegante e com foco na qualidade (dourado e preto), ele atrai o cliente de alto valor. A centralização das informações de contato no formato de "Contato" simplifica o funil de vendas.

### Público-Alvo
1. **Alta Costura:** Clientes que buscam exclusividade para eventos (vestidos de festa/noivas).
2. **Consertos:** Público local que prioriza agilidade, confiança e caimento perfeito em ajustes diários.

---

## 2. Planejamento Visual: Justificativas Detalhadas de Design

Todas as escolhas visuais foram feitas para comunicar **Profissionalismo e Confiança**, alinhadas a Alta Costura.

| Elemento de Design | Escolha Implementada | Justificativa de Design e UX |
| :--- | :--- | :--- |
| **Paleta de Cores** | **Primária:** `#1D1D1D` (Grafite/Preto). **Acento:** `#B8860B` (Dourado/Bronze). | O contraste **Grafite e Dourado** é o padrão atemporal da **alta costura e marcas de luxo**, conferindo imediatamente sofisticação e peso à marca, justificando o valor dos serviços. |
| **Tipografia** | **Títulos:** `Playfair Display` (Serifada). **Corpo:** `Montserrat` (Sans-serif). | A fonte serifada (`Playfair Display`) em títulos evoca elegância e arte. A `Montserrat` no corpo garante uma leitura moderna, limpa e de alta **legibilidade** para formulários e informações de contato. |
| **Layout** | **Estrutura:** Abundância de espaço em branco (*whitespace*) e layouts em colunas duplas (`dual-columns`). | O espaçamento amplo é característico de sites *premium*, focando a atenção nos detalhes (galeria) e nas mensagens-chave. O uso de colunas organiza o conteúdo de forma lógica, separando visualmente textos de imagens. |
| **Botões (CTA)** | Destaque máximo na cor **Dourada** (`btn-primary`). | O Dourado é usado como **cor de conversão**, garantindo que as ações mais importantes ("Solicitar Orçamento") sejam o primeiro elemento que o usuário nota. |
| **Responsividade** | Implementação completa de `Media Queries` no `responsive.css`. | Garante a usabilidade em dispositivos móveis. O layout quebra de colunas para **pilhas verticais** em telas pequenas, e as imagens se ajustam sem distorção (`aspect-ratio`). |

---

## 3. Evolução Técnica (Parte 2: JavaScript e Modularização)

Nesta fase, o JavaScript deixou de ser apenas para validação e passou a gerenciar a **arquitetura do site**.

### Funcionalidades Implementadas

1. **Modularização de Componentes (Fetch API):**
    * Para evitar repetição de código HTML (DRY - Don't Repeat Yourself), o Cabeçalho (`header.html`) e o Rodapé (`footer.html`) foram isolados na pasta `componentes/`.
    * O arquivo `js/script.js` utiliza `fetch()` para injetar esses blocos em todas as páginas automaticamente.

2. **Gerenciamento Inteligente de Rotas:**
    * O script detecta se o usuário está na raiz (`index.html`) ou em uma página interna (`pages/sobre.html`).
    * Ele ajusta automaticamente os caminhos dos links (adicionando `../` quando necessário) para que o menu funcione perfeitamente em qualquer nível de pasta.

3. **Validação de Formulário:**
    * Script robusto que impede o envio de formulários vazios, valida o formato de e-mail e fornece feedback visual (bordas vermelhas e mensagens de erro) em tempo real.

---

## 4. Estrutura de Pastas (Atualizada - Parte 2)

A estrutura foi reorganizada para separar lógica, estilos e componentes, atendendo aos critérios de organização da rubrica:

```text
Projeto-Integrador/
│
├── componentes/        <-- [NOVO] Fragmentos HTML reutilizáveis
│   ├── header.html
│   └── footer.html
│
├── css/
│   ├── style.css       <-- Estilos globais e variáveis
│   └── responsive.css  <-- [NOVO] Regras específicas para Mobile/Tablet
│
├── js/
│   └── script.js       <-- [NOVO] Carregamento de componentes e Validação
│
├── pages/              <-- Páginas internas
│   ├── sobre.html
│   └── contato.html
│
├── img/                <-- Imagens otimizadas
│   ├── TecidoTitulo.png
│   ├── Elegance.jpg
│   └── ...
│
├── index.html          <-- Página Principal (Raiz)
└── README.md           <-- Documentação
````

-----

## 5\. Versionamento, Publicação e Progresso

| Data | Responsável | Etapa Realizada | Status |
| :--- | :--- | :--- | :--- |
| 20/10/2025 | Melyssa | Estrutura HTML completa (`index.html`, `sobre.html`, `contato.html`) e aplicação de HTML Semântico. | Concluído |
| 20/10/2025 | Melyssa | Criação e Refinamento do `style.css` (Identidade Visual, Responsividade e Layout). | Concluído |
| 24/10/2025 | Melyssa | Adição da pasta `js/` e do `script.js` (Validação de Formulário e Menu Mobile). | Concluído |
| 20/10/2025 | Melyssa | **Versionamento:** `git init`, Commit Inicial e Conexão com GitHub. | Concluído |
| 20/10/2025 | Melyssa | **Publicação:** Push final para o repositório e ativação do GitHub Pages. | Concluído |
| **17/11/2025** | **Melyssa** | **Modularização:** Criação da pasta `componentes` e separação de `header` e `footer`. | **Concluído** |
| **17/11/2025** | **Melyssa** | **Back-end simulado:** Integração do formulário com Formspree e Google Maps. | **Concluído** |
| **17/11/2025** | **Matheus** | **Refatoração CSS:** Ajustes finais de responsividade e correção de layout Desktop. | **Concluído** |
| **17/11/2025** | **Matheus** | **Documentação:** Atualização do README.md com a Rubrica da Parte 2. | **Concluído** |

-----

## 6\. Autoavaliação e Reflexão (Rubrica Parte 2)

### O Que Funcionou Bem?

  * **Modularização Eficiente:** A estratégia de usar JavaScript (`fetch`) para carregar o cabeçalho e o rodapé funcionou perfeitamente. Eliminou a redundância de código e facilitou a manutenção futura.
  * **Identidade Visual:** A manutenção da paleta de cores (Preto e Dourado) e da tipografia serifada garantiu que o site continuasse a transmitir a sofisticação necessária para o público de Alta Costura.

### Maior Desafio e Solução

  * **Desafio:** O gerenciamento de **caminhos relativos** nos componentes. Inicialmente, ao carregar o `header.html` dentro da página `pages/contato.html`, os links e imagens quebravam.
  * **Solução:** Implementamos uma lógica condicional no `script.js` que deteta a URL atual. Se o usuário estiver numa subpasta, o script adiciona automaticamente o prefixo `../` aos links.

### Próximos Passos (Melhorias Futuras)

1.  **Acessibilidade:** Implementar um *"Skip Link"* (botão oculto para "Pular para o conteúdo principal") para melhorar a navegação via teclado.
2.  **SEO:** Inserir textos reais e finais do ateliê para melhorar o posicionamento no Google.
3.  **Interatividade Avançada:** Adicionar um *slideshow* automático na galeria da Home.

<!-- end list -->

```
```