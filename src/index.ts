type Log = Warning | Info | Success

interface Warning {
    type: "Warning"
    msg: string;
}


interface Info {
    type: "Info"
    text: string
}


interface Success {
    type: "Success"
    message: string
}
function handleMsg(log: Log) {
    switch (log.type){
        case "Warning":
            console.log(log.msg)
            break;
        case "Info":
            console.log(log.text)
            break;
        case "Success":
            console.log(log.message)
            break;       
    }
}