export const FeatureCard = ({
  icon: Icon,
  title,
  desc,
  colSpan = "col-span-1",
}: {
  icon: any;
  title: string;
  desc: string;
  colSpan?: string;
}) => (
  <div
    className={`bg-linear-to-b from-background to-card border border-border rounded-2xl p-8 hover:border-foreground/25 transition-all h-full group ${colSpan}`}
  >
    <div className="w-10 h-10 bg-card rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-foreground/5">
      <Icon className="text-foreground w-5 h-5" />
    </div>
    <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-foreground/60 leading-relaxed">{desc}</p>
  </div>
);
