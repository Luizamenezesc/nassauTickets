\# Regras de Negócio - nassauTickets



\## RN01 - Tipos de Atendimento



O sistema deverá trabalhar com três tipos de atendimento:



\- SP - Serviço Prioritário;

\- SG - Serviço Geral;

\- SE - Retirada de Exames.



\## RN02 - Identificação do Ticket



Cada ticket deverá possuir uma identificação única no formato:



`YYMMDD-PPSQ`



Onde:



\- `YYMMDD` representa a data da emissão;

\- `PP` representa o tipo de atendimento;

\- `SQ` representa uma sequência numérica de três dígitos do dia.



A sequência deverá ser controlada diariamente.



\## RN03 - Prioridade de Atendimento



Os tickets deverão ser atendidos respeitando a prioridade definida pelo sistema.



A ordem de prioridade é:



1\. SP - Serviço Prioritário;

2\. SE - Retirada de Exames;

3\. SG - Serviço Geral.



\## RN04 - Alternância das Filas



A sequência geral de atendimento deverá seguir a lógica:



`SP → SE/SG → SP → SE/SG`



Quando uma fila estiver vazia, o sistema deverá considerar as filas que ainda possuem tickets disponíveis.



\## RN05 - Chamada do Cliente



O atendente deverá chamar o próximo cliente por meio do sistema.



O sistema deverá registrar cada chamada realizada.



\## RN06 - Segunda Chamada



Caso o cliente não compareça após a primeira chamada, o sistema deverá permitir uma segunda chamada.



\## RN07 - Ticket Abandonado



Caso o ticket não seja atendido após duas chamadas, ele deverá ser considerado abandonado.



\## RN08 - Horário de Funcionamento



O horário de funcionamento do laboratório será das:



`07:00 às 17:00`



Os atendimentos que estiverem em andamento deverão ser concluídos.



Os tickets que permanecerem pendentes ao final do horário deverão ser descartados.



\## RN09 - Painel de Atendimento



O painel deverá apresentar os cinco últimos tickets chamados.



O painel deverá mostrar as chamadas realizadas e as informações necessárias para acompanhamento do atendimento.



\## RN10 - Atendimento no Guichê



Cada atendimento deverá estar associado a um atendente e a um guichê.



O sistema deverá registrar o início e o término do atendimento.



\## RN11 - Acesso dos Atendentes



O acesso dos atendentes deverá ser realizado por meio de autenticação.



O sistema deverá possuir pelo menos um atendente com perfil de gerente.



\## RN12 - Atendimento do Cliente



O cliente deverá utilizar o sistema de forma anônima por meio de um quiosque ou totem para solicitar seu ticket.



Não deverá ser necessário realizar login para emissão do ticket.



\## RN13 - Relatórios



O sistema deverá permitir a geração de relatórios diários e mensais.



Os relatórios deverão apresentar informações relacionadas aos tickets emitidos e atendidos.



\## RN14 - Auditoria



O sistema deverá registrar informações dos atendimentos para fins de auditoria.



Deverão ser registrados:



\- atendente;

\- guichê;

\- ticket;

\- primeira chamada;

\- segunda chamada;

\- início do atendimento;

\- término do atendimento.



\## RN15 - Concorrência



O sistema deverá considerar situações em que dois ou mais atendentes tentem chamar o próximo ticket simultaneamente.



Um mesmo ticket não deverá ser atribuído a mais de um atendente.



\## RN16 - Tickets Não Atendidos



Tickets que não forem atendidos após as duas chamadas previstas deverão ser registrados como abandonados.



\## RN17 - Encerramento do Expediente



Ao final do horário de funcionamento, os atendimentos que estiverem em andamento deverão ser concluídos.



Os tickets ainda pendentes deverão ser descartados conforme as regras do sistema.



\## RN18 - Controle de Atendimento



O sistema deverá manter os registros necessários para acompanhar o fluxo dos tickets desde sua emissão até o atendimento, abandono ou descarte.



\## RN19 - Dados para Métricas



O sistema deverá armazenar informações que permitam calcular métricas de atendimento, incluindo o tempo médio de serviço.



\## RN20 - Segurança e Privacidade



O sistema deverá considerar mecanismos de segurança, controle de acesso e proteção das informações, incluindo os requisitos relacionados à LGPD.

