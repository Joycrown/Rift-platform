import React from 'react';

// import image1 from '../images/Group 26.png';
// import image2 from '../images/Group 25.png';
// import image3 from '../images/Group (1).png';
// import FAQ from './FAQ';




function Two(){
    
    return(
        <section className = 'section-2H text center' id=''>
          <div className = 'justify-content-center' >
              <h2 className = 'text-heading2 text-center'>PASSIVE INCOME AT YOUR FINGER TIPS</h2>
              <h3 className = 'sub-text2 text-center pt-2'>No matter who you are or what you do, you  can step into a <br/> life of automated and secure income</h3>
          </div>
          <div className = 'container justify-content-center pt-5'>
              <div className = 'row justify-content-center'>
                  <div className = 'col-3'>
                     <div className = "">
                        <div class="card" >
                            <img src= './images/unsplash_5GJOVvLRSFE.pn' class="img2" alt=''/>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            </div>
                        </div>
                  </div>
                  <div className = 'col-3'>
                     <div className = "life-2">
                        <h3 className = 'life-text' >Entreprenuer</h3>
                     </div>
                  </div>
                  
                  <div className = 'col-3'>
                     <div className = "life-3">
                        <h3 className = 'life-text' >Undergraduate</h3>
                     </div>
                  </div>
                  <div className = 'col-3'>
                     <div className = "life-4">
                        <h3 className = 'life-text' >Unemployed</h3>
                     </div>
                  </div>
                </div>
            </div>
            <div className = 'pt-5'>
                <button type="button"class="sub-btn2 btn btn-info text-white text-center">START YOUR 14 DAYS FREE TRAIL</button>
            </div>
        </section>


    );
}



export default Two;