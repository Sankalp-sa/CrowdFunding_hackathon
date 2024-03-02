import React from 'react'
import Card from '../components/Card'

export default function ViewCampaign() {
  return (
    <div>
      <section id="gallery">
          <div className="container">
              <div className="row">
                  {campaigns.map((campaign, index) => (
                      <div className="col-lg-4 mb-4" key={index}>
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
