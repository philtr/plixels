class PlxHeadline extends HTMLElement {
  constructor() { super() }

  connectedCallback() {
    this.innerHTML = `
      <header>
        <h1><img src="plixels.gif" alt="plixels.net"></h1>
        <h2>Comin' atcha fresh since 2005!</h2>
      </header>
    `
  }
}

class PlxNavigation extends HTMLElement {
  constructor() { super() }

  connectedCallback() {
    this.innerHTML = `
      <nav>
        <ul>
          <li><a href="/" data-turbo-frame="main" data-turbo-action="advance">Home</a></li>
          <li><a href="/about.html" data-turbo-frame="main" data-turbo-action="advance">About</a></li>
          <li><a href="/blog.html" data-turbo-frame="main" data-turbo-action="advance">Blog</a></li>
          <li><a href="/products.html" data-turbo-frame="main" data-turbo-action="advance">Products</a></li>
        </ul>
      </nav>
    `
  }
}

class PlxColophon extends HTMLElement {
  constructor() { super() }

  connectedCallback() {
    this.innerHTML = `
      <footer>
        <plx-banner-ad></plx-banner-ad>
        <p>Copyright &copy; <a href="https://web.archive.org/web/20050412032749/http://plixels.net/">2005</a>-2024</p>
      </footer >
      `
  }
}

class PlxBannerAd extends HTMLElement {
  constructor() { super() }
  connectedCallback() {
    const banners = ["cactus-quencher.gif", "dream-whisper.gif"]
    const banner = banners[Math.floor(Math.random() * banners.length)]

    this.innerHTML = `
      <p><a href="/products.html" data-turbo-frame="main" data-turbo-action="advance"><img src="banners/${banner}" width="702" height="90"></a></p>
    `

    setTimeout(() => this.connectedCallback(), 30_000)
  }
}

window.customElements.define('plx-headline', PlxHeadline);
window.customElements.define('plx-navigation', PlxNavigation);
window.customElements.define('plx-colophon', PlxColophon);
window.customElements.define('plx-banner-ad', PlxBannerAd);
