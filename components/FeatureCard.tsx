type FeatureCardProps = {
  title: string;
  text: string;
};

export function FeatureCard({ title, text }: FeatureCardProps) {
  return (
    <article className="card p-7">
      <div className="photo mb-10 h-36 rounded-2xl" />

      <h3 className="serif text-2xl">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-black/60">{text}</p>
    </article>
  );
}
