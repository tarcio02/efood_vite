import styled from "styled-components";
import { cores } from "../../styles";

export const PedidoBackground = styled.div`
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    position: fixed;
    justify-content: end;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.5);
`

export const PedidoContainer = styled.div`
    padding: 32px 8px;
    height: 100%;
    width: 360px;
    background-color: ${cores.vermelho};
    transform: ${(props) => (props.isOpen ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.9s ease-in-out;
    z-index: 1001;

    .closeButton{
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: ${cores.pessego};
    text-decoration: none;
    }
`
