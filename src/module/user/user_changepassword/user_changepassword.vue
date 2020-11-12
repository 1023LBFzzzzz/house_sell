<template>
  <div id="app">
    <div class="login" style="margin-top:50px;">

      <div class="header">
        <div class="switch" id="switch"><a class="switch_btn_focus" id="switch_qlogin" href="javascript:void(0);" tabindex="7">找回密码</a>
        </div>
      </div>


      <div class="web_qr_login" id="web_qr_login" style="display: block; ">

        <div class="modal_content">
          <div>
            <label for="phone1">注册手机号：</label><br />
            <input id="phone1" type="text" autocomplete="off" placeholder="请输入已绑定的手机号" name="phone"/>
          </div>
          <div>
            <label for="code1">验证码：</label>
            <div class="code1">
              <input id="code1" type="text" autocomplete="off" placeholder="短信验证码" name="code"/>
              <input id="btnSendCode1" type="button" class="btn btn-default" value="获取验证码" @click="sendMessage1()" />
            </div>
          </div>
          <div class="next">
            <button @click="binding()">确定</button>
          </div>

        </div>
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
        n_uphone:'',
        code:'',
        phone:'',
        ucode:'',
        phoneReg:/(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/,
        count: 60,
        InterValObj1:'',
        curCount1:'',
        checkcode:'',
        userid:''
      }
    },
    methods: {

      /*第一*/
      sendMessage1() {
        this.curCount1 = this.count;
        var phone = $.trim($('#phone1').val());
        if (!this.phoneReg.test(phone)) {
          alert(" 请输入有效的手机号码");
          return false;
        }
        //设置button效果，开始计时
        $("#btnSendCode1").attr("disabled", "true");
        $("#btnSendCode1").val( + this.curCount1 + "秒再获取");
        this.InterValObj1 = window.setInterval(this.SetRemainTime1, 1000); //启动计时器，1秒执行一次
        //向后台发送处理数据
        var params={
          phone:phone,
        }
        this.$http.post('/neusoft/premise/customer/changepassword.htm', params).then(response => {

          var resBody = response.body
          console.log(resBody.result)
          if (resBody.isSuccess === 0) {
              alert("发送成功")
             /* console.log(resBody)*/

              this.checkcode=resBody.tmpData.code
              /*console.log(this.checkcode)*/
              this.userid=resBody.tmpData.user
            }else {
            alert("发送失败，请检查手机号是否为预留手机号！")
          }

        })

      },
      SetRemainTime1() {
        if (this.curCount1 == 0) {
          window.clearInterval(this.InterValObj1);//停止计时器
          $("#btnSendCode1").removeAttr("disabled");//启用按钮
          $("#btnSendCode1").val("重新发送");
        }
        else {
          this.curCount1--;
          $("#btnSendCode1").val( + this.curCount1 + "秒再获取");
        }
      },

      /*提交*/
     binding(){
       var code1 = $(" input[ name='code' ] ").val()

       if(code1===this.checkcode){
         alert("验证成功")
         location.href="/user/user_changepwd.html?userid="+this.userid
       }else {
         alert("验证失败")
         location.href="/user/user_changepassword.html"
       }
      },


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
