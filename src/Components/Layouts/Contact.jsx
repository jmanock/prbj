import React from 'react';

const Contact = () =>{
  return(
    <div className='container'>
      <h3 className='text-center'>Contact Info</h3>
      <section>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Please Remember:</h5>
            <p className='card-text'>Please remember that we are volunteers. Your patience and understanding are sincerely appreciated. We do our best to respond to inquiries as fast as possible -- but it may not be as fast as you wish. If we have not responded to you in a reasonable period of time, we'd like to believe it is because we have been abducted by aliens! Truthfully, it is more likely that things fell through the cracks. Please love us anyway and ask again!</p>
          </div>
        </div>
        <div className='row'>

          <div className='col-sm'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Call Us:</h5>
                <a className='card-text' href='tel:4073024497'>407.302.4497</a>
              </div>
            </div>
          </div>
          <div className='col-sm'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Email Us:</h5>
                <a href='mailto:info@petrescuebyjudy.com' className='card-text'>info@petrescuebyjudy.com</a>
              </div>
            </div>
          </div>
          <div className='col-sm'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Fax Us:</h5>
                <p className='card-text'>407.302.4496</p>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm'>
            <div className='card'>
              <div className='card-body text-center'>
                <h5 className='card-title'>Write Us:</h5>
                <p className='card-text'>Pet Rescue By Judy <br /> 401 South Laurel Avenue <br /> Sanford, FL 32771</p>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Few more points of contact:</h5>
                <a className='card-text' href='mailto:foster@petrescuebyjudy.com'>Fostering Pets foster@petrescuebyjudy.com</a> <br />
                <a className='card-text' href='mailto:volunteer@petrescuebyjudy.com'>Volunteering volunteer@petrescuebyjudy.com</a> <br />
                <a className='card-text' href='mailto:admin@petrescuebyjudy.com'>Website Issues admin@petrescuebyjudy.com</a> <br />
                <a className='card-text' href='mailto:events@petrescuebyjudy.com'>Inquiries about Events events@petrescuebyjudy.com</a>
              </div>
            </div>
          </div>
          <div className='col-sm'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Inquiries about Events</h5>
                <p className='card-text'>If you are interested in having PRBJ at an event, please include the following information in your email:</p>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>Event Name</li>
                  <li className='list-group-item'>Event Date</li>
                  <li className='list-group-item'>Event Time to Time</li>
                  <li className='list-group-item'>Event Location</li>
                  <li className='list-group-item'>Event Type (Adoption, Donation Drive, Fundraiser, Community, College)</li>
                  <li className='list-group-item'>Event Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact;
