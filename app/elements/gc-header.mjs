// View documentation at: https://enhance.dev/docs/learn/starter-project/elements
/**
 * @type {import('@enhance/types').EnhanceElemFn}
 */

export default function gcHeader({ html, state }) {
    const { attrs } = state;
    const { locales } = attrs;
    const altLang = locales === "en" ? "fr" : "en";
    const language = locales === "en" ? "English" : "Français";
    const logo = locales === "en" ? "https://wet-boew.github.io/themes-dist/GCWeb/GCWeb/assets/sig-blk-en.svg" : "https://wet-boew.github.io/themes-dist/GCWeb/GCWeb/assets/sig-blk-fr.svg";
    const searchPlacholder = locales === "en" ? "Search Canada.ca" : "Rechercher dans Canada.ca";
    const breadcrumb = locales === "en" ? "You are here:" : "Vous êtes ici&nbsp;:";
    const signin = locales === "en" ? "Sign in" : "Se connecter";

    return html`
    <header>
      <div id="wb-bnr" class="container">
        <div class="row">
          <section id="wb-lng" class="col-xs-3 col-sm-12 pull-right text-right">
            <h2 class="wb-inv">Language selection</h2>
            <ul class="list-inline mrgn-bttm-0">
                <li>
                <a lang="${ altLang }" hreflang="${ altLang }" href="">
                    <span class="hidden-xs" translate="no">${ language }</span>
                    <abbr title="${ language }" translate="no" class="visible-xs h3 mrgn-tp-sm mrgn-bttm-0 text-uppercase">${ altLang }</abbr>
                </a>
                </li>
            </ul>
          </section><!-- #wb-lng -->
          <gc-langToggle href=""></gc-langToggle>
          <div class="brand col-xs-9 col-sm-5 col-md-4" property="publisher" typeof="GovernmentOrganization">
            <a href="#" property="url">
              <img src="${ logo }" alt="Government of Canada" property="logo"><span class="wb-inv"> / <span lang="${ altLang }">Gouvernement du Canada</span></span>
            </a>
            <meta property="name" content="Government of Canada">
            <meta property="areaServed" typeof="Country" content="Canada">
            <link property="logo" href="https://wet-boew.github.io/themes-dist/GCWeb/GCWeb/assets/wmms-blk.svg">
          </div><!-- .brand.col-xs-9.col-sm-5.col-md-4 -->
          <section id="wb-srch" class="col-lg-offset-4 col-md-offset-4 col-sm-offset-2 col-xs-12 col-sm-5 col-md-4">
            <h2>Search</h2>
            <form action="#" method="post" name="cse-search-box" role="search">
              <div class="form-group wb-srch-qry">
                <label for="wb-srch-q" class="wb-inv">${ searchPlacholder }</label>
                <input id="wb-srch-q" list="wb-srch-q-ac" class="wb-srch-q form-control" name="q" type="search" value="" size="34" maxlength="170" placeholder="${ searchPlacholder }">
                <datalist id="wb-srch-q-ac"></datalist>
              </div>
              <div class="form-group submit">
                <button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub" aria-expanded="false">
                  <span class="glyphicon-search glyphicon"></span>
                  <span class="wb-inv">Search</span>
                </button>
              </div>
            </form>
          </section>
        </div>
      </div><!-- #wb-bnr -->
      <hr>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <nav class="gcweb-menu" typeof="SiteNavigationElement">
              <h2 class="wb-inv">Menu</h2>
              <button type="button" aria-haspopup="true" aria-expanded="false"><span class="wb-inv">Main </span>Menu <span class="expicon glyphicon glyphicon-chevron-down"></span></button>
              <ul role="menu" aria-orientation="vertical" data-ajax-replace="https://www.canada.ca/content/dam/canada/sitemenu/sitemenu-v2-en.html"><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/jobs.html">Jobs and the workplace</a></li>
                <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/immigration-citizenship.html">Immigration and citizenship</a></li>
                <li role="presentation"><a role="menuitem" href="https://travel.gc.ca/">Travel and tourism</a></li>
                <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/business.html">Business and industry</a></li>
                <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/benefits.html">Benefits</a></li>
                <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/health.html">Health</a></li>
                <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/taxes.html">Taxes</a></li>
                <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/environment.html">Environment and natural resources</a></li>
                <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/defence.html">National security and defence</a></li>
                <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/culture.html">Culture, history and sport</a></li>
                <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/policing.html">Policing, justice and emergencies</a></li>
                <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/transport.html">Transport and infrastructure</a></li>
                <li role="presentation"><a role="menuitem" href="https://international.gc.ca/world-monde/index.aspx?lang=eng">Canada and the world</a></li>
                <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/finance.html">Money and finances</a></li>
                <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/science.html">Science and innovation</a></li>
              </ul>
            </nav>
          </div>
          <div class="col-xs-6 col-xs-offset-6 col-md-offset-0 col-md-4"">
            <section id="wb-so">
              <h2 class="wb-inv">${ signin }</h2>
              <a class="btn btn-primary custom wb-init wb-data-json-inited" href="../ircc/services/application/ircc-sign-in-demo.html" data-wb-json="{ &quot;url&quot;: &quot;#[contextual]/current/auth/link&quot;, &quot;type&quot;: &quot;attr&quot;, &quot;attr&quot;: &quot;href&quot; }" id="wb-auto-3">
                <span class="visible-xs">${ signin }</span>
                <span class="hidden-xs wb-init wb-data-json-inited" data-json-replace="#[contextual]/current/auth/labelExtended" id="wb-auto-4">${ signin }</span>
              </a>
            </section>
          </div>
        </div>
      </div>
      <nav id="wb-bc" property="breadcrumb">
        <h2>${ breadcrumb }</h2>
        <div class="container">
          <ol class="breadcrumb" typeof="BreadcrumbList">
            <li property="itemListElement" typeof="ListItem">
              <a property="item" typeof="WebPage" href="/wayfinding-orientation-2023/home.html">
                <span property="name">Canada.ca</span>
              </a>
              <meta property="position" content="1">
            </li>
          </ol>
        </div>
      </nav>  
    </header>`
  }