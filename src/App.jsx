import { useEffect, useState } from 'react'
import './App.css'

const integrantes = [
  'Stefanny Mirquez Olaya',
  'Valery Sofia Reyes Polania',
  'Johan David Garzon Trujillo',
  'Alejandra Diaz Espinoza',
]

const aportes = [
  { titulo: 'El avión', anio: '1920', autor: 'Wright Brothers', texto: 'Aunque los aviones surgieron a principios del siglo XX, revolucionaron el transporte. Antes, viajar entre continentes tomaba semanas; la aviación permitió cubrir grandes distancias en pocas horas. Sin ella, la globalización actual sería mucho más complicada.' },
  { titulo: 'Transistor', anio: '1947', autor: 'Bardeen, Brattain y Shockley', texto: 'El transistor, desarrollado en 1947, es un invento clave pero poco conocido. Revolucionó el control de señales eléctricas al ser más pequeño y eficiente que tecnologías anteriores, permitiendo la creación de dispositivos electrónicos más compactos.' },
  { titulo: 'Penicilina', anio: '1928', autor: 'Alexander Fleming', texto: 'Uno de los descubrimientos médicos más importantes del siglo XX fue la penicilina, que llevó a la creación de otros antibióticos. Antes de estos, muchas infecciones bacterianas eran peligrosas. Los antibióticos permitieron tratar infecciones y hicieron más seguros muchos procedimientos médicos.' },
  { titulo: 'Estructura del ADN', anio: '1953', autor: 'James Watson y Francis Crick', texto: 'En 1953 se descubrió la estructura de doble hélice del ADN, lo que fue crucial para entender la transmisión de información genética. Este hallazgo impulsó el desarrollo de áreas como la genética, biología molecular, medicina moderna y biotecnología.' },
  { titulo: 'El Internet', anio: '1969', autor: 'Departamento de Defensa de EE.UU.', texto: 'Internet comenzó a desarrollarse durante la segunda mitad del siglo XX. Aunque se popularizó especialmente durante el siglo XXI, sus bases tecnológicas fueron creadas anteriormente. ¿Por qué fue importante? Internet permitió conectar computadoras y compartir información entre diferentes lugares.' },
]

const inventores = [
  { nombre: 'Jennifer Doudna y Emmanuelle Charpentier', texto: 'Son dos de las científicas más importantes relacionadas con el desarrollo de CRISPR-Cas9, una herramienta de edición genética. Su trabajo revolucionó la investigación biológica y abrió posibilidades para estudiar y tratar enfermedades genéticas.' },
  { nombre: 'Demis Hassabis', texto: 'Científico e investigador británico relacionado con DeepMind y con importantes avances en inteligencia artificial. Su trabajo incluye sistemas de IA capaces de resolver problemas científicos complejos, mostrando cómo la informática puede contribuir directamente a la investigación científica.' },
  { nombre: 'Katalin Karikó y Drew Weissman', texto: 'Sus investigaciones sobre el ARN mensajero (ARNm) fueron fundamentales para el desarrollo de vacunas basadas en esta tecnología, que adquirieron enorme importancia durante la pandemia de COVID-19.' },
  { nombre: 'John Martinis', texto: 'Ganador del premio de física de 2025 por investigaciones sobre fenómenos cuánticos en circuitos eléctricos que busca utilizar fenómenos de la física cuántica para procesar determinados tipos de información de maneras diferentes a las computadoras tradicionales.' },
  { nombre: 'David Baker', texto: 'Trabaja en una de las áreas más sorprendentes de la ciencia moderna: el diseño computacional de proteínas. Gracias a esto los científicos pueden utilizar herramientas computacionales para intentar diseñar proteínas con determinadas funciones.' },
  { nombre: 'Omar Yaghi', texto: 'Es un químico ganador del premio Nobel de química 2025 destacado por su trabajo en el desarrollo de estructuras metal-orgánicas, conocidas como MOFs.' },
]

const futuro = [
  { titulo: 'Inteligencia artificial', texto: 'Podría convertirse en una herramienta habitual para investigación, educación, medicina e ingeniería.' },
  { titulo: 'Medicina personalizada', texto: 'La combinación de genética, IA y biotecnología podría permitir tratamientos cada vez más adaptados a cada persona.' },
  { titulo: 'Computadores cuánticos', texto: 'Podrían ser útiles para determinados problemas científicos y tecnológicos que son difíciles de resolver con computadores tradicionales.' },
  { titulo: 'Energía sostenible', texto: 'Se espera continuar desarrollando mejores baterías, energías renovables y sistemas de almacenamiento.' },
  { titulo: 'Robótica', texto: 'Los robots podrían asumir una mayor cantidad de tareas en fábricas, laboratorios, hospitales y otros entornos.' },
]

const secciones = [
  ['inicio', 'Inicio'],
  ['contexto', 'Contexto'],
  ['previos', 'Previos'],
  ['aportes', 'Aportes XX'],
  ['espacial', 'Espacial'],
  ['eventos', 'Eventos'],
  ['sociedad', 'Sociedad'],
  ['actividad', 'Actividad'],
  ['inventores', 'Inventores'],
  ['futuro', 'Futuro'],
  ['conclusion', 'Conclusión'],
]

function Marco({ className = '' }) {
  return (
    <div className={`marcos ${className}`} aria-hidden="true">
      <span /><span />
    </div>
  )
}

export default function App() {
  const [activa, setActiva] = useState('inicio')

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entradas) => entradas.forEach((e) => e.isIntersecting && setActiva(e.target.id)),
      { threshold: 0.55 },
    )
    secciones.forEach(([id]) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <nav className="puntos" aria-label="Secciones">
        {secciones.map(([id, nombre]) => (
          <a key={id} href={`#${id}`} className={activa === id ? 'on' : ''} title={nombre} aria-label={nombre} />
        ))}
      </nav>

      <main>
        <section id="inicio" className="slide portada">
          <div className="portada-texto">
            <h1 className="anton">SIGLO XXI</h1>
            <div className="caja by">
              <span className="by-label">by:</span>
              <ul>
                {integrantes.map((n) => <li key={n}>{n}</li>)}
              </ul>
            </div>
          </div>
          <div className="franja" aria-hidden="true" />
        </section>

        <section id="contexto" className="slide split">
          <Marco />
          <div className="texto">
            <h2 className="grotesk">contexto</h2>
            <p>El siglo XXI es nuestro periodo actual que se caracteriza por rápidos cambios en tecnología, comunicación, economía, política y ciencia.</p>
            <ul>
              {['Internet y redes sociales', 'Teléfonos inteligentes', 'Computación en la nube', 'Inteligencia artificial', 'Biotecnología', 'Energías renovables', 'Robótica y automatización', 'Exploración espacial privada'].map((i) => <li key={i}>{i}</li>)}
            </ul>
            <p>Un aspecto clave es la convergencia de tecnologías, como la combinación de inteligencia artificial con robótica y medicina.</p>
          </div>
        </section>

        <section id="previos" className="slide split inverso">
          <div className="texto">
            <h2 className="serif">acontecimientos previos</h2>
            <p>El siglo XX fue un periodo de transformación sin precedentes, marcado por avances tecnológicos, conflictos globales y profundos cambios sociales y políticos. Desde el estallido de las dos guerras mundiales hasta el auge de la Guerra Fría y la globalización.</p>
            <p>Este periodo estuvo definido por la innovación, la destrucción y la búsqueda constante de nuevos modelos de sociedad.</p>
            <ul className="plana">
              {['Primera Guerra Mundial', 'La gran depresión', 'Segunda Guerra Mundial', 'La llegada del hombre a la luna', 'Globalización', 'Derecho Humanitario Internacional'].map((i) => <li key={i}>{i}</li>)}
            </ul>
            <p>Se puede decir que es el periodo con más cambios y avances tecnológicos de la historia conocida.</p>
          </div>
          <Marco className="cuadros" />
        </section>

        <section id="aportes" className="slide columna">
          <div className="encabezado">
            <h2 className="grotesk">aportes del siglo xx</h2>
            <div className="caja chip">
              <h3 className="serif">más relevantes</h3>
              <ul>
                {['El avión', 'La penicilina', 'El transistor', 'La estructura del ADN', 'Internet', 'Cohetes y tecnología espacial'].map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          </div>
          <div className="rejilla aportes">
            {aportes.map((a) => (
              <article key={a.titulo} className="tarjeta">
                <header>
                  <h3 className="grotesk">{a.titulo}</h3>
                  <span className="anio anton">{a.anio}</span>
                </header>
                <p className="autor serif">{a.autor}</p>
                <div className="caja"><p>{a.texto}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section id="espacial" className="slide columna">
          <div className="encabezado fila">
            <div>
              <h2 className="grotesk">tecnología espacial</h2>
              <p className="serif sub">miles de ingenieros</p>
            </div>
            <div className="cohete" aria-hidden="true">
              <div className="cuerpo" /><div className="llama" />
            </div>
          </div>
          <div className="caja ancha">
            <p>Durante el siglo XX se desarrollaron tecnologías que permitieron enviar satélites y seres humanos al espacio.</p>
            <p>¿Por qué fue importante?</p>
            <p>La exploración espacial impulsó el desarrollo de numerosas tecnologías científicas. Su importancia actualmente: los satélites permiten:</p>
            <ul>
              {['Comunicaciones.', 'GPS.', 'Pronóstico del clima y transmisiones internacionales.', 'Observación de la Tierra.'].map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        </section>

        <section id="eventos" className="slide split">
          <div className="titulo-grande"><h2 className="serif">eventos importantes</h2></div>
          <ol className="linea">
            {['2000-2010: expansión de Internet y revolución digital', 'Crisis financiera del 2008', 'Atentados del 11 de septiembre', 'Llegada del iPhone', 'Ascenso de China como potencia', 'Avances en genética', 'Acuerdo de París', 'Pandemia de COVID-19', 'Auge de la inteligencia artificial', 'Artemis'].map((e) => <li key={e}>{e}</li>)}
          </ol>
        </section>

        <section id="sociedad" className="slide columna">
          <h2 className="serif grande">¿cómo está organizada nuestra sociedad actual?</h2>
          <div className="dos">
            <div className="caja"><p>Nuestra sociedad se caracteriza por su complejidad y dinamismo, influenciada por factores como la tecnología, la globalización y la diversidad cultural.</p></div>
            <div className="caja"><p>Además de problemas ambientales y crisis climáticas.</p></div>
          </div>
          <div className="dos">
            <div className="caja">
              <h3 className="grotesk">características principales</h3>
              <ul>{['Tecnología y globalización', 'Sostenibilidad', 'Participación ciudadana'].map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
            <div className="caja">
              <h3 className="grotesk">cambios relevantes más importantes</h3>
              <ul>{['Ámbito laboral', 'Ámbito social y político', 'Medio ambiente', 'Tecnología', 'Economía'].map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          </div>
        </section>

        <section id="actividad" className="slide centro">
          <h2 className="grotesk gigante">¡Activity time!</h2>
          <div className="chips">
            {['Edición genética', 'Teléfonos inteligentes', 'Criptomoneda', 'Impresión 3D', 'IA'].map((c) => <span key={c} className="caja chip-i">{c}</span>)}
          </div>
        </section>

        <section id="inventores" className="slide columna">
          <h2 className="serif grande">grandes inventores <em>del siglo XXI</em></h2>
          <div className="rejilla inventores">
            {inventores.map((i) => (
              <article key={i.nombre} className="caja tarjeta-i">
                <h3 className="grotesk">{i.nombre}</h3>
                <p>{i.texto}</p>
              </article>
            ))}
          </div>
          <p className="nota">También destacan figuras como Elon Musk, Steve Jobs y Jensen Huang.</p>
        </section>

        <section id="futuro" className="slide columna">
          <h2 className="serif grande">¿qué se espera para el futuro?</h2>
          <div className="rejilla futuro">
            {futuro.map((f) => (
              <article key={f.titulo} className="caja tarjeta-i">
                <h3 className="grotesk">{f.titulo}</h3>
                <p>{f.texto}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="conclusion" className="slide centro">
          <h2 className="serif gigante">conclusión</h2>
          <div className="caja ancha">
            <p>Nuestro siglo se caracteriza por un cambio tecnológico acelerado, con innovaciones como Internet, teléfonos inteligentes, inteligencia artificial, biotecnología y energías renovables que han transformado nuestra vida diaria. Sin embargo, estos avances traen desafíos en privacidad, desigualdad, medio ambiente y uso responsable de la ciencia. El futuro requiere no solo la creación de nuevas tecnologías, sino su uso responsable y beneficioso para la sociedad. El gran desafío del siglo XXI es lograr que la innovación sea más avanzada, segura, sostenible y accesible para todos.</p>
          </div>
          <p className="nota">Gracias — {integrantes.join(' · ')}</p>
        </section>
      </main>
    </>
  )
}
