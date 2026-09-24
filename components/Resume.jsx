import { Download, ExternalLink } from "lucide-react";

export default function Resume() {
  const resumeUrl = "/resume/Sifana_Shajahan_Resume.pdf";

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/50 bg-white/45 p-8 shadow-[0_20px_60px_rgba(91,60,130,0.08)] backdrop-blur-xl sm:p-12">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-300/20 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
                Resume
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#241B35] sm:text-4xl">
                Interested in my background?
              </h2>

              <p className="mt-4 leading-8 text-[#5f566d]">
                View my resume for a quick overview of my skills, education,
                training, and project experience.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-violet-200 bg-white/70 px-5 py-3 font-semibold text-violet-700 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                View Resume
                <ExternalLink size={17} />
              </a>

              <a
                href={resumeUrl}
                download="Sifana_Shajahan_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-300/40"
                style={{ color: "#ffffff" }}
              >
                Download Resume
                <Download size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}