<template>
  <div id="app">
    <h1>用户登录</h1>

    <div class="login" style="margin-top:50px;">

      <div class="header">
        <div class="switch" id="switch"><a class="switch_btn_focus" id="switch_qlogin" href="javascript:void(0);" tabindex="7">快速登录</a>
          <a class="switch_btn" id="switch_login" href="javascript:void(0);" tabindex="8">快速注册</a><div class="switch_bottom" id="switch_bottom" style="position: absolute; width: 64px; left: 0px;"></div>
        </div>
      </div>


      <div class="web_qr_login" id="web_qr_login" style="display: block; height: 235px;">

        <!--登录-->
        <div class="web_login" id="web_login">


          <div class="login-box">


            <div class="login_form">

                <input type="hidden" name="did" value="0"/>
                <input type="hidden" name="to" value="log"/>
                <div class="uinArea" id="uinArea">
                  <label class="input-tips" for="u">手机：</label>
                  <div class="inputOuter" id="uArea">

                    <input type="text" id="u" name="n_uname" class="inputstyle"/>
                  </div>
                </div>
                <div class="pwdArea" id="pwdArea">
                  <label class="input-tips" for="p">密码：</label>
                  <div class="inputOuter" id="pArea">

                    <input type="password" id="p" name="n_upwd" class="inputstyle"/>
                  </div>
                </div>

                <a href="/user/user_changepassword.html" style="margin-left: auto">忘记密码</a>

                <div style="padding-left:50px;margin-top:20px;">
                  <button   style="width:150px;" class="button_blue" @click="login()">登 录</button>
                </div>

            </div>

          </div>

        </div>
        <!--登录end-->
      </div>

      <!--注册-->
      <div class="qlogin" id="qlogin" style="display: none; ">

        <div class="web_login">

          <input type="hidden" name="to" value="reg"/>
          <input type="hidden" name="did" value="0"/>
          <ul class="reg_form" id="reg-ul">
            <div id="userCue" class="cue">快速注册请注意格式</div>
            <li>

              <label for="user"  class="input-tips2">用户名：</label>
              <div class="inputOuter2">
                <input type="text" id="user" name="uname" maxlength="16"  class="inputstyle2"/>
              </div>

            </li>

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
              <label for="qq" class="input-tips2">手机：</label>
              <div class="inputOuter2">
                <input type="text" id="qq" name="n_uphone" maxlength="11" class="inputstyle2"/>
              </div>

            </li>

            <li>
              <div class="inputArea">
                <input type="button" id="reg"  style="margin-top:10px;margin-left:150px;" class="button_blue" value="注册" @click="register()"/>

              </div>

            </li><div class="cl"></div>
          </ul>
        </div>
      </div>
      <!--注册end-->
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
        phone:''
      }
    },
    methods: {
      login(){
        this.n_uname=$(" input[ name='n_uname' ] ").val()
        this.n_upwd=$(" input[ name='n_upwd' ] ").val()
        var params={
          n_uname:this.n_uname,
          n_upwd:this.n_upwd
        }
        this.$http.post('/neusoft/premise/customer/loginByName.htm', params).then(response => {

          var resBody = response.body
          console.log(resBody.result)

          if (resBody.isSuccess === 0) {
            if(resBody.result!==undefined){
              alert("登录成功")
              sessionStorage.setItem('user', JSON.stringify  (resBody.result))
              console.log(sessionStorage.getItem("token"))

              location.href="/index.html"
            }else{
              alert("登录失败")
              location.href="/user/user_login.html"
          }

          } else {
            alert("登录失败")
            location.href="/user/user_login.html"
          }
        })
      },
      register(){
        if ($('#user').val() == "") {
          $('#user').focus().css({
            border: "1px solid red",
            boxShadow: "0 0 2px red"
          });
          $('#userCue').html("<font color='red'><b>×用户名不能为空</b></font>");
          return false;
        }

        if ($('#user').val().length < 2 || $('#user').val().length > 16) {

          $('#user').focus().css({
            border: "1px solid red",
            boxShadow: "0 0 2px red"
          });
          $('#userCue').html("<font color='red'><b>×用户名位2-16字符</b></font>");
          return false;

        }
        if ($('#passwd').val().length < pwdmin) {
          $('#passwd').focus();
          $('#userCue').html("<font color='red'><b>×密码不能小于" + pwdmin + "位</b></font>");
          return false;
        }
        if ($('#passwd2').val() != $('#passwd').val()) {
          $('#passwd2').focus();
          $('#userCue').html("<font color='red'><b>×两次密码不一致！</b></font>");
          return false;
        }

        var sqq = /^1(3|4|5|7|8)\d{9}$/;
        if (!sqq.test($('#qq').val()) || $('#qq').val().length < 5 || $('#qq').val().length > 12) {
          $('#qq').focus().css({
            border: "1px solid red",
            boxShadow: "0 0 2px red"
          });
          $('#userCue').html("<font color='red'><b>×手机号码格式不正确</b></font>");
          return false;
        }
        this.n_uname=$(" input[ name='uname' ] ").val()
        this.n_upwd=$(" input[ name='upwd' ] ").val()
        this.n_uphone=$(" input[ name='n_uphone' ] ").val()
        var params={
          n_uname:this.n_uname,
          n_upwd:this.n_upwd,
          n_uphone:this.n_uphone,
        }
        this.$http.post('/neusoft/premise/customer/register.htm', params).then(response => {
          var resBody = response.body
          console.log(resBody)

          if (resBody.isSuccess === 0) {
              alert("注册成功")
              sessionStorage.setItem('user', JSON.stringify  (resBody.result))
              console.log(sessionStorage.getItem("token"))
              location.href="/user/user_login.html"

          } else if(resBody.isSuccess === -1){
            alert("用户名重复，注册失败!")
          }else if(resBody.isSuccess === 1){
            alert("手机号已注册，注册失败!")
          }

        })


      }
    },

    //  页面加载之前
    created() {

    },
    //  页面加载后
    mounted() {

    }
  }





</script>

<style>

</style>
