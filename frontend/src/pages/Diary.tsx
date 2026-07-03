import StatCard from '../components/StatCard';
import { FaRegChartBar } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";

function Diary() {

  return (
    <main>
      <section className = "hero-section">
        <div className = "hero-content">
          <h1>Track every<span style={{ color: '#a855f7' }}><br/> concert.</span>
          <br/>Relive every<span style={{ color: '#4ade80' }}><br/> memory.</span></h1>
          <p>Log shows, rate performances, and watch<br/> your live music history take place.</p>

          <div className = "hero-buttons">
            <button className = "primary-btn"><IoIosAdd size = {25}/> LOG A CONCERT</button>
            <button className = "secondary-btn"><FaRegChartBar size = {17}/> View My Stats</button>
          </div>
        </div>
      </section>

      <section className = "numbers-section">
        <div className = "numbers-content">
          <p>YOUR YEAR IN LIVE</p>
          <h1>2024 by the numbers</h1>
        </div>

        <div className = "numbers-cards">
          <StatCard number = "124" label = "TOTAL SHOWS" />
          <StatCard number = "88" label = "UNIQUE ARTISTS" color = "#a855f7" />
          <StatCard number = "4.2" label = "AVG RATING" />
          <StatCard number = "42" label = "VENUES" color = "#a855f7" />
        </div>
      </section>

      <section className = "logged-section">
        <div className = "logged-content">
          <h2>Recently Logged</h2>
        </div>

        <div className = "logged-cards">

        </div>

        <div className = "trend-box">

        </div>
      </section>


    </main>
  );
}

export default Diary;