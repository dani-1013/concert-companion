import { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";

type ConcertModalProps = {
    onClose: () => void;
};

function ConcertModal({ onClose }: ConcertModalProps) {

    const [artist, setArtist] = useState("");
    const [venue, setVenue] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, []);

    return ( 
        <div className = "modal">
            <div className = "modal-container">
                <div className = "modal-header">
                    <button
                    className = "exit-button"
                    onClick = {onClose}
                    >
                        <IoIosClose />
                    </button>

                    <p><span style={{ color: '#a855f7' }}>NEW ENTRY</span></p>
                    <h1>Log a concert</h1>
                </div>

                <div className = "modal-content">
                    <div className = "artist-section">
                        <p>Artist</p>
                        <input 
                        placeholder = "Enter artist"
                        className = "artist-input"
                        value = {artist}
                        onChange = {(e) => setArtist(e.target.value)}
                        required></input>
                    </div>

                    <div className = "venue-section">
                        <p>Venue</p>
                        <input 
                        placeholder = "e.g. Kia Forum"
                        className = "venue-input"
                        value = {venue}
                        onChange = {(e) => setVenue(e.target.value)}
                        required></input>
                    </div>

                    <div className = "date-section">
                        <p>Date</p>
                        <input 
                        type = "date"
                        className = "date-input"
                        value = {date}
                        onChange = {(e) => setDate(e.target.value)}
                        required></input>
                    </div>
                    
                    <p>Rating</p>
                    <p>Notes</p>
                    <p>Tags</p>
                    <p>Photo</p>
                </div>

                <div className = "modal-footer">
                    <button
                    className = "save-btn"
                    onClick = {onClose}
                    >
                        <IoIosAdd size = {25}/> SAVE CONCERT
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConcertModal;