import hljs from 'highlight.js/lib/highlight'
import vueHljs from './components/VueHljs'

export default {
  install: function (Vue,options)
  {
    options = Object.assign({autoDetection: false, ignoreIllegals: false, continuation: false, language: '', theme: '', numbers: false, inline: false, tag: 'pre'}, options)
    Vue.component('hljs', vueHljs)
    window.hljs = hljs
    require('highlightjs-line-numbers.js')
    Vue.prototype.$vueHljs = {
      ...options,
      hljs: window.hljs,
      codes: {}
    }
  },
  registerLanguage(name, lang) {
    hljs.registerLanguage(name, lang)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
