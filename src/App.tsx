import { useState } from 'react'
import './App.css'
import WebApp from '@twa-dev/sdk'

// const tele = window.Telegram.WebApp;

function App() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   tele.ready();
  // }, [])

  return (
    <>
      <h1>Lùa gà</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="card">
        <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
          Show alert in telegram
        </button>
      </div>
    </>
  )
}

export default App
