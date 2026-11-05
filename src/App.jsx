import { useState } from 'react'
import { gaceta, contrato, jurisprudencia, preguntas, sugeridas } from './data.js'

const modulos = ['Gaceta oficial', 'Análisis de contratos', 'Jurisprudencia', 'Asistente laboral']

function Gaceta() {
  const [tema, setTema] = useState('Todos')
  const temas = ['Todos', ...new Set(gaceta.map(g => g.tema))]
  const lista = gaceta.filter(g => tema === 'Todos' || g.tema === tema)
  return (
    <section>
      <h2>Gaceta oficial</h2>
      <p className="sub">Normas nuevas y su estado de trámite.</p>
      <div className="filtros">{temas.map(t => <button key={t} className={t === tema ? 'on' : ''} onClick={() => setTema(t)}>{t}</button>)}</div>
      <ul className="lista">
        {lista.map(g => (
          <li key={g.id}>
            <div className="meta"><span>{g.tipo}</span><time>{g.fecha}</time></div>
            <strong>{g.titulo}</strong>
            <span className={'estado ' + (g.estado === 'En comisión' ? 'pend' : 'ok')}>{g.estado}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Contratos() {
  const [listo, setListo] = useState(false)
  return (
    <section>
      <h2>Análisis de contratos</h2>
      <p className="sub">Contrato de trabajo de ejemplo. Revisa cada cláusula.</p>
      <button className="cta" onClick={() => setListo(true)}>Analizar contrato</button>
      <ul className="lista">
        {contrato.map(c => (
          <li key={c.n}>
            <div className="meta"><span>{c.n}</span>{listo && <b className={'riesgo ' + c.riesgo}>Riesgo {c.riesgo.toLowerCase()}</b>}</div>
            <p className="clausula">{c.texto}</p>
            {listo && <p className="nota">{c.nota}</p>}
          </li>
        ))}
      </ul>
    </section>
  )
}

function Jurisprudencia() {
  return (
    <section>
      <h2>Jurisprudencia</h2>
      <p className="sub">Casos de ejemplo ordenados por tema.</p>
      <ul className="lista">
        {jurisprudencia.map(j => (
          <li key={j.exp}>
            <div className="meta"><span>{j.corte}</span><span>{j.tema}</span></div>
            <strong>{j.exp}</strong>
            <p className="clausula">{j.resumen}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Asistente() {
  const [msgs, setMsgs] = useState([{ de: 'bot', t: 'Pregunta sobre derecho laboral guatemalteco. Respondo con datos de ejemplo.' }])
  const [q, setQ] = useState('')
  const enviar = texto => {
    const t = texto.trim()
    if (!t) return
    const low = t.toLowerCase()
    const hit = preguntas.find(p => p.clave.some(k => low.includes(k)))
    setMsgs(m => [...m, { de: 'yo', t }, { de: 'bot', t: hit ? hit.r : 'No tengo ese tema en la demo. Prueba con vacaciones, jornada, despido o Bono 14.' }])
    setQ('')
  }
  return (
    <section>
      <h2>Asistente laboral</h2>
      <p className="sub">Respuestas predefinidas. Sin IA real en esta demo.</p>
      <div className="chat">{msgs.map((m, i) => <p key={i} className={'burbuja ' + m.de}>{m.t}</p>)}</div>
      <div className="filtros">{sugeridas.map(s => <button key={s} onClick={() => enviar(s)}>{s}</button>)}</div>
      <div className="entrada">
        <input value={q} onChange={e => setQ(e.target.value)} onKeyDown={e => e.key === 'Enter' && enviar(q)} placeholder="Escribe tu pregunta" aria-label="Pregunta" />
        <button className="cta" onClick={() => enviar(q)}>Enviar</button>
      </div>
    </section>
  )
}

const vistas = [Gaceta, Contratos, Jurisprudencia, Asistente]

export default function App() {
  const [i, setI] = useState(0)
  const Vista = vistas[i]
  return (
    <div className="app">
      <aside>
        <h1>LUMEN</h1>
        <p className="lema">Seguimiento legislativo y derecho laboral de Guatemala</p>
        <nav>{modulos.map((m, k) => <button key={m} className={k === i ? 'on' : ''} onClick={() => setI(k)}>{m}</button>)}</nav>
        <p className="aviso">Demo con datos ficticios. No es asesoría legal.</p>
      </aside>
      <main><Vista /></main>
    </div>
  )
}
