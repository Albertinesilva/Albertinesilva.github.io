export const SectionHeader = ({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) => (
  <div className="mb-8 sm:mb-12">
    <p className="font-mono text-xs sm:text-sm text-primary mb-2 break-words">
      <span className="text-accent">{index}.</span> {subtitle ?? "// section"}
    </p>
    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
      {title}
      <span className="text-primary">.</span>
    </h2>
    <div className="mt-3 sm:mt-4 h-px w-16 sm:w-24 bg-gradient-to-r from-primary to-transparent" />
  </div>
);
