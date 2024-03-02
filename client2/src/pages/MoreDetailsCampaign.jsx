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
                                <img className='' src='' />
                            </div>
                            <div className="col-md-8" style={{ padding: "0% 5%" }}>
                                <h1 className='mb-2'>{ }</h1>
                                <p className='mb-2'>{ }</p>
                                <hr />
                                <p className='mb-2'>House : { }</p>
                                <p className='mb-2'>Blood Status : { }</p>
                                <hr />
                                <h4 className='mb-2'>Wand :</h4>
                                <p className='mb-3'>Wood : { }</p>
                                <p className='mb-3'>Core : { }</p>
                                <p className='mb-3'>Length : { }</p>
                                <hr />
                                <h4 className='mb-2'>Patronus :</h4>
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
