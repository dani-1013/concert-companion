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
            <p>
              <LuMusic /> Artist
            </p>

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
            <p>
              <IoLocationOutline /> Venue
            </p>

            <input
              placeholder="e.g. Kia Forum"
              className="venue-input"
              value={venue}
              onChange={(e) =>
                setVenue(e.target.value)
              }
              required
            />
          </div>

          <div className="city-section">
            <p>
              <IoLocationOutline /> City
            </p>

            <input
              placeholder="e.g. Los Angeles"
              className="city-input"
              value={city}
              onChange={(e) =>
                setCity(e.target.value)
              }
              required
            />
          </div>

          <div className="date-section">
            <p>
              <CiCalendar /> Date
            </p>

            <input
              type="date"
              className="date-input"
              value={date}
              onChange={(e) =>
                setDate(e.target.value)
              }
              required
            />
          </div>

          <p>Rating</p>
          <p>Notes</p>
          <p>Tags</p>
          <p>Photo</p>

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