import React from 'react'
import Navbar from '../components/Navbar'

export default function HomePage() {
  return (
      <>
        <Navbar />
        <div className="homepage-container">
            <div className="background-image">
                <img src="https://cdn.gencraft.com/prod/user/475ca48f-a694-4554-a60a-710607132775/4e635d23-7499-4362-9bc7-10cec52cee33/image/image0_0.jpg?Expires=1709543777&Signature=HZIrX0UGPVKZisIzO2f39~mUKGwVI5ADBg01Q0j~gqYvtEQ9VyvdB4r7awkxK7cu0MHsNey~lNvmkt5uJ9DbBRUEJ-bbNrqEupBY1CzxUEbm-Kp0CGlyUQROmQNYwGh-nQCRACZaJG~UbZNqdfgGNEhj~PK9AN0B0m-~4sQt0Ehww8LTYV250-UB6v8U~I2zfkqSlILmGyPOOZ93PtiVHJHLYSX-u8TVrb0TfOG0vBhy1P7BNE8BRI-mSwSgvuHedRixKFA2~x7wiXRd73bgOK4cNowgr3dOiq~TnEqbox3iOP0VrsS9bGz9GRQ4ktNKy4sIfNyj0ef9pxQxFzizTg__&Key-Pair-Id=K3RDDB1TZ8BHT8" style={{opacity: "65%"}} alt="Background" />
            </div>
            <div className="overlay">
                <div className="content">
                    <h1> Welcome to the CrowdFunding Website </h1>
                    <p>Empower your projects with blockchain-based crowdfunding, where transparency and security are paramount. Harness the decentralized nature of blockchain to connect creators directly with backers, ensuring trust and integrity in fundraising.</p>
                </div>
            </div>
        </div>
    </>
    );
};