import sectionData from "@/data/section-data.json";

export default function ContactSection() {
  const contact = sectionData.contact;

  return (
    <section className="content-section">
      <h2>{contact.title}</h2>
      <p>{contact.intro}</p>

      <div className="contact-grid">
        {contact.cards.map((card, idx) => (
          <div key={idx} className="contact-card">
            <h3>{card.title}</h3>

            {"body" in card ? (
              <p>
                {(card.body ?? []).map((line, lineIdx) => (
                  <span key={lineIdx}>
                    {line}
                    {lineIdx !== (card.body ?? []).length - 1 ? <br /> : null}
                  </span>
                ))}
              </p>
            ) : (
              <p>
                {card.links.map((link, linkIdx) => (
                  <span key={linkIdx}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                    {linkIdx !== card.links.length - 1 ? <br /> : null}
                  </span>
                ))}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
