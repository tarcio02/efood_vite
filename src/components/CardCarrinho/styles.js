import styled from "styled-components";
import { cores } from "../../styles"

export const CardBoxCarrinho = styled.div`
    display: flex;
    gap: 8px;
    padding: 8px;
    background-color: ${cores.pessego};
    width: 344px;
    height: 100px;

    img{
        width: 80px;
    }

    div{
        display: flex;
        flex-direction: column;
        position: relative;
        gap: 16px;
        width: 100%;

        h3{
            font-size: 18px;
            font-weight: 900;
        }

        span{
            font-size: 14px;
            font-weight: 400;
        }

        img{
            position: absolute;
            right: 0;
            bottom: 0;
            width: 16px;
        }
    }
`