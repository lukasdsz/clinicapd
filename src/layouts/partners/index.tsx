import './partners.css'

import { IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io'

import men from './../../assets/imagens/men.jpg'

// Data -> Sao os dados((informações))
const partnersData = [
  {
    name: 'Lucas',
    role: 'Programador',
    picture: men,
    socials: {
      linkendin: '',
      instagram: '',
    },
  },

  {
    name: 'k',
    role: 'Programador',
    picture: men,
    socials: {
      linkendin: '',
      instagram: '',
    },
  },

  {
    name: 'L',
    role: 'Programador',
    picture: men,
    socials: {
      linkendin: 'https://instagram.com/lukasdsz',
      instagram: '',
    },
  },

  {
    name: 'Luz',
    role: 'Programador',
    picture: men,
    socials: {
      linkendin: '',
      instagram: '',
    },
  },
]

export const Partners = () => {
  return (
    // Sessao Partners //
    <section className="partners" id="partners">
      <div className="container">
        <h2 className="title">Parceiros</h2>
        <div className="partners__box">
          {partnersData.map((partner, index) => (
            <div className="card__partners" key={index}>
              <img src={partner.picture} className="card__cover" alt="" />

              <div className="card__box">
                <div className="card__box__header">
                  <strong>{partner.name}</strong>
                  <span>{partner.role}</span>
                </div>

                <div className="card__box__socials">
                  <a
                    href={partner.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IoLogoInstagram />
                    Instagram
                  </a>
                  <a
                    href={partner.socials.linkendin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IoLogoLinkedin />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
