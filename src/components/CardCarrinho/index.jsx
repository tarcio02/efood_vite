import { CardBoxCarrinho } from "./styles"
import pizza from "../../assets/images/pizza_modal.svg"
import lixeira from "../../assets/images/i-lixeira.svg"

function CardCarrinho() {
    return (
        <CardBoxCarrinho>
            <img src={pizza} alt="pizza"></img>
            <div>
                <h3>Pizza Marguerita</h3>
                <span>R$ 60,90</span>
                <img src={lixeira} alt="lixeira"></img>
            </div>
        </CardBoxCarrinho>
    )
}

export default CardCarrinho