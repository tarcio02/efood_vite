import { FooterBar } from "./styles"
import logo from "../../assets/images/logo.svg"
import instagram from "../../assets/images/i-instagran.svg"
import facebook from "../../assets/images/i-facebook.svg"
import twiter from "../../assets/images/i-twitter.svg"

function Footer() {
  return (
    <FooterBar>
      <img className="logo" src={logo} alt="efood"/>
      <div className="social">
        <img src={instagram} alt="efood"/>
        <img src={facebook} alt="efood"/>
        <img src={twiter} alt="efood"/>
      </div>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos,
        a responsabilidade pela entrega, qualidade dos produtos 
        é toda do estabelecimento contratado. 
      </p>
    </FooterBar>
  )
}

export default Footer
