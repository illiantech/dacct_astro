import {  useRef } from "preact/hooks";
import useIntersectingElmts from "../../hooks/useIntersectingElmts";
import useVisibleOnce from "../../hooks/useVisibleOnce";

const CodacItem = () => {
  const ref = useRef<HTMLLIElement>(null);

  const { intersecting, refObserver } = useIntersectingElmts({
    ref,
    options: { threshold: 0.2 },
  });

  const { refVisibleOnce } = useVisibleOnce({ intersecting, refObserver });

  return (
    <li
      ref={ref}
      class={
        refVisibleOnce
          ? "programs-list--item programs-list--item-pair  programs-list--item__scroll"
          : "programs-list--item programs-list--item-pair "
      }
    >
      <div id="programTwo"></div>
      <article class="programs-list--article">
        <img
          loading="lazy"
          decoding="async"
          data-section="programs1"
          data-content="alt-svg"
          class="programs-list--icon"
          src="/img/svg/programs/codac.svg"
          alt="First aid kit with medicines"
        />
        <picture class="programs-list--picture">
          <img
            loading="lazy"
            decoding="async"
            data-section="programs1"
            data-content="alt"
            class="programs-list--img2"
            src="/img/webp/programs/CODAC-720_webp.webp"
            alt="people in a storage managing the food for the social program CODAC"
          />
        </picture>
        <h3 class="programs-list--title">CODAC</h3>
        <div class="programs-list--paragraph-container">
          <p
            data-section="programs1"
            data-content="paragraph"
            class="programs-list--paragraph"
          >
            Our social assistance program with which we benefit dozens of
            Connecticut residents with immigration applications, translations,
            notaries, rent, food, among other services.
            <br />
            <br />
            The coalition relies on the professional and valuable work of 2
            social workers who address all kinds of questions and forms during
            the week.
          </p>
        </div>
      </article>
    </li>
  );
};

export default CodacItem;
