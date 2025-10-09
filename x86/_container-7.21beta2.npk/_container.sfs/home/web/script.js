function capitalize(s) {
    return s[0].toUpperCase() + s.substr(1);
}

function appsLoad() {
    let dom = document.getElementById("apps");
    dom.innerHTML = "";
    dom.style.paddingTop = 0;

    fetch(`/apps?${Date.now()}`)
        .then(response => response.json())
        .then(json => {
           let apps = json["apps"];
           dom.hidden = apps.length < 1;
           for (const app of apps) {
                let name = capitalize(app["name"]);
                let url = app["url"];

                let li = document.createElement("li");
                li.style.textAlign = "center";

                let link = document.createElement("a");
                link.innerText = name;
                link.href = url;

                let icon = document.createElement("span");
                icon.classList.add("icon");
                icon.innerText = name[0];
                icon.style.fontSize = "3rem";

                const img = new Image();
                img.onload = () => {
                    icon.innerText = "";
                    icon.style.backgroundImage = `url("${img.src}")`;
                    icon.style.backgroundSize = "cover";
                    icon.style.backgroundOrigin = "content-box";
                    icon.style.backgroundSize = "cover";
                    icon.style.padding = "8px";
                }
                img.src = app["icon"] || `${url}/favicon.ico`;

                li.append(icon);
                li.appendChild(link);
                dom.appendChild(li);
             }
        });
}