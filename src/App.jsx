import { Baner } from './components/BanerSection'
import { Header } from './components/Header'
import { BackgroundBanerstyled } from './styles/BackgroundBaner'

import { ResetStyled } from './styles/ResetStyles'

function App() {

  return (
    <>
      <ResetStyled/>
      <BackgroundBanerstyled>
        <Header/>
        <Baner/>
      </BackgroundBanerstyled>
      <main>

      </main>
    </>
  )
}

export default App
