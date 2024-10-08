import { useRef } from "preact/hooks";
import useIntersectingElmts from "../../hooks/useIntersectingElmts";

const BlogHome = () => {
  const ref = useRef<HTMLElement>(null);
  const { intersecting } = useIntersectingElmts({
    ref,
    options: { threshold: 0.3 },
  });

  return (
    <section
      ref={ref}
      class={intersecting ? "blog blog__scroll" : "blog"}
     
    >
      <h2 class="blog--title">
        Don't Miss Out! Check Our Blog
      </h2>
      <ul   class="blog--list">
        <li class="blog--list-item">
          <article class="blog--article">
            <picture class="blog--article-picture blog--article-wave_1">
              <source media="(min-width: 1300px)" srcset="" />
              <source srcset="" />
              <img
                loading="lazy"
                decoding="async"
                src=""
                alt=""
                class="blog--article-img"
              />
            </picture>
            <time class="blog--article-time" datetime=""></time>

            <h3 class="blog--article-title"></h3>

            <p class="blog--article-paragraph"></p>

            <span
          
              title="See more"
              class="article--buttom"
            >
              See more
            </span>
          </article>
        </li>
        <li class="blog--list-item">
          <article class="blog--article">
            <picture class="blog--article-picture blog--article-wave_2">
              <source media="(min-width: 1300px)" srcset="" />
              <source srcset="" />
              <img
                loading="lazy"
                decoding="async"
                src=""
                alt=""
                class="blog--article-img"
              />
            </picture>
            <time class="blog--article-time" datetime=""></time>
            <h3 class="blog--article-title"></h3>

            <p class="blog--article-paragraph"></p>

            <span
        
              title="See more"
              class="article--buttom"
            >
              See more
            </span>
          </article>
        </li>
        <li class="blog--list-item">
          <article class="blog--article">
            <picture class="blog--article-picture blog--article-wave_3">
              <source media="(min-width: 1300px)" srcset="" />
              <source srcset="" />
              <img
                loading="lazy"
                decoding="async"
                src=""
                alt=""
                class="blog--article-img"
              />
            </picture>
            <time class="blog--article-time" datetime=""></time>
            <h3 class="blog--article-title"></h3>

            <p class="blog--article-paragraph"></p>

            <span
          
              title="See more"
              class="article--buttom"
            >
              See more
            </span>
          </article>
        </li>
      </ul>
    </section>
  );
};

export default BlogHome;
