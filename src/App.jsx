import './index.css'
import Wavesurfer from './components/Wavesurfer'

function App() {

  return (
    <>
      {/* preloader */}
      <div id="preloader">
          <div id="loader" className="dots-jump">
              <div></div>
              <div></div>
              <div></div>
          </div>
      </div>


      <header className="s-header">

          <div className="row">
              <div className="header-logo">
                  <a className="site-logo smoothscroll" href="#top">
                      <img src="images/manai-logo-no-bg-txt.png" alt="Homepage" />
                  </a>
              </div>
      
              <nav className="header-nav-wrap">
                  <ul className="header-main-nav">
                  </ul>
      
                  <div className="header-cta">
                      <a href="#pricing" className="btn btn--primary header-cta__btn smoothscroll">Get The App</a>
                  </div>
              </nav> 
      
              <a className="header-menu-toggle" href="#"><span>Menu</span></a>
          </div>

      </header> 


      <section id="home" className="s-home target-section" data-parallax="scroll" data-image-src="images/hero-bg.jpg" data-natural-width={3000} data-natural-height={2000} data-position-y={'center'}>

          <div className="shadow-overlay"></div>

          <div className="home-content">

              <div className="row home-content__main">

                  <div className="home-content__left">
                      <h1>
                      Guided Manifestation Audios.
                      </h1>
      
                      <h3 style={{color: '#FFFFFFDE'}}>
                      Manai uses AI to generate guided hypnosis, affirmations, revision, and soon, visualization audios, helping you manifest your unique, ever-evolving  desires. 
                      </h3>
      
                      <div className="home-content__btn-wrap">
                          <a href="#pricing" className="btn btn--primary home-content__btn smoothscroll">
                              Get the app
                          </a>
                      </div>
                  </div>

                  <div className="home-content__right">
                      <img src="images/hero-app-screens-800.webp" srcSet="images/hero-app-screens-800.webp 1x, images/hero-app-screens-1600.webp 2x" />
                  </div> 

              </div> 

          </div> 

          <a href="#about" className="home-scroll smoothscroll">
              <span className="home-scroll__text">Scroll</span>
              <span className="home-scroll__icon"></span>
          </a> 

      </section>


      <section id="about" className="s-about target-section">

          <div className="row section-header has-bottom-sep" data-aos="fade-up">
              <div className="col-full">
                  <h1 className="display-1">
                      Manifestation Made As Easy As Listening To Music
                  </h1>
                  <p className="lead">
                      With Manai, the hardest parts are knowing what you want 
                      and relaxing deeply.
                  </p>
              </div>
          </div> {/* end section-header */}

          <div className="row wide about-desc" data-aos="fade-up">

              <div className="col-full slick-slider about-desc__slider">

                  <div className="about-desc__slide">
                      <h3 className="item-title">Ultra Personalized.</h3>

                      <p>
                      Forget one-size fits all and embrace tailor-made.
                      Manai takes your full background and exact desires
                      into account to deliver a level of personalization that resonates and transforms. 
                      </p>
                  </div>  {/* end about-desc__slide */}

                  <div className="about-desc__slide">
                      <h3 className="item-title">On-Demand.</h3>

                      <p>
                      Manai audios take an average of 6 minutes to generate. 
                      That's 240x faster than the average hypnotist. Manai also revises
                      your negative experiences on the spot, keeping your point of attraction
                      desirable.
                      </p>
                  </div>  {/* end about-desc__slide */}

                  <div className="about-desc__slide">
                      <h3 className="item-title">Affordable.</h3>

                      <p>
                      Gone are the days where only the elite could afford guided hypnosis audios. 
                      Whereas even mediocre hypnotists easily charge $150 per audio, 
                      Manai costs up to 89% less.
                      </p>
                  </div>  {/* end about-desc__slide */}

              </div> {/* end about-desc__slider */}
              
          </div> {/* end about-desc */}

      </section> {/* end s-about */}


      {/* about-how
      ================================================== */}
      <section id="about-how" className="s-about-how">

          <div className="row">
            <div className="col-full audio-bg" data-aos="fade-up">

                  <div className="shadow-overlay"></div>

                  <div className="stats">
                      <div className="item-stats">
                          <span className="item-stats__num">
                              Hear The Quality!
                          </span>
                          <span className="item-stats__title">
                              The following guided hypnosis audio was generated from the prompt 'I want to have unique and profitable ideas.'
                          </span>
                      </div> {/* end item-stats */}
                  </div>
                <Wavesurfer />

            </div> {/* end audio-bg */}
          </div>

          <div className="row process-wrap">

              <h2 className="display-2 text-center" data-aos="fade-up">Why Manifestation Audios?</h2>

              <div className="process" data-aos="fade-up">
                  <div className="process__steps block-1-2 block-tab-full group">

                      <div className="col-block step">
                          <h3 className="item-title">Effective</h3>
                          <p>Most of your manifestation power lies in your subconscious mind. This is why you can affirm and assume your desired reality on a conscious level all you want, but still get the same unwanted reality again and again. Manifestation audios plant the right ideas directly where it matters.
                          </p> 
                      </div>

                      <div className="col-block step">
                          <h3 className="item-title">Effortless</h3>
                          <p>There is an incredible amount of manifestation and mindset practices out there. While most of them can have an effect, they require a lot of effort and practice. With guided manifestation audios, you give up on all work. You just need to define what you want, relax, and listen.
                          </p> 
                      </div>
                
                      <div className="col-block step">
                          <h3 className="item-title">Enjoyable</h3>
                          <p>Not only are manifestation audios effective and effortless, they're enjoyable experiences unto themselves.
                          </p> 
                      </div>

                      <div className="col-block step">
                          <h3 className="item-title">Evidence-Based</h3>
                          <p>Most other manifestation and mindset practices only have anecdotal evidence to back them up. Hypnosis and visualization have a mountain of empirical studies that prove their impact.
                          </p> 
                      </div>  

                  </div> {/* end process__steps */}
            </div> {/* end process */}
          </div> {/* end about-how */}

      </section> {/* end s-about-how */}


      {/* features
      ================================================== */}
      <section id="features" className="s-features target-section">

          <div data-aos="fade-up">

              <div className="row">
                  <div className="col-full testimonials-header">
                      <h2 className="display-2">Experts Recommend Manai!</h2>
                  </div>
              </div>

              <div className="row testimonials">

                  <div className="col-full slick-slider testimonials__slider">

                      <div className="testimonials__slide">
                          <img src="images/avatars/user-03.jpg" alt="Author image" className="testimonials__avatar" />
                          
                          <p>Qui ipsam temporibus quisquam velMaiores eos cumque distinctio nam accusantium ipsum. 
                          Laudantium quia consequatur molestias delectus culpa facere hic dolores aperiam. Accusantium praesentium corpori.</p>

                          <div className="testimonials__author">
                              <span className="testimonials__name">Naruto Uzumaki</span>
                              <a href="#0" className="testimonials__link">@narutouzumaki</a>
                          </div>
                      </div> {/* end testimonials__slide */}

                      <div className="testimonials__slide">
                          <img src="images/avatars/user-05.jpg" alt="Author image" className="testimonials__avatar" />
                          
                          <p>Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci.
                          Nisi eaque consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus quisquam vel.</p>
                          
                          <div className="testimonials__author">
                              <span className="testimonials__name">Sasuke Uchiha</span>
                              <a href="#0" className="testimonials__link">@sasukeuchiha</a>
                          </div>
                      </div> {/* end testimonials__slide */}

                      <div className="testimonials__slide">
                          <img src="images/avatars/user-01.jpg" alt="Author image" className="testimonials__avatar" />
                          
                          <p>Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.  
                          Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas eius distinctio.</p>

                          <div className="testimonials__author">
                              <span className="testimonials__name">Shikamaru Nara</span>
                              <a href="#0" className="testimonials__link">@shikamarunara</a>
                          </div>
                      </div> {/* end testimonials__slide */}
                      
                  </div> {/* end testimonials__slider */}

              </div> {/* end testimonials */}

          </div> {/* end testimonials-wrap */}

      </section> {/* end s-features */}


      {/* pricing
      ================================================== */}
      <section id="pricing" className="s-pricing target-section">

          <div className="row section-header align-center" data-aos="fade-up">
              <div className="col-full">
                  <h1 className="display-1">
                    Subscriptions <br />
                  </h1>
                  <p className="lead">
                      Manai is a browser-based application, so you can use it without any downloads. 
                      Simply open it in Safari, Chrome, or your favorite browser. 
                      All you need is a subscription to get started.
                  </p>
              </div>
          </div> {/* end section-header */}

          <div className="row plans block-1-2 block-m-1-2 block-tab-full stack">

              <div className="col-block item-plan" data-aos="fade-up">
                  <div className="item-plan__block"> 

                      <div className="item-plan__top-part">
                          <h3 className="item-plan__title">Annual (Late Beta)</h3>
                          <s className="item-plan__price" style={{color: 'gray', fontSize: '4rem',}}>$1.100</s><br />
                          <p className="item-plan__price">$550</p><br />
                          <p className="item-plan__per">Per Year</p>
                      </div>

                      <div className="item-plan__bottom-part">
                          <ul className="item-plan__features">
                              <li>Beta Pricing For Life</li>
                              <li><span>1.000</span> Credits Per Month (8-40 Audios)</li>
                              <li>Rollover Up To 12.000 Credits</li>
                              <li>Lifetime Audio Storage In Your Manai Audio Library</li>
                          </ul>

                          <a className="btn btn--primary large full-width" href="https://manai.app/register?plan=1000_annual">Subscribe now</a>
                      </div>  
                  
                  </div>
              </div>
              {/* end item-plan */}

              <div className="col-block item-plan item-plan--popular" data-aos="fade-up">
                  <div className="item-plan__block"> 

                      <div className="item-plan__top-part">
                          <h3 className="item-plan__title">Monthly (Late Beta)</h3>
                          <s className="item-plan__price" style={{color: 'darkgray', fontSize: '4rem'}}>$110</s><br />
                          <p className="item-plan__price">$55</p><br />
                          <p className="item-plan__per">Per Month</p>
                      </div>

                      <div className="item-plan__bottom-part">
                          <ul className="item-plan__features">
                              <li>Beta Pricing For Life</li>
                              <li><span>1.000</span> Credits Per Month (8-40 Audios)</li>
                              <li>Rollover Up To 12.000 Credits</li>
                              <li>Lifetime Audio Storage In Your Manai Audio Library</li>
                          </ul>

                          <a className="btn btn--primary large full-width" href="https://manai.app/register?plan=1000_monthly">Subscribe now</a>
                      </div>
                  
                  </div>
              </div>
              {/* end item-plan */}

          </div>
          {/* end plans */}

      </section> 
      {/* end s-pricing */}


      {/* footer */}
      <footer className="s-footer footer">

          <div className="row footer__bottom">

              <div className="footer__about col-five tab-full left">

                  <h4>Our Mission.</h4>

                  <p>
                  Manai believes in the power of mindset and manifestation to bring about radical
                  change in people's lives. While we provide a powerful tool to transform mindsets
                  and manifest dreams, our mission extends beyond this as we directly
                  support manifestation influencers in educating the world. If you are an influencer 
                  and would like to be an affiliate of Manai — earning 20% recurring commissions and
                  offering discounts to your audience — apply at our <a>Trackdesk Portal</a>.

                  </p>

              </div>

              <div className="col-five md-seven tab-full right end">
                  <div className="row">

                      {/* <div className="footer__site-links col-five mob-full">
                          <h4>Site links.</h4>

                          <ul className="footer__site-links">
                              <li><a href="#home" className="smoothscroll">Intro</a></li>
                              <li><a href="#about" className="smoothscroll">About</a></li>
                              <li><a href="#features" className="smoothscroll">Features</a></li>
                              <li><a href="#pricing" className="smoothscroll">Pricing</a></li>
                              <li><a href="#download" className="smoothscroll">Download</a></li>
                              <li><a href="#0">Privacy Policy</a></li>
                          </ul>
                      </div> */}

                      <div className="footer__contact col-seven mob-full">
                          <h4>Contact.</h4>

                          {/* <p>
                          Phone: (+63) 555 1212 <br />
                          Fax: (+63) 555 0100
                          </p> */}
                          <p>
                          Need help or have a question? Contact the founder directly: <br />
                          <a href="mailto:yourstruly@kimangell.com" className="footer__mail-link">yourstruly@kimangell.com</a>
                          </p>
                      </div>

                  </div>
              </div>

              <div className="col-full ss-copyright">
                  <span>&copy; Copyright Manai 2024</span> 
                  <span>Design by <a href="https://www.styleshout.com/">styleshout</a></span>
              </div>

          </div> 
          {/* end footer__bottom  */}

          <div className="go-top">
              <a className="smoothscroll" title="Back to Top" href="#top"></a>
          </div>

      </footer>

    </>

  )
}

export default App
