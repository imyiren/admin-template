import * as VueRouter from "vue-router";

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: "/", component: () => import('./components/main/Home.vue') },
  { path: "/abc", component: () => import('./components/main/Abc.vue') },
  { path: "/api/create", component: () => import('./components/main/api/edit/ApiEdit.vue') },
  { path: "/api/list", component: () => import('./components/main/api/list/ApiList.vue') },
  { path: "/api/:uuid", component: () => import('./components/main/api/detail/ApiDetail.vue') },
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = VueRouter.createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: VueRouter.createWebHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
