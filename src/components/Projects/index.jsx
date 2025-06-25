import { Link } from "react-router-dom";
import { Card, Container } from "./styles";

export function Projects() {
  return (
    <Container>
      <Card>
        <Link target="_blank" to="https://nesfly.com">
          <img src="/nesfly-banner.png" />
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
          <p>
            Nesfly é uma solução completa de gestão empresarial que otimiza seus
            processos, economiza tempo e aumenta a eficiência operacional.
          </p>
        </Link>
      </Card>
      <Card>
        <Link target="_blank" to="https://nesdark.github.io/pomodoro-v2/">
          <img src="/pomodoro-banner.png" />
          <h3>Pomodoro</h3>
          <p>
            O Pomodoro é uma ferramenta desenvolvida para potencializar a
            produtividade por meio da técnica Pomodoro. Com ciclos de trabalho
            de 25 minutos intercalados com pausas programadas.
          </p>
        </Link>
      </Card>
      <Card>
        <Link target="_blank" to="https://nesdark.github.io/nlw-esports/">
          <img src="/nlw-sports-banner.png" />
          <h3>NLW Sports</h3>
          <p>
            O NLW Sports é uma plataforma desenvolvida para organizar e exibir
            seu portfólio de jogos e streamers favoritos.
          </p>
        </Link>
      </Card>
      <Card>
        <Link target="_blank" to="https://nesdark.github.io/space-cream/">
          <img src="/space-cream-banner.png" />
          <h3>Space Cream</h3>
          <p>
            O Space Cream é um projeto de landing page desenvolvido para
            apresentar uma sorveteria temática inspirada no espaço sideral.
          </p>
        </Link>
      </Card>
    </Container>
  );
}
