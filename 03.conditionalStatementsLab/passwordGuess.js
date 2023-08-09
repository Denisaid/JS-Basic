function passwordguess(input) {
    let login = input[0];
    let user="s3cr3t!P@ssw0rd";
    if (login !== user) {
        console.log("Wrong password!");
    } else {
        console.log("Welcome")
    }
}


passwordguess(["qwerty"])