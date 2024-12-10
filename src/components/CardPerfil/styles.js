import styled from "styled-components";
import { cores } from "../../styles";

export const CardBoxPerfil = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px;
    background-color: ${cores.vermelho};
    color: ${cores.pessego};

    img{
        width: 100%;
    }

    .descricao{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: start;
        gap: 4px;
    }

    h3{
        font-weight: 900;
        font-size: 16px;
    }

    p{
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
    }

    button{
        background-color: ${cores.pessego};
        color: ${cores.vermelho};
        width: 100%;
        height: 24px;
        border: none;
        cursor: pointer;
    }
`