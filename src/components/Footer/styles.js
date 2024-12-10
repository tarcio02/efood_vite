import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterBar = styled.div`
    display: grid;
    grid-template-rows: repeat(3, auto);
    justify-items: center;
    text-align: center;
    height: 296px;
    padding: 40px;
    background-color: ${cores.pessego};

    .logo {
        height:56px ;
        width: 120px;
    }

    .social {
        display: flex;
        justify-content: space-between;
        align-self: center;
        height:24px;
        width: 88px;
    }

    p{
        display: flex;
        align-items: end;
    }
`
