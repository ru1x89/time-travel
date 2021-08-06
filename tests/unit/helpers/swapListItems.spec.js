import { swapListItems } from '@/helpers/swapListItems'

describe('SwapListItems', () => {
  it('Check list item swap helper', () => {
    const itemsList = [
      { id: 1, title: 'Title 1' },
      { id: 2, title: 'Title 2' },
      { id: 3, title: 'Title 3' },
      { id: 4, title: 'Title 4' },
      { id: 5, title: 'Title 5' },
    ]
    const index1 = 0
    const index2 = 2
    const swappedListItems = swapListItems({ itemsList, index1, index2 })

    expect(swappedListItems[index1].id).toEqual(itemsList[index2].id)
    expect(swappedListItems[index2].id).toEqual(itemsList[index1].id)
  })
})
