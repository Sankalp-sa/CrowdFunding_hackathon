import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import axios from "axios";

export default function ViewCampaign() {

  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:5000/campaign/");
      setCampaigns(response.data);
      console.log(response.data);
    }

    fetchData();
  }
  , []);

  return (
    <div>
      <section id="gallery">
          <div className="container">
              <div className="row">
              {campaigns.map((campaign, index) => (
                <div className="col-md-4">
                <Card
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
