---
sidebar_position: 1
title: "Quiz de Revisão — 40 Questões"
sidebar_label: "📝  Quiz — 40 Questões"
description: Simulado de 40 questões cobrindo os blocos 01–03 — Fundamentos de Segurança, Shift Left e Classificação de Risco — com gabarito comentado
---

# Quiz de Revisão — 40 Questões

:::note Como usar
40 questões de múltipla escolha cobrindo os três blocos da Foundation: **Fundamentos de Segurança (01)**, **Shift Left (02)** e **Classificação de Risco (03)**. Responda antes de abrir o gabarito colapsável — quem acerta a maioria aqui passa tranquilo em avaliações de 20 questões sobre o mesmo conteúdo.
:::

## Bloco 01 — Fundamentos de Segurança

### 1. O que significa um score CVSS alto?

- a) A vulnerabilidade está resolvida
- b) A vulnerabilidade é tecnicamente crítica
- c) A vulnerabilidade é rara
- d) A vulnerabilidade tem impacto financeiro alto

<details>
<summary>Gabarito</summary>

**Correta: b** — Score alto representa a **severidade técnica** da vulnerabilidade, independente de exploração real ou contexto.

</details>

### 2. O que diferencia uma fraqueza de uma vulnerabilidade?

- a) São sinônimos usados por órgãos diferentes
- b) A fraqueza sempre é explorada; a vulnerabilidade não
- c) A fraqueza é uma falha potencial (CWE); a vulnerabilidade é a falha concreta e explorável (CVE)
- d) A vulnerabilidade só existe em produção

<details>
<summary>Gabarito</summary>

**Correta: c** — **CWE** cataloga tipos de fraquezas; **CVE** identifica vulnerabilidades específicas e concretas.

</details>

### 3. Situação: o formulário de contato do site institucional de uma empresa permite envio de e-mails com conteúdo modificado (Email Injection). CVSS 6.4 (Médio), ainda sem exploração conhecida. Qual seria a resposta mais equilibrada?

- a) Solicitar mais informações antes de qualquer ação
- b) Priorizar como crítica e bloquear o formulário
- c) Corrigir o mais rápido possível para evitar abusos e manter a imagem da empresa
- d) Ignorar a falha, pois não houve exploração

<details>
<summary>Gabarito</summary>

**Correta: c** — Correção rápida evita danos reputacionais e abusos futuros, mesmo sem exploração confirmada.

</details>

### 4. Situação: um sistema legado ainda usa MD5 para armazenar senhas. Pouco utilizado e acessado apenas por operadores internos, mas com CVSS 7.0 (Alto). Qual medida deve ser adotada?

- a) Adiar indefinidamente por falta de criticidade operacional
- b) Ignorar, pois o sistema é usado por poucos usuários internos
- c) Corrigir a falha migrando para um algoritmo de hash mais seguro
- d) Substituir a aplicação por um sistema novo imediatamente

<details>
<summary>Gabarito</summary>

**Correta: c** — MD5 não é mais seguro. Mesmo em sistemas antigos, a migração para hash moderno é necessária — sem drama de "trocar o sistema todo".

</details>

### 5. Vazamento de dados pessoais de clientes por falta de autorização viola principalmente qual pilar da tríade CID?

- a) Integridade
- b) Disponibilidade
- c) Confidencialidade
- d) Autenticidade

<details>
<summary>Gabarito</summary>

**Correta: c** — Confidencialidade = acesso apenas por quem tem permissão legítima.

</details>

### 6. O que deve ser considerado além do score CVSS para priorizar ações?

- a) Código-fonte da aplicação
- b) Data de descoberta da falha
- c) Contexto de negócio da vulnerabilidade
- d) Linguagem de programação

<details>
<summary>Gabarito</summary>

**Correta: c** — O impacto real depende do **valor do ativo** afetado no contexto da organização.

</details>

### 7. Uma vulnerabilidade sozinha, sem ameaça capaz de explorá-la, representa:

- a) Risco alto imediato
- b) Um problema que não existe
- c) Um risco que ainda não se materializou — risco exige vulnerabilidade + ameaça + impacto
- d) Uma falha que dispensa correção

<details>
<summary>Gabarito</summary>

**Correta: c** — O risco se concretiza quando vulnerabilidade encontra ameaça e gera impacto — mas a falha continua devendo ser tratada.

</details>

### 8. A segurança da informação é responsabilidade de:

- a) Apenas do time de segurança
- b) Apenas da alta direção
- c) Apenas dos desenvolvedores
- d) Todos os envolvidos — cada papel tem sua parte na proteção dos ativos

<details>
<summary>Gabarito</summary>

**Correta: d** — Responsabilidade compartilhada: segurança não é exclusiva da área de Cyber.

</details>

## Bloco 02 — Shift Left

### 9. O que significa aplicar "Shift Left" na segurança?

- a) Transferir a segurança para um time externo
- b) Trazer validações de segurança para as fases iniciais do ciclo de desenvolvimento
- c) Executar testes de segurança só em produção
- d) Deslocar o deploy para a esquerda no cronograma

<details>
<summary>Gabarito</summary>

**Correta: b** — Quanto mais cedo a segurança entra (ideação, requisitos, design), mais barata e eficaz a correção.

</details>

### 10. Qual alternativa representa um exemplo de ameaça do tipo Tampering (STRIDE)?

- a) Um sistema envia um e-mail incorreto
- b) Um atacante altera o conteúdo de uma requisição
- c) Um atacante intercepta comunicação criptografada
- d) Um usuário se passa por outro

<details>
<summary>Gabarito</summary>

**Correta: b** — Tampering = **modificação maliciosa** de dados. (Usuário se passar por outro seria Spoofing.)

</details>

### 11. No STRIDE, um usuário se passar por outra identidade é classificado como:

- a) Tampering
- b) Spoofing
- c) Repudiation
- d) Elevation of Privilege

<details>
<summary>Gabarito</summary>

**Correta: b** — Spoofing = falsificação de identidade.

</details>

### 12. Um funcionário nega ter apagado registros e não existem logs que provem a ação. Qual ameaça do STRIDE está relacionada?

- a) Information Disclosure
- b) Denial of Service
- c) Repudiation
- d) Tampering

<details>
<summary>Gabarito</summary>

**Correta: c** — Repudiation = negar ações realizadas por falta de rastreabilidade (logs, auditoria).

</details>

### 13. Qual ferramenta gera automaticamente sugestões de ameaças com base em um diagrama?

- a) Apache JMeter
- b) GitLab CI/CD
- c) Microsoft Threat Modeling Tool
- d) OpenVAS

<details>
<summary>Gabarito</summary>

**Correta: c** — A Microsoft Threat Modeling Tool importa diagramas e sugere ameaças com base no STRIDE.

</details>

### 14. Na modelagem de ameaças, o DFD (Diagrama de Fluxo de Dados) serve para:

- a) Substituir o diagrama de classes do sistema
- b) Mapear como os dados circulam entre componentes e identificar fronteiras de confiança
- c) Documentar apenas o banco de dados
- d) Gerar casos de teste automatizados

<details>
<summary>Gabarito</summary>

**Correta: b** — O DFD mostra fluxos de dados e *trust boundaries* — onde a ameaça pode entrar.

</details>

### 15. Qual das opções abaixo representa um requisito não funcional?

- a) O sistema deve exibir dados em tempo real
- b) O tempo de resposta não pode ultrapassar 3 segundos
- c) O cliente pode editar seu perfil
- d) O sistema deve autenticar o usuário antes do acesso

<details>
<summary>Gabarito</summary>

**Correta: b** — Tempo de resposta é **desempenho** — requisito não funcional. Os demais descrevem *o que* o sistema faz.

</details>

### 16. O que caracteriza um bom requisito funcional com segurança incorporada?

- a) Um requisito separado do restante do sistema
- b) Um requisito voltado para o desempenho do sistema
- c) Um requisito que descreve como o sistema se comporta
- d) Um requisito que descreve o que o sistema faz com medidas de segurança

<details>
<summary>Gabarito</summary>

**Correta: d** — Segurança embutida no próprio requisito funcional (ex.: "o login deve registrar cada tentativa em log"), não como checklist à parte.

</details>

### 17. Situação: um desenvolvedor criou um algoritmo próprio de criptografia para proteger dados sensíveis. Qual a melhor prática?

- a) Criptografar os dados apenas quando exportados
- b) Substituir por uma biblioteca padrão e auditada
- c) Utilizar o algoritmo próprio, desde que documentado
- d) Aplicar o algoritmo próprio com duplo fator de criptografia

<details>
<summary>Gabarito</summary>

**Correta: b** — Algoritmos próprios não auditados são má prática clássica ("never roll your own crypto") — usar bibliotecas confiáveis e validadas.

</details>

### 18. Situação: durante um Code Review, a revisão levou menos de 10 segundos e foi aprovada. O que essa situação pode indicar?

- a) Excelente produtividade
- b) Processo bem automatizado
- c) Uso eficiente de linters
- d) Ausência de validação adequada

<details>
<summary>Gabarito</summary>

**Correta: d** — Revisões instantâneas raramente incluem análise crítica real do conteúdo.

</details>

### 19. Aprovar pull requests sem revisar o conteúdo pode comprometer:

- a) A performance da IDE
- b) A eficácia do versionamento
- c) A integridade e a segurança do código
- d) A frequência de deploys automatizados

<details>
<summary>Gabarito</summary>

**Correta: c** — A revisão é etapa essencial para garantir que código inseguro não chegue à produção.

</details>

### 20. Situação: uma função lê arquivos do sistema e processa os dados diretamente, sem validação. Qual o principal problema?

- a) Aumenta o tempo de execução do programa
- b) Pode permitir execução de código malicioso
- c) Viola o padrão de nomenclatura de variáveis
- d) Gera redundância nos dados processados

<details>
<summary>Gabarito</summary>

**Correta: b** — Processar entrada sem validar abre brecha para comandos injetados ou conteúdo malicioso.

</details>

### 21. Situação: o time de segurança define regras de commit sem consultar os desenvolvedores, causando interrupções nos fluxos. Qual a abordagem mais eficaz?

- a) Deixar o time de desenvolvimento definir suas próprias regras
- b) Impor as regras sem alterações
- c) Remover os bloqueios e aplicar apenas revisão posterior
- d) Trabalhar em conjunto para alinhar regras eficazes e viáveis

<details>
<summary>Gabarito</summary>

**Correta: d** — Construção colaborativa entre segurança e desenvolvimento reduz fricção e aumenta adesão.

</details>

### 22. Situação: desenvolvedores armazenam credenciais de banco de dados em arquivos `.env`, inclusive em produção. Qual a principal vantagem dessa decisão?

- a) Redução de risco de vazamento de dados sensíveis
- b) Aumento do desempenho da aplicação
- c) Permissão de acesso irrestrito aos dados
- d) Nenhuma das alternativas

<details>
<summary>Gabarito</summary>

**Correta: d** — Armazenar credenciais em `.env` em produção é má prática — não há vantagem real; o correto é um Secret Manager (Vault).

</details>

### 23. Por que segredos (senhas, tokens, chaves) não devem ficar junto ao código-fonte?

- a) Porque deixam o build mais lento
- b) Porque o versionamento os expõe no histórico, sem controle de acesso nem rotação prática
- c) Porque o compilador rejeita strings com caracteres especiais
- d) Porque secrets em código não funcionam em produção

<details>
<summary>Gabarito</summary>

**Correta: b** — Segredo commitado vaza no histórico do repositório e é difícil de revogar. Secret Managers isolam, controlam acesso e rotacionam.

</details>

### 24. O que caracteriza o SAST (Static Application Security Testing)?

- a) Testa a aplicação em execução via requisições HTTP
- b) Analisa o código-fonte sem executá-lo, antes da compilação
- c) Escaneia bibliotecas de terceiros por metadados
- d) Simula ataques com um agente no servidor

<details>
<summary>Gabarito</summary>

**Correta: b** — SAST = análise **estática** do código, sem execução — roda na IDE ou no pré-build do CI.

</details>

### 25. Qual o foco do SCA (Software Composition Analysis)?

- a) Analisar o código-fonte produzido internamente
- b) Verificar nomes e versões de bibliotecas e dependências (metadados), mapeando vulnerabilidades conhecidas
- c) Executar a aplicação em busca de falhas de runtime
- d) Assinar digitalmente os artefatos de build

<details>
<summary>Gabarito</summary>

**Correta: b** — SCA trabalha com **metadados** de dependências diretas e transitivas — não analisa o código das bibliotecas.

</details>

### 26. O que é um SBOM?

- a) Um protocolo de criptografia para builds
- b) Um scanner de vulnerabilidades em containers
- c) O inventário dos componentes que compõem o software (Software Bill of Materials)
- d) Uma métrica de severidade alternativa ao CVSS

<details>
<summary>Gabarito</summary>

**Correta: c** — SBOM = lista de materiais do software — base para saber o que existe dentro do artefato.

</details>

### 27. Um security group com `0.0.0.0/0` liberando a porta 22 em um arquivo Terraform é um exemplo de:

- a) Vulnerabilidade de software no Terraform
- b) Security Misconfiguration — configuração inadequada, não bug de software
- c) Falha na linguagem HCL
- d) Ameaça do tipo Spoofing

<details>
<summary>Gabarito</summary>

**Correta: b** — Exposição à internet por configuração inadequada = Security Misconfiguration, detectável por scanners de IaC (KICS, Checkov).

</details>

### 28. Qual a principal diferença entre WAF e RASP?

- a) WAF roda na IDE; RASP roda no CI
- b) WAF filtra requisições antes de chegarem à aplicação; RASP protege de dentro da aplicação em runtime
- c) São dois nomes para a mesma tecnologia
- d) RASP só funciona em desenvolvimento

<details>
<summary>Gabarito</summary>

**Correta: b** — WAF = primeira linha de defesa na entrada; RASP = agente embarcado que bloqueia em tempo real, defense in depth.

</details>

### 29. O DAST (Dynamic Application Security Testing) é caracterizado como teste de:

- a) Caixa branca — com acesso total ao código
- b) Caixa cinza — via agente no servidor
- c) Caixa preta — sem acesso ao código, via requisições HTTP
- d) Caixa verde — foco exclusivo em APIs

<details>
<summary>Gabarito</summary>

**Correta: c** — DAST simula um usuário externo: crawler que preenche campos e clica, lento (horas) e rodado de forma assíncrona.

</details>

### 30. Por que o DAST não deve ser executado diretamente em produção sem controles?

- a) Porque o scan é muito caro computacionalmente
- b) Porque pode afetar a disponibilidade e a integridade dos dados — o crawler faz requisições de verdade
- c) Porque produção não aceita requisições HTTP
- d) Porque o relatório sai em outro idioma

<details>
<summary>Gabarito</summary>

**Correta: b** — O DAST "usa" a aplicação como atacante: pode criar registros, disparar ações e degradar o serviço. Roda em dev/homologação, fora de horário de pico.

</details>

### 31. O IAST se diferencia do DAST principalmente porque:

- a) É um teste de caixa cinza — agente no servidor acessa memória e stack durante a interação com a aplicação
- b) Não precisa que a aplicação esteja rodando
- c) Funciona sem nenhuma interação com a aplicação
- d) É sempre gratuito e open source

<details>
<summary>Gabarito</summary>

**Correta: a** — IAST = caixa cinza: agente instrumenta a aplicação em execução; mais preciso, mas depende de framework compatível e de testes que exercitem a aplicação.

</details>

### 32. Qual a principal vantagem do pentest contínuo integrado à sprint em relação ao pentest tradicional?

- a) Elimina a necessidade do Pentester
- b) Testes direcionados de 1–3h por funcionalidade, com o profissional conhecendo código, fluxos e arquitetura — mais precisão por menos custo que 40–100h genéricas
- c) Dispensa ambientes de teste
- d) Substitui todos os scanners automatizados

<details>
<summary>Gabarito</summary>

**Correta: b** — O olhar humano direcionado ao que mudou na entrega é mais eficaz que o projeto pontual genérico.

</details>

### 33. Para que serve o ambiente de SQA (Security Quality Assurance)?

- a) Hospedar a aplicação em produção
- b) Executar testes intrusivos de segurança num espelho do QA, sem prejudicar testes funcionais, de carga e performance
- c) Substituir o ambiente de desenvolvimento
- d) Armazenar os relatórios de vulnerabilidades

<details>
<summary>Gabarito</summary>

**Correta: b** — Testes intrusivos podem afetar disponibilidade; o SQA é o "quarto próprio" do Pentester.

</details>

### 34. No post-build, o que a assinatura de commits (Commit Signing) garante?

- a) Que o código foi testado
- b) Que somente desenvolvedores autorizados realizaram as modificações no repositório
- c) Que a imagem de container é segura
- d) Que o binário não contém malware

<details>
<summary>Gabarito</summary>

**Correta: b** — Commit Signing = autoria verificada. (Imagem e binário são garantidos por Image e Code Signing.)

</details>

### 35. Um sistema recebe normalmente ~1.000 requisições por minuto. Um alerta bem configurado deve disparar quando:

- a) Qualquer requisição chegar
- b) O volume ultrapassar um limite fora do comportamento normal (ex.: 10.000 req/min)
- c) Apenas quando o servidor desligar
- d) Uma vez por dia, como rotina

<details>
<summary>Gabarito</summary>

**Correta: b** — Alertas nascem do **baseline** (comportamento normal) — anomalia acima do limiar permite reação proativa.

</details>

## Bloco 03 — Classificação de Risco

### 36. Qual a relação correta entre gestão de risco e classificação de risco?

- a) São processos idênticos
- b) A classificação é uma etapa da gestão — avalia e categoriza os riscos identificados (alto, médio, baixo)
- c) A gestão é uma etapa da classificação
- d) Classificação substitui a gestão em empresas pequenas

<details>
<summary>Gabarito</summary>

**Correta: b** — Gestão = processo amplo (identificar, avaliar, mitigar, monitorar); classificação é a etapa que ordena por criticidade.

</details>

### 37. Quais critérios compõem a classificação de um risco?

- a) Apenas o score CVSS
- b) Probabilidade de ocorrência, impacto, facilidade de exploração e criticidade do ativo
- c) Apenas a data em que foi descoberto
- d) Apenas o custo da correção

<details>
<summary>Gabarito</summary>

**Correta: b** — A combinação probabilidade × impacto × criticidade do ativo determina o risco — nunca a falha isolada.

</details>

### 38. Um SLA de 24h para correção de vulnerabilidades é mais comum para:

- a) Bugs visuais em aplicações
- b) Riscos classificados como altos em sistemas críticos
- c) Riscos aceitos
- d) Vulnerabilidades que não foram avaliadas

<details>
<summary>Gabarito</summary>

**Correta: b** — Risco alto em ativo crítico exige resposta rápida (ex.: 24h; médio ~7 dias; baixo 30–60 dias).

</details>

### 39. Situação: auditoria identifica uma aplicação interna com falha de segurança, mas com acesso restrito e sem exposição externa. Como esse risco deve ser classificado inicialmente?

- a) Risco alto, exigindo resposta imediata
- b) Risco crítico
- c) Risco nulo
- d) Risco baixo, com possibilidade de aceitação

<details>
<summary>Gabarito</summary>

**Correta: d** — Acesso limitado + baixo impacto = classificação inicial baixa — e o risco pode ser **aceito formalmente** com mitigações.

</details>

### 40. Situação: time de segurança recebe relatório de falha ao carregar bibliotecas de segurança num sistema de análise de crédito. Qual a abordagem correta?

- a) Remover o sistema do ar até revisão total
- b) Corrigir imediatamente sem avaliação
- c) Ignorar por não afetar clientes diretamente
- d) Avaliar o impacto e classificar o risco conforme uso e exposição

<details>
<summary>Gabarito</summary>

**Correta: d** — Classificar antes de agir: uso, exposição e contexto do ativo definem a prioridade e o SLA.

</details>

---

## Mapa de revisão rápida

| Bloco | Temas cobertos |
|---|---|
| **01 · Fundamentos** | CVSS (técnico × contexto), CWE × CVE, tríade CID, vulnerabilidade × ameaça × risco, responsabilidade compartilhada |
| **02 · Shift Left** | STRIDE, DFD/threat modeling, requisitos funcionais × não funcionais, crypto própria, code review, secrets, SAST/SCA/SBOM, IaC, DAST/IAST, pentest contínuo, SQA, WAF/RASP, alertas por baseline |
| **03 · Classificação de Risco** | Gestão × classificação, probabilidade × impacto × criticidade, SLAs por nível, risco aceito, contexto do ativo |

:::tip Métrica de aprovação
Acertou **32+**? Você está pronto(a). Abaixo disso, revisite as seções onde errou usando o mapa acima — cada tema aponta direto para a página do bloco correspondente.
:::

## Referências oficiais

- [CVSS (FIRST)](https://www.first.org/cvss/)
- [OWASP Top 10](https://owasp.org/Top10/)
- [OWASP Threat Modeling](https://owasp.org/www-community/Threat_Modeling)
- [Microsoft Threat Modeling Tool](https://learn.microsoft.com/azure/security/develop/threat-modeling-tool)
- [NIST SP 800-30 — Risk Assessments](https://csrc.nist.gov/publications/detail/sp/800-30/rev-1/final)
