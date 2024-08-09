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
      id="programs"
      class={intersecting ? "programs programs__scroll" : "programs"}
    >
      <h2 data-section="programs" data-content="title" class="programs--title">
        Programs
      </h2>
      <ul class="programs--list">
        <li class="programs--list-item">
          <article class="programs--list-article">
            <img
              loading="lazy"
              decoding="async"
              class="programs--list-icon"
              src="/img/svg/programs/chocolate_yola.svg"
              data-section="programs"
              data-content="alt0"
              alt="Two hands joined together"
            />

            <h3 class="programs--list-title">
              Chocolate <br />
              con Yola
            </h3>
            <p
              data-section="programs"
              data-content="paragraph0"
              class="programs--list-paragraph"
            >
              This program was born from the collaboration of United Healthcare,
              Gala Foods Supermarket, and the BeWell Kairos Foundation as a
              response to the imperative need...
            </p>
            <a
              data-section="programs"
              data-content="title-link"
              href="/programs/#programOne"
              title="See more"
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
              data-section="programs"
              data-content="alt1"
              class="programs--list-icon"
              src="/img/svg/programs/codac.svg"
              alt="First aid kit with medicines"
            />

            <h3 class="programs--list-title">CODAC</h3>
            <p
              data-section="programs"
              data-content="paragraph1"
              class="programs--list-paragraph"
            >
              Our social assistance program with which we benefit dozens of
              Connecticut residents with immigration applications, translations,
              notaries, rent, food...
            </p>
            <a
              data-section="programs"
              data-content="title-link"
              href="/programs/#programTwo"
              title="See more"
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
              data-section="programs"
              data-content="alt2"
              class="programs--list-icon"
              src="/img/svg/programs/finanzas.svg"
              alt="Responsible finances to learn to manage your money better"
            />

            <h3
              data-section="programs"
              data-content="sub-title2"
              class="programs--list-title"
            >
              My
              <br />
              Finances
            </h3>
            <p
              data-section="programs"
              data-content="paragraph2"
              class="programs--list-paragraph"
            >
              Our program seeks to promote financial stability in the community
              by providing financial literacy. The more knowledge people have
              about credit and financial services...
            </p>
            <a
              data-section="programs"
              data-content="title-link"
              href="/programs/#programThree"
              title="See more"
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
              data-section="programs"
              data-content="alt3"
              class="programs--list-icon"
              src="/img/svg/programs/co-alianza.svg"
              alt="Alliance between people with their hands on their hearts"
            />

            <h3
              data-section="programs"
              data-content="sub-title3"
              class="programs--list-title"
            >
              Co
              <br />
              Alliance
            </h3>
            <p
              data-section="programs"
              data-content="paragraph3"
              class="programs--list-paragraph"
            >
              Our Co-Alliance program seeks to establish partnerships with
              social and private organizations on issues relevant to the
              communities...
            </p>
            <a
              data-section="programs"
              data-content="title-link"
              href="/programs/#programFour"
              title="See more"
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
