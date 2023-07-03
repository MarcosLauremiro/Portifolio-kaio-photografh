import { About } from './components/About'
import { Baner } from './components/BanerSection'
import { Header } from './components/Header'
import { Photos } from './components/Photos'
import { BackgroundBanerstyled } from './styles/BackgroundBaner'
import { MainStyled } from './styles/GlobalStyled'

import { ResetStyled } from './styles/ResetStyles'

function App() {

  return (
    <>
      <ResetStyled/>
      <BackgroundBanerstyled>
        <Header/>
        <Baner/>
      </BackgroundBanerstyled>
      <MainStyled>
        <About/>
        <Photos/>
      </MainStyled>
    </>
  )
}

export default App
