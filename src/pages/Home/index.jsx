import { Hero } from "../../components/Hero";
import { Section } from "../../components/Section";
import { Projects } from "../../components/Projects";

export function Home() {
  return (
    <>
      <Hero />

      <Section title="Meus Projetos">
        <Projects />
      </Section>

      {/* <Section title="Entre em contato">HIii</Section> */}
    </>
  );
}
