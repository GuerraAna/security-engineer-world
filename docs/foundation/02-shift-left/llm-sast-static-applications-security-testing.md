---
sidebar_position: 5
title: "SAST — Static Application Security Testing"
sidebar_label: "🔍  SAST"
description: Análise estática de segurança — detecção de vulnerabilidades sem executar o código, integração no CI/CD, ferramentas e limitações
---

# SAST — Static Application Security Testing

:::note Origem do conteúdo
Notas de estudo — o que é SAST, como funciona a detecção de vulnerabilidades sem executar o código, onde se encaixa no CI/CD, ferramentas do mercado, vantagens e limitações.
:::

## Contexto: SAST dentro do AST

**SAST = Static Application Security Testing** (Análise Estática de Segurança de Aplicação).

É uma das metodologias do guarda-chuva **AST (Application Security Testing)** — conjunto de técnicas de teste de segurança de aplicações — aplicada dentro do ciclo de desenvolvimento de software.

## O que é SAST

Processo que **analisa o código-fonte de forma estática** — **sem executar nem compilar** o código — para identificar vulnerabilidades de segurança durante a fase de desenvolvimento, geralmente **antes da compilação** do projeto.

## Objetivo: detectar cedo (Shift Left)

- Encontrar falhas de segurança **cedo no ciclo** de desenvolvimento;
- Aplicar o conceito **Shift Left**: trazer validações de segurança para estágios anteriores;
- Corrigir vulnerabilidades o mais rápido possível — **economizando tempo e esforço**.

## Como funciona

| Etapa | Descrição |
|---|---|
| **Análise estática** | O código é analisado sem execução — como uma "foto" do código: a ferramenta interpreta fluxo de chamadas, variáveis e parâmetros |
| **Detecção de vulnerabilidades** | Identifica padrões que indicam possíveis falhas: SQL Injection, uso inseguro de parâmetros, manipulação insegura de dados etc. |
| **Árvore de execução** | Cria uma representação da execução do código **sem compilá-lo**, detectando pontos de risco |
| **Relatório** | Indica tipo de vulnerabilidade, criticidade (**crítico, alto, médio, baixo**) e score **CVSS** |

## Ferramentas populares (Gartner 2025)

Principais ferramentas comerciais e open source:

- **Checkmarx**
- **Snyk**
- **Veracode**
- **Fortify**
- **HCL AppScan**
- **Semgrep** (versão gratuita disponível)

## Integração no ciclo de desenvolvimento

O SAST é aplicado na fase de **pré-build** no **CI/CD** (Continuous Integration / Continuous Delivery):

| Ponto de integração | Descrição |
|---|---|
| **Pre-build** | Análise realizada **antes da compilação** do código |
| **Plugins de IDE** | Verificação **local** pelo desenvolvedor, sem necessidade de pull request |
| **Pipelines de CI** | GitHub Actions, Jenkins, Azure DevOps etc. executam SAST automaticamente e podem **bloquear pull requests** com vulnerabilidades críticas |

## Vantagens × Desvantagens

| Vantagens | Desvantagens |
|---|---|
| Detecta vulnerabilidades **no início** do ciclo | Pode gerar **falsos positivos** — exige análise manual |
| Facilita correção **imediata**, antes da integração ao projeto principal | **Não cobre** falhas que dependem da **execução** (diferente do DAST) |
| Automatização via **IDEs e pipelines CI/CD** | Algumas ferramentas exigem **compilação prévia** para análise mais detalhada |
| Relatórios detalhados que facilitam compreensão e correção | |

## Exemplos de vulnerabilidades detectáveis

| Vulnerabilidade | O que o SAST identifica |
|---|---|
| **SQL Injection** | Entrada de dados manipulada que poderia injetar comandos SQL maliciosos |
| **XSS (Cross-Site Scripting)** | Scripts inseridos de forma insegura |
| **Injeção de comandos** | Código que pode ser executado remotamente |

## Conceitos-chave

| Sigla / Termo | Significado |
|---|---|
| **AST** | Application Security Testing — guarda-chuva das técnicas de teste de segurança |
| **SAST** | Análise estática do código-fonte, sem executar/compilar |
| **DAST** | Análise dinâmica — testa a aplicação **em execução** (complementar ao SAST) |
| **CVSS** | Common Vulnerability Scoring System — score de severidade do achado (ver [CVSS](../fundamentos-de-seguranca/cvss)) |
| **Falso positivo** | Achado reportado que não representa falha real — exige triagem |
| **CI/CD** | Continuous Integration / Continuous Delivery — esteira de integração e entrega |
| **Pré-build** | Fase antes da compilação, onde o SAST normalmente roda |

## Síntese

> O SAST é essencial no desenvolvimento seguro: usado **na fase inicial** e **continuamente** ao longo do ciclo — via IDEs e pipelines CI/CD. Ferramentas comerciais e open source garantem que vulnerabilidades sejam **detectadas e corrigidas antes da produção**. Mas atenção: resultados exigem **triagem** (falsos positivos) e o SAST **não substitui** testes dinâmicos — cobertura real vem da combinação de técnicas.

## O que anotar depois

- [ ] Testar Semgrep (gratuito) em um projeto meu e avaliar os achados
- [ ] Diferenciar na prática: o que SAST pega vs o que só DAST pega
- [ ] Verificar se algum pipeline meu já roda análise estática — e se ela bloqueia PR

## Referências oficiais

- [OWASP — Static Code Analysis](https://owasp.org/www-community/controls/Static_Code_Analysis)
- [Semgrep](https://semgrep.dev)
- [NIST SSDF — Secure Software Development Framework](https://csrc.nist.gov/Projects/ssdf)
- [CVSS — first.org/cvss](https://www.first.org/cvss/)
