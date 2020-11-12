<template>
  <div id="app">
    <h1>修改密码</h1>

    <div class="login" style="margin-top:50px;">

      <div class="header">
        <div class="switch" id="switch">
          <a class="switch_btn" id="switch_login" href="javascript:void(0);" tabindex="8">重置密码</a><div class="switch_bottom" id="switch_bottom" style="position: absolute; width: 64px; left: 0px;"></div>
        </div>
      </div>


      <div class="web_qr_login" id="web_qr_login" style="display: block; height: 235px;">

        <!--登录-->
        <div class="web_login">

          <input type="hidden" name="to" value="reg"/>
          <input type="hidden" name="did" value="0"/>
          <ul class="reg_form" id="reg-ul">
            <li>
              <label for="passwd" class="input-tips2">密码：</label>
              <div class="inputOuter2">
                <input type="password" id="passwd"  name="upwd" maxlength="16" class="inputstyle2"/>
              </div>

            </li>
            <li>
              <label for="passwd2" class="input-tips2">确认密码：</label>
              <div class="inputOuter2">
                <input type="password" id="passwd2" name="" maxlength="16" class="inputstyle2" />
              </div>

            </li>

            <li>
              <div class="inputArea">
                <input type="button" id="reg"  style="margin-top:10px;margin-left:150px;" class="button_blue" value="确定" @click="change()"/>

              </div>

            </li><div class="cl"></div>
          </ul>
        </div>
        <!--登录end-->
      </div>


    </div>
  </div>

</template>

<script>

  export default {
    name: 'app',
    components: {
    },
    data () {
      return {
        token: '',
        msg: 'Hello World!',
        n_uname:'',
        n_upwd:'',
        name:'',
        password:'',
        rpassword:'',
        phone:'',
        userid:''
      }
    },
    methods: {
      parseUrl(){
        var url=location.href;
        var i=url.indexOf('?');

        if(i===-1)return;
        var querystr=url.substr(i+1);
        var arr1=querystr.split('&');

        var arr2=new Object();
        for  (i in arr1){
          var ta=arr1[i].split('=');
          arr2[ta[0]]=ta[1];
        }
        var a=arr2['userid'].split('#');
        this.userid = a[0]
        console.log(this.userid)
      },

      change(){
        this.n_upwd=$(" input[ name='upwd' ] ").val()
        var params={
          n_upwd:this.n_upwd,
          n_uid: this.userid,
        }
        this.$http.post('/neusoft/premise/customer/update.htm', params).then(response => {
          var resBody = response.body
          console.log(resBody.result)
          if (resBody.isSuccess === 0) {
              alert("修改成功")
              sessionStorage.setItem('user', JSON.stringify  (resBody.result))
              console.log(sessionStorage.getItem("token"))
              location.href="/user/user_login.html"
            }else{
              alert("修改失败")
              location.href="/user/user_login.html"
            }


        })


      }
    },

    //  页面加载之前
    created() {

    },
    //  页面加载后
    mounted() {
      this.parseUrl()
    }
  }





</script>

<style>

</style>
