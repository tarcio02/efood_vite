import { CarrinhoBox } from "./styles";
import ConfirmaPedido from "../../components/ConfirmaPedido";
import CardCarrinho from "../../components/CardCarrinho";

function Carrinho() {
    return (
        <CarrinhoBox>
            <CardCarrinho />
            <CardCarrinho />
            <CardCarrinho />
            <ConfirmaPedido />
        </CarrinhoBox>
        
    )
}

export default Carrinho