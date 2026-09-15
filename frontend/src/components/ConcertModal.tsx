import { useEffect, useState } from "react";
import { IoIosClose, IoIosAdd } from "react-icons/io";
import { LuMusic } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";

type ConcertModalProps = {
  onClose: () => void;

  onSubmit: (concert: {
    artist: string;
    venue: string;
    city: string;
    date: string;
  }) => Promise<void>;
};

function ConcertModal({
  onClose,
  onSubmit,
}: ConcertModalProps) {
  const [artist, setArtist] = useState("");
  const [venue, setVenue] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!artist || !venue || !city || !date) {
      return;
    }

    await onSubmit({
      artist,
      venue,
      city,
      date,
    });
  };

  return (
    <div className="modal">
      <div className="modal-container">

        <div className="modal-header">
          <button
            className="exit-button"
            onClick={onClose}
          >
            <IoIosClose />
          </button>

          <p>
            <span style={{ color: "#a855f7" }}>
              NEW ENTRY
            </span>
          </p>

          <h1>Log a concert</h1>
        </div>

        <form
          className="modal-content"
          onSubmit={handleSubmit}
        >
          <div className="artist-section">
            <div className = "artist-title">
              <p>
                <LuMusic /> Artist
              </p>
            </div>
            

            <input
              placeholder="Enter artist"
              className="artist-input"
              value={artist}
              onChange={(e) =>
                setArtist(e.target.value)
              }
              required
            />
          </div>

          <div className="venue-section">
            <div className = "venue-title">
              <p>
                <IoLocationOutline /> Venue
              </p>
            </div>
            
            <input
              placeholder="e.g. Kia Forum"
              className="venue-input"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              required
            />
          </div>

          <div className="city-section">
            <div className = "city-title">
              <p>
                <IoLocationOutline /> City
              </p>
            </div>
            
            <input
              placeholder="e.g. Los Angeles"
              className="city-input"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>

          <div className="date-section">
            <div className = "date-title">
              <p>
                <CiCalendar /> Date
              </p>
            </div>
            
            <input
              type="date"
              className="date-input"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="rating-section">
            <p>Rating</p>

            <div className="rating-stars">
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span className="rating-dash">—</span>
            </div>
        </div>

        <div className="notes-section">
            <p>Notes</p>

            <textarea
                placeholder="Best song, wildest moment, the friends you made..."
            />
        </div>

        <div className="tags-section">
            <p>Tags</p>

            <div className="tag-list">
                <button type="button">Solo</button>
                <button type="button">With friends</button>
                <button type="button">Festival</button>
                <button type="button">Opening act</button>
                <button type="button">Encore</button>
                <button type="button">Front row</button>
                <button type="button">Pit</button>
            </div>
        </div>

          <div className="modal-footer">
            <button
              type="submit"
              className="save-btn"
            >
              <IoIosAdd size={25} />
              SAVE CONCERT
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

export default ConcertModal;