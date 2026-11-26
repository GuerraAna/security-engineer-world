---
sidebar_position: 3
title: "CVSS: Common Vulnerability Scoring System"
sidebar_label: 📊 CVSS
description: Sistema de pontuação de severidade de vulnerabilidades — métricas, limitações e priorização
---

# CVSS — Sistema de Pontuação de Vulnerabilidades

:::note Origem do conteúdo
Treinamento Security Engineer : o que é o CVSS, como funciona a pontuação, suas métricas, limitações e como usá-lo corretamente na priorização de correções.
:::

## O que é o CVSS

**CVSS = Common Vulnerability Scoring System** (Sistema Comum de Pontuação de Vulnerabilidades).

É um modelo que atribui uma **nota numérica de 0 a 10** a uma vulnerabilidade. Quanto maior a nota, maior tende a ser a **gravidade técnica** da falha — considerando facilidade de exploração, impacto nos sistemas e comprometimento de confidencialidade, integridade e disponibilidade.

:::tip Ponto-chave
O CVSS **não elimina a análise humana**. Ele é uma base técnica padronizada para comparação — não substitui a avaliação de contexto, impacto no negócio e urgência de correção.
:::

## Por que o CVSS é importante

Ferramentas de segurança encontram **dezenas, centenas ou milhares** de vulnerabilidades em ambientes corporativos. Sem critério objetivo, seria impossível decidir o que tratar primeiro.

O CVSS permite:

- Organizar **filas de correção**;
- Definir **prazos** de tratamento;
- Direcionar **recursos técnicos**;
- Reduzir riscos de forma **estruturada**;
- Diferenciar o que é **urgente** do que pode ser tratado depois.

## Severidade técnica × impacto de negócio

Este é o ponto **mais importante** no uso do CVSS:

| | |
|---|---|
| **O que o CVSS mede** | Severidade **técnica**: facilidade de exploração, privilégios, interação do usuário, impactos no sistema |
| **O que o CVSS NÃO mede** | Risco para o **negócio**: criticidade do ativo, sensibilidade dos dados, exposição real, controles existentes |

### Exemplo prático

| Cenário | CVSS | Risco real |
|---|---|---|
| SQL Injection (nota alta) em ambiente isolado, com dados não sensíveis | Alto | **Menor** |
| Vulnerabilidade de nota média em aplicação financeira crítica, portal de clientes ou base com dados pessoais | Médio | **Maior** |

:::important Regra de ouro
CVSS é **referência técnica**; a decisão final de priorização considera o **contexto corporativo**.
:::

## Como interpretar a pontuação (0 a 10)

| Faixa | Significado |
|---|---|
| **Baixa** | Menor impacto técnico ou maior dificuldade de exploração |
| **Média** | Falha relevante, mas depende de condições específicas ou gera impacto limitado |
| **Alta** | Vulnerabilidade séria, com maior potencial de dano ou exploração acessível |
| **Crítica** | Falha extremamente grave — exploração fácil, alto impacto, comprometimento significativo |

A escala cria uma **linguagem comum**: uma nota 9.8 já comunica problema severo antes mesmo da análise detalhada.

## Relação entre CVE, CWE e CVSS

Os três mecanismos atuam juntos:

| Sigla | Nome | Função |
|---|---|---|
| **CVE** | Common Vulnerabilities and Exposures | Identificação pública de **uma vulnerabilidade específica** (padroniza a referência entre fabricantes, ferramentas e equipes) |
| **CWE** | Common Weakness Enumeration | Categoria da **fraqueza ou erro de desenvolvimento** (ex.: validação inadequada de entrada, controle de acesso falho) |
| **CVSS** | Common Vulnerability Scoring System | **Pontuação de severidade** atribuída à vulnerabilidade |

**Fluxo prático:** uma ferramenta identifica um **CVE** → relaciona a uma categoria **CWE** → apresenta a pontuação **CVSS**.

**Exemplo:** uma falha específica na versão X de um sistema = CVE; o tipo do problema (ex.: SQL Injection por validação inadequada) = CWE; sua severidade = CVSS.

## Métricas do cálculo

O CVSS combina métricas que descrevem as características da vulnerabilidade:

| Métrica | O que avalia |
|---|---|
| **Vetor de ataque** | De onde pode ser explorada — pela rede (mais grave) ou exigindo acesso físico (menos grave) |
| **Complexidade** | Exploração simples ou dependente de condições específicas |
| **Privilégios necessários** | Se o atacante precisa de acesso prévio |
| **Interação do usuário** | Se a vítima precisa agir (clicar em link, abrir arquivo, navegar em página) |
| **Impactos CID** | Efeito sobre confidencialidade, integridade e disponibilidade |

### Impacto nos três pilares

- **Confidencialidade:** leitura indevida de dados sensíveis → alto impacto;
- **Integridade:** modificação de registros, adulteração de dados, manipulação de transações;
- **Disponibilidade:** derrubar aplicação, interromper serviço, causar indisponibilidade operacional.

Quanto maior o impacto sobre os pilares CID, maior a pontuação.

## Sistema vulnerável × sistema subsequente

Versões recentes do CVSS diferenciam:

| Conceito | Definição | Exemplo |
|---|---|---|
| **Sistema vulnerável** | Onde a falha existe originalmente | Aplicação web com vulnerabilidade de autenticação; biblioteca com falha conhecida |
| **Sistema subsequente** | Afetado **como consequência** da exploração | Banco de dados acessado via aplicação vulnerável; servidor alvo de movimentação lateral; sistemas integrados comprometidos |

A diferenciação é importante porque algumas vulnerabilidades **abrem caminho** para impactos mais amplos — não causam dano apenas no ponto inicial.

## Exploitabilidade

Exploitabilidade = **facilidade/dificuldade de explorar** a vulnerabilidade. É um dos aspectos mais importantes na priorização.

| Mais preocupante (maior exploitabilidade) | Menos preocupante (menor exploitabilidade) |
|---|---|
| Explorável remotamente | Exige acesso físico |
| Sem necessidade de autenticação | Exige privilégios administrativos |
| Sem interação do usuário | Depende de condições muito específicas |
| Prova de conceito (PoC) pública | Requer conhecimento interno |

:::warning Agravante
Exploit público, PoC ou **exploração ativa** no mundo real aumentam a urgência de correção.
:::

## Calculadoras CVSS

Permitem estimar a pontuação preenchendo as métricas (vetor de ataque, complexidade, privilégios, interação, impactos CID). A pontuação **atualiza conforme os campos** — mostrando como cada característica influencia o resultado.

**Usos práticos:**

- Pentests e análises de vulnerabilidade;
- Auditorias e avaliações de risco;
- Validação de achados técnicos;
- **Justificativa técnica** para prioridades de correção.

## CVSS em ferramentas de segurança

Scanners de vulnerabilidade, análise de código, gestão de exposição, varredura de rede e plataformas AppSec **associam achados a CVEs e exibem o CVSS automaticamente** — a classificação inicial já vem pronta.

:::warning Cuidado
Confiar só no resultado automático gera decisões incompletas. A ferramenta informa severidade técnica, mas **não conhece** a criticidade do ativo, a sensibilidade dos dados, a exposição real, os controles compensatórios ou o impacto no negócio.
:::

## Priorização de correções na prática

| Perfil da vulnerabilidade | Prioridade |
|---|---|
| Crítica/alta + internet-facing + aplicação de negócio + dados sensíveis + produção | **Elevada** |
| Média/baixa + ambiente interno + sistema pouco crítico + sem dados sensíveis | Menor urgência (decisão **documentada e acompanhada**) |

**Uma boa priorização combina:**

- CVSS;
- Criticidade do ativo;
- Exposição;
- Existência de exploração ativa;
- Facilidade de correção;
- Impacto operacional;
- Risco para o negócio.

## Limitações do CVSS

1. **Não entende o contexto do negócio** — a mesma falha tem impactos diferentes em empresas diferentes (sistema de testes × sistema financeiro);
2. **Não considera controles compensatórios** — segmentação de rede, autenticação adicional, monitoramento, WAF, EDR, regras de firewall, restrições de acesso;
3. **Não é decisão final** — é uma base técnica para análise de risco.

## CVSS + análise de risco

O CVSS estima a severidade técnica, mas a análise de risco responde perguntas adicionais:

- O sistema é **crítico**?
- Está **exposto à internet**?
- Contém **dados pessoais, financeiros ou estratégicos**?
- Existe **exploração ativa**?
- Há **controles compensatórios**?
- A correção pode causar **indisponibilidade**?
- Existe **obrigação regulatória**?

Responder essas perguntas **transforma pontuação técnica em decisão prática**.

## Boas práticas no uso do CVSS

1. **Não usar a pontuação como único critério** — combinar com contexto de negócio e criticidade dos ativos;
2. **Manter gestão de vulnerabilidades definida** — prazos de correção, responsáveis, critérios de aceitação de risco e acompanhamento contínuo;
3. **Revisar periodicamente** — falha sem exploit hoje pode se tornar grave amanhã (novos exploits, PoCs, campanhas ativas);
4. **Documentar exceções** — vulnerabilidade alta não corrigida por baixo impacto ou controles compensatórios deve ter decisão **registrada e aprovada** pelas áreas responsáveis.

## Conclusão

- O CVSS **classifica tecnicamente** vulnerabilidades e apoia priorização — padroniza comparações e facilita comunicação entre equipes;
- A pontuação **não deve ser interpretada isoladamente** — severidade técnica precisa ser analisada junto com contexto de negócio, criticidade, sensibilidade dos dados, exposição e controles;
- **Gestão madura** usa o CVSS como **ponto de partida**, mas decide com base no **risco real** — direcionando esforços para as ameaças que realmente importam à segurança e à continuidade do negócio.

## O que anotar depois

- [ ] Abrir a calculadora CVSS e simular: mesmo CVE com/sem necessidade de autenticação — quanto muda a nota?
- [ ] Comparar a nota de um CVE real no NVD com a exploração prática descrita
- [ ] Montar um mini-framework de priorização próprio: CVSS + exposição + criticidade + exploit ativo

## Referências oficiais

- [CVSS — especificação e calculadora (FIRST)](https://www.first.org/cvss/)
- [CVE — Common Vulnerabilities and Exposures](https://www.cve.org)
- [CWE — Common Weakness Enumeration](https://cwe.mitre.org)
- [NVD — National Vulnerability Database](https://nvd.nist.gov)
- [CISA KEV — Known Exploited Vulnerabilities](https://www.cisa.gov/known-exploited-vulnerabilities-catalog)
