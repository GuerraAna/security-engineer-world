---
sidebar_position: 1
title: "Desenvolvimento Seguro e Shift Left"
sidebar_label: 🔐  Shift Left
description: Segurança desde o início do ciclo de desenvolvimento — requisitos com DNA de segurança e modelagem de ameaças
---

# Desenvolvimento Seguro e Shift Left: Segurança desde o Início

:::note Origem do conteúdo
Treinamento Security Engineer : por que antecipar segurança para o início do ciclo de desenvolvimento, como a modelagem de ameaças se encaixa nos requisitos e os benefícios de nascer seguro em vez de corrigir depois.
:::

## O que é Shift Left

**Shift Left** = antecipar as práticas de segurança para as **fases iniciais** do ciclo de desenvolvimento de software — "mover para a esquerda" na linha do tempo do projeto.

:::tip Reflexão importante
O ideal seria nem precisar de "shift" — a segurança já deveria estar **naturalmente à esquerda**, ou seja, presente desde o início do desenvolvimento. O termo existe justamente porque, historicamente, ela foi empurrada para o fim.
:::

## O problema do pentest tradicional

O modelo histórico concentrava a segurança no **pentest** (teste de penetração) realizado **quando o sistema já estava pronto ou em produção**.

| Problema | Consequência |
|---|---|
| Vulnerabilidade encontrada **já em produção** | Empresa exposta a riscos enquanto corrige |
| Correções tardias | Demoradas, custosas ou simplesmente **ignoradas** |
| Pressão de cronograma | Frustração, atrasos e tentação de fazer *bypass* da segurança |

:::important Solução
Inserir práticas de segurança **desde os requisitos** — esse é o verdadeiro significado de Shift Left. Não é mover o teste final alguns dias antes; é fazer requisitos, arquitetura e código **nascerem com segurança**.
:::

## Segurança desde a ideação do software

Antes de qualquer linha de código, quando o software é apenas uma ideia, **já existem decisões de segurança a tomar**.

### Exemplo: sistema de cadastro de clientes

Nas conversas iniciais com o negócio surgem requisitos como:

- Nome, CPF/CNPJ, endereço;
- Permissões por função (admin, assistente);
- Login/autenticação.

Esses requisitos devem ser convertidos em **requisitos funcionais** — a matéria-prima do software. E é aí que a segurança entra.

## Modelagem de Ameaças: a primeira prática de segurança

**Modelagem de Ameaças (Threat Modeling)** = técnica para identificar possíveis vulnerabilidades com base nas funcionalidades esperadas do sistema.

- Deve acontecer **logo após a definição inicial dos requisitos**;
- Conta com **participação ativa da equipe de segurança** nessa fase:
  - Validação de dados sensíveis e necessidade de **consentimento**;
  - Aplicação da **LGPD** e outras normas (criptografia, anonimização);
  - Inclusão de **requisitos técnicos de proteção** no próprio documento de requisitos.

### Exemplo de aplicação

| Funcionalidade | Requisitos de segurança embutidos |
|---|---|
| **Cadastro de clientes** | Consentimento do titular dos dados; armazenamento com criptografia |
| **Tela de login** | Criptografia dos dados transmitidos; CAPTCHA; logs de autenticação (sucesso e falha) |

## Requisitos funcionais "com DNA de segurança"

- Um requisito funcional bem escrito **já inclui** as obrigações de segurança;
- Quando os requisitos de segurança ficam **separados** do funcional, aumenta a chance de serem **ignorados sob pressão de prazo**;
- A abordagem ideal: requisitos já nascem **"com DNA de segurança"** — segurança não é anexo, é parte da especificação.

**Comparativo:**

| Abordagem | Resultado |
|---|---|
| "O sistema deve cadastrar clientes" (só funcional) | Segurança vira preocupação tardia — ou esquecida |
| "O sistema deve cadastrar clientes **com consentimento, dados criptografados e registro de acesso**" | Segurança verificável desde o critério de aceite |

## Frameworks de Modelagem de Ameaças

Frameworks ajudam a **estruturar** a análise, evitando depender só de intuição:

| Framework | Descrição |
|---|---|
| **STRIDE** | 6 categorias de ameaça: **S**poofing (falsificação de identidade), **T**ampering (alteração), **R**epudiation (repúdio), **I**nformation Disclosure (divulgação de informação), **D**enial of Service (negação de serviço), **E**levation of Privilege (elevação de privilégio) |
| **PASTA** | Process for Attack Simulation and Threat Analysis — metodologia de modelagem centrada em risco |
| **CVSS** | Usado mais para **scoring** (pontuação de severidade) do que para modelagem em si — ver [CVSS](../fundamentos-de-seguranca/cvss) |

:::tip Quando modelar
A análise pode começar com a lista de requisitos — **antes da arquitetura** — mas fica **mais eficiente** após a definição dos componentes do sistema.
:::

## Benefícios do Shift Left

- **Requisitos mais completos** e alinhados com compliance;
- Software **nasce mais seguro**, com menor risco de falhas graves;
- **Menos retrabalho**;
- Redução de **frustrações e atrasos**;
- **Menor possibilidade de bypass** de segurança no fim do projeto.

## Limite importante: o negócio não modela sozinho

- O time de negócio, mesmo treinado, dificilmente terá **conhecimento técnico** para definir requisitos de segurança sozinho;
- Por isso é **essencial** a participação de profissionais de segurança na fase de **levantamento de requisitos**;
- O negócio traz o "o quê"; segurança ajuda a escrever o "como, com proteção".

## Conceitos-chave

| Conceito | Definição / Importância |
|---|---|
| **Shift Left** | Antecipação das práticas de segurança para o início do ciclo de desenvolvimento |
| **Pentest tradicional** | Teste feito no fim do ciclo; deixa a aplicação exposta e gera retrabalho |
| **Requisitos funcionais** | Matéria-prima do software; devem conter segurança desde o início |
| **Modelagem de ameaças** | Identificação proativa de riscos com base em requisitos e funcionalidades esperadas |
| **STRIDE / PASTA** | Frameworks que orientam a análise de ameaças estruturadamente |

## Síntese

> Shift Left é antecipar segurança para o início do ciclo de desenvolvimento: requisitos nascem **"com DNA de segurança"** — consentimento, criptografia, logs — e a modelagem de ameaças acontece logo após a definição dos requisitos, com participação da equipe de segurança. O negócio traz o "o quê"; segurança ajuda a escrever o "como, com proteção".

## O que anotar depois

- [ ] Pegar um requisito funcional real e reescrevê-lo "com DNA de segurança"
- [ ] Memorizar as 6 letras do STRIDE com um exemplo de cada
- [ ] Verificar em que momento do fluxo a modelagem de ameaças acontece no meu contexto

## Referências oficiais

- [OWASP Threat Modeling](https://owasp.org/www-community/Threat_Modeling)
- [Microsoft — STRIDE](https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool-threats)
- [OWASP Threat Modeling Project](https://owasp.org/www-project-threat-modeling/)
- [NIST SSDF — Secure Software Development Framework](https://csrc.nist.gov/Projects/ssdf)
- [LGPD — Lei Geral de Proteção de Dados](https://www.gov.br/anpd/pt-br)
