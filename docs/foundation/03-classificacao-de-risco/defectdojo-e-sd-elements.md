---
sidebar_position: 2
title: "Gestão de Riscos com DefectDojo e SD Elements"
sidebar_label: "🥋  DefectDojo e SD Elements"
description: Ferramentas de gestão de riscos — DefectDojo (open source, DevSecOps/SPM) centraliza achados com SLA; SD Elements (corporativa) estrutura threat modeling e compliance
---

# Gestão de Riscos com DefectDojo e SD Elements

:::note Origem do conteúdo
Treinamento Security Engineer : duas ferramentas para gestão de riscos e vulnerabilidades — o DefectDojo (open source, OWASP) centralizando achados dos scanners com SLA, e o SD Elements (Security Compass) estruturando threat modeling com suporte a compliance.
:::

## As duas ferramentas do bloco

| | DefectDojo | SD Elements |
|---|---|---|
| **Tipo** | Open source (OWASP) | Comercial (Security Compass) |
| **Foco** | Vulnerabilidades — DevSecOps/SPM | Threat Modeling + compliance |
| **Momento** | Depois do achado (gestão) | Antes do código (planejamento) |

## DefectDojo

Plataforma **open source mantida pela OWASP**, com foco em **DevSecOps**, **SPM (Security Program Management)** e gestão de vulnerabilidades. Versão gratuita + SaaS paga; testável em `demo.defectdojo.org`.

### O que ele centraliza

Findings de todas as fontes do pipeline:

- **SAST** — análise estática de código;
- **DAST** — análise dinâmica;
- **SCA** — análise de componentes;
- **Scanners de containers**.

### Funcionalidades

- **Classificação automática**: Crítico, Alto, Médio, Baixo;
- **Gestão de SLA** — dias em aberto por vulnerabilidade;
- Tela de **Findings** com todos os achados ativos/importados;
- Organização por **Produtos** (sistemas), **Engagements** (campanhas) e **Tool Integrations**;
- Painéis de **métricas, componentes, usuários e relatórios**.

### O que foi demonstrado

- **Dashboard** (últimos 7 dias);
- Findings de exemplo: *clear text password submission*, *Reflected XSS* com **CWE** atrelado;
- **Tempo de atraso vs. SLA** por vulnerabilidade;
- Detalhes: mitigação e similaridade com outros casos;
- **Tool Configuration** — cadastro de integrações.

### Benefícios

- Gratuito, implantação fácil via **Docker**;
- Interface intuitiva de status e achados;
- **Políticas e ações automatizadas** baseadas em SLA;
- Caminho rápido para **profissionalizar** a gestão de vulnerabilidades.

:::tip Encaixe com o bloco anterior
O DefectDojo é exatamente o "sistema central" que o bloco de [Gestão de Vulnerabilidades](../shift-left/llm-gestao-de-vulnerabilidades-e-kpis) propõe — achados de todos os scanners viram findings rastreáveis, com SLA e métricas no mesmo lugar.
:::

## SD Elements

Ferramenta **corporativa da Security Compass** focada em **Threat Modeling** — apoia o desenvolvimento seguro **desde o planejamento** do sistema.

### Funcionalidades

- Criação ou **importação de modelos de ameaças** (ex.: Microsoft Threat Modeling Tool);
- Geração automática de:
  - **Lista de riscos**;
  - **Planos de mitigação**;
  - **Controles**;
  - **Planos de teste**;
- Controle do que foi **aplicado ou não**;
- Gestão de riscos por **ativo, sistema e usuários**.

### Diferenciais

- Suporte a **compliance** — ISO 27002, entre outras normas;
- Classifica o **nível de conformidade** dos controles e recomenda ações corretivas;
- Indicada para **ambientes regulados** ou com práticas formais de segurança.

## Comparação direta

| Característica | DefectDojo | SD Elements |
|---|---|---|
| **Tipo** | Open source | Comercial (pago) |
| **Foco** | Vulnerabilidades (DevSecOps/SPM) | Threat Modeling |
| **Integração** | SAST, DAST, SCA, scanners | Importação de diagramas/modelos |
| **Dashboard/métricas** | Sim | Sim |
| **SLA de vulnerabilidades** | Sim | Não aplicável diretamente |
| **Compliance** | Limitado | Avançado |

:::important Leitura da comparação
Não são concorrentes — cobrem pontas diferentes: **Dojo gerencia o que foi encontrado**; **SD Elements organiza o que deve ser prevenido**. Ambientes maduros podem usar os dois.
:::

## Recomendações de estudo

- Acessar a demo: `demo.defectdojo.org`;
- Testar integração com as ferramentas já usadas (SAST, DAST etc.);
- Explorar o site do SD Elements e o vídeo introdutório;
- Avaliar conforme a **realidade e maturidade** do próprio ambiente.

## Conceitos-chave

| Termo | Significado |
|---|---|
| **DefectDojo** | Plataforma open source (OWASP) de gestão de vulnerabilidades |
| **SD Elements** | Ferramenta da Security Compass para threat modeling e compliance |
| **SPM** | Security Program Management — gestão do programa de segurança |
| **Findings** | Achados de vulnerabilidades na plataforma |
| **Engagement** | Campanha de análise de segurança no DefectDojo |
| **Threat Modeling** | Identificação de riscos no desenho do sistema |
| **SLA** | Prazo de correção por severidade |
| **CWE** | Common Weakness Enumeration — identificador do tipo de fraqueza |
| **ISO 27002** | Norma de controles de segurança da informação |
| **Compliance** | Conformidade com normas e regulamentos |

## Síntese

> As ferramentas respondem à pergunta prática do bloco: **onde gerenciar** os riscos classificados. O **DefectDojo** centraliza achados de todos os scanners com SLA e métricas — gratuito, via Docker. O **SD Elements** atua mais cedo: transforma threat modeling em planos de mitigação e controles rastreáveis, com compliance para ambientes regulados. Um olha o **achado**; o outro olha o **desenho**.

## O que anotar depois

- [ ] Subir o DefectDojo localmente via Docker e importar um relatório de scan
- [ ] Explorar a demo (`demo.defectdojo.org`): Findings, SLA e engagements
- [ ] Verificar quais formatos de relatório o Dojo aceita das ferramentas que uso
- [ ] Conhecer o fluxo do SD Elements: threat model → controles → plano de teste
- [ ] Mapear quais normas de compliance se aplicam ao meu contexto (ISO 27002, PCI etc.)

## Referências oficiais

- [DefectDojo](https://www.defectdojo.org) — projeto open source
- [DefectDojo — demo](https://demo.defectdojo.org)
- [OWASP DefectDojo](https://owasp.org/www-project-defectdojo/)
- [SD Elements — Security Compass](https://www.securitycompass.com/sdelements/)
- [Microsoft Threat Modeling Tool](https://learn.microsoft.com/azure/security/develop/threat-modeling-tool)
- [ISO/IEC 27002](https://www.iso.org/standard/75652.html)
