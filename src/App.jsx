import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { id: "hero", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "timeline", label: "Certifications" },
  { id: "projects", label: "Projects" },
  { id: "career", label: "Career Map" },
  { id: "contact", label: "Contact" },
];

const SKILLS = [
  { category: "Data Protection", items: ["Rubrik CDM", "RSC-P", "SLA Management", "Snapshot Verification", "Replication Monitoring", "BDSR Reporting"] },
  { category: "Systems & Virtualization", items: ["VMware vCenter", "Windows Server", "ServiceNow", "CMDB Management", "SSH / PuTTY", "Linux Fundamentals"] },
  { category: "Security & Compliance", items: ["Data Spill Response", "Security+ (CompTIA)", "DoD 8570/8140", "Incident Management", "Change Control", "IAM Fundamentals"] },
  { category: "Networking", items: ["CCNA (Cisco)", "Network+", "TCP/IP", "DNS / DHCP", "VLANs", "Firewall Concepts"] },
  { category: "Scripting & Automation", items: ["Python", "PowerShell", "CLI Automation", "BDSR Automation (RSC-P)", "Bash", "Git / GitHub"] },
  { category: "Cloud & Emerging", items: ["Azure (AZ-104 in progress)", "Azure Portal", "ARM Concepts", "Azure AD / Entra ID", "Cloud Fundamentals", "Infrastructure as Code (learning)"] },
];

const CERTS = [
  { date: "Nov 2024", label: "CompTIA A+", status: "earned", desc: "Hardware, software, and IT operations foundation." },
  { date: "Jan 2025", label: "CompTIA Network+", status: "earned", desc: "Networking fundamentals, TCP/IP, and infrastructure." },
  { date: "May 2025", label: "Cisco CCNA", status: "earned", desc: "Enterprise networking, routing, and switching." },
  { date: "Jul 2025", label: "Rubrik RCSA", status: "earned", desc: "Rubrik Certified Systems Administrator — data protection core." },
  { date: "Dec 2025", label: "CompTIA Security+", status: "earned", desc: "Security operations, threat detection, and compliance." },
  { date: "2026 Q2–Q3", label: "PCAP (Python)", status: "progress", desc: "Certified Associate in Python Programming — automation and scripting." },
  { date: "2026 Q2–Q3", label: "Microsoft AZ-104", status: "progress", desc: "Azure Administrator — cloud infrastructure and identity." },
  { date: "2026–2027", label: "CompTIA CySA+", status: "planned", desc: "Cybersecurity analyst — threat intelligence and behavioral analytics." },
  { date: "2026–2027", label: "Microsoft AZ-500", status: "planned", desc: "Azure Security Engineer — cloud security posture management." },
  { date: "2027+", label: "CISSP / CISM", status: "planned", desc: "Senior security leadership and architecture credentials." },
];

const PROJECTS = [
  {
    title: "Job Application Tracker",
    tech: ["React", "Vercel", "localStorage"],
    desc: "A full-featured job search dashboard built to manage an active application pipeline. Features color-coded age badges, drag-to-reorder, status tracking, and dark charcoal theme. Deployed live on Vercel.",
    link: "https://job-application-tracker-seven-beta.vercel.app",
    icon: "📋",
  },
  {
    title: "AZ-104 Exam Prep Tool",
    tech: ["React", "Vercel", "Anthropic API"],
    desc: "A custom Azure Administrator study application with practice exams, topic drilling, and live lab scenario walkthroughs. Built to supplement the Scott Duffy Udemy course with hands-on reinforcement.",
    link: "https://az104-exam-prep.vercel.app",
    icon: "☁️",
  },
  {
    title: "AZ-104 Lab Environment",
    tech: ["React", "Vercel", "Azure"],
    desc: "An interactive lab companion for Azure Administrator study, built to track progress through live Azure trial exercises. Paired with real-world portal practice for hands-on certification prep.",
    link: "https://az104-labs.vercel.app",
    icon: "🧪",
  },
  {
    title: "BDSR Automation (RSC-P)",
    tech: ["Python", "Rubrik RSC-P", "ServiceNow"],
    desc: "Automated the daily Backup Data Status Report workflow for Pratt & Whitney environments using Rubrik RSC-P. Eliminated manual report generation, ensured consistent SLA visibility, and distributed results automatically to team members.",
    link: null,
    icon: "⚙️",
  },
];

const CAREER_STEPS = [
  {
    title: "Data Protection Analyst",
    timeframe: "Near Term",
    certs: ["Security+", "RCSA", "AZ-104"],
    desc: "Transition from infrastructure operations into a dedicated data protection role. Leverage Rubrik CDM/RSC-P expertise and data spill SME experience as core differentiators.",
    current: true,
  },
  {
    title: "Senior Data Protection Analyst",
    timeframe: "1–2 Years",
    certs: ["CySA+", "AZ-500"],
    desc: "Deepen specialization in data classification, DLP frameworks, and cloud backup strategy. Lead junior analysts and own SLA governance.",
  },
  {
    title: "Information Security Engineer",
    timeframe: "3–4 Years",
    certs: ["SC-300", "CCSP"],
    desc: "Bridge data protection and full security engineering. Own security architecture decisions, incident response playbooks, and compliance frameworks.",
  },
  {
    title: "Senior Security Engineer",
    timeframe: "5–6 Years",
    certs: ["CISSP", "CISM"],
    desc: "Lead enterprise-scale security programs. Mentor junior engineers and drive organizational security posture improvement.",
  },
  {
    title: "Security Architect / CISO Track",
    timeframe: "7–10 Years",
    certs: ["CISM", "Executive Programs"],
    desc: "Design security strategy at the organizational level. Shape policy, culture, and technology investment across the enterprise.",
  },
];

function useActiveSection() {
  const [active, setActive] = useState("hero");
  useEffect(() => {
    const handler = () => {
      const offsets = NAV_LINKS.map(({ id }) => {
        const el = document.getElementById(id);
        return { id, top: el ? el.getBoundingClientRect().top : 9999 };
      });
      const visible = offsets.filter((o) => o.top <= 120);
      if (visible.length) setActive(visible[visible.length - 1].id);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return active;
}

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Portfolio() {
  const active = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ fontFamily: "'Syne', 'DM Sans', sans-serif", background: "#111315", color: "#E8EAF0", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #111315; }
        ::selection { background: #4AB3E8; color: #0a0c0e; }
        ::-webkit-scrollbar { width: 4px; } 
        ::-webkit-scrollbar-track { background: #1a1d21; }
        ::-webkit-scrollbar-thumb { background: #4AB3E8; border-radius: 2px; }

        .nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #8892a0;
          cursor: pointer;
          padding: 6px 0;
          border-bottom: 2px solid transparent;
          transition: color 0.2s, border-color 0.2s;
          background: none;
          border-top: none; border-left: none; border-right: none;
        }
        .nav-link:hover { color: #E8EAF0; }
        .nav-link.active { color: #4AB3E8; border-bottom-color: #4AB3E8; }

        .section { padding: 100px 0; max-width: 1100px; margin: 0 auto; padding-left: 40px; padding-right: 40px; }
        .section-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #4AB3E8;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .section-label::after {
          content: '';
          flex: 1;
          max-width: 60px;
          height: 1px;
          background: #4AB3E8;
          opacity: 0.4;
        }
        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 700;
          color: #E8EAF0;
          line-height: 1.1;
          margin-bottom: 16px;
        }
        .section-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 17px;
          font-weight: 300;
          color: #8892a0;
          line-height: 1.7;
          max-width: 600px;
          margin-bottom: 60px;
        }

        .skill-card {
          background: #1a1d21;
          border: 1px solid #252a30;
          border-radius: 12px;
          padding: 28px;
          transition: border-color 0.2s, transform 0.2s;
        }
        .skill-card:hover { border-color: #4AB3E8; transform: translateY(-2px); }
        .skill-category {
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #4AB3E8;
          margin-bottom: 16px;
        }
        .skill-tag {
          display: inline-block;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: #c4cad4;
          background: #252a30;
          border-radius: 6px;
          padding: 5px 12px;
          margin: 4px 4px 4px 0;
        }

        .cert-item {
          display: flex;
          gap: 24px;
          align-items: flex-start;
          padding: 24px 0;
          border-bottom: 1px solid #1e2228;
          transition: opacity 0.2s;
        }
        .cert-item:last-child { border-bottom: none; }
        .cert-dot {
          width: 12px; height: 12px;
          border-radius: 50%;
          margin-top: 5px;
          flex-shrink: 0;
        }
        .cert-date {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: #8892a0;
          min-width: 90px;
          padding-top: 2px;
        }
        .cert-name {
          font-family: 'Syne', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #E8EAF0;
          margin-bottom: 4px;
        }
        .cert-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: #8892a0;
          line-height: 1.5;
        }
        .cert-badge {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 20px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .project-card {
          background: #1a1d21;
          border: 1px solid #252a30;
          border-radius: 16px;
          padding: 36px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: border-color 0.25s, transform 0.25s;
          cursor: default;
        }
        .project-card:hover { border-color: #4AB3E8; transform: translateY(-4px); }
        .project-icon { font-size: 32px; }
        .project-title {
          font-family: 'Syne', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #E8EAF0;
        }
        .project-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          color: #8892a0;
          line-height: 1.7;
          flex: 1;
        }
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .tech-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: #4AB3E8;
          background: rgba(74, 179, 232, 0.08);
          border: 1px solid rgba(74, 179, 232, 0.2);
          border-radius: 6px;
          padding: 3px 10px;
        }
        .project-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #4AB3E8;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 4px;
          transition: gap 0.2s;
        }
        .project-link:hover { gap: 10px; }

        .career-step {
          display: flex;
          gap: 32px;
          position: relative;
          padding-bottom: 48px;
        }
        .career-step:last-child { padding-bottom: 0; }
        .career-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
          width: 24px;
        }
        .career-node {
          width: 24px; height: 24px;
          border-radius: 50%;
          border: 2px solid #252a30;
          background: #111315;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          z-index: 1;
        }
        .career-node.active {
          border-color: #4AB3E8;
          background: rgba(74, 179, 232, 0.15);
        }
        .career-node.active::after {
          content: '';
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #4AB3E8;
        }
        .career-node.future::after {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #252a30;
        }
        .career-line {
          flex: 1;
          width: 2px;
          background: linear-gradient(to bottom, #252a30, #1a1d21);
          margin-top: 4px;
        }
        .career-content {
          flex: 1;
          padding-top: 2px;
        }
        .career-timeframe {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #4AB3E8;
          margin-bottom: 6px;
        }
        .career-title-text {
          font-family: 'Syne', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #E8EAF0;
          margin-bottom: 8px;
        }
        .career-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          color: #8892a0;
          line-height: 1.6;
          margin-bottom: 12px;
        }
        .career-certs { display: flex; flex-wrap: wrap; gap: 8px; }
        .career-cert-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: #c4cad4;
          background: #252a30;
          border-radius: 6px;
          padding: 4px 10px;
        }

        .btn-primary {
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #0a0c0e;
          background: #4AB3E8;
          border: none;
          border-radius: 8px;
          padding: 14px 32px;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }
        .btn-primary:hover { background: #7dcaf0; transform: translateY(-1px); }

        .btn-secondary {
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #4AB3E8;
          background: transparent;
          border: 2px solid rgba(74, 179, 232, 0.3);
          border-radius: 8px;
          padding: 13px 32px;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s, transform 0.15s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }
        .btn-secondary:hover { border-color: #4AB3E8; background: rgba(74, 179, 232, 0.05); transform: translateY(-1px); }

        .contact-chip {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #1a1d21;
          border: 1px solid #252a30;
          border-radius: 12px;
          padding: 20px 28px;
          font-family: 'DM Sans', sans-serif;
          transition: border-color 0.2s, transform 0.2s;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
        }
        .contact-chip:hover { border-color: #4AB3E8; transform: translateY(-2px); }
        .contact-chip-icon { font-size: 22px; }
        .contact-chip-label { font-size: 12px; color: #8892a0; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 2px; }
        .contact-chip-value { font-size: 15px; font-weight: 500; color: #E8EAF0; }

        .divider { width: 100%; height: 1px; background: #1e2228; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s ease forwards; }
        .fade-up-1 { animation-delay: 0.1s; opacity: 0; }
        .fade-up-2 { animation-delay: 0.25s; opacity: 0; }
        .fade-up-3 { animation-delay: 0.4s; opacity: 0; }
        .fade-up-4 { animation-delay: 0.55s; opacity: 0; }

        @media (max-width: 768px) {
          .section { padding: 60px 20px; }
          .hero-grid { flex-direction: column !important; }
          .skills-grid { grid-template-columns: 1fr !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .nav-links-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(17, 19, 21, 0.88)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #1e2228",
        height: 64,
        display: "flex", alignItems: "center",
        padding: "0 40px",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", maxWidth: 1100, margin: "0 auto" }}>
          <div
            onClick={() => scrollTo("hero")}
            style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}
          >
            <div style={{
              width: 34, height: 34, borderRadius: 8,
              background: "rgba(74, 179, 232, 0.12)",
              border: "1px solid rgba(74, 179, 232, 0.3)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800, fontSize: 14,
              color: "#4AB3E8",
              letterSpacing: "0.02em",
            }}>JO</div>
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: "#E8EAF0", letterSpacing: "0.02em" }}>Justin Olson</span>
          </div>

          <div className="nav-links-desktop" style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {NAV_LINKS.map(({ id, label }) => (
              <button key={id} className={`nav-link ${active === id ? "active" : ""}`} onClick={() => scrollTo(id)}>{label}</button>
            ))}
          </div>

          <button
            className="nav-mobile-btn"
            style={{ display: "none", background: "none", border: "none", color: "#E8EAF0", fontSize: 22, cursor: "pointer" }}
            onClick={() => setMenuOpen(!menuOpen)}
          >☰</button>
        </div>
      </nav>

      {menuOpen && (
        <div style={{
          position: "fixed", top: 64, left: 0, right: 0, zIndex: 99,
          background: "#111315", borderBottom: "1px solid #1e2228",
          padding: "20px 24px", display: "flex", flexDirection: "column", gap: 16,
        }}>
          {NAV_LINKS.map(({ id, label }) => (
            <button key={id} className={`nav-link ${active === id ? "active" : ""}`}
              style={{ textAlign: "left", fontSize: 15 }}
              onClick={() => { scrollTo(id); setMenuOpen(false); }}>
              {label}
            </button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="hero" style={{ paddingTop: 140, paddingBottom: 100, maxWidth: 1100, margin: "0 auto", padding: "140px 40px 100px" }}>
        <div className="fade-up fade-up-1" style={{ marginBottom: 20 }}>
          <span style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 12,
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#4AB3E8", display: "inline-flex", alignItems: "center", gap: 8,
          }}>
            <span style={{ width: 28, height: 1, background: "#4AB3E8", display: "inline-block" }}></span>
            Systems Administrator · Data Protection Specialist
          </span>
        </div>

        <h1 className="fade-up fade-up-2" style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(48px, 8vw, 88px)",
          fontWeight: 800,
          lineHeight: 1.0,
          letterSpacing: "-0.02em",
          color: "#E8EAF0",
          marginBottom: 32,
        }}>
          Justin<br />
          <span style={{ color: "#4AB3E8" }}>Olson.</span>
        </h1>

        <p className="fade-up fade-up-3" style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 19,
          fontWeight: 300,
          color: "#8892a0",
          lineHeight: 1.75,
          maxWidth: 640,
          marginBottom: 48,
        }}>
          U.S. Air Force veteran turned IT professional. I build reliable data protection operations — managing Rubrik environments, automating reporting pipelines, and leading incident response across enterprise infrastructure. Five certifications in 15 months. Transitioning into cybersecurity and data protection engineering.
        </p>

        <div className="fade-up fade-up-4" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <button className="btn-primary" onClick={() => scrollTo("projects")}>
            View Projects <span>→</span>
          </button>
          <button className="btn-secondary" onClick={() => scrollTo("contact")}>
            Get In Touch
          </button>
        </div>

        <div style={{ marginTop: 80, display: "flex", gap: 48, flexWrap: "wrap" }}>
          {[
            { value: "5", label: "Certifications Earned" },
            { value: "15mo", label: "Cert Sprint Window" },
            { value: "2+", label: "Enterprise Environments" },
            { value: "∞", label: "Problems Solved" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 36, fontWeight: 800, color: "#E8EAF0" }}>{value}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#8892a0", marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* SKILLS */}
      <section id="skills" className="section">
        <div className="section-label">Core Competencies</div>
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Built through hands-on enterprise work, certification study, and self-directed lab practice across infrastructure and security domains.</p>

        <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {SKILLS.map(({ category, items }) => (
            <div key={category} className="skill-card">
              <div className="skill-category">{category}</div>
              <div>{items.map(item => <span key={item} className="skill-tag">{item}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* CERTIFICATIONS TIMELINE */}
      <section id="timeline" className="section">
        <div className="section-label">Professional Development</div>
        <h2 className="section-title">Certification Timeline</h2>
        <p className="section-sub">Five certifications earned in 15 months — from foundational to advanced. The roadmap extends into cloud security, Python automation, and cybersecurity engineering.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))", gap: "0 60px" }}>
          {CERTS.map((cert) => (
            <div key={cert.label} className="cert-item">
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 4, gap: 4 }}>
                <div className="cert-dot" style={{
                  background: cert.status === "earned" ? "#4AB3E8" :
                    cert.status === "progress" ? "#e8a44a" : "#252a30",
                  border: cert.status === "planned" ? "2px solid #3a4049" : "none",
                }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                  <div className="cert-name">{cert.label}</div>
                  <span className="cert-badge" style={{
                    background: cert.status === "earned" ? "rgba(74, 179, 232, 0.12)" :
                      cert.status === "progress" ? "rgba(232, 164, 74, 0.12)" : "rgba(255,255,255,0.05)",
                    color: cert.status === "earned" ? "#4AB3E8" :
                      cert.status === "progress" ? "#e8a44a" : "#8892a0",
                    border: `1px solid ${cert.status === "earned" ? "rgba(74, 179, 232, 0.25)" :
                      cert.status === "progress" ? "rgba(232, 164, 74, 0.25)" : "#252a30"}`,
                  }}>
                    {cert.status === "earned" ? "✓ Earned" : cert.status === "progress" ? "In Progress" : "Planned"}
                  </span>
                </div>
                <div className="cert-date" style={{ marginBottom: 6 }}>{cert.date}</div>
                <div className="cert-desc">{cert.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="section-label">Built Things</div>
        <h2 className="section-title">Projects</h2>
        <p className="section-sub">Tools built for real purposes — to manage an active job search, prep for certifications, and automate operational workflows. Every project solves an actual problem.</p>

        <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {PROJECTS.map((p) => (
            <div key={p.title} className="project-card">
              <div className="project-icon">{p.icon}</div>
              <div className="project-title">{p.title}</div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-tech">
                {p.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
              </div>
              {p.link ? (
                <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
                  View Live <span>→</span>
                </a>
              ) : (
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#3a4049", fontStyle: "italic" }}>Internal / Production Tool</span>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* CAREER MAP */}
      <section id="career" className="section">
        <div className="section-label">The Long Game</div>
        <h2 className="section-title">Career Roadmap</h2>
        <p className="section-sub">Expertise compounds. Compensation follows expertise. This is the deliberate path from data protection operations into cybersecurity engineering and leadership.</p>

        <div style={{ maxWidth: 720 }}>
          {CAREER_STEPS.map((step, i) => (
            <div key={step.title} className="career-step">
              <div className="career-left">
                <div className={`career-node ${step.current ? "active" : "future"}`} />
                {i < CAREER_STEPS.length - 1 && <div className="career-line" />}
              </div>
              <div className="career-content">
                <div className="career-timeframe">{step.timeframe}</div>
                <div className="career-title-text">
                  {step.title}
                  {step.current && (
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif", fontSize: 11,
                      fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase",
                      color: "#4AB3E8", background: "rgba(74, 179, 232, 0.12)",
                      border: "1px solid rgba(74, 179, 232, 0.2)",
                      borderRadius: 20, padding: "3px 10px", marginLeft: 12,
                      verticalAlign: "middle",
                    }}>Target</span>
                  )}
                </div>
                <div className="career-desc">{step.desc}</div>
                <div className="career-certs">
                  {step.certs.map(c => <span key={c} className="career-cert-tag">{c}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* CONTACT */}
      <section id="contact" className="section" style={{ paddingBottom: 120 }}>
        <div className="section-label">Let's Connect</div>
        <h2 className="section-title">Contact</h2>
        <p className="section-sub">Open to data protection, security, and systems administration opportunities. Actively pursuing roles in the Dallas–Fort Worth metro and remote positions nationally.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, maxWidth: 720, marginBottom: 48 }}>
          <div className="contact-chip">
            <span className="contact-chip-icon">💼</span>
            <div>
              <div className="contact-chip-label">LinkedIn</div>
              <div className="contact-chip-value">justinolson34</div>
            </div>
          </div>
          <div className="contact-chip">
            <span className="contact-chip-icon">🐙</span>
            <div>
              <div className="contact-chip-label">GitHub</div>
              <div className="contact-chip-value">github.com/[handle]</div>
            </div>
          </div>
          <div className="contact-chip">
            <span className="contact-chip-icon">📍</span>
            <div>
              <div className="contact-chip-label">Location</div>
              <div className="contact-chip-value">Melissa, TX (DFW)</div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a className="btn-primary" href="#" style={{ textDecoration: "none" }}>
            Download Resume ↓
          </a>
        </div>

        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#3a4049", marginTop: 24 }}>
          References available upon request.
        </p>
      </section>

      {/* FOOTER */}
      <div style={{ borderTop: "1px solid #1e2228", padding: "32px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: 1100, margin: "0 auto", flexWrap: "wrap", gap: 12 }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, color: "#8892a0" }}>Justin Olson</span>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#3a4049" }}>Systems Administrator · Data Protection · Security</span>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#3a4049" }}>Melissa, TX</span>
      </div>
    </div>
  );
}
