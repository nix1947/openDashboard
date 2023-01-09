

exports.getAllUsers = function (request, response) {
    return response.send("all users");
}

exports.createNewUser = function (request, response) {
    return response.send("Created new user")
}

exports.getUserDetails = function (request, response) {
    return response.send("provided new user details");
}

exports.deleteUser = function (request, response) {
    return response.send("deleted user");
}

exports.updateUser = function (request, response) {
    return response.send("updated user");
}
