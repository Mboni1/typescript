"use strict";
function handleMsg(log) {
    switch (log.type) {
        case "Warning":
            console.log(log.msg);
            break;
        case "Info":
            console.log(log.text);
            break;
        case "Success":
            console.log(log.message);
            break;
    }
}
//# sourceMappingURL=index.js.map