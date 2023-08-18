// import logo from './logo.svg';
import "./App.css";
import ads from "./assets/img/ads.png";
import Travel_Map from "./assets/img/travel_map.png";
import hero1 from "./assets/img/hero-1.png";
import hero2 from "./assets/img/hero-2.png";
import hero3 from "./assets/img/hero-3.png";
import hero4 from "./assets/img/hero-4.png";
import hero5 from "./assets/img/hero-5.png";
import hero6 from "./assets/img/hero-6.png";
import menu2 from "./assets/img/menu.png";
import Header from "./sharedComponent/header";
import card_1 from "./assets/img/card-img-1.png";
import card_star from "./assets/img/card-img-star.png";
import card_2 from "./assets/img/card-img-2.png";
import card_3 from "./assets/img/card-img-3.png";
import card_4 from "./assets/img/card-img-4.png";
import card_new from "./assets/img/card-img-new.png";
import student_1 from "./assets/img/card-student-1.png";
import student_2 from "./assets/img/card-student-2.png";
import student_3 from "./assets/img/card-student-3.png";
import coach_1 from "./assets/img/card-coach-1.png";
import coach_2 from "./assets/img/card-coach-2.png";
import coach_3 from "./assets/img/card-coach-3.png";
import group from "./assets/img/Group 6.png";
import Footer from "../src/sharedComponent/footer";

function App() {
  return (
    <>
      <Header />

      <div class="ads">
        <div class="container d-flex justify-content-center align-items-center">
          <a href="#" class="mx-auto">
            Jion our mailing list & receive <span class="bold">10% off</span>{" "}
            your first lesson
          </a>
          <a href="#" class="ms-auto">
            <img src={ads} alt="" />
          </a>
        </div>
      </div>

      <div class="hero-section">
        <div class="container">
          <div class="img">
            <img class="hero-one" src={hero1} alt="" />
            <img class="hero-two" src={hero2} alt="" />
            <img class="hero-three" src={hero3} alt="" />
            <img class="hero-four" src={hero4} alt="" />
            <img class="hero-five" src={hero5} alt="" />
            <img class="hero-six" src={hero6} alt="" />
          </div>
          <div class="text">
            <h1>
              Train with <span class="bold">ELITE ATHLETES</span>
            </h1>
            <p>
              Book private lessons, virtual coaching, and college mentoring
              sessions with NCAA, professional and Olympic athletes to help you
              get better everyday.
            </p>
          </div>

          <div class="find-slide">
            <h3>Find a perfect coach</h3>
            <div class="slide">
              <div class="row">
                <div class="col-lg-6">
                  <div class="Category">
                    <div class="Category-img">
                      <img src={menu2} alt="" />
                      <h6>Category</h6>
                    </div>
                    <p>Type sport name you like</p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="Location">
                    <div class="Location-img">
                      <img src={Travel_Map} alt="" />
                      <h6>Location</h6>
                    </div>
                    <p>Enter address or Zip</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <div class="Featured-section">
        <div class="container">
            <h3>Featured Coaches</h3>
            <div class="row">
                <div class="col-3">
                    <div class="card">
                        <img class="card-img-top" src={card_1} alt="Card image cap"/>
                        <div class="card-body">
                            <div class="line-1">
                                <p>Palo Alto, CA</p>
                                <img src={card_star} alt="" />
                            </div>
                            <h2 class="card-title">Name Surname</h2>
                            <div class="line-2">
                                <a href="#">Polo</a>
                                <p>Attacker</p>
                            </div>
                            <hr/>
                            <p class="card-text">Stanford🌲 - NCAA National Champion 2019 🏆 </p>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card">
                        <img class="card-img-top" src={card_2} alt="Card image cap"/>
                        <div class="card-body">
                            <div class="line-1">
                                <p>Palo Alto, CA</p>
                                <img src={card_star} alt=""/>
                            </div>
                            <h2 class="card-title">Name Surname</h2>
                            <div class="line-2">
                                <a href="#">Baseball</a>
                                <p>Infield</p>
                            </div>
                            <hr/>
                            <p class="card-text">Stanford🌲 - NCAA National Champion 2019 🏆 </p>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card">
                        <img class="card-img-top" src={card_3} alt="Card image cap"/>
                        <div class="card-body">
                            <div class="line-1">
                                <p>Palo Alto, CA</p>
                                <img src={card_star} alt=""/>
                            </div>
                            <h2 class="card-title">Name Surname</h2>
                            <div class="line-2">
                                <a href="#">Soccer</a>
                                <p>Attacker</p>
                            </div>
                            <hr/>
                            <p class="card-text">Stanford🌲 - NCAA National Champion 2019 🏆 </p>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card">
                        <img class="card-img-top" src={card_4} alt="Card image cap"/>
                        <div class="card-body">
                            <div class="line-1">
                                <p>Palo Alto, CA</p>
                                <img src={card_new} alt="" />
                            </div>
                            <h2 class="card-title">Name Surname</h2>
                            <div class="line-2">
                                <a href="#">Tennis</a>
                                <p></p>
                            </div>
                            <hr/>
                            <p class="card-text">Stanford🌲 - NCAA National Champion 2019 🏆 </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="work-section">
        <div class="container">
            <h2>How does Instacoach work?</h2>
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                        aria-selected="true">For Students</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                        aria-selected="false">For Coaches</button>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                    tabindex="0">
                    <div class="student">
                        <div class="row">
                            <div class="col-4">
                                <div class="card">
                                    <div class="head">
                                        <img src={student_1} alt=""/>
                                        <h2>Search</h2>
                                    </div>
                                    <p>Find a skilled D1 or pro athlete who can coach you in achieving your desired
                                        goals, whatever they are!</p>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card">
                                    <div class="head">
                                        <img src={student_2} alt=""/>
                                        <h2>Book</h2>
                                    </div>
                                    <p>Select your coach, the day, and finally time in just a few clicks. We will send a
                                        follow up confirmation for your booking.</p>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card">
                                    <div class="head">
                                        <img src={student_3} alt=""/>
                                        <h2>Improve</h2>
                                    </div>
                                    <p>Get ready to train with your coach and be sure to watch your post session video
                                        recapping your session and letting you know what drills to work on in between
                                        your sessions!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                    tabindex="0">
                    <div class="coach">
                        <div class="row">
                            <div class="col-4">
                                <div class="card">
                                    <div class="head">
                                        <img src={coach_1} alt=""/>
                                        <h2>Create your profile</h2>
                                    </div>
                                    <p>Upload your intro video and profile picture, set your availability and rates and
                                        your profile will go live.</p>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card">
                                    <div class="head">
                                        <img src={coach_2} alt=""/>
                                        <h2>Accept bookings</h2>
                                    </div>
                                    <p>Review coaching requests in your community and approve them at your discretion.
                                    </p>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card">
                                    <div class="head">
                                        <img src={coach_3} alt=""/>
                                        <h2>Receive payment</h2>
                                    </div>
                                    <p>We guarantee secure payments directly to your bank account 24 hours after you
                                        upload your post session video.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    {/* <div class="slider">
        <div class="container">
            <div data-slick='{"slidesToShow": 4, "slidesToScroll": 4}' class="responsive">
                <div class="water">
                    <img src={card_1} alt=""/>
                    <h3>Water Polo</h3>
                </div>
                <div class="football">
                    <img src={card_3} alt=""/>
                    <h3>Footbal</h3>
                </div>
                <div class="beach">
                    <img src="./assets/img/beach.png" alt=""/>
                    <h3>Beach Volleyball</h3>
                </div>
                <div class="rowing">
                    <img src="./assets/img/rain.png" alt=""/>
                    <h3>Rowing</h3>
                </div>
                <div class="baseball">
                    <img src={card_2} alt=""/>
                    <h3>Baseball</h3>
                </div>
                <div class="tennis">
                    <img src={card_4} alt=""/>
                    <h3>Tennis</h3>
                </div>
            </div>
        </div>
    </div> */}


<div class="Join-section">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="text">
                        <h2>Join Instacoach!</h2>
                        <p>Earn upwards of $2,500 per month - set your own rate and schedule.</p>
                        <p>Earn flexibly and help people reach their goals!</p>
                        <button class="btn"> Become a coach</button>
                    </div>
                </div>
                <div class="col-6">
                    <div class="img">
                        <img src={group} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>



<Footer />


    </>
  );
}

export default App;
