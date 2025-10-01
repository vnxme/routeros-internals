window.onload = () => {
    const get = id => document.getElementById(id);
    // Don't override user agent autofill
    get("name").value = get("name").value || get("name").dataset.defaultuser;
    if (get("name").value) get("password").focus();

    const error = window.sessionStorage.getItem("error");
    if (error) {
        get("error")?.appendChild(document.createTextNode(error));
        window.sessionStorage.removeItem("error");
    }
    window.name = ""; // Deprecated, remove when login page redesigned

    get("login").onsubmit = e => {
        e.preventDefault();
        window.sessionStorage.setItem("name", get("name").value);
        window.sessionStorage.setItem("password", get("password").value);
        window.location.replace(`/webfig/${window.location.hash}`);
    };
}
