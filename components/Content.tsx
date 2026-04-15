type Section = "about" | "experience" | "publications" | "education" | "contact"

interface ContentProps {
  activeSection: Section
}

function AboutSection() {
  return (
    <section className="content-section">
      <h2>About Me</h2>
      <p>
        I&apos;m a researcher and educator passionate about <strong>machine learning</strong>, 
        <strong> signal processing</strong>, and <strong>embedded systems</strong>. My work lies at 
        the intersection of theory and practice, creating solutions that not only perform well 
        in academic benchmarks but also translate to real-world impact in <strong>healthcare</strong> and 
        <strong> autonomous systems</strong>.
      </p>
      <p>
        Currently, I lead a research group at State University where we&apos;re pushing the boundaries 
        of what&apos;s possible with resource-constrained computing. Prior to joining academia, I spent 
        three years at <strong>Bell Labs</strong> developing next-generation wireless communication systems.
      </p>

      <h3>Research Focus</h3>
      <ul className="research-list">
        <li>Machine Learning</li>
        <li>Deep Learning</li>
        <li>Signal Processing</li>
        <li>Embedded Systems</li>
        <li>IoT & Edge Computing</li>
        <li>Healthcare Tech</li>
        <li>Autonomous Systems</li>
      </ul>

      <h3>Current Projects</h3>
      <p>
        <strong>Smart Health Monitoring</strong> — Developing wearable sensors for continuous health 
        monitoring using ML algorithms that run efficiently on low-power devices.
      </p>
      <p>
        <strong>Edge Computing for IoT</strong> — Optimizing neural networks for resource-constrained 
        embedded devices, achieving state-of-the-art accuracy with minimal computational overhead.
      </p>
      <p>
        <strong>Autonomous Navigation</strong> — Novel signal processing techniques for robust 
        localization in GPS-denied environments, enabling reliable indoor and underground navigation.
      </p>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section className="content-section">
      <h2>Experience</h2>

      <div className="experience-item">
        <div className="experience-header">
          <h3>Assistant Professor</h3>
          <span className="experience-date">2020 — Present</span>
        </div>
        <p className="experience-org">
          State University · Department of Electrical &amp; Computer Engineering
        </p>
        <ul>
          <li>Teaching undergraduate and graduate courses in signal processing and machine learning</li>
          <li>Leading research group with 5 PhD students and 3 MS students</li>
          <li>Secured $1.2M in research funding from NSF and industry partners</li>
        </ul>
      </div>

      <div className="experience-item">
        <div className="experience-header">
          <h3>Research Scientist</h3>
          <span className="experience-date">2017 — 2020</span>
        </div>
        <p className="experience-org">Bell Labs · Murray Hill, NJ</p>
        <ul>
          <li>Developed novel algorithms for 5G wireless communications</li>
          <li>Published 8 papers in top-tier journals and conferences</li>
          <li>Filed 3 patents on signal processing techniques</li>
        </ul>
      </div>

      <div className="experience-item">
        <div className="experience-header">
          <h3>Graduate Research Assistant</h3>
          <span className="experience-date">2012 — 2017</span>
        </div>
        <p className="experience-org">
          Massachusetts Institute of Technology
        </p>
        <ul>
          <li>Conducted doctoral research on machine learning for signal processing</li>
          <li>Collaborated with industry partners on real-world applications</li>
          <li>Teaching assistant for courses on linear systems and probability</li>
        </ul>
      </div>
    </section>
  )
}

function PublicationsSection() {
  const publications = [
    {
      title: "Deep Learning for Real-Time Health Monitoring in Wearable Devices",
      authors: "S. Mitchell, J. Chen, R. Kumar",
      venue: "IEEE Transactions on Biomedical Engineering, 2024",
      type: "Journal",
    },
    {
      title: "Efficient Neural Network Architectures for Edge Computing",
      authors: "S. Mitchell, A. Patel",
      venue: "ACM/IEEE International Conference on Machine Learning, 2023",
      type: "Conference",
    },
    {
      title: "Signal Processing Techniques for Autonomous Navigation",
      authors: "S. Mitchell, L. Wang, M. Johnson",
      venue: "IEEE Signal Processing Magazine, 2023",
      type: "Journal",
    },
    {
      title: "Low-Power Machine Learning for IoT Applications",
      authors: "S. Mitchell, K. Brown, P. Davis",
      venue: "IEEE Internet of Things Journal, 2022",
      type: "Journal",
    },
    {
      title: "Robust Localization in GPS-Denied Environments",
      authors: "S. Mitchell, T. Wilson",
      venue: "IEEE International Conference on Robotics and Automation, 2022",
      type: "Conference",
    },
    {
      title: "5G Wireless Communications: A Machine Learning Perspective",
      authors: "S. Mitchell, R. Garcia, H. Lee",
      venue: "IEEE Communications Surveys & Tutorials, 2021",
      type: "Journal",
    },
    {
      title: "Compressed Sensing for Medical Imaging",
      authors: "S. Mitchell, D. Thompson",
      venue: "Medical Image Analysis, 2020",
      type: "Journal",
    },
    {
      title: "Real-Time Object Detection on Embedded Platforms",
      authors: "S. Mitchell, Y. Zhang, J. Smith",
      venue: "IEEE Embedded Systems Letters, 2019",
      type: "Journal",
    },
  ]

  return (
    <section className="content-section">
      <h2>Publications</h2>
      <p className="publication-note">
        Selected publications. For a complete list, visit my{" "}
        <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer">
          Google Scholar
        </a>{" "}
        profile.
      </p>

      <div className="publications-list">
        {publications.map((pub, index) => (
          <div key={index} className="publication-item">
            <span className="publication-type">{pub.type}</span>
            <h4>{pub.title}</h4>
            <p className="publication-authors">{pub.authors}</p>
            <p className="publication-venue">{pub.venue}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function EducationSection() {
  return (
    <section className="content-section">
      <h2>Education</h2>

      <div className="education-item">
        <div className="education-header">
          <h3>Ph.D. in Electrical Engineering</h3>
          <span className="education-date">2012 — 2017</span>
        </div>
        <p className="education-org">Massachusetts Institute of Technology</p>
        <p className="education-details">
          <strong>Dissertation:</strong> &quot;Machine Learning Approaches for
          Adaptive Signal Processing in Dynamic Environments&quot;
        </p>
        <p className="education-details">
          <strong>Advisor:</strong> Prof. John Anderson
        </p>
      </div>

      <div className="education-item">
        <div className="education-header">
          <h3>M.Tech in Communication Systems</h3>
          <span className="education-date">2010 — 2012</span>
        </div>
        <p className="education-org">Indian Institute of Technology Delhi</p>
        <p className="education-details">
          <strong>Thesis:</strong> &quot;Optimization Techniques for MIMO Wireless
          Systems&quot;
        </p>
        <p className="education-details">GPA: 9.2/10.0</p>
      </div>

      <div className="education-item">
        <div className="education-header">
          <h3>B.Tech in Electronics &amp; Communication</h3>
          <span className="education-date">2006 — 2010</span>
        </div>
        <p className="education-org">
          National Institute of Technology Trichy
        </p>
        <p className="education-details">
          Graduated with Honors · GPA: 8.8/10.0
        </p>
      </div>

      <h3>Certifications &amp; Training</h3>
      <ul className="certification-list">
        <li>Deep Learning Specialization — Coursera, 2021</li>
        <li>Advanced Signal Processing — IEEE Professional Education, 2019</li>
        <li>Machine Learning in Practice — Stanford Online, 2018</li>
      </ul>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="content-section">
      <h2>Contact</h2>
      <p>
        I&apos;m always interested in hearing from potential collaborators, industry partners, 
        and prospective students. Feel free to reach out through any of the channels below.
      </p>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>Office Address</h3>
          <p>
            Room 412, Engineering Building
            <br />
            Department of Electrical &amp; Computer Engineering
            <br />
            State University
            <br />
            1234 University Avenue
            <br />
            Los Angeles, CA 90001
          </p>
        </div>

        <div className="contact-card">
          <h3>Office Hours</h3>
          <p>
            <strong>Fall 2024</strong>
            <br />
            Tuesday: 2:00 PM — 4:00 PM
            <br />
            Thursday: 10:00 AM — 12:00 PM
          </p>
          <p className="email-note">Or by appointment</p>
        </div>

        <div className="contact-card">
          <h3>Email</h3>
          <p>
            <a href="mailto:s.mitchell@university.edu">s.mitchell@university.edu</a>
          </p>
          <p className="email-note">
            For prospective students: Please include your CV and a brief
            description of your research interests.
          </p>
        </div>

        <div className="contact-card">
          <h3>For Prospective Students</h3>
          <p>
            I&apos;m looking for motivated students to join my research group.
            If you&apos;re interested in machine learning, signal processing, or
            embedded systems, please reach out with your CV and research interests.
          </p>
        </div>
      </div>
    </section>
  )
}

export default function Content({ activeSection }: ContentProps) {
  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection />
      case "experience":
        return <ExperienceSection />
      case "publications":
        return <PublicationsSection />
      case "education":
        return <EducationSection />
      case "contact":
        return <ContactSection />
      default:
        return <AboutSection />
    }
  }

  return <main className="main-content">{renderSection()}</main>
}
