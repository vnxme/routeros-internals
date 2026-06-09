function openWebFig() {
    window.location.replace(`/webfig/${window.location.hash}`);
}

window.onload = () => {
    if (window.localStorage.getItem("token")) openWebFig();
    const get = id => document.getElementById(id);
    // Don't override user agent autofill
    get("name").value = get("name").value || window.localStorage.getItem("lastuser") || get("name").dataset.defaultuser;
    if (get("name").value) get("password").focus();

    const error = window.sessionStorage.getItem("error");
    if (error) {
        get("error")?.appendChild(document.createTextNode(error));
        window.sessionStorage.removeItem("error");
    }
    window.name = ""; // Deprecated

    get("login").onsubmit = e => {
        e.preventDefault();
        window.sessionStorage.setItem("name", get("name").value);
        window.localStorage.setItem("lastuser", get("name").value);
        window.sessionStorage.setItem("password", get("password").value);
        openWebFig();
    };
}

window.onstorage = e => {
    if (e.key === "token") openWebFig();
}
