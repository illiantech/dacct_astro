import { useRef } from "preact/hooks";
import useIntersectingElmts from "../../hooks/useIntersectingElmts";

const Strategies = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { intersecting } = useIntersectingElmts({
    ref,
    options: { threshold: 0.5 },
  });

  return (
    <div ref={ref} class="container-card2" >
      <div class="background-card2" >
        <picture>
          <source
            media="(min-width: 1300px)"
            srcset="/img/webp/home_page/Estrategias-home-page_1080_webp.webp"
          />

          <img
            loading="lazy"
            decoding="async"
            class="background-card2--img"
            src="/img/webp/home_page/Estrategias-home-page-720_webp.webp"
            alt="A work team in a office making a social strategy"
          />
        </picture>

        <div class="background-card2--size">
          <section
            class={intersecting ? "card2 card2__scroll" : "card2"}
           
          >
            <h3 class="card2--title">Strategies</h3>

            <div class="card2--list-container">
              <p class="card2--list-paragraph">Educating communities in:</p>
              <ul class="card2--list">
                <li>Handcrafts.</li>
                <li>
                  Financial education for children and adults - In alliance with
                  TD Bank and KW.
                </li>
                <li>
                  Metabolism and Nutrition - In alliance with Be - Well Kairos
                  Foundation.
                </li>
                <li>Basic computer literacy for adults.</li>
                <li>ESL program - In alliance with LEAD.</li>
                <li>Musical Instruments.</li>
                <li>Sports programs.</li>
              </ul>
            </div>

            <p class="card2--paragraph">
              Future generations of Latinos can identify their heritage through
              culture, gain a historical perspective, and understanding of their
              cultural identity.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Strategies;
