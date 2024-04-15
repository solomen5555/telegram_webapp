import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react";
import './Header.css';

export const Header = () => {
    const wallet = useTonWallet();
    return (
        <>
            {wallet && <>
                <div>Ví đã kết nối</div>
                <header className="header" >
                    <TonConnectButton />
                </header>
            </>}

        </>
    )
}