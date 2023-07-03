import styled from 'styled-components';
import photo from '../../assets/photo.jpg'

export const PhotosStyled = styled.section`
    width: 100%;
    max-width: 1200px;
    height: 100vh;

    margin: 0 auto;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ul{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        li{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 300px;
            height: 300px;

            background-image: url(${photo});
            background-position: center;
            background-size: cover;

            div{
                display: none;

                h1{
                    font-size: 16px;
                }
                p{
                    font-size: 10px;
                    font-weight: 300;
                }
            }
            &:hover{
                div{
                    display:flex;
                    text-align: center;
                    justify-content: center;
                    flex-direction: column;

                    width: 100%;
                    height: 100%;
                    
                    background-color: rgba(25, 25, 25, 0.35);

                    cursor: pointer;
                }
            }
        }
    }
`