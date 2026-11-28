---
sidebar_position: 2
title: Vulnerabilidades e Fraquezas
sidebar_label: 🕳️  Vulnerabilidades e fraquezas
description: Diferença entre fraqueza e vulnerabilidade, o papel de CWE, CVE e CVSS e a gestão de vulnerabilidades
---

# Vulnerabilidades e Fraquezas

:::note Origem do conteúdo
Notas de estudo — diferença entre fraqueza e vulnerabilidade, o papel de CWE, CVE e CVSS, exemplo prático com SQL Injection e gestão de vulnerabilidades.
:::

## Segurança da informação e proteção dos ativos

A segurança da informação existe para proteger **ativos de valor** para a organização. O ativo mais evidente é a própria informação, mas ela está armazenada, processada ou transmitida por sistemas, aplicações, bancos de dados, redes, dispositivos, pessoas e processos.

**Proteger a informação** significa reduzir a possibilidade de que ela seja:

- Acessada por pessoas não autorizadas;
- Modificada indevidamente;
- Perdida ou corrompida;
- Indisponível quando necessária.

:::tip Ponto-chave
Qualquer iniciativa de segurança — controle de acesso, correção de vulnerabilidades, análise de código, monitoramento, criptografia, gestão de incidentes — deve estar conectada à proteção dos **pilares fundamentais** (CID).
:::

## Confidencialidade, integridade e disponibilidade

Os três pilares servem de referência para compreender o impacto de falhas, vulnerabilidades e ataques:

| Pilar | O que protege | Exemplos de comprometimento |
|---|---|---|
| **Confidencialidade** | Acesso apenas por quem tem permissão legítima | Exposição de dados pessoais, senhas, informações financeiras, relatórios internos, segredos comerciais |
| **Integridade** | Informação correta, completa e confiável | Alteração indevida de notas de alunos, saldos financeiros, registros de auditoria; dados apagados ou adulterados |
| **Disponibilidade** | Sistemas e informações acessíveis quando necessários | Ataque de negação de serviço (DoS/DDoS), falha em servidor, indisponibilidade de banco de dados, interrupção de serviços críticos |

Uma mesma vulnerabilidade pode afetar **apenas um pilar** ou comprometer **vários ao mesmo tempo**.

## Fraqueza não é a mesma coisa que vulnerabilidade

| Conceito | Definição | Posição na cadeia do problema |
|---|---|---|
| **Fraqueza** | Condição, falha de projeto, má prática ou deficiência que **pode favorecer** o surgimento de uma vulnerabilidade | Mais próxima da **causa** ou da condição insegura |
| **Vulnerabilidade** | Falha **explorável** em sistema, aplicação, componente ou configuração | Falha específica que pode ser explorada em **contexto real** |

Uma fraqueza é um ponto fraco — nem sempre existe exploração concreta ou risco imediatamente materializado. Uma vulnerabilidade permite que um agente malicioso cause impacto: acesso indevido, execução de comandos, vazamento de dados, alteração de informações ou indisponibilidade.

**Exemplo:**

- **Fraqueza:** não validar corretamente entradas de usuários;
- **Vulnerabilidade:** essa falha, em uma aplicação específica, permite execução de SQL Injection.

## O papel do CVE na identificação de vulnerabilidades

**CVE = Common Vulnerabilities and Exposures**

Base pública que identifica vulnerabilidades **conhecidas** em produtos, sistemas e softwares amplamente utilizados.

### Formato do identificador

Cada vulnerabilidade registrada recebe um **CVE ID** único:

```text
CVE-ANO-NÚMERO
```

**Exemplo:** `CVE-2025-XXXXX`

### Por que o CVE é essencial

O CVE cria uma **referência comum** entre profissionais de segurança, fornecedores, pesquisadores, ferramentas de varredura, equipes de resposta a incidentes e organizações — em vez de cada empresa descrever a mesma vulnerabilidade de forma diferente.

### Perguntas que o CVE ajuda a responder

- Qual produto é afetado?
- Qual versão está vulnerável?
- Qual é a descrição da falha?
- Existe correção disponível?
- Há referências públicas sobre a vulnerabilidade?
- Qual é a severidade associada?

Essa padronização permite **rastrear, priorizar e corrigir** falhas de forma organizada — é a base da gestão de vulnerabilidades.

## O papel do CWE na classificação de fraquezas

**CWE = Common Weakness Enumeration**

Diferente do CVE (que identifica vulnerabilidades específicas), o CWE **classifica tipos de fraquezas comuns** em software e hardware.

### O que o CWE faz

- Ajuda a entender a **causa raiz** de uma vulnerabilidade;
- Descreve **padrões de erro** que levam a problemas de segurança, como:
  - Validação inadequada de entrada;
  - Controle de acesso incorreto;
  - Tratamento inseguro de dados sensíveis;
  - Uso incorreto de criptografia;
  - Neutralização inadequada de comandos.

### Exemplo: CWE-89

O **CWE-89** refere-se à *neutralização inadequada de elementos especiais usados em comandos SQL* — a fraqueza associada a falhas que resultam em **SQL Injection**.

| CVE | CWE |
|---|---|
| Aponta para uma **vulnerabilidade específica** em um **produto específico** | Aponta para a **categoria técnica da fraqueza** que originou ou favoreceu a vulnerabilidade |

## Relação entre CWE e CVE

```text
CWE  →  descreve o TIPO de fraqueza (a causa)
CVE  →  identifica a VULNERABILIDADE específica (a instância)
```

Um CVE pode estar associado a **um ou mais CWEs**, indicando quais falhas técnicas estão por trás do problema.

**Exemplo:** um CVE relacionado a SQL Injection pode estar associado ao **CWE-89** — a fraqueza de não neutralizar corretamente elementos especiais em comandos SQL.

### Por que essa relação importa

- Corrigir um **CVE** resolve **uma** vulnerabilidade específica;
- Entender o **CWE** associado ajuda a **prevenir** que o mesmo tipo de erro reapareça em outras partes do sistema ou em novos projetos.

:::tip Leitura prática
O CVE apaga o incêndio; o CWE ensina por que o incêndio começou.
:::

## CVSS e priorização de vulnerabilidades

**CVSS = Common Vulnerability Scoring System**

Sistema de pontuação usado para medir a **severidade** de vulnerabilidades.

### Como funciona

- Atribui uma **nota** que classifica a gravidade, geralmente em faixas: **baixa, média, alta ou crítica**;
- A pontuação considera fatores como:
  - Facilidade de exploração;
  - Necessidade de privilégios;
  - Interação do usuário;
  - Impacto sobre confidencialidade, integridade e disponibilidade;
  - Entre outros.

### Papel na priorização

Em ambientes corporativos, ferramentas de varredura identificam **dezenas, centenas ou milhares** de vulnerabilidades — impossível corrigir todas ao mesmo tempo. O CVSS ajuda a decidir quais recebem atenção imediata.

**Exemplo de priorização:**

| Vulnerabilidade | Prioridade tende a ser |
|---|---|
| Crítica, explorável remotamente, sem autenticação, alto impacto em dados sensíveis | **Imediata** |
| Baixo impacto, exige acesso local e condições específicas de exploração | **Menor** |

Detalhamento completo na página [CVSS](./cvss).

## SQL Injection: exemplo de fraqueza e vulnerabilidade

SQL Injection é o exemplo clássico para diferenciar os dois conceitos.

### A fraqueza

A aplicação **não trata corretamente** os dados inseridos pelo usuário antes de enviá-los a uma consulta SQL — por exemplo, quando o sistema **concatena diretamente** entradas do usuário em comandos de banco de dados.

### A vulnerabilidade

A fraqueza permite que um atacante **insira comandos maliciosos** e manipule a consulta SQL executada pela aplicação.

### Impactos possíveis

- Acesso não autorizado a dados;
- Extração de informações sensíveis;
- Alteração ou exclusão de registros;
- Bypass de autenticação;
- Comprometimento da integridade do banco de dados;
- Indisponibilidade do sistema.

### Prevenção

- Uso de **consultas parametrizadas** (prepared statements);
- **Validação de entrada**;
- Controle adequado de **erros**;
- **Menor privilégio** no acesso ao banco de dados;
- **Revisão segura** de código.

## Mitigação de fraquezas antes que se tornem vulnerabilidades

Não é necessário esperar que uma vulnerabilidade seja descoberta ou explorada para agir. A mitigação pode ocorrer em diferentes fases:

| Fase | Ações de mitigação |
|---|---|
| **Arquitetura** | Padrões seguros de autenticação, autorização, comunicação, criptografia e segmentação |
| **Desenvolvimento** | Codificação segura, validação de entrada, tratamento de erros, proteção contra ataques conhecidos |
| **Testes** | Análises estáticas (SAST), dinâmicas (DAST), revisão manual de código, testes de segurança |
| **Operação** | Patches, hardening, monitoramento, gestão de logs, WAF (Web Application Firewall), segmentação, resposta a incidentes |

Essa abordagem reduz a probabilidade de que **fraquezas se transformem em vulnerabilidades exploráveis**.

## Gestão de vulnerabilidades na prática

Gestão de vulnerabilidades é um **processo contínuo** — não se resume a executar uma ferramenta de varredura.

### Etapas do processo

1. **Inventário** de ativos;
2. **Identificação** de vulnerabilidades;
3. **Classificação** por severidade e impacto;
4. **Análise** de exposição;
5. **Priorização** de correções;
6. **Aplicação** de patches ou mitigadores;
7. **Validação** da correção;
8. **Documentação** e acompanhamento.

### Priorização com contexto

A priorização deve considerar **não apenas o CVSS**, mas também o contexto do negócio:

| Cenário | Urgência |
|---|---|
| Vulnerabilidade **crítica** em sistema isolado de laboratório | Menor |
| Vulnerabilidade **alta** em sistema exposto à internet, processando dados sensíveis | Maior |

:::important
A nota técnica é igualmente importante, mas **exposição e criticidade do ativo** definem o risco real.
:::

:::info Aprofundando
Os conceitos de **ameaça, impacto, risco**, as **5 opções de tratamento de risco** e **SLA de correção** são detalhados no [Resumo](./resumo).
:::

## Importância para desenvolvimento seguro

Para equipes de desenvolvimento, a combinação CWE + CVE + CVSS é essencial:

- **CWE** → ensina quais **tipos de erro evitar**;
- **CVE** → mostra como as falhas aparecem em **produtos reais**;
- **CVSS** → auxilia na **severidade** e no impacto potencial.

### Práticas fortalecidas

- Desenvolvimento seguro desde a concepção;
- Revisão de código com foco em segurança;
- Uso de bibliotecas atualizadas;
- Correção rápida de dependências vulneráveis;
- Adoção de padrões seguros;
- Aprendizado com vulnerabilidades conhecidas.

O objetivo não é apenas **corrigir** problemas depois que surgem, mas **reduzir a chance de serem introduzidos** durante o desenvolvimento.

## Resumo

| Conceito | Definição |
|---|---|
| **Fraqueza** | Condição insegura que **pode levar** a uma vulnerabilidade |
| **Vulnerabilidade** | Falha **explorável** que pode gerar impacto real |
| **CWE** | Classifica **fraquezas comuns** (tipos/categorias) |
| **CVE** | Identifica **vulnerabilidades conhecidas e específicas** |
| **CVSS** | Mede a **severidade** de uma vulnerabilidade |

A relação entre esses conceitos permite entender a **origem** (CWE), a **identificação** (CVE) e a **prioridade de correção** (CVSS) das falhas de segurança.

:::tip Mensagem final
Compreender essas diferenças é fundamental para atuar em segurança da informação, desenvolvimento seguro, gestão de riscos, resposta a incidentes e governança. A maturidade de uma organização depende não apenas de corrigir vulnerabilidades conhecidas, mas de **identificar e reduzir fraquezas antes que se transformem em problemas reais**.
:::

## O que anotar depois

- [ ] Buscar um CVE recente em produto que uso e identificar o CWE associado
- [ ] Pensar em 3 fraquezas comuns em código que já escrevi (validação, erros, segredos)
- [ ] Verificar como ferramentas que conheço (Dependabot, Snyk, scanners) exibem CVE/CWE/CVSS

## Referências oficiais

- [CVE — Common Vulnerabilities and Exposures](https://www.cve.org)
- [CWE — Common Weakness Enumeration](https://cwe.mitre.org)
- [CWE-89 — SQL Injection](https://cwe.mitre.org/data/definitions/89.html)
- [NVD — National Vulnerability Database](https://nvd.nist.gov)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
