---
sidebar_position: 2
title: "Arquitetura, Design e Modelagem de Ameaças"
sidebar_label: "🏗️  Arquitetura, Design e Modelagem de Ameaças"
description: Como a segurança acompanha a transição da ideia para o design técnico — DFD, STRIDE e requisitos de segurança integrados
---

# Arquitetura, Design e Modelagem de Ameaças

:::note Origem do conteúdo
Treinamento Security Engineer : continuação do tema Shift Left — como a segurança acompanha a transição da ideia para o design técnico, o papel da modelagem de ameaças com DFD e STRIDE, e a integração dos requisitos de segurança antes de qualquer linha de código.
:::

## Da ideia ao design técnico

Após definir os requisitos iniciais (entendimento do problema), o foco passa a ser **como o software vai funcionar**. Essa fase envolve decisões sobre:

- **Hospedagem** (nuvem, rede interna, etc.);
- **Disponibilidade** (24h, uso restrito);
- **Tipo de aplicação** (Web, Desktop, Mobile);
- **Integrações** com sistemas externos;
- **Necessidades regulatórias e de conformidade**.

:::tip
A **arquitetura** é a junção entre **o que o sistema faz** (design funcional) e **como ele funciona** (requisitos técnicos).
:::

## Arquitetura como reflexo do contexto

**Analogia da construção de casas:** o ambiente exige adaptações estruturais — uma casa na praia ou em zona de terremoto não pode ser projetada da mesma forma.

No software é igual: o **contexto técnico, regulatório e de negócio** define como o sistema precisa ser projetado para ser **seguro e funcional**.

## Modelagem de Ameaças (Threat Modeling)

Com a arquitetura definida, inicia-se a modelagem de ameaças.

### Ferramenta essencial: DFD

**DFD = Data Flow Diagram** (Diagrama de Fluxo de Dados) — representa o fluxo dos dados pelo sistema.

**Exemplo de fluxo:**

```text
Cadastro de cliente → Serviço → Banco de dados
```

Ao desenhar o fluxo, já começam a surgir pontos de atenção:

| Ponto do fluxo | Ameaça / Controle associado |
|---|---|
| Dados trafegando e armazenados | **Criptografia em trânsito e em repouso** |
| APIs expostas para terceiros | **Exigem autenticação** |

:::important
O DFD não é o objetivo final — ele serve para **tornar riscos visíveis** e converter ameaças em requisitos, controles e testes.
:::

## Ferramentas e frameworks

| Tipo | Exemplo |
|---|---|
| **Ferramentas automatizadas** | Microsoft Threat Modeling Tool |
| **Frameworks manuais** | **STRIDE** |

### STRIDE

**STRIDE** organiza as ameaças em 6 categorias:

| Letra | Categoria | Significado |
|---|---|---|
| **S** | Spoofing | Falsificação de identidade |
| **T** | Tampering | Alteração maliciosa de dados |
| **R** | Repudiation | Repúdio (negar autoria de uma ação) |
| **I** | Information Disclosure | Divulgação indevida de informação |
| **D** | Denial of Service | Sobrecarga e indisponibilidade |
| **E** | Elevation of Privilege | Elevação de privilégio |

Esses instrumentos ajudam a identificar **onde há risco** e sugerem ameaças específicas para cada ponto do fluxo.

## Definição de mitigações

Cada ameaça mapeada gera uma ou mais **medidas de mitigação**:

| Ameaça | Mitigação |
|---|---|
| **Spoofing** (falsificação de identidade) | Autenticação forte |
| **Tampering** (alteração de dados) | Validação de entrada |
| **DoS** (negação de serviço) | Limitação de requisições (rate limiting) |

O time de segurança tem **papel crucial** nesse momento, trabalhando lado a lado com arquitetos e desenvolvedores.

## Integração dos requisitos de segurança

As mitigações identificadas são **integradas aos requisitos** do software — antes mesmo da codificação.

| Tipo de requisito | Exemplo |
|---|---|
| **Funcional** | "Dados devem estar criptografados em trânsito e em repouso" |
| **Não funcional** | "A resposta da aplicação não pode ultrapassar 3 segundos, mesmo com criptografia" |

:::important Princípio defendido
Requisitos de segurança **não devem ser separados** — devem estar incorporados aos requisitos funcionais. Separados, são esquecidos sob pressão de prazo.
:::

## Requisitos funcionais × não funcionais

| Tipo | Descreve | Exemplos |
|---|---|---|
| **Funcionais** | **O que** o sistema faz | Autenticação de usuários, criptografia dos dados, segregação de funções |
| **Não funcionais** | **Como** o sistema se comporta | Desempenho, tempo de resposta, escalabilidade, auditabilidade |

## Colaboração interdisciplinar

- Arquitetos, desenvolvedores e especialistas em segurança devem trabalhar **juntos desde o início**;
- As decisões devem estar **documentadas** e refletidas no projeto técnico e nos requisitos.

## Conclusão

> **Desenvolver com segurança é começar com segurança.** A modelagem de ameaças e a integração dos requisitos de segurança nas fases iniciais evitam retrabalho, reduzem riscos e promovem software resiliente e confiável.
>
> *"Não existe linha de código, CVE ou ataque ainda — estamos apenas pensando no sistema."* Essa é a essência do Shift Left aplicado à segurança.

## O que anotar depois

- [ ] Desenhar o DFD de um fluxo real meu e marcar as fronteiras de confiança
- [ ] Aplicar STRIDE em uma funcionalidade: uma ameaça por letra
- [ ] Verificar se meus requisitos atuais já trazem mitigações embutidas ou separadas

## Referências oficiais

- [OWASP Threat Modeling](https://owasp.org/www-community/Threat_Modeling)
- [Microsoft — STRIDE](https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool-threats)
- [Microsoft Threat Modeling Tool](https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool)
- [NIST SSDF — Secure Software Development Framework](https://csrc.nist.gov/Projects/ssdf)
