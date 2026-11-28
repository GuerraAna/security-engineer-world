---
sidebar_position: 7
title: "IaC — Infrastructure as Code e Segurança"
sidebar_label: "☁️  IaC e Segurança"
description: Infraestrutura como código — definição via arquivos versionáveis, Security Misconfiguration, scanners estáticos (KICS, Checkov) e integração em IDE e CI/CD
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# IaC — Infrastructure as Code e Segurança

:::note Origem do conteúdo
Notas de estudo — o que é Infrastructure as Code, como configurações inadequadas viram Security Misconfiguration, ferramentas de análise estática para IaC (KICS, Checkov) e onde elas se encaixam na IDE e no pipeline CI/CD.
:::

## O que é IaC

**IaC = Infrastructure as Code**: prática de **definir e gerenciar infraestrutura de TI através de código**, em vez de configurações manuais por interfaces gráficas.

- Os ambientes são **descritos em arquivos de código**, não criados por painéis;
- Os arquivos podem ser **versionados e reutilizados** — como qualquer código;
- Popularidade crescente em **ambientes de nuvem**, onde automação é essencial.

## Linguagens e formatos

IaC é escrito em **linguagens declarativas**:

| Ferramenta | Descrição |
|---|---|
| **Terraform** | Provisionamento declarativo multi-cloud |
| **Ansible** | Automação e configuração de infraestrutura |
| **CloudFormation** | Provisionamento nativo da AWS |

Os arquivos usam geralmente **YAML** (ou formatos similares, como HCL no Terraform) para definir parâmetros e especificações que as plataformas de nuvem interpretam para provisionar recursos.

## Security Misconfiguration

O uso inadequado do IaC gera **configurações incorretas** que comprometem a segurança — o problema conhecido como **Security Misconfiguration**.

Exemplos típicos:

- **Exposição de máquinas virtuais** à internet sem proteção;
- Uso de **contas administrativas** (root/admin) sem restrições;
- **Falta de segmentação de rede** e isolamento de ambientes.

:::important Não é bug — é configuração
Esses problemas geralmente **não são vulnerabilidades de software**, mas sim **configurações inadequadas** que precisam ser identificadas e corrigidas — idealmente antes do provisionamento.
:::

## Exemplos práticos: inseguro × seguro

<Tabs>
  <TabItem value="sg" label="Security Group" default>

```hcl title="❌ INSEGURO — SSH aberto para qualquer IP"
resource "aws_security_group" "web" {
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
```

```hcl title="✅ SEGURO — SSH restrito à rede interna"
resource "aws_security_group" "web" {
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["10.0.0.0/16"]
  }
}
```

  </TabItem>
  <TabItem value="s3" label="Bucket S3">

```hcl title="❌ INSEGURO — bucket sem bloqueio de acesso público"
resource "aws_s3_bucket" "dados" {
  bucket = "dados-sensiveis"
}
```

```hcl title="✅ SEGURO — acesso público bloqueado explicitamente"
resource "aws_s3_bucket_public_access_block" "dados" {
  bucket                  = aws_s3_bucket.dados.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}
```

  </TabItem>
  <TabItem value="ebs" label="Criptografia">

```hcl title="❌ INSEGURO — volume sem criptografia"
resource "aws_ebs_volume" "dados" {
  size      = 100
  encrypted = false
}
```

```hcl title="✅ SEGURO — criptografia explícita"
resource "aws_ebs_volume" "dados" {
  size      = 100
  encrypted = true
}
```

  </TabItem>
</Tabs>

### Padrões inseguros mais comuns

| Misconfiguration | Risco |
|---|---|
| `0.0.0.0/0` em portas administrativas (22, 3389) | Acesso remoto exposto à internet |
| Buckets/blobs públicos | Vazamento de dados |
| `encrypted = false` em volumes, bancos e filas | Dados em repouso sem proteção |
| `*` em actions ou resources de IAM | Privilégio excessivo (falta de least privilege) |
| Falta de subnets privadas | Sem segmentação e isolamento de ambientes |
| Secrets hardcoded | Credenciais expostas no código versionado |
| Logging desabilitado | Falta de rastreabilidade e detecção |

## Ferramentas de análise estática para IaC

A segurança do IaC é verificada por ferramentas de **análise estática** — conceitualmente o mesmo princípio do [SAST](./llm-sast-static-applications-security-testing), aplicado a arquivos de infraestrutura.

| Ferramenta | Observação |
|---|---|
| **KICS** (Checkmarx) | *Keep Infrastructure as Code Secure* — gratuito, milhares de queries para Terraform, CloudFormation, Ansible, Kubernetes, Dockerfiles |
| **Checkov** (Prisma Cloud) | Checks nomeados `CKV_*` por provedor (ex.: `CKV_AWS_20` = S3 não pode ser público) |
| **tfsec / Terrascan** | Alternativas open source focadas em Terraform |

As ferramentas analisam o código **antes de ser aplicado** e geram relatórios com recomendações. Permitem personalizar a análise:

- Filtrar por **severidade** (apenas críticas/altas);
- Verificar **conformidade** (PCI-DSS, ISO 27001 etc.);
- Buscar padrões do **OWASP Top 10**.

<Tabs>
  <TabItem value="kics" label="KICS" default>

```bash
# Via Docker (sem instalação local)
docker run -v $(pwd):/path checkmarx/kics:latest scan \
  -p /path -o /path/results

# Via binário, relatórios em JSON e HTML
kics scan -p ./terraform -o ./results --report-formats json,html

# Filtrar por severidade e categorias
kics scan -p ./terraform --exclude-severities LOW,INFO
kics scan -p ./terraform --include-categories "Encryption,Access Control"
```

  </TabItem>
  <TabItem value="checkov" label="Checkov">

```bash
# Instalação e scan de diretório
pip install checkov
checkov -d ./terraform

# Somente severidade alta, saída compacta
checkov -d . --check HIGH --compact

# Ignorar um check específico (com justificativa)
checkov -d . --skip-check CKV_AWS_20
```

  </TabItem>
</Tabs>

## Integração no ciclo de desenvolvimento

| Ponto | Momento | Custo de correção |
|---|---|---|
| **IDE** | Durante a escrita (Developer Experience) | Mais barato — corrige antes do commit |
| **CI pré-build** | No pipeline, antes de aplicar o código | Barato — bloqueia o PR com findings graves |
| **Post-deploy** | Após provisionar (CSPM) | Caro — recurso já exposto em produção |

Exemplo de job no **GitHub Actions**:

<Tabs>
  <TabItem value="gha-kics" label="KICS" default>

```yaml
name: iac-security
on: [pull_request]

jobs:
  kics:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run KICS scan
        uses: checkmarx/kics-github-action@v1.7
        with:
          path: './terraform'
          fail_on: high,critical   # quebra o pipeline em findings graves
          output_path: results/
```

  </TabItem>
  <TabItem value="gha-checkov" label="Checkov">

```yaml
      - name: Run Checkov
        uses: bridgecrewio/checkov-action@master
        with:
          directory: ./terraform
          soft_fail: false         # false = bloqueia o PR
```

  </TabItem>
</Tabs>

## Priorização de findings

| Prioridade | Critério | Exemplo |
|---|---|---|
| **P0** | Crítico + exposto à internet | Security group `0.0.0.0/0` na porta 22 |
| **P1** | Dados sensíveis sem proteção | S3 público, volume sem criptografia |
| **P2** | Conformidade regulatória | Violações PCI-DSS / ISO 27001 |
| **P3** | Higiene e boas práticas | Tags ausentes, descrições vazias |

:::tip Comece bloqueando pouco
Configure o pipeline para **bloquear apenas P0/P1** no início. Segurança que trava tudo desde o dia 1 tende a ser contornada pelo time — endureça as regras gradualmente.
:::

## Checklist de boas práticas

- Nenhuma porta administrativa aberta para `0.0.0.0/0`
- Buckets e storages com acesso público **bloqueado por padrão**
- Criptografia **explícita** (`encrypted = true`) em volumes, bancos e filas
- IAM com **least privilege** — nada de `*` sem justificativa
- Ambientes **segmentados** (subnets privadas, VPCs/accounts por ambiente)
- **Nenhum secret hardcoded** — usar [Secret Manager](./llm-secret-manager)
- Logging habilitado (CloudTrail, VPC Flow Logs, access logs)
- Scan de IaC na **IDE** e **bloqueante no CI**
- Supressões de findings **documentadas com justificativa**

## Conceitos-chave

| Termo | Significado |
|---|---|
| **IaC** | Infrastructure as Code — infraestrutura definida e gerenciada via código |
| **YAML / HCL** | Formatos declarativos usados para descrever a infraestrutura |
| **Security Misconfiguration** | Falha de segurança por configuração inadequada (não por bug de software) |
| **KICS** | Keep Infrastructure as Code Secure — scanner open source da Checkmarx |
| **Checkov** | Scanner de IaC da Prisma Cloud; checks `CKV_*` |
| **Query / Check** | Regra que mapeia um padrão inseguro no código |
| **`0.0.0.0/0`** | CIDR "qualquer IP da internet" — alerta clássico de exposição |
| **Least privilege** | Conceder apenas as permissões estritamente necessárias |
| **`fail_on` / `soft_fail`** | Controle de quando o pipeline quebra diante de findings |
| **Supressão** | Marcar finding como aceito/falso positivo — exige justificativa |
| **CSPM** | Cloud Security Posture Management — verificação **pós-deploy** |

## Síntese

> IaC transforma infraestrutura em código — e herda o mesmo fluxo de segurança do código: **scan na IDE → scan bloqueante no CI → verificação pós-deploy**. Scanners como KICS e Checkov detectam Security Misconfigurations (exposição pública, falta de criptografia, privilégios amplos) **antes do provisionamento**, materializando o Shift Left também para infraestrutura.

## O que anotar depois

- [ ] Rodar KICS ou Checkov em um projeto Terraform real (via Docker é o caminho mais rápido)
- [ ] Explorar as queries do KICS por categoria e severidade
- [ ] Adicionar um job de scan de IaC bloqueante em um pipeline de CI
- [ ] Estudar CSPM e as verificações de postura **pós-deploy** (continuação natural deste tema)
- [ ] Revisar CIS Benchmarks do provedor de nuvem usado no dia a dia

## Referências oficiais

- [KICS — Keep Infrastructure as Code Secure](https://kics.io)
- [Checkov — documentação](https://www.checkov.io/1.Welcome/Quick%20Start.html)
- [OWASP Top 10](https://owasp.org/Top10/)
- [CIS Benchmarks](https://www.cisecurity.org/cis-benchmarks)
- [Terraform — segurança em providers](https://developer.hashicorp.com/terraform/tutorials/security)
