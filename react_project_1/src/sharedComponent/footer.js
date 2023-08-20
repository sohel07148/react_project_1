// import logo from './logo.svg';
import "../App.css";

import footer_input from "../assets/img/footer-input.png";


function Footer({}) {
  return (
    <>
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-12">
                    <div class="about-section">
                        <h2>Instacoach</h2>
                        <p>Book private lessons, virtual coaching, and college mentoring sessions with NCAA,
                            professional, and Olympic athletes to help you get better everyday.</p>

                        <div class="linkes">
                            <div class="row">
                                <div class="col-4">
                                    <div class="about">
                                        <h4>About us</h4>
                                        <a href="#">About</a>
                                        <a href="#">FAQ</a>
                                        <a href="#">Policy</a>
                                        <a href="#">Terms</a>
                                        <a href="#">Blogs</a>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="Support">
                                        <h4>Support</h4>
                                        <a href="#">Contact</a>
                                        <a href="#">Give us feedback</a>
                                    </div>
                                </div>
                                <div class="col-4"></div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-12">
                    <div class="list-section">
                        <h2>Join our mailing list</h2>
                        <div class="box">
                            <p>Joing our mailing list to get the latest news and updates.</p>
                            <div class="input">
                                <input type="email" value="Enter your email" name="" id=""/>
                                <img src={footer_input} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>


    </>
  );
}

export default Footer;
