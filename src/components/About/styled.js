import styled from 'styled-components';

export const AboutStyled = styled.section`
    width: 100%;
    max-width: 75rem;
    height: 100vh;

    margin: 0 auto;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    h1{
        font-size: 1.75rem;
        font-weight: 900;
    }
    h2{
        font-size: 1.375rem;
        margin-bottom: 1.5rem;
    }
    p{
        font-size: 1rem;
        font-weight: 300;
        
        text-align: center;
    }
`