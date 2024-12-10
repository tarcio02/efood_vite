import styled from "styled-components";
import { cores } from "../../styles";

export const ConfirmaPedidoBox = styled.div`
    margin-top: 24px;

    .valor{
        display: flex;
        justify-content: space-between;
        color: ${cores.pessego};

        span{
            font-size: 14px;
            font-weight: 700;
        }
    }

    .link {
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        background-color: ${cores.pessego};
        width: 100%;
        height: 24px;
        font-size: 14px;
        font-weight: 700;
        margin-top: 16px;

        .button{
            color: ${cores.vermelho};
            text-decoration: none;
            font-size: 14px;
            font-weight: 700;
        }
    }
`