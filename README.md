# Pachamama Online

Site informativo e cultural sobre a Bolívia, desenvolvido para a disciplina de Aplicações para Internet. O projeto apresenta conteúdos sobre geografia, história e curiosidades do país, com foco em organização clara da informação, acessibilidade e experiência do usuário.

---

## Definição do Problema

### Contexto

O projeto consiste em um site informativo (landing page educativa) sobre a Bolívia, reunindo conteúdos históricos, geográficos e culturais em um único lugar, com navegação simples e visual atrativo.

### Público-alvo

Estudantes e curiosos entre 16 e 35 anos, que consomem conteúdo principalmente pelo celular e buscam informações rápidas, confiáveis e visualmente organizadas sobre outros países.

### Dor principal

Atualmente, muitas informações sobre a Bolívia estão dispersas, desorganizadas ou em sites com baixa qualidade visual e difícil navegação, dificultando o aprendizado rápido e intuitivo.

### Critério de sucesso

O usuário consegue navegar pelas principais seções (geografia, história e curiosidades) e compreender as informações essenciais sobre a Bolívia em menos de 2 minutos, em qualquer dispositivo.

---

## Arquitetura de Informação

O site está organizado nas seguintes seções:

* *Header (Navegação):* acesso rápido às seções principais
* *Hero:* apresentação do tema e chamada para exploração
* *Geografia:* dados e características do território
* *História:* linha do tempo com eventos importantes
* *Curiosidades:* fatos relevantes e diferenciados
* *Galeria:* imagens representativas do país
* *Sidebar:* informações rápidas e dados complementares
* *Footer:* links e informações institucionais

A hierarquia de títulos segue o padrão semântico:
H1 → H2 → H3

---

## Wireframe

Estrutura base da página (representação simplificada):


HEADER (Logo + Navegação)

HERO
[Título Principal]
[Descrição]
[Botão CTA]

CONTEÚDO PRINCIPAL
├── Geografia (Article)
├── História (Article + Timeline)
├── Curiosidades (Cards)
├── Galeria (Grid de imagens)

SIDEBAR
├── Ficha País
├── Ecossistemas
├── Destaque

FOOTER


---

## Sistema de Cores

### Inspiração

A paleta foi inspirada nas cores da bandeira da Bolívia e em elementos naturais (terra, vegetação e pedra).

### Cores principais

| Papel            | Cor     |
| ---------------- | ------- |
| Primária         | #C0392B |
| Secundária       | #E8B84B |
| Destaque         | #2E7D32 |
| Fundo            | #F5F0EB |
| Texto            | #1A1209 |
| Texto secundário | #6D6252 |
| Bordas           | #DDD5C8 |

---

## Tipografia

* *Títulos:* Playfair Display
* *Texto:* Source Serif 4

Escala tipográfica baseada em responsividade com clamp() para melhor adaptação entre dispositivos.

---

## Acessibilidade

* Estrutura HTML semântica (header, main, section, article, aside, footer)
* Uso de alt em imagens
* Navegação com aria-label
* Contraste de cores pensado para atender nível WCAG AA
* Suporte a modo escuro com prefers-color-scheme

---

## Tecnologias

* HTML5
* CSS3 puro
* Google Fonts
* Responsividade com Media Queries
* Dark Mode com CSS

---

## Estrutura do Projeto


ProjetoPachamama/
├── index.html
├── style.css
└── imagens/
    ├── salar.jpg
    ├── salardetalhe.jpg
    ├── titicaca.jpg
    ├── tiwanaku.jpg
    ├── cerrorico.jpg
    ├── amazonia.jpg
    └── valleluna.jpg


---

## Como Executar

Abra o arquivo index.html no navegador ou utilize a extensão Live Server no VS Code.

---

## Observações

Este projeto foi desenvolvido como base para aplicação dos conceitos de:

* Planejamento de interface
* Arquitetura de informação
* Tipografia e cores
* HTML semântico
* Organização visual e responsividade

---

## Autores

João Pedro Araújo Inácio
Iloir Martins de Souza Neto
