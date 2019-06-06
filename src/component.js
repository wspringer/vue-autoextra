export const Autoextra = {
  props: ['collection'],
  data () {
    return {
      shadow: [],
      placeholder: {}
    }
  },
  mounted () {    
    this.$watch('collection', (next) => {
      const unregister = this.$watch(
        'placeholder',
        (updated) => {
          if (!_.isEmpty(updated)) {
            unregister()
            if (next) {
              next.push(this.placeholder)
              this.placeholder = {}
            }
          }
        }, 
        { deep: true }
      )
      this.shadow = next ? next.concat(this.placeholder) : [ this.placeholder ]
    }, { immediate: true })
  },  
  template: `
<div>
  <div v-for="(item, index) in shadow">
    <slot :item="item" :last="index === shadow.length - 1" :index="index"/>
  </div>
</div>
`
}

