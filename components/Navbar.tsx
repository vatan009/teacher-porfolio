type Section = "about" | "experience" | "publications" | "education" | "contact"

interface NavbarProps {
  activeSection: Section
  onSectionChange: (section: Section) => void
}

const navItems: { id: Section; label: string }[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "publications", label: "Publications" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
]

export default function Navbar({ activeSection, onSectionChange }: NavbarProps) {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              className={`nav-item ${activeSection === item.id ? "active" : ""}`}
              onClick={() => onSectionChange(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
