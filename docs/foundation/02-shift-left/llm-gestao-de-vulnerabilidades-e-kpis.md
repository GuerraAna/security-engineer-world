---
sidebar_position: 12
title: "Gestão de Vulnerabilidades e KPIs"
sidebar_label: "📊  Gestão de Vulnerabilidades e KPIs"
description: Vulnerability Management como processo contínuo — centralização de achados em tickets, workflow de triagem e correção, e KPIs como MTTR
---

# Gestão de Vulnerabilidades e KPIs

:::note Origem do conteúdo
Treinamento Security Engineer : como centralizar os achados de todas as ferramentas de segurança num único fluxo de tickets, estruturar o workflow de triagem→correção→validação e medir o processo com KPIs.
:::

## O processo contínuo

A gestão de vulnerabilidades **não é uma fase** — atravessa **todas as etapas** do ciclo:

| Fase | Onde as vulnerabilidades aparecem |
|---|---|
| **Pre-Build** | Modelagem de ameaças, requisitos, arquitetura |
| **Post-Build / CI/CD** | [SAST](./llm-sast-static-applications-security-testing), [SCA](./llm-sca-software-composition-analysis), [IaC](./llm-iac-infrastructure-as-code-e-seguranca) |
| **Testes e Deploy** | [DAST](./llm-dast-e-iast), [Pentests](./llm-pentest-continuo), verificações de produção |
| **Produção** | [Monitoramento](./llm-seguranca-em-producao-monitoramento-e-alertas), alertas, incidentes |

:::important O problema a resolver
Cada ferramenta gera achados num formato e num lugar. Sem centralização, a gestão vira caça a relatórios espalhados — e vulnerabilidades se perdem entre os sistemas.
:::

## Centralização dos achados

Consolidar tudo em **um único sistema de gestão**:

- **Bug tracking / ticket management**: Jira, GitHub Issues etc.;
- **Integrações automáticas**: cada vulnerabilidade vira **ticket/issue** no momento da detecção;
- **Um único ponto de coleta** — evitar múltiplos sistemas de monitoramento;
- **APIs** como caminho quando não existe integração nativa.

## O workflow

```
Ferramentas (SAST/SCA/DAST/IaC/WAF/Pentest)
        │
        ▼
[1] Identificação ──► [2] Ticket gerado ──► [3] Triagem
        (detecção)       (sistema central)    (real × falso positivo)
                                                  │
        ┌─────────────────────────────────────────┘
        ▼
[4] Correção (dev) ──► [5] Validação ──► [6] Fechamento
        (fix + submit)     (reteste)        (ticket encerrado)
```

| Etapa | Responsável | Resultado |
|---|---|---|
| **Identificação** | Ferramentas | Vulnerabilidade detectada |
| **Geração de ticket** | Automação | Issue no sistema central |
| **Triagem** | Segurança/time | Confirmado ou descartado como falso positivo |
| **Correção** | Desenvolvimento | Fix submetido |
| **Validação** | Reteste | Correção confirmada |
| **Fechamento** | Sistema | Ticket encerrado com registro |

## KPIs: medindo o processo

| KPI | O que mede | Para que serve |
|---|---|---|
| **Total de vulnerabilidades** | Volume de achados no período | Tendência de exposição |
| **Falsos positivos** | Ruído das ferramentas | Ajuste de regras e supressões |
| **MTTR** | Tempo médio de correção | Velocidade de resposta |
| **% no prazo (SLA)** | Aderência aos prazos por severidade | Disciplina do fluxo |
| **% de críticas remediadas** | Tratamento do mais grave | Gestão de risco real |

:::tip Métrica que importa
MTTR e % de críticas remediadas dizem mais sobre a saúde do programa de segurança do que o número bruto de achados — volume sobe até quando a ferramenta melhora.
:::

## Práticas recomendadas

- **Centralizar**: uma única plataforma para todos os tickets;
- **Automatizar**: integrações nativas ou APIs reportando sem intervenção manual;
- **Processo claro**: fluxo definido para triagem, correção e validação;
- **Monitorar KPIs**: dashboards e relatórios regulares;
- **Um sistema só**: múltiplos trackers geram retrabalho e perda de informação.

## Conceitos-chave

| Termo | Significado |
|---|---|
| **Vulnerability Management** | Processo contínuo: identificar → classificar → corrigir → validar |
| **KPI** | Key Performance Indicator — métrica de eficiência do processo |
| **MTTR** | Mean Time to Remediate — tempo médio de correção |
| **Triagem** | Revisão que separa problema real de falso positivo |
| **Falso positivo** | Achado que não é vulnerabilidade real |
| **Ticket / issue** | Unidade de trabalho rastreável (Jira, GitHub Issues) |
| **SLA de correção** | Prazo de remediação por severidade |
| **Dashboard** | Painel consolidado dos KPIs |

## Síntese

> Detectar sem gerenciar é meio trabalho. Todos os scanners do pipeline — SAST, SCA, IaC, DAST, WAF, pentest — devem desaguar em **um único fluxo de tickets**, com triagem, correção e revalidação. E o processo só melhora quando é **medido**: MTTR, SLA e % de críticas remediadas transformam segurança em algo gerenciável — não em uma pilha de relatórios.

## O que anotar depois

- [ ] Verificar se minhas ferramentas de scan têm integração nativa com Jira/GitHub Issues
- [ ] Definir SLAs de correção por severidade (crítico, alto, médio, baixo)
- [ ] Montar um dashboard mínimo: total de achados, MTTR, % no prazo
- [ ] Estabelecer critério de aceite para fechar tickets (reteste obrigatório?)
- [ ] Pesquisar plataformas de vulnerability management (DefectDojo, Faraday)

## Referências oficiais

- [OWASP DefectDojo](https://www.defectdojo.org) — plataforma open source de vulnerability management
- [OWASP Vulnerability Management Guide](https://owasp.org/www-project-vulnerability-management-guide/)
- [NIST — Vulnerability Response Recommendations (SP 800-40)](https://csrc.nist.gov/publications/detail/sp/800-40/rev-3/final)
- [GitHub Issues](https://docs.github.com/issues)
- [FIRST — CVSS](https://www.first.org/cvss/) — base para priorização dos achados
