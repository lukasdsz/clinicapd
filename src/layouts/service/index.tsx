import './service.css'

import lp from './../../assets/imagens/imagLP.jpg'
import vent from './../../assets/imagens/imagVent.jpg'
import massag from './../../assets/imagens/Massag.jpg'
import gess from './../../assets/imagens/imageGess.jpg'

export const Service = () => {
  return (
    // Sessao Service //
    <section className="service" id="service">
      <div className="container">
        <h2 className="title">Serviço</h2>
        <div className="owl-carousel">
          <div className="service__box">
            <img src={lp} alt="" />
            <h3 className="box-title">Limpeza de Pele</h3>
            <p className="text">
              A limpeza de pele é um procedimento estético que envolve a remoção
              de impurezas, células mortas e comedões da pele. O processo inclui
              etapas como limpeza superficial, vaporização, extração de cravos e
              espinhas, aplicação de máscaras e hidratação. O objetivo é
              promover uma pele mais limpa, renovada e saudável, além de
              melhorar a absorção de produtos de cuidados da pele.
            </p>

            <div className="card-links">
              <a href="#" className="btn">
                Leia mais
              </a>
            </div>
          </div>

          <div className="service__box">
            <img src={vent} alt="" />
            <h3 className="box-title">Ventosa terapia</h3>
            <p className="text">
              A ventosa terapia é um tratamento terapêutico que envolve a
              aplicação de copos de vidro ou de plástico na pele, criando vácuo.
              Isso estimula a circulação sanguínea, relaxa os músculos, promove
              a liberação de toxinas e alivia a tensão. Os copos são aplicados
              em áreas específicas do corpo, e o vácuo criado aumenta o fluxo
              sanguíneo e energético, proporcionando benefícios terapêuticos.
            </p>

            <a href="#" className="btn">
              Leia mais
            </a>
          </div>

          <div className="service__box">
            <img src={massag} alt="" />
            <h3 className="box-title">Massagem</h3>
            <p className="text">
              A massagem é uma técnica terapêutica que envolve a manipulação dos
              tecidos moles do corpo, como músculos e tendões, por meio de
              movimentos rítmicos e aplicação de pressão. Isso ajuda a relaxar
              os músculos, aliviar a tensão, melhorar a circulação sanguínea e
              promover o bem-estar geral. A massagem pode ser realizada de
              diferentes formas, como massagem sueca, massagem desportiva,
              massagem tailandesa, entre outras, cada uma com suas técnicas
              específicas.
            </p>

            <a href="#" className="btn">
              Leia mais
            </a>
          </div>

          <div className="service__box">
            <img src={gess} alt="" />
            <h3 className="box-title">Gesso terapia</h3>
            <p className="text">
              A gesso terapia é um tratamento estético que envolve a aplicação
              de bandagens de gesso nas áreas do corpo que se deseja modelar ou
              tonificar. As bandagens são mergulhadas em água e aplicadas sobre
              a pele, criando uma compressão suave. Essa técnica ajuda a reduzir
              medidas, melhorar a aparência da celulite, modelar o corpo e
              estimular a circulação sanguínea. O gesso é deixado no corpo por
              um determinado período de tempo para obter os resultados
              desejados.
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
