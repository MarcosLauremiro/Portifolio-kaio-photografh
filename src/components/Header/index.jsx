import { HeaderStyled } from './styled'

export const Header = () => {
    return(
        <HeaderStyled>
            <h1>Kaio</h1>

            <nav>
                <a href="#about">Sobre mim</a>
                <a href="#photos">Fotos</a>
                <a href="#contact">Contato</a>
            </nav>
        </HeaderStyled>
    )
}