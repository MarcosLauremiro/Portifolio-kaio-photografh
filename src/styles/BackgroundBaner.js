import styled from 'styled-components';

import backgroundBaner from '../assets/fundo.jpg'

export const BackgroundBanerstyled = styled.div`
    width: 100%;
    height: calc(100vh);

    background-image: url(${backgroundBaner});
    background-position: center;
    background-size: cover;
`