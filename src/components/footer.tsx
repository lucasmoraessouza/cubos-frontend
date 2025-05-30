import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <>
      <Separator />
      <footer className="relative z-10 text-mauve-dark-1100 text-sm h-17 flex items-center justify-center">
        <p className="md:block hidden">
          2025 © Todos os direitos reservados a{" "}
          <a
            href="https://cubos.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Cubos Academy
          </a>
        </p>
      </footer>
    </>
  );
}
