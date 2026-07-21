import { useState, useEffect } from "react";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "focus", label: "Current Focus" },
  { id: "contact", label: "Contact" },
];

const EXPERIENCE = [
  {
    title: "System Administrator",
    company: "VSO — Raytheon Technologies / Pratt & Whitney",
    period: "November 2025 – Present",
    summary: "Enterprise backup operations and infrastructure support across Raytheon Technologies and Pratt & Whitney environments.",
    narrative: [
      "Support enterprise backup infrastructure for Raytheon Technologies and Pratt & Whitney by managing operational health, onboarding new environments, and ensuring reliable protection of production systems across geographically distributed enterprise environments. Responsibilities span the full operational lifecycle of enterprise backup services, from onboarding new production environments through ongoing operational support, backup validation, infrastructure change coordination, documentation, and production handoffs. Regularly investigate backup failures, validate recoverability through test restores, and ensure backup integrity across critical business systems. In addition to daily operations, I continuously improve team efficiency through standardized documentation, reusable operational templates, reporting enhancements, and process improvements. I regularly collaborate with virtualization, Windows, storage, networking, engineering, and customer teams to support enterprise migrations, maintain operational stability, and improve long-term service reliability. I was also selected to provide temporary on-site operational coverage for an enterprise data center, supporting production infrastructure activities and vendor coordination during a live deployment.",
    ],
    technologies: ["Rubrik CDM", "Rubrik Security Cloud (RSC)", "VMware vCenter", "VMware vSphere", "ServiceNow", "PuTTY / SSH", "Microsoft 365", "Powershell", "CMDB", "Enterprise Backup & Recovery"],
    highlights: [
      "Successfully onboarded multiple enterprise environments into Rubrik by coordinating SLA creation, backup validation, Technical Service Documentation (TSD), CMDB updates, and production handoffs.",
      "Maintained operational health across Raytheon Technologies and Pratt & Whitney environments by proactively investigating and resolving replication, snapshot, virtualization, VSS, and backup failures.",
      "Executed backup validation through VM test restores, replication monitoring, snapshot verification, and post-change validation to ensure production recoverability.",
      "Developed and maintained Technical Service Documentation (TSD), CMDB records, operational procedures, and knowledge base documentation supporting long-term service continuity.",
      "Coordinated ServiceNow change requests for agent installations, ESXi host additions, infrastructure updates, server reboots, and production environment changes.",
      "Improved team efficiency through standardized documentation, reusable operational templates, reporting enhancements, and continuous process improvement initiatives.",
      "Selected to provide on-site operational coverage at an enterprise data center, coordinating vendor activities, supporting infrastructure operations, and serving as the primary on-site technical representative during scheduled engineering work.",
      "Collaborated daily with virtualization, Windows, storage, networking, engineering, and customer teams to troubleshoot complex production issues and maintain enterprise backup reliability.",
    ],
  },
  {
    title: "Service Delivery Manager",
    company: "VSO",
    period: "September 2025 – November 2025",
    summary: "Managed inbound work triage, team communications, and daily delivery operations for 24x7 managed services.",
    narrative: [
      "Stepped into a Service Delivery Manager role to support operational continuity during a transitional period, overseeing inbound work triage and ensuring SLA and SLO commitments were met across active client accounts.",
      "Served as the primary coordination point between client teams, delivery engineers, and internal leadership — managing priorities, escalations, and communications across multiple active engagements simultaneously.",
      "Produced weekly, monthly, and quarterly operational reports for leadership and executive stakeholders, providing visibility into delivery performance, team capacity, and open issues.",
    ],
    technologies: ["ServiceNow", "Microsoft 365", "Teams", "SharePoint"],
    highlights: [
      "Triaged and assigned inbound work to technical teams ensuring SLA/SLO compliance.",
      "Managed client, partner, and delivery team communications across multiple active accounts.",
      "Oversaw daily delivery tasks and team coverage for 24x7 managed services.",
      "Produced weekly, monthly, and quarterly reports for leadership and executives.",
    ],
  },
  {
    title: "Rubrik Administrator",
    company: "VSO — Raytheon Technologies",
    period: "June 2025 – September 2025",
    summary: "Supported Rubrik appliance deployments, migrations, and hyper-care activities alongside Rubrik engineering teams.",
    narrative: [
      "Embedded with Rubrik engineering teams to support enterprise appliance deployments and post-installation hyper-care activities at Raytheon Technologies data center locations. Gained direct hands-on exposure to production Rubrik infrastructure during active migration projects.",
      "Responsible for creating and maintaining Technical Support Documents (TSDs) for each deployment, ensuring operational teams had accurate reference material following engineering handoff. Assisted with migration workflows, environment validation, and pre-production testing.",
      "Earned the Rubrik Certified Systems Administrator (RCSA) certification during this role, formalizing the hands-on knowledge built through direct deployment work and positioning for the transition into the System Administrator role.",
    ],
    technologies: ["Rubrik CDM", "Rubrik Security Cloud", "VMware vSphere", "Windows Server", "ServiceNow"],
    highlights: [
      "Supported appliance installations and hyper-care activities alongside Rubrik engineers at RTX data center locations.",
      "Assisted with migration workflows and deployment validation in production environments.",
      "Created and maintained Technical Support Documents (TSDs) for Rubrik deployments.",
      "Earned RCSA certification during this role, building foundational Rubrik expertise applied directly in production.",
    ],
  },
  {
    title: "Deskside Support Technician",
    company: "VSO — Raytheon Technologies",
    period: "November 2024 – June 2025",
    summary: "End-user support, executive device management, data spill remediation, and imaging operations at a secured Raytheon facility.",
    narrative: [
      "Provided deskside support at a secured Raytheon Technologies facility, supporting a large end-user population across hardware, software, and network issues. Handled executive equipment refreshes and deployments requiring careful coordination and discretion.",
      "Selected as one of only two team members trusted to respond to data spill incidents — a high-stakes role requiring precise execution, clear documentation, and close coordination with security and management. Managed the full remediation cycle from initial containment through device restoration and user return.",
      "Identified an operational inefficiency in the laptop reimaging process — devices were scattered across desks with no structure or organization. Proposed and built a 5-shelf imaging station from warehouse shelving and measured Ethernet runs, creating a dedicated space that held 10–12 laptops simultaneously, standardized cabling, freed up a full desk, and directly enabled the team to bring on an additional technician.",
    ],
    technologies: ["Windows 10/11", "ServiceNow", "SCCM / Imaging Tools", "Microsoft 365", "Active Directory", "Hardware Provisioning"],
    highlights: [
      "Served as one of two team members trusted to handle data spill incident remediation at the RTX site.",
      "Built a 5-shelf laptop imaging station from spare materials — improved workflow, freed desk space, enabled additional headcount.",
      "Managed full loaner device lifecycle including allocation, tracking, return, wipe, and reimage.",
      "Supported executive device refreshes requiring careful coordination and documentation.",
      "Conducted IOP audits and resolved hardware, software, and connectivity issues via ServiceNow.",
      "Trained replacement team members on loaner management and imaging processes prior to role transition.",
    ],
  },
  {
    title: "QA Automation Engineer",
    company: "NewRez LLC / Caliber Home Loans",
    period: "February 2016 – February 2024",
    summary: "Eight-year progression from Online Support Analyst through QA Automation Engineer in a mortgage technology environment.",
    narrative: [
      "Spent eight years at NewRez LLC / Caliber Home Loans in a progression of roles spanning customer support, operations, and eventually quality assurance and automation engineering. The trajectory reflected consistent growth in technical scope and responsibility over time.",
      "In QA and automation roles, supported manual and automated testing workflows including test case creation, validation, regression testing, and deployment support across mortgage servicing applications. Developed internal tooling and managed user provisioning and role-based access controls.",
      "This role provided the foundation in structured process thinking, documentation discipline, and attention to operational detail that carries directly into enterprise IT infrastructure work today.",
    ],
    technologies: ["QA Tooling", "Test Case Management", "User Provisioning", "RBAC", "Internal Web Applications", "Microsoft 365"],
    highlights: [
      "Progressed from Online Support Analyst to QA Automation Engineer over eight years.",
      "Supported manual and automated testing including test case creation, validation, and deployment support.",
      "Developed internal tools and managed user provisioning and role-based access controls.",
      "Built foundational skills in process discipline, documentation, and structured operational thinking.",
    ],
  },
];

const SKILLS = [
  { category: "Data Protection", items: ["Rubrik CDM", "RSC-P", "SLA Management", "Snapshot Verification", "Replication Monitoring", "BDSR Reporting"] },
  { category: "Systems & Virtualization", items: ["VMware vCenter", "Windows Server", "ServiceNow", "CMDB Management", "SSH / PuTTY", "Linux Fundamentals"] },
  { category: "Security & Compliance", items: ["Data Spill Response", "Security+ (CompTIA)", "DoD 8570/8140", "Incident Management", "Change Control", "IAM Fundamentals"] },
  { category: "Networking", items: ["CCNA (Cisco)", "Network+", "TCP/IP", "DNS / DHCP", "VLANs", "Firewall Concepts"] },
  { category: "Scripting & Automation", items: ["Python", "PowerShell", "CLI Automation", "BDSR Automation (RSC-P)", "Bash", "Git / GitHub"] },
  { category: "Cloud & Emerging", items: ["Azure (AZ-104 in progress)", "Azure Portal", "ARM Concepts", "Azure AD / Entra ID", "Cloud Fundamentals", "Infrastructure as Code (learning)"] },
];

const PROJECTS = [
  {
    title: "Job Application Tracker",
    tech: ["React", "Vercel", "localStorage"],
    desc: "Built during an active job search to solve a real problem — tracking 20+ applications across multiple platforms with no reliable system. Features color-coded age badges that visually flag applications going stale, drag-to-reorder prioritization, status tracking from applied through offer, and a clean dark interface designed for daily use. Entirely self-directed from concept to deployment on Vercel.",
    link: "https://job-application-tracker-seven-beta.vercel.app",
    icon: "📋",
  },
  {
    title: "AZ-104 Exam Prep Tool",
    tech: ["React", "Vercel", "Anthropic API"],
    desc: "Built alongside active AZ-104 certification study to reinforce concepts beyond passive video watching. Generates practice questions by topic area, tracks weak areas over time, and simulates exam-style scenario questions using the Anthropic API. Designed to complement the Scott Duffy Udemy course with active recall rather than passive review. Deployed on Vercel and used daily during prep.",
    link: "https://az104-exam-prep.vercel.app",
    icon: "☁️",
  },
  {
    title: "AZ-104 Lab Environment",
    tech: ["React", "Vercel", "Azure"],
    desc: "A structured lab tracker built to accompany hands-on work in a live Azure trial environment. Maps exercises to AZ-104 exam objectives, tracks completion by topic, and surfaces what still needs work. Built because the gap between watching a demo and actually executing it in the portal is where most exam failures happen — this closes that gap with deliberate, logged practice.",
    link: "https://az104-labs.vercel.app",
    icon: "🧪",
  },
  {
    title: "BDSR Automation (RSC-P)",
    tech: ["Python", "Rubrik RSC-P", "ServiceNow"],
    desc: "Identified a daily manual process where backup status reports for Pratt & Whitney environments required hand-pulling data, formatting, and distributing to the team. Built an automated solution using Rubrik RSC-P that queries targeted clusters and SLA domains, compiles results, and distributes the report to designated team members automatically. Eliminated the manual process entirely and ensured consistent visibility into backup health.",
    link: null,
    icon: "⚙️",
  },
  {
    title: "Imaging Station Build",
    tech: ["Hardware", "Physical Infrastructure", "Process Improvement"],
    desc: "Built and implemented a dedicated imaging rack after identifying decentralized laptop reimaging scattered across multiple cubicles. Proposed solution to management, sourced shelving from warehouse, and constructed a structured 5-shelf station capable of handling 10–12 laptops simultaneously. Standardized cabling by measuring and terminating Ethernet runs to eliminate clutter, improving workspace organization, freeing up a desk, and enabling onboarding of an additional technician.",
    link: null,
    icon: "🖥️",
  },
];

const CERTS = [
  { date: "Nov 2024", label: "CompTIA A+", status: "earned", desc: "Hardware, software, and IT operations foundation." },
  { date: "Jan 2025", label: "CompTIA Network+", status: "earned", desc: "Networking fundamentals, TCP/IP, and infrastructure." },
  { date: "May 2025", label: "Cisco CCNA", status: "earned", desc: "Enterprise networking, routing, and switching." },
  { date: "Jul 2025", label: "Rubrik RCSA", status: "earned", desc: "Rubrik Certified Systems Administrator — data protection core." },
  { date: "Dec 2025", label: "CompTIA Security+", status: "earned", desc: "Security operations, threat detection, and compliance." },
  { date: "2026 Q2–Q3", label: "CompTIA Linux+", status: "progress", desc: "Linux administration, CLI operations, and system management." },
  { date: "2026 Q2–Q3", label: "Microsoft AZ-104", status: "progress", desc: "Azure Administrator — cloud infrastructure and identity." },
  { date: "2026 Q2–Q3", label: "PCAP (Python)", status: "progress", desc: "Certified Associate in Python Programming — automation and scripting." },
  { date: "2026–2027", label: "CompTIA CySA+", status: "planned", desc: "Cybersecurity analyst — threat intelligence and behavioral analytics." },
  { date: "2026–2027", label: "Microsoft AZ-500", status: "planned", desc: "Azure Security Engineer — cloud security posture management." },
  { date: "2027+", label: "CISSP / CISM", status: "planned", desc: "Senior security leadership and architecture credentials." },
];

const FOCUS_AREAS = [
  { icon: "🐧", title: "Linux Administration", desc: "Building CLI proficiency through Ubuntu VM lab work and active Linux+ certification study." },
  { icon: "🐍", title: "Python Automation", desc: "Expanding scripting capabilities with Python, working toward PCAP certification." },
  { icon: "☁️", title: "Azure Infrastructure", desc: "Hands-on Azure portal work and AZ-104 certification prep in a live trial environment." },
  { icon: "🛡️", title: "Enterprise Backup Engineering", desc: "Deepening Rubrik expertise across CDM and RSC-P platforms in production environments." },
  { icon: "🔒", title: "Security Operations", desc: "Applying Security+ fundamentals toward real-world incident management and compliance workflows." },
];

function useActiveSection() {
  const [active, setActive] = useState("about");
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

function ExperienceCard({ job }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      background: "#1a1d21",
      border: `1px solid ${open ? "#4AB3E8" : "#252a30"}`,
      borderRadius: 12, marginBottom: 16, overflow: "hidden",
      transition: "border-color 0.2s",
    }}>
      <div onClick={() => setOpen(!open)} style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "24px 28px", cursor: "pointer", gap: 16,
      }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: "'Roboto', sans-serif", fontSize: 17, fontWeight: 700, color: "#E8EAF0", marginBottom: 6 }}>{job.title}</div>
          <div style={{ fontFamily: "'Roboto', sans-serif", fontSize: 13, color: "#4AB3E8", display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <span>{job.company}</span>
            <span style={{ color: "#252a30" }}>|</span>
            <span style={{ color: "#8892a0" }}>{job.period}</span>
          </div>
          {!open && (
            <div style={{ fontFamily: "'Roboto', sans-serif", fontSize: 13, fontWeight: 300, color: "#8892a0", marginTop: 8, lineHeight: 1.5 }}>{job.summary}</div>
          )}
        </div>
        <div style={{
          width: 32, height: 32, borderRadius: 8, flexShrink: 0,
          background: open ? "rgba(74,179,232,0.12)" : "#252a30",
          border: `1px solid ${open ? "rgba(74,179,232,0.3)" : "#2e3540"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "background 0.2s, border-color 0.2s, transform 0.3s",
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          color: open ? "#4AB3E8" : "#8892a0", fontSize: 13,
        }}>▼</div>
      </div>

      {open && (
        <div style={{ borderTop: "1px solid #252a30", padding: "28px 28px 32px" }}>
          <div style={{ fontFamily: "'Roboto', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#4AB3E8", marginBottom: 14 }}>Summary</div>
          <div style={{ marginBottom: 32 }}>
            {job.narrative.map((para, i) => (
              <p key={i} style={{
                fontFamily: "'Roboto', sans-serif", fontSize: 15, fontWeight: 300,
                color: "#a0a8b4", lineHeight: 1.8,
                marginBottom: i < job.narrative.length - 1 ? 16 : 0,
              }}>{para}</p>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div>
              <div style={{ fontFamily: "'Roboto', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#4AB3E8", marginBottom: 14 }}>Technologies</div>
              <div>{job.technologies.map(t => (
                <span key={t} style={{ display: "inline-block", fontFamily: "'Roboto', sans-serif", fontSize: 13, color: "#c4cad4", background: "#252a30", borderRadius: 6, padding: "5px 12px", margin: "4px 4px 4px 0" }}>{t}</span>
              ))}</div>
            </div>
            <div>
              <div style={{ fontFamily: "'Roboto', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#4AB3E8", marginBottom: 14 }}>Highlights</div>
              <div>{job.highlights.map((h, i) => (
                <div key={i} style={{ fontFamily: "'Roboto', sans-serif", fontSize: 14, fontWeight: 300, color: "#a0a8b4", lineHeight: 1.65, paddingLeft: 16, position: "relative", marginBottom: 10 }}>
                  <span style={{ position: "absolute", left: 0, color: "#4AB3E8", fontSize: 11, top: 4 }}>—</span>{h}
                </div>
              ))}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Portfolio() {
  const active = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ fontFamily: "'Roboto', sans-serif", background: "#111315", color: "#E8EAF0", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #111315; }
        ::selection { background: #4AB3E8; color: #0a0c0e; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #1a1d21; }
        ::-webkit-scrollbar-thumb { background: #4AB3E8; border-radius: 2px; }

        .nav-link { font-family: 'Roboto', sans-serif; font-size: 12px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: #8892a0; cursor: pointer; padding: 6px 0; border-bottom: 2px solid transparent; transition: color 0.2s, border-color 0.2s; background: none; border-top: none; border-left: none; border-right: none; white-space: nowrap; }
        .nav-link:hover { color: #E8EAF0; }
        .nav-link.active { color: #4AB3E8; border-bottom-color: #4AB3E8; }

        .section { padding: 90px 40px; max-width: 1000px; margin: 0 auto; }
        .section-title { font-family: 'Roboto', sans-serif; font-size: clamp(28px, 4vw, 40px); font-weight: 700; color: #E8EAF0; line-height: 1.1; margin-bottom: 12px; }
        .section-sub { font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 300; color: #8892a0; line-height: 1.7; max-width: 620px; margin: 0 auto 48px; text-align: center; }
        .section-title-line { width: 40px; height: 3px; background: #4AB3E8; border-radius: 2px; margin-bottom: 28px; }

        .skill-card { background: #1a1d21; border: 1px solid #252a30; border-radius: 12px; padding: 26px; transition: border-color 0.2s, transform 0.2s; }
        .skill-card:hover { border-color: #4AB3E8; transform: translateY(-2px); }
        .skill-category { font-family: 'Roboto', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #4AB3E8; margin-bottom: 14px; }
        .skill-tag { display: inline-block; font-family: 'Roboto', sans-serif; font-size: 13px; color: #c4cad4; background: #252a30; border-radius: 6px; padding: 5px 12px; margin: 4px 4px 4px 0; }

        .project-card { background: #1a1d21; border: 1px solid #252a30; border-radius: 14px; padding: 32px; display: flex; flex-direction: column; gap: 12px; transition: border-color 0.25s, transform 0.25s; }
        .project-card:hover { border-color: #4AB3E8; transform: translateY(-3px); }
        .project-icon { font-size: 26px; }
        .project-title { font-family: 'Roboto', sans-serif; font-size: 17px; font-weight: 700; color: #E8EAF0; }
        .project-desc { font-family: 'Roboto', sans-serif; font-size: 14px; color: #8892a0; line-height: 1.7; flex: 1; }
        .tech-tag { font-family: 'Roboto', sans-serif; font-size: 11px; color: #4AB3E8; background: rgba(74,179,232,0.08); border: 1px solid rgba(74,179,232,0.2); border-radius: 5px; padding: 3px 9px; display: inline-block; margin: 2px 2px 2px 0; }
        .project-link { font-family: 'Roboto', sans-serif; font-size: 13px; font-weight: 500; color: #4AB3E8; text-decoration: none; display: inline-flex; align-items: center; gap: 5px; margin-top: 4px; transition: gap 0.2s; }
        .project-link:hover { gap: 9px; }

        .cert-item { display: flex; gap: 16px; align-items: flex-start; padding: 18px 0; border-bottom: 1px solid #1e2228; }
        .cert-item:last-child { border-bottom: none; }
        .cert-dot { width: 10px; height: 10px; border-radius: 50%; margin-top: 5px; flex-shrink: 0; }
        .cert-name { font-family: 'Roboto', sans-serif; font-size: 15px; font-weight: 600; color: #E8EAF0; margin-bottom: 3px; }
        .cert-date { font-family: 'Roboto', sans-serif; font-size: 11px; color: #8892a0; margin-bottom: 4px; }
        .cert-desc { font-family: 'Roboto', sans-serif; font-size: 13px; color: #8892a0; line-height: 1.5; }
        .cert-badge { font-family: 'Roboto', sans-serif; font-size: 10px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; padding: 3px 9px; border-radius: 20px; white-space: nowrap; flex-shrink: 0; }

        .focus-card { background: #1a1d21; border: 1px solid #252a30; border-radius: 12px; padding: 28px; display: flex; gap: 18px; align-items: flex-start; transition: border-color 0.2s, transform 0.2s; }
        .focus-card:hover { border-color: #4AB3E8; transform: translateY(-2px); }
        .focus-icon { font-size: 28px; flex-shrink: 0; margin-top: 2px; }
        .focus-title { font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 700; color: #E8EAF0; margin-bottom: 6px; }
        .focus-desc { font-family: 'Roboto', sans-serif; font-size: 14px; font-weight: 300; color: #8892a0; line-height: 1.6; }

        .btn-primary { font-family: 'Roboto', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #0a0c0e; background: #4AB3E8; border: none; border-radius: 8px; padding: 14px 32px; cursor: pointer; transition: background 0.2s, transform 0.15s; display: inline-flex; align-items: center; gap: 8px; text-decoration: none; }
        .btn-primary:hover { background: #7dcaf0; transform: translateY(-1px); }
        .btn-secondary { font-family: 'Roboto', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #4AB3E8; background: transparent; border: 2px solid rgba(74,179,232,0.3); border-radius: 8px; padding: 12px 32px; cursor: pointer; transition: border-color 0.2s, background 0.2s, transform 0.15s; display: inline-flex; align-items: center; gap: 8px; text-decoration: none; }
        .btn-secondary:hover { border-color: #4AB3E8; background: rgba(74,179,232,0.05); transform: translateY(-1px); }

        .contact-chip { display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: 10px; background: #1a1d21; border: 1px solid #252a30; border-radius: 12px; padding: 22px 26px; transition: border-color 0.2s, transform 0.2s; text-decoration: none; color: inherit; }
        .contact-chip:hover { border-color: #4AB3E8; transform: translateY(-2px); }
        .contact-chip-icon { font-size: 22px; }
        .contact-chip-label { font-family: 'Roboto', sans-serif; font-size: 11px; color: #8892a0; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 3px; }
        .contact-chip-value { font-family: 'Roboto', sans-serif; font-size: 15px; font-weight: 500; color: #E8EAF0; }

        .divider { width: 100%; height: 1px; background: #1e2228; }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 0.6s ease forwards; }
        .fade-up-1 { animation-delay: 0.05s; opacity: 0; }
        .fade-up-2 { animation-delay: 0.18s; opacity: 0; }
        .fade-up-3 { animation-delay: 0.3s; opacity: 0; }
        .fade-up-4 { animation-delay: 0.42s; opacity: 0; }

        @media (max-width: 768px) {
          .section { padding: 60px 20px; }
          .skills-grid { grid-template-columns: 1fr !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .focus-grid { grid-template-columns: 1fr !important; }
          .cert-grid { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .nav-links-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
          .hero-btns { flex-direction: column !important; align-items: center !important; }
          .hero-btns button { width: 100%; justify-content: center; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(17,19,21,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #1e2228", height: 60, display: "flex", alignItems: "center", padding: "0 40px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", maxWidth: 1000, margin: "0 auto" }}>
          <div onClick={() => scrollTo("about")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(74,179,232,0.12)", border: "1px solid rgba(74,179,232,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Roboto', sans-serif", fontWeight: 900, fontSize: 13, color: "#4AB3E8" }}>JO</div>
            <span style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: 15, color: "#E8EAF0" }}>Justin Olson</span>
          </div>
          <div className="nav-links-desktop" style={{ display: "flex", alignItems: "center", gap: 28 }}>
            {NAV_LINKS.map(({ id, label }) => (
              <button key={id} className={`nav-link ${active === id ? "active" : ""}`} onClick={() => scrollTo(id)}>{label}</button>
            ))}
          </div>
          <button className="nav-mobile-btn" style={{ display: "none", background: "none", border: "none", color: "#E8EAF0", fontSize: 22, cursor: "pointer" }} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div style={{ position: "fixed", top: 60, left: 0, right: 0, zIndex: 99, background: "#111315", borderBottom: "1px solid #1e2228", padding: "20px 24px", display: "flex", flexDirection: "column", gap: 18 }}>
          {NAV_LINKS.map(({ id, label }) => (
            <button key={id} className={`nav-link ${active === id ? "active" : ""}`} style={{ textAlign: "left", fontSize: 15 }} onClick={() => { scrollTo(id); setMenuOpen(false); }}>{label}</button>
          ))}
        </div>
      )}

      {/* ABOUT */}
      <section id="about" style={{ paddingTop: 130, paddingBottom: 90, maxWidth: 1000, margin: "0 auto", padding: "130px 40px 90px" }}>
        <div className="fade-up fade-up-1" style={{ marginBottom: 18 }}>
          <span style={{ fontFamily: "'Roboto', sans-serif", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: "#4AB3E8", display: "inline-flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 24, height: 1, background: "#4AB3E8", display: "inline-block" }}></span>
            Systems Administrator · Data Protection Specialist
          </span>
        </div>
        <h1 className="fade-up fade-up-2" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "clamp(44px, 7vw, 76px)", fontWeight: 900, lineHeight: 1.0, letterSpacing: "-0.02em", color: "#E8EAF0", marginBottom: 28 }}>
          Justin<br /><span style={{ color: "#4AB3E8" }}>Olson.</span>
        </h1>
        <p className="fade-up fade-up-3" style={{ fontFamily: "'Roboto', sans-serif", fontSize: 18, fontWeight: 300, color: "#8892a0", lineHeight: 1.75, maxWidth: 620, marginBottom: 40, textAlign: "center", margin: "0 auto 40px" }}>
          U.S. Air Force veteran turned IT professional. I build reliable data protection operations — managing Rubrik environments, automating reporting pipelines, and leading incident response across enterprise infrastructure. Five certifications in 15 months, with more in progress. Focused on transitioning into cybersecurity and data protection engineering.
        </p>
        <div className="fade-up fade-up-4 hero-btns" style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
          <button className="btn-primary" onClick={() => scrollTo("experience")}>View Experience →</button>
          <button className="btn-secondary" onClick={() => scrollTo("contact")}>Get In Touch</button>
        </div>
      </section>

      <div className="divider" />

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <div className="section-title-line" />
        <h2 className="section-title">Experience</h2>
        <p className="section-sub">A track record built across enterprise IT operations, data protection, and infrastructure support — with consistent growth in scope and responsibility.</p>
        {EXPERIENCE.map((job) => <ExperienceCard key={job.title} job={job} />)}
      </section>

      <div className="divider" />

      {/* SKILLS */}
      <section id="skills" className="section">
        <div className="section-title-line" />
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-sub">Built through hands-on enterprise work, certification study, and self-directed lab practice across infrastructure and security domains.</p>
        <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 18 }}>
          {SKILLS.map(({ category, items }) => (
            <div key={category} className="skill-card">
              <div className="skill-category">{category}</div>
              <div>{items.map(item => <span key={item} className="skill-tag">{item}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="section-title-line" />
        <h2 className="section-title">Projects</h2>
        <p className="section-sub">Tools built for real purposes — managing an active job search, prepping for certifications, automating operational workflows, and solving physical logistics problems.</p>
        <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 22 }}>
          {PROJECTS.map((p) => (
            <div key={p.title} className="project-card">
              <div className="project-icon">{p.icon}</div>
              <div className="project-title">{p.title}</div>
              <div className="project-desc">{p.desc}</div>
              <div>{p.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}</div>
              {p.link
                ? <a className="project-link" href={p.link} target="_blank" rel="noreferrer">View Live →</a>
                : <span style={{ fontFamily: "'Roboto', sans-serif", fontSize: 12, color: "#3a4049", fontStyle: "italic" }}>Production / Physical Project</span>
              }
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* CERTIFICATIONS */}
      <section id="certifications" className="section">
        <div className="section-title-line" />
        <h2 className="section-title">Certifications</h2>
        <p className="section-sub">Five certifications earned in 15 months. The roadmap continues into cloud security, Linux administration, and Python automation.</p>
        <div className="cert-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "0 52px" }}>
          {CERTS.map((cert) => (
            <div key={cert.label} className="cert-item">
              <div className="cert-dot" style={{ background: cert.status === "earned" ? "#4AB3E8" : cert.status === "progress" ? "#e8a44a" : "#252a30", border: cert.status === "planned" ? "2px solid #3a4049" : "none" }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
                  <div className="cert-name">{cert.label}</div>
                  <span className="cert-badge" style={{
                    background: cert.status === "earned" ? "rgba(74,179,232,0.12)" : cert.status === "progress" ? "rgba(232,164,74,0.12)" : "rgba(255,255,255,0.04)",
                    color: cert.status === "earned" ? "#4AB3E8" : cert.status === "progress" ? "#e8a44a" : "#8892a0",
                    border: `1px solid ${cert.status === "earned" ? "rgba(74,179,232,0.25)" : cert.status === "progress" ? "rgba(232,164,74,0.25)" : "#252a30"}`,
                  }}>
                    {cert.status === "earned" ? "✓ Earned" : cert.status === "progress" ? "In Progress" : "Planned"}
                  </span>
                </div>
                <div className="cert-date">{cert.date}</div>
                <div className="cert-desc">{cert.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* CURRENT FOCUS */}
      <section id="focus" className="section">
        <div className="section-title-line" />
        <h2 className="section-title">Current Focus</h2>
        <p className="section-sub">Active development areas — where time and energy are going right now to build deeper, more specialized expertise.</p>
        <div className="focus-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 18 }}>
          {FOCUS_AREAS.map((f) => (
            <div key={f.title} className="focus-card">
              <div className="focus-icon">{f.icon}</div>
              <div>
                <div className="focus-title">{f.title}</div>
                <div className="focus-desc">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* CONTACT */}
      <section id="contact" className="section" style={{ paddingBottom: 110 }}>
        <div className="section-title-line" />
        <h2 className="section-title">Contact</h2>
        <p className="section-sub">Open to data protection, security, and systems administration opportunities. Actively pursuing roles in the Dallas–Fort Worth metro and remote positions nationally.</p>
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 44 }}>
          <a className="contact-chip" href="https://www.linkedin.com/in/justinolson34/" target="_blank" rel="noreferrer">
            <span className="contact-chip-icon">💼</span>
            <div><div className="contact-chip-label">LinkedIn</div><div className="contact-chip-value">justinolson34</div></div>
          </a>
          <a className="contact-chip" href="https://github.com/8BitJustin" target="_blank" rel="noreferrer">
            <span className="contact-chip-icon">🐙</span>
            <div><div className="contact-chip-label">GitHub</div><div className="contact-chip-value">8BitJustin</div></div>
          </a>
          <div className="contact-chip">
            <span className="contact-chip-icon">📍</span>
            <div><div className="contact-chip-label">Location</div><div className="contact-chip-value">Melissa, TX (DFW)</div></div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a className="btn-primary" href="/resume.pdf" download="Justin_Olson_Resume.pdf" style={{ textDecoration: "none" }}>Download Resume ↓</a>
        </div>
        <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: 13, color: "#3a4049", marginTop: 22, textAlign: "center" }}>References available upon request.</p>
      </section>

      {/* FOOTER */}
      <div style={{ borderTop: "1px solid #1e2228", padding: "28px 40px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: 1000, margin: "0 auto", flexWrap: "wrap", gap: 10 }}>
          <span style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: 14, color: "#8892a0" }}>Justin Olson</span>
          <span style={{ fontFamily: "'Roboto', sans-serif", fontSize: 13, color: "#3a4049" }}>Systems Administrator · Data Protection · Security</span>
          <span style={{ fontFamily: "'Roboto', sans-serif", fontSize: 13, color: "#3a4049" }}>Melissa, TX</span>
        </div>
      </div>
    </div>
  );
}
