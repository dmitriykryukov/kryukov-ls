<template lang="pug">
  header.header-container
    .header
      .container
        .header__info
          .user
            .user__pic
              img(src="../../images/content/user.jpg").user__pic-avatar
            .user-name 
              span Дмитрий Крюков
              button(type="button" @click="logoutTheUser").exit-btn Выйти
          .header__title Панель администрирования
        button(type="button" @click="logoutTheUser").exit-btn Выйти
</template>

<script>

import { mapActions } from 'vuex';

  export default {
    methods: {
      ...mapActions('user', ['logoutUser']),
      async logoutTheUser () {
        await this.logoutUser();
        await this.$router.push('/login')
      }
    }
  }
</script>


<style lang="pcss">
@import url("../../styles/mixins.pcss");

.header {
  color: #fff;  
}

.container {
  position: relative;
  max-width: 92.5rem;
  width: 95%;
  margin: 0 auto;
}


.header__info {
  display: flex;
  align-items: center;
}

.header__title {
  color: rgba(#fff, 0.5);

  @include phones {
    display: none;
  }
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.user-name {
  font-size: 18px;
  font-weight: 600;

  .exit-btn {
    display: none;
    @include phones {
      display: block;
    }
  }
}

.user__pic {
  margin-right: 20px;
  width: 45px;
  height: 45px;
  overflow: hidden;
  flex-shrink: 0;
  border-radius: 50%;
}

.exit-btn {
  color: rgba(255, 255, 255, .5);
  text-decoration: underline;
  font-size: 14px;

  &:hover {
    text-decoration: none;
  }

  @include phones {
    display: none;
  }
}
</style>

