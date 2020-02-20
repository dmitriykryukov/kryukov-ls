import Header from '../components/header.vue';
import Tabs from '../components/tabs.vue';

export default [
  {
    path: "/",
    components: {
      default: () => import('../components/pages/skills.vue'),
      tabs: Tabs,
      header: Header
    },
    meta: {
      title: "Блок «Навыки»"
    }
  },
  {
    path: "/reviews",
    components: {
      default: () => import('../components/pages/reviews.vue'),
      tabs: Tabs,
      header: Header
    },
    meta: {
      title: "Блок «Отзывы»"
    }
  },
  {
    path: "/works",
    components: {
      default: () => import('../components/pages/works.vue'),
      tabs: Tabs,
      header: Header
    },
    meta: {
      title: "Блок «Работы»"
    }
  },
  {
    path: "/login",
    components: {
      default: () => import('../components/pages/login.vue'),
    },
    meta: {
      public: true
    }
  }
];