import styled from "styled-components";
import vector from "../../assets/images/Vector.svg"


export const HomeContainer = styled.div`

    .topo {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 100%;
        background-image: url(${vector});
        padding: 40px;
        gap: 120px;

        img{
            width: 125px;
        }

        p{
            text-align: center;
            width: 544px;
            font-weight: 900;
            font-size: 24px;
        }
    }
`