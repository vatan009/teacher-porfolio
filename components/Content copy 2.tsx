type Section =
  | "about"
  | "experience"
  | "publications"
  | "education"
  | "achievements"
  | "contact";

interface ContentProps {
  activeSection: Section;
}

function AboutSection() {
  return (
    <section className="content-section">
      <h2>About Dr. Ravi Banoth</h2>
      <p>
        I am Dr. Ravi Banoth, an Assistant Professor at the Department of
        Electronics and Communication Engineering, IIIT Tiruchirappalli. I
        received my Ph.D. from the Indian Institute of Technology Dhanbad,
        Jharkhand, India, in the Department of Electronics Engineering in May
        2022. My Master of Technology and Bachelor of Technology degrees in
        Electronics Communication and Engineering were obtained from the
        University College of Engineering, JNTU Hyderabad, in 2011 and 2007,
        respectively.
      </p>
      <p>
        I am a member of IEEE. My current research interests lie in Adhoc
        Networks, Wireless Networks, Intelligent Transportation Systems,
        Vehicular Adhoc Networks, Internet of Vehicles, Software Defined
        Networks, Digital Twin Networks, Queueing Theory, Telecommunication
        Networks, Stochastic Performance Evaluation, and Machine Learning.
      </p>
      <p>
        I also serve as a reviewer for numerous journals and conferences. Please
        explore other sections of this website to learn more about me and my
        research.
      </p>
      <h3>Supervisor</h3>
      <p>
        Prof. Jaisingh Thangaraj, Associate Professor, Department of Electronics
        Engineering, IIT(ISM), Dhanbad.
      </p>
      <h3>Welcome Message</h3>
      <blockquote>
        “I am always open to collaborating with enthusiastic and self-motivated
        students interested in research. If you'd like to explore opportunities
        to work together, feel free to contact me.”
      </blockquote>
      <h3>Research Interests</h3>
      <ul className="research-list">
        <li>Machine learning for wireless communications</li>
        <li>Next generation wireless networks</li>
        <li>5G/6G intelligent networks</li>
        <li>Ad hoc networks and mobile ad hoc networks</li>
        <li>Vehicular communications and intelligent vehicular networks</li>
        <li>Internet of Vehicles</li>
        <li>Software Defined Networks</li>
        <li>Digital Twin Networks</li>
        <li>Zero Touch Provisioning</li>
        <li>Stochastic Networks and Queueing Theory</li>
      </ul>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="content-section">
      <h2>Experience</h2>
      <p>
        Teaching Experience: 10 Years
        <br />
        Research Experience: 07 Years
      </p>
      <div className="experience-item">
        <div className="experience-header">
          <h3>Assistant Professor</h3>
          <span className="experience-date">February 2023 — Present</span>
        </div>
        <p className="experience-org">
          Department of Electronics and Communication Engineering, Indian
          Institute of Information Technology Tiruchirappalli
        </p>
        <ul>
          <li>
            Teaching and research support for undergraduate and graduate
            students
          </li>
          <li>Guidance on projects in networking, communications, and ML</li>
          <li>Course delivery, labs, and student mentoring</li>
        </ul>
      </div>

      <div className="experience-item">
        <div className="experience-header">
          <h3>Assistant Professor</h3>
          <span className="experience-date">July 2022 — February 2023</span>
        </div>
        <p className="experience-org">
          Department of Electronics & Communication Engineering, MLRIT,
          Hyderabad
        </p>
        <ul>
          <li>Principles of Communication</li>
          <li>Probability Theory and Stochastic Processes</li>
          <li>Microwave Engineering</li>
          <li>Basic Simulation Lab</li>
          <li>Responsibility: M.Tech Coordinator</li>
        </ul>
      </div>

      <div className="experience-item">
        <div className="experience-header">
          <h3>Faculty Associate</h3>
          <span className="experience-date">July 2021 — May 2022</span>
        </div>
        <p className="experience-org">
          Department of Electronics & Communication Engineering, Amrita School
          of Engineering, Chennai
        </p>
        <ul>
          <li>Vehicular Communications</li>
          <li>Digital System Design</li>
          <li>Communication Networks</li>
          <li>Digital System Design Lab</li>
        </ul>
      </div>

      <div className="experience-item">
        <div className="experience-header">
          <h3>Research Scholar cum Teaching Assistant</h3>
          <span className="experience-date">February 2016 — February 2021</span>
        </div>
        <p className="experience-org">
          Electronics Engineering Department, IIT(ISM) Dhanbad
        </p>
        <ul>
          <li>
            Doctoral research on stochastic analysis in vehicular ad hoc
            networks
          </li>
          <li>
            Teaching Assistant: Analog Circuits, Signals & Systems, Network
            Theory & Filter Design, Electronics Instrumentation & Measurements,
            Optical Communication, Basic Electronics Engineering, Computer
            Communication Networks
          </li>
          <li>
            Instructors: Prof. Jaisingh Thangaraj and Prof. Jitendra Kumar
          </li>
        </ul>
      </div>

      <div className="experience-item">
        <div className="experience-header">
          <h3>Assistant Professor</h3>
          <span className="experience-date">July 2012 — February 2016</span>
        </div>
        <p className="experience-org">
          Electronics and Communication Engineering, Mahaveer Institute of
          Science and Technology, Hyderabad
        </p>
        <ul>
          <li>Data Communication & Computer Networks</li>
          <li>Signals & Systems</li>
          <li>VLSI, Electronics Instrumentation & Measurements</li>
          <li>
            Microprocessors, Antenna Theory & Wave Propagation, Coding Theory &
            Techniques, Advanced Data Communications
          </li>
        </ul>
      </div>

      <div className="experience-item">
        <div className="experience-header">
          <h3>Assistant Professor</h3>
          <span className="experience-date">July 2011 — May 2012</span>
        </div>
        <p className="experience-org">
          Electronics and Communication Engineering, DVR Institute of
          Technology, Hyderabad
        </p>
        <ul>
          <li>Computer Networks</li>
          <li>VLSI</li>
          <li>IC Applications</li>
          <li>Network Theory Lab</li>
        </ul>
      </div>

      <h3>Teaching at IIITT</h3>
      <div className="experience-details">
        <p>
          <strong>AY 2022-2023 (Even Semester):</strong> RF & Microwave
          Engineering (EC353-C-3), Probability and Random Process (MA252-C-4),
          Digital Principles and System Design (EC152-C-3), EC451 Project Work.
        </p>
        <p>
          <strong>AY 2023-2024 (Odd Semester):</strong> Digital Communication
          (EC304-C-3), Electronic Circuits (EC201-C-3), Digital Communication
          Laboratory (EC305-C-2).
        </p>
        <p>
          <strong>AY 2023-2024 (Even Semester):</strong> Digital Principles and
          System Design (EC152-C-3), Probability and Random Process (MA252-C-4),
          Communication Theory (EC253-C-3), EC451 Project Work, Digital
          Principles and System Design Laboratory (EC154-C-2).
        </p>
        <p>
          <strong>AY 2024-2025 (Odd Semester):</strong> Digital Communication
          (EC304-C-3), Electronic Circuits (EC201-C-3), Information Theory and
          Coding (CS649-C-3), Digital Communication Laboratory (EC305-C-2).
        </p>
        <p>
          <strong>AY 2024-2025 (Even Semester):</strong> Communication Theory
          (EC253-C-3), Digital System Design (CS152-C-3), Information Theory and
          Coding (CS649-C-3), Digital System Design Laboratory (CS154-C-2).
        </p>
        <p>
          <strong>AY 2025-2026 (Odd Semester):</strong> Information Theory and
          Coding (CS649-C-3), Digital Communication (EC304-C-3), Electronic
          Circuits (24EC201-C-3), Electronic Circuits Laboratory (24EC205-C-2).
        </p>
        <p>
          <strong>AY 2025-2026 (Even Semester):</strong> Digital System Design
          (EC2103-C-3), Basics Electronics Engineering (EC2105-C-3), Analog
          Circuits (Only 3rd Unit), Digital System Design Laboratory
          (EC2104-C-2).
        </p>
      </div>
    </section>
  );
}

function PublicationsSection() {
  const journalPublications = [
    {
      title:
        "Performance analysis of collision avoidance routing protocol for inter-vehicular communication",
      authors: "J. Thangaraj, Banoth Ravi, Sunaina Kumari",
      venue: "Cluster Computing, 2019",
      details: "Impact Factor: 3.6",
    },
    {
      title:
        "Data Traffic Forwarding for Inter-vehicular Communication in VANETs Using Stochastic Method",
      authors: "Ravi Banoth, J. Thangaraj, Shrinivas Petale",
      venue: "Wireless Personal Communications, 2019",
      details: "Impact Factor: 2.017",
    },
    {
      title:
        "Stochastic performance modeling and analysis of multi-service provisioning with software-defined vehicular networks",
      authors: "Banoth Ravi, Anmol Gautam, Jaisingh Thangaraj",
      venue:
        "AEU-International Journal of Electronics and Communications, 2020",
      details: "Impact Factor: 3.169",
    },
    {
      title:
        "Stochastic traffic flow modeling for multi-hop cooperative data dissemination in VANETs",
      authors: "Banoth Ravi, Jaisingh Thangaraj",
      venue: "Physical Communication, 2021",
      details: "Impact Factor: 2.379",
    },
    {
      title:
        "Performance Evaluation of Multi-Service Provisioning for Multi-hop Cooperative Data Dissemination in SDHVN",
      authors: "Banoth Ravi, Jaisingh Thangaraj",
      venue: "Journal of Ambient Intelligence and Humanized Computing",
      details: "Impact Factor: 4.262",
    },
    {
      title:
        "Stochastic modelling and analysis of mobility models for intelligent software defined internet of vehicles",
      authors: "Ravi Banoth, Jaisingh Thangaraj, Shishir Kumar Shandilya",
      venue: "Physical Communication, 2022",
      details: "Impact Factor: 2.379",
    },
    {
      title:
        "Stochastic modeling and performance analysis in balancing load and traffic for vehicular ad hoc networks: A review",
      authors: "Ravi Banoth et al.",
      venue: "International Journal of Network Management, 2023",
      details: "Impact Factor: 1.914",
    },
    {
      title:
        "Stochastic Modeling for Intelligent Software-Defined Vehicular Networks: A Survey",
      authors: "Ravi Banoth et al.",
      venue: "Computers, 2023",
      details: "Impact Factor: 2.8",
    },
    {
      title:
        "Comparative Studies of Single-Channel Speech Enhancement Techniques",
      authors:
        "Kumar Bittu, Neeraj Kumar, Manoj Kumar, S. V. S. Prasad, Ashwini Kumar Varma, Banoth Ravi",
      venue: "IETE Journal of Research, 2023",
      details: "Impact Factor: 1.5",
    },
    {
      title:
        "Impact of Sn-doping on the optoelectronic properties of zinc oxide crystal: DFT approach",
      authors:
        "Manoj Kumar, Purnendu Shekhar Pandey, Banoth Ravi, Bittu Kumar, S. V. S. Prasad, Rajesh Singh, Santosh Kumar Choudhary, Gyanendra Kumar Singh",
      venue: "PLOS One, 2024",
      details: "Impact Factor: 3.752",
    },
    {
      title:
        "Least Mean Square/Fourth Adaptive algorithm for excision of ocular artifacts from EEG signals",
      authors:
        "Chintala Sridhar, Murla Bhumi Reddy, Srihari Gude, Damodar Reddy Edla, Banoth Ravi",
      venue: "Applied Acoustics, 2024",
      details: "Impact Factor: 3.4",
    },
    {
      title:
        "Spectrum Allocation in 5G and Beyond Intelligent Ubiquitous Networks",
      authors: "Ravi Banoth, Utkarsh Verma",
      venue: "International Journal of Network Management, 2025",
      details: "Impact Factor: 1.5",
    },
  ];

  const conferencePublications = [
    {
      title:
        "End-to-end delay bound analysis of VANETs based on stochastic method via queueing theory model",
      venue:
        "Wireless Communications, Signal Processing and Networking (WiSPNET), 2017 International Conference on",
    },
    {
      title:
        "Stochastic Network Optimization of Data Dissemination for Multi-hop Routing in VANETs",
      venue:
        "2018 International Conference on Wireless Communications, Signal Processing and Networking (WiSPNET)",
    },
    {
      title:
        "Performance Analysis of AODV and EDAODV Routing Protocol Under Congestion Control in VANETs",
      venue:
        "2018 Second International Conference on Inventive Communication and Computational Technologies (ICICCT)",
    },
    {
      title:
        "Improved Performance Evaluation of Stochastic Modelling and QoS Analysis of Multi-hop Cooperative Data Dissemination in IVC",
      venue:
        "2019 TEQIP III Sponsored International Conference on Microwave Integrated Circuits, Photonics and Wireless Networks (IMICPW)",
    },
    {
      title:
        "Improved End to End Delay Bound analysis in Software Defined Mobile Edge Vehicular Networks",
      venue:
        "International Symposium on 5G & Beyond for Rural Upliftment, BIT Sindri, 2020",
    },
  ];

  return (
    <section className="content-section">
      <h2>Publications</h2>
      <p>
        Selected journal and conference publications from SCI/SCI-Expanded
        venues and top international conferences.
      </p>
      <h3>Journal Publications</h3>
      <div className="publications-list">
        {journalPublications.map((pub, index) => (
          <div key={index} className="publication-item">
            <h4>{pub.title}</h4>
            <p className="publication-authors">{pub.authors}</p>
            <p className="publication-venue">{pub.venue}</p>
            <p className="publication-details">{pub.details}</p>
          </div>
        ))}
      </div>
      <h3>Conference Publications</h3>
      <div className="publications-list">
        {conferencePublications.map((conf, index) => (
          <div key={index} className="publication-item">
            <h4>{conf.title}</h4>
            <p className="publication-venue">{conf.venue}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section className="content-section">
      <h2>Education</h2>
      <div className="education-item">
        <div className="education-header">
          <h3>Ph.D.</h3>
          <span className="education-date">February 2016 — May 2022</span>
        </div>
        <p className="education-org">
          Indian Institute of Technology (Indian School of Mines) Dhanbad,
          Jharkhand, India-826004
        </p>
        <ul>
          <li>
            <strong>Specialization:</strong> Wireless Ad Hoc Networks, Vehicular
            Communications, Software Defined Networks, Stochastic Modelling and
            Analysis, Queueing Theory, Computer Communication Networks
          </li>
          <li>
            <strong>Thesis Title:</strong> STOCHASTIC ANALYSIS IN VEHICULAR
            AD-HOC NETWORKS
          </li>
          <li>
            <strong>Thesis Supervisor:</strong> Prof. Jaisingh Thangaraj
          </li>
        </ul>
      </div>
      <div className="education-item">
        <div className="education-header">
          <h3>M.Tech.</h3>
          <span className="education-date">2009 — 2011</span>
        </div>
        <p className="education-org">
          University College of Engineering, JNTU Hyderabad (Autonomous),
          Kukatpally, Hyderabad, Telangana, India.
        </p>
        <ul>
          <li>
            <strong>Specialization:</strong> Digital Systems and Computer
            Electronics, Department of ECE
          </li>
          <li>
            <strong>Thesis Title:</strong> Implementation of Multicast Routing
            Protocol for Wireless Ad-Hoc Networks
          </li>
          <li>
            <strong>Thesis Supervisor:</strong> Prof. Duggirala Srinivasa Rao
          </li>
          <li>
            <strong>Percentage:</strong> 79.06 out of 100
          </li>
        </ul>
      </div>
      <div className="education-item">
        <div className="education-header">
          <h3>B.Tech.</h3>
          <span className="education-date">2003 — 2007</span>
        </div>
        <p className="education-org">
          VJIT, Hyderabad, Telangana, India (Under JNTUH)
        </p>
        <ul>
          <li>
            <strong>Specialization:</strong> Electronics and Communication
            Engineering
          </li>
          <li>
            <strong>Thesis Title:</strong> GSM based Mobile Networks
          </li>
          <li>
            <strong>Percentage:</strong> 65.00 out of 100
          </li>
        </ul>
      </div>
      <div className="education-item">
        <div className="education-header">
          <h3>Intermediate (10+2)</h3>
          <span className="education-date">2001 — 2003</span>
        </div>
        <p className="education-org">
          New Generation Junior College in Kavi Raj Nagar, Khammam
        </p>
        <ul>
          <li>
            <strong>Stream:</strong> M.P.C
          </li>
          <li>
            <strong>Board:</strong> Board of Intermediate Education, Andhra
            Pradesh
          </li>
          <li>
            <strong>Percentage:</strong> 86.8 out of 100
          </li>
        </ul>
      </div>
      <div className="education-item">
        <div className="education-header">
          <h3>High School (10) — SSC</h3>
          <span className="education-date">2001</span>
        </div>
        <p className="education-org">
          Govt. High School, Garla, Board of Secondary Education, Andhra Pradesh
        </p>
        <ul>
          <li>
            <strong>Percentage:</strong> 82.5 out of 100
          </li>
        </ul>
      </div>
    </section>
  );
}

function AchievementsSection() {
  return (
    <section className="content-section">
      <h2>Achievements</h2>
      <p>
        I have contributed to academia through invited talks, reviewer service,
        professional memberships, and additional responsibilities.
      </p>
      <div className="achievement-grid">
        <div className="achievement-card">
          <h3>Professional Activities</h3>
          <ul>
            <li>Member of IEEE</li>
            <li>IEEE Communications Society (IEEE ComSoc)</li>
            <li>Member of IEEE Young Professionals</li>
            <li>OSA (Jan. 2016 - present)</li>
            <li>SPIE (Jan. 2016 - present)</li>
          </ul>
        </div>
        <div className="achievement-card">
          <h3>Invited Talks</h3>
          <ul>
            <li>
              National Workshop on Signal Processing for IoT Based Communication
              (NWSPIBC-2024), Sponsored by Bihar Council of Science &
              Technology, Shri Phanishwar Nath Renu Engineering College, Araria
              <br />
              Topic: Knowledge Defined Vehicular Networks
              <br />
              Session: 10/01/2024, 03:00 PM - 04:30 PM
            </li>
            <li>
              FDP on Applications of Machine Learning and Internet of Things,
              Department of Electronics & Communication Engineering, Bapatla
              Engineering College, Andhra Pradesh
              <br />
              Topic: Machine Learning for 6G-Enabled Intelligent Networks
              <br />
              Session: 03/03/2024, 11:00 AM - 1:00 PM
            </li>
            <li>
              One Week FDP on "Recent Trends in Wireless Communications and
              Networks", School of Electronics Engineering (SENSE), VIT-AP
              University, Andhra Pradesh
              <br />
              Topic: Knowledge Defined Vehicular Networks
              <br />
              Session: July 23, 2024, Afternoon 2-4 PM
            </li>
          </ul>
        </div>
        <div className="achievement-card">
          <h3>Review Service</h3>
          <ul>
            <li>IEEE Transactions on Intelligent Vehicles</li>
            <li>IEEE Transactions on Vehicular Technology</li>
            <li>
              IEEE Transactions on Signal and Information Processing over
              Networks
            </li>
            <li>IEEE Internet of Things Journal</li>
            <li>IEEE Transactions on Consumer Electronics</li>
            <li>IEEE Open Journal of Vehicular Technology</li>
            <li>IEEE Access</li>
            <li>Springer Telecommunication Systems</li>
            <li>Springer Journal of Wireless Networks</li>
            <li>
              Wiley Transactions on Emerging Telecommunications Technologies
            </li>
            <li>Measurement: Sensors</li>
            <li>Wiley International Journal of Network Management</li>
            <li>Frontiers in Energy Research</li>
            <li>PLOS ONE</li>
            <li>Wiley Internet Technology Letters</li>
            <li>IET Networks</li>
            <li>Scientific Reports</li>
            <li>IEEE Sensors Journal</li>
            <li>IEEE Communication Letters</li>
          </ul>
        </div>
        <div className="achievement-card">
          <h3>Additional Responsibilities</h3>
          <ul>
            <li>Deputy Warden (Boys) (i/c)</li>
            <li>Student Discipline (Member)</li>
            <li>Campus Maintenance (Member)</li>
            <li>Mess Member</li>
            <li>National Service Scheme (NSS) Coordinator</li>
            <li>Class Coordinator</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
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

export default function Content({ activeSection }: ContentProps) {
  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection />;
      case "experience":
        return <ExperienceSection />;
      case "publications":
        return <PublicationsSection />;
      case "education":
        return <EducationSection />;
      case "achievements":
        return <AchievementsSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return <main className="main-content">{renderSection()}</main>;
}
