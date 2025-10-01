function loginSubmited() {
    document.getElementById("error-text").innerHTML = "";
    var postData = {};
    postData.username = document.getElementById("username").value;
    postData.password = document.getElementById("password").value;
    ajax.post('../api/login', postData, function(responseText) {
        try {
            obj = JSON.parse(responseText); // XXX probably wont work if <= IE7
            if(obj.success) {
                document.getElementById("error-text").innerHTML = "";
                location.reload();
            }
            else {
                document.getElementById("error-text").innerHTML = obj.data.error;
            }
        }
        catch (e) {
            alert("Unknown error.");
        }
    });
}
