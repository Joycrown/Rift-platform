import React from 'react'
// import image1 from '../../';

function One(){
   
    return(
        <section className = 'part-1' id = 'blog'>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a class="navbar-brand" href="#">
                    <img src="" alt="LOGO" width="30" height="24"/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav  nav-links nav-links-tab">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-tab nav-link-mob text-white" href="#">Packages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-tab nav-link-mob text-white">About</a>
                        </li>
                        <li className="nav-item nav-move">
                            <a className="nav-link nav-link-tab nav-link-mob text-white">Contact us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-tab nav-link-mob text-white">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-tab nav-link-mob text-white">Sign In</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className= 'background-head vh-100' id = ' '>
            <div className = 'heading heading-tab'>
                <h1 className = 'text-heading text-heading-tab text-heading-mob text-white'> Automate Your<br/>     Income</h1>
                <h3 className = 'sub-text sub-text-tab sub-text-mob text-white pt-3'>Earn daily consistent profits with our<br/>
                 powerful copytrading software</h3>
                 <div className = 'pt-3'>
                    <button type="button"class="sub-btn sub-btn-tab sub-btn-mob btn btn-info text-white text-center">TRY IT FOR FREE</button>
                </div>
            </div>
        </div>
        <div className = 'background-head-mob vh-100' id = ' '>
            <div className = 'heading-mob'>
                <h1 className = 'text-heading-mob text-white'> Automate <br/> Your <br/>     Income</h1>
                <h3 className = 'sub-text-mob text-white pt-3'>Earn daily consistent profits with our<br/>
                 powerful copytrading software</h3>
                 <div className = 'pt-3'>
                    <button type="button"class="sub-btn-mob btn btn-info text-white text-center">TRY IT FOR FREE</button>
                </div>
            </div>
        </div>
    </section>
    );
}



export default One;