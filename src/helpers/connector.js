import { InjectedConnector } from '@web3-react/injected-connector';


export const injected = new InjectedConnector({
    supportedChainIds: [1, 4, 31337, 43114, 56, 250, 137, 1285, 1284,]
});
