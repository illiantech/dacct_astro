import { useState } from "preact/hooks";
import MenuSelect from "../enums.ts";

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
              class="logo--img"
              src="/img/webp/logo/logo_name.webp"
              alt="Logo with flags of The Dominican Republic and The United States where they make a social contribution in Connecticut"
            />
          </picture>
        </a>
        <div
          title="Enable menu"
          class="menu-active"
        
          onClick={handleMenu}
        ></div>

        <nav
          role="navigation"
          class={active ? "nav nav__active" : "nav"}
       
        >
          <div
            title="Disable menu"
            class="menu-desactive"
         
            onClick={handleMenu}
          ></div>
          <ul class="list" >
            <li
              class={
                menuSelect === MenuSelect.home
                  ? "list--item list--item__select"
                  : "list--item"
              }
            >
              <a title="Home" href="/">
                <p>Home</p>
              </a>
            </li>
            <li
              class={
                menuSelect === MenuSelect.aboutUs
                  ? "list--item list--item__select"
                  : "list--item"
              }
            >
              <a title="About us" href="/about_us/">
                <p>About us</p>
              </a>
            </li>
            <li
              class={
                menuSelect === MenuSelect.programs
                  ? "list--item list--item__select"
                  : "list--item"
              }
            >
              <a title="Programs" href="/programs/">
                <p>Programs</p>
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
                <p>Blog</p>
              </a>
            </li>

            <li
              class={
                menuSelect === MenuSelect.contactUs
                  ? "list--item list--item__select"
                  : "list--item"
              }
            >
              <a title="Contact us" href="/contact_us/">
                <p>Contact us</p>
              </a>
            </li>
            <li class="list--item donate-buttom">
              <a
                title="Donate"
                href="https://www.paypal.com/donate/?hosted_button_id=KZMTUG9N6XT7W"
                target="_blank"
              >
                Donate
              </a>
            </li>
            <li class="list--item">
              <div  class="lang lang__hover">
                <em>language</em>
              </div>
              <div class="lang--selector">
                <ul class="lang--list">
                  <li title="Spanish" class="lang--list-item">
                    <span lang="es">ES</span>
                    <img
                      src="/icons/spain.svg"
                      alt="Flag of The Dominican Republic"
                    />
                  </li>
                  <li title="English" class="lang--list-item">
                    <span lang="en">EN</span>
                    <img src="/icons/usa.svg" alt="Flag of The United States" />
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
