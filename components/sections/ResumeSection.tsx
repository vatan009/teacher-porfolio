export default function ResumeSection() {
  return (
    <section className="content-section resume-section">
      <h2>Resume</h2>
      <p className="resume-intro">
        Download my comprehensive CV/Resume to learn more about my academic
        qualifications, professional experience, publications, and research
        interests.
      </p>

      <div className="resume-container">
        <div className="resume-card">
          <a
            href="/resume.pdf"
            download="Dr_Ravi_Banoth_CV.pdf"
            // className="resume-download-btn"
          >
            Download CV
          </a>
        </div>

        {/* <div className="resume-card">
          <h3>📋 Short Resume</h3>
          <p>
            Brief professional summary highlighting key qualifications and
            recent achievements.
          </p>
          <a
            href="/resume-short.pdf"
            download="Dr_Ravi_Banoth_Resume.pdf"
            className="resume-download-btn"
          >
            Download Resume
          </a>
        </div> */}

        <div className="resume-preview">
          <h3>Preview</h3>
          <div className="pdf-viewer">
            <embed
              src="/resume.pdf"
              type="application/pdf"
              width="100%"
              height="600px"
            />
          </div>
          <p className="pdf-fallback">
            If the PDF viewer doesn't work, please download the file directly
            using the button above.
          </p>
        </div>
      </div>
    </section>
  );
}
