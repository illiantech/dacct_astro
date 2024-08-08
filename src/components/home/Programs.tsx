import { useEffect, useRef, useState } from "preact/hooks";
import { useIntersectionObserver } from "../InterObsProvider";

const ProgramsHome = () => {
  const [intersecting, setIntersecting] = useState<boolean>(false);
  const ref = useRef<HTMLElement>(null);
  const { observe, unobserve, entries } = useIntersectionObserver();

  useEffect(() => {
    if (ref.current) observe(ref.current);

    return () => {
      if (ref.current) unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (entries.length > 0) {
      const entry = entries.find((entry) => entry.target === ref.current);
      if (entry) setIntersecting(entry.isIntersecting);
      console.log("inter");
    }
  }, [entries]);

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
              href="programs.html#programOne"
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
              href="programs.html#programTwo"
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
              href="programs.html#programThree"
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
              href="programs.html#programFour"
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
