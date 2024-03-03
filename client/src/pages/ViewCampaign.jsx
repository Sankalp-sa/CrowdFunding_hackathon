import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import axios from "axios";
import Navbar from '../components/Navbar';

export default function ViewCampaign() {
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                
                const response = await axios.get("https://crowdfunding-hackathon-backendnew.onrender.com/campaign/");
                setCampaigns(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <Navbar />
            <section id="gallery" style={{ padding: "5% 12%" }}>
                <div className="container">
                    <div className="row">
                        {loading ? (
                          <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
                              <h1>Gethering data from the blockchain server...</h1>
                              <div className="spinner-border my-4" role="status">
                                  <span className="visually-hidden">Loading...</span>
                              </div>
                          </div>
                        ) : (
                            campaigns.map((campaign, index) => (
                                <div className="col-md-4" key={index}>
                                    <Card
                                        id={index}
                                        owner={campaign.owner}
                                        title={campaign.title}
                                        image={campaign.image}
                                        target={campaign.target}
                                        deadline={campaign.deadline}
                                        description={campaign.description}
                                    />
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
