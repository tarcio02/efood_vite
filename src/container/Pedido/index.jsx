import { BrowserRouter as Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { PedidoBackground, PedidoContainer } from "./styles";
import { useEffect } from "react";
import Carrinho from "../Carrinho";
import FormEntrega from "../../components/FormEntrega";
import FormPagamento from "../../components/FormPagamento";
import Concluir from "../../components/Concluir";

// export interface Props{
//     open?: boolean,
//     onClose?: (Event: React.MouseEvent<HTMLButtonElement>) => void,
// }


function Pedido({open, onClose}) {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden"; // Desativa o scroll
        } else {
            document.body.style.overflow = "auto"; // Reativa o scroll
            }
    }, [open]);

    return (
        <PedidoBackground data-is-open={open}>
            <PedidoContainer data-is-open={open}>
                <span onClick={onClose}>
                    <NavLink className="closeButton" to="/perfil"> &times;</NavLink>
                </span>
                <Routes>
                    <Route path="/" element={<Carrinho />} />
                    <Route path="/entrega" element={<FormEntrega />} />
                    <Route path="/pagamento" element={<FormPagamento />} />
                    <Route path="/concluir" element={<Concluir />} />
                </Routes>
            </PedidoContainer>
        </PedidoBackground>
    )
}

export default Pedido