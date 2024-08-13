import { useState } from "preact/hooks";
import { MenuSelect } from "../enums.ts";

import "../styles/menu.css";

interface Props {
  menuSelect: MenuSelect;
}

const Menu = ({ menuSelect }: Props) => {
  const [active, setActive] = useState<boolean>(false);

  const handleMenu = () => {
    setActive(!active);
  };

  return (
    <div class="menu-container">
      <div class="menu">
        <a title="Logo" href="/" class="logo">
          <picture>
            <img
              decoding="async"
              class="logo--img"
              src="/img/webp/logo/logo_name.webp"
              alt="Logo with flags of The Dominican Republic and The United States where they make a social contribution in Connecticut"
              data-section="header"
              data-content="alt-logo"
            />
          </picture>
        </a>
        <div
          data-section="header"
          data-content="title-active-menu"
          title="Enable menu"
          class="menu-active"
          id="menuActive"
          onClick={handleMenu}
        ></div>

        <nav
          role="navigation"
          class={active ? "nav nav__active" : "nav"}
          id="menu-nav"
        >
          <div
            data-section="header"
            data-content="title-desactive-menu"
            title="Disable menu"
            class="menu-desactive"
            id="menuDesactive"
            onClick={handleMenu}
          ></div>
          <ul class="list" id="list">
            <li
              class={
                menuSelect === MenuSelect.home
                  ? "list--item list--item__select"
                  : "list--item"
              }
            >
              <a
                data-section="header"
                data-content="title-nav-home"
                title="Home"
                href="/"
              >
                Home
              </a>
            </li>
            <li
              class={
                menuSelect === MenuSelect.aboutUs
                  ? "list--item list--item__select"
                  : "list--item"
              }
            >
              <a
                data-section="header"
                data-content="title-nav-about_us"
                title="About us"
                href="/about_us/"
              >
                About us
              </a>
            </li>
            <li
              class={
                menuSelect === MenuSelect.programs
                  ? "list--item list--item__select"
                  : "list--item"
              }
            >
              <a
                data-section="header"
                data-content="title-nav-programs"
                title="Programs"
                href="/programs/"
              >
                Programs
              </a>
            </li>
            <li
              class={
                menuSelect === MenuSelect.blog
                  ? "list--item list--item__select"
                  : "list--item"
              }
            >
              <a title="Blog" href="/blog/">
                Blog
              </a>
            </li>

            <li
              class={
                menuSelect === MenuSelect.contactUs
                  ? "list--item list--item__select"
                  : "list--item"
              }
            >
              <a
                data-section="header"
                data-content="title-nav-contacts"
                title="Contact us"
                href="/contact_us/"
              >
                Contact us
              </a>
            </li>
            <li class="list--item donate-buttom">
              <a
                data-section="header"
                data-content="title-nav-donate"
                title="Donate"
                href="https://www.paypal.com/donate/?hosted_button_id=KZMTUG9N6XT7W"
                target="_blank"
              >
                Donate
              </a>
            </li>
            <li class="list--item">
              <div id="lang" class="lang lang__hover">
                <em data-section="header" data-content="nav-lang">
                  language
                </em>
              </div>
              <div class="lang--selector">
                <ul id="languageContainer" class="lang--list">
                  <li
                    data-lang="es"
                    data-section="header"
                    data-content="title-es"
                    title="Spanish"
                    class="lang--list-item"
                  >
                    <span data-lang="es" lang="es">
                      ES
                    </span>
                    <img
                      loading="lazy"
                      decoding="async"
                      data-lang="es"
                      data-section="header"
                      data-content="alt-es"
                      src="/icons/spain.svg"
                      alt="Flag of The Dominican Republic"
                    />
                  </li>
                  <li
                    data-lang="en"
                    data-section="header"
                    data-content="title-en"
                    title="English"
                    class="lang--list-item"
                  >
                    <span data-lang="en" lang="en">
                      EN
                    </span>
                    <img
                      loading="lazy"
                      decoding="async"
                      data-lang="en"
                      data-section="header"
                      data-content="alt-en"
                      src="/icons/usa.svg"
                      alt="Flag of The United States"
                    />
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
