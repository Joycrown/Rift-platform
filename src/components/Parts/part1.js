import React from 'react'
// import image1 from '../../';

function One(){
   
    return(
        <section className = 'part-1' id = 'blog'>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src="" alt="LOGO" width="30" height="24"/>
                    </a>
                 </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav nav-links">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Packages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Contactus</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">SignIn</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className= 'background-head vh-100' id = ' '>
            <div className = 'heading' >
                <h1 className = 'text-heading text-white'> Automate Your<br/> Income </h1>
                <h3 className = 'sub-text text-white pt-3'>Earn daily consistent profits with our<br/> powerful copytrading software</h3>
            </div>
            {/* <div className = 'sub-heading'>
                <h3 className = 'sub-text text-white'>Earn daily consistent profits with our<br/> powerful copytrading software</h3>
            </div> */}

        </div>
    </section>
    );
}



export default One;