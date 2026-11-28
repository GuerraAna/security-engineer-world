<div align="center">

# 🛡️ Security Engineer World

**Documentação pessoal de estudos da trilha de Security Engineering**
Foundation → Trainee → Expert → Master

[![Site](https://img.shields.io/badge/site-guerraana.github.io-7C3AED?style=for-the-badge)](https://guerraana.github.io/security-engineer-world/)
[![Deploy](https://img.shields.io/github/actions/workflow/status/GuerraAna/security-engineer-world/deploy.yml?branch=main&style=for-the-badge&label=deploy)](https://github.com/GuerraAna/security-engineer-world/actions/workflows/deploy.yml)
[![Docusaurus](https://img.shields.io/badge/Docusaurus-3.10-3ECC5F?style=for-the-badge&logo=docusaurus&logoColor=white)](https://docusaurus.io)
[![Licença: CC BY-SA 4.0](https://img.shields.io/badge/Licença-CC%20BY--SA%204.0-lightgrey?style=for-the-badge)](LICENSE)

🔗 **Acesse a documentação:** https://guerraana.github.io/security-engineer-world/

</div>

---

## 📖 Sobre

Site estático construído com [Docusaurus](https://docusaurus.io), com tema de **jornada/game**: cada etapa do treinamento é um nível (LVL) que desbloqueia conforme a trilha avança até 2028.

Conteúdo **defensivo e educacional** — técnicas de ataque aparecem apenas no contexto de detecção e defesa.

## 🗺️ Trilha de estudos

| Etapa | Status | Conteúdo |
|---|---|---|
| **LVL 01 · Foundation** | 🚧 Em progresso | Fundamentos de segurança, Shift Left (pipeline seguro), classificação de risco |
| **LVL 02 · Trainee** | 🔒 Bloqueado | Desbloqueia ao concluir a Foundation |
| **LVL 03 · Expert** | 🔒 Bloqueado | Desbloqueia ao concluir a Trainee |
| **LVL 04 · Master** | 🔒 Bloqueado | Desbloqueia ao concluir a Expert |

### 📚 Foundation — blocos publicados

| Bloco | Temas |
|---|---|
| **01 · Fundamentos de Segurança** | Ativos, tríade CID, fraquezas × vulnerabilidades, CWE, CVE e CVSS |
| **02 · Shift Left** | Threat modeling, secret management, SAST, SCA, IaC, DAST/IAST, pentest contínuo, segurança em produção, gestão de vulnerabilidades e KPIs |
| **03 · Classificação de Risco** | Probabilidade × impacto × criticidade, SLAs, risco aceitável, DefectDojo e SD Elements |

## 🚀 Rodando localmente

```bash
npm install        # instala dependências
npm start          # dev server em http://localhost:3000/security-engineer-world/
npm run build      # build de produção em ./build
npm run serve      # serve o build localmente
npm run typecheck  # checa tipos TS
```

## 📁 Estrutura

```
docs/                                # conteúdo (markdown) — cada pasta = um segmento na sidebar
  foundation/                        # etapa 1 do treinamento (até 2028)
    01-fundamentos-de-seguranca/     # ativos, CID, fraquezas, CWE/CVE/CVSS
    02-shift-left/                   # segurança desde a ideação até produção
    03-classificacao-de-risco/       # classificação, SLAs e ferramentas de gestão
src/pages/index.tsx                  # homepage (cards LVL)
src/css/custom.css                   # tema "game" — paleta red team → blue team
static/llms.txt                      # índice estruturado para IAs
docusaurus.config.ts                 # configuração do site
sidebars.ts                          # sidebar (autogerada a partir de docs/)
```

## ✍️ Convenções de conteúdo

- Cada etapa do treinamento = uma pasta em `docs/` (blocos numerados `NN-nome`)
- `sidebar_label` com emoji + thin space; `title` limpo no front matter
- Callouts `:::tip` / `:::important` / `:::warning` para pontos-chave
- `<Tabs>` / `<TabItem>` para código comparativo (inseguro × seguro)
- **"O que anotar depois"** — checklist de estudo ao final de cada página
- **"Referências oficiais"** — links canônicos ao final de toda página
- `static/llms.txt` atualizado a cada página criada/movida

## 🚢 Deploy

Push para `main` dispara deploy automático no GitHub Pages via
`.github/workflows/deploy.yml`. Requer **Settings → Pages → Source: GitHub Actions**.

## 📄 Licença

Este projeto está licenciado sob **[CC BY-SA 4.0](LICENSE)** (Creative Commons Attribution-ShareAlike 4.0 International) — você pode compartilhar e adaptar o conteúdo, desde que dê o crédito apropriado e distribua sob a mesma licença.
