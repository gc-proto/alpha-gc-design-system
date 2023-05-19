// View documentation at: https://enhance.dev/docs/learn/starter-project/elements
/**
 * @type {import('@enhance/types').EnhanceElemFn}
 */
export default function gcLangToggle({ html, state }) {
    const { attrs } = state;
    const { locale } = attrs;
    const altLang = locale === "en" ? "fr" : "en";
    const language = locale === "en" ? "Français" : "English";
 
    return html`
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
    </section><!-- #wb-lng -->`
}
