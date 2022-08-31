import "./About.css"
import aboutPhoto from "../img/fotoabout.png"
import englishCV from "../files/ErikAsensioEnglishCV.pdf"
import spanishCV from "../files/ErikAsensioSpanishCV.pdf"
function About() {

    return <div className="bgAbout" id="#about">
        <div className="aboutContainer">
            <div className="aboutInfo">
                <h1 className="aboutTitle">¿Who am I?</h1>
                <p className="aboutText">Hola, me llamo Erik Asensio y nací el 14/09/2004.

Soy un chico constante y ambicioso, sobretodo en el mundo laboral. Siempre he dado el 100% para conseguir mis metas y creo que voy por buen camino. 
Soy un chico divertido pero profesional, me encanta trabajar en equipo y sobretodo ayudar, considero que explicar es la mejor manera de asentar un concepto.

Sin duda siempre he querido ser desarrollador, todo empezó con 14 años cuando conocí este mundo en el instituto y desde ese momento ya he hecho mil inventos para no perder el foco. He hecho muchísimos proyectos por mi cuenta con el fin de aprender, ya que hasta los 17 años no acabé mis estudios y he podido inscribirme en un Coding Bootcamp.

A los 15 saqué mi lado emprendedor y comencé a trabajar como freelance, haciendo sitios web y e-commerce para pequeños negocios de la zona, incluso hice mis propias tarjetas ofreciéndome como desarrollador de puerta en puerta. Todo esto me sirvió para aprender por mi propia cuenta la importancia de todo lo que conlleva la parte digital de un negocio, no tan sólo para eso, sino que cada vez me gustaba más y aquí estoy, ofreciendome como Junior Full Stack Developer.

Sigo el camino del MERN Stack, conocimientos sólidos en Javascript, MongoDB, NodeJS, React.js y React Native. Interesado en el TypeScript..</p>
                <div className="aboutButtons">
                    <a href={englishCV} className="aboutButton">Download English CV</a>
                    <a href={spanishCV} className="aboutButton">Download Spanish CV</a>
                </div>
            </div>
            <div className="aboutBigImage">
                <img className="aboutImage" src={aboutPhoto} alt="ejemplo" />
            </div>
        </div>
    </div>
}

export default About