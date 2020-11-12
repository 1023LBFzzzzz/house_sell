<template>
  <div id="app">
    <div data-am-widget="slider" class="am-slider am-slider-c1" data-am-slider='{"directionNav":false}' >
      <div class="am-slides">
        <li v-for="news in list">
          <a href="events_show.html"><img :src="news.news_picpath"></a>
          <div class="am-slider-desc">远方 有一个地方 那里种有我们的梦想</div>

        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      list: []
    }
  },
  //  页面加载之前
  methods: {
    initList() {
      var params = {
        pageIndex: 1,
        pageSize: 4,
      }
      this.$http.post('/neusoft/news/news/getPage.htm', params).then(response => {
        var res = response.body
        if (res.isSuccess === 0) {
          this.list = res.result.content
          this.pages = res.result.totalPages
          console.log(this.list)
        } else if (res.isSuccess === 4) {
          console.log(this.list)
        } else {
          this.list = null
          console.log(this.list)
        }
      })
    }
  },
  created() {
  },
  //  页面加载后
  mounted() {
    this.initList()
  }
}
</script>

<style>

</style>
