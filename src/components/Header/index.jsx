import { NavLink } from "react-router-dom";
import { HeaderBar } from "./styles"
import logo from "../../assets/images/logo.svg"
import { useState } from "react"
import Pedido from "../../container/Pedido"



const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeCar = () => setIsOpen(false)

    return (
        <>
        <HeaderBar>
            <NavLink className="span" to="/">Restaurantes</NavLink >
            <img src={logo} alt="efood" ></img>
            <span className="span" onClick={() => setIsOpen(true)}>0 Produto(s) no carrinho</span>
        </HeaderBar>
        <Pedido open={isOpen} onClose={closeCar}/>
        </>
    )
    
}

export default Header
