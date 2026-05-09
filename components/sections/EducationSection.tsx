import sectionData from "@/data/section-data.json";

export default function EducationSection() {
  const education = sectionData.education;

  return (
    <section className="content-section">
      <h2>{education.title}</h2>

      {education.educationData.map((edu: any, index: number) => (
        <div className="education-item" key={index}>
          <div className="edu-header-wrapper">
            <div className="edu-header">
              <a
                href={edu.url}
                target="_blank"
                rel="noopener noreferrer"
                className="edu-logo-link"
              >
                <img
                  src={edu.logo}
                  alt={`${edu.degree} logo`}
                  className="edu-logo"
                />
              </a>
              <h3 className="edu-degree">{edu.degree}</h3>
            </div>
            <span className="edu-date">{edu.date}</span>
          </div>

          <p className="education-org">{edu.org}</p>

          <ul className="edu-details-list">
            {edu.details.map((item: any, idx: number) => (
              <li key={idx}>
                <strong>{item.label}:</strong> {item.value}
              </li>
            ))}
          </ul>

          <a href={edu.url} target="_blank" rel="noopener noreferrer">
            <button className="visit-site-btn">Visit Institution Site</button>
          </a>
        </div>
      ))}
    </section>
  );
}
