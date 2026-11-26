# Security Engineer World

Documentação pessoal de estudos da **trilha de Security Engineering** : **Foundation → Trainee → Expert → Master**.

🌐 **Acesse o site:** https://guerraana.github.io/security-engineer-world/

Site construído com [Docusaurus](https://docusaurus.io). Conteúdo defensivo e educacional.

## Comandos

```bash
npm install        # instala dependências
npm start          # dev server em http://localhost:3000/security-engineer-world/
npm run build      # build de produção em ./build
npm run serve      # serve o build localmente
npm run typecheck  # checa tipos TS
```

## Estrutura

```
docs/                             # conteúdo (markdown) — cada pasta = um segmento na sidebar
  foundation/                     # etapa 1 do treinamento (até 2028)
    01-fundamentos-de-seguranca/  # ativos, CID, fraquezas, CWE/CVE/CVSS
    02-shift-left/                # segurança desde a ideação, threat modeling
src/pages/index.tsx               # homepage (cards LVL — desbloquear conforme a trilha avança)
docusaurus.config.ts              # configuração do site
sidebars.ts                       # sidebar (autogerada a partir de docs/)
```

## Convenções de conteúdo

- Cada etapa do treinamento = uma pasta em `docs/` (blocos numerados `NN-nome`)
- Callouts `:::tip`/`:::important` para pontos-chave
- Seção "O que anotar depois" ao final de cada página como checklist de estudo
- Seção "Referências oficiais" ao final de toda página com links canônicos
- `static/llms.txt` = índice estruturado pra IAs — atualizar ao criar/mover página

## Deploy

Push para `main` faz deploy automático no GitHub Pages via
`.github/workflows/deploy.yml`. É preciso configurar o repo em
**Settings → Pages → Source: GitHub Actions**.
