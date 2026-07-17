import { useState } from "react";
import ConcertModal from "../components/ConcertModal";
import StatCard from '../components/StatCard';
import { FaRegChartBar } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";

function Diary() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main>
      <section className = "diary-section">
        <div className = "diary-content">
          <h1>What did you
          <br/><span style={{ color: '#a855f7' }}>see</span> last night?</h1>
          <p>Log a show in under 10 seconds. rate it, scribble a memory,<br/> and watch your live history take shape.</p>

          <div className = "diary-buttons">
            <button 
            className = "primary-btn"
            onClick = {openModal}
            >
              <IoIosAdd size = {25}/> LOG A CONCERT
            </button>
            <button className = "secondary-btn"><FaRegChartBar size = {17}/> View My Stats</button>
          </div>
        </div>
      </section>

      <section className = "numbers-section" id = "features">
        <div className = "numbers-content">
          <p>YOUR YEAR IN LIVE</p>
          <h1>2024 by the numbers</h1>
        </div>

        <div className = "numbers-cards">
          <StatCard number = "67" label = "TOTAL SHOWS" />
          <StatCard number = "69" label = "UNIQUE ARTISTS" color = "#a855f7" />
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

      {isModalOpen && (
        <ConcertModal onClose = {closeModal} />
      )}

    </main>

  );
}

export default Diary;