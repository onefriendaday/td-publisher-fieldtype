import Vue from 'vue'
import Plugin from '../Plugin.vue'

new Vue({
  data() {
    return {
      schema: {
        options: [
          {
            name: 'prodUrl',
            value: 'https://api.netlify.com/build_hooks/597edb3b424ef210e08513d2'
          }
        ]
      },
      model: undefined
    }
  },
  el: 'body',
  components: { Plugin },
  methods: {
    update(v) {
      this.model = v
    }
  }
})
