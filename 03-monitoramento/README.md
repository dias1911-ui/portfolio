# 🖥️ Projeto 03 - Infraestrutura com Monitoramento

## 📋 Descrição

Stack completa de monitoramento e logging para infraestrutura corporativa usando Zabbix, Prometheus, Grafana e ELK Stack.

## 🎯 Objetivos Alcançados

- ✅ Implementação de Zabbix para monitoramento
- ✅ Configuração de Prometheus + Grafana
- ✅ Stack ELK para centralização de logs
- ✅ Dashboards customizados
- ✅ Alertas e notificações
- ✅ Retenção de histórico
- ✅ SLA e relatórios

## 📂 Estrutura de Arquivos

```
03-monitoramento/
├── README.md                    # Este arquivo
├── zabbix/
│   ├── docker-compose.yml       # Stack Zabbix
│   ├── hosts.json               # Hosts a monitorar
│   ├── templates/               # Templates customizados
│   └── alertas/                 # Configuração de alertas
├── grafana/
│   ├── dashboards/              # Dashboards JSON
│   ├── datasources/             # Configuração datasources
│   ├── provisioning/            # Provisionamento
│   └── alertas/                 # Alertas Grafana
├── elk-stack/
│   ├── docker-compose.yml       # Stack ELK
│   ├── logstash/                # Configurações Logstash
│   ├── elasticsearch/           # Configurações Elasticsearch
│   └── kibana/                  # Configurações Kibana
└── evidencias/
    ├── zabbix-dashboard.png     # Prints Zabbix
    ├── grafana-dashboard.png    # Prints Grafana
    ├── kibana-dashboard.png     # Prints Kibana
    └── alerts-history.log       # Histórico de alertas
```

## 🔧 Arquitetura de Monitoramento

```
┌─────────────────────────────────────────────────┐
│          Servidores Monitorados                  │
│  (Linux, Windows, Routers, Switches, Apps)      │
└────────────┬────────────────────────────────────┘
             │
      ┌──────┴──────┐
      ▼             ▼
   Zabbix      Prometheus
   Agent       Exporter
      │             │
      └──────┬──────┘
             ▼
    ┌────────────────┐
    │  Processamento │
    │  & Agregação  │
    └────────┬───────┘
             │
    ┌────────┴────────┐
    ▼                 ▼
┌─────────┐      ┌─────────────┐
│ Zabbix  │      │  Prometheus │
│ Database│      │  TSDB       │
└────┬────┘      └──────┬──────┘
     │                  │
     └────────┬─────────┘
              ▼
        ┌──────────────┐
        │   Grafana    │
        │ Dashboards   │
        └──────────────┘
              │
              ▼
        ┌──────────────┐
        │   Alertas    │
        │  Slack/Email │
        └──────────────┘
```

## 🚀 Como Usar

### Pré-requisitos
- Docker e Docker Compose
- 4GB RAM mínimo
- Portas disponíveis: 3000, 9000, 5601, 9200

### Instalação Rápida

```bash
# 1. Clonar repositório
git clone https://github.com/dias1911-ui/portfolio.git
cd portfolio/03-monitoramento

# 2. Iniciar Zabbix
cd zabbix
docker-compose up -d

# 3. Iniciar Prometheus + Grafana
cd ../grafana
docker-compose up -d

# 4. Iniciar ELK Stack
cd ../elk-stack
docker-compose up -d

# 5. Acessar
# Zabbix: http://localhost:10080 (admin/zabbix)
# Grafana: http://localhost:3000 (admin/admin)
# Kibana: http://localhost:5601
```

## 📊 Componentes Principais

### 1. Zabbix

```yaml
Versão: 6.0
Componentes:
  - Zabbix Server
  - Zabbix Agent
  - MySQL Database
  - Zabbix Web
```

**Recursos Monitorados:**
- CPU, Memória, Disco
- Interfaces de rede
- Processos
- Logs (com análise)
- HTTP checks
- Alertas customizados

### 2. Prometheus + Grafana

```yaml
Prometheus:
  - Scrape interval: 15s
  - Retention: 15 dias

Grafana:
  - Dashboards customizados
  - Alertas
  - Provisioning automático
```

### 3. ELK Stack

```yaml
Elasticsearch:
  - 3 nós cluster
  - Índices diários
  - Retention: 30 dias

Logstash:
  - Pipelines de processamento
  - Parse de logs estruturados

Kibana:
  - Visualizações
  - Alertas
  - Relatórios
```

## 📈 Exemplos de Métricas

### Zabbix Items

```
- system.cpu.load[all,avg1]
- vm.memory.size[available]
- vfs.fs.size[/,used]
- net.if.in[eth0]
- net.if.out[eth0]
- proc.num[java]
- system.uptime
- log[/var/log/auth.log,"Failed password"]
```

### Prometheus Queries

```promql
# CPU usage
100 - (avg(rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)

# Memory usage
(1 - node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes) * 100

# Disk usage
(node_filesystem_size_bytes - node_filesystem_avail_bytes) / node_filesystem_size_bytes * 100

# Request rate
rate(http_requests_total[5m])
```

## 🔔 Alertas Configurados

| Alerta | Condição | Ação |
|--------|----------|------|
| CPU Alta | >80% por 5min | Email + Slack |
| Memória Crítica | >90% | Email + SMS |
| Disco Cheio | >85% | Email + Ticket |
| Serviço Down | Unreachable | Slack |
| Aplicação Lenta | Response >2s | Email |

## 📊 Dashboards

### Zabbix

- **Overview:** Status geral da infraestrutura
- **Servers:** Detalhes por servidor
- **Network:** Tráfego de rede
- **Applications:** Serviços específicos

### Grafana

- **System Metrics:** CPU, Memória, Disco
- **Network:** Bandwidth, Pacotes
- **Applications:** Resposta de aplicações
- **Business:** KPIs

### Kibana

- **Logs:** Busca full-text de logs
- **Security:** Eventos de segurança
- **Performance:** Análise de performance
- **Trends:** Tendências ao longo do tempo

## ✅ Checklist de Validação

- [ ] Zabbix coletando dados de todos os hosts
- [ ] Prometheus scrapeando todos os targets
- [ ] Grafana exibindo dashboards corretamente
- [ ] Alertas sendo disparados e notificados
- [ ] ELK processando logs sem erros
- [ ] Retenção de dados configurada
- [ ] Backups dos dados de monitoramento
- [ ] Performance dentro dos limites (<200ms)

## 🐛 Troubleshooting

### Zabbix não coleta dados

```bash
# Verificar agent
zabbix_get -s 192.168.1.100 -k system.uptime

# Ver logs
docker logs zabbix-server

# Reiniciar
docker restart zabbix-server
```

### Prometheus não scrapeando

```bash
# Ver targets
curl http://localhost:9090/api/v1/targets

# Ver erros
docker logs prometheus
```

### Kibana sem dados

```bash
# Verificar índices
curl http://localhost:9200/_cat/indices

# Reindexar
curl -X POST "localhost:9200/_reindex"
```

## 📚 Referências

- [Zabbix Documentation](https://www.zabbix.com/documentation)
- [Prometheus Documentation](https://prometheus.io/docs)
- [Grafana Documentation](https://grafana.com/docs)
- [Elastic Documentation](https://www.elastic.co/guide)

## 🔗 Links Relacionados

- Projeto 02: [Servidor Linux](../02-linux-server/README.md)
- Projeto 05: [Infraestrutura Completa](../05-infraestrutura-completa/README.md)

---

**Status:** ✅ Completo | **Data:** Setembro 2024 | **Versão:** 1.0
