console.log("Start");

function loginUser(email, password, callback) {
    setTimeout(
        () => {
            console.log("Now we have the data.");
            console.log(email);
            onSuccess({
                userEmail : email
            });
        },
        2000
    );
}

function getUserVideos(email, callback){
    setTimeout(() => {
        callback(["video1", "video2", "video3"]);
    }, 1000);
}

function videoDetails(video, callback){
    setTimeout(() => {
        callback("title of the video");
    }, 1000);
}

const user = loginUser("test@gmail.com", 1234567, (user) => {
    console.log(user);
    getUserVideos(user.userEmail, (videos) => {
        console.log(videos);
        videoDetails(videos[0], (title) => {
            console.log(title);
        });
    });
});

console.log("End");