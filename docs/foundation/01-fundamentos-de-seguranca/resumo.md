---
sidebar_position: 4
title: Resumo dos Fundamentos de Segurança da Informação
sidebar_label: 📝 Resumo
description: Consolidação dos fundamentos — ativos, CID, fraquezas, vulnerabilidades, CWE, CVE e CVSS
---

# Resumo dos Fundamentos de Segurança da Informação

:::note Origem do conteúdo
Consolidação do bloco 01 — Treinamento Security Engineer . Será refinada conforme o material oficial de resumo for liberado.
:::

## Mapa mental do bloco

```text
Ativos (o que protegemos)
   │
   ▼
Tríade CID ────────────→ o que cada pilar garante
   │                     C: acesso só a autorizados
   │                     I: conteúdo correto e controlado
   │                     D: disponível quando necessário
   ▼
Fraqueza (a causa) ──→ Vulnerabilidade (a falha explorável)
   │                        │
   ▼                        ▼
  CWE                   CVE + CVSS
 (categoria)         (identidade + severidade)
```

## 1. Segurança da Informação

- Protege **ativos** — informação em qualquer meio (digital, impresso, verbal, conhecimento);
- Envolve **pessoas, processos e tecnologias** — ferramenta sozinha não protege;
- Mais ampla que **cibersegurança**, que foca no ambiente digital;
- É um **processo contínuo**: identificar → avaliar → definir → implementar → monitorar → detectar → responder → recuperar → revisar → melhorar.

## 2. Tríade CID

| Pilar | Garante | Controles típicos | Exemplo de violação |
|---|---|---|---|
| **Confidencialidade** | Acesso só a autorizados | MFA, IAM, criptografia, menor privilégio, DLP | Vazamento de dados, senha exposta |
| **Integridade** | Conteúdo correto, modificações controladas e rastreáveis | Hash, assinatura digital, versionamento, auditoria | Registro alterado, auditoria apagada |
| **Disponibilidade** | Acesso quando necessário | Redundância, backup **testado**, BCP/DRP, anti-DDoS | DoS, ransomware, sobrecarga |

**Lembretes-chave:**

- Confidencialidade ≠ sigilo absoluto — é acesso para quem precisa e pode;
- Integridade ≠ veracidade — é controle sobre as modificações;
- Disponibilidade ≠ sistema ligado — inclui desempenho, capacidade e recuperação;
- **Ransomware** viola os três pilares ao mesmo tempo;
- O nível de proteção é **proporcional ao valor do ativo** — nem tudo exige o mesmo controle.

## 3. Fraqueza × Vulnerabilidade

| Conceito | É | Posição |
|---|---|---|
| **Fraqueza** | Condição/má prática que **pode favorecer** uma falha | Causa |
| **Vulnerabilidade** | Falha **explorável** em contexto real | Instância |

**Exemplo clássico:** não validar entrada do usuário (fraqueza) → SQL Injection numa aplicação específica (vulnerabilidade, CWE-89).

## 4. CWE, CVE e CVSS

| Sigla | Responde | Exemplo |
|---|---|---|
| **CWE** | Que **tipo** de erro é? | CWE-89: neutralização inadequada em SQL |
| **CVE** | **Qual** vulnerabilidade específica? | CVE-2025-XXXXX no produto Y, versão Z |
| **CVSS** | Quão **grave** é tecnicamente? (0–10) | 9.8 = crítica |

- **CVE apaga o incêndio; CWE ensina por que ele começou;**
- CVSS mede severidade **técnica** — **não mede risco de negócio**.

## 5. Priorização com contexto

| Pergunta | Por quê |
|---|---|
| O ativo é crítico / exposto à internet? | Define exposição real |
| Há dados sensíveis? | Define impacto real |
| Existe exploit público ou exploração ativa? | Define urgência |
| Há controles compensatórios? | Pode reduzir o risco real |
| Decisão de aceitar risco foi documentada? | Aceite formal ≠ omissão |

> **Regra de ouro:** CVSS é ponto de partida; criticidade do ativo + exposição + exploração ativa definem o risco real.

## Checklist de fixação

- [ ] Consigo explicar CID com um exemplo próprio para cada pilar
- [ ] Consigo diferenciar fraqueza de vulnerabilidade em uma frase
- [ ] Consigo ler um CVE: produto, versão, CWE, CVSS
- [ ] Consigo justificar priorização além da nota CVSS

## Referências oficiais

- [CVE — cve.org](https://www.cve.org)
- [CWE — cwe.mitre.org](https://cwe.mitre.org)
- [CVSS — first.org/cvss](https://www.first.org/cvss/)
- [NVD — nvd.nist.gov](https://nvd.nist.gov)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
