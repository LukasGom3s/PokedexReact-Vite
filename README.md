# Pokédex React + Vite

Pokédex interativa feita com **React 19 + Vite**, no visual de uma Pokédex física: carcaça vermelha, lente azul, LEDs e uma tela LCD onde a lista de Pokémon é exibida.

**Integrantes da dupla:**

- Gustavo Ryan Gomes Guedes
- Lucas Gomes Esteves

## Como executar

Pré-requisito: [Node.js](https://nodejs.org/) 18 ou superior.

```bash
npm install
npm run dev
```

Depois, abra no navegador o endereço exibido no terminal. Por padrão do Vite: **http://localhost:5173**

Outros comandos:

```bash
npm run build     # gera a versão de produção em dist/
npm run preview   # serve a versão de produção localmente
```

> As imagens dos Pokémon e as fontes são carregadas pela internet (veja "Fontes externas"), então é preciso estar online para vê-las.

## Funcionalidades

| Requisito do enunciado | Como foi atendido |
| --- | --- |
| Exibir os Pokémon dos dados | Grade de cards com ID, nome, tipos e os 6 atributos (HP, Ataque, Defesa, Atq. Esp., Def. Esp. e Velocidade) |
| Pesquisa por nome ou ID | Campo de busca que filtra a lista enquanto o usuário digita (aceita também `#025`) |
| Filtro por tipo | Chips com todos os tipos do `pokedex-data.json`; tipos sem Pokémon ficam desabilitados |
| Detalhes do Pokémon | Modal com imagem, ID, nome, tipos, barras dos 6 atributos e total |
| Treinadores | Modal com nome, insígnias e os Pokémon de cada treinador (clicar no Pokémon abre os detalhes) |
| Nenhum Pokémon encontrado | Mensagem na tela com botão "Limpar filtros" |
| Interface responsiva | Layout adaptado para desktop, tablet e celular |
| Identidade visual própria | Tema Pokédex, cores por tipo, animações e botões com efeito de pressionar |

Extras implementados:

- **Favoritos ("Capturados")**: botão de Poké Bola em cada card e nos detalhes, contador no topo e filtro "Só capturados". A escolha fica salva no `localStorage` do navegador.
- **Navegação nos detalhes**: botões Anterior/Próximo e setas ← → do teclado.
- **Acessibilidade**: modais com foco preso e fechamento por `Esc`, cards navegáveis pelo teclado, respeito a `prefers-reduced-motion`.

## Dados utilizados

Os dados vêm do arquivo [`src/data/pokedex-data.json`](src/data/pokedex-data.json), importado diretamente em `App.jsx`. Ele contém Pokémon, atributos, tipos, treinadores e insígnias. Nenhum banco de dados é necessário.

## Fontes externas

- **Imagens dos Pokémon:** repositório de sprites da [PokéAPI](https://github.com/PokeAPI/sprites) (artes oficiais), carregadas por URL no formato `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{id}.png`. A aplicação não faz chamadas à API; só usa essas imagens. Os dados exibidos continuam vindo do `pokedex-data.json`.
- **Fontes tipográficas:** [Chakra Petch](https://fonts.google.com/specimen/Chakra+Petch) e [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P), pelo Google Fonts (`index.html`).

## Organização do projeto

```text
src/
├── assets/images/        # Logo da Pokédex
├── components/
│   ├── Modal.jsx         # Modal acessível reutilizado (detalhes e treinadores)
│   ├── Pokeball.jsx      # Ícone de Poké Bola em SVG
│   ├── PokemonCard.jsx   # Card da lista (ID, nome, tipos, atributos, capturar)
│   ├── PokemonDetails.jsx
│   ├── PokemonList.jsx   # Grade de cards e estado vazio
│   ├── SearchBar.jsx     # Busca e chips de filtro por tipo
│   ├── TrainersModal.jsx
│   └── TypeBadge.jsx     # Etiqueta colorida de tipo
├── css/                  # Um arquivo de estilo por componente + index.css (tokens e carcaça)
├── data/
│   └── pokedex-data.json
├── hooks/
│   └── useCaptured.js    # Estado dos Pokémon capturados (com localStorage)
├── utils/
│   └── pokemon.js        # URL das imagens, formatação de ID, nomes de tipos e atributos
├── App.jsx               # Estados globais, filtragem e composição da tela
└── main.jsx
```

## Conceitos de React utilizados

Componentes funcionais, props, `useState`, `useEffect`, `useMemo`, `useCallback`, `useRef`, hook personalizado (`useCaptured`), renderização de listas com `map()`, eventos, estados derivados (lista filtrada) e portal (`createPortal`) para os modais.
