import styled from 'styled-components';

export const HeaderStyled = styled.header`
    width: 100%;
    max-width: 75rem;
    height: 10vh;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: sticky;
    top: 0;
    z-index: 10;

    background-color: transparent;

    h1{
        font-size: 1.75rem;
    }
    nav{

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        a{
            
        }
    }
`