import sectionData from "@/data/section-data.json";

export default function AboutSection() {
  const about = sectionData.about;

  return (
    <section className="content-section">
      <h2>{about.heading}</h2>

      {about.paragraphs.map((text: string, idx: number) => (
        <p key={idx}>{text}</p>
      ))}

      <h3>
        <span>{about.phdSupervisor.label}</span>
      </h3>
      <p>{about.phdSupervisor.name}</p>

      <h3>{about.welcomeMessage.heading}</h3>
      <blockquote>{about.welcomeMessage.quote}</blockquote>

      <h3>{about.researchInterests.heading}</h3>
      <ul className="research-list">
        {about.researchInterests.items.map((item: string, idx: number) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
