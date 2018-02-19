function humanReadable(sec) {
    let h = parseInt(sec / 3600);
    sec -= h * 3600;
    let m = parseInt(sec / 60);
    sec -= m * 60;

    return `${zero(h)}:${zero(m)}:${zero(sec)}`;

    function zero(num){
        let  len = String(num).length;
        return len < 2? ('0') + num : num;
    }
}




// --------------------------
function humanReadable(seconds) {
    var pad = function(x) { return (x < 10) ? "0"+x : x; }
    return pad(parseInt(seconds / (60*60))) + ":" +
        pad(parseInt(seconds / 60 % 60)) + ":" +
        pad(seconds % 60)
}


console.log(
    humanReadable(0),
    humanReadable(50),
    humanReadable(60),
    humanReadable(86399)
);