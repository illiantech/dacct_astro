import {  useRef } from "preact/hooks";
import useIntersectingElmts from "../../hooks/useIntersectingElmts";
import useVisibleOnce from "../../hooks/useVisibleOnce";

const FinancesItem = () => {
  const ref = useRef<HTMLLIElement>(null);

  const { intersecting,refObserver } = useIntersectingElmts({
    ref,
    options: { threshold: 0.2 },
  });

  const { refVisibleOnce } = useVisibleOnce({ intersecting, refObserver });
  return (
    <li
      ref={ref}
      class={
       refVisibleOnce
          ? "programs-list--item programs-list--item__scroll"
          : "programs-list--item"
      }
    >
      <div id="programThree"></div>
      <article class="programs-list--article">
        <img
          loading="lazy"
          decoding="async"
          data-section="programs2"
          data-content="alt-svg"
          class="programs-list--icon"
          src="/img/svg/programs/finanzas.svg"
          alt="Responsible finances to learn to manage your money better"
        />
        <picture class="programs-list--picture">
          <img
            loading="lazy"
            decoding="async"
            data-section="programs2"
            data-content="alt"
            class="programs-list--img3"
            src="/img/webp/programs/Mis-finanzas-720_webp.webp"
            alt="financial analysis to learn to better manage personal finances en small businesses"
          />
        </picture>
        <h3
          data-section="programs2"
          data-content="title"
          class="programs-list--title"
        >
          My Finances
        </h3>
        <div
          data-section="programs2"
          data-content="paragraph"
          class="programs-list--paragraph-container"
        >
          <p class="programs-list--paragraph">
            Our program seeks to promote financial stability in the community by
            providing financial literacy. The more knowledge people have about
            credit and financial services, the better decisions they will be
            able make regarding money matters, saving money, and improving their
            financial conditions and well-being. Some of our workshops include:
          </p>
          <ul>
            <li>Budgeting.</li>
            <li>Finance and small business development.</li>
            <li>Women's Entrepreneurship.</li>
            <li>Job Search Tools.</li>
            <li>First time home buyer seminars.</li>
            <li>Credit repair.</li>
            <li>Financial education for children and adults.</li>
          </ul>
        </div>
      </article>
    </li>
  );
};

export default FinancesItem;
