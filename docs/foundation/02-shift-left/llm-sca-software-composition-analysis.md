---
sidebar_position: 6
title: "SCA — Software Composition Analysis"
sidebar_label: "🧩  SCA"
description: Análise de composição de software — scan de bibliotecas e dependências, vulnerabilidades conhecidas, árvore de dependências e SBOM
---

# SCA — Software Composition Analysis

:::note Origem do conteúdo
Treinamento Security Engineer : como o SCA escaneia bibliotecas e componentes de terceiros (especialmente open source), identifica vulnerabilidades conhecidas em dependências e por que é considerado a primeira prioridade na análise de segurança de aplicações.
:::

## O que é SCA

**SCA = Software Composition Analysis** (Análise de Composição de Software).

Processo de **escaneamento e análise de bibliotecas e componentes** utilizados em um projeto — especialmente os **open source**. Conhecido como **"scan de bibliotecas"**.

:::important Diferença-chave do SAST
O SCA é focado em **metadados** — **não é uma análise de código-fonte**.
:::

## Como funciona

| Etapa | Descrição |
|---|---|
| **Análise de metadados** | Não escaneia o código da biblioteca — verifica **nomes e versões** dos componentes do projeto |
| **Banco de dados de vulnerabilidades** | Consulta bases **públicas e privadas** para identificar vulnerabilidades **conhecidas** associadas aos componentes |
| **Relatório de vulnerabilidades** | Retorna quais componentes têm vulnerabilidades e quais **versões mais seguras** estão disponíveis |
| **Árvore de dependências** | Gera catálogo completo: dependências **diretas** e **transitivas** (dependências das dependências) |

## Ferramentas comuns

| Tipo | Ferramentas |
|---|---|
| **Comerciais** | Veracode, Checkmarx, Snyk, WhiteSource (hoje Mend) |
| **Open source** | **Dependency-Track** (projeto da OWASP) |
| **Do package manager** | **npm audit**, entre outras |

## Integração no ciclo

- Pode rodar na **IDE**, no **CI/CD** ou na fase de **pré-build**;
- **Não exige código compilado** — trabalha com arquivos de **manifesto e dependências**.

## Relatórios e mitigações

### O que o relatório apresenta

- **Nome e versão** da biblioteca utilizada;
- **Versão mais recente** disponível;
- **Versão que corrige** a vulnerabilidade identificada.

### Ações possíveis diante do achado

| Ação | Quando faz sentido |
|---|---|
| **Atualizar** para a versão corrigida | Correção disponível e compatível |
| **Trocar** o componente | Biblioteca abandonada ou sem correção |
| **Aceitar o risco** e manter | Decisão formal, documentada, com justificativa |

:::tip Tratamento de risco
As três ações acima são o mesmo modelo de [tratamento de risco](../fundamentos-de-seguranca/resumo) visto no bloco 01 — aplicado a dependências.
:::

## Riscos associados à atualização

Atualizar para nova versão pode:

- **Quebrar a compatibilidade** com o projeto;
- **Introduzir novas vulnerabilidades** que não existiam na versão anterior.

> Correção exige **teste de compatibilidade e análise de risco** — atualizar cegamente também gera problema.

## Por que o SCA é crítico

> **70% a 90%** do código de um software moderno é composto por **bibliotecas de terceiros**.

| SAST | SCA |
|---|---|
| Analisa o código **produzido internamente** | Analisa as **bibliotecas externas** (a maior parte do software) |

:::tip Priorização
Se for necessário escolher por onde começar, inicie pelo **SCA** — sua abrangência sobre o software é maior.
:::

## Boas práticas

1. Manter bibliotecas **sempre atualizadas**;
2. **Automatizar** o escaneamento, integrando o SCA ao fluxo CI/CD;
3. Verificar vulnerabilidades e **atualizar pacotes o mais rápido possível**;
4. **Revisar regularmente** o catálogo de dependências — remover bibliotecas desnecessárias ou ultrapassadas.

## Conceitos-chave

| Termo | Significado |
|---|---|
| **SCA** | Software Composition Analysis — scan de bibliotecas por metadados |
| **Dependência direta** | Biblioteca declarada pelo projeto |
| **Dependência transitiva** | Dependência de uma dependência (indireta) |
| **Árvore de dependências** | Catálogo completo de componentes do projeto |
| **Manifesto** | Arquivo que declara dependências (ex.: `package.json`, `pom.xml`, `requirements.txt`) |
| **SBOM** | Inventário dos componentes do software (Software Bill of Materials) |
| **OWASP** | Open Worldwide Application Security Project — mantém o Dependency-Track |

## Síntese

> O SCA é **essencial** no desenvolvimento seguro: a maior parte do software vem de terceiros, e cada dependência é uma porta para vulnerabilidades conhecidas. Automatize o scan no CI/CD, mantenha o inventário revisado e trate achados com contexto — atualizar, trocar ou aceitar formalmente o risco. **SAST olha o seu código; SCA olha o código dos outros que virou o seu.**

## O que anotar depois

- [ ] Rodar `npm audit` (ou equivalente) em um projeto meu e verificar a árvore de dependências
- [ ] Conhecer o Dependency-Track da OWASP
- [ ] Entender o que é SBOM e quando ele é exigido (ex.: contratos, compliance)
- [ ] Verificar dependências abandonadas em projetos que mantenho

## Referências oficiais

- [OWASP Dependency-Track](https://dependencytrack.org)
- [OWASP Top 10 — Vulnerable and Outdated Components](https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/)
- [npm audit](https://docs.npmjs.com/cli/v11/commands/npm-audit)
- [Snyk — What is SCA](https://snyk.io/learn/application-security/software-composition-analysis/)
