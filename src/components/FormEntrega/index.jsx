import { NavLink } from "react-router-dom";
import { FormBox } from "./styles";

function FormEntrega() {
    return (
        <FormBox>
            <h3>Entrega</h3>
            <div className="form">
                <label>Quem irá receber</label>
                <input type="text"/>
                <label>Endereço</label>
                <input type="text"/>
                <label>Cidade</label>
                <input type="text"/>
                <div className="number">
                    <div className="num">
                        <label>Cep</label>
                        <input type="number"/>
                    </div>
                    <div className="num">
                        <label>Número</label>
                        <input type="text"/>
                    </div>
                </div>
                <label>Complemento (opcional)</label>
                <input type="text"/>
            </div>
            <div className="btn">
                <NavLink className="button" to="/pagamento">Continuar com o pagamento</NavLink>
                <NavLink className="button" to="/">Voltar para o carrinho</NavLink>
            </div>
        </FormBox>
    )
}

export default FormEntrega