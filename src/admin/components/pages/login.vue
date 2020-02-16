<template lang="pug">
  .login
    .login__content
      h2.login__title Авторизация
      form(@submit.prevent="submit").login__form
        .login__row
          vc-input(
            :strong="true"
            name="name"
            title="Логин"
            icon="user"
            v-model="user.name"
            :errorText="validation.firstError('user.name')"
            :autofocus="true")
        .login__row
          vc-input(
            :strong="true"
            name="password"
            title="Пароль"
            icon="key"
            type="password"
            v-model="user.password"
            :errorText="validation.firstError('user.password')")
        .login__row
          .login__btn
            button(type="submit").btn.btn--feedback Отправить
</template>



<script>
import $axios from '../../requests.js';
import simpleVueValidator from 'simple-vue-validator';

const { Validator } = simpleVueValidator;
import { mapActions} from 'vuex';

export default {
  mixins: [simpleVueValidator.mixin],
  data: () => ({
    user: {
      name: '',
      password: ''
    }
  }),
  components: {
    vcTooltip: () => import('../tooltip-input.vue'),
    vcInput: () => import('../input.vue')
  },
  validators: {
    'user.name': function (value) {
      return Validator.value(value).required().minLength(6);
    },
    'user.password': function (value) {
      return Validator.value(value).required().minLength(6);
    }
  },
  methods: {
    ...mapActions('tooltip', ['showTooltip']),
    async submit() {
      if (await this.$validate()) {
        try {
          const { data: { token } } = await $axios.post('/login', this.user);

          localStorage.setItem('token', token);
          $axios.defaults.headers['Authorization'] = `Bearer ${ token }`;
          await this.$router.replace('/');
        } catch ({ message }) {
          this.showTooltip( { message, type: 'error' });
        }
      }
    }
  }
};
</script>




<style lang="pcss">
@import "../../../styles/mixins.pcss";

  .login {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    &__content {
      width: 563px;
      padding: 50px 77px 60px;
      background: #fff;
    }

    &__form {

    }

    &__row:not(:last-child) {
      margin-bottom: 40px;
    }
    &__title {
      color: #414c63;
      font-size: 36px;
      font-weight: 600;
      line-height: 60px;
      text-align: center;
      margin-bottom: 34px;
    }

    &__btn {
      display: flex;
      justify-content: center;
    }
  }
</style>


