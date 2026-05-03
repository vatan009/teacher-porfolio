export default function AchievementsSection() {
  const memberships = [
    "Member of IEEE",
    "IEEE Communications Society",
    "IEEE Young Professionals",
    "OSA (Jan. 2016 - Present)",
    "SPIE (Jan. 2016 - Present)",
  ];

  const talks = [
    {
      event:
        "National Workshop on Signal Processing for IoT Based Communication (NWSPIBC-2024)",
      venue: "Shri Phanishwar Nath Renu Engineering College, Araria",
      topic: "Knowledge Defined Vehicular Networks",
      date: "January 10, 2024",
    },
    {
      event: "FDP on Applications of Machine Learning and Internet of Things",
      venue: "Bapatla Engineering College, Andhra Pradesh",
      topic: "Machine Learning for 6G-Enabled Intelligent Networks",
      date: "March 3, 2024",
    },
    {
      event:
        "One Week FDP on Recent Trends in Wireless Communications and Networks",
      venue: "SENSE, VIT-AP University, Andhra Pradesh",
      topic: "Knowledge Defined Vehicular Networks",
      date: "July 23, 2024",
    },
  ];

  const reviewJournals = [
    "IEEE Transactions on Intelligent Vehicles",
    "IEEE Transactions on Vehicular Technology",
    "IEEE Transactions on Signal and Information Processing over Networks",
    "IEEE Internet of Things Journal",
    "IEEE Transactions on Consumer Electronics",
    "IEEE Open Journal of Vehicular Technology",
    "IEEE Access",
    "Springer Telecommunication Systems",
    "Springer Journal of Wireless Networks",
    "Wiley Transactions on Emerging Telecommunications Technologies",
    "Measurement: Sensors",
    "Wiley International Journal of Network Management",
    "Frontiers in Energy Research",
    "PLOS ONE",
    "Wiley Internet Technology Letters",
    "IET Networks",
    "Scientific Reports",
    "IEEE Sensors Journal",
    "IEEE Communication Letters",
  ];

  const responsibilities = [
    "Present : Chief Warden (Boys Hostel)",
    "Present : Sports Indoor Incharge",
    "Student Discipline (Member)",
    "Campus Maintenance (Member)",
    "Mess Member",
    "National Service Scheme (NSS) Coordinator",
    "Class Coordinator",
  ];

  return (
    <section className="content-section">
      <h2>Achievements & Professional Service</h2>

      <div className="achievement-grid">
        {/* Professional Memberships */}
        <div className="achievement-card">
          <h3>Professional Memberships</h3>
          <ul>
            {memberships.map((membership, idx) => (
              <li key={idx}>{membership}</li>
            ))}
          </ul>
        </div>

        {/* Invited Talks */}
        <div className="achievement-card">
          <h3>Invited Talks & Presentations</h3>
          {talks.map((talk, idx) => (
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
          ))}
        </div>

        {/* Journal Review Service - Full Width */}
        <div className="achievement-card" style={{ gridColumn: "1 / -1" }}>
          <h3>Journal Reviewer Service</h3>
          <p style={{ marginBottom: "1.5rem", lineHeight: 1.7 }}>
            Serving as an expert peer reviewer for leading international
            journals and publishers across IEEE, Springer, Wiley, Elsevier, and
            open-access platforms.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1rem",
            }}
          >
            {reviewJournals.map((journal, idx) => (
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
            {responsibilities.map((resp, idx) => (
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
