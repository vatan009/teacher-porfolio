export default function EducationSection() {
  const educationData = [
    {
      degree: "Ph.D.",
      date: "February 2016 — May 2022",
      org: "Indian Institute of Technology (Indian School of Mines) Dhanbad, Jharkhand, India-826004",
      url: "https://www.iitism.ac.in/",
      logo: "iit_ism_logo.png",
      details: [
        {
          label: "Specialization",
          value:
            "Wireless Ad Hoc Networks, Vehicular Communications, Software Defined Networks, Stochastic Modelling and Analysis, Queueing Theory, Computer Communication Networks",
        },
        {
          label: "Thesis Title",
          value: "STOCHASTIC ANALYSIS IN VEHICULAR AD-HOC NETWORKS",
        },
        { label: "Thesis Supervisor", value: "Prof. Jaisingh Thangaraj" },
      ],
    },
    {
      degree: "M.Tech.",
      date: "2009 — 2011",
      org: "University College of Engineering, JNTU Hyderabad (Autonomous), Kukatpally, Hyderabad, Telangana, India.",
      url: "https://jntuhceh.ac.in/",
      logo: "jnut.png",
      details: [
        {
          label: "Specialization",
          value: "Digital Systems and Computer Electronics, Department of ECE",
        },
        {
          label: "Thesis Title",
          value:
            "Implementation of Multicast Routing Protocol for Wireless Ad-Hoc Networks",
        },
        { label: "Thesis Supervisor", value: "Prof. Duggirala Srinivasa Rao" },
        { label: "Percentage", value: "79.06 out of 100" },
      ],
    },
    {
      degree: "B.Tech.",
      date: "2003 — 2007",
      org: "VJIT, Hyderabad, Telangana, India (Under JNTUH)",
      url: "https://vjit.ac.in/",
      logo: "vjit.png",
      details: [
        {
          label: "Specialization",
          value: "Electronics and Communication Engineering",
        },
        { label: "Thesis Title", value: "GSM based Mobile Networks" },
        { label: "Percentage", value: "65.00 out of 100" },
      ],
    },
    {
      degree: "Intermediate (10+2)",
      date: "2001 — 2003",
      org: "New Generation Junior College in Kavi Raj Nagar, Khammam",
      url: "#",
      logo: "ap.png",
      details: [
        { label: "Stream", value: "M.P.C" },
        {
          label: "Board",
          value: "Board of Intermediate Education, Andhra Pradesh",
        },
        { label: "Percentage", value: "86.8 out of 100" },
      ],
    },
    {
      degree: "High School (10) — SSC",
      date: "2001",
      org: "Govt. High School, Garla, Board of Secondary Education, Andhra Pradesh",
      url: "#",
      logo: "gov.png",
      details: [{ label: "Percentage", value: "82.5 out of 100" }],
    },
  ];

  return (
    <section className="content-section">
      <h2>Education</h2>
      {educationData.map((edu, index) => (
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
            {edu.details.map((item, idx) => (
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
