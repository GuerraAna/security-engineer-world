---
sidebar_position: 8
title: "Post-Build no CI/CD"
sidebar_label: "📦  Post-Build no CI/CD"
description: Verificações de segurança após a compilação — Container Scan, Supply Chain Security, Scan de Malware e Assinatura de Código
---

# Post-Build no CI/CD

:::note Origem do conteúdo
Notas de estudo — a fase de Post-Build no pipeline — scan de imagens de containers, segurança da cadeia de suprimentos, scan de malware e assinatura de código para garantir integridade e autenticidade do artefato entregue.
:::

## O que é a fase de Post-Build

Etapa do CI/CD que ocorre **após a compilação do código**, durante a integração e entrega contínua. Nela são realizados **testes de segurança e verificações de integridade** para garantir que o artefato produzido está seguro e pronto para entrega ou implantação.

:::important Código × artefato
Se o pré-build (SAST, SCA, scan de IaC) protege o **código-fonte**, o post-build protege o **artefato final** — imagens, binários e pacotes que serão efetivamente distribuídos.
:::

## Container Scan

Após a compilação, é comum empacotar a aplicação em **imagens de containers**. O Container Scan identifica vulnerabilidades na **imagem base** e nas camadas utilizadas.

Ferramentas como **Snyk** e **Checkov** analisam a imagem e informam:

- **Componentes vulneráveis** presentes na imagem;
- **Portas abertas por padrão** que representam risco.

| Correção | Descrição |
|---|---|
| **Customização da imagem** | Remover componentes desnecessários e ajustar configurações |
| **Aplicação de patches** | Atualizar pacotes vulneráveis dentro da imagem |
| **Imagem alternativa** | Migrar para versões mais seguras ou minimalistas (ex.: alpine, distroless) |

Esse processo faz parte do **Supply Chain Security**.

## Supply Chain Security

Segurança da **cadeia de suprimentos de software**: engloba todo o ecossistema de desenvolvimento e execução — não apenas bibliotecas de terceiros.

| Componente da cadeia | Risco |
|---|---|
| Bibliotecas e componentes de terceiros | Vulnerabilidades conhecidas (cobertas pelo [SCA](./llm-sca-software-composition-analysis)) |
| **IDEs** | Plugins maliciosos, extensões comprometidas |
| **Computadores dos desenvolvedores** | Credenciais e código expostos se a máquina for comprometida |
| **Servidores de pipeline CI/CD** | Injeção de código malicioso no artefato durante o build |

> Qualquer vulnerabilidade nesse processo pode **comprometer o produto final** — mesmo com o código escrito corretamente.

Técnicas como **SCA** e **Container Scan** são cruciais para proteger a cadeia.

## Scan de Malware

Recomendado principalmente para software **entregue diretamente a clientes ou terceiros**:

- Verifica se o **código compilado** foi comprometido durante desenvolvimento ou entrega;
- **VirusTotal** permite upload do arquivo final para análise por **dezenas de engines de antivírus simultaneamente**.

**Validação de integridade por hash:**

- Um **hash** (ex.: MD5) funciona como impressão digital do arquivo;
- Assegura que o artefato **não foi modificado** entre o build e o consumo pelo cliente.

## Assinatura de Código (Code Signing)

| Tipo | O que é assinado | Garante |
|---|---|---|
| **Code Signing** | Código compilado | Integridade e autenticidade do binário |
| **Image Signing** | Imagens de containers | Que a imagem não foi adulterada |
| **Commit Signing** | Commits no repositório | Que só devs autorizados modificam o código |

Funcionamento:

- Usa **certificados digitais** emitidos por uma **Autoridade Certificadora (CA)**;
- Garante que o software ou imagem é **autêntico** e **não sofreu modificações** indevidas.

:::tip Camadas complementares
As três assinaturas protegem pontos diferentes: **commit** (origem), **imagem** (artefato intermediário) e **código** (binário final). Idealmente, as três coexistem na esteira.
:::

## Quando aplicar

| Cenário | Recomendação |
|---|---|
| **Aplicação local** (nuvem privada, sem distribuição externa) | Assinaturas e scans não são estritamente obrigatórios — mas realizá-los **melhora a segurança interna** |
| **Distribuição para clientes ou terceiros** | **Altamente recomendado** aplicar todas as verificações — integridade, autenticidade e segurança do software distribuído |

## Conceitos-chave

| Termo | Significado |
|---|---|
| **Post-Build** | Fase do CI/CD após a compilação — valida o artefato gerado |
| **Container Scan** | Análise de vulnerabilidades em imagens de containers |
| **Supply Chain Security** | Segurança de toda a cadeia de suprimentos de software |
| **VirusTotal** | Serviço que analisa arquivos com múltiplas engines de AV |
| **Hash (MD5/SHA)** | Impressão digital do arquivo — valida integridade |
| **Code Signing** | Assinatura digital do binário via certificado |
| **Image Signing** | Assinatura de imagens de containers |
| **Commit Signing** | Assinatura de commits (ex.: GPG) — autoria verificada |
| **CA** | Certificate Authority — emite os certificados digitais |
| **Distroless / Alpine** | Imagens base minimalistas — menos superfície de ataque |

## Síntese

> O Post-Build garante que o **artefato que sai da esteira** é o mesmo que será executado pelo cliente: sem vulnerabilidades na imagem, sem malware injetado e com **autenticidade comprovada por assinatura**. Para software distribuído externamente, essas verificações deixam de ser opcionais — são a garantia de integridade do produto.

## O que anotar depois

- [ ] Rodar um scan de imagem com Trivy/Snyk em um container meu
- [ ] Estudar Sigstore/Cosign para assinatura de imagens e artefatos
- [ ] Entender o framework SLSA para Supply Chain Security
- [ ] Testar VirusTotal com um arquivo e comparar o hash antes/depois
- [ ] Configurar commit signing (GPG/SSH) no meu git

## Referências oficiais

- [VirusTotal](https://www.virustotal.com)
- [Snyk — Container Security](https://snyk.io/product/container-vulnerability-management/)
- [Sigstore / Cosign — assinatura de artefatos](https://www.sigstore.dev)
- [SLSA — Supply-chain Levels for Software Artifacts](https://slsa.dev)
- [OWASP — Software Component Verification Standard](https://owasp.org/www-project-software-component-verification-standard/)
