function elementary(ua) {
    var e = "elementary OS/0.4",
        m = "Midori/0.5",
        l = "Linux";

    if ( ua.indexOf(e) > -1 ) {
        return "0.4";
    } else if ( (ua.indexOf(m) >-1) && (ua.indexOf(l) >-1) ) {
        // Running Midori 0.5 on Linux, so very possibly Freya.
        return "0.3"; // FIXME: incorrectly reports 0.3 for Midori in Loki
    }

    return false;
}
