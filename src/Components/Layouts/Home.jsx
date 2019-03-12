import React from 'react';
import Calendar from '../Calendar/Calendar';

const Home = () =>{
  return(
    <div className='container'>
      <section>
        <p>Come Visit us at our location in SANFORD directly behind the Paw Park Dog Park</p>
        <p>We are open MONDAY ~ SUNDAY from 1:00 pm - 4:00 pm</p>
      </section>
      <section>
        <p>We are at CAPACITY and unable to take in any dogs or cats, with the EXCEPTION of pets adopted from PRBJ.</p>
        <p>PLEASE spay or neuter your pets!</p>
      </section>
      <section>
        <Calendar />
      </section>
    </div>
  )
}

export default Home;
