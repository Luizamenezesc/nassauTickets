import './App.css'
import { useState } from 'react'

function App() {
  const [ultimoTicket, setUltimoTicket] = useState(null)
  const [contador, setContador] = useState(1)
  const [mensagem, setMensagem] = useState('Selecione o tipo de atendimento')

  const emitirTicket = (tipo, descricao) => {
    const data = new Date()

    const ano = String(data.getFullYear()).slice(-2)
    const mes = String(data.getMonth() + 1).padStart(2, '0')
    const dia = String(data.getDate()).padStart(2, '0')
    const sequencia = String(contador).padStart(3, '0')

    const ticket = `${ano}${mes}${dia}-${tipo}${sequencia}`

    setUltimoTicket(ticket)
    setMensagem(descricao)
    setContador(contador + 1)
  }

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>nassauTickets</h1>
          <p>Sistema de Controle de Atendimento</p>
        </div>

        <span className="status">Sistema online</span>
      </header>

      <main className="main">
        <section className="welcome">
          <h2>Bem-vindo</h2>
          <p>
            Escolha abaixo o tipo de atendimento para emitir seu ticket.
          </p>
        </section>

        <section className="ticket-section">
          <h2>Emitir Ticket</h2>

          <div className="ticket-buttons">
            <button
              onClick={() => emitirTicket('SP', 'Serviço Prioritário')}
            >
              <strong>SP</strong>
              <span>Serviço Prioritário</span>
            </button>

            <button
              onClick={() => emitirTicket('SE', 'Retirada de Exames')}
            >
              <strong>SE</strong>
              <span>Retirada de Exames</span>
            </button>

            <button
              onClick={() => emitirTicket('SG', 'Serviço Geral')}
            >
              <strong>SG</strong>
              <span>Serviço Geral</span>
            </button>
          </div>
        </section>

        <section className="ticket-result">
          <h2>Seu Atendimento</h2>

          {ultimoTicket ? (
            <>
              <p className="ticket-number">{ultimoTicket}</p>
              <p>{mensagem}</p>
              <p className="waiting">
                Aguarde a chamada no painel de atendimento.
              </p>
            </>
          ) : (
            <p>{mensagem}</p>
          )}
        </section>

        <section className="info">
          <div>
            <strong>Horário de funcionamento</strong>
            <span>07:00 às 17:00</span>
          </div>

          <div>
            <strong>Atendimento</strong>
            <span>Laboratório de Análises Clínicas</span>
          </div>
        </section>
      </main>

      <footer>
        <p>nassauTickets • Projeto acadêmico</p>
      </footer>
    </div>
  )
}

export default App