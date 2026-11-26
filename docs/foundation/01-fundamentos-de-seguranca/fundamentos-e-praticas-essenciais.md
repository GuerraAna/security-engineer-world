---
sidebar_position: 1
title: Fundamentos e Práticas Essenciais de Segurança
sidebar_label: 🔐  Fundamentos e práticas
description: Ativos, tríade CID, ciclo de vida da informação e responsabilidade compartilhada
---

# Fundamentos e Práticas Essenciais de Segurança

:::note Origem do conteúdo
Aula 01 — Treinamento Security Engineer : conceitos fundamentais da Segurança da Informação.
:::

## Proteção de ativos como objetivo

A **Segurança da Informação (SI)** reúne princípios, processos, controles e tecnologias destinados a proteger os ativos de uma organização. Embora a informação seja seu principal objeto de proteção, também devem ser considerados todos os recursos necessários para armazená-la, processá-la, transmiti-la ou utilizá-la.

### Principais ativos a proteger

- Dados pessoais de clientes, colaboradores e fornecedores;
- Informações financeiras e comerciais;
- Propriedade intelectual;
- Código-fonte de aplicações;
- Bancos de dados;
- Sistemas e aplicações;
- Servidores, computadores e dispositivos móveis;
- Infraestrutura de rede;
- Contas de usuários e credenciais;
- Processos organizacionais;
- Imagem e reputação da organização.

### Informação além do digital

A proteção não se limita a dados armazenados em sistemas. As informações existem em diversos formatos:

- Documentos impressos;
- Mensagens eletrônicas;
- Gravações;
- Conversas;
- Planilhas;
- Arquivos digitais;
- Conhecimento mantido pelos profissionais.

:::tip Ponto-chave
A Segurança da Informação envolve **pessoas, processos e tecnologias**. Uma organização pode possuir ferramentas avançadas e ainda sofrer um incidente se os processos forem inadequados ou os profissionais não estiverem orientados.
:::

## Informação e dados como ativos organizacionais

**Dados** são registros individuais — nomes, números, datas, endereços, valores. Quando organizados e contextualizados, passam a gerar **informações** relevantes para uma pessoa ou organização.

**Exemplo — dados processados em uma operação de e-commerce:**

- Nome do comprador;
- Endereço de entrega;
- E-mail e telefone;
- Produto adquirido;
- Valor da compra;
- Forma de pagamento;
- Data e horário da transação;
- Histórico de pedidos;
- Endereço IP e informações do dispositivo.

Esses dados têm valor para o consumidor e para a empresa. Se forem expostos, alterados ou indisponibilizados, podem provocar **fraudes, perdas financeiras, interrupções operacionais, danos à reputação e consequências jurídicas**.

### Ciclo de vida da informação

A proteção deve acompanhar todas as etapas:

1. **Criação ou coleta**
2. **Armazenamento**
3. **Utilização**
4. **Compartilhamento**
5. **Transmissão**
6. **Arquivamento**
7. **Descarte**

Cada etapa apresenta riscos específicos:

| Etapa | Risco típico |
|---|---|
| Transmissão | Dados interceptados |
| Armazenamento | Acesso por pessoas não autorizadas |
| Descarte | Dados permanecem recuperáveis por procedimento incorreto |

## Segurança da Informação × Cibersegurança

São conceitos relacionados, mas **não equivalentes**:

| Conceito | Escopo |
|---|---|
| **Segurança da Informação** | Mais amplo — protege a informação em **qualquer meio**: digital, impresso, comunicação verbal, conhecimento organizacional |
| **Cibersegurança** | Focada no **ambiente digital**: protege ativos tecnológicos contra ataques realizados por meios digitais |

### Ativos protegidos pela cibersegurança

- Redes de computadores;
- Aplicações e APIs;
- Bancos de dados;
- Serviços em nuvem;
- Dispositivos conectados;
- Identidades digitais;
- Infraestruturas tecnológicas.

### Controles técnicos da cibersegurança

- Firewalls;
- Antivírus;
- Criptografia;
- Sistemas de detecção de intrusão (IDS);
- Monitoramento de eventos;
- Autenticação multifator (MFA);
- Ferramentas de análise de vulnerabilidades.

:::tip Ponto-chave
Controles tecnológicos precisam estar integrados a políticas, processos e responsabilidades. Uma ferramenta isolada **não garante** proteção adequada.
:::

## Princípios fundamentais: a Tríade CID

A proteção da informação é estruturada em três princípios:

1. **Confidencialidade**
2. **Integridade**
3. **Disponibilidade**

Conhecidos como **Tríade CIA** (*Confidentiality, Integrity, Availability*) ou, em português, **CID**.

:::important Equilíbrio dos pilares
Os três princípios devem ser avaliados **em conjunto**. Uma informação pode ser confidencial e incorreta; íntegra e indisponível. A segurança adequada depende do **equilíbrio** entre eles, conforme as necessidades do negócio.
:::

## Confidencialidade

Assegura que a informação seja acessada **somente por pessoas, sistemas ou processos autorizados**.

### Exemplos de violação de confidencialidade

- Vazamento de dados pessoais;
- Exposição de senhas;
- Acesso indevido a prontuários ou registros financeiros;
- Interceptação de comunicações;
- Compartilhamento incorreto de documentos;
- Envio de informações ao destinatário errado;
- Publicação acidental de um banco de dados na internet.

:::note
Confidencialidade **não significa** sigilo absoluto: a informação deve estar disponível para quem necessita e possui autorização.
:::

### Princípio do menor privilégio

Cada usuário recebe **somente as permissões estritamente necessárias** para executar suas atividades.

**Exemplo:** um profissional de atendimento pode consultar dados cadastrais de um cliente, mas não precisa excluir registros nem visualizar informações financeiras completas. Isso reduz o impacto de erros, abusos internos e comprometimento de contas.

### Necessidade de conhecimento (need to know)

O acesso à informação só deve ser concedido **quando necessário para a execução de determinada atividade**. Mesmo profissionais com cargos semelhantes podem justificar níveis de acesso diferentes.

### Controles para preservar a confidencialidade

- Autenticação de usuários;
- Autenticação multifator (MFA);
- Gestão de identidades e acessos (IAM);
- Criptografia de dados;
- Classificação da informação;
- Segmentação de redes;
- Controle de permissões;
- Políticas de acesso;
- Mascaramento de dados;
- Treinamento e conscientização;
- Monitoramento de atividades;
- Prevenção contra vazamento de dados (DLP).

:::info Criptografia
Transforma uma informação legível em conteúdo incompreensível sem a chave apropriada. Aplica-se a dados armazenados (em repouso) e transmitidos (em trânsito).
:::

## Integridade

Assegura que a informação permaneça **correta, completa, consistente** e protegida contra **alterações ou exclusões não autorizadas**.

:::warning Integridade ≠ veracidade
Uma informação registrada incorretamente na origem pode não ter sofrido alteração posterior. A integridade trata da **preservação do conteúdo** e do **controle das modificações**.
:::

### Exemplos de violação de integridade

- Invasor altera registros de banco de dados;
- Colaborador modifica informações sem autorização;
- Erro de sistema corrompe arquivo;
- Malware altera documentos;
- Valor de transação financeira manipulado;
- Arquivo parcialmente perdido na transmissão;
- Registros de auditoria apagados;
- Dados alterados sem identificação do responsável.

A integridade **não impede todas as alterações** — dados precisam ser atualizados no uso normal. O objetivo é garantir modificações **autorizadas, controladas e rastreáveis**.

### Controles para preservar a integridade

- Hashes criptográficos;
- Assinaturas digitais;
- Controle de versão;
- Trilhas de auditoria;
- Logs de alterações;
- Validação de entradas;
- Controle de acesso;
- Revisão de código;
- Gestão de mudanças;
- Backups;
- Controle de transações;
- Verificação de arquivos;
- Segregação de funções.

:::info Hash e assinatura digital
**Hash:** função que gera um valor associado ao conteúdo. Qualquer alteração — mesmo mínima — produz um valor diferente, permitindo detectar modificações.

**Assinatura digital:** comprova a origem da informação e detecta alterações realizadas após a assinatura.
:::

## Disponibilidade

Assegura que informações, sistemas e serviços estejam **acessíveis às pessoas autorizadas sempre que necessários**.

:::note
Disponibilidade é mais que manter o sistema ligado: exige **desempenho adequado, capacidade suficiente e condições de recuperação** em caso de falha.
:::

### Causas de indisponibilidade

- Falhas de servidores;
- Problemas de rede;
- Interrupções de energia;
- Erros de configuração;
- Ataques de negação de serviço (DoS/DDoS);
- Ransomware;
- Falhas em atualizações;
- Exclusão acidental de dados;
- Desastres naturais;
- Sobrecarga de acessos;
- Falhas de fornecedores;
- Ausência de capacidade de recuperação.

**Exemplo:** em campanhas promocionais ou eventos de grande repercussão, a infraestrutura pode receber volume de acessos muito acima do normal. Sem dimensionamento adequado, o sistema fica lento ou indisponível.

### Controles para preservar a disponibilidade

- Redundância de servidores;
- Balanceamento de carga (load balancing);
- Monitoramento contínuo;
- Backups periódicos;
- **Testes de restauração**;
- Fontes alternativas de energia;
- Links redundantes de comunicação;
- Planos de continuidade de negócios (BCP);
- Planos de recuperação de desastres (DRP);
- Proteção contra ataques de negação de serviço;
- Atualização e manutenção preventiva;
- Gestão de capacidade;
- Acordos de nível de serviço (SLA).

:::tip Ponto-chave
Backup isolado **não garante** disponibilidade. É preciso verificar se os dados podem ser restaurados corretamente e dentro do tempo exigido pelo negócio.
:::

## Relação entre confidencialidade, integridade e disponibilidade

Os três pilares estão diretamente relacionados — uma falha em um pode afetar os demais:

| Ação do invasor | Pilar comprometido |
|---|---|
| Obtém acesso indevido ao sistema | Confidencialidade |
| Altera registros | Integridade |
| Exclui dados ou interrompe o serviço | Disponibilidade |

### Exemplo: ransomware

Um único ataque pode violar os três pilares simultaneamente:

1. **Acessa ou copia informações** → confidencialidade;
2. **Modifica ou criptografa arquivos** → integridade;
3. **Impede o acesso aos sistemas** → disponibilidade.

Proteger apenas um pilar deixa a organização exposta a outros tipos de impacto.

## Segurança alinhada às necessidades do negócio

**Nem toda informação exige o mesmo nível de proteção.** Os controles devem ser proporcionais ao valor do ativo, à sensibilidade dos dados e aos impactos de um incidente.

### Comparativo prático

| Ativo | Perfil de proteção |
|---|---|
| **Página institucional pública** | Baixa exigência de confidencialidade (feita para todos), mas **integridade importante** — alterações divulgam informação falsa e prejudicam a imagem |
| **Sistema bancário** | Níveis elevados nos três pilares: **C** para dados financeiros/pessoais, **I** para impedir alteração de saldos e transações, **D** para acesso aos serviços quando necessário |

### Fatores para definir controles

- Importância do ativo;
- Tipos de ameaça;
- Vulnerabilidades existentes;
- Probabilidade de ocorrência;
- Impacto operacional;
- Requisitos legais e contratuais;
- Custos dos controles;
- Tolerância ao risco da organização.

## Responsabilidade compartilhada

A proteção da informação **não é exclusiva** da equipe de segurança nem da TI:

| Área | Responsabilidade |
|---|---|
| **Tecnologia (TI)** | Mantém sistemas, redes e serviços que sustentam as operações |
| **Segurança** | Identifica riscos, estabelece controles, monitora ameaças e orienta a organização |
| **Negócio** | Conhece o valor das informações e os impactos de sua perda ou exposição |
| **Usuários** | Adotam comportamentos seguros no dia a dia |

### Responsabilidades dos usuários

- Proteger suas credenciais;
- Utilizar senhas seguras;
- Não compartilhar contas;
- Verificar destinatários antes de enviar informações;
- Respeitar as políticas de acesso;
- Informar comportamentos suspeitos;
- Evitar instalar programas não autorizados;
- Manter dispositivos protegidos;
- Participar de treinamentos de segurança.

A segurança eficiente depende da integração entre **tecnologia, processos e comportamento humano**.

## Segurança como processo contínuo

Segurança da Informação **não é atividade pontual**. Sistemas, ameaças, tecnologias e processos mudam constantemente.

### Um controle se torna inadequado após

- Alterações na infraestrutura;
- Implantação de novas aplicações;
- Descoberta de vulnerabilidades;
- Mudança de fornecedores;
- Crescimento da organização;
- Novos requisitos legais;
- Aumento do volume de dados;
- Novas técnicas de ataque.

### Ciclo contínuo de melhoria

```text
Identificar → Avaliar → Definir → Implementar → Monitorar →
  ativos      riscos   controles   medidas      eventos

Detectar → Responder → Recuperar → Revisar → Aplicar
incidentes  ocorrências operações  controles  melhorias
```

Esse ciclo permite adaptar a proteção à evolução dos riscos e das necessidades do negócio.

## Conexão com a segurança de aplicações

CID deve ser considerado durante **todo o ciclo de vida da aplicação**:

| Falha na aplicação | Pilar comprometido |
|---|---|
| Expõe dados por falha de autorização | Confidencialidade |
| Permite manipular parâmetros de transação | Integridade |
| Operação consome recursos excessivos | Disponibilidade |

### Práticas de segurança de aplicações

- Levantamento de requisitos de segurança;
- Modelagem de ameaças (threat modeling);
- Validação de entradas;
- Gestão segura de sessões;
- Controle de autenticação e autorização;
- Proteção de dados sensíveis;
- Revisão de código;
- Análise de dependências;
- Testes de segurança;
- Correção de vulnerabilidades;
- Monitoramento após a implantação.

Incorporar essas práticas **desde o início** reduz custos de correção e evita descobrir vulnerabilidades apenas em produção.

## Relação com CWE, CVE e CVSS

Os fundamentos da SI ajudam a compreender três mecanismos complementares:

| Mecanismo | Nome completo | Função |
|---|---|---|
| **CWE** | Common Weakness Enumeration | Organiza **categorias de fraquezas** em software (ex.: validação inadequada de entrada, controle de acesso incorreto, exposição de dados sensíveis) |
| **CVE** | Common Vulnerabilities and Exposures | Fornece **identificadores padronizados** para vulnerabilidades específicas em produtos e tecnologias |
| **CVSS** | Common Vulnerability Scoring System | Método para avaliar a **severidade técnica** de uma vulnerabilidade por pontuação |

### Funções complementares

- **CWE** ajuda a compreender **o tipo** da falha;
- **CVE** identifica **uma vulnerabilidade específica**;
- **CVSS** auxilia na avaliação de **sua gravidade**.

O uso conjunto melhora a comunicação entre desenvolvedores, equipes de segurança, fabricantes, gestores e responsáveis pela correção. Detalhes nas páginas [Vulnerabilidades e Fraquezas](./vulnerabilidades-e-fraquezas) e [CVSS](./cvss).

## Síntese

- A Segurança da Informação protege **dados e demais ativos** necessários ao funcionamento das organizações, preservando **confidencialidade, integridade e disponibilidade (CID/CIA)**;
- **Confidencialidade** limita o acesso a pessoas e sistemas autorizados (menor privilégio, need to know);
- **Integridade** protege contra alterações indevidas e assegura controle sobre as modificações (hash, assinaturas, auditoria);
- **Disponibilidade** garante uso no momento necessário (redundância, backup testado, planos de continuidade);
- A aplicação deve ser **contínua, proporcional aos riscos e integrada aos objetivos do negócio**.

## O que anotar depois

- [ ] Praticar com a calculadora CVSS para entender como pequenas mudanças nos critérios afetam a pontuação
- [ ] Refletir sempre sobre como a vulnerabilidade **impacta o negócio**, e não apenas sua severidade técnica
- [ ] Mapear ativos de um sistema real meu: quais pilares CID são críticos em cada um?

## Referências oficiais

- [CVE — Common Vulnerabilities and Exposures](https://www.cve.org)
- [CWE — Common Weakness Enumeration](https://cwe.mitre.org)
- [CVSS — calculadora oficial (FIRST)](https://www.first.org/cvss/calculator)
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
- [ISO/IEC 27001 — Information Security Management](https://www.iso.org/standard/27001)
