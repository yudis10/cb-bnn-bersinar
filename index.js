const BASE = new URL(".", import.meta.url).href;

class CbBnnBersinar extends HTMLElement {
  static css = /*css*/ `
  :host {
    display: block;
    max-width: 100%;
  }
  a:not([href]):not([class]),
  a:not([href]):not([class]):hover {
    color: inherit;
  }
  *,::after,::before{box-sizing:border-box}*{margin:0}@media (prefers-reduced-motion:no-preference){html{interpolate-size:allow-keywords}}body{line-height:1.5;-webkit-font-smoothing:antialiased}canvas,img,picture,svg,video{display:block;max-width:100%}button,input,select,textarea{font:inherit}h1,h2,h3,h4,h5,h6,p{overflow-wrap:break-word}p{text-wrap:pretty}h1,h2,h3,h4,h5,h6{text-wrap:balance}#__next,#root{isolation:isolate}

  .cb-bnn button, .swiper-button-prev, .swiper-button-next {
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .cb-bnn {
    position: relative;
    border: 1px solid #c5e3ff;
    border-radius: 8px;
    overflow: hidden;
    font-family: 'Montserrat', 'Montserrat-FF', sans-serif;
    background:
      linear-gradient(to bottom, rgba(255,255,255,0) 1.6%, rgba(255,255,255,0.7) 21.6%, rgba(255,255,255,0.85) 30.6%),
      linear-gradient(105.806deg, rgb(1,205,219) 3.33%, rgb(141,75,230) 108.79%),
      #d0dfed;
  }
  .cb-bnn__body {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 9px 12px;
    width: 100%;
  }
  .cb-bnn__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
  }
  .cb-bnn__logo {
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .cb-bnn__logo-bnn {
    width: 55px;
    height: 55px;
    object-fit: contain;
  }
  .cb-bnn__logo-divider {
    width: 1px;
    height: 41px;
    background: rgba(51, 51, 51, 0.35);
    flex-shrink: 0;
  }
  .cb-bnn__logo-ib {
    width: auto;
    height: 55px;
    object-fit: contain;
  }
  .cb-bnn__sponsor {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
  }
  .cb-bnn__sponsor-label {
    color: #666;
    font-size: 7px;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
  }
  .cb-bnn__sponsor-logos {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 11px;
  }
  .cb-bnn__sponsor-link {
    display: inline-flex;
    align-items: center;
  }
  .cb-bnn__sponsor-logos img {
    height: 15px;
    width: auto;
    object-fit: contain;
  }
  .cb-bnn__sponsor-logos .cb-bnn__logo-mandiri {
    height: 18px;
  }
  /* Mandiri ad: clickable on desktop only */
  .cb-bnn__sponsor-link--mandiri {
    pointer-events: none;
  }
  @media (min-width: 1024px) {
    .cb-bnn__sponsor-link--mandiri {
      pointer-events: auto;
    }
  }
  .cb-bnn__desc {
    display: flex;
    align-items: center;
    gap: 5px;
    background: rgba(255, 255, 255, 0.79);
    border-radius: 4px;
    padding: 10px;
    width: 100%;
  }
  .cb-bnn__desc p {
    flex: 1 0 0;
    min-width: 0;
    color: #333;
    font-size: 11px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.11px;
  }
  .cb-bnn__desc-btn {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    border: 1px solid #01cddb;
    border-radius: 4px;
    padding: 6px 10px;
    background-image: linear-gradient(116.409deg, rgb(1,205,219) 3.33%, rgb(141,75,230) 108.79%);
    text-decoration: none;
  }
  .cb-bnn__desc-btn svg {
    width: 16px;
    height: 15px;
    display: block;
  }
  .cb-bnn__slider {
    position: relative;
    width: 100%;
  }
  .cb-bnn__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    text-decoration: none;
    width: 100%;
  }
  .cb-bnn__card-img {
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 4px;
    overflow: hidden;
  }
  .cb-bnn__card-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .cb-bnn__card-title {
    width: 100%;
    color: #333;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.2;
    text-transform: capitalize;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
  .cb-bnn__card-time {
    width: 100%;
    color: #666;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
  }
  .cb-bnn .swiper-button-prev, .cb-bnn .swiper-button-next {
    --swiper-navigation-sides-offset: -8px;
    --swiper-navigation-top-offset: 35%;
    --swiper-navigation-size: 25px;
    border-radius: 50%;    
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
    transform: translateY(-50%);
  }
  
  .cb-bnn .swiper-button-prev::after, .cb-bnn .swiper-button-next::after {
    content: none;
  }
  .cb-bnn .swiper-pagination {
    position: static !important;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
  .cb-bnn .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    margin: 0 !important;
    background: #11c7d3;
    opacity: 1;
  }
  .cb-bnn .swiper-pagination-bullet-active {
    background: #8d4be6 !important;
  }
`;

  static get html() {
    return /*html*/ `
  <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css"
  />
  <style>${CbBnnBersinar.css}</style>

  <div class="cb-bnn">
    <div class="cb-bnn__body">
      <div class="cb-bnn__header">
        <div class="cb-bnn__logo">
          <img class="cb-bnn__logo-bnn" src="${BASE}images/logo-bnn.webp" alt="Logo BNN" />
          <span class="cb-bnn__logo-divider"></span>
          <img class="cb-bnn__logo-ib" src="${BASE}images/logo-indonesia-bersinar.webp" alt="Indonesia Bersinar" />
        </div>
        <div class="cb-bnn__sponsor">
          <p class="cb-bnn__sponsor-label">didukung oleh :</p>
          <div class="cb-bnn__sponsor-logos">
            <a href="https://bri.co.id/brimo" target="_blank" rel="noopener" class="cb-bnn__sponsor-link" aria-label="BRImo">
              <img src="${BASE}images/logo-bri.webp" alt="BRImo" />
            </a>
            <a href="https://www.bankmandiri.co.id" target="_blank" rel="noopener" class="cb-bnn__sponsor-link cb-bnn__sponsor-link--mandiri" aria-label="Mandiri">
              <img class="cb-bnn__logo-mandiri" src="${BASE}images/logo-mandiri.png" alt="Mandiri" />
            </a>
          </div>
        </div>
      </div>

      <div class="cb-bnn__desc">
        <p>Kampanye BNN untuk melindungi, memulihkan, dan memperdayakan generasi Indonesia yang lebih cerah dan bebas narkoba.</p>
        <a href="#" target="_blank" class="cb-bnn__desc-btn" aria-label="Selengkapnya">
          <svg width="16" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M13 6L19 12L13 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>

      <div class="cb-bnn__slider">
        <div class="swiper" style="width: 100%;">
          <div class="swiper-wrapper"></div>
        </div>
        <div class="swiper-button-prev">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
            <path d="M12.5 0C19.3927 0 25 5.60728 25 12.5C25 19.3927 19.3927 25 12.5 25C5.60728 25 0 19.3927 0 12.5C0 5.60728 5.60728 0 12.5 0ZM8.63853 13.2365L13.8469 18.4448C14.05 18.6479 14.3167 18.75 14.5834 18.75C14.85 18.75 15.1167 18.6479 15.3198 18.4448C15.7271 18.0375 15.7271 17.3792 15.3198 16.9719L10.8479 12.5L15.3198 8.02812C15.7271 7.62085 15.7271 6.9625 15.3198 6.55522C14.9125 6.14795 14.2542 6.14795 13.8469 6.55522L8.63853 11.7636C8.23125 12.1708 8.23125 12.8292 8.63853 13.2365Z" fill="url(#paint0_linear_673_18848)"/>
            <path d="M8.63853 13.2365L13.8469 18.4448C14.05 18.6479 14.3167 18.75 14.5834 18.75C14.85 18.75 15.1167 18.6479 15.3198 18.4448C15.7271 18.0375 15.7271 17.3792 15.3198 16.9719L10.8479 12.5L15.3198 8.02812C15.7271 7.62085 15.7271 6.9625 15.3198 6.55522C14.9125 6.14795 14.2542 6.14795 13.8469 6.55522L8.63853 11.7636C8.23125 12.1708 8.23125 12.8292 8.63853 13.2365Z" fill="white"/>
            <defs>
              <linearGradient id="paint0_linear_673_18848" x1="25.8333" y1="-0.833334" x2="-7.95027" y2="11.7492" gradientUnits="userSpaceOnUse">
                <stop stop-color="#01CDDB"/>
                <stop offset="1" stop-color="#8D4BE6"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="swiper-button-next">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
            <path d="M12.5 0C5.60728 0 0 5.60728 0 12.5C0 19.3927 5.60728 25 12.5 25C19.3927 25 25 19.3927 25 12.5C25 5.60728 19.3927 0 12.5 0ZM16.3615 13.2365L11.1531 18.4448C10.95 18.6479 10.6833 18.75 10.4166 18.75C10.15 18.75 9.8833 18.6479 9.68018 18.4448C9.2729 18.0375 9.2729 17.3792 9.68018 16.9719L14.1521 12.5L9.68022 8.02812C9.27295 7.62085 9.27295 6.9625 9.68022 6.55522C10.0875 6.14795 10.7458 6.14795 11.1531 6.55522L16.3615 11.7636C16.7688 12.1708 16.7688 12.8292 16.3615 13.2365Z" fill="url(#paint0_linear_673_18852)"/>
            <path d="M16.3615 13.2365L11.1531 18.4448C10.95 18.6479 10.6833 18.75 10.4166 18.75C10.15 18.75 9.8833 18.6479 9.68018 18.4448C9.2729 18.0375 9.2729 17.3792 9.68018 16.9719L14.1521 12.5L9.68022 8.02812C9.27295 7.62085 9.27295 6.9625 9.68022 6.55522C10.0875 6.14795 10.7458 6.14795 11.1531 6.55522L16.3615 11.7636C16.7688 12.1708 16.7688 12.8292 16.3615 13.2365Z" fill="white"/>
            <defs>
              <linearGradient id="paint0_linear_673_18852" x1="-0.833333" y1="-0.833334" x2="32.9503" y2="11.7492" gradientUnits="userSpaceOnUse">
                <stop stop-color="#01CDDB"/>
                <stop offset="1" stop-color="#8D4BE6"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div class="swiper-pagination"></div>
    </div>
  </div>
`;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = CbBnnBersinar.html;
  }

  async connectedCallback() {
    const SwiperModule = await import(
      "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs"
    );
    const Swiper = SwiperModule.Swiper || SwiperModule.default;

    const data = await this.fetchSlides();
    const wrapper = this.shadowRoot.querySelector(".swiper-wrapper");
    wrapper.innerHTML = data
      .map(
        (item) => `
        <div class="swiper-slide">
          <a href="${item.url}" class="cb-bnn__card" target="_blank">
            <div class="cb-bnn__card-img">
              <img src="${item.image}" alt="${(item.title || "").replace(/"/g, "&quot;")}" loading="lazy" />
            </div>
            <p class="cb-bnn__card-title">${item.title || ""}</p>
            <span class="cb-bnn__card-time">${this.timeAgo(item.timestamp)}</span>
          </a>
        </div>
      `,
      )
      .join("");

    new Swiper(this.shadowRoot.querySelector(".swiper"), {
      loop: data.length > 2,
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 10,
      pagination: {
        el: this.shadowRoot.querySelector(".swiper-pagination"),
        clickable: true,
      },
      navigation: {
        nextEl: this.shadowRoot.querySelector(".swiper-button-next"),
        prevEl: this.shadowRoot.querySelector(".swiper-button-prev"),
      },
    });
  }

  async fetchSlides() {
    try {
      const res = await fetch(new URL("data-bnn.json", BASE));
      const json = await res.json();
      const items = Array.isArray(json) ? json : json.data || [];
      return items.map((item) => ({
        title: item.title,
        image: item.image,
        url: item.url || item.article_url || "#",
        timestamp: Number(item.date_published_timestamp) || 0,
      }));
    } catch (e) {
      console.error("Failed to load BNN data JSON", e);
      return [];
    }
  }

  timeAgo(timestamp) {
    if (!timestamp) return "";
    const diff = Math.floor(Date.now() / 1000) - timestamp;
    if (diff < 60) return "Baru saja";
    const minutes = Math.floor(diff / 60);
    if (minutes < 60) return `${minutes} Menit yang lalu`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} Jam yang lalu`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `${days} Hari yang lalu`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months} Bulan yang lalu`;
    return `${Math.floor(months / 12)} Tahun yang lalu`;
  }
}

customElements.define("cb-bnn-bersinar", CbBnnBersinar);
