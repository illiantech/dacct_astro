import { useRef } from "preact/hooks";
import useIntersectingElmts from "../../hooks/useIntersectingElmts";
import "../../styles/about/mi_vision.css";

const Mi_Vision = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { intersecting } = useIntersectingElmts({
    ref,
    options: { threshold: 0.6 },
  });

  return (
    <div
      ref={ref}
      class={
        intersecting
          ? "second-container second-container__scroll"
          : "second-container"
      }
      id="misionVision"
    >
      <div class="second-container--wrapper">
        <section class="mision">
          <picture class="mision--picture">
            <source
              media="(min-width: 1300px)"
              srcset="/img/webp/about_us/Mision-webp.webp"
            />

            <img
              loading="lazy"
              decoding="async"
              data-section="mision"
              data-content="alt"
              class="mision--img"
              src="/img/webp/about_us/Mision-720_webp.webp"
              alt="group of people in a meeting room working on the mission of their project"
            />
          </picture>
          <h3 data-section="mision" data-content="title" class="mision--title">
            MISSION
          </h3>
          <p
            data-section="mision"
            data-content="paragraph"
            class="mision--paragraph"
          >
            To work towards a more united Connecticut through social service
            assistance programs, cultural celebration, and advocating for
            educational options.
          </p>
        </section>
        <section class="vision">
          <picture class="vision--picture">
            <source
              media="(min-width: 1300px)"
              srcset="/img/webp/about_us/Vision-webp.webp"
            />

            <img
              loading="lazy"
              decoding="async"
              data-section="vision"
              data-content="alt"
              class="vision--img"
              src="/img/webp/about_us/Vision-720_webp.webp"
              alt="group of people in a meeting room planning the vision of their project"
            />
          </picture>
          <h3 data-section="vision" data-content="title" class="vision--title">
            VISION
          </h3>
          <p
            data-section="vision"
            data-content="paragraph"
            class="vision--paragraph"
          >
            To be the most valuable provider in community support, culture
            integration, conservation of their folklore, and help in the
            development of the people of our community.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Mi_Vision;
