function makeRequest(location){
	return new Promise((resolve, reject) => {
		console.log(`Making request to ${location}`);

		if(location === "Google"){
			resolve("Google says hi");
		}else{
			reject("We can only talk to Google");
		}
	})
}

function processRequest(response){
	return new Promise((resolve, reject) => {
		console.log("Processing response");
		resolve(`Extra Information + ${response}`);
	})
}

// makeRequest("Facebook").then(response => {
// 	console.log("Response received.");
// 	return processRequest(response);
// }).then(processedResponse => {
// 	console.log(processedResponse);
// }).catch(err => {
// 	console.log(err);
// });

async function doWork() {
	try{
		const response = await makeRequest("Facebook");
		console.log("Response received.");
		const processedResponse = await processRequest(response);
		console.log(processedResponse);
	}catch(error){
		console.log(error);
	}
	
}

doWork();