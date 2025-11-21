// src/CompetitionPage.js
import React from "react";
import "./competition.css";

const CompetitionPage = () => {
  return (
    <div className="pitch-bg">
      <div className="phone-frame">
        {/* Top header */}
        <header className="cp-header">
          <div className="cp-logo-circle">⚽</div>
          <div>
            <h1 className="cp-title">MoroSport – Competition & Strategy</h1>
            <p className="cp-subtitle">
              Football super-app for Morocco: play, organise & follow amateur sport.
            </p>
          </div>
        </header>

        {/* Sticky nav */}
        <nav className="cp-nav">
          <a href="#map">Competition map</a>
          <a href="#swot">SWOT</a>
          <a href="#why">Why MoroSport wins</a>
          <a href="#compare">Comparison chart</a>
        </nav>

        <main className="cp-main">
          {/* SECTION 1 – COMPETITION MAP */}
          <section id="map" className="cp-section">
            <div className="cp-section-tag">Slide 1</div>
            <h2>1. Competition Map</h2>
            <p className="cp-section-text">
              Existing apps cover **parts** of the experience, but no one combines
              play, live coverage and the Moroccan ecosystem in one place.
            </p>

            <div className="cp-map-grid">
              <div className="cp-map-legend">
                <span className="pill-yes">● Strong</span>
                <span className="pill-mid">● Partial</span>
                <span className="pill-no">● Missing</span>
              </div>

              <div className="cp-map-row cp-map-row--head">
                <div className="cp-map-cell">App</div>
                <div className="cp-map-cell">Play / organise</div>
                <div className="cp-map-cell">Follow / live</div>
                <div className="cp-map-cell">Marketplace</div>
                <div className="cp-map-cell">Morocco focus</div>
              </div>

              <div className="cp-map-row">
                <div className="cp-map-cell cp-app-name">Chi Match</div>
                <div className="cp-map-cell"><span className="dot dot-yes" />Strong</div>
                <div className="cp-map-cell"><span className="dot dot-no" />Missing</div>
                <div className="cp-map-cell"><span className="dot dot-no" />Missing</div>
                <div className="cp-map-cell"><span className="dot dot-mid" />Some</div>
              </div>

              <div className="cp-map-row">
                <div className="cp-map-cell cp-app-name">Score’n’co</div>
                <div className="cp-map-cell"><span className="dot dot-no" />Missing</div>
                <div className="cp-map-cell"><span className="dot dot-yes" />Strong</div>
                <div className="cp-map-cell"><span className="dot dot-mid" />Limited</div>
                <div className="cp-map-cell"><span className="dot dot-no" />Not MA</div>
              </div>

              <div className="cp-map-row">
                <div className="cp-map-cell cp-app-name">Playtomic</div>
                <div className="cp-map-cell"><span className="dot dot-mid" />Rackets</div>
                <div className="cp-map-cell"><span className="dot dot-no" />Missing</div>
                <div className="cp-map-cell"><span className="dot dot-yes" />Strong</div>
                <div className="cp-map-cell"><span className="dot dot-no" />Not MA</div>
              </div>

              <div className="cp-map-row">
                <div className="cp-map-cell cp-app-name">Flashscore / Sofascore</div>
                <div className="cp-map-cell"><span className="dot dot-no" />Missing</div>
                <div className="cp-map-cell"><span className="dot dot-yes" />Strong</div>
                <div className="cp-map-cell"><span className="dot dot-no" />Missing</div>
                <div className="cp-map-cell"><span className="dot dot-no" />Global only</div>
              </div>

              <div className="cp-map-row cp-map-row--moro">
                <div className="cp-map-cell cp-app-name">MoroSport</div>
                <div className="cp-map-cell"><span className="dot dot-yes" />Super-app</div>
                <div className="cp-map-cell"><span className="dot dot-yes" />Live & media</div>
                <div className="cp-map-cell"><span className="dot dot-yes" />Referees, coaches…</div>
                <div className="cp-map-cell"><span className="dot dot-yes" />Built for Morocco</div>
              </div>
            </div>
          </section>

          {/* SECTION 2 – SWOT */}
          <section id="swot" className="cp-section">
            <div className="cp-section-tag">Slide 2</div>
            <h2>2. SWOT Analysis – MoroSport</h2>
            <div className="cp-swot-grid">
              <div className="cp-swot-box cp-swot-strengths">
                <h3>Strengths</h3>
                <ul>
                  <li>Unifies play, organise and follow in one app.</li>
                  <li>Designed for Moroccan culture, women and men.</li>
                  <li>Field booking + live media + marketplace.</li>
                  <li>Mobile-first UX with football-game feeling.</li>
                </ul>
              </div>
              <div className="cp-swot-box cp-swot-weaknesses">
                <h3>Weaknesses</h3>
                <ul>
                  <li>Early-stage product; needs adoption.</li>
                  <li>Requires partnerships with fields & clubs.</li>
                  <li>Live coverage depends on community content.</li>
                </ul>
              </div>
              <div className="cp-swot-box cp-swot-opportunities">
                <h3>Opportunities</h3>
                <ul>
                  <li>World Cup 2030 momentum for Morocco.</li>
                  <li>Rapid growth of women’s and youth football.</li>
                  <li>Digitalisation of cities, academies and clubs.</li>
                  <li>Expansion to other sports and countries.</li>
                </ul>
              </div>
              <div className="cp-swot-box cp-swot-threats">
                <h3>Threats</h3>
                <ul>
                  <li>Global apps could decide to focus on Morocco.</li>
                  <li>Regulation around payments / data.</li>
                  <li>Low internet connectivity in some areas.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION 3 – WHY MOROSPORT WINS */}
          <section id="why" className="cp-section">
            <div className="cp-section-tag">Slide 3</div>
            <h2>3. Why MoroSport Wins</h2>
            <p className="cp-section-text">
              MoroSport connects the match on the field with the match on the phone.
            </p>

            <div className="cp-why-grid">
              <div className="cp-why-card">
                <h3>⚽ One app, full journey</h3>
                <p>
                  Players find teammates, create teams, book fields, play the game
                  and instantly share live scores, clips and stats.
                </p>
              </div>
              <div className="cp-why-card">
                <h3>🇲🇦 Built for Morocco</h3>
                <p>
                  Supports neighborhood leagues, Ramadan tournaments, academies and
                  mixed / women’s teams instead of generic global content.
                </p>
              </div>
              <div className="cp-why-card">
                <h3>📊 Ecosystem for clubs & cities</h3>
                <p>
                  Dashboards for fields, clubs and municipalities to follow usage,
                  bookings and participation in real time.
                </p>
              </div>
              <div className="cp-why-card">
                <h3>🧬 Future-proof</h3>
                <p>
                  Modular design: start with football, then unlock basketball,
                  futsal, volleyball and more without changing the core experience.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 4 – COMPARISON CHART */}
          <section id="compare" className="cp-section">
            <div className="cp-section-tag">Slide 4</div>
            <h2>4. Feature Comparison</h2>
            <p className="cp-section-text">
              At a glance: what each app offers today and how MoroSport stands out.
            </p>

            <div className="cp-compare-table">
              <div className="cp-compare-row cp-compare-head">
                <div className="cp-compare-cell">Feature</div>
                <div className="cp-compare-cell">Chi Match</div>
                <div className="cp-compare-cell">Score’n’co</div>
                <div className="cp-compare-cell">Playtomic</div>
                <div className="cp-compare-cell">MoroSport</div>
              </div>

              {[
                ["Player & team matchmaking", "✅", "❌", "⚠️ (limited sports)", "✅"],
                ["Field booking in-app", "✅", "❌", "✅", "✅ + split payment"],
                ["Live scores & timeline", "❌", "✅", "❌", "✅"],
                ["Photos, clips & recap cards", "❌", "⚠️ basic", "❌", "✅ auto-generated"],
                ["Club / academy pages", "❌", "✅", "❌", "✅ Moroccan clubs"],
                ["City & federation dashboards", "❌", "✅ (France)", "❌", "✅ Morocco-first"],
                ["Marketplace (referees, coaches…)", "❌", "❌", "⚠️ for padel", "✅"],
                ["Women & mixed teams", "⚠️ partial", "⚠️ partial", "⚠️", "✅ core focus"],
                ["Multi-sport roadmap", "❌ football only", "⚠️ some sports", "⚠️ rackets", "✅ super-app vision"],
              ].map((row, i) => (
                <div className="cp-compare-row" key={i}>
                  <div className="cp-compare-cell cp-feature-name">{row[0]}</div>
                  <div className="cp-compare-cell">{row[1]}</div>
                  <div className="cp-compare-cell">{row[2]}</div>
                  <div className="cp-compare-cell">{row[3]}</div>
                  <div className="cp-compare-cell cp-moro-highlight">{row[4]}</div>
                </div>
              ))}
            </div>
          </section>

          <footer className="cp-footer">
            MoroSport · Concept demo – Competition & strategy view
          </footer>
        </main>
      </div>
    </div>
  );
};

export default CompetitionPage;
