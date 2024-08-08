import { useEffect, useRef, useState } from "preact/hooks";
// import { useIntersectionObserver } from "../InterObsProvider";

const BlogHome = () => {
  const ref = useRef<HTMLElement>(null);
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
    <section
      ref={ref}
      // class={intersecting ? "blog blog__scroll" : "blog"}
      id="blogHome"
    >
      <h2 data-section="blog" data-content="title" class="blog--title">
        Don't Miss Out! Check Our Blog
      </h2>
      <ul data-elementsList="blogs" id="blogList" class="blog--list">
        <li class="blog--list-item">
          <article class="blog--article">
            <picture class="blog--article-picture blog--article-wave_1">
              <source media="(min-width: 1300px)" srcset="" />
              <source srcset="" />
              <img src="" alt="" class="blog--article-img" />
            </picture>
            <time class="blog--article-time" datetime=""></time>

            <h3 class="blog--article-title"></h3>

            <p class="blog--article-paragraph"></p>

            <span
              data-open="0"
              data-section="blog"
              data-content="title-link"
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
              <img src="" alt="" class="blog--article-img" />
            </picture>
            <time class="blog--article-time" datetime=""></time>
            <h3 class="blog--article-title"></h3>

            <p class="blog--article-paragraph"></p>

            <span
              data-open="1"
              data-section="blog"
              data-content="title-link"
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
              <img src="" alt="" class="blog--article-img" />
            </picture>
            <time class="blog--article-time" datetime=""></time>
            <h3 class="blog--article-title"></h3>

            <p class="blog--article-paragraph"></p>

            <span
              data-open="2"
              data-section="blog"
              data-content="title-link"
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
