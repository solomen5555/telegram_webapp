import { SendTransactionRequest, useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";
import './TxForm.css';

// In this example, we are using a predefined smart contract state initialization (`stateInit`)
// to interact with an "EchoContract". This contract is designed to send the value back to the sender,
// serving as a testing tool to prevent users from accidentally spending money.
const defaultTx: SendTransactionRequest = {
    // The transaction is valid for 10 minutes from now, in unix epoch seconds.
    validUntil: Math.floor(Date.now() / 1000) + 600,
    messages: [

        {
            // The receiver's address.
            address: 'UQAhPqaTREK9uybKn6oWPNNxUKkY1FJWU3M6UxcDeY5JhlCV',
            // Amount to send in nanoTON. For example, 0.005 TON is 5000000 nanoTON.
            amount: '1',
            // (optional) State initialization in boc base64 format.
            stateInit: 'te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==',
            // (optional) Payload in boc base64 format.
            payload: 'te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g==',
        },



    ],
};

export function TxForm() {

    // const [tx, setTx] = useState(defaultTx);

    const wallet = useTonWallet();

    const [tonConnectUi] = useTonConnectUI();

    // const onChange = useCallback((value: InteractionProps) => {
    //     setTx(value.updated_src as SendTransactionRequest)
    // }, []);

    return (
        <div className="send-tx-form">
            <h3>Configure and send transaction</h3>

            {/* <ReactJson theme="ocean" src={defaultTx} onEdit={onChange} onAdd={onChange} onDelete={onChange} /> */}

            {wallet ? (
                <button onClick={() => tonConnectUi.sendTransaction(defaultTx)}>
                    Send transaction
                </button>
            ) : (
                <button onClick={() => tonConnectUi.openModal()}>
                    Connect wallet to send the transaction
                </button>
            )}
        </div>
    );
}
