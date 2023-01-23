import "./presentation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const Presentation = () => {
  return (
    <div className="presentation">
              <div className="presentationFirstText">
              <h1>Felice di conoscerti.</h1>
              <p className="presentationParagraph">Mi chiamo Gianluca e sono appassionato di Web Development, Web Design, creatività e comunicazione digitale. La mia passione per lo sviluppo web comincia nel 2018 e da allora non ho mai smesso di studiare e imparare. Sono naturalmente curioso e le novità, al contrario di spaventarmi, mi entusiasmano. Qui di seguito trovi un po' d'informazioni in più.</p>
              </div>
              <div className="columnWrapper">
              <div className="column">
              <div className="svgContainer">
              <FontAwesomeIcon icon={faCode} size="lg"/></div>
                <h1>Developer</h1>
                <p>Mi piace trovare soluzioni ai problemi e vedere il risultato delle mie idee materializzarsi sulla pagina.</p>
                <p className="stackTitle">Tecnologie e linguaggi</p>
                <p>HTML, CSS, Javascript, React, Bootstrap, Git/Github, PHP, Wordpress, Next.js, Vercel</p>
              </div>
              <div className="column">
              <div className="svgContainer">
              <FontAwesomeIcon icon={faLayerGroup} size="lg"/></div>
              <h1>Designer</h1>
                <p>Un sito che mi piace è un sito pulito, chiaro e in cui vengono valorizzate le interazioni del cliente.</p>
                <p className="stackTitle">Tecnologie e linguaggi</p>
                <p>Photoshop, Illustrator, Figma, Hotjar, Wordpress, Elementor, Copywriting, Ableton, Sound Editing</p>

              </div>
              <div className="column">
              <div className="svgContainer">
              <FontAwesomeIcon icon={faBook} size="lg"/></div>
              <h1>Soft Skills</h1>
                <p>Nelle mie esperienze lavorative ho dimostrato velocità di apprendimento e massimo impegno per raggiungere i risultati.</p>
                <p className="stackTitle">Soft Skills</p>
                <p>Gestione dello stress, lavoro di squadra, precisione, velocità di apprendimento, curiosità, attenzione ai desideri del cliente ed empatia</p>


              </div>
              </div>
      </div>
  )
}

export default Presentation