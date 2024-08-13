import { useBlazeSlider } from "../../hooks/useBlazeSlider";
import "blaze-slider/dist/blaze.css";

const SliderAlliance = () => {
  const { elRef } = useBlazeSlider({
    all: {
      slidesToShow: 1,
      enableAutoplay: true,
      autoplayInterval: 3000,
      stopAutoplayOnInteraction: true,
      transitionDuration: 600,
      draggable: true,
    },
    "(min-width: 1000px)": {
      slidesToShow: 3,
    },
  });

  return (
    <section class="alliance">
      <h2 data-section="alliance" data-content="title" class="alliance--title">
        Allies
      </h2>

      <div class="blaze-slider" ref={elRef}>
        <div class="blaze-container">
          <div class="blaze-track-container alliance--list-container">
            <ul class=" blaze-track alliance--list">
              <li class="alliance--list-item">
                <a
                  data-section="alliance"
                  data-content="title-link"
                  title="See more"
                  target="_blank"
                  href="https://www.youtube.com/c/SUPERELITEENTERTAINMENT"
                  class="alliance--list-link"
                >
                  <picture class="alliance--list-picture">
                    <img
                      loading="lazy"
                      decoding="async"
                      src="/img/webp/alliance/SEE_webp.webp"
                      alt="Super elite entertainment"
                      class="alliance--list-img alliance--list-img__size"
                    />
                  </picture>
                </a>
              </li>

              <li class="alliance--list-item">
                <a
                  data-section="alliance"
                  data-content="title-link"
                  title="See more"
                  target="_blank"
                  href="https://hccgb.org/"
                  class="alliance--list-link"
                >
                  <picture class="alliance--list-picture">
                    <img
                      loading="lazy"
                      decoding="async"
                      src="/img/webp/alliance/HCCGB_webp.webp"
                      alt="Hispanic Chamber of Commerce of greater Bridgeport"
                      class="alliance--list-img alliance--list-img__size"
                    />
                  </picture>
                </a>
              </li>
              <li class="alliance--list-item">
                <a
                  data-section="alliance"
                  data-content="title-link"
                  title="See more"
                  target="_blank"
                  href="https://redcontraelabusosexual.org/"
                  class="alliance--list-link"
                >
                  <picture class="alliance--list-picture">
                    <img
                      loading="lazy"
                      decoding="async"
                      src="/img/webp/alliance/fundation_ed_webp.webp"
                      alt="red contra el abuso sexual"
                      class="alliance--list-img alliance--list-img__size"
                    />
                  </picture>
                </a>
              </li>

              <li class="alliance--list-item">
                <a
                  data-section="alliance"
                  data-content="title-link"
                  title="See more"
                  target="_blank"
                  href="https://ctlead.org/"
                  class="alliance--list-link"
                >
                  <picture class="alliance--list-picture">
                    <img
                      loading="lazy"
                      decoding="async"
                      src="/img/webp/alliance/LEAD_webp.webp"
                      alt="Latinos for Educational Advocacy and Diversity"
                      class="alliance--list-img alliance--list-img__size"
                    />
                  </picture>
                </a>
              </li>
              <li class="alliance--list-item">
                <a
                  data-section="alliance"
                  data-content="title-link"
                  title="See more"
                  target="_blank"
                  href="https://es.uhccommunityplan.com/"
                  class="alliance--list-link"
                >
                  <picture class="alliance--list-picture">
                    <img
                      loading="lazy"
                      decoding="async"
                      src="/img/webp/alliance/unitedhealthcare_webp.webp"
                      alt="United Healthcare Community Plan"
                      class="alliance--list-img"
                    />
                  </picture>
                </a>
              </li>
              <li class="alliance--list-item">
                <a
                  data-section="alliance"
                  data-content="title-link"
                  title="See more"
                  target="_blank"
                  href="https://kairosfundation.org/"
                  class="alliance--list-link"
                >
                  <picture class="alliance--list-picture">
                    <img
                      loading="lazy"
                      decoding="async"
                      src="/img/webp/alliance/kairos_foundation_webp.webp"
                      alt="kairos fundation"
                      class="alliance--list-img"
                    />
                  </picture>
                </a>
              </li>
              <li class="alliance--list-item">
                <a
                  data-section="alliance"
                  data-content="title-link"
                  title="See more"
                  target="_blank"
                  href="https://galasupermarkets.com/#"
                  class="alliance--list-link"
                >
                  <picture class="alliance--list-picture">
                    <img
                      loading="lazy"
                      decoding="async"
                      src="/img/webp/alliance/gala_foods_webp.webp"
                      alt="Gala foods supermarkets"
                      class="alliance--list-img"
                    />
                  </picture>
                </a>
              </li>
              <li class="alliance--list-item">
                <a
                  data-section="alliance"
                  data-content="title-link"
                  title="See more"
                  target="_blank"
                  href="http://www.bdklawgroup.com/"
                  class="alliance--list-link"
                >
                  <picture class="alliance--list-picture">
                    <img
                      loading="lazy"
                      decoding="async"
                      src="/img/webp/alliance/BDK_webp.webp"
                      alt="BDK Law Group"
                      class="alliance--list-img"
                    />
                  </picture>
                </a>
              </li>
            </ul>
            <button title="backward" class="blaze-prev alliance--prev">
              {"<"}
            </button>
            <button title="forward" class="blaze-next alliance--next">
              {">"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderAlliance;
