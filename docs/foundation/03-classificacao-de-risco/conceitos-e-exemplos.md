---
sidebar_position: 1
title: "Classificação de Risco: Conceitos e Aplicações"
sidebar_label: "⚖️  Conceitos e Exemplos"
description: Classificação de risco como etapa da gestão — probabilidade × impacto × criticidade do ativo, SLAs de correção por severidade e risco aceitável
---

# Classificação de Risco: Conceitos e Aplicações

:::note Origem do conteúdo
Treinamento Security Engineer : classificação de risco como etapa da gestão de riscos — critérios de avaliação, exemplos do cotidiano, aplicação em TI com SLAs de correção, contexto do ativo e risco aceitável.
:::

## Gestão de risco × classificação de risco

A classificação é uma etapa fundamental — embora muitas vezes vista como "chata" por fugir da parte técnica.

| Gestão de risco | Classificação de risco |
|---|---|
| Processo **amplo**: identificação, avaliação, mitigação e monitoramento | **Etapa** da gestão — categoriza os riscos identificados (alto, médio, baixo) |

### Critérios da classificação

- **Probabilidade** de ocorrência;
- **Impacto** caso ocorra;
- **Facilidade de exploração** (no caso de vulnerabilidades);
- **Criticidade do ativo** envolvido.

## A gente já faz isso no dia a dia

| Situação cotidiana | Leitura de risco |
|---|---|
| Encontro com desconhecido em local público e movimentado | Gestão de risco na prática — reduz probabilidade e impacto |
| Compra de produto sem nota fiscal | Risco legal e de confiabilidade na relação |
| Barulho leve no carro, sem impacto | **Risco baixo** |
| Barulho no motor ou resfriamento | **Risco alto** |

:::tip Por que isso importa
Classificar risco não é burocracia — é o mesmo raciocínio que já usamos para decidir. Formalizar serve para **tornar a decisão consistente e defensável** na escala de uma empresa.
:::

## Aplicação em TI e cibersegurança

| Cenário | Classificação |
|---|---|
| Software desautorizado + vulnerabilidade pública + **exploit disponível** | **Alto** |
| Vulnerabilidade em sistema interno pouco crítico, baixa exploração | **Baixo** |

### Da classificação nasce o SLA

| Risco | SLA de correção |
|---|---|
| **Alto** | Mitigar em **24h** |
| **Médio** | Até **7 dias** |
| **Baixo** | Monitorar ou mitigar em **30–60 dias** |

:::important Conexão com o bloco anterior
Esses SLAs são exatamente os que alimentam os KPIs do bloco de [Gestão de Vulnerabilidades](../shift-left/llm-gestao-de-vulnerabilidades-e-kpis) — "% de tickets resolvidos no prazo" só existe porque a classificação definiu o prazo.
:::

## O contexto do ativo muda tudo

- **Internet Banking** com vulnerabilidade crítica → **risco alto**;
- Aplicação **interna**, acesso difícil, controles fortes → risco pode ser **aceito** ou tratado com menos urgência.

> A mesma vulnerabilidade produz riscos diferentes dependendo do ativo. **Probabilidade × impacto × criticidade** — nunca a falha isolada.

## Risco aceitável

Uma vulnerabilidade identificada pode ser **aceita** quando:

- Existem **mitigações adicionais** — segregação de rede, monitoramento, controles de acesso;
- A exploração é **altamente improvável**.

:::warning Aceitar ≠ ignorar
Risco aceito deve ser **decisão formal e documentada** — com justificativa, responsável e revisão periódica. O que muda é o tratamento, não a existência do risco.
:::

## Equilíbrio: segurança sem sufocar

- Correr **riscos calculados** faz parte da continuidade dos negócios;
- Segurança **extrema sufoca** o funcionamento do sistema;
- Princípio da **aceitabilidade psicológica**: o sistema precisa ser **seguro e usável** — se a proteção atrapalha, o usuário a contorna.

## Próximos tópicos

- **DefectDojo** e **SD Elements** — ferramentas de apoio à classificação e gestão;
- **Inventário de ativos** — não dá para classificar o que você não sabe que existe.

## Conceitos-chave

| Termo | Significado |
|---|---|
| **Gestão de risco** | Processo amplo: identificar, avaliar, mitigar, monitorar |
| **Classificação de risco** | Etapa que categoriza riscos por probabilidade × impacto |
| **Probabilidade** | Chance de o risco se materializar |
| **Impacto** | Dano causado caso ocorra |
| **Criticidade do ativo** | Importância do sistema/dado para o negócio |
| **Facilidade de exploração** | Quão simples é explorar a falha (exploit disponível?) |
| **SLA** | Service Level Agreement — prazo de correção por nível de risco |
| **Risco aceitável** | Risco assumido formalmente, com mitigações ou baixa probabilidade |
| **Aceitabilidade psicológica** | Princípio: segurança não pode tornar o sistema inutilizável |

## Síntese

> Classificar risco é transformar achado em **decisão**: probabilidade × impacto × criticidade do ativo geram a prioridade — e dela nascem os SLAs (24h / 7 dias / 30–60 dias). Contexto muda tudo: a mesma falha é crítica no Internet Banking e aceitável num sistema interno isolado. O objetivo é **equilíbrio** — proteger o que importa sem sufocar o que funciona.

## O que anotar depois

- [ ] Definir a matriz probabilidade × impacto que usarei para classificar achados
- [ ] Criar a tabela de SLA por nível de risco do meu contexto
- [ ] Conhecer o DefectDojo e o SD Elements (próxima aula)
- [ ] Montar o inventário de ativos que preciso proteger
- [ ] Documentar um exemplo de risco aceito com justificativa formal

## Referências oficiais

- [NIST RMF — Risk Management Framework](https://csrc.nist.gov/projects/risk-management)
- [NIST SP 800-30 — Guide for Conducting Risk Assessments](https://csrc.nist.gov/publications/detail/sp/800-30/rev-1/final)
- [ISO 27005 — Gestão de riscos de SI](https://www.iso.org/standard/80557.html)
- [OWASP Risk Rating Methodology](https://owasp.org/www-community/OWASP_Risk_Rating_Methodology)
- [CVSS (FIRST)](https://www.first.org/cvss/) — pontuação de severidade que alimenta a classificação
