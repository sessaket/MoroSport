// src/App.js
import React, { useState } from "react";
import "./App.css";

const COMPETITORS = [
  {
    id: "chimatch",
    name: "Chi Match",
    country: "Morocco",
    logo: "/images/chimatch-logo.png",
    screenshot: "/images/chimatch-screen.png",
    description:
      "Football app that helps players find teammates, opponent teams and book fields. Includes booking calendar and tools for field owners.",
    hasPlay: "yes",
    hasFollow: "no",
    multiSport: "no",
    womenMen: "limited",
    hasBooking: true,
    strengths: [
      "Perfect matchmaking for players and teams",
      "Online field booking and calendar for owners",
      "Good B2B tools for venue management"
    ],
    missing: [
      "No live match feed (goals, cards, photos, recap)",
      "No club / academy / city public pages",
      "No tools for fans or media to follow games",
      "Football only, not multi-sport",
      "Women’s football not clearly highlighted"
    ],
    screens: [
      "Marketing landing page with CTA and feature sections",
      "Player app home with cards: Matchmaking, Opponent teams, Venue booking, Ranking",
      "Sign-up and player profile with preferred position & skills",
      "Owner dashboard with booking calendar and reservations list"
    ]
  },
  {
    id: "scorenco",
    name: "Score’n’co",
    country: "France / Europe",
    logo: "/images/scorenco-logo.png",
    screenshot: "/images/scorenco-screen.png",
    description:
      "Community app to follow amateur & professional sport live with scores, commentary and club pages.",
    hasPlay: "no",
    hasFollow: "yes",
    multiSport: "partial",
    womenMen: "generic",
    hasBooking: false,
    strengths: [
      "Live scores and text commentary for many amateur clubs",
      "Club pages with fixtures, results and standings",
      "Multi-sport (football, rugby, basketball, handball, etc.)"
    ],
    missing: [
      "No way to organise games or find players",
      "No field booking or payments",
      "Primarily focused on France, not Morocco",
      "No ecosystem tools for referees, videographers or venue partners"
    ],
    screens: [
      "Fan home: favourite teams, upcoming games, latest scores",
      "Team page: fixtures, results, standings, squad",
      "Match live screen: score, timeline of events, community comments",
      "Search by club / city / sport"
    ]
  },
  {
    id: "playtomic",
    name: "Playtomic",
    country: "Global (mainly Europe)",
    logo: "/images/playtomic-logo.png",
    screenshot: "/images/playtomic-screen.png",
    description:
      "Global app for racket sports (especially padel). Used to book courts, join matches and track player level.",
    hasPlay: "yes",
    hasFollow: "no",
    multiSport: "rackets",
    womenMen: "generic",
    hasBooking: true,
    strengths: [
      "Very strong court booking UX for padel & tennis",
      "Open matches / matchmaking based on level",
      "Player ratings and statistics",
      "Club management tools (POS, activities, academies)"
    ],
    missing: [
      "Not focused on football or Moroccan amateur sport",
      "No live media or match coverage layer",
      "No city / federation dashboards",
      "No special focus on women & youth community stories"
    ],
    screens: [
      "Explore: map + list of nearby clubs and courts",
      "Booking flow: select date, time, court and pay",
      "Open match details with slots and player levels",
      "Profile with rating history and match stats"
    ]
  },
  {
    id: "flashscore",
    name: "Flashscore",
    country: "Global",
    logo: "/images/flashscore-logo.png",
    screenshot: "/images/flashscore-screen.png",
    description:
      "Live scores and results app covering thousands of competitions and sports worldwide.",
    hasPlay: "no",
    hasFollow: "yes",
    multiSport: "yes",
    womenMen: "generic",
    hasBooking: false,
    strengths: [
      "Extremely fast live scores and notifications",
      "Huge coverage of leagues and sports",
      "Detailed match info: line-ups, odds, stats"
    ],
    missing: [
      "No amateur Moroccan football or neighbourhood leagues",
      "No tools to organise games or book fields",
      "No community photos or local recaps",
      "Not designed for women/youth community building"
    ],
    screens: [
      "Live scores list filtered by sport & competition",
      "Match details with events timeline and stats",
      "League table and fixtures list",
      "Notifications settings for favourite teams"
    ]
  },
  {
    id: "sofascore",
    name: "Sofascore",
    country: "Global",
    logo: "/images/sofascore-logo.png",
    screenshot: "/images/sofascore-screen.png",
    description:
      "Live score and advanced stats app with ratings, heatmaps and deep analytics for many sports.",
    hasPlay: "no",
    hasFollow: "yes",
    multiSport: "yes",
    womenMen: "generic",
    hasBooking: false,
    strengths: [
      "Very rich statistics and analytics",
      "Player and team ratings with visualisations",
      "Multi-sport coverage with detailed data"
    ],
    missing: [
      "No local amateur competitions for Morocco",
      "No booking, matchmaking or payments",
      "Too data-heavy for casual neighbourhood players",
      "No dedicated feature set for women & youth participation"
    ],
    screens: [
      "Match page with stats, line-ups, ratings and heatmaps",
      "Team page with form, fixtures, table and squad",
      "Player page with rating history and profile",
      "Discover page for trending matches and players"
    ]
  },
  {
    id: "matchy",
    name: "Matchy.ma",
    country: "Morocco",
    logo: "/images/matchy-logo.png",
    screenshot: "/images/matchy-screen.png",
    description:
      "Local Moroccan platform to book pitches, manage facilities and find partners to play.",
    hasPlay: "yes",
    hasFollow: "no",
    multiSport: "limited",
    womenMen: "generic",
    hasBooking: true,
    strengths: [
      "Built specifically for Moroccan sports facilities",
      "Online pitch booking and time-slot management",
      "Helps players find partners for games"
    ],
    missing: [
      "No live match coverage or media feed",
      "No multi-sport ecosystem for referees, coaches, videographers",
      "No women & men community story telling",
      "No city / federation dashboards"
    ],
    screens: [
      "Home choosing role: player or facility owner",
      "Facility search and booking flow",
      "Find partners / players screen",
      "Owner management view for reservations"
    ]
  }
];

function Pill({ type, children }) {
  return <span className={`pill pill-${type}`}>{children}</span>;
}

function CapabilityDot({ value }) {
  if (value === "yes") return <Pill type="yes">✅ Strong</Pill>;
  if (value === "no") return <Pill type="no">❌ Missing</Pill>;
  if (value === "partial") return <Pill type="mid">⚠️ Partial</Pill>;
  if (value === "limited") return <Pill type="mid">⚠️ Limited</Pill>;
  if (value === "rackets") return <Pill type="mid">🎾 Rackets only</Pill>;
  if (value === "generic") return <Pill type="mid">🌍 Generic</Pill>;
  if (value === "yes-mix") return <Pill type="yes">⭐ Mixed</Pill>;
  return null;
}

function App() {
  const [showVision, setShowVision] = useState(false);

  return (
    <div className="page">
      {/* HEADER */}
      <header className="header">
        <div className="header-logo">⚽</div>
        <div className="header-text">
          <h1>MoroSport – Competition Map</h1>
          <p>
            What each existing app really does, what is missing, and where
            MoroSport fits in the Moroccan sports ecosystem.
          </p>
        </div>
        <div className="header-actions">
          <button
            className="vision-btn"
            onClick={() => setShowVision((v) => !v)}
          >
            {showVision ? "Hide MoroSport – Full Vision" : "Show MoroSport – Full Vision"}
          </button>
        </div>
      </header>

      {/* SUMMARY TABLE */}
      <section className="card">
        <div className="card-title-row">
          <h2>1. High-level comparison</h2>
          <span className="card-caption">
            Play / organise, follow / watch, multi-sport roadmap and women & men
            support.
          </span>
        </div>

        <div className="summary-table">
          <div className="summary-row summary-head">
            <div>App</div>
            <div>Play / organise</div>
            <div>Follow / watch</div>
            <div>Multi-sport</div>
            <div>Women & men</div>
          </div>

          {COMPETITORS.map((c) => (
            <div key={c.id} className="summary-row">
              <div className="summary-name">{c.name}</div>
              <div>
                <CapabilityDot value={c.hasPlay} />
              </div>
              <div>
                <CapabilityDot value={c.hasFollow} />
              </div>
              <div>
                {c.multiSport === "yes" && <Pill type="yes">⭐ Yes</Pill>}
                {c.multiSport === "no" && <Pill type="no">❌ No</Pill>}
                {c.multiSport === "partial" && (
                  <Pill type="mid">⚠️ Some sports</Pill>
                )}
                {c.multiSport === "rackets" && (
                  <Pill type="mid">🎾 Rackets only</Pill>
                )}
                {c.multiSport === "limited" && (
                  <Pill type="mid">⚠️ Limited</Pill>
                )}
              </div>
              <div>
                {c.womenMen === "yes" && (
                  <Pill type="yes">⭐ Yes (women & men)</Pill>
                )}
                {c.womenMen === "limited" && (
                  <Pill type="mid">⚠️ Limited</Pill>
                )}
                {c.womenMen === "generic" && (
                  <Pill type="mid">🌍 Generic</Pill>
                )}
                {c.womenMen === "no" && <Pill type="no">❌ No</Pill>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DETAIL CARDS */}
      <section className="card">
        <div className="card-title-row">
          <h2>2. Each app in detail</h2>
          <span className="card-caption">
            Description, what it does well, what is missing for the MoroSport
            vision, and typical screens.
          </span>
        </div>

        <div className="grid">
          {COMPETITORS.map((c) => (
            <article key={c.id} className="app-card">
              <div className="app-card-header">
                <div className="app-card-main">
                  {c.logo ? (
                    <div className="app-logo">
                      <img src={c.logo} alt={c.name} />
                    </div>
                  ) : (
                    <div className="app-logo app-logo-fallback">
                      {c.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h3>{c.name}</h3>
                    <span className="app-country">{c.country}</span>
                  </div>
                </div>

                {c.screenshot && (
                  <div className="app-screen-thumb">
                    <img src={c.screenshot} alt={`${c.name} screen`} />
                  </div>
                )}
              </div>

              <p className="app-desc">{c.description}</p>

              <div className="app-cap-row">
                <span className="cap-label">Play / organise: </span>
                <CapabilityDot value={c.hasPlay} />
              </div>
              <div className="app-cap-row">
                <span className="cap-label">Follow / watch: </span>
                <CapabilityDot value={c.hasFollow} />
              </div>
              <div className="app-cap-row">
                <span className="cap-label">Multi-sport: </span>
                {c.multiSport === "yes" && <Pill type="yes">⭐ Yes</Pill>}
                {c.multiSport === "partial" && (
                  <Pill type="mid">⚠️ Some sports</Pill>
                )}
                {c.multiSport === "rackets" && (
                  <Pill type="mid">🎾 Racket sports only</Pill>
                )}
                {c.multiSport === "no" && <Pill type="no">❌ No</Pill>}
              </div>

              <div className="app-section">
                <h4>What it does well</h4>
                <ul>
                  {c.strengths.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>

              <div className="app-section app-missing">
                <h4>What is missing for MoroSport</h4>
                <ul>
                  {c.missing.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>

              <div className="app-section">
                <h4>Main screen types</h4>
                <ul>
                  {c.screens.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MOROSPORT FULL VISION SECTION (toggle) */}
      {showVision && (
        <section className="card morosport-vision">
          <div className="card-title-row">
            <h2>MoroSport – Full Vision</h2>
            <span className="card-caption">
              All-in-one sports super-app for Morocco: play, follow, compete,
              train, watch and buy in one place.
            </span>
          </div>

          <div className="vision-grid">
            <div className="vision-block">
              <h3>🎯 Who is it for?</h3>
              <ul>
                <li>Amateur players (women & men)</li>
                <li>Kids & youth in schools and academies</li>
                <li>Clubs, coaches, referees, gyms and stadium owners</li>
                <li>Fans who follow local games and tournaments</li>
                <li>eSports players and school teams</li>
              </ul>
            </div>

            <div className="vision-block">
              <h3>⚽ Sports & eSports</h3>
              <ul>
                <li>Football first, then basketball, volleyball, tennis…</li>
                <li>Running & fitness tracking</li>
                <li>Combat sports (karate, judo) and others</li>
                <li>eSports: FIFA/FC24, Valorant, LoL, etc.</li>
              </ul>
            </div>

            <div className="vision-block">
              <h3>🕹 Play & Organise</h3>
              <ul>
                <li>Create matches, teams and private leagues</li>
                <li>Find players nearby to complete your team</li>
                <li>Book fields and split payments between players</li>
                <li>Hire referees, coaches, photo/video crew</li>
              </ul>
            </div>

            <div className="vision-block">
              <h3>📺 Follow & Media</h3>
              <ul>
                <li>Live scores for local and school tournaments</li>
                <li>Goals, cards, line-ups, MVP voting</li>
                <li>Photos, clips and match recaps by the community</li>
                <li>Club, academy and city pages with rankings</li>
              </ul>
            </div>

            <div className="vision-block">
              <h3>⌚ Smartwatch & Fitness</h3>
              <ul>
                <li>Connect Apple / Samsung / Huawei / Fitbit</li>
                <li>Track heart rate, calories, distance, speed</li>
                <li>Show your “ETA” / fitness level in your profile</li>
                <li>Training suggestions and rest warnings</li>
              </ul>
            </div>

            <div className="vision-block">
              <h3>🛒 Marketplace</h3>
              <ul>
                <li>Referees, coaches, trainers, physios</li>
                <li>Videographers, photographers, content creators</li>
                <li>Sports equipment and jerseys</li>
                <li>Offers from gyms, stadiums and academies</li>
              </ul>
            </div>

            <div className="vision-block">
              <h3>🏆 Tournaments & Schools</h3>
              <ul>
                <li>Neighbourhood, city and Ramadan tournaments</li>
                <li>School leagues and youth cups</li>
                <li>Brackets, auto-scheduling and tables</li>
                <li>Talent discovery for young players</li>
              </ul>
            </div>

            <div className="vision-block">
              <h3>🧒 Kids & Safe Mode</h3>
              <ul>
                <li>Kids missions, steps challenges and rewards</li>
                <li>Parent accounts and school integration</li>
                <li>Cartoon-style UI for children</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      <footer className="footer">MoroSport</footer>
    </div>
  );
}

export default App;
