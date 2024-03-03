import { React, useState } from 'react';
import { ethers } from "ethers";
import { useUser } from '../context/user';
import { NavLink } from 'react-router-dom';

export default function Navbar() {

    const [errorMessage, seterrorMessage] = useState(null);
    const [defaultAccount, setdefaultAccout] = useState(null);
    const [userBalance, setuserBalance] = useState(null);

    const { user, setUser } = useUser();

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
                    <img style={{ width: 50 }} src='/logo.jpeg' alt='logo' />


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/createCampaign">Create Campaign</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/viewCampaign">View Campaign</NavLink>
                            </li>

                        </ul>
                        <button className="btn btn-dark" type="submit" onClick={connect_wallet} > {user?.length > 0 ?
                            <>
                                <img src="https://freelogopng.com/images/all_img/1683021055metamask-icon.png"
                                    alt="user" width="30" height="30" className="rounded-circle me-3" />
                                {user.slice(1, 5) + "..." + user.slice(user.length - 5, user.length)}
                            </>
                            : "Connect"}
                        </button>
                    </div>
                </div>
            </nav>

        </div>
    )
}
