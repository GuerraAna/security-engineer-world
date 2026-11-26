---
sidebar_position: 3
title: "Desenvolvimento Seguro: Experiência do Desenvolvedor e Práticas Preventivas"
sidebar_label: "🛠️  Dev Experience e Práticas Preventivas"
description: Segurança no dia a dia do desenvolvedor — IDE, repositório, pre-commit hooks, linters, code review e políticas de repositório
---

# Desenvolvimento Seguro: Experiência do Desenvolvedor e Práticas Preventivas

:::note Origem do conteúdo
Treinamento Security Engineer : da matéria-prima ao código — como a segurança se aplica no dia a dia do desenvolvedor (ambiente local, repositório, pre-commit hooks, linters, code review e políticas de repositório).
:::

## Do projeto ao código

Após definir a matéria-prima do software (requisitos, arquitetura e modelagem de ameaças), inicia-se a **codificação**. O foco passa a ser construir **código seguro**, que siga boas práticas e previna vulnerabilidades **desde a origem** — envolvendo tanto a criação de ambientes quanto a adoção de padrões e proteções específicas.

## Experiência do Desenvolvedor (DX)

**Developer Experience (DX)** = o ambiente, as ferramentas e o fluxo de trabalho da rotina de quem desenvolve software. Divide-se em dois momentos principais:

| Momento | Descrição |
|---|---|
| **Ambiente local (IDE)** | O desenvolvedor escreve o código na própria máquina |
| **Repositório de código** | O código é enviado a um ambiente remoto (ex.: GitHub, GitLab) |

Cada momento representa **riscos distintos** para a segurança da informação e demanda **controles específicos**.

## Práticas de segurança em tempo de desenvolvimento

### Pre-Commit Hooks

Verificações **automáticas antes do commit** chegar ao repositório — impedem que falhas comuns de segurança se propaguem.

**Exemplo:** uma regra identifica uma variável `password` contendo string literal → caracteriza **credencial fixa no código (hard-coded credentials)**.

- Ajudam a prevenir **vazamento de dados sensíveis**;
- Podem ser configuradas **localmente** ou **no repositório** (ex.: "Push Protection" do GitHub);
- As regras devem ser definidas **em conjunto com o time de desenvolvimento** — evita interrupções indevidas no fluxo.

:::tip Analogia
É melhor bloquear o envio da planilha de salários **antes** de ela ser enviada do que ser avisado depois do vazamento.
:::

### Linters e plugins na IDE

**Linters** = análise estática do código **enquanto o desenvolvedor ainda escreve** — detectam más práticas e padrões inseguros em tempo real, sugerindo correções.

**Exemplos de detecção:** leitura de arquivos sem validação prévia; uso de comandos com dados não verificados.

- Ferramenta citada: **SonarLint**;
- Alguns veem linters como incômodo, mas os alertas são valiosos e previnem problemas desde o início.

:::tip Analogia
Aceitamos sugestões de corretores ortográficos em textos e mensagens — por que não fazer o mesmo no código?

**Frase de destaque:** *"A vulnerabilidade nasce quando você a cria."*
:::

### Code Review com foco em segurança

O Code Review pode incluir verificação de segurança por meio de uma **checklist objetiva** de itens essenciais:

- Validação de **parâmetros de entrada**;
- Validação de **arquivos lidos**;
- **Comunicação segura** (HTTPS);
- Armazenamento de dados sensíveis com **criptografia adequada**.

O processo deve ser **colaborativo e objetivo**: detectar e corrigir falhas no momento em que o código está sendo incorporado ao repositório.

:::tip Analogia
Assim como o corpo reage ao vírus da gripe, as práticas seguras devem agir **logo no início da criação da vulnerabilidade**.
:::

### Políticas de repositório

Regras **obrigatórias** para aprovação de pull requests e controle de qualidade:

- Exigir **aprovação por duas pessoas**;
- Revisores **não podem ser da mesma equipe** do autor do código.

Políticas são discutidas e implementadas **uma única vez**, junto com segurança e desenvolvimento. A manutenção se resume a revisões pontuais — não é tarefa contínua a cada ciclo.

## Conceitos-chave

| Conceito | Definição / Papel |
|---|---|
| **DX (Developer Experience)** | Ambiente, ferramentas e fluxo de trabalho do desenvolvedor (IDE local + repositório remoto) |
| **IDE** | Ambiente de desenvolvimento integrado — onde o código é escrito |
| **Pre-commit hook** | Verificação automática antes do commit chegar ao repositório |
| **Hard-coded credentials** | Credenciais fixas escritas diretamente no código — risco de vazamento |
| **Push Protection** | Proteção no repositório (ex.: GitHub) que bloqueia envio de segredos |
| **Linter** | Análise estática em tempo real na IDE (ex.: SonarLint) |
| **Code Review** | Revisão de código por pares — pode incluir checklist de segurança |
| **Pull Request (PR)** | Solicitação de incorporação de código — alvo de políticas de aprovação |

## Evitar antes de corrigir

- Integrar segurança ao **fluxo natural** do desenvolvimento evita falhas recorrentes e incidentes graves;
- O alinhamento entre **desenvolvedores e segurança da informação** é essencial;
- Segurança **não é obstáculo** à produtividade — é parte do processo criativo e técnico de construir software de qualidade.

:::tip Analogia final
Assim como evitamos comer alimentos que causariam problemas ao organismo, devemos evitar criar ou manter vulnerabilidades conhecidas no código.
:::

## O que anotar depois

- [ ] Configurar/verificar um secret scanner local (ex.: gitleaks, trufflehog) ou Push Protection no repo
- [ ] Testar SonarLint (ou equivalente) na minha IDE por uma semana
- [ ] Montar uma checklist de segurança de ~5 itens para usar nos meus code reviews

## Referências oficiais

- [GitHub — Push Protection (secret scanning)](https://docs.github.com/en/code-security/secret-scanning/push-protection-for-repositories-and-organizations)
- [gitleaks — scanner de segredos](https://github.com/gitleaks/gitleaks)
- [SonarLint](https://www.sonarsource.com/products/sonarlint/)
- [OWASP — Code Review Guide](https://owasp.org/www-project-code-review-guide/)
- [NIST SSDF — Secure Software Development Framework](https://csrc.nist.gov/Projects/ssdf)
