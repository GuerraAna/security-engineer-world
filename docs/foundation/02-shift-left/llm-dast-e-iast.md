---
sidebar_position: 9
title: "DAST e IAST — Testes de Segurança em Aplicações"
sidebar_label: "🕷️  DAST e IAST"
description: Testes dinâmicos e interativos — DAST caixa preta via requisições HTTP, IAST caixa cinza via agente no servidor, ferramentas e recomendações práticas
---

# DAST e IAST — Testes de Segurança em Aplicações

:::note Origem do conteúdo
Notas de estudo — conceitos, características, ferramentas e recomendações práticas dos testes DAST (Dynamic Application Security Testing) e IAST (Interactive Application Security Testing) no ciclo de desenvolvimento.
:::

## Contexto: segurança com a aplicação rodando

- Independentemente da metodologia (**Scrum, Agile, Cascata**), o desenvolvimento ocorre de forma **dinâmica e contínua**;
- No modelo **CI/CD**, testes automatizados garantem funcionalidade e segurança;
- Testes dinâmicos entram quando a aplicação **já está funcional** — mesmo sem estar completamente estável.

:::important O que muda em relação ao SAST/SCA
[SAST](./llm-sast-static-applications-security-testing) e [SCA](./llm-sca-software-composition-analysis) analisam o código **parado**. DAST e IAST testam a aplicação **em execução** — enxergam a superfície de ataque real: endpoints, fluxos e comportamento.
:::

## DAST — Dynamic Application Security Testing

Teste **dinâmico** executado após a aplicação estar funcional, por meio de **requisições HTTP** para aplicações web e APIs.

Funciona como um **crawler**: navega pela aplicação **preenchendo campos e clicando em botões** para identificar vulnerabilidades.

### Características

| Característica | Detalhe |
|---|---|
| **Caixa preta** | Sem acesso ao código-fonte — simula um usuário externo |
| **Dependente de HTTP** | Identifica vulnerabilidades pelas **respostas dos endpoints** |
| **Lento** | Pode durar **horas a um dia inteiro** |
| **Assíncrono** | Configurado para rodar **sem bloquear** o pipeline |

### Ferramentas comuns

| Tipo | Ferramentas |
|---|---|
| **Gratuita** | **OWASP ZAP (Zap Proxy)** — popular e mantida pela OWASP |
| **Comerciais** | **Acunetix / Invicti** — soluções consolidadas |
| **Módulos** | Checkmarx, Snyk — DAST dentro de plataformas maiores |

### Cuidados e recomendações

- **Não executar em produção** sem controles — pode afetar **disponibilidade e integridade dos dados**;
- Rodar **fora do horário de produção**, em ambientes de desenvolvimento/homologação;
- Mais eficaz **combinado** com SAST e SCA.

:::warning Por que o cuidado com produção?
O crawler preenche formulários e dispara requisições de verdade — pode criar registros, disparar e-mails e degradar performance. O DAST "usa" a aplicação como um atacante usaria.
:::

## IAST — Interactive Application Security Testing

Teste que **monitora a aplicação enquanto ela é usada**, por meio de um **agente instalado no servidor** da aplicação — visibilidade intermediária, o chamado teste de **caixa cinza**.

### Características

| Característica | Detalhe |
|---|---|
| **Caixa cinza** | Acesso limitado ao código, mas acessa **memória do servidor e stack dos requests** |
| **Requer interação** | Depende de uso real — teste manual ou automação de QA |
| **Mais preciso que o DAST** | Em alguns cenários — mas depende de framework e compatibilidade do agente |

### Ferramentas e limitações

- **Contrast Security** — ferramenta comercial conhecida;
- Vantagem: **maior visibilidade e precisão** que o DAST;
- Limitação: depende de **frameworks compatíveis** e do agente instalado;
- Indicado para equipes com **testes automatizados bem estruturados** e boa cobertura — cada execução da suite de QA já gera resultados de segurança.

## Comparação DAST × IAST

| Aspecto | DAST | IAST |
|---|---|---|
| **Acesso ao código** | Nenhum (caixa preta) | Parcial ao servidor (caixa cinza) |
| **Método** | Requisições HTTP dinâmicas | Interceptação de requisições via agente |
| **Aplicabilidade** | Abrangente — APIs e apps web | Requer interação com a aplicação |
| **Desempenho** | Lento (horas a um dia) | Mais rápido, amarrado à execução dos testes |
| **Ferramentas** | OWASP ZAP, Acunetix, Snyk | Contrast Security e outros pagos |

## Recomendações gerais

- DAST e IAST **se complementam** — usar em conjunto amplia a cobertura;
- **DAST**: ambientes de dev/homologação, fora do horário de produção;
- **IAST**: equipes com **testes automatizados maduros** — o agente aproveita a execução da suite de QA;
- Nenhum deles substitui as análises estáticas — o ideal é a **combinação SAST + SCA + DAST/IAST**.

## Conceitos-chave

| Termo | Significado |
|---|---|
| **DAST** | Dynamic Application Security Testing — caixa preta, via HTTP, aplicação rodando |
| **IAST** | Interactive Application Security Testing — caixa cinza, via agente no servidor |
| **Caixa preta** | Teste sem acesso ao código — visão de atacante externo |
| **Caixa cinza** | Visibilidade parcial — memória, stack, requests via agente |
| **Crawler** | Componente que navega a aplicação preenchendo campos e clicando |
| **Agente** | Componente no servidor que instrumenta a aplicação em execução |
| **OWASP ZAP** | Ferramenta gratuita de DAST mantida pela OWASP |
| **Scan assíncrono** | Execução em paralelo ao pipeline, sem bloquear o deploy |

## Síntese

> DAST e IAST testam a aplicação **em execução** — o que os scanners estáticos não conseguem ver. O **DAST** ataca de fora via HTTP (lento, assíncrono, longe de produção); o **IAST** observa de dentro via agente (preciso, mas depende de framework e de testes que exercitem a aplicação). Combinados com SAST e SCA, fecham a cobertura: **código, dependências e comportamento**.

## O que anotar depois

- [ ] Rodar o OWASP ZAP contra uma aplicação de teste (ex.: OWASP Juice Shop)
- [ ] Entender como configurar scan assíncrono de DAST num pipeline CI/CD
- [ ] Pesquisar a diferença entre IAST passivo e RASP (Runtime Application Self-Protection)
- [ ] Verificar quais frameworks o agente do Contrast/Seeker suporta
- [ ] Montar a matriz SAST + SCA + DAST/IAST de cobertura do meu projeto

## Referências oficiais

- [OWASP ZAP (Zed Attack Proxy)](https://www.zaproxy.org)
- [OWASP — DAST](https://owasp.org/www-community/DevSecOps#dast-dynamic-application-security-testing)
- [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/) — app vulnerável para praticar
- [Contrast Security — IAST](https://www.contrastsecurity.com/interactive-application-security-testing-iast)
- [Acunetix / Invicti](https://www.invicti.com)
