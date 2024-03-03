import React, { useState, useEffect } from "react";
import Navbar from "./../components/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";

const MoreDetailsCampaign = () => {
  const { id } = useParams();

  // fetch campaign details from the server
  const [campaign, setCampaign] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
        
      try {
        const response = await axios.get(
          `https://crowdfunding-hackathon-backendnew.onrender.com/campaigns/${id}`
        );
        setCampaign(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }
    fetchData();
  });

  return (
    <div>
      <Navbar />
      <div>
        <div className="d-flex align-items-center justify-content-center">
          <div className="col-md-10">
            {loading ? (
              <div
                className="d-flex flex-column justify-content-center align-items-center"
                style={{ height: "100vh" }}
              >
                <h1>Gethering data from the blockchain server...</h1>
                <div className="spinner-border my-4" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <div>
                <h1 className="my-5 title text-center">Campaign Details</h1>
                {/* Display books in form of cards */}
                <div className="row py-5 d-flex justify-content-center">
                  <div className="col-md-4 thefront skeleton d-flex align-items-center justify-content-center">
                    <img
                      className=""
                      style={{ width: 520 }}
                      src={`${campaign.image}`}
                    />
                  </div>
                  <div className="col-md-8" style={{ padding: "0% 5%" }}>
                    <p className="mb-2">address owner : {campaign.owner}</p>
                    <p className="mb-2">Title : {campaign.title}</p>
                    <hr />
                    <h4 className="mb-2">Description :</h4>
                    <p className="mb-3">Target : {campaign.target}</p>
                    <p className="mb-3">Deadline : {campaign.deadline} days</p>
                    <p className="mb-3">
                      amountCollected : {campaign.amountCollected}
                    </p>
                    <hr />
                    {/* <h4 className='mb-2'>Donators :</h4>
                                <h4 className='mb-2'>Donations :</h4>
                                <p className='mb-3'>{  }</p>
                                <hr /> */}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreDetailsCampaign;
