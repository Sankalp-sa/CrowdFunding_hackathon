import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import axios from "axios";
import Navbar from '../components/Navbar';

export default function ViewCampaign() {

    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("http://localhost:5000/campaign/");
            setCampaigns(response.data);
            console.log(response.data);
        }
        fetchData();
    }, []);

  return (
    <div>
      <Navbar />
      <section id="gallery" style={{padding: "5% 12%"}}>
          <div className="container">
              <div className="row">
              {campaigns.map((campaign, index) => (
                <div className="col-md-4">
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
              ))}
              </div>
          </div>
      </section>
  </div>
  )
}
