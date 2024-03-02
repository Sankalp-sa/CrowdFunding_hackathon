import React from 'react';
import Navbar from './../components/Navbar';

const MoreDetailsCampaign = () => {
    return (
        <div>
            <div>
                <Navbar />
                <div className='d-flex align-items-center justify-content-center'>
                    <div className="col-md-10">
                        <h1 className='my-5 title text-center'>Campaign Details</h1>
                        {/* Display books in form of cards */}
                        <div className="row py-5 d-flex justify-content-center">
                            <div className="col-md-4 thefront skeleton d-flex align-items-center justify-content-center">
                                <img className='' style={{ width: 520 }} src='/image.png' />
                            </div>
                            <div className="col-md-8" style={{ padding: "0% 5%" }}>
                                <h1 className='mb-2'>{ }</h1>
                                <p className='mb-2'>{ }</p>
                                <hr />
                                <p className='mb-2'>address owner : { }</p>
                                <p className='mb-2'>Title : { }</p>
                                <hr />
                                <h4 className='mb-2'>Description :</h4>
                                <p className='mb-3'>Target : { }</p>
                                <p className='mb-3'>Deadline : { }</p>
                                <p className='mb-3'>amountCollected : { }</p>
                                <hr />
                                <h4 className='mb-2'>Donators :</h4>
                                <h4 className='mb-2'>Donations :</h4>
                                <p className='mb-3'>{ }</p>
                                <hr />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoreDetailsCampaign
