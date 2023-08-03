import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs'
import './Footer.css'
export default function Footer() {
  return (
    <footer style={{ backgroundImage: 'url(/img/footer.png' }}>
      <div className="redes">
        <a
          href="https://www.linkedin.com/in/cristina-garc%C3%ADa-679984144/"
          alt="Linkedin"
        >
          <BsLinkedin />
        </a>
        <a href="" alt="Twitter">
          <BsTwitter />
        </a>
        <a href="https://github.com/Cristina-Garcia" alt="Github">
          <BsGithub />
        </a>
      </div>
      <img src="./Logo.png" alt="logo de Org" />
      <strong>Desarrollado por Alura.</strong>
    </footer>
  )
}
