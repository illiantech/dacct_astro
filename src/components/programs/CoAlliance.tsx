import { useRef } from "preact/hooks";
import useIntersectingElmts from "../../hooks/useIntersectingElmts";
import useVisibleOnce from "../../hooks/useVisibleOnce";

const CoAllianceItem = () => {
  const ref = useRef<HTMLLIElement>(null);
  const { intersecting, refObserver } = useIntersectingElmts({
    ref,
    options: { threshold: 0.2 },
  });
  const { visibleOnce } = useVisibleOnce({ intersecting, refObserver });

  return (
    <li
      ref={ref}
      class={
        visibleOnce
          ? "programs-list--item programs-list--item-last programs-list--item-pair programs-list--item__scroll"
          : "programs-list--item programs-list--item-last programs-list--item-pair"
      }
    >
      <div id="programFour"></div>
      <article class="programs-list--article">
        <img
          loading="lazy"
          decoding="async"
     
          class="programs-list--icon"
          src="/img/svg/programs/co-alianza.svg"
          alt="Alliance between people with their hands on their hearts"
        />

        <picture class="programs-list--picture">
          <img
            loading="lazy"
            decoding="async"
       
            class="programs-list--img4"
            src="/img/webp/programs/Co-Alianza-720_webp.webp"
            alt="people forming an alliance with the purpose of offering value to society"
          />
        </picture>
        <h3
   
          class="programs-list--title"
        >
          Co Alliance
        </h3>
        <div class="programs-list--paragraph-container">
          <p
      
            class="programs-list--paragraph"
          >
            Our Co-Alliance program seeks to establish partnerships with social
            and private organizations on issues relevant to the communities with
            the objective of sharing knowledge, programs, and resources with
            these entities.
          </p>
        </div>
      </article>
    </li>
  );
};

export default CoAllianceItem;
