class PlxLayout extends HTMLElement {
  constructor() { super() }

  connectedCallback() {
    const body = this.innerHTML

    this.innerHTML = `
      <plx-headline></plx-headline>
      <plx-navigation></plx-navigation>
      <main>${body}</main>
      <plx-colophon></plx-colophon>
    `
  }
}

class PlxHeadline extends HTMLElement {
  constructor() { super() }

  connectedCallback() {
    this.innerHTML = `
      <header>
        <h1><a href="/"><img src="/img/plixels.gif" alt="plixels.net"></a></h1>
        <h2 class="pixelated">Comin' atcha fresh since 2005!</h2>
      </header>
    `
  }
}

class PlxNavigation extends HTMLElement {
  constructor() { super() }

  menu() {
    return [
      { name: "Home", url: "/", },
      { name: "About", url: "/about.html", },
      { name: "Blog", url: "/blog.html", },
      { name: "Products", url: "/products.html" },
    ]
  }

  renderItem(item) {
    return `<li><a href="${item.url}" data-turbo-frame="main" data-turbo-action="advance">${item.name}</a></li>`
  }

  connectedCallback() {
    this.innerHTML = `
      <nav>
        <ul>
          ${this.menu().map(item => this.renderItem(item)).join('')}
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
      <p><a href="/products.html" data-turbo-frame="main" data-turbo-action="advance"><img class="banner" src="/img/banners/${banner}"></a></p>
    `

    setTimeout(() => this.connectedCallback(), 30_000)
  }
}

window.customElements.define('plx-headline', PlxHeadline);
window.customElements.define('plx-navigation', PlxNavigation);
window.customElements.define('plx-colophon', PlxColophon);
window.customElements.define('plx-banner-ad', PlxBannerAd);
window.customElements.define('plx-layout', PlxLayout);
