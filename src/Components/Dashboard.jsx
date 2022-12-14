import React, { useState } from "react";
import Particle from "./Particle";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import {TruncateAddress} from "./../truncateAddress"
const Dashboard = () => {
  const [amount, setAmount] = useState(0);
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();
  return (
    <div>
      <div className="z-0 relative">
        <Particle />
        
      </div>
      <div className="z-40 flex flex-row justify-center items-center content-center mt-36">
        <div
          className="rounded border-2 rounded-xl border-slate-300 p-10 flex flex-col drop-shadow-lg opacity-100"
          style={{ width: "900px" }}
        >
          <div className="flex flex-row justify-evenly">
            {}
            <button
              onClick={() => {
                if (!isConnected) {connect()}
                else {
                    disconnect()
                }
              }}
              className="text-slate-100 text-sm	font-medium tracking-wide rounded-lg p-2 border-2 bg-orange-600"
            >
                {
                    !isConnected
                    ?
                    "Connect Metamask Wallet"
                    :
                    TruncateAddress(address)
                }
              
            </button>
            <button className="text-slate-100 text-sm	font-medium tracking-wide rounded-lg p-2 border-2 bg-pink-700">
              Connect Polkadot JS Wallet
            </button>
          </div>
          <div className="border-2 rounded-xl border-fuchsia-800 p-10 mt-5 w-full">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col justify-center content-center items-center">
                <div className="text-lg text-slate-300 font-normal">
                  Asset Locked on Ethereum
                </div>
                <div className="text-slate-50	text-2xl font-semibold">
                  {" "}
                  <span className="text-fuchsia-800">150</span> ETH
                </div>
              </div>
              <div className="flex flex-col justify-center content-center items-center">
                <div className="text-lg text-slate-300 font-normal">
                  Total Circulation in Substrate
                </div>
                <div className="text-slate-50	text-2xl font-semibold">
                  <span className="text-fuchsia-800">150</span> ETH
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full p-10 mt-4">
            <div className="flex flex-col w-96 justify-center content-center items-center self-center">
              <input
                name="amount"
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.valueAsNumber);
                }}
                type="number"
                min="1"
                defaultValue={10}
                className="py-1 px-4 font-Inter flex rounded-md block w-full border border-zinc-400/50 py-1 px-2 text-base shadow-sm focus:outline-transparent focus:ring focus:ring-opacity-50 disabled:text-slate-300"
              />
            </div>
            <div className="flex flex-row justify-evenly mt-3">
              <button className="px-6 py-1 font-Inter text-slate-50 bg-purple-800 flex font-medium border-2 border-purple-700 rounded-md">
                Deposit
              </button>
              <button className="px-6 py-1 font-Inter text-slate-50 bg-purple-800 flex font-medium border-2 border-purple-700 rounded-md">
                Withdraw
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
