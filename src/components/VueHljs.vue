<template><component :is="cTag" :class="cClass"><code :class="language" class="hljs" ref="code"><slot></slot></code></component></template>

<script>
export default {
  name: 'hljs',
  props: {
    ignoreIllegals: Boolean,
    continuation: Boolean,
    language: String,
    theme: String,
    numbers: Boolean,
    inline: Boolean,
    tag: String,
    name: String
  },
  data () {
    return {
      breakLineRegEx: /\r\n|\r|\n/g
    }
  },
  computed: {
    cAutoDetection () {
        return this.$vueHljs.autoDetection;
    },
    cIgnoreIllegals () {
      return this.ignoreIllegals ? this.ignoreIllegals : this.$vueHljs.ignoreIllegals
    },
    cLanguage () {
      return this.language ? this.language : this.$vueHljs.language
    },
    cContinuation () {
      return this.continuation ? this.continuation : this.$vueHljs.continuation
    },
    cTheme () {
      return this.theme ? this.theme : this.$vueHljs.theme
    },
    cNumbers () {
      return this.numbers ? this.numbers : this.$vueHljs.numbers
    },
    cInline () {
      return this.inline || this.$vueHljs.inline ? 'vue-hljs-inline' : ''
    },
    cTag () {
      return this.tag ? this.tag : (this.inline ? 'span' : this.$vueHljs.tag)
    },
    cClass () {
      return [
        'vue-hljs',
        this.cTheme,
        this.cInline,
      ].join(' ')
    }
  },
  mounted () {
    let html = this.$refs.code.innerHTML
    this.$vueHljs.codes[this.name] = html
    html = this.cAutoDetection
      ? this.$vueHljs.highlightAuto(html).value
      : this.$vueHljs.hljs.highlight(
      this.cLanguage,
      this.$refs.code.innerHTML,
      this.cIgnoreIllegals,
      this.cContinuation
    ).value
    if (this.cNumbers) {
      html = this.$vueHljs.hljs.lineNumbersValue(html)
    }
    this.$refs.code.innerHTML = html
  }
}
</script>

<style lang="scss">
.vue-hljs {
    text-align: left;
    overflow: hidden;
    &.vue-hljs-inline {
        display: inline-flex;
    }
    .hljs-ln td.hljs-ln-numbers {
        text-align: center;
        color: #ccc;
        border-right: 1px solid #CCC;
        vertical-align: top;
        padding-right: 5px;
    }
}
</style>
