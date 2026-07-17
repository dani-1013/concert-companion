import StatCard from '../components/StatCard';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Home() {

  return (
    <main>
      <section className = "hero-section">
        <div className = "hero-content">
          <h1>Track every<span style={{ color: '#a855f7' }}> concert.</span>
          <br/>Relive every<span style={{ color: '#4ade80' }}> memory.</span></h1>
          <p>The concert diary you always wished you'd kept. Log every show,
            <br/> rate every performance, and turn your live-music life into something
            <br/> you can actually look back on.</p>

          <div className = "hero-buttons">
            <Link to = "/register">
              <button className = "primary-btn">Start your diary <FaArrowRight size = {15}/></button>
            </Link>
            <button className = "secondary-btn">See how it works</button>
          </div>
        </div>
      </section>

      <section className = "features-section" id = "features">
        <div className = "features-content">
          <p><span style={{ color: '#a855f7' }}>EVERYTHING YOU NEED</span></p>
          <h1>Built for people who actually go to shows.</h1>
        </div>

        <div className = "features-cards">
          <StatCard number = "124" label = "TOTAL SHOWS" />
          <StatCard number = "88" label = "UNIQUE ARTISTS" color = "#a855f7" />
          <StatCard number = "4.2" label = "AVG RATING" />
          <StatCard number = "42" label = "VENUES" color = "#a855f7" />
        </div>
      </section>

    </main>
  );
}

export default Home;