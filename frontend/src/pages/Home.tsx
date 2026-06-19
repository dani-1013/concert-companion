function Home() {
  return (
    <section className = "hero-section">
      <div className = "hero-content">
        <h1>Track every<span style={{ color: '#a855f7' }}> concert.</span>
        <br/>Relive every<span style={{ color: '#4ade80' }}> memory.</span></h1>
        <p>Log shows, rate performances, and watch your live music history take place.</p>
      </div>

      <div className = "hero-buttons">
        <button className = "primary-btn">+ Log a Concert</button>
        <button className = "secondary-btn">View My Stats</button>
      </div>
    </section>
  );
}

export default Home;