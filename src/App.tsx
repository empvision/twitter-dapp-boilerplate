import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Web3AuthCore } from "@web3auth/core";
import { CHAIN_NAMESPACES } from '@web3auth/base';
import { OpenloginAdapter } from '@web3auth/openlogin-adapter';

const web3auth = new Web3AuthCore({
  chainConfig: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: "0x13881",
    rpcTarget: "",
  },
});
web3auth.init();

const clientId = "BJ1GywgsBPybwLwTbiRGG3dhporV-wY56e_7waOG_UmwDCGr4UMqX9_qdGTU6auP4VnMLglS0KtU-EQzrUXzOaU";
const openloginAdapter = new OpenloginAdapter({
  adapterSettings: {
    clientId,
    network: "testnet",
    uxMode: "popup",
    whiteLabel: {
      name: "Twitter Dapp",
      logoLight: "<hosted-logo-image-link>",
      logoDark: "<hosted-logo-image-link>",
      defaultLanguage: "en",
      dark: true
    },
    loginConfig: {
      jwt: {
        name: "Custom Auth Login",
        typeOfLogin: "twitter",
        verifier: "TwitterApp",
        clientId: "ApHEvEwe3uARMV88MQcmPPMCfgDMP44t"
      }
    }
  }
});
web3Auth.configureAdapter(openloginAdapter);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
