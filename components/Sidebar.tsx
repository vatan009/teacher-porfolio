"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function ScholarIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
    </svg>
  );
}

function OrcidIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z" />
    </svg>
  );
}

function ResearchGateIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M19.586 0c2.469 0 4.414 1.945 4.414 4.414v15.172c0 2.469-1.945 4.414-4.414 4.414H4.414C1.945 24 0 22.055 0 19.586V4.414C0 1.945 1.945 0 4.414 0h15.172zm-6.667 15.5c-.934 0-1.701-.767-1.701-1.701s.767-1.701 1.701-1.701 1.701.767 1.701 1.701-.767 1.701-1.701 1.701zm4.667-8.5H7.414c-.934 0-1.701.767-1.701 1.701v5.598c0 .934.767 1.701 1.701 1.701h10.172c.934 0 1.701-.767 1.701-1.701V8.701c0-.934-.767-1.701-1.701-1.701z" />
    </svg>
  );
}

function VidwanIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
    </svg>
  );
}

function ScopusIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm3.5 8c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-7 0c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5z" />
    </svg>
  );
}

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile-section">
        <div className="profile-image">
          <Image
            src="/profile.jpg"
            alt="Dr. Sarah Mitchell"
            width={150}
            height={150}
            priority
          />
        </div>
        <div>
          <h1 className="profile-name">Dr. Ravi Banoth</h1>
          <p className="profile-title">Assistant Professor</p>
          <p className="profile-dept">
            Department of Electronics & Communication Engineering
          </p>
          <div className="text-primary mt-2">
            Indian Institute of Information Technology, Tiruchirapalli
          </div>
        </div>
      </div>

      <div className="contact-section">
        <h3>Contact</h3>
        <ul className="contact-list">
          <li>
            <span className="contact-label">Email</span>
            <a href="mailto:ravib@iiitt.ac.in">ravib@iiitt.ac.in</a>
          </li>
          <li>
            <span className="contact-label">Phone</span>
            <span>+91 98498 82720</span>
          </li>
          <li>
            <span className="contact-label">Office</span>
            <span>Room 2065, First Floor, IIITT</span>
          </li>
          <li>
            <span className="contact-label">Location</span>
            <span>Trichy, Tamil Nadu, India</span>
          </li>
        </ul>
      </div>

      <div className="links-section">
        <h3>Connect</h3>
        <ul className="links-list">
          <li>
            <a
              href="https://scholar.google.co.in/citations?user=Y6WmauoAAAAJ&hl=en&oi=ao"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ScholarIcon />
              <span className="social-link-text">Scholar</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/dr-ravi-banoth-phd-iit-dhn-411011105/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
              <span className="social-link-text">LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href="https://orcid.org/0000-0003-3455-0628"
              target="_blank"
              rel="noopener noreferrer"
            >
              <OrcidIcon />
              <span className="social-link-text">ORCID</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.researchgate.net/profile/Banoth-Ravi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ResearchGateIcon />
              <span className="social-link-text">ResearchGate</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.scopus.com/authid/detail.uri?authorId=57197836657"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ScopusIcon />
              <span className="social-link-text">Scopus</span>
            </a>
          </li>
          <li>
            <a
              href="https://vidwan.inflibnet.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <VidwanIcon />
              <span className="social-link-text">Vidwan</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
