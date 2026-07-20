# SN Logistics

> Aplicação de rastreamento logístico desenvolvida na plataforma ServiceNow, com gerenciamento de remessas, atualização automática de status, eventos de rastreamento, API REST e uma interface customizada no Service Portal.

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

Durante o desenvolvimento, o projeto evoluiu para uma aplicação mais completa, inspirada em sistemas de rastreamento de encomendas, como os utilizados por transportadoras e serviços postais.

O principal objetivo foi conectar diferentes recursos da plataforma em uma única solução, combinando modelagem de dados, lógica de negócio, automações, APIs e experiência do usuário.

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
2. Envia uma requisição para uma Scripted REST API
3. Consulta a remessa correspondente utilizando GlideRecord
4. Retorna os dados em formato JSON
5. Exibe as informações em um widget customizado no Service Portal

As informações apresentadas incluem:

- Código de rastreamento
- Status atual da encomenda
- Destinatário
- Centro logístico atual
- Previsão de entrega
- Informações relacionadas à movimentação da remessa

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
Widget do Service Portal
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

A resposta da API inclui informações como:

- Status
- Centro logístico atual
- Destinatário
- Previsão de entrega
- Código de rastreamento

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

Essa foi uma das partes mais importantes do projeto, pois permitiu compreender melhor como o ServiceNow pode disponibilizar dados para outras interfaces e sistemas.

---

## Service Portal

A interface utilizada pelo usuário foi desenvolvida por meio de um widget customizado no Service Portal.

O objetivo foi criar uma experiência mais moderna e amigável do que a interface padrão da plataforma.

O portal inclui:

- Layout personalizado
- Dark mode e light mode
- Design responsivo
- Animações
- Gradientes
- Ícones customizados
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

---

## Business Rules

Foram criadas diferentes Business Rules para implementar validações, automatizar tarefas e manter a consistência dos dados.

As principais regras incluem:

- **Generate Tracking Number**
- **Create Initial Tracking**
- **Create Tracking Event**
- **Validate Status Transition**
- **Status Auto**
- **Update Current Center**

Essas regras são responsáveis por comportamentos como:

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

O job consulta remessas em processamento e executa ações como:

- Atualizar o status da encomenda
- Movimentar remessas entre centros logísticos
- Criar eventos de rastreamento
- Identificar possíveis atrasos
- Finalizar entregas automaticamente

![Scheduled Job](./img/scheduled%20job.png)

Essa automação permitiu simular um sistema logístico ativo, no qual as informações são atualizadas sem a necessidade de alterações manuais em cada registro.

Em um cenário real, esse tipo de atualização poderia ser realizado por integrações com transportadoras, dispositivos externos ou sistemas responsáveis pela operação logística.

---

## Automação de notificações

O projeto também inclui uma automação para o envio de notificações relacionadas ao processo de entrega.

Essa funcionalidade foi utilizada para praticar a criação de processos automatizados e demonstrar como alterações nos registros podem iniciar outras ações dentro da plataforma.

---

## Um dos principais desafios de debugging

Durante o desenvolvimento, um dos problemas encontrados foi o campo de previsão de entrega não aparecer corretamente no portal.

Foram revisados:

- Widget
- Script client-side
- Scripted REST API
- GlideRecord
- Business Rules
- Estrutura do JSON
- Retorno da API

Após a investigação, foi identificado que o nome interno utilizado no campo havia sido criado como:

```text
Esimated Delivery
```

Em vez de:

```text
Estimated Delivery
```

O problema mostrou, de forma prática, como pequenas inconsistências na nomenclatura podem afetar diferentes camadas de uma aplicação.

Além de corrigir a integração, esse caso reforçou a importância de:

- Utilizar padrões de nomenclatura
- Validar nomes internos dos campos
- Testar cada camada separadamente
- Acompanhar o fluxo dos dados do servidor até a interface
- Utilizar logs e ferramentas de debugging

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
- Scheduled Jobs
- Custom Tables
- Automação de processos
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

## Limitações atuais

O SN Logistics foi desenvolvido como um projeto de estudo e portfólio. Por isso, ainda existem pontos que poderiam ser aprimorados.

Entre as limitações atuais estão:

- Ausência de autenticação para usuários externos
- Ausência de controle de acesso baseado em funções
- Tratamento de erros limitado em alguns cenários
- Ausência de um dashboard administrativo
- Histórico completo de rastreamento ainda não disponível no portal
- Ausência de visualização geográfica das rotas
- Algumas nomenclaturas internas poderiam ser padronizadas
- Regras do ciclo de vida das remessas poderiam ser mais detalhadas

---

## Possíveis melhorias

Entre as melhorias planejadas para versões futuras estão:

- Criar uma timeline completa de rastreamento
- Implementar autenticação
- Adicionar controle de acesso baseado em roles
- Criar um dashboard administrativo
- Adicionar visualização das rotas em um mapa
- Exibir o histórico completo de eventos
- Melhorar o tratamento de erros da API
- Refatorar nomenclaturas internas
- Separar melhor as responsabilidades entre as automações
- Adicionar regras mais detalhadas para o ciclo de vida das remessas
- Aprimorar a responsividade do portal
- Implementar testes mais estruturados

---

## Considerações finais

O objetivo do SN Logistics não era reproduzir toda a complexidade de um sistema logístico real, mas desenvolver uma aplicação funcional que conectasse diferentes recursos da plataforma ServiceNow.

O projeto começou como uma forma de praticar alguns conceitos do CAD e acabou se tornando uma experiência completa de desenvolvimento.

Durante sua construção, foi necessário consultar documentação, testar diferentes abordagens, resolver erros e entender como cada parte da aplicação se comunicava com as demais.

Foi um dos projetos que mais contribuiu para meu aprendizado prático dentro da plataforma ServiceNow.

---

## Autor

Desenvolvido por **Isaac Ambrozevicius**.

- ServiceNow Certified System Administrator — CSA
- ServiceNow Certified Application Developer — CAD
- ServiceNow Certified Implementation Specialist — Data Foundations
