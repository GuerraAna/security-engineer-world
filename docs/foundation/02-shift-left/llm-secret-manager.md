---
sidebar_position: 4
title: "Secret Management e o uso de Secret Managers (Vaults)"
sidebar_label: "🗝️  Secret Manager (Vaults)"
description: Gerenciamento de segredos — por que credenciais não vivem junto ao código e como funcionam os Vaults
---

# Secret Management e o uso de Secret Managers (Vaults)

:::note Origem do conteúdo
Notas de estudo — gerenciamento de segredos — por que credenciais não devem viver junto ao código, como funcionam os Secret Managers (Vaults) e os riscos de armazenar informações sensíveis de forma insegura.
:::

## O que é Secret Management

**Secret Management** (gerenciamento de segredos) é o processo que garante que informações sensíveis — **credenciais, chaves de API, strings de conexão** — sejam **armazenadas e acessadas de forma segura**, sem exposição indevida durante o desenvolvimento ou em produção.

É um conceito fundamental para a segurança de aplicações modernas, especialmente em uma abordagem **Shift Left**: os segredos são protegidos **desde o início** do ciclo, não improvisados no deploy.

## O problema do armazenamento inseguro

É comum desenvolvedores armazenarem credenciais e configurações em **arquivos locais**. Mesmo criptografados, a segurança pode ser comprometida por:

| Risco | Descrição |
|---|---|
| **Acesso não autorizado** | Arquivos de configuração expostos se um invasor comprometer o ambiente do desenvolvedor |
| **Cadeia de exposição** | Mesmo protegido em produção (ex.: "Secret" do Kubernetes), o processo de implantação passa por etapas abertas a acesso indevido |
| **Conhecimento de produção** | Se o desenvolvedor criptografa localmente, ele pode ter acesso a dados sensíveis de produção — o que **não é desejável** |

:::important
Arquivo de configuração e variável de ambiente melhoram a conveniência, mas **não resolvem** ciclo de vida, rotação, acesso e auditoria do segredo.
:::

## O papel do Secret Manager (Vault)

Um **Secret Manager** (ou **Vault**) é uma solução dedicada para **armazenar, gerenciar e controlar o acesso** a informações sensíveis. Com ele, o desenvolvedor ou a aplicação **não precisa de acesso direto** às credenciais de produção.

### Funcionalidades

| Funcionalidade | O que faz |
|---|---|
| **Armazenamento seguro** | Credenciais, chaves de API e strings de conexão guardadas de forma criptografada |
| **Controle de acesso** | Permissões específicas por aplicação ou usuário que precisa acessar os segredos |
| **Integração com aplicações** | A aplicação se comunica com o Secret Manager e obtém as credenciais de forma segura |
| **Gestão centralizada** | Todas as credenciais em um único local — facilita administração e auditoria |

:::tip Regra de ouro
O código **referencia** o segredo — não o **carrega** versionado.
:::

## Exemplos e ferramentas

O **Windows Credential Manager** é um exemplo de Secret Manager: armazena e criptografa senhas e informações sensíveis de forma transparente ao usuário.

Ferramentas especializadas para infraestrutura e desenvolvimento moderno:

- **HashiCorp Vault**
- **AWS Secrets Manager**
- **Azure Key Vault**
- **Kubernetes Secrets**

## Separação dos segredos do código

:::important Regra essencial
Segredos **não devem** estar armazenados junto com o código da aplicação.
:::

| Ambiente | Abordagem aceitável |
|---|---|
| **Desenvolvimento local** | Arquivos de configuração locais para testes |
| **Testes avançados, pré-produção, produção** | Segredos obrigatoriamente em um **Vault** |

## Riscos de não utilizar um Secret Manager

| Risco | Consequência |
|---|---|
| **Exposição de credenciais** | Invasores obtêm acesso a arquivos de configuração |
| **Escalação de privilégios** | Ataque em ambiente de desenvolvimento abre portas para ambientes mais críticos |
| **Desafios na gestão** | Sem solução centralizada, manutenção e **rotação de credenciais** ficam difíceis |

## Conceitos-chave

| Conceito | Definição |
|---|---|
| **Secret** | Informação sensível: senha, token, chave de API, certificado, string de conexão |
| **Secret Management** | Gestão do ciclo de vida dos segredos: armazenamento, entrega, autorização, rotação, expiração |
| **Secret Manager / Vault** | Serviço que protege e fornece segredos apenas a sistemas e usuários autorizados |
| **Rotação** | Substituição controlada do segredo em intervalos definidos ou após exposição |
| **Hard-coded credentials** | Credenciais escritas diretamente no código — prática insegura a evitar |

## Síntese

> Secret Managers são essenciais para proteger informações sensíveis **durante todo o ciclo** de desenvolvimento e implantação. Ferramentas como HashiCorp Vault e Azure Key Vault permitem políticas robustas de gerenciamento de segredos — garantindo que **apenas sistemas autorizados** acessem essas informações, de forma segura, auditada e centralizada.

## O que anotar depois

- [ ] Verificar se algum segredo meu está em arquivo de configuração ou variável de ambiente hoje
- [ ] Conhecer o secret manager homologado no meu contexto (ou testar HashiCorp Vault localmente)
- [ ] Revisar conexão com a página anterior: pre-commit hooks bloqueiam segredos versionados — ver [Dev Experience](./llm-developer-experience-e-praticas-preventivas)

## Referências oficiais

- [HashiCorp Vault](https://developer.hashicorp.com/vault)
- [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/)
- [Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/)
- [Kubernetes Secrets](https://kubernetes.io/docs/concepts/configuration/secret/)
- [OWASP Secrets Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)
