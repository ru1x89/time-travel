import { shallowMount } from '@vue/test-utils'
import ActionsContainer from '@/components/ActionsContainer.vue'
import Action from '@/components/Action.vue'
import mockData from '@/data/actions'

describe('ActionsContainer.vue', () => {
  let wrapper
  const noActionsProps = {
    actionsList: [],
  }

  beforeEach(() => {
    wrapper = shallowMount(ActionsContainer, {
      propsData: noActionsProps,
    })
  })

  it("Check for the initial message exist if posts haven't moved yet", () => {
    expect(wrapper.find('[data-message="no-actions-message"]').text()).toEqual(
      "You haven't moved a posts yet."
    )
  })

  it('Check if number of action items are displayed correctly', () => {
    wrapper.setProps({ actionsList: mockData })

    const actionItem = wrapper.findAllComponents(Action)

    expect(actionItem.length).toEqual(0)
  })

  it('Display the list of commited actions if exist', () => {
    wrapper.setProps({ actionsList: mockData })

    const actionItem = wrapper.findComponent(ActionsContainer)

    expect(actionItem.is(ActionsContainer)).toBe(true)
  })
})
