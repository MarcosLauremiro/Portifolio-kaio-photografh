import { HeaderStyled } from './styled'

export const Header = () => {
    return(
        <HeaderStyled>
            <h1>Kaio</h1>

            <nav>
                <a href="">Sobre mim</a>
                <a href="">Fotos</a>
                <a href="">Contato</a>
            </nav>
        </HeaderStyled>
    )
}