<template>
  <div>
    <div v-if="loading">
      Loading...
    </div>
    <div v-else>
      <a class="uk-button uk-display-block" v-on:click="deploy(prodUrl)">
        Deploy to production
      </a>
      <a class="uk-button uk-display-block uk-margin-small-top" v-on:click="deploy(stageUrl)">
        Deploy to staging
      </a>
    </div>
  </div>
</template>

<script>
export default {
  mixins: [window.Storyblok.plugin],
  data: function() {
    return {
      loading: false
    }
  },
  computed: {
    prodUrl: function() {
      return this.getUrl('prodUrl')
    },
    stageUrl: function() {
      return this.getUrl('stageUrl')
    }
  },
  methods: {
    initWith() {
      return {
        plugin: 'td-publisher'
      }
    },

    getUrl(url) {
      let urls = this.schema.options.filter(function(item) {
        return item.name == url
      })

      if (urls.length) {
        return urls[0].value
      }

      return ''
    },

    deploy(hookUrl) {
      if (!hookUrl.length) {
        alert('Please define the options prodUrl and stageUrl in your schema definition options.')
        return
      }

      this.loading = true

      jQuery.ajax({
        url: hookUrl,
        type: 'POST'
      })
      .done((res) => {
        console.log(res, 'success')
      })
      .fail((res) => {
        console.log(res, 'error')
      })
      .always((res) => {
        this.loading = false
        console.log(res, 'complete')
      });
    }
  }
}
</script>

<style>
  
</style>
