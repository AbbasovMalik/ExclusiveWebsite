import React from 'react'
import "./about.scss"


function Aboutpage() {
    return (
        <div>
            <div id="about">
                <section id='our_story'>
                    <div className="our_story_text">
                        <h2>Our Story</h2>
                        <p>Launced in 2015, Exclusive is South Asia's premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                        <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                    </div>
                    <div className="our_story_image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS94pUnPIS7fr7LGCjetEQwERZVQ0ftm46xvQ&usqp=CAU" alt="" />
                    </div>
                </section>
            </div>

            <div id="about_cards">
                <div className="card_container">
                    <div className="cards">
                        <div className="image">
                            <i className="fa-solid fa-mobile-screen-button"></i>
                            <h3>Phones</h3>
                        </div>
                        <div className="image">
                            <i className="fa-solid fa-desktop"></i>
                            <h3>Computers</h3>
                        </div>
                        <div className="image">
                            <i className="fa-solid fa-clock"></i>
                            <h3>Smart Watches</h3>
                        </div>
                        <div className="image">
                            <i className="fa-solid fa-camera"></i>
                            <h3>Cameras</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div id="about_slider">
                <div className="slider_container">
                    <div className="images">
                    <div className="person">
                            <div className="photo">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs22fIvke5OTt4ynww1u25zQX6wI_zTIWY4Q&usqp=CAU" alt="" />
                            </div>
                            <h3>Tom Cruise</h3>
                            <p>Founder & Chairman</p>
                            <div className="icons">
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-square-instagram"></i>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                        <div className="person">
                            <div className="photo">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwBGSqlrH_sMtno4lR1e-eLNFr0RmZ_MEd5Q&usqp=CAU" alt="" />
                            </div>
                            <h3>Will Smith</h3>
                            <p>Product Designer</p>
                            <div className="icons">
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-square-instagram"></i>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                        <div className="person">
                            <div className="photo">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4K7elc5mpLCJyRAD_Uwy4-xNnu2uKW3Eo5A&usqp=CAU" alt="" />
                            </div>
                            <h3>Emma Watson</h3>
                            <p>Managing Director</p>
                            <div className="icons">
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-square-instagram"></i>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                    </div>
                    <div className="noqteler">
                        <div className="noqte"></div>
                        <div className="noqte"></div>
                        <div className="noqte"></div>
                        <div className="noqte"></div>
                        <div className="noqte"></div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Aboutpage