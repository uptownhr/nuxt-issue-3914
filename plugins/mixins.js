import Vue from 'vue'

console.log('mixins')

export default () => {
  console.log(1)
  const mixins = {
    computed: {
      cleavePhoneFormat () {
        return {
          delimiters: ['+1',' ','(',')',' ', '-'],
          blocks: [0, 0, 0, 3, 0, 3, 4]
        }
      },
      availableSalesTimeSlots() {
        return this.$store.state.availableSalesTimeSlots
      }
    }
  }


  for (let x = 0; x < 100; x++) {
    Vue.mixin(mixins)
  }
}
