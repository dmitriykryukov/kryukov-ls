<template lang="pug">
  .login
    .login__content
      h2.login__title Авторизация
      form.login__form
        .login__row
          .input.input--iconed.input__icon--user
            label.input__label(for='input__name') Логин
            .input__wrapper
              input#input__name.input__element.input__element--strong( autocomplete='off' autofocus='autofocus' type='text' name='name' placeholder='')
            .input-tooltip
        .login__row
          .input.input--iconed.input__icon--key
            label.input__label( for='input__password') Пароль
            .input__wrapper
              input#input__password.input__element.input__element--strong(autocomplete='off' type='password' name='password' placeholder='')
            .input-tooltip
        .login__row
          .login__btn
            button.btn.btn--feedback(type='submit') Отправить

</template>

<script>
export default {
  
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


