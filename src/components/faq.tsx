type FaqItem = {
  question: string;
  answer: string;
};

export function Faq({
  title = "Preguntas frecuentes",
  items,
}: {
  title?: string;
  items: FaqItem[];
}) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="font-display text-2xl font-bold tracking-tight">
          {title}
        </h2>
        <div className="mt-8 divide-y divide-border">
          {items.map((item) => (
            <div key={item.question} className="py-6">
              <p className="font-display font-bold">{item.question}</p>
              <p className="mt-2 leading-relaxed text-muted">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
