import { NavLink } from "react-router-dom";
import { FormPagamentoBox } from "./styles";

function FormPagamento() {
    return (
        <FormPagamentoBox>
            <h3>Pagamento - Valor a pagar R$ 190,90</h3>
            <div className="form">
                <label>Nome no cartão</label>
                <input type="text"></input>
                <div className="info">
                    <div className="divInput numCard">
                        <label>Número do cartão</label>
                        <input type="number"></input>
                    </div>
                    <div className="divInput">
                        <label>CVV</label>
                        <input type="number"></input>
                    </div>
                </div>
                <div className="info">
                    <div className="divInput">
                        <label>Mês de vencimento</label>
                        <input type="text"></input>
                    </div>
                    <div className="divInput">
                        <label>Ano de vencimento</label>
                        <input type="text"></input>
                    </div>
                </div>
            </div>
            <div className="btn">
                <NavLink className="button" to="concluir">Finalizar pagamento</NavLink>
                <NavLink className="button" to="entrega">Voltar para a edição de entrega</NavLink>
            </div>
        </FormPagamentoBox>
    )
}

export default FormPagamento