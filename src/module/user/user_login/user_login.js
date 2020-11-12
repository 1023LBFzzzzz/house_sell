import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import App from './user_login.vue'
import CryptoJS from 'crypto-js'
import router from '../../index/router/index_router.js'

Vue.use(VueRouter)
Vue.use(vueResource)
FastClick.attach(document.body)

Vue.prototype.encrypt = function (obj) {
  var key = CryptoJS.enc.Utf8.parse('1234567812345678')
  var srcs = CryptoJS.enc.Utf8.parse(JSON.stringify(obj))
  var encrypted = CryptoJS.AES.encrypt(srcs, key, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7})
  return encrypted.toString()
}
Vue.prototype.decode = function (obj) {
  var key = CryptoJS.enc.Utf8.parse('1234567812345678')
  var decrypt = CryptoJS.AES.decrypt(obj, key, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7})
  return CryptoJS.enc.Utf8.stringify(decrypt).toString()
}

Vue.http.interceptors.push(function (request, next) {
  request.body = this.encrypt(request.body)
  next((response) => {
    response.body = JSON.parse(this.decode(response.body))
    return response
  })
})

FastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

