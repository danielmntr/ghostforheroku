# Station to Station, a theme for Ghost.

A minimalist blog theme for [Ghost](https://ghost.org/) by Daniel Monteiro.

***

## Demo

* [Blog](https://station2station.herokuapp.com/)
* [Post](https://station2station.herokuapp.com/welcome-to-ghost/)

## Features

* Clean responsive layout.
* Lightweight and minimal with a minimal footprint.
* Frontpage swipe enabled.
* Blog navigation.
* Next and previous post navigation.
* Cover images for blog, post, tag and author archives.
* Front page featured posts slider.
* [Disqus](https://disqus.com/) comments support.
* Post sharing on Facebook, Twitter & Google+.
* Easily modifiable theme with various colour schemes included.
* Source Sass & Webpack files included.
* Built with [Webpack 3.0](https://webpack.js.org/)
* Built on top of [Yahoo's PureCSS framework](https://purecss.io/) (v0.6.2).
* jQuery compatible.
* Google Web Fonts.

## Setup

After uploading the theme, go to Settings > Labs and select the Beta Feature 'Public API'.

To enable [Disqus](https://disqus.com/) comments go to your blogs code injection settings and add the following to your blog header:

```
<script>
(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://YOUR-WEBSITE-SHORTNAME.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
```
*Note: Replace 'YOUR-WEBSITE-SHORTNAME' with your community shortname found on disqus.com*

## Development

Install devDependencies:

	npm install
	
Autobuild webpack project:

	webpack --watch --progress --colors

## Copyright & License

Copyright (c) 2017 Daniel Monteiro - Released under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.