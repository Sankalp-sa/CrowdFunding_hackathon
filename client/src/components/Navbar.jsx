import { React, useState, useEffect } from 'react';
import { ethers } from "ethers";
import { useUser } from '../context/user';
import { NavLink } from 'react-router-dom';

export default function Navbar() {

    const [errorMessage, seterrorMessage] = useState(null);
    const [defaultAccount, setdefaultAccout] = useState(null);
    const [userBalance, setuserBalance] = useState(null);

    const [connected, setConnected] = useState(false);
    const [installed, setInstalled] = useState(false);

    const isMetaMaskInstalled = () => {
        return Boolean(window.ethereum && window.ethereum.isMetaMask);
    };

    const isMetaMaskConnected = async () => {
        const { ethereum } = window;
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        return accounts && accounts.length > 0;
    };

    const initialise = async () => {
        const isConnected = await isMetaMaskConnected();
        const isInstalled = isMetaMaskInstalled();
        setConnected(isConnected);
        localStorage.setItem('connected', isConnected);
        setInstalled(isInstalled);
    };

    useEffect(() => {
        initialise();

        // Subscribe to 'accountsChanged' event
        const handleAccountsChanged = async () => {
            await initialise();
        };

        window.ethereum.on('accountsChanged', handleAccountsChanged);

        // Cleanup function to unsubscribe when the component unmounts
        return () => {
            window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        };
    }, []); // Empty dependency array to run the effect only once on mount

    const { user, setUser } = useUser();

    const getBalance = (accountAddresss) => {
        window.ethereum.request({ method: 'eth_getBalance', params: [String(accountAddresss), "latest"] })
            .then(balance => {
                console.log(ethers.utils.formatEther(balance));
                setuserBalance(ethers.utils.formatEther(balance));
            })
    }

    const accountChanged = (accountName) => {
        setdefaultAccout(accountName);
        getBalance(accountName);

        setUser(accountName);
        localStorage.setItem(
            "user",
            JSON.stringify(accountName)
        );
    }

    const connect_wallet = () => {
        try {
            if (window.ethereum) {
                window.ethereum.request({ method: "eth_requestAccounts" })
                    .then(result => {
                        // console.log(result);
                        accountChanged(result[0]);
                    })
            }
            else {
                seterrorMessage("Install MetaMask please!!!");
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img src="./logo.jpeg" alt="logo" width="50" height="50" className="rounded-circle me-3" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            {connected ? (
                                <>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/createCampaign">Create Campaign</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/viewCampaign">View Campaign</NavLink>
                                    </li>
                                </>
                            ) : (
                                <></>
                            )}

                        </ul>
                        <button className="btn btn-dark" type="submit" onClick={connect_wallet} > {connected ?
                            <>
                                <img src="https://freelogopng.com/images/all_img/1683021055metamask-icon.png" alt="user" width="30" height="30" className="rounded-circle me-3" />
                                <div className="row-md-2">
                                    {user.slice(1, 5) + "..." + user.slice(user.length - 5, user.length) + " " + userBalance + " ETH"}
                                </div>
                            </>
                            : "Connect"} </button>
                    </div>
                </div>
            </nav>

        </div>
    )
}