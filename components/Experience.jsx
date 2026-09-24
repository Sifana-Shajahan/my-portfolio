const training = [
  {
    title: "Full Stack Development Course",
    institution: "Upcode Software Labs",
    period: "11/2025 – 09/2026",
    description:
      "Completed a Full Stack Development course focused on building modern web applications using React and Python. The training covered frontend development, backend development, REST APIs, databases, authentication, and full-stack project development.",
    technologies:
      "React.js, Next.js, JavaScript, TypeScript, Python, Django, Django REST Framework, PostgreSQL, Git, GitHub, GitLab, Postman",
  },
  {
  title: "CRM — Customer Relationship Management System",
  institution: "3-Month Course Project · Team Lead & Full Stack Developer",
  period: "Course Project",
  description:
    "Completed a full-stack CRM project as part of the development course in a 5-member team. Worked as Team Lead and Full Stack Developer, coordinating team tasks while contributing hands-on to frontend and backend development, REST API integration, authentication, CRUD operations, database integration, and module integration.",
  technologies:
    "Next.js, React.js, TypeScript, MUI, Tailwind CSS, Redux Toolkit, Python, Django, Django REST Framework, PostgreSQL",
},
];

const education = [
  {
    title: "Master of Computer Applications (MCA)",
    institution: "CCSIT Marutharode, Palakkad — University of Calicut",
    period: "2020 – 2022",
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    institution: "Mercy College, Palakkad — University of Calicut",
    period: "2016 – 2019",
  },
  {
    title: "Higher Secondary — Computer Science",
    institution: "GMMGHSS, Palakkad",
    period: "2014 – 2016",
  },
];

function TimelineItem({ item, showTechnologies = false }) {
  return (
    <div className="relative pl-7">
      <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-violet-600 shadow-[0_0_0_5px_rgba(139,92,246,0.12)]" />

      <div className="border-l border-violet-200 pl-6">
        <p className="text-sm font-semibold text-violet-600">
          {item.period}
        </p>

        <h4 className="mt-2 text-lg font-semibold text-[#241B35]">
          {item.title}
        </h4>

        <p className="mt-1 text-sm font-medium text-[#6b6278]">
          {item.institution}
        </p>

        {item.description && (
          <p className="mt-4 text-sm leading-7 text-[#6b6278]">
            {item.description}
          </p>
        )}

        {showTechnologies && item.technologies && (
          <p className="mt-4 text-xs font-medium leading-6 text-violet-700">
            {item.technologies}
          </p>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Training & Education
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[#241B35] sm:text-4xl">
            My learning journey.
          </h2>

          <p className="mt-5 leading-8 text-[#5f566d]">
            My professional training, hands-on project experience, and
            academic background.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Training & Projects */}
          <div className="rounded-3xl border border-white/50 bg-white/45 p-7 shadow-[0_20px_60px_rgba(91,60,130,0.08)] backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-[#241B35]">
              Training & Projects
            </h3>

            <div className="mt-8 space-y-8">
              {training.map((item) => (
                <TimelineItem
                  key={`${item.title}-${item.period}`}
                  item={item}
                  showTechnologies
                />
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="rounded-3xl border border-white/50 bg-white/45 p-7 shadow-[0_20px_60px_rgba(91,60,130,0.08)] backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-[#241B35]">
              Education
            </h3>

            <div className="mt-8 space-y-8">
              {education.map((item) => (
                <TimelineItem
                  key={`${item.title}-${item.period}`}
                  item={item}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}