"use client"

import { useState } from "react"
import Sidebar from "@/components/Sidebar"
import Navbar from "@/components/Navbar"
import Content from "@/components/Content"

type Section = "about" | "experience" | "publications" | "education" | "contact"

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>("about")

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-wrapper">
        <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />
        <Content activeSection={activeSection} />
      </div>
    </div>
  )
}
