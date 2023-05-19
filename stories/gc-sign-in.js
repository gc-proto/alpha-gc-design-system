export const createSignin = ({ link, label, labelExtended, locales }) => {
    const wrapper = document.createElement("div");
    wrapper.className = ["col-xs-offset-7", "col-md-offset-0"].join(" ");
    
    const wbso = document.createElement("section");
    wbso.id = "wb-so";

    const signin = locales === "en" ? "Sign in" : "Se connecter";
    const h2 = document.createElement("h2");
    h2.className = "wb-inv";
    h2.innerText = signin;

    const btn = document.createElement("a");
    btn.className = ["btn", "btn-primary"].join(" ");
    btn.href = link;
    if(!labelExtended) {
        btn.innerText = signin
    } else {
        btn.innerHTML = `<span class="visible-xs">${ signin }</span><span class="hidden-xs">${ labelExtended }</span>`
    }

    wbso.insertAdjacentElement( "afterbegin", h2 );
    wbso.insertAdjacentElement( "beforeend", btn );
    wrapper.appendChild( wbso );

    return wrapper;
}