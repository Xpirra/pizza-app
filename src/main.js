import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import About from "./components/about/About";
import Admin from "./components/Admin";
import Login from "./components/Login";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Register from "./components/Register";

//二级路由
import Contact from "./components/about/Contact";
import Delivery from "./components/about/Delivery";
import History from "./components/about/History";
import OrderingGuide from "./components/about/OrderingGuide";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: 'homeLink', component: Home },
  { path: "/menu", name: "menuLink", component: Menu },
  { path: "/admin", name: "adminLink", component: Admin },
  { path: "/login", name: "loginLink", component: Login },
  { path: "/register", name: "registerLink", component: Register },
  {
    path: "/about", //路径 
    name: "aboutLink", //别名 引用名  标签中可以是用 v-bind 绑定属性 {name: 'xxx'} 使用
    component: About, // 组件名
    redirect: "/about/contact", //默认显示内容
    children: [
      { path: "/about/contact", name: "contactLink", component: Contact },
      { path: "/about/delivery", name: "deliveryLink", component: Delivery },
      { path: "/about/history", name: "historyLink", component: History },
      { path: "/about/orderingGuide",name: "orderingGuideLink",component: OrderingGuide }
    ]
  },
  { path: "*", redirect: "/" }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

/* 全局守卫 */
// router.beforeEach((to, from, next) => {
  //判断 store.gettes.isLogin === false
//   if (to.path == "/login" || to.path == "/register") {
//     next();
//   } else {
//     alert("请先登录");
//     next("/login");
//   }
// });

//后置钩子
// router.afterEach((to,from) => {
// alert('请先登录');
// })


//实例化vue
new Vue({
  el: "#app",
  render: h => h(App),
  router
});
