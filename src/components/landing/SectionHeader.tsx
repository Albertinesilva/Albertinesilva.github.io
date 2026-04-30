export const SectionHeader = ({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) => (
  <div className="mb-12">
    <p className="font-mono text-sm text-primary mb-2">
      <span className="text-accent">{index}.</span> {subtitle ?? "// section"}
    </p>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
      {title}
      <span className="text-primary">.</span>
    </h2>
    <div className="mt-4 h-px w-24 bg-gradient-to-r from-primary to-transparent" />
  </div>
);
