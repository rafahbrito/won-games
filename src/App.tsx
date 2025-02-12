import { useState } from 'react'
import * as S from './styles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <S.Wrapper>
      <h1>Vite + React</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p>Click on the Vite and React logos to learn more</p>
    </S.Wrapper>
  )
}

export default App
