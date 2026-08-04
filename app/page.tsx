import { Button } from "@/components/ui/button";
import { ReviewsSection } from "@/components/sections/reviews";
import { SiteFooter } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <header className="border-b px-6 py-4">
        <p className="font-display text-2xl">Indy Seamstress</p>
      </header>
      <main className="flex flex-1 flex-col items-center gap-4 px-6 py-24 text-center">
        <h1 className="text-3xl font-semibold">Site under construction</h1>
        <p className="max-w-md text-muted-foreground">
          Project scaffold is live. Hero, services, and gallery land once
          Figma asset access is available again (see #9-#11).
        </p>
        <Button>Sample shadcn/ui Button</Button>
      </main>
      <ReviewsSection />
      <SiteFooter />
    </>
  );
}
