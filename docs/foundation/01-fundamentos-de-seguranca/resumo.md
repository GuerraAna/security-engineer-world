---
sidebar_position: 4
title: Resumo dos Fundamentos de Segurança da Informação
sidebar_label: 📝  Resumo
description: Revisão — vulnerabilidade × ameaça × impacto × risco, CVE/CWE/CVSS, tratamento e aceitação de risco, SLA e papéis
---

# Resumo dos Fundamentos de Segurança da Informação

:::note Origem do conteúdo
Resumo e revisão — fundamentos de SI, relação vulnerabilidade × ameaça × impacto × risco, CVE/CWE/CVSS, tratamento e aceitação de risco, SLA e a divisão de responsabilidades entre segurança e negócio.
:::

## O objetivo da Segurança da Informação

A SI protege a informação contra **acessos indevidos, alterações não autorizadas, perdas, indisponibilidade e uso inadequado**. Seu objetivo não é só implementar ferramentas — é garantir que a informação continue **útil, confiável e acessível** para apoiar as atividades da organização.

A informação existe em diversos formatos: documentos, bancos de dados, sistemas, e-mails, relatórios, código-fonte, registros de clientes, dados financeiros, dados pessoais e propriedade intelectual. Ela sustenta processos, decisões, operações e responsabilidades legais.

:::tip Conceito central
SI é uma **disciplina de proteção ao negócio** — não existe isolada nem é só responsabilidade técnica. Seu papel é apoiar a continuidade, reduzir riscos e permitir que a empresa opere com confiança.
:::

## Os três pilares (Tríade CID)

| Pilar | Significado | Exemplo de falha |
|---|---|---|
| **Confidencialidade** | Acesso apenas por pessoas, sistemas ou processos autorizados | Vazamento de dados, base exposta, credenciais roubadas |
| **Integridade** | Informação correta, completa e confiável | Saldo alterado por atacante, nota modificada, relatório financeiro adulterado |
| **Disponibilidade** | Informação e sistemas acessíveis quando necessários | DoS/DDoS, falha de infraestrutura, ransomware, indisponibilidade de sistema crítico |

Os pilares são **complementares**: não adianta estar disponível se foi adulterada; íntegra se está exposta; confidencial e íntegra se ninguém consegue acessá-la.

## Segurança não depende apenas de tecnologia

SI é construída com **técnicas, tecnologias, processos, políticas, pessoas e decisões de negócio**.

- **Ferramentas importantes:** antivírus, firewalls, scanners de vulnerabilidade, SIEM, WAF, EDR, controles de acesso;
- **Mas também dependem de:** processos definidos, responsabilidades claras, treinamento de usuários, gestão de riscos, revisão de acessos, resposta a incidentes e governança.

> **Exemplo:** uma ótima ferramenta de detecção sem processo para priorizar, corrigir e acompanhar produz apenas **relatórios**. Segurança efetiva transforma evidências técnicas em ações práticas.

## Vulnerabilidade, ameaça, impacto e risco

| Conceito | Definição | Exemplos |
|---|---|---|
| **Vulnerabilidade** | Fraqueza que **pode ser explorada** (sistema, app, config, processo, dispositivo, política, comportamento humano) | Senhas fracas, sistemas desatualizados, permissões excessivas, serviços expostos, ausência de validação de entrada, misconfiguration em nuvem |
| **Ameaça** | O que **pode explorar** a vulnerabilidade | Atacante externo, insider mal-intencionado, malware, erro operacional, falha técnica, evento natural |
| **Impacto** | **Consequência** da exploração | Perda financeira, vazamento, paralisação, sanções regulatórias, dano reputacional |
| **Risco** | Combinação de vulnerabilidade + ameaça + **probabilidade** + impacto | A mesma falha é crítica em sistema financeiro exposto e menos urgente em ambiente interno isolado |

:::important
Nem toda vulnerabilidade representa o mesmo risco — **contexto define o nível de risco**.
:::

## Classificação de vulnerabilidades

Sem classificação, todas as falhas parecem igualmente importantes. A classificação (**baixa, média, alta, crítica**) considera:

- Severidade técnica;
- Facilidade de exploração;
- Impacto potencial;
- Exposição do ativo;
- Criticidade do sistema;
- Existência de exploração conhecida.

A classificação técnica não é o único critério: vulnerabilidade **alta** em sistema irrelevante pode ter menos prioridade que uma **média** em sistema essencial.

## CVE — identificação pública de vulnerabilidades

**CVE = Common Vulnerabilities and Exposures**

- Forma **padronizada** de identificar vulnerabilidades publicamente conhecidas;
- Permite que ferramentas, fornecedores, equipes e pesquisadores falem da **mesma vulnerabilidade** com referência comum;
- Facilita rastrear informações, verificar produtos afetados, buscar correções e orientações de mitigação.

:::warning Importante
O CVE **identifica, mas não resolve**. A organização ainda precisa avaliar: afeta meu ambiente? qual o impacto? há correção? qual a prioridade?
:::

## CWE — compreensão das fraquezas

**CWE = Common Weakness Enumeration**

- Organiza **tipos de fraquezas** que podem levar a vulnerabilidades;
- **Exemplo:** uma SQL Injection específica em um sistema → CVE; a categoria "SQL Injection" (tipo de erro de desenvolvimento) → CWE;
- Útil para **aprendizado, desenvolvimento seguro e prevenção** — ajuda a atuar na **causa raiz**, não só em correções isoladas.

## CVSS — pontuação técnica de severidade

**CVSS = Common Vulnerability Scoring System**

- Transforma características técnicas da vulnerabilidade em uma **pontuação de severidade**;
- Facilita organizar **filas de correção** e dá critério inicial de prioridade;
- **Não deve ser usado isoladamente** — não conhece o contexto da empresa;
- Nota alta ≠ maior risco real; nota intermediária em sistema crítico/exposto pode ser mais relevante.

### Comparativo dos três mecanismos

| | Identifica | Analogia |
|---|---|---|
| **CWE** | O **tipo** de fraqueza | A doença genérica (ex.: "problema cardíaco") |
| **CVE** | A **vulnerabilidade específica** | O diagnóstico do paciente X |
| **CVSS** | A **severidade técnica** | A gravidade do quadro |

## Priorização baseada em risco e contexto

A equipe de segurança **identifica, analisa, comunica e recomenda** — mas a **decisão final** (corrigir, aceitar, adiar, tratar de outra forma) pertence ao **negócio**.

Correção tem custo: atualização, parada de ambiente, refatoração, troca de tecnologia, migração, revisão de processos. Pode gerar risco operacional.

### Checklist de perguntas para priorizar

- O ativo afetado é crítico para o negócio?
- A vulnerabilidade está exposta à internet?
- Existe exploração ativa conhecida?
- Há dados sensíveis ou pessoais envolvidos?
- A falha pode causar indisponibilidade?
- Existe correção ou mitigação disponível?
- Qual é o esforço para corrigir?
- Qual é o risco de **não** corrigir?
- Existem controles compensatórios?
- Há exigência contratual, regulatória ou de compliance?

## A analogia do médico

| Medicina | Segurança da Informação |
|---|---|
| Médico examina, identifica o problema, explica riscos e recomenda tratamento | Equipe de segurança identifica a vulnerabilidade, avalia gravidade, explica impactos e recomenda ação |
| O **paciente decide** aceitar ou recusar o tratamento | O **negócio decide**: corrigir agora, depois, monitorar, aceitar o risco ou mitigar |

A equipe de segurança deve **traduzir o risco**, documentar evidências, apresentar cenários e apoiar a decisão — não apenas apontar problemas.

## Aceitação de risco

**Aceitar ≠ ignorar.** Aceitação é decisão **consciente, formal e documentada** de conviver com o risco por período ou condição específica.

Deve conter:

- **Responsáveis adequados** — gestores do sistema, donos do processo, liderança executiva, áreas de risco, compliance ou SI;
- **Justificativa**;
- **Prazo de revisão**;
- **Condições de monitoramento**.

**Exemplo:** não corrigir imediatamente porque a correção exige indisponibilidade de sistema crítico em alta demanda → aceita temporariamente + controles compensatórios + correção programada na janela de manutenção.

Aceitação informal ("depois vemos isso") elimina rastreabilidade e prejudica a governança.

## Tratamento de risco: 5 opções

| Opção | Significado | Exemplo |
|---|---|---|
| **Corrigir** | Eliminar a vulnerabilidade | Patch, atualização, correção de código/config, remover exposição |
| **Mitigar** | Reduzir o risco sem eliminar a falha | Regra de WAF, VPN, segmentação, mais monitoramento |
| **Transferir** | Deslocar parte do risco a terceiros | Contrato, seguro, terceirização (responsabilidade final pode permanecer) |
| **Aceitar** | Conviver com o risco formalmente | Decisão registrada por período determinado |
| **Evitar** | Eliminar a atividade que gera o risco | Desativar serviço, tirar sistema do ar, abandonar tecnologia insegura |

A escolha depende de **contexto, impacto, custo, urgência e apetite de risco** da organização.

## SLA para correção de vulnerabilidades

**SLA = Service Level Agreement** — prazos definidos para correção.

| Severidade | Exemplo de prazo |
|---|---|
| Crítica | 24 a 48 horas |
| Alta | até 7 dias |
| Média | até 30 dias |
| Baixa | 60 a 90 dias |

Prazos variam conforme organização, criticidade, maturidade, regulação e exposição. **Sem SLA**, vulnerabilidades ficam abertas por meses ou anos. **Com SLA**, há expectativa, responsabilidade e acompanhamento.

## Gestão de vulnerabilidades como processo contínuo

```text
Identificar → Varreduras → Analisar → Remover falsos → Classificar →
  ativos                   resultados   positivos

Priorizar → Acionar → Acompanhar → Validar → Reportar
correções  responsáveis  prazos    correções  indicadores
```

O ciclo se repete porque o ambiente muda: novos sistemas, novas versões, novas vulnerabilidades, novas ameaças.

:::tip Maturidade
Organização madura **não espera o incidente** — mantém processo recorrente para reduzir exposição antes da exploração.
:::

## O papel da equipe de segurança

Atua como área de **orientação, análise, prevenção e resposta**: identifica riscos, explica impactos, recomenda ações e apoia o negócio.

Não basta dizer "existe vulnerabilidade crítica". É preciso explicar:

- Qual sistema é afetado;
- Qual seria o impacto;
- Quem poderia explorar;
- Qual dado/processo está em risco;
- Quais as opções de tratamento;
- Quais consequências se nada for feito.

Deve falar com **públicos diferentes** — desenvolvimento, infraestrutura, gestão, jurídico, compliance, diretoria — cada um na sua linguagem.

## O papel do negócio

- Toma decisões considerando **risco, custo, continuidade, estratégia e prioridades**;
- **Não pode ignorar** segurança — deve assumir **conscientemente** os riscos que aceita;
- Em empresas maduras: políticas, comitês, processos de exceção, matriz de risco e documentação;
- Quando a empresa define "não toleramos vulnerabilidades críticas abertas", transforma decisão de risco em **regra organizacional** — e dá respaldo à ação rápida.

## Segurança = equilíbrio entre proteção e operação

- Proteger **não é paralisar** o negócio — é reduzir riscos sem impedir o funcionamento;
- Correções podem ter impacto operacional, custo, urgência ou ser planejáveis;
- O desafio: equilibrar **segurança, continuidade, custo e estratégia**;
- Equilíbrio **não é desculpa** para negligenciar riscos — permite decisões mais inteligentes.

:::tip
Segurança eficiente protege **o que importa, no tempo adequado, com justificativa clara**.
:::

## Principais aprendizados

1. SI protege a informação com base em **CID** (Confidencialidade, Integridade, Disponibilidade);
2. Vulnerabilidades são fraquezas que geram riscos quando exploradas por ameaças;
3. **CVSS** mede severidade técnica, mas não substitui análise de risco de negócio;
4. **CVE** identifica vulnerabilidades públicas de forma padronizada;
5. **CWE** classifica categorias de fraquezas (causa raiz);
6. Corrigir/aceitar/adiar depende de impacto, criticidade, exposição, custo, prazo e apetite de risco;
7. Segurança **recomenda e orienta**; o negócio **participa e assume** formalmente os riscos;
8. Gestão de vulnerabilidades é **processo contínuo** — prazos, responsáveis, acompanhamento e validação.

## Perguntas para revisão

1. Qual é a diferença entre vulnerabilidade, ameaça e risco?
2. Por que o CVSS não deve ser usado como único critério de priorização?
3. Como o contexto de negócio pode alterar a prioridade de uma vulnerabilidade?
4. O que significa aceitar formalmente um risco?
5. Qual é a diferença entre CVE e CWE?
6. Como os pilares CID podem ser afetados por uma vulnerabilidade?
7. Por que a gestão de vulnerabilidades precisa de SLA?
8. Qual é o papel da equipe de segurança na tomada de decisão sobre riscos?
9. Qual é o papel do negócio na aceitação ou tratamento de riscos?
10. Por que SI deve ser entendida como proteção ao negócio?

## Conclusão

> Segurança da Informação não é só encontrar falhas técnicas — é compreender como elas afetam o negócio e apoiar decisões responsáveis sobre o tratamento dos riscos. CVE, CWE e CVSS organizam o trabalho técnico, mas a decisão final considera o **contexto real**. A maturidade está em conectar **conhecimento técnico + processo estruturado + decisão de negócio** — protegendo a informação e permitindo que a organização opere de forma segura e consciente.

## O que anotar depois

- [ ] Responder as 10 perguntas de revisão sem consultar o material
- [ ] Escrever um exemplo próprio de cada opção de tratamento de risco
- [ ] Verificar se existe SLA definido para correções no meu contexto atual

## Referências oficiais

- [CVE — cve.org](https://www.cve.org)
- [CWE — cwe.mitre.org](https://cwe.mitre.org)
- [CVSS — first.org/cvss](https://www.first.org/cvss/)
- [NVD — nvd.nist.gov](https://nvd.nist.gov)
- [NIST Risk Management Framework](https://csrc.nist.gov/projects/risk-management)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
