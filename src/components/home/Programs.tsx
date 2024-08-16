import { useRef } from "preact/hooks";
import useIntersectingElmts from "../../hooks/useIntersectingElmts";

const ProgramsHome = () => {
  const ref = useRef<HTMLElement>(null);
  const { intersecting } = useIntersectingElmts({
    ref,
    options: { threshold: 0.3 },
  });

  return (
    <section
      ref={ref}
    
      class={intersecting ? "programs programs__scroll" : "programs"}
    >
      <h2 class="programs--title">Programs</h2>
      <ul class="programs--list">
        <li class="programs--list-item">
          <article class="programs--list-article">
            <img
              loading="lazy"
              decoding="async"
              class="programs--list-icon"
              src="/img/svg/programs/chocolate_yola.svg"
              alt="Two hands joined together"
            />

            <h3 class="programs--list-title">
              Chocolate <br />
              con Yola
            </h3>
            <p class="programs--list-paragraph">
              This program was born from the collaboration of United Healthcare,
              Gala Foods Supermarket, and the BeWell Kairos Foundation as a
              response to the imperative need...
            </p>
            <a
              href="/programs/#programOne"
              title="Information program"
              class="article--buttom buttom__programs"
            >
              See more
            </a>
          </article>
        </li>
        <li class="programs--list-item">
          <article class="programs--list-article">
            <img
              loading="lazy"
              decoding="async"
              class="programs--list-icon"
              src="/img/svg/programs/codac.svg"
              alt="First aid kit with medicines"
            />

            <h3 class="programs--list-title">CODAC</h3>
            <p class="programs--list-paragraph">
              Our social assistance program with which we benefit dozens of
              Connecticut residents with immigration applications, translations,
              notaries, rent, food...
            </p>
            <a
              href="/programs/#programTwo"
              title="Information program"
              class="article--buttom buttom__programs"
            >
              See more
            </a>
          </article>
        </li>
        <li class="programs--list-item">
          <article class="programs--list-article">
            <img
              loading="lazy"
              decoding="async"
              class="programs--list-icon"
              src="/img/svg/programs/finanzas.svg"
              alt="Responsible finances to learn to manage your money better"
            />

            <h3 class="programs--list-title">
              My
              <br />
              Finances
            </h3>
            <p class="programs--list-paragraph">
              Our program seeks to promote financial stability in the community
              by providing financial literacy. The more knowledge people have
              about credit and financial services...
            </p>
            <a
              href="/programs/#programThree"
              title="Information program"
              class="article--buttom buttom__programs"
            >
              See more
            </a>
          </article>
        </li>
        <li class="programs--list-item">
          <article class="programs--list-article">
            <img
              loading="lazy"
              decoding="async"
              class="programs--list-icon"
              src="/img/svg/programs/co-alianza.svg"
              alt="Alliance between people with their hands on their hearts"
            />

            <h3 class="programs--list-title">
              Co
              <br />
              Alliance
            </h3>
            <p class="programs--list-paragraph">
              Our Co-Alliance program seeks to establish partnerships with
              social and private organizations on issues relevant to the
              communities...
            </p>
            <a
              href="/programs/#programFour"
              title="Information program"
              class="article--buttom buttom__programs"
            >
              See more
            </a>
          </article>
        </li>
      </ul>
    </section>
  );
};

export default ProgramsHome;
