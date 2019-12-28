import Vue from 'vue'
import Router from 'vue-router'
import ChartComponent from "@/components/echartcomponent"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      name:"echart",
      component:ChartComponent
    }
  ]
})
