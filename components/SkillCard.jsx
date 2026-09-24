import Image from "next/image";

export default function SkillCard({ name, icon }) {
  return (
    <div className="group flex items-center gap-3 rounded-2xl border border-white/50 bg-white/50 px-4 py-3 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/70 p-2">
        {icon ? (
          <Image
            src={icon}
            alt={`${name} logo`}
            fill
            sizes="28px"
            className="object-contain p-1"
          />
        ) : (
          <span className="font-bold text-violet-600">
            {name?.charAt(0) || "?"}
          </span>
        )}
      </div>

      <span className="text-sm font-medium text-[#3d334b]">{name}</span>
    </div>
  );
}
