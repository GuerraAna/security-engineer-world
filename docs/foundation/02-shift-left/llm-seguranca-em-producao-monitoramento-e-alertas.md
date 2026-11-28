---
sidebar_position: 11
title: "Segurança em Produção, Monitoramento e Alertas"
sidebar_label: "📡  Segurança em Produção"
description: Proteção em runtime — RASP e WAF, monitoramento contínuo de métricas, alertas proativos e boas práticas de logs em produção
---

# Segurança em Produção, Monitoramento e Alertas

:::note Origem do conteúdo
Notas de estudo — a fase final do desenvolvimento seguro — proteção em tempo real com RASP e WAF, monitoramento contínuo, alertas baseados em baseline e boas práticas de logs.
:::

## Segurança não termina no deploy

Os testes antes da produção (SAST, SCA, DAST, pentest) são fundamentais — mas **não suficientes**. Em produção, o foco muda para **proteger e monitorar** continuamente contra ameaças e ataques.

## Proteção em runtime

### RASP (Runtime Application Security Protection)

Tecnologia **embarcada na aplicação** (web, mobile) que **monitora e bloqueia requisições maliciosas em tempo real** — como um agente interno de defesa.

- **Exemplo**: bloquear uma requisição de **SQL Injection** durante a execução;
- Funciona mesmo contra ataques que passaram pelo WAF.

| RASP | [IAST](./llm-dast-e-iast) |
|---|---|
| **Protege e bloqueia** em produção | **Testa** a aplicação durante o uso (QA) |
| Runtime, foco em defesa | Runtime, foco em detecção de falhas |

### WAF (Web Application Firewall)

Camada que **filtra requisições antes** de atingirem o servidor — inspeciona IP de origem, assinaturas de ataques conhecidos e padrões maliciosos.

- **Exemplo**: bloquear requisições de **IPs em blacklist** ou com comandos maliciosos;
- Uso principal: **produção** — incomum em dev/teste.

### RASP × WAF: quem defende onde

```
Cliente ──► WAF ──► Aplicação (RASP embarcado) ──► Resposta
          │                │
          └── 1ª linha     └── defesa em profundidade
              de defesa        (dentro do runtime)
```

| WAF | RASP |
|---|---|
| **Antes** da requisição chegar à aplicação | **Dentro** da aplicação, pós-WAF |
| Primeira linha de defesa | Última linha, com contexto interno |

## Monitoramento

Prática **contínua** para detectar atividades incomuns e possíveis ataques.

### O que monitorar

- **Requests** por minuto, hora, dia e mês;
- **Logins** e requisições por usuário;
- **Endpoints** — padrões suspeitos;
- **Logs** de transações críticas e erros.

**Ferramentas**: logs da aplicação integrados a Elastic Stack, Datadog, Splunk etc.

:::tip Analogia do painel de carro
Assim como o motorista monitora velocidade, temperatura e combustível durante a viagem, o time monitora o software durante a execução — você não olha o painel só ao sair da garagem.
:::

## Alertas

Permitem **reação proativa** diante de anomalias, definidos com base no **comportamento normal** (baseline) da aplicação.

| Elemento | Exemplo |
|---|---|
| **Baseline** | Sistema recebe ~1.000 req/min em horário comercial |
| **Gatilho** | Alerta dispara ao ultrapassar 10.000 req/min |
| **Notificação** | E-mail, SMS, Telegram — resposta rápida |
| **Automatização** | Integração com sistemas de resposta automática |

## Logs e segurança

### O que capturar

- Transações e **funcionalidades críticas**;
- **Logins** e tentativas de login;
- **Erros e sucessos**.

### Boas práticas

- **Nunca** registrar dados sensíveis em texto plano;
- Quando inevitável, usar **criptografia ou mascaramento**.

:::warning Log mal configurado vira vulnerabilidade
Logs com dados sensíveis em claro são um achado de segurança por si só — e podem entregar a invasores exatamente as informações de que precisam.
:::

## Ferramentas recomendadas

| Categoria | Ferramentas |
|---|---|
| **RASP** | Contrast Security, Sqreen |
| **WAF** | Azure Application Firewall, AWS WAF, F5, Imperva, Cloudflare |
| **Monitoramento/logs** | Elastic Stack, Datadog, Splunk, Logstash |

## Conceitos-chave

| Termo | Significado |
|---|---|
| **RASP** | Runtime Application Security Protection — agente embarcado que bloqueia ataques em tempo real |
| **WAF** | Web Application Firewall — filtra requisições antes da aplicação |
| **Baseline** | Comportamento normal da aplicação — base dos alertas |
| **Alerta** | Notificação automática quando métricas fogem do esperado |
| **Blacklist** | Lista de origens bloqueadas preventivamente |
| **Mascaramento** | Ofuscar dados sensíveis em logs (ex.: `****1234`) |
| **Defense in depth** | Camadas de defesa — WAF + RASP + monitoramento juntos |
| **SIEM** | Correlação centralizada de eventos de segurança |

## Síntese

> Produção não é a linha de chegada — é onde a proteção vira **contínua**. **WAF** filtra na entrada, **RASP** defende de dentro em runtime, **monitoramento** observa o comportamento e **alertas** reagem ao que foge do baseline — tudo sustentado por **logs bem feitos**. Segurança em produção = proteger + observar + reagir.

## O que anotar depois

- [ ] Testar um WAF gratuito (ex.: Cloudflare) na frente de uma app de laboratório
- [ ] Definir 3 alertas de baseline para uma aplicação real (req/min, logins falhos, erros 5xx)
- [ ] Auditar logs de uma app minha procurando dados sensíveis em texto plano
- [ ] Estudar a diferença entre RASP, WAF e API Gateway na borda
- [ ] Pesquisar detecção de anomalia com Elastic Stack ou Datadog

## Referências oficiais

- [OWASP — RASP (Runtime Application Self-Protection)](https://owasp.org/www-community/controls/Runtime_Application_Self-Protection)
- [AWS WAF](https://aws.amazon.com/waf/)
- [Azure Web Application Firewall](https://learn.microsoft.com/azure/web-application-firewall/)
- [Cloudflare WAF](https://www.cloudflare.com/waf/)
- [Elastic Observability](https://www.elastic.co/observability)
- [OWASP Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)
