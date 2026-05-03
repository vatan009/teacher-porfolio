export default function ContactSection() {
  return (
    <section className="content-section">
      <h2>Contact</h2>
      <p>
        I am always open to collaborating with enthusiastic and self-motivated
        students and researchers. Please reach out through the contact details
        below.
      </p>
      <div className="contact-grid">
        <div className="contact-card">
          <h3>Contact Details</h3>
          <p>
            Dr. Ravi Banoth, Ph.D. (IIT Dhanbad)
            <br />
            Assistant Professor
            <br />
            Department of Electronics and Communication Engineering
            <br />
            First Floor Room No. 2065
            <br />
            Indian Institute of Information Technology Tiruchirappalli
            <br />
            Trichy-Madurai Highway, Sethurapatti
            <br />
            Tiruchirappalli, Tamil Nadu-620012
          </p>
        </div>
        <div className="contact-card">
          <h3>Email</h3>
          <p>
            <a href="mailto:ravib@iiitt.ac.in">ravib@iiitt.ac.in</a>
            <br />
            <a href="mailto:ravi.banoth112@gmail.com">
              ravi.banoth112@gmail.com
            </a>
          </p>
        </div>
        <div className="contact-card">
          <h3>Phone</h3>
          <p>
            +91 98498 82720
            <br />
            +91 88775 18756
          </p>
        </div>
        <div className="contact-card">
          <h3>Profiles</h3>
          <p>
            <a
              href="https://www.linkedin.com/in/dr-ravi-banoth-phd-iit-dhn-411011105/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <br />
            <a
              href="https://scholar.google.co.in/citations?user=Y6WmauoAAAAJ&hl=en&oi=ao"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Scholar
            </a>
            <br />
            <a
              href="https://orcid.org/0000-0003-3455-0628"
              target="_blank"
              rel="noopener noreferrer"
            >
              ORCID
            </a>
            <br />
            <a
              href="https://www.scopus.com/authid/detail.uri?authorId=57197836657"
              target="_blank"
              rel="noopener noreferrer"
            >
              Scopus ID
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
