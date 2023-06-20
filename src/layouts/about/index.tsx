import './about.css'

import clin from './../../assets/imagens/imagClin.jpg'

export const About = () => {
  return (
    // Sessão About//
    <section className="about" id="about">
      <div className="container">
        <h1 className="title">Sobre Nós</h1>

        <div className="box">
          <div className="about__img">
            <img src={clin} width="680px" height="580px" alt="" />
          </div>

          <div className="about__text">
            <h3>Clinica e Doutora</h3>
            <p>
              Bem-vindos à nossa clínica de estética, onde a beleza e o
              bem-estar se encontram! Aqui, oferecemos uma variedade de
              tratamentos de ponta para cuidar da sua pele, corpo e mente. Nossa
              equipe altamente qualificada e apaixonada está pronta para
              fornecer serviços personalizados e resultados excepcionais. Dos
              tratamentos faciais rejuvenescedores aos procedimentos corporais
              de contorno, nossos especialistas estão comprometidos em ajudá-lo
              a alcançar a sua melhor versão. Além disso, oferecemos serviços de
              massagem relaxante, depilação e cuidados com a pele de primeira.
              Sinta-se convidado a explorar o que nossa clínica de estética tem
              a oferecer e experimente o luxo do cuidado completo de dentro para
              fora. Você merece esse momento de autocuidado e confiança
              renovada.
            </p>

            <a href="#" className="btn">
              Leia mais
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
