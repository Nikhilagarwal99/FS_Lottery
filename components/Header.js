import { ConnectButton } from "web3uikit";

export default function Header() {
  return (
    <div>
      <div className="border-b-2 flex flex-row">
        Decentralized Lottery System
      </div>

      <ConnectButton moralisAuth={false} />
    </div>
  );
}
