import './styles/App.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import globe from './assets/globe.svg'
import discord from './assets/discord.svg'
import twitter from './assets/twitter.svg'

function App() {
  return (
    <section className="parter-section">
      <span className="title">
        <h1>Our</h1>
        <h1>Partners</h1>
      </span>
      <div className='carousel-component'>
        <Carousel showStatus={false} showArrows={false}>
          <div className="col-2">
            <Partner />
            <Partner />
          </div>
          <div className="col-2">
            <Partner />
            <Partner />
          </div>
          <div className="col-2">
            <Partner />
            <Partner />
          </div>
          <div className="col-2">
            <Partner />
            <Partner />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

function Partner({ name, desc, enableVideo, links }) {
  return (
    <div className='partner'>
      <div className="cover">
        {
          (enableVideo)
            ? <iframe title='videoPlayer' id="ytplayer" type="text/html" width="640" height="360"
              src=""
              frameborder="0"></iframe>
            : <img alt='' src={links[3]} />
        }
        <div className="profile-picture">
          <img alt='' src={links[4]} />
        </div>
      </div>
      <h1 className="partner-name">
        {name}
      </h1>
      <p className="partner-desc">
        {desc}
      </p>
      <div className="parter-socials">
        <a href={links[0]}> <img src={globe} alt="" /></a>
        <a href={links[1]}><img src={discord} alt="" /></a>
        <a href={links[2]}><img src={twitter} alt="" /></a>
      </div>
    </div>
  )
}

Partner.defaultProps = {
  name: 'Dev Protocol',
  desc: "Dev Protocol is the core of the Decentralized Creator Economy, completely on- chain, 100 % composable middleware protocol.",
  enableVideo: false,
  links: ['https://discord.gg/Ph4waVh3', 'https://discord.gg/Ph4waVh3', 'https://discord.gg/Ph4waVh3','','']
}

export default App; 
