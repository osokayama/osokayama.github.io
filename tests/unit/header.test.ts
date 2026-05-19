import { describe, it, expect, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Header from '~/components/header.vue'

vi.mock('~/data/header_data', () => ({
  default: {
    menus: [
      { text: 'よくあるご質問', url: 'faq' },
      { text: '実行委員会', url: 'staff' },
      { text: 'スポンサー', url: 'sponsor' },
    ]
  }
}))

describe('components/header.vue', () => {
  it('renders correctly', async () => {
    const wrapper = await mountSuspended(Header)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('toggleCanvas() を呼ぶと menuVisible が切り替わる', async () => {
    const wrapper = await mountSuspended(Header)
    const initial = wrapper.vm.menuVisible
    await wrapper.vm.toggleCanvas()
    expect(wrapper.vm.menuVisible).toBe(!initial)
    await wrapper.vm.toggleCanvas()
    expect(wrapper.vm.menuVisible).toBe(initial)
  })

  it('バーアイコンのリンクをクリックすると menuVisible がトグルする', async () => {
    const wrapper = await mountSuspended(Header)
    const barLink = wrapper.find('.bars a')
    const initial = wrapper.vm.menuVisible
    await barLink.trigger('click')
    expect(wrapper.vm.menuVisible).toBe(!initial)
    await barLink.trigger('click')
    expect(wrapper.vm.menuVisible).toBe(initial)
  })

  it('menuVisible が true のときメニュー要素が表示状態になる', async () => {
    const wrapper = await mountSuspended(Header)
    wrapper.vm.menuVisible = true
    await wrapper.vm.$nextTick()
    expect(wrapper.find('#menus').isVisible()).toBe(true)
  })
})
