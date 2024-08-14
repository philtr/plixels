class PlxHeadline extends HTMLElement {
  constructor() { super() }

  connectedCallback() {
    this.innerHTML = `
      <header>
        <h1>Plixels</h1>
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
        <p>Copyright &copy; <a href="https://web.archive.org/web/20050412032749/http://plixels.net/">2005</a>-2024</p>
      </footer>
    `
  }
}

window.customElements.define('plx-headline', PlxHeadline);
window.customElements.define('plx-navigation', PlxNavigation);
window.customElements.define('plx-colophon', PlxColophon);
