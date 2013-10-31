// ==UserScript==
// @name        Tweetdeck Instagram Previews
// @namespace   http://tombh.co.uk
// @version     0.1
// @description Shows Instagram thumbnails in Tweetdeck web app.
// @updateURL   https://github.com/tombh/tweetdeck_image_previews/raw/master/tip.user.js
// @match       https://tweetdeck.twitter.com/*
// @copyright   2013+, Mother Nature
// ==/UserScript==

TD.services.TwitterMedia.prototype.thumb = function () {
    switch (this.service) {
    case "twitter":
        return this.entity.media_url_https + ":thumb";
    case "twitpic":
        return "https://twitpic.com/show/thumb/" + this.url.split("/").pop();
    case "yfrog":
        return this.url.replace("http://", "https://") + ":small";
    case "lockerz":
        return "https://api.plixi.com/api/tpapi.svc/imagefromurl?size=thumbnail&url=" + this.url;
    case "instagram2":
        return "http://instagram.com/p/" + this.url.split("/").pop() + "/media/?size=t";
    case "youtube":
        return "https://img.youtube.com/vi/" + this.mediaId + "/default.jpg";
    }
};

TD.services.TwitterMedia.prototype.small = function () {
    switch (this.service) {
    case "twitter":
        return this.entity.media_url_https + ":small";
    case "twitpic":
    case "yfrog":
    case "lockerz":
        return this.large();
    case "instagram2":
        return "http://instagram.com/p/" + this.url.split("/").pop() + "/media/?size=t";
    case "youtube":
        return "https://img.youtube.com/vi/" + this.mediaId + "/mqdefault.jpg";
    }
};

TD.services.TwitterMedia.prototype.medium = function () {
    switch (this.service) {
    case "twitter":
        return this.entity.media_url_https;
    case "twitpic":
    case "yfrog":
    case "lockerz":
        return this.large();
    case "instagram2":
        return "http://instagram.com/p/" + this.url.split("/").pop() + "/media/?size=m";
    case "youtube":
        return "https://img.youtube.com/vi/" + this.mediaId + "/mqdefault.jpg";
    }
};

TD.services.TwitterMedia.prototype.large = function () {
    switch (this.service) {
    case "twitter":
        return this.entity.media_url_https + ":large";
    case "twitpic":
        return "https://twitpic.com/show/full/" + this.url.split("/").pop();
    case "yfrog":
        return this.url.replace("http://", "https://") + ":iphone";
    case "lockerz":
        return "https://api.plixi.com/api/tpapi.svc/imagefromurl?size=medium&url=" + this.url;
    case "instagram2":
        return "http://instagram.com/p/" + this.url.split("/").pop() + "/media/?size=l";
    case "youtube":
        return "https://img.youtube.com/vi/" + this.mediaId + "/hqdefault.jpg";
    }
};

TD.services.TwitterMedia.SERVICES.instagram2 = /(http:\/\/|www.)?instagram.com\/p\/[\w-]+(\/)/;

TD.services.TwitterMedia.prototype.fromURL = function (e, t, i) {
    if (this.url = i, this.shortUrl = t, this.service = e, "instagram2" === this.service && _.endsWith(this.url, "/")) this.url = this.url.substring(0, this.url.length - 1);
    else if ("youtube" === this.service && (this.isVideo = !0, this.mediaId = this.url.match(TD.services.TwitterMedia.YOUTUBE_LONG_RE) ? TD.net.util.decodeURL(this.url).v : this.url.split("/").pop().split("?")[0], this.startTimeInUrl = TD.net.util.decodeURL(this.url).t, this.startTimeInUrl)) {
        var s = this.startTimeInUrl.match(TD.services.TwitterMedia.YOUTUBE_STARTTIME),
            n = s[1] ? parseInt(3600 * s[1], 10) : 0,
            r = s[2] ? parseInt(60 * s[2], 10) : 0,
            o = s[3] ? parseInt(s[3], 10) : 0;
        this.startTime = n + r + o;
    }
    return this;
};