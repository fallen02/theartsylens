import { Container } from "@/Container";
import { Navbar } from "@/NavLinks";

export function Header() {
  return (
    <header>
      <nav>
        <Container className="flex justify-between items-center py-5">
          <h1 className="text-gray-200 font-Audiowide font-semibold text-sm lg:text-2xl tracking-wider uppercase">
            The Artsy Lens
          </h1>
          <div className="flex justify-between items-center gap-20">
            <div className="hidden lg:flex gap-8 items-center">
              <Navbar />
            </div>
            <div className="inline-block relative group">
              <div className="hidden lg:block absolute inset-0 bg-lime-600 z-0 border border-black translate-0 lg:translate-x-0.5 lg:translate-y-0.5 rounded-xl group-hover:translate-0 transition-transform duration-150" />
              <a
                href="#contact"
                className="relative inline-flex rounded-xl no-underline items-center justify-center border border-black transition-all duration-150 -translate-x-0.5 -translate-y-0.5 group-hover:-translate-0 z-30  bg-gray-800 group-hover:bg-gray-950 text-gray-200 w-full lg:w-auto  px-3 py-1.5 text-sm lg:text-lg font-OpenSans font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
}
