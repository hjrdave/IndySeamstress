import { BIO_INTRO, BIO_OUTRO, SPECIALTIES } from "@/lib/bio";

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-6 font-heading text-3xl">About Donna</h2>
        <p className="text-base text-muted-foreground">{BIO_INTRO}</p>
        <p className="mt-4 font-heading text-lg">I specialize in:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-base text-muted-foreground">
          {SPECIALTIES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4 text-base text-muted-foreground">{BIO_OUTRO}</p>
      </div>
    </section>
  );
}
