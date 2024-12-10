import { NavLink } from "react-router-dom";
import { ConfirmaPedidoBox } from "./styles";

function ConfirmaPedido() {
    return (
        <ConfirmaPedidoBox>
            <div className="valor">
                <span>Valor Total</span>
                <span>R$ 182,70</span>
            </div>
            <div className="link">
                <NavLink className="button" to="/entrega">
                    Continuar com a entrega
                </NavLink>
            </div>
        </ConfirmaPedidoBox>
    )
}

export default ConfirmaPedido