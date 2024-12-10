import styled from "styled-components";
import { cores } from "../../styles";

export const ConcluirBox = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 24px;
    color: ${cores.pessego};

    h3{
        font-weight: 700;
        font-size: 16px;
    }

    p{
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
    }

    button{
        height: 24px;
        border: none;
        color: ${cores.vermelho};
        background-color: ${cores.pessego};
    }
`