import { useEffect, useRef, useState } from "preact/hooks";
// import { useIntersectionObserver } from "../InterObsProvider";

const Strategies = () => {
  const ref = useRef<HTMLDivElement>(null);
  // const [intersecting, setIntersecting] = useState<boolean>(false);
  // const { observe, unobserve, entries } = useIntersectionObserver();

  // useEffect(() => {
  //   if (ref.current) observe(ref.current);

  //   return () => {
  //     if (ref.current) unobserve(ref.current);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (entries.length > 0) {
  //     const entry = entries.find((entry) => entry.target === ref.current);
  //     if (entry) setIntersecting(entry.isIntersecting);
  //   }
  // }, [entries]);

  return (
    <div ref={ref} class="container-card2" id="containerCardTwo">
      <div class="background-card2" id="bgrCardTwo">
        <picture>
          <source
            media="(min-width: 1300px)"
            srcset="/img/webp/home_page/Estrategias-home-page_1080_webp.webp"
          />

          <img
            data-section="strategies"
            data-content="alt"
            class="background-card2--img"
            src="/img/webp/home_page/Estrategias-home-page-720_webp.webp"
            alt="A work team in a office making a social strategy"
          />
        </picture>

        <div class="background-card2--size">
          <section
            // class={intersecting ? "card2 card2__scroll" : "card2"}
            id="cardTwo"
          >
            <h3
              data-section="strategies"
              data-content="title"
              class="card2--title"
            >
              Strategies
            </h3>

            <div class="card2--list-container">
              <p
                class="card2--list-paragraph"
                data-section="strategies"
                data-content="paragraph0"
              >
                Educating communities in:
              </p>
              <ul class="card2--list">
                <li data-section="strategies" data-content="list0">
                  Handcrafts.
                </li>
                <li data-section="strategies" data-content="list1">
                  Financial education for children and adults - In alliance with
                  TD Bank and KW.
                </li>
                <li data-section="strategies" data-content="list2">
                  Metabolism and Nutrition - In alliance with Be - Well Kairos
                  Foundation.
                </li>
                <li data-section="strategies" data-content="list3">
                  Basic computer literacy for adults.
                </li>
                <li data-section="strategies" data-content="list4">
                  ESL program - In alliance with LEAD.
                </li>
                <li data-section="strategies" data-content="list5">
                  Musical Instruments.
                </li>
                <li data-section="strategies" data-content="list6">
                  Sports programs.
                </li>
              </ul>
            </div>

            <p
              data-section="strategies"
              data-content="paragraph1"
              class="card2--paragraph"
            >
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
