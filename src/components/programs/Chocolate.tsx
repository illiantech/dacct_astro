import { useRef } from "preact/hooks";
import useIntersectingElmts from "../../hooks/useIntersectingElmts";
import useVisibleOnce from "../../hooks/useVisibleOnce";

const ChocolateItem = () => {
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
          ? "programs-list--item programs-list--item__scroll"
          : "programs-list--item"
      }
    >
      <div id="programOne"></div>
      <article class="programs-list--article">
        <img
          loading="lazy"
          decoding="async"
          data-section="programs0"
          class="programs-list--icon"
          src="/img/svg/programs/chocolate_yola.svg"
          alt="Two hands joined together"
        />
        <picture class="programs-list--picture">
          <img
            loading="lazy"
            decoding="async"
            data-section="programs0"
            data-content="alt"
            class="programs-list--img"
            src="/img/webp/programs/Chocolate-con-yola-720_webp.webp"
            alt="Group of young people and elderly people sharing and learning values for healthy coexistance to reinforce family bonds"
          />
        </picture>
        <h3 class="programs-list--title">Chocolate con Yola</h3>
        <div class="programs-list--paragraph-container">
          <p
            data-section="programs0"
            data-content="paragraph"
            class="programs-list--paragraph"
          >
            This program was born from the collaboration of United Healthcare,
            Gala Foods Supermarket, and the BeWell Kairos Foundation as a
            response to the imperative need to bring the aging population a
            connection with our younger generations to share experience,
            anecdotes, and life values of grandparents. In return our children
            bring them joy through the arts and the affection to the elderly.
            This will strengthen family ties in a world that is slowly beginning
            to suffer from personal connections.
            <br />
            <br />
            Our older adults are motivated through talks by different
            specialists on topics such as: metabolism, nutrition, financial
            education, psychology, etc. In addition to artistic presentations,
            they also benefit from raffles, games, refreshments and the love of
            the volunteers of our organization.
          </p>
        </div>
      </article>
    </li>
  );
};

export default ChocolateItem;
