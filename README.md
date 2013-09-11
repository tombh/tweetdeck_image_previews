TweetDeck Instgram Previews
================

The [Tweetdeck Web App](http://web.tweetdeck.com) has stopped displaying inline image previews for tweets continaing 
Instagram links. This is probably to do with the great [Twitter/Instagram war](http://status.twitter.com/post/37258637900/instagram-photo-rendering-issue).

So here is some hacky Javascript to add Instagram previews back. I may get round to adding support for more image providers,
like Imgur. And well, any type of image that ends in a valid image extension, why not eh?

## Installation 

For Chrome/Tampermonkey, install the [Tampermonkey](https://chrome.google.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo) Google Chrome extension.

For Firefox/Greasemonkey install the [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) Firefox add-on.

Then add the [tip.user.js](https://github.com/tombh/tweetdeck_image_previews/raw/master/tip.user.js) file. If Tampermonkey/Greasemonkey
is installed then you should be able to hust one-click install from that previous link. Otherwise you may need to manually add the file as a new userscript.
