import { React, useState } from 'react';
import { ethers } from "ethers";

export default function Navbar() {

    const [errorMessage, seterrorMessage] = useState(null);
    const [defaultAccount, setdefaultAccout] = useState(null);
    const [userBalance, setuserBalance] = useState(null);

    const getBalance = (accountAddresss) => {
        window.ethereum.request({ method: 'eth_getBalance', params: [String(accountAddresss), "latest"] })
            .then(balance => {
                // console.log(ethers.formatEther(balance));
                setuserBalance(ethers.formatEther(balance));
            })
    }

    const accountChanged = (accountName) => {
        setdefaultAccout(accountName);
        getBalance(accountName);
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
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <button className="btn btn-dark" type="submit" onClick={connect_wallet} >Connect</button>
                    </div>
                </div>
            </nav>

        </div>
    )
}
