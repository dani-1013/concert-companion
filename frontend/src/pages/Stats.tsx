import { useEffect, useState } from "react";
import { getStats } from "../services/api";

type StatsData = {
    totalConcerts: number;
    totalArtists: number;
    totalVenues: number;
    totalCities: number;
    favoriteArtist: {
        name: string;
        concerts: number;
    } | null;
    averageRating: number;
};

function Stats() {
    const [stats, setStats] = useState<StatsData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadStats = async () => {
            try {
                const data = await getStats();
                setStats(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        loadStats();
    }, []);

    if (loading) {
        return <p>Loading stats...</p>;
    }

    if (!stats) {
        return <p>Unable to load stats.</p>;
    }

    return (
        <main>
            <h1>Your Concert Wrapped</h1>

            <section>
                <div>
                    <h2>{stats.totalConcerts}</h2>
                    <p>Concerts</p>
                </div>

                <div>
                    <h2>{stats.totalArtists}</h2>
                    <p>Artists</p>
                </div>

                <div>
                    <h2>{stats.totalVenues}</h2>
                    <p>Venues</p>
                </div>

                <div>
                    <h2>{stats.totalCities}</h2>
                    <p>Cities</p>
                </div>
            </section>

            <section>
                <h2>Favorite Artist</h2>

                {stats.favoriteArtist ? (
                    <>
                        <h3>{stats.favoriteArtist.name}</h3>
                        <p>
                            {stats.favoriteArtist.concerts} concert
                            {stats.favoriteArtist.concerts !== 1
                                ? "s"
                                : ""}
                        </p>
                    </>
                ) : (
                    <p>No concerts yet.</p>
                )}
            </section>

            <section>
                <h2>Average Rating</h2>
                <p>
                    {stats.averageRating > 0
                        ? `${stats.averageRating} / 5`
                        : "No ratings yet"}
                </p>
            </section>
        </main>
    );
}

export default Stats;