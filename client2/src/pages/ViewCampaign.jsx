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
  }
  , []);

  return (
    <div>

      <Navbar />

      <section id="gallery">
          <div className="container">
              <div className="row">
              {campaigns.map((campaign, index) => (
                  <div key={index}>
                      <h2>{campaign.title}</h2>
                      <p>Owner: {campaign.owner}</p>
                      <p>Description: {campaign.description}</p>
                      <p>Target: {campaign.target}</p>
                      <p>Deadline: {new Date(campaign.deadline * 1000).toLocaleDateString()}</p>
                      <p>Amount Collected: {campaign.amountCollected}</p>
                      {/* Render other campaign details as needed */}
                  </div>
              ))}
              </div>
          </div>
      </section>
  </div>
  )
}
