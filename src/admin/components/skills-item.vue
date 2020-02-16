<template lang="pug">
  .skills__row(v-if="editMode" @keyup.enter="editExistedSkill" @keyup.esc="editMode = !editMode")
    .skills__cell: vc-input(type="text" name="skillTitle" v-model="editedSkill.title")
    .skills__cellS: vc-input(type="number" name="skillPercent" :strong="true" v-model="editedSkill.percent")
    .skills__cell
      .controls
        .controls__btn: button(type='button' @click="editExistedSkill").btn.btn-icon--check
        .controls__btn: button(type='button' @click="editMode = !editMode").btn.btn-icon--cancel

  .skills__row(v-else)
    .skills__cell {{ skill.title }}
    .skills__cell {{ skill.percent }} %
    .skills__cell
      .controls
        .controls__btn: button(type='button' @click="editMode = !editMode").btn.btn-icon--edit
        .controls__btn: button(type='button' @click="deleteSkill(skill)").btn.btn-icon--delete
</template>


<script>
import { mapActions } from 'vuex';

export default {
  props: {
    skill: Object
  },
  data () {
    return {
      editMode: false,
      editedSkill: { ...this.skill }
    };
  },
  components: {
    vcInput: () => import('./input.vue')
  },
  methods: {
    ...mapActions('skills', ['deleteSkill', 'editSkill']),
    editExistedSkill () {
      this.editMode = !this.editMode;
      this.editSkill(this.editedSkill);
    }
  }
};
</script>