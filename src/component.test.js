import { Autoextra } from './component'
import { mount, shallowMount } from '@vue/test-utils'



describe('Autoextra', () => {
 
  it('should include a slot for ever item in the collection, plus one extra', done => {
    const wrapper = mount(Autoextra, {
      propsData: {
        collection: [{
          name: 'joe'
        }]
      },
      scopedSlots: {
        default: '<div><input type="text" v-model="props.item.name"/></div>'
      }
    })
    wrapper.vm.$nextTick(() => {
      expect(wrapper.findAll('input').length).toEqual(2)
      expect(wrapper.findAll('input').at(0).element.value).toEqual('joe')
      done()  
    })
  })

  it('should include yetanother entry when editing the extra entry', done => {
    const wrapper = mount(Autoextra, {
      propsData: {
        collection: [{
          name: 'joe'
        }]
      },
      scopedSlots: {
        default: '<div><pre>{{props}}</pre><input type="text" v-model="props.item.name"/></div>'
      }
    })
    wrapper.vm.$nextTick(() => {
      const extraInput = wrapper.findAll('input').at(1)
      extraInput.setValue('bar')
      done()
    })    
  })

})