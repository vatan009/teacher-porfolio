import sectionData from "@/data/section-data.json";

export default function PublicationsSection() {
  const publications = sectionData.publications;

  const {
    intro,
    journalTitle,
    journalPublications,
    conferenceTitle,
    conferencePublications,
  } = publications;

  return (
    <section className="content-section">
      <h2>Publications</h2>
      <p>{intro}</p>

      <h3>{journalTitle}</h3>
      <div className="publications-list">
        {journalPublications.map((pub: any, index: number) => (
          <div key={index} className="publication-item">
            <h4>{pub.title}</h4>
            <p>{pub.authors}</p>
            <p>{pub.venue}</p>
            <p>{pub.details}</p>

            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="publication-btn"
            >
              View Paper
            </a>
          </div>
        ))}
      </div>

      <h3>{conferenceTitle}</h3>
      <div className="publications-list">
        {conferencePublications.map((conf: any, index: number) => (
          <div key={index} className="publication-item">
            <h4>{conf.title}</h4>
            <p>{conf.authors}</p>
            <p>{conf.venue}</p>

            <a
              href={conf.link}
              target="_blank"
              rel="noopener noreferrer"
              className="publication-btn"
            >
              View Paper
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
