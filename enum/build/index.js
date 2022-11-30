"use strict";
var AuthMethod;

(function (AuthMethod) {
    AuthMethod[AuthMethod["github"] = 0] = "github";
    AuthMethod[AuthMethod["email"] = 1] = "email";
    AuthMethod[AuthMethod["google"] = 2] = "google";
})(AuthMethod || (AuthMethod = {}));
