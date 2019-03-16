import vueHljsLite from './vueHljsLite'

const requireLangs = require.context('highlight.js/lib/languages/', true, /.+\.js/)
requireLangs.keys().forEach(key => {
    if (!(/arduino.js|sqf.js/.test(key))) {
        vueHljsLite.registerLanguage('cpp', require('highlight.js/lib/languages/' + 'cpp.js'))
    }
    vueHljsLite.registerLanguage(key.slice(2, -3), requireLangs(key))
})

const requireTheme = require.context('./styles/', true, /.+\.scss$/)
requireTheme.keys().forEach(requireTheme)

export default vueHljsLite
