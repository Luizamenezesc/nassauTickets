\# Requisitos do Sistema - nassauTickets



\## 1. Descrição do Sistema



O nassauTickets é um Sistema de Controle de Atendimento para um Laboratório de Análises Clínicas.



O sistema tem como objetivo controlar a emissão, organização, chamada e atendimento de tickets dos clientes, além de disponibilizar informações sobre o atendimento e permitir a geração de relatórios.



O sistema possui três agentes principais:



\- \*\*AS - Agente Sistema:\*\* responsável pelo funcionamento do sistema, banco de dados, emissão de tickets, atualização do painel e comunicação com atendentes e clientes.

\- \*\*AA - Agente Atendente:\*\* responsável por chamar o próximo cliente e realizar o atendimento no guichê.

\- \*\*AC - Agente Cliente:\*\* cliente que utiliza o sistema de forma anônima por meio de um quiosque ou totem para retirar seu ticket.



\## 2. Tipos de Tickets



O sistema deverá trabalhar com três tipos de tickets:



\- \*\*SP - Serviço Prioritário\*\*

\- \*\*SG - Serviço Geral\*\*

\- \*\*SE - Retirada de Exames\*\*



Os tickets deverão possuir uma identificação única seguindo o formato:



`YYMMDD-PPSQ`



Onde:



\- `YYMMDD` representa a data da emissão;

\- `PP` representa o tipo do ticket;

\- `SQ` representa uma sequência numérica de três dígitos do dia.



\## 3. Regras de Atendimento



A ordem de prioridade dos tickets deverá seguir as regras definidas na especificação:



1\. SP - Serviço Prioritário

2\. SE - Retirada de Exames

3\. SG - Serviço Geral



A sequência geral de atendimento deverá considerar a seguinte lógica:



\*\*SP → SE/SG → SP → SE/SG\*\*



O sistema deverá controlar as filas de atendimento e selecionar o próximo ticket conforme as regras de prioridade.



Quando as filas prioritárias estiverem vazias, o sistema deverá seguir a ordem de atendimento das filas restantes.



\## 4. Chamada dos Tickets



O atendente deverá utilizar o sistema para chamar o próximo cliente.



O sistema deverá registrar as chamadas realizadas.



Caso um ticket não seja atendido após duas chamadas, ele deverá ser considerado abandonado.



O sistema também deverá registrar as informações necessárias para auditoria do atendimento.



\## 5. Horário de Funcionamento



O sistema deverá considerar o horário de funcionamento do laboratório das \*\*07:00 às 17:00\*\*.



Os atendimentos que estiverem em andamento deverão ser concluídos.



Os tickets que permanecerem pendentes ao final do horário de funcionamento deverão ser descartados.



\## 6. Painel de Atendimento



O sistema deverá possuir um painel para apresentação das chamadas realizadas.



O painel deverá apresentar os \*\*cinco últimos tickets chamados\*\*.



O painel deverá exibir os tickets chamados e suas informações de atendimento.



\## 7. Usuários e Acesso



O sistema deverá permitir acesso autenticado para os atendentes.



O cliente deverá utilizar o sistema de forma anônima por meio do quiosque ou totem para emissão do ticket.



Deverá existir um atendente com perfil de gerente.



\## 8. Relatórios



O sistema deverá permitir a geração de relatórios diários e mensais.



Os relatórios deverão apresentar informações como:



\- quantidade de tickets emitidos;

\- quantidade de tickets atendidos;

\- informações por tipo de prioridade;

\- detalhes dos atendimentos;

\- tempo médio de atendimento;

\- informações para auditoria.



\## 9. Auditoria



O sistema deverá registrar informações relacionadas aos atendimentos para possibilitar auditoria.



Os registros de auditoria deverão considerar:



\- atendente;

\- guichê;

\- ticket;

\- primeira chamada;

\- segunda chamada;

\- início do atendimento;

\- término do atendimento.



\## 10. Concorrência



O sistema deverá considerar situações em que mais de um atendente tente chamar o próximo ticket simultaneamente.



A implementação deverá evitar que o mesmo ticket seja atribuído a mais de um atendente.



\## 11. Desempenho e Disponibilidade



O sistema deverá considerar o desempenho durante o atendimento e a geração de informações.



Também deverão ser consideradas situações de falha ou indisponibilidade do sistema, incluindo mecanismos relacionados à recuperação e continuidade do atendimento.



\## 12. Acessibilidade



A interface do sistema deverá considerar recursos de acessibilidade para facilitar a utilização por diferentes usuários.



\## 13. Segurança



O sistema deverá considerar aspectos de segurança relacionados ao controle de acesso, autenticação dos atendentes e proteção das informações do sistema.



Também deverão ser considerados os requisitos relacionados à LGPD.



\## 14. Tecnologias Previstas



A implementação deverá utilizar:



\- \*\*Frontend:\*\* React

\- \*\*Backend:\*\* Node.js com Express, Java com Spring Boot ou Python com Flask/FastAPI

\- \*\*Banco de dados:\*\* MySQL 8.0



A atividade determina que o frontend seja desenvolvido utilizando React.



\## 15. Funcionalidades Previstas



Entre as principais funcionalidades previstas estão:



\- emissão de tickets;

\- identificação do tipo de atendimento;

\- organização das filas;

\- chamada do próximo cliente;

\- chamada novamente;

\- atendimento no guichê;

\- atualização do painel;

\- controle das chamadas;

\- registro dos atendimentos;

\- geração de relatórios;

\- auditoria dos atendimentos;

\- controle de acesso dos atendentes.



\## 16. Observações



A primeira fase do projeto não exige que o sistema esteja totalmente funcional.



Nesta fase deverão estar preparados o repositório, a equipe, os documentos principais e uma parte inicial do código.



A implementação completa do sistema será realizada posteriormente, antes da segunda avaliação.

