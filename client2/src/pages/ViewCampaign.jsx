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
                  
              </div>
          </div>
      </section>
  </div>
  )
}
