export default function Loading() {
  return (
    <div
      aria-label="Loading page"
      className="flex min-h-[60vh] w-full flex-col items-center justify-center bg-white px-4 py-16"
      role="status"
    >
      <div className="relative flex flex-col items-center text-center">
        {/* Soft amber pulse backdrop */}
        <div className="pointer-events-none absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgb(184_121_62/15%)_0%,transparent_70%)] blur-xl" />

        {/* Minimalist Carpentry Icon Loader */}
        <div className="relative mb-4 flex size-16 items-center justify-center rounded-xl border border-[#c48748]/35 bg-[#fbf9f6] shadow-sm">
          <svg
            className="size-8 text-[#b8793e] animate-pulse"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path
              d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-8h6v8M9 9h6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Heading in Open Sans */}
        <h3 className="font-heading text-[19px] font-bold tracking-[2px] text-ink uppercase">
          Wood<span className="text-[#b8793e]">Haus</span>
        </h3>

        {/* Subtitle in Poppins */}
        <p className="font-body mt-1 text-[12px] font-medium tracking-[1.5px] text-[#59371f]/75 uppercase">
          Loading content...
        </p>

        {/* Subtle Progress Bar */}
        <div className="relative mt-5 h-1 w-36 overflow-hidden rounded-full bg-[#eee7df]">
          <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,transparent,#b8793e,#e4b778,#b8793e,transparent)] animate-[shimmer_1.3s_infinite]" />
        </div>
      </div>
    </div>
  );
}
