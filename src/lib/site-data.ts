export const navItems = [
  { label: "VPS", href: "/vps" },
  { label: "Dedicated Server", href: "/dedicated-server" },
  { label: "Co-locations", href: "/co-locations" },
  { label: "Web Hosting", href: "/web-hosting" },
  { label: "Blog", href: "/blog" }
];

export const aboutLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Condition", href: "/terms-and-conditions" }
];

export const services = [
  {
    title: "VPS",
    href: "/vps",
    summary:
      "Fast virtual private servers with isolated resources, clean control, and predictable monthly pricing.",
    details:
      "Our VPS platform is designed for teams that want the power of a private server without the operational weight of owning hardware. Every plan includes SSD-backed storage, resource isolation, firewall-ready networking, monitoring hooks, and room to scale when traffic increases. It is a strong fit for SaaS dashboards, ecommerce stores, staging environments, APIs, agency workloads, and businesses moving away from slow shared hosting. You can start small, deploy quickly, and grow into higher CPU, memory, and storage tiers without rebuilding your stack from the beginning."
  },
  {
    title: "Dedicated Server",
    href: "/dedicated-server",
    summary:
      "Bare-metal performance for high-traffic products, database workloads, and security-sensitive systems.",
    details:
      "Dedicated servers give your business complete access to physical compute capacity. This is the right path when performance consistency, compliance control, and deep configuration freedom matter. We help you plan CPU class, RAM, disk layout, bandwidth, operating system, backup method, remote management, and security policies so the final server fits the job instead of forcing your application into a generic template. Dedicated hosting is ideal for large portals, enterprise software, private cloud clusters, media processing, virtualization nodes, analytics databases, and workloads that need sustained performance across the full day."
  },
  {
    title: "Co-locations",
    href: "/co-locations",
    summary:
      "Secure rack space, power, cooling, network access, and remote hands for owned infrastructure.",
    details:
      "Co-location is for organizations that already own or want to own their equipment while still needing a professional data center environment. We provide the physical foundation: resilient power, cooling, carrier connectivity, access control, remote support, and operational discipline. Your hardware stays under your ownership while your facility risks reduce dramatically. Co-location works well for financial systems, telecom deployments, backup appliances, private virtualization clusters, GPU machines, compliance-led workloads, and companies that want more control than public cloud can offer without building a facility from scratch."
  },
  {
    title: "Web Hosting",
    href: "/web-hosting",
    summary:
      "Reliable managed hosting for business websites, landing pages, WordPress sites, and email-ready domains.",
    details:
      "Our web hosting plans are made for businesses that need a fast, dependable online presence without spending every week inside server settings. The environment is tuned for clean page loading, secure file handling, SSL, domain routing, backups, and simple expansion. Whether you are publishing a company website, portfolio, product catalog, blog, or campaign page, the hosting stack keeps the essentials stable. We focus on practical performance, clear support, and migration help so your site feels professional from the first visit."
  }
];

export const pageContent: Record<
  string,
  {
    title: string;
    eyebrow: string;
    intro: string;
    sections: Array<{ title: string; body: string }>;
  }
> = {
  vps: {
    title: "VPS Hosting Built For Speed, Control, And Clean Scaling",
    eyebrow: "Virtual Private Servers",
    intro:
      "A VPS gives your website or application dedicated breathing room inside a professionally managed server environment. It is faster and more flexible than shared hosting, easier to operate than full bare metal, and practical for companies that want predictable cost with genuine technical control.",
    sections: [
      {
        title: "Why Choose VPS",
        body:
          "VPS hosting is a smart middle path for growing businesses. You get isolated CPU, memory, storage, and network capacity, so another customer's traffic does not quietly slow down your application. Developers can install packages, configure services, run background workers, create staging deployments, and tune the system for their stack. Business owners get a platform that can start lean and expand as demand grows. This makes VPS ideal for ecommerce sites, dashboards, SaaS projects, API services, internal tools, and agencies managing several client properties."
      },
      {
        title: "Performance Approach",
        body:
          "We plan each VPS around workload behavior rather than generic numbers. A content website needs different caching and storage priorities than a transactional application. A database-heavy project needs careful memory planning and backup design. A marketing campaign needs burst readiness and strong uptime basics. Our team helps align the server profile with the real job, then keeps the environment clean with monitoring, patch awareness, and upgrade paths."
      },
      {
        title: "Managed Confidence",
        body:
          "Every serious server needs more than raw specifications. It needs dependable access, good security posture, backup discipline, visibility, and someone who knows what to check when performance changes. We support firewall planning, SSL, DNS coordination, migration, uptime checks, and resource reviews. The result is a VPS that feels professional, not improvised."
      }
    ]
  },
  "dedicated-server": {
    title: "Dedicated Servers For Demanding Production Workloads",
    eyebrow: "Bare Metal Infrastructure",
    intro:
      "Dedicated servers provide full physical resources for applications that need consistent performance, stricter isolation, or specialized configuration. They are built for companies that have outgrown shared environments and need infrastructure that behaves predictably under pressure.",
    sections: [
      {
        title: "When Bare Metal Matters",
        body:
          "Dedicated hosting becomes valuable when your workload is too important to share compute with unknown neighbors. High-volume databases, enterprise portals, custom virtualization, streaming pipelines, analytics systems, and large ecommerce platforms often benefit from direct access to hardware. You can choose storage layout, network approach, operating system, security layers, and management model with far more freedom than a typical hosting plan allows."
      },
      {
        title: "Designed Around The Application",
        body:
          "A strong dedicated server is not only a machine with large numbers on a spec sheet. CPU architecture, RAM capacity, NVMe or enterprise SSD storage, RAID strategy, backup window, bandwidth profile, and remote management all matter. We help map those pieces to your application's traffic pattern, maintenance needs, and recovery goals. That planning keeps the server stable when the business is busy."
      },
      {
        title: "Operational Support",
        body:
          "Our dedicated server service includes practical guidance for deployment, hardening, monitoring, and growth. We can help with migration planning, baseline configuration, access control, patch routines, and performance review. You keep the control of dedicated infrastructure while gaining a partner that understands uptime and production responsibility."
      }
    ]
  },
  "co-locations": {
    title: "Co-location Services For Owned Hardware In A Professional Facility",
    eyebrow: "Rack Space And Data Center Operations",
    intro:
      "Co-location lets your organization keep ownership of its hardware while placing it inside a secure, resilient, connectivity-ready data center environment. It is the right choice when control and facility quality need to work together.",
    sections: [
      {
        title: "A Better Home For Your Hardware",
        body:
          "Running servers in an office or improvised room creates risks around power, cooling, access, internet reliability, and physical security. Co-location moves your equipment into a facility designed for continuous operation. Your hardware benefits from stable power delivery, climate control, network options, controlled access, and trained remote support. The business keeps ownership and configuration control while reducing the weak points of an in-house setup."
      },
      {
        title: "Built For Hybrid Infrastructure",
        body:
          "Many companies now operate a blended infrastructure model: public cloud for elastic services, hosted servers for production systems, and owned hardware for compliance, licensing, storage, or performance reasons. Co-location fits naturally into that mix. It can support backup appliances, private cloud nodes, virtualization clusters, firewall equipment, telecom gear, and specialized machines that do not belong in a standard hosting plan."
      },
      {
        title: "Security And Continuity",
        body:
          "Facility-grade access control, clear installation practices, cable discipline, power planning, and remote hands support make infrastructure easier to trust. We help clients think through rack layout, connectivity, maintenance windows, labeling, and expansion. The result is a physical deployment that can be documented, supported, and scaled with less friction."
      }
    ]
  },
  "web-hosting": {
    title: "Premium Web Hosting For Business Websites And Digital Brands",
    eyebrow: "Fast, Secure, Managed Hosting",
    intro:
      "Your website should load quickly, stay available, and feel effortless to manage. Our web hosting packages are built for companies that want dependable performance, clean support, and a hosting partner that understands business websites.",
    sections: [
      {
        title: "Hosting That Feels Professional",
        body:
          "A business website is often the first place a customer judges your company. Slow pages, SSL warnings, weak uptime, and confusing support can damage trust before a conversation starts. Our hosting stack focuses on the fundamentals: stable servers, fast storage, SSL readiness, domain support, email-aware setup, and backups. It is suitable for corporate sites, WordPress builds, landing pages, product catalogs, blogs, and lead generation funnels."
      },
      {
        title: "Support For Growth",
        body:
          "Good web hosting should not trap you. As traffic increases, your plan should be able to grow into stronger resources, VPS hosting, or a dedicated environment. We structure hosting so businesses can begin with a practical plan and move upward without unnecessary disruption. Migration help, DNS guidance, and performance reviews keep the process manageable."
      },
      {
        title: "Security Basics Included",
        body:
          "Security is built from routine discipline. We support SSL, access hygiene, backup planning, malware-aware handling, update guidance, and careful file permissions. For websites that collect leads or process customer journeys, this foundation matters. It helps your brand feel trustworthy and gives your team fewer technical distractions."
      }
    ]
  },
  "about-us": {
    title: "About Our Data Center And Hosting Team",
    eyebrow: "About Us",
    intro:
      "We help businesses build reliable digital infrastructure across VPS, dedicated servers, co-location, and managed web hosting. Our approach is practical, transparent, and focused on long-term operational confidence.",
    sections: [
      {
        title: "Our Mission",
        body:
          "We believe infrastructure should feel dependable, understandable, and aligned with the business it supports. Many companies struggle because hosting is sold as a commodity, while real production systems need planning, monitoring, migration support, and sensible growth paths. Our mission is to give customers a clearer way to choose and operate hosting services."
      },
      {
        title: "How We Work",
        body:
          "We begin by understanding the workload: traffic, storage, uptime expectation, compliance concerns, application stack, and team capability. From there we recommend a practical setup, whether that is web hosting, VPS, dedicated servers, or co-location. We prefer honest sizing, clean documentation, and support that solves the actual issue rather than hiding behind jargon."
      },
      {
        title: "Who We Serve",
        body:
          "Our clients include agencies, ecommerce companies, SaaS teams, professional service firms, startups, and established organizations modernizing older systems. Some need a simple website host. Some need high-performance dedicated servers. Others need rack space for owned equipment. In every case, the goal is the same: stable infrastructure that helps the business move with confidence."
      }
    ]
  },
  blog: {
    title: "Infrastructure Blog For Smarter Hosting Decisions",
    eyebrow: "Blog",
    intro:
      "Explore practical articles on hosting, server planning, security, uptime, data center operations, and website performance. The blog is written for founders, IT teams, agencies, and business owners who want clearer decisions.",
    sections: [
      {
        title: "Choosing Between VPS And Dedicated Servers",
        body:
          "A VPS is often the right first upgrade from shared hosting because it gives isolation, flexibility, and better performance without committing to full hardware. A dedicated server makes sense when workloads require sustained resources, physical isolation, heavy database usage, or custom virtualization. The decision should be based on traffic patterns, risk tolerance, compliance needs, and the team's ability to manage operating systems."
      },
      {
        title: "Why Backups Need Testing",
        body:
          "A backup that has never been restored is only a hope. Businesses should define what needs to be backed up, how often, where copies are stored, who can access them, and how quickly restoration must happen. Testing restores on a schedule reveals permission problems, missing files, database corruption, and documentation gaps before an emergency."
      },
      {
        title: "Performance Starts With Architecture",
        body:
          "Website speed is not solved by a single plugin or bigger plan. It comes from architecture: efficient code, optimized images, caching strategy, database indexing, good DNS, clean server configuration, and realistic resource planning. Hosting is the foundation, but the full stack must cooperate. A regular performance review can uncover bottlenecks early."
      }
    ]
  },
  "privacy-policy": {
    title: "Privacy Policy",
    eyebrow: "Legal",
    intro:
      "This privacy policy explains how information may be collected, used, protected, and managed when visitors interact with our website or request hosting services.",
    sections: [
      {
        title: "Information We Collect",
        body:
          "We may collect contact details such as name, email, phone number, company name, service interest, and message content when a visitor submits an enquiry form. We may also collect standard technical information such as browser type, device details, IP address, page visits, and referral source for security, analytics, and service improvement."
      },
      {
        title: "How Information Is Used",
        body:
          "Information is used to respond to enquiries, prepare service recommendations, provide support, improve website performance, protect against abuse, and maintain business records. We do not sell personal information. Access is limited to people or systems that need the information for legitimate service, support, security, or administrative purposes."
      },
      {
        title: "Data Protection",
        body:
          "We use reasonable technical and organizational measures to protect submitted information. No online system can be guaranteed completely secure, but we aim to keep access controlled, data handling purposeful, and retention limited to business and legal needs. Visitors may contact us to request correction or deletion where applicable."
      }
    ]
  },
  "terms-and-conditions": {
    title: "Terms And Conditions",
    eyebrow: "Legal",
    intro:
      "These terms outline the general conditions for using this website and requesting hosting, server, or co-location services. Final commercial terms may be defined in a separate service agreement.",
    sections: [
      {
        title: "Website Use",
        body:
          "Visitors may use this website to learn about services, request information, and contact our team. The content is provided for general guidance and may change without notice. Service availability, specifications, pricing, and delivery timelines may vary depending on location, capacity, technical requirements, and agreement terms."
      },
      {
        title: "Service Responsibility",
        body:
          "Customers are responsible for lawful use of hosting resources, maintaining secure credentials, managing application-level content, and following acceptable use requirements. We may take action to protect network stability, security, and other customers if a service is abused, compromised, or used in violation of applicable rules."
      },
      {
        title: "Limitations",
        body:
          "While we work to provide reliable services, no hosting environment can promise uninterrupted operation in every circumstance. Maintenance, third-party network issues, hardware events, attacks, software bugs, and force majeure events may affect availability. Specific guarantees, support scope, and liability limits should be confirmed in the applicable service agreement."
      }
    ]
  }
};

export const highlights = [
  "High availability planning",
  "Server migration support",
  "Secure network architecture",
  "Backup and restore guidance",
  "Scalable compute resources",
  "Remote support and monitoring"
];

export const serviceStats = [
  { value: "99.9%", label: "Uptime-focused planning" },
  { value: "24/7", label: "Monitoring-ready stack" },
  { value: "4x", label: "Clear upgrade paths" },
  { value: "10+", label: "Infrastructure use cases" }
];

export const processSteps = [
  "Audit current hosting and traffic pattern",
  "Map resources, security, backups, and migration risk",
  "Deploy the right server, hosting, or rack model",
  "Review performance and scale before bottlenecks appear"
];

export function pageMeta(slug: string) {
  const page = pageContent[slug];

  return {
    title: page.title,
    description: page.intro,
    alternates: {
      canonical: `/${slug}`
    },
    openGraph: {
      title: `${page.title} | Atfenix`,
      description: page.intro,
      url: `/${slug}`,
      siteName: "Atfenix",
      images: [
        {
          url: "/logo-cropped.png",
          width: 1262,
          height: 335,
          alt: "Atfenix"
        }
      ],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} | Atfenix`,
      description: page.intro,
      images: ["/logo-cropped.png"]
    }
  };
}
