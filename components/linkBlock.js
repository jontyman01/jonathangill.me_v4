import Link from "next/link";

export default function LinkBlock({
  destination,
  a11yText,
  title,
  textColorClasses,
  bgColorClasses,
  num,
  company,
  skill_1,
}) {
  return (
    <Link href={destination}>
      <a
        aria-label={a11yText}
        className={`block mb-4 p-4 md:p-6 rounded-md linkBlock relative ${bgColorClasses}`}
      >
        <p className="text-gray-400 pb-0 linedText relative pr-16">
          <span className="bg-gray-800 pr-4">{num}</span>
        </p>
        <hr className="-mt-3 h-px border-b border-gray-500 bg-gray-500 transition ease-in-out delay-150" />
        <p
          className={`text-transparent text-3xl pt-4 pr-16 font-bold bg-clip-text bg-gradient-to-r ${textColorClasses}`}
        >
          {title}
        </p>
       
        <span className="rounded-full block py-2">{skill_1}</span>

        <div className="absolute inset-y-0 right-0 w-16 flex items-center" >
          <svg
            width="20"
            height="24"
            viewBox="0 0 20 24"
            fill="none"
            strokeWidth="2"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-gray-500 transition ease-in-out delay-150 arrow"
          >
            <path d="M1 1.60769L19 12L1 22.3923L1 1.60769Z" stroke="inherit" />
          </svg>
        </div>
      </a>
    </Link>
  );
}
