import { useEffect, useState } from "react";
import ConcertModal from "../components/ConcertModal";
import StatCard from "../components/StatCard";
import { FaRegChartBar } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import {
  getConcerts,
  createConcert,
  deleteConcert,
} from "../services/api";

type Concert = {
  id: string;
  artist: string;
  venue: string;
  city: string;
  date: string;
};

function Diary() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [concerts, setConcerts] = useState<Concert[]>([]);
  const [loading, setLoading] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Load concerts when the page opens
  useEffect(() => {
    const loadConcerts = async () => {
      try {
        const data = await getConcerts();
        setConcerts(data);
      } catch (error) {
        console.error("Failed to load concerts:", error);
      } finally {
        setLoading(false);
      }
    };

    loadConcerts();
  }, []);

  // Create a concert
  const handleCreateConcert = async (concert: {
    artist: string;
    venue: string;
    city: string;
    date: string;
  }) => {
    try {
      const newConcert = await createConcert(concert);

      setConcerts((current) => [newConcert, ...current]);

      closeModal();
    } catch (error) {
      console.error("Failed to create concert:", error);
    }
  };

  // Delete a concert
  const handleDeleteConcert = async (id: string) => {
    try {
      await deleteConcert(id);

      setConcerts((current) =>
        current.filter((concert) => concert.id !== id)
      );
    } catch (error) {
      console.error("Failed to delete concert:", error);
    }
  };

  return (
    <main>
      <section className="diary-section">
        <div className="diary-content">
          <h1>
            What did you
            <br />
            <span style={{ color: "#a855f7" }}>see</span> last night?
          </h1>

          <p>
            Log a show in under 10 seconds. rate it, scribble a memory,
            <br />
            and watch your live history take shape.
          </p>

          <div className="diary-buttons">
            <button
              className="primary-btn"
              onClick={openModal}
            >
              <IoIosAdd size={25} />
              LOG A CONCERT
            </button>

            <button className="secondary-btn">
              <FaRegChartBar size={17} />
              View My Stats
            </button>
          </div>
        </div>
      </section>

      <section className="numbers-section" id="features">
        <div className="numbers-content">
          <p>YOUR YEAR IN LIVE</p>
          <h1>2026 by the numbers</h1>
        </div>

        <div className="numbers-cards">
          <StatCard
            number={String(concerts.length)}
            label="TOTAL SHOWS"
          />

          <StatCard
            number={String(
              new Set(concerts.map((concert) => concert.artist)).size
            )}
            label="UNIQUE ARTISTS"
            color="#a855f7"
          />

          <StatCard
            number="—"
            label="AVG RATING"
          />

          <StatCard
            number={String(
              new Set(concerts.map((concert) => concert.venue)).size
            )}
            label="VENUES"
            color="#a855f7"
          />
        </div>
      </section>

      <section className="logged-section">
        <div className="logged-content">
          <h2>Recently Logged</h2>
        </div>

        <div className="logged-cards">
          {loading ? (
            <p>Loading concerts...</p>
          ) : concerts.length === 0 ? (
            <p>No concerts logged yet. Add your first concert!</p>
          ) : (
            concerts.map((concert) => (
              <article
                className="concert-card"
                key={concert.id}
              >
                <div>
                  <h3>{concert.artist}</h3>

                  <p>{concert.venue}</p>

                  <p>
                    {concert.city} ·{" "}
                    {new Date(concert.date).toLocaleDateString()}
                  </p>
                </div>

                <button
                  onClick={() =>
                    handleDeleteConcert(concert.id)
                  }
                >
                  Delete
                </button>
              </article>
            ))
          )}
        </div>

        <div className="trend-box">
        </div>
      </section>

      {isModalOpen && (
        <ConcertModal
          onClose={closeModal}
          onSubmit={handleCreateConcert}
        />
      )}
    </main>
  );
}

export default Diary;