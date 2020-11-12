<template>
  <iframe v-bind:src="getPagePath" width="100%" height="100%" frameborder="0" id="external-frame"></iframe>
</template>

<script>
  export default {
    name: 'main',
    data () {
      return {
        //缓存页面路径
        page_path: 'about.html',
        //页面容器,用于存放需要跳转页面的路径
        page_list: {
          //index
          'index': 'index.html',
          //premises
          'premises@premises_info': 'premises/premises_info.html/:id',
          'premises@premises_photo': 'premises/premises_photo.html',
          'premises@premises_find': 'premises/premises_show.html',
          'premises@premises_ar': 'premises/premises_ar.html',
          'premises@premises_dynamics': 'premises/premises_dynamics.html',
          'premises@premises_renderings': 'premises/premises_renderings.html',
          'premises@premises_remark': 'premises/premises_remark.html',
          'premises@premises_detail': 'premises/premises__detail.html',
          //news
          'news@news_info': 'news/news_info.html',
          'news@news_content': 'news/news_content.html',
          //calculate
          'calculate@calculate_house': 'calculate/calculate_house.html',
          //user
          'user@user_info': 'user/user_info.html',
          'user@user_spending': 'user/user_spending.html',
          'user@user_stay': 'user/user_stay.html',
          'user@user_trends': 'user/user_trends.html',
          'user@user_usetime': 'user/user_usetime.html',
          'user@user_login': 'user/user_login.html',
          'user@user_changepwd': 'user/user_changepwd.html',
          'user@user_changepassword': 'user/user_changepassword.html',
          //management
          'management@management_area': 'management/management_area.html',
          'management@management_staff': 'management/management_staff.html',
          //baidu
          'baidu': 'http://www.baidu.com'
        }
      }
    },
    computed: {
        //获取页面路径
        getPagePath (){
          if (this.page_list[this.$route.params.page_path]) {
            this.page_path = this.page_list[this.$route.params.page_path]
          }
          else if(this.$route.params.page_path == '!') {

            return this.page_path
          }
          else {
            this.page_path = this.page_list['about']
          }
          return this.page_path
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  iframe {
    padding: 3px;
  }
</style>
