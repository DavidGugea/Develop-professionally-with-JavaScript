const webpage = require("webpage").create();
const url = "https://www.rheinwerk-verlag.de";

webpage.onResourceRequest = (requrest, networkRequest) => {
    console.log(`request: ${request.url}`);
};

webpage.onResourceReceived = (requrest, networkRequest) => {
    console.log(`response: ${response.url}`);
};

webpage.open(url, (status) => {
    if(status === "success"){
        console.log(JSON.stringify(webpage.cookies, null, 2));
    }

    phantom.exit();
})