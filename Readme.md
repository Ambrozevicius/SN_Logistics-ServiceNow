# SN Logistics

> O SN Logistics é uma aplicação de rastreamento logístico desenvolvido na plataforma ServiceNow, com gerenciamento de remessas, atualização automática de status, eventos de rastreamento, API REST e uma interface customizada no Service Portal.

![SN Logistics Banner](./img/banner.png)

---

## Sobre o projeto

O **SN Logistics** é uma aplicação personalizada de logística e rastreamento de encomendas desenvolvida dentro da plataforma ServiceNow.

O projeto começou em março de 2026, durante meus estudos para a certificação **ServiceNow Certified Application Developer — CAD**.

Inicialmente, a ideia era desenvolver uma aplicação simples para praticar conceitos como:

- GlideRecord
- Business Rules
- Scripted REST APIs
- Automação de processos
- Desenvolvimento de widgets no Service Portal

Durante o desenvolvimento, o projeto evoluiu para uma aplicação mais completa, inspirada no sistema de rastreamento de encomendas dos Correios.

O principal objetivo foi conectar diferentes recursos da plataforma em uma única solução, combinando modelagem de dados, lógica de negócio, automações, APIs, experiência do usuário e aprender com tudo isso.

---

## Objetivos do projeto

Os principais objetivos do SN Logistics foram:

- Construir uma aplicação funcional dentro da ServiceNow
- Aplicar, na prática, os conceitos estudados para a certificação CAD
- Criar tabelas personalizadas e relacionamentos entre registros
- Implementar lógica de negócio utilizando Business Rules
- Desenvolver e consumir uma Scripted REST API
- Criar uma experiência personalizada no Service Portal
- Automatizar mudanças de status e movimentações das encomendas
- Gerar eventos de rastreamento automaticamente
- Praticar debugging, scripting e organização de aplicações

---

## O que é o SN Logistics?

O SN Logistics simula um sistema de gerenciamento e rastreamento de encomendas.

Por meio do portal, o usuário pode inserir um código de rastreamento e consultar informações sobre uma remessa.

O sistema:

1. Recebe o código de rastreamento informado pelo usuário
2. Envia uma requisição para a Scripted REST API
3. Consulta a remessa correspondente utilizando GlideRecord
4. Retorna os dados em formato JSON
5. Exibe as informações em um widget customizado no Service Portal

As informações alimentadas pelo Scripted Rest API apresentadas no Service Portal são:

- Código de rastreamento
- Status atual da encomenda
- Destinatário
- Centro logístico atual
- Previsão de entrega

---

## Principais funcionalidades

- Rastreamento de encomendas por código
- Geração automática de código de rastreamento
- Scripted REST API customizada
- Interface de rastreamento no Service Portal
- Dark mode e light mode
- Layout responsivo
- Atualização automática de status
- Criação automática de eventos de rastreamento
- Estrutura de rotas e etapas
- Movimentação entre centros logísticos
- Simulação do processo de entrega
- Tratamento de atrasos
- Automação de notificações
- Business Rules personalizadas
- Scheduled Job para processamento das remessas

---

## Estrutura da aplicação

O projeto foi estruturado utilizando tabelas personalizadas para representar as principais entidades de um sistema logístico.

Entre elas:

- **Shipment:** representa a encomenda
- **Customer:** armazena informações de remetentes e destinatários
- **Logistics Center:** representa os centros logísticos
- **Route:** define a rota utilizada pela encomenda
- **Route Step:** representa cada etapa da rota
- **Tracking Event:** registra os acontecimentos durante o transporte

A tabela de **Shipment** funciona como a entidade central da aplicação, relacionando as principais informações necessárias para acompanhar e processar uma entrega.

---

## Registro de Shipment

Cada registro de Shipment armazena as informações principais da encomenda.

Entre os campos utilizados estão:

- Remetente
- Destinatário
- Rota
- Centro logístico atual
- Status da remessa
- Previsão de entrega
- Tipo de envio
- Código de rastreamento

![Shipment Form Part 1](./img/forms_parte1.png)

![Shipment Form Part 2](./img/forms_parte2.png)

---

## Geração do código de rastreamento

Quando uma nova remessa é criada, uma Business Rule gera automaticamente um código de rastreamento único.

Exemplo:

```text
SN560240832BR
```

Esse código é armazenado no registro de Shipment e posteriormente utilizado pelo portal e pela Scripted REST API para localizar a encomenda.

---

## Fluxo de rastreamento

O processo de consulta funciona da seguinte forma:

```text
Usuário informa o código de rastreamento
                    ↓
Widget do Service Portal faz
                    ↓
Requisição para a Scripted REST API
                    ↓
Consulta da tabela Shipment com GlideRecord
                    ↓
Retorno dos dados em formato JSON
                    ↓
Exibição das informações no portal
```

### Etapas do processo

1. O usuário informa o código de rastreamento
2. O widget envia uma requisição para a API
3. A API recebe o código como um path parameter
4. Um GlideRecord consulta a tabela de Shipments
5. A API monta uma resposta em JSON
6. O widget recebe e apresenta os dados ao usuário

![Tracking Input](./img/input.png)

Endpoint utilizado:

```text
/api/x_1762041_sn_log_0/sn_logistics_api/track/{tracking_number}
```

A resposta da API inclui os seguintes items:

- Status
- Centro logístico atual
- Destinatário
- Previsão de entrega

---

## Scripted REST API

Uma Scripted REST API foi desenvolvida para disponibilizar os dados de rastreamento das remessas.

A API recebe o código de rastreamento por meio de um parâmetro na URL, consulta a tabela de Shipments e retorna os dados necessários para o portal.

Durante o desenvolvimento dessa funcionalidade, foram aplicados conceitos como:

- Estrutura de APIs REST
- Recursos e endpoints
- Path parameters
- Request e response
- Respostas em JSON
- Consultas com GlideRecord
- Validação de dados
- Tratamento de registros não encontrados
- Debugging de integrações

![Scripted REST API](./img/rest.png)

Essa foi uma das partes mais importantes do projeto, foi assim que eu entendi melhor como a ServiceNow pode disponibilizar e receber dados de outras interfaces e sistemas.

---

## Service Portal

A interface utilizada pelo usuário foi desenvolvida por meio de um widget customizado no Service Portal.

O objetivo foi criar uma experiência mais moderna e amigável do que a interface padrão da plataforma.

O portal inclui:

- Layout personalizado
- Dark mode e light mode
- Design responsivo
- Animações com keyframe
- Gradientes
- Ícones customizados com boxicons
- Componentes visuais para o rastreamento
- Tratamento da resposta recebida pela API

### Light mode

![Service Portal Light Mode](./img/SP_branco.png)

### Dark mode

![Service Portal Dark Mode](./img/SP_preto.png)

---

## Dark mode e light mode

A alteração entre os temas foi implementada por meio da troca de classes no widget:

```javascript
pagina.classList.toggle('light');
pagina.classList.toggle('dark');
```

A partir dessas classes, o CSS modifica cores, fundos, textos e outros elementos da interface.

![Dark Mode Portal](./img/SP_preto.png)

---

## Responsividade

A interface foi desenvolvida para funcionar em diferentes tamanhos de tela, incluindo computadores e dispositivos móveis.

Foram utilizados ajustes de layout e media queries para adaptar os componentes do portal.

![Responsive Layout](./img/responsivo.png)


SN Logistics no tamanho de um Iphone SE

---

## Business Rules

Foram criadas diversas Business Rules para implementar validações, automatizar tarefas e manter a consistência dos dados.

As principais BRs incluem:

- **Generate Tracking Number**
- **Create Initial Tracking**
- **Create Tracking Event**
- **Validate Status Transition**
- **Status Auto**
- **Update Current Center**

Essas BRs são responsáveis por ações como:

- Gerar o código de rastreamento
- Criar o primeiro evento da encomenda
- Registrar atualizações no histórico
- Validar mudanças de status
- Atualizar automaticamente o estado da remessa
- Manter o centro logístico atual sincronizado

O uso de Business Rules permitiu centralizar parte da lógica server-side e executar ações relacionadas à criação ou atualização dos registros.

---

## Scheduled Job

Um Scheduled Job foi desenvolvido para simular a movimentação das encomendas ao longo do tempo.

O Scheduled job consulta shipments em processamento e executa ações como:

- Atualizar o status da encomenda
- Movimentar remessas entre centros logísticos
- Criar eventos de rastreamento
- Identificar possíveis atrasos
- Finalizar entregas automaticamente

![Scheduled Job](./img/scheduled%20job.png)

O Scheduled Job permitiu simular um sistema logístico "vivo", no qual as informações são atualizadas sem a necessidade de alterações manuais em cada registro.

---

## Automação de notificações

O projeto também inclui um Workflow para o envio de notificações relacionadas ao processo de entrega.

Essa funcionalidade foi utilizada para praticar a criação de processos automatizados e demonstrar como alterações nos registros podem iniciar outras ações dentro da plataforma.

Criei um Workflow bem básico que enviava um email para o Sender e para o Recipient avisando que o shipment "andou" uma etapa. 

---

## O principal desafio de debugging

Durante o desenvolvimento, o campo de previsão de entrega não aparecia corretamente no portal após a requisição da API, todos os outros valores estavam sendo entregues, menos a previsão de entrega.

Revisei meu projeto inteiro,
- Widget
- Script client-side
- Scripted REST API
- GlideRecord
- Business Rules
- Estrutura do JSON
- Retorno da API

Cogitei até remover o "Entrega estimada", até que,
Depois de três dias procurando, descobri que o nome interno utilizado no campo (lá na criação das tabelas) tinha sido criado como:

```text
Esimated Delivery
```

Em vez de:

```text
Estimated Delivery
```

Sim, faltou um "T"
Esse bug mostrou de forma prática como um erro de digitação pode afetar diferentes camadas de uma aplicação.
Depois disso sempre vejo se escrevi certo qualquer coisa rs.

---

## Tecnologias e recursos utilizados

- ServiceNow Platform
- Service Portal
- AngularJS
- JavaScript
- HTML
- CSS
- GlideRecord
- Business Rules
- Scripted REST API
- Workflows
- Scheduled Jobs
- Custom Tables
- Boxicons

---

## Principais aprendizados

O projeto permitiu desenvolver uma compreensão mais prática sobre:

- Estrutura de aplicações dentro da ServiceNow
- Modelagem de tabelas personalizadas
- Relacionamento entre registros
- Desenvolvimento server-side
- Consultas utilizando GlideRecord
- Criação de Business Rules
- Desenvolvimento de Scripted REST APIs
- Request, response e JSON
- Widgets no Service Portal
- Comunicação entre client-side e server-side
- Automação de processos
- Debugging
- Organização da lógica de uma aplicação
- Criação de interfaces personalizadas

Mais do que praticar funcionalidades isoladas, o principal aprendizado foi compreender como diferentes camadas de uma aplicação se conectam.

O projeto exigiu integrar dados, BRs, automações, APIs e interface em um único fluxo funcional.

---

## Considerações finais

O objetivo do SN Logistics era desenvolver uma aplicação funcional que conectasse diferentes recursos da plataforma ServiceNow.

O projeto começou como uma forma de praticar alguns conceitos do CAD e acabou se tornando uma experiência completa de desenvolvimento.

Durante sua construção, foi necessário consultar documentação, testar diferentes abordagens, resolver erros e entender como cada parte da aplicação se comunicava com as demais.

Foi um dos projetos que mais contribuiu para meu aprendizado prático dentro da plataforma ServiceNow.

---

## Autor

Desenvolvido por **Isaac Ambrozevicius**.

- ServiceNow Certified System Administrator — CSA
- ServiceNow Certified Application Developer — CAD
- ServiceNow Certified Implementation Specialist Data Foudations — CIS-DF
