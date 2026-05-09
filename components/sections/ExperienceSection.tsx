import sectionData from "@/data/section-data.json";

export default function ExperienceSection() {
  const experience = sectionData.experience;

  return (
    <section className="content-section">
      <h2>{experience.title}</h2>

      <p>
        {experience.summaryLines[0]}
        <br />
        {experience.summaryLines[1]}
      </p>

      {experience.items.map((item: any, index: number) => (
        <div className="experience-item" key={index}>
          <div className="experience-header">
            <h3>{item.role}</h3>
            <span className="experience-date">{item.date}</span>
          </div>
          <p className="experience-org">{item.org}</p>
          <ul>
            {item.bullets.map((bullet: string, bulletIdx: number) => (
              <li key={bulletIdx} dangerouslySetInnerHTML={{ __html: bullet }} />
            ))}
          </ul>
        </div>
      ))}

      <h3>{experience.teachingAtTitle}</h3>
      <div className="experience-details">
        {experience.teachingAtParagraphs.map((paragraph: string, idx: number) => (
          <p
            key={idx}
            dangerouslySetInnerHTML={{
              __html: paragraph,
            }}
          />
        ))}
      </div>
    </section>
  );
}
