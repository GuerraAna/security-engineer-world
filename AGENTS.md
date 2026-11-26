# AGENTS.md

Documentação pessoal de estudos de Security Engineering, organizada pelas
etapas de um treinamento (Foundation → Trainee → Expert → Master, até 2028).
Site estático com [Docusaurus](https://docusaurus.io). Conteúdo defensivo e
educacional — técnicas de ataque aparecem no contexto de detecção/defesa.

## Fluxo de trabalho

- **Commitar e fazer push direto na `main`** — sem PR, sem branch de feature.
- Deploy automático no GitHub Pages via `.github/workflows/deploy.yml`.

## Comandos

```bash
npm install        # dependências
npm start          # dev server (porta 3000, baseUrl /security-engineer-world/)
npm run build      # build de produção — rodar antes de commitar para validar
npm run serve      # serve o build localmente
npm run typecheck  # checa TS
```

## Convenções de conteúdo (docs/)

- Cada pasta em `docs/` = uma etapa do treinamento (ordem via `_category_.json`)
- Níveis futuros não têm pasta — ficam "locked" no array `segments` em
  `src/pages/index.tsx` até a etapa começar
- Páginas usam `sidebar_label` com emoji; título limpo no `title`
- Após o emoji do label, incluir thin space (U+2009) antes do espaço —
  `🛡️  Foundation` — para o ícone não colar no texto
- Seção "O que anotar depois" ao final das páginas como checklist de estudo
- Seção "Referências oficiais" ao final de TODA página com links canônicos
- Front matter com dois-pontos no `title` precisa de aspas (YAML)
- `static/llms.txt` = índice estruturado pra IAs — atualizar ao criar/mover página
- Abas `<Tabs>`/`<TabItem>` para código comparativo (ex: Linux vs Windows,
  ataque vs defesa)

## Design (src/css/custom.css + src/pages/)

- Tema "game": pixel font (Press Start 2P) em títulos/badges, cards LVL,
  barras de XP, sombras offset retro
- Paleta de transição: red team `#FF3B5B`/`#1A0B12` → blue team `#38BDF8`/`#0B1220`
- Primária light: violeta `#7C3AED` (ponto médio); dark: `#38BDF8`
- Raios do hero em `index.tsx`: `hue: 345 - angle/360 * 130` (vermelho→azul)
- Ícones da navbar via CSS `mask` + data-URI SVG (evitar `viewBox` negativo)
- Cuidado: `.navbar { color: #fff }` herda para `.navbar-sidebar` — cores da
  sidebar mobile precisam de override explícito (ver seção mobile no CSS)
- Todo elemento novo precisa funcionar nos dois temas (light e dark)
- XP dos cards: `index.module.css` nth-child — atualizar conforme a trilha avança
- Sidebar: respiro via `--ifm-menu-link-padding-vertical/horizontal` +
  margin entre `.menu__list-item` (ver seção Sidebar no custom.css)

## Pegadinhas responsivas (herdadas do react-native-world, 2026-11)

- O breakpoint mobile do Docusaurus é fixo em **996px no JS e no CSS**
  (`useWindowSize`) — o drawer `.navbar-sidebar` NÃO renderiza acima disso.
  Não dá pra antecipar o hamburger com CSS; a faixa 997–1200px precisa
  COMPRIMIR os itens para caberem.
- Especificidade: `.navbar__items .navbar__link{display:inline-flex}` (0-2-0)
  sobrescreve o `.navbar__item{display:none}` nativo (0-1-0) — links ficavam
  visíveis no mobile. O hide é reforçado com seletor mais específico
  (`.navbar .navbar__items .navbar__item`) no bloco `@media (max-width:996px)`.
- Plugin de busca: ≤576px o input colapsa num botão-ícone (expande no focus).
  Não esconder o `svg` da lupa nessa faixa — senão vira uma caixa vazia.
  O container fica `position:absolute` na direita: reservar espaço em
  `.navbar__items--right` para não sobrepor o título.
- Dois glows radiais no hero (`::before`/`::after`) criam "costura" vertical
  visível — usar um único `linear-gradient` cobrindo o hero.
- Validar mobile com Playwright real (`devices['Pixel 7']`,
  `devices['iPhone SE']`) — Edge headless força viewport mínimo ~477px.
- swizzle usado: `src/theme/Navbar/MobileSidebar/SecondaryMenu` injeta os
  itens da navbar no topo do drawer + `.navbar-sidebar__divider`.
