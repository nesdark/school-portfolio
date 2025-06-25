import { Container, MySkills, Skills } from "./styles";

export function Hero() {
  return (
    <Container>
      <div className="profile-photo">
        <img src="/me.jpg" alt="No" />
      </div>
      <h3 className="code-font">Olá, meu nome é Christian!</h3>
      <h2>Sou um programador full-stack</h2>
      <p>
        Meu nome é Christian Perez e sou um desenvolvedor full-stack. Estou
        sempre em busca de novos desafios e oportunidades para aplicar meus
        conhecimentos e habilidades em projetos criativos e inovadores.
      </p>

      <MySkills>
        <h3>Minhas Habilidades</h3>
        <Skills>
          <li>HTML</li>
          <li>CSS</li>
          <li>REACT</li>
          <li>Node.JS</li>
          <li>Sqlite</li>
          <li>Nginx</li>
          <li>JavaScript</li>
          <li>Knex</li>
          <li>Linux</li>
          <li className="and-more">Entre outras...</li>
        </Skills>
      </MySkills>
    </Container>
  );
}
