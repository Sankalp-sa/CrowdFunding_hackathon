import React, {useState} from 'react'
import Navbar from '../components/Navbar'

export default function CreateCampaign() {

  const [formData, setFormData] = useState({
    title: '',
    target: 0,
    deadline: '',
    image: '',
    description: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/createCampaign', {
        method: 'POST',
        headers: {  
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          owner: 'your_owner_value', // replace with the actual owner value
          ...formData,
        }),
      });

      // console.log(response)

      if (response.ok) {
        const result = await response.json();
        console.log(result); // handle success
      } else {
        const error = await response.text();
        console.error(`Error: ${error}`); // handle error
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h1 className="mb-3">Create Campaign</h1>
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="your-name" className="form-label">Title</label>
                  <input type="text" className="form-control" id="your-name" name="your-name" required onChange={handleChange}/>
                </div>
                <div className="col-md-6">
                  <label htmlFor="your-surname" className="form-label">Target</label>
                  <input type="number" className="form-control" id="your-surname" name="your-surname" required onChange={handleChange}/>
                </div>
                <div className="col-md-6">
                  <label htmlFor="your-email" className="form-label">Deadline in days</label>
                  <input type="text" className="form-control" id="your-email" name="your-email" required onChange={handleChange}/>
                </div>
                <div className="col-md-6">
                  <label htmlFor="your-subject" className="form-label">Image URL</label>
                  <input type="text" className="form-control" id="your-subject" name="your-subject" onChange={handleChange}/>
                </div>
                <div className="col-12">
                  <label htmlFor="your-message" className="form-label">Description</label>
                  <textarea className="form-control" id="your-message" name="your-message" rows={5} required defaultValue={""} onChange={handleChange}/>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-md-3">
                      <button className="btn btn-dark w-100 fw-bold" onClick={handleSubmit}>Create</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}
