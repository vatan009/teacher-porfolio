import sectionData from "@/data/section-data.json";

export default function AchievementsSection() {
  const achievements = sectionData.achievements;

  const {
    title,
    memberships,
    talks,
    reviewJournals,
    responsibilities,
    journalReviewerServiceText,
  } = achievements;

  return (
    <section className="content-section">
      <h2>{title}</h2>

      <div className="achievement-grid">
        {/* Professional Memberships */}
        <div className="achievement-card" style={{ gridColumn: "1 / -1" }}>
          <h3>Professional Memberships</h3>
          <ul>
            {memberships.map((membership: string, idx: number) => (
              <li key={idx}>{membership}</li>
            ))}
          </ul>
        </div>

        {/* Invited Talks */}
        <div className="achievement-card" style={{ gridColumn: "1 / -1" }}>
          <h3>Invited Talks & Presentations</h3>
          {talks.map(
            (
              talk: {
                event: string;
                venue: string;
                topic: string;
                date: string;
              },
              idx: number
            ) => (
              <div
                key={idx}
                style={{
                  marginBottom: idx !== talks.length - 1 ? "1.5rem" : "0",
                }}
              >
                <p style={{ margin: "0 0 0.5rem 0", fontWeight: 600 }}>
                  {talk.topic}
                </p>
                <p style={{ margin: "0 0 0.25rem 0", fontSize: "0.9rem" }}>
                  <strong>{talk.event}</strong>
                </p>
                <p
                  style={{
                    margin: "0 0 0.25rem 0",
                    fontSize: "0.9rem",
                    color: "var(--muted-foreground)",
                  }}
                >
                  📍<i>{talk.venue}</i>
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.85rem",
                    color: "var(--primary)",
                  }}
                >
                  {talk.date}
                </p>
              </div>
            )
          )}
        </div>

        {/* Journal Review Service - Full Width */}
        <div className="achievement-card" style={{ gridColumn: "1 / -1" }}>
          <h3>Journal Reviewer Service</h3>
          <p style={{ marginBottom: "1.5rem", lineHeight: 1.7 }}>
            {journalReviewerServiceText}
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1rem",
            }}
          >
            {reviewJournals.map((journal: string, idx: number) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                }}
              >
                <span
                  style={{
                    color: "var(--primary)",
                    marginTop: "0.2rem",
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                <span style={{ fontSize: "0.95rem", lineHeight: 1.5 }}>
                  {journal}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Institutional Responsibilities */}
        <div className="achievement-card" style={{ gridColumn: "1 / -1" }}>
          <h3>Institutional Responsibilities</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1rem",
            }}
          >
            {responsibilities.map((resp: string, idx: number) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <span style={{ color: "var(--primary)", fontWeight: 600 }}>
                  ◆
                </span>
                <span style={{ fontSize: "0.95rem" }}>{resp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
