function elementary(ua) {
    var e = "elementary OS",
        m = "Midori/0.5",
        u = "Linux";

    if ( ua.indexOf(e) > -1 ) {
        return "0.4";
    } else if ( (ua.indexOf(m) >-1) && (ua.indexOf(u) >-1) ) {
        return "0.3";
    }

    return false;
}
