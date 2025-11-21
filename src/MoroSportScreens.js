import React, { useState } from "react";

/**
 * Categories for grouping
 */
const CATEGORIES = [
  "Onboarding",
  "Profile & Settings",
  "Home & Discover",
  "Players",
  "Teams & Clubs",
  "Fields & Venues",
  "Matches & Tournaments",
  "Media & Social",
  "Marketplace",
  "Admin & Analytics",
];

/**
 * All 55 screens – code representation
 */
const SCREENS = [
  // Onboarding (6)
  {
    id: 1,
    name: "Welcome",
    key: "onboarding_welcome",
    category: "Onboarding",
    description: "First screen that explains MoroSport and lets users start login or signup.",
  },
  {
    id: 2,
    name: "Login",
    key: "onboarding_login",
    category: "Onboarding",
    description: "Email/phone + password login form, with forgot password link.",
  },
  {
    id: 3,
    name: "Signup",
    key: "onboarding_signup",
    category: "Onboarding",
    description: "Create account: name, email/phone, password, gender, city.",
  },
  {
    id: 4,
    name: "Choose sports",
    key: "onboarding_choose_sports",
    category: "Onboarding",
    description: "Select preferred sports (football, futsal, basketball, etc.).",
  },
  {
    id: 5,
    name: "Choose gender (women / men / mixed)",
    key: "onboarding_choose_gender",
    category: "Onboarding",
    description: "Let users pick whether they play in women, men, or mixed games.",
  },
  {
    id: 6,
    name: "Choose skill level",
    key: "onboarding_choose_skill",
    category: "Onboarding",
    description: "Beginner, intermediate, advanced – to match players correctly.",
  },

  // Profile & Settings (6)
  {
    id: 7,
    name: "My profile",
    key: "profile_main",
    category: "Profile & Settings",
    description: "Personal profile with avatar, bio, stats, teams and recent activity.",
  },
  {
    id: 8,
    name: "Edit profile",
    key: "profile_edit",
    category: "Profile & Settings",
    description: "Edit name, photo, bio, gender visibility, favourite positions.",
  },
  {
    id: 9,
    name: "Account security",
    key: "profile_security",
    category: "Profile & Settings",
    description: "Password, two-factor (later), connected accounts.",
  },
  {
    id: 10,
    name: "Preferences",
    key: "profile_preferences",
    category: "Profile & Settings",
    description: "Theme, main sport, search radius, notifications for women/men/mixed.",
  },
  {
    id: 11,
    name: "Notification settings",
    key: "profile_notifications",
    category: "Profile & Settings",
    description: "Control push, email and in-app notifications (matches, bookings, etc.).",
  },
  {
    id: 12,
    name: "Language & currency",
    key: "profile_language_currency",
    category: "Profile & Settings",
    description: "Set app language (Arabic, French, English) and currency (MAD).",
  },

  // Home & Discover (5)
  {
    id: 13,
    name: "Home / Discover feed",
    key: "home_discover",
    category: "Home & Discover",
    description: "Main feed: games, highlights, suggested fields & people.",
  },
  {
    id: 14,
    name: "Global search",
    key: "home_search",
    category: "Home & Discover",
    description: "Search players, teams, fields, clubs, tournaments in one place.",
  },
  {
    id: 15,
    name: "Nearby activity",
    key: "home_nearby",
    category: "Home & Discover",
    description: "Map or list of matches and fields around the user in Morocco.",
  },
  {
    id: 16,
    name: "Multi-sport switcher",
    key: "home_sport_switcher",
    category: "Home & Discover",
    description: "Switch between football, futsal, basketball, etc. for all content.",
  },
  {
    id: 17,
    name: "Highlights & reels feed",
    key: "home_highlights",
    category: "Home & Discover",
    description: "Short videos and best goals from local MoroSport games.",
  },

  // Players (5)
  {
    id: 18,
    name: "Players near me",
    key: "players_nearby",
    category: "Players",
    description: "List of players around you, with filters by level, gender and role.",
  },
  {
    id: 19,
    name: "Player public profile",
    key: "players_profile",
    category: "Players",
    description: "Public player page: stats, position, teams, upcoming matches.",
  },
  {
    id: 20,
    name: "Player stats & match history",
    key: "players_stats",
    category: "Players",
    description: "Goals, assists, games played, attendance for each season.",
  },
  {
    id: 21,
    name: "Badges & achievements",
    key: "players_badges",
    category: "Players",
    description: "Gamified badges: fair play, MVP, top scorer, attendance streak.",
  },
  {
    id: 22,
    name: "Invites & requests",
    key: "players_invites",
    category: "Players",
    description: "Invitations to join matches, teams, or tournaments.",
  },

  // Teams & Clubs (6)
  {
    id: 23,
    name: "My teams",
    key: "teams_my",
    category: "Teams & Clubs",
    description: "List of teams the user plays for (women, men, mixed).",
  },
  {
    id: 24,
    name: "Team profile",
    key: "teams_profile",
    category: "Teams & Clubs",
    description: "Team logo, squad list, fixtures, results and chat shortcut.",
  },
  {
    id: 25,
    name: "Team matches",
    key: "teams_matches",
    category: "Teams & Clubs",
    description: "Schedule and history of matches for a specific team.",
  },
  {
    id: 26,
    name: "Team chat",
    key: "teams_chat",
    category: "Teams & Clubs",
    description: "Group chat for organising lineups, timing, and tactics.",
  },
  {
    id: 27,
    name: "Clubs & academies directory",
    key: "clubs_directory",
    category: "Teams & Clubs",
    description: "List of clubs and academies in Moroccan cities.",
  },
  {
    id: 28,
    name: "Club profile",
    key: "clubs_profile",
    category: "Teams & Clubs",
    description: "Club info, teams, facilities, programs for women, men and kids.",
  },

  // Fields & Venues (6)
  {
    id: 29,
    name: "Fields near me",
    key: "fields_nearby",
    category: "Fields & Venues",
    description: "List or map of pitches and courts around the user.",
  },
  {
    id: 30,
    name: "Field details",
    key: "fields_details",
    category: "Fields & Venues",
    description: "Photos, surface type, price, facilities, rating.",
  },
  {
    id: 31,
    name: "Field availability calendar",
    key: "fields_calendar",
    category: "Fields & Venues",
    description: "Time slots by day to see when the field is free.",
  },
  {
    id: 32,
    name: "Field reviews",
    key: "fields_reviews",
    category: "Fields & Venues",
    description: "User reviews and ratings – safety, atmosphere, quality.",
  },
  {
    id: 33,
    name: "Booking checkout",
    key: "fields_checkout",
    category: "Fields & Venues",
    description: "Confirm slot, price, payment method (later: online pay).",
  },
  {
    id: 34,
    name: "Booking history",
    key: "fields_history",
    category: "Fields & Venues",
    description: "Past and upcoming bookings to manage reservations.",
  },

  // Matches & Tournaments (8)
  {
    id: 35,
    name: "Create match",
    key: "matches_create",
    category: "Matches & Tournaments",
    description: "Host a new pick-up game or league match (women / men / mixed).",
  },
  {
    id: 36,
    name: "Match lobby",
    key: "matches_lobby",
    category: "Matches & Tournaments",
    description: "Players list, team balance, waiting list before the match starts.",
  },
  {
    id: 37,
    name: "Live match feed",
    key: "matches_live",
    category: "Matches & Tournaments",
    description: "Score updates, goals, cards, simple live commentary.",
  },
  {
    id: 38,
    name: "Match stats",
    key: "matches_stats",
    category: "Matches & Tournaments",
    description: "Final stats: scorers, assists, best players, attendance.",
  },
  {
    id: 39,
    name: "Post-match recap",
    key: "matches_recap",
    category: "Matches & Tournaments",
    description: "Summary with key moments, photos, and share button.",
  },
  {
    id: 40,
    name: "Tournaments list",
    key: "tournaments_list",
    category: "Matches & Tournaments",
    description: "List of local leagues, Ramadan cups, corporate tournaments.",
  },
  {
    id: 41,
    name: "Tournament bracket",
    key: "tournaments_bracket",
    category: "Matches & Tournaments",
    description: "Tree view of rounds, upcoming fixtures and results.",
  },
  {
    id: 42,
    name: "Tournament registration",
    key: "tournaments_registration",
    category: "Matches & Tournaments",
    description: "Register a team or player into a competition.",
  },

  // Media & Social (5)
  {
    id: 43,
    name: "Media feed (photo/video)",
    key: "media_feed",
    category: "Media & Social",
    description: "All media content from games you follow or play in.",
  },
  {
    id: 44,
    name: "Upload media",
    key: "media_upload",
    category: "Media & Social",
    description: "Upload photos or short clips from matches.",
  },
  {
    id: 45,
    name: "Reel viewer (TikTok style)",
    key: "media_reel_viewer",
    category: "Media & Social",
    description: "Full-screen vertical video, swipe up/down to navigate.",
  },
  {
    id: 46,
    name: "Comments & likes",
    key: "media_comments",
    category: "Media & Social",
    description: "Thread under media with comments and reactions.",
  },
  {
    id: 47,
    name: "Share to social",
    key: "media_share",
    category: "Media & Social",
    description: "Share to Instagram, TikTok, WhatsApp, etc.",
  },

  // Marketplace (4)
  {
    id: 48,
    name: "Marketplace home",
    key: "market_home",
    category: "Marketplace",
    description: "Overview for services: referees, coaches, videographers.",
  },
  {
    id: 49,
    name: "Referee profile",
    key: "market_referee",
    category: "Marketplace",
    description: "Referee rating, experience, price per match.",
  },
  {
    id: 50,
    name: "Coach/trainer profile",
    key: "market_coach",
    category: "Marketplace",
    description: "Fitness/technical coaches for women, men, kids.",
  },
  {
    id: 51,
    name: "Videographer profile",
    key: "market_videographer",
    category: "Marketplace",
    description: "Match filming, highlights packages, social clips.",
  },

  // Admin & Analytics (4)
  {
    id: 52,
    name: "City dashboard",
    key: "admin_city_dashboard",
    category: "Admin & Analytics",
    description: "Overview for a city: games, users, fields usage.",
  },
  {
    id: 53,
    name: "Club admin console",
    key: "admin_club_console",
    category: "Admin & Analytics",
    description: "Manage club teams, players, and competitions.",
  },
  {
    id: 54,
    name: "Field owner dashboard",
    key: "admin_field_owner",
    category: "Admin & Analytics",
    description: "Bookings, peak hours, revenue per field.",
  },
  {
    id: 55,
    name: "Reports & analytics",
    key: "admin_reports",
    category: "Admin & Analytics",
    description: "High-level stats about usage, gender mix, sports mix.",
  },
];

/**
 * UI component to browse all 55 screens
 */
function MoroSportScreens() {
  const [selectedCategory, setSelectedCategory] = useState("Onboarding");
  const [selectedScreenId, setSelectedScreenId] = useState(1);

  const screensInCategory = SCREENS.filter(
    (s) => s.category === selectedCategory
  );
  const selectedScreen =
    SCREENS.find((s) => s.id === selectedScreenId) || screensInCategory[0];

  return (
    <div style={styles.page}>
      <div style={styles.sidebar}>
        <h2 style={styles.appTitle}>MoroSport</h2>
        <p style={styles.appSubtitle}>Screen map (55 screens)</p>

        <div style={styles.categoryList}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                const first = SCREENS.find((s) => s.category === cat);
                if (first) setSelectedScreenId(first.id);
              }}
              style={{
                ...styles.categoryButton,
                ...(selectedCategory === cat ? styles.categoryButtonActive : {}),
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div style={styles.main}>
        <div style={styles.columnLeft}>
          <h3 style={styles.sectionTitle}>Screens in {selectedCategory}</h3>
          <ul style={styles.screenList}>
            {screensInCategory.map((screen) => (
              <li key={screen.id}>
                <button
                  onClick={() => setSelectedScreenId(screen.id)}
                  style={{
                    ...styles.screenButton,
                    ...(selectedScreenId === screen.id
                      ? styles.screenButtonActive
                      : {}),
                  }}
                >
                  <span style={styles.screenId}>{screen.id.toString().padStart(2, "0")}</span>
                  <span>{screen.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div style={styles.columnRight}>
          <h3 style={styles.sectionTitle}>Selected screen</h3>
          {selectedScreen && (
            <div style={styles.detailCard}>
              <div style={styles.detailTag}>{selectedScreen.category}</div>
              <h2 style={styles.detailTitle}>
                {selectedScreen.id}. {selectedScreen.name}
              </h2>
              <p style={styles.detailDescription}>
                {selectedScreen.description}
              </p>

              <div style={styles.detailMeta}>
                <div>
                  <strong>Key:</strong>{" "}
                  <code>{selectedScreen.key}</code>
                </div>
                <div>
                  <strong>Category:</strong> {selectedScreen.category}
                </div>
              </div>

              <p style={styles.detailHint}>
                💡 You can turn this into a real mobile screen later
                (React Native or Flutter). For now it’s a clear map of the
                whole MoroSport super-app.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Inline styles (simple clean UI) ---------- */

const styles = {
  page: {
    display: "flex",
    minHeight: "100vh",
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Inter", sans-serif',
    background:
      "radial-gradient(circle at top, #e0f2fe 0, #e5f3ff 45%, #dbeafe 100%)",
    color: "#0f172a",
  },
  sidebar: {
    width: "260px",
    padding: "20px 18px",
    borderRight: "1px solid #e2e8f0",
    background: "rgba(255,255,255,0.9)",
    backdropFilter: "blur(10px)",
  },
  appTitle: {
    margin: 0,
    fontSize: "20px",
    fontWeight: 700,
  },
  appSubtitle: {
    margin: "4px 0 12px",
    fontSize: "12px",
    color: "#6b7280",
  },
  categoryList: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    marginTop: "8px",
  },
  categoryButton: {
    borderRadius: "999px",
    border: "1px solid #e5e7eb",
    padding: "7px 10px",
    background: "#f9fafb",
    fontSize: "12px",
    textAlign: "left",
    cursor: "pointer",
  },
  categoryButtonActive: {
    background: "linear-gradient(135deg,#22c55e,#16a34a)",
    borderColor: "#16a34a",
    color: "#ffffff",
  },
  main: {
    flex: 1,
    display: "flex",
    padding: "18px 20px",
    gap: "18px",
  },
  columnLeft: {
    width: "45%",
    background: "rgba(255,255,255,0.92)",
    borderRadius: "18px",
    padding: "14px",
    boxShadow: "0 18px 40px rgba(15,23,42,0.08)",
    border: "1px solid #e5e7eb",
    overflow: "hidden",
  },
  columnRight: {
    flex: 1,
    background: "rgba(255,255,255,0.92)",
    borderRadius: "18px",
    padding: "14px",
    boxShadow: "0 18px 40px rgba(15,23,42,0.08)",
    border: "1px solid #e5e7eb",
  },
  sectionTitle: {
    margin: "0 0 10px",
    fontSize: "14px",
    fontWeight: 600,
  },
  screenList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    maxHeight: "calc(100% - 30px)",
    overflowY: "auto",
  },
  screenButton: {
    width: "100%",
    border: "none",
    background: "transparent",
    padding: "6px 6px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "12px",
    cursor: "pointer",
  },
  screenButtonActive: {
    background: "#ecfdf5",
    color: "#166534",
  },
  screenId: {
    fontSize: "11px",
    minWidth: "24px",
    textAlign: "right",
    color: "#9ca3af",
  },
  detailCard: {
    borderRadius: "16px",
    padding: "14px",
    background: "#f9fafb",
    border: "1px solid #e5e7eb",
  },
  detailTag: {
    display: "inline-flex",
    padding: "2px 8px",
    borderRadius: "999px",
    fontSize: "10px",
    background: "#dcfce7",
    color: "#166534",
    marginBottom: "6px",
  },
  detailTitle: {
    margin: "0 0 6px",
    fontSize: "16px",
  },
  detailDescription: {
    margin: "0 0 10px",
    fontSize: "12px",
    color: "#4b5563",
  },
  detailMeta: {
    fontSize: "11px",
    color: "#6b7280",
    display: "flex",
    flexDirection: "column",
    gap: "2px",
    marginBottom: "10px",
  },
  detailHint: {
    margin: 0,
    fontSize: "11px",
    color: "#6b7280",
  },
};

export default MoroSportScreens;
