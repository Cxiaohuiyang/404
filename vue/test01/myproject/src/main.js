// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/weui.min.css'
import { Carousel, CarouselItem } from 'vue-l-carousel'

//www
Vue.config.productionTip = false
Vue.config.devtools = true
/* eslint-disable no-new */


Vue.component('carousessl', {
  template: 
  `
        <carousel :auto="3000" :watch-items="list">
            <carousel-item v-for="(item, index) in list">
              <img v-src="item.url" alt=""/>
              {{item.url}}
            </carousel-item>
        </carousel>
  `,
  data: function () {
    return {
        auto: 3000,
        list: [
            {
                url: 'https://modao.cc/uploads3/images/872/8720134/raw_1491977651.jpeg'
            },
            {
                url: 'https://modao.cc/uploads3/images/871/8719896/raw_1491977330.jpeg'
            },
            {
                url: 'https://modao.cc/uploads3/images/872/8720132/raw_1491977648.jpeg'
            }
        ]
    }
   
  },
   components: {
      Carousel,
       CarouselItem
    }
});
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
