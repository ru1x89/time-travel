import { mount } from '@vue/test-utils'
import Action from '@/components/Action.vue'
import Button from '@/components/utilities/Button.vue'

describe('Action.vue', () => {
  let wrapper
  const props = {
    actionIndex: 1,
    description: 'Moved post 2 from index 1 to index 2',
  }

  beforeEach(() => {
    wrapper = mount(Action, {
      propsData: props,
    })
  })

  it('Checks for displayed commited action description is correct', () => {
    expect(wrapper.find('[data-action="action-description"]').text()).toEqual(
      props.description
    )
  })

  it('Test time travel button emit event when pressed', () => {
    wrapper.findComponent(Button).trigger('click')

    expect(wrapper.emitted()['time-travel']).toBeTruthy()
  })
})
