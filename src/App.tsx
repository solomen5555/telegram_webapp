
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import './App.css';
import { Header } from './component/Header/Header';
import { TxForm } from './component/TxForm/TxForm';

// const tele = window.Telegram.WebApp;

function App() {


  return (
    <TonConnectUIProvider manifestUrl="https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json"
      walletsListConfiguration={{
        includeWallets: [
          {
            appName: "safepalwallet",
            name: "SafePal",
            imageUrl: "https://s.pvcliping.com/web/public_image/SafePal_x288.png",
            aboutUrl: "https://www.safepal.com/download",
            jsBridgeKey: "safepalwallet",
            platforms: ["ios", "android", "chrome", "firefox"]
          },
          {
            appName: "tonwallet",
            name: "TON Wallet",
            imageUrl: "https://wallet.ton.org/assets/ui/qr-logo.png",
            aboutUrl: "https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",
            universalLink: "https://wallet.ton.org/ton-connect",
            jsBridgeKey: "tonwallet",
            bridgeUrl: "https://bridge.tonapi.io/bridge",
            platforms: ["chrome", "android"]
          }
        ]
      }}
      actionsConfiguration={{
        twaReturnUrl: 'https://web.telegram.org/k/#@slm5555_wapp_bot'
      }}
    >
      <div>
        <h1>Lùa gà</h1>
        <Header />
        <TxForm />

        {/* <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <div className="card">
          <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
            Show alert in telegram
          </button>
        </div> */}
      </div>


    </TonConnectUIProvider>
  )
}

export default App
