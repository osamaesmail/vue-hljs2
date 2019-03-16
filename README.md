# vue-highlight

[![npm](https://img.shields.io/npm/v/vue-hljs2.svg)](https://www.npmjs.com/package/vue-hljs2) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> Highlight.js plugin for Vue.js 2.

## [Demo](http://vue-hljs2.osamaesmail.info)

## Installation

```bash
npm install --save vue-hljs2
```

## Usage

### Bundler (Webpack, Rollup) `full version`

```js
import Vue from 'vue'
import VueHljs from 'vue-hljs2'

Vue.use(VueHljs)
```

### Bundler (Webpack, Rollup) `lite version`

```js
import Vue from 'vue'
import VueHljs from 'vue-hljs2/vueHljsLite'
import 'vue-hljs2/themes/monkai'
import 'vue-hljs2/dist/themes/monokai.js'
import javascript from 'highlight.js/lib/languages/javascript'

vuehljs.registerLanguage('javascript', javascript)

Vue.use(VueHljs)
```

### Browser

```html
<!-- Include after Vue -->
<!-- Local files -->
<script src="vue-hljs2/dist/vue-hljs.js"></script>

<!-- From CDN -->
<script src="https://unpkg.com/vue-hljs2"></script>
```

## options
|option|default|description|
|---|---|---|
|language|''|is a string for the default language|
|theme|''|is a string for the default theme|
|numbers|`false`|to display line numbers|
|numbers|`false`|to display line numbers|
|inline|`false`|to make the display inline|
|tag|pre|the container tag `inline option will set this tage to span`|
|autoDetection|`false`|language detection|
|ignoreIllegals|`false`|forces highlighting to finish even in case of detecting illegal syntax for the language instead of throwing an exception|
|continuation|`false`|is an optional mode stack representing unfinished parsing. When present, the function will restart parsing from this state instead of initializing a new one|

### Example `assign options`

```js
import Vue from 'vue'
import VueHljs from 'vue-hljs2'

Vue.use(VueHljs, {
    language: 'javascript',
    theme: 'monokai',
    numbers: true,
})
```

### example `with default options`

```html
<!-- with default options example -->
<hljs>
// code is here
</hljs>
```

### example `override default options`

```html
<!-- override default options example -->
<hljs theme="monokai-sublime">
// code is here
</hljs>
```

### example `get the raw codes`

```html
<!-- give the component a name = code1 -->
<div id="app">
    <hljs name="code1">
    // code is here
    </hljs>
</div>

<script>
new Vue({
    el: '#app',
    mounted: function() {
        // will print the raw code of name = code1
      console.log(this.$vueHljs.codes.code1)
    }
})
</script>
```

## License

[MIT](http://opensource.org/licenses/MIT)
