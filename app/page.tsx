import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <header className="border-b px-6 py-4">
        <p className="font-display text-2xl">Indy Seamstress</p>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
        <h1 className="text-3xl font-semibold">Site under construction</h1>
        <p className="max-w-md text-muted-foreground">
          Project scaffold is live. Sections (hero, services, gallery,
          reviews, footer) land in follow-up tickets.
        </p>
        <Button>Sample shadcn/ui Button</Button>
      </main>
      <footer className="border-t px-6 py-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Indy Seamstress
      </footer>
    </>
  );
}
