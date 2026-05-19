import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Header from '~/components/header.vue'

describe('components/header.vue', () => {
  it('ロゴ画像が存在する', async () => {
    const wrapper = await mountSuspended(Header)
    const img = wrapper.find('.siimple-navbar-title img')
    expect(img.exists()).toBe(true)
  })

  it('メニューリンクが5件存在する', async () => {
    const wrapper = await mountSuspended(Header)
    const links = wrapper.findAll('#menus a.siimple-navbar-link')
    expect(links).toHaveLength(5)
  })

  it('テスト環境（window.innerWidth=1024）では mount 後 menuVisible が true になる', async () => {
    const wrapper = await mountSuspended(Header)
    expect(wrapper.vm.menuVisible).toBe(true)
  })

  it('toggleCanvas() を呼ぶと menuVisible が false になる', async () => {
    const wrapper = await mountSuspended(Header)
    await wrapper.vm.toggleCanvas()
    expect(wrapper.vm.menuVisible).toBe(false)
  })

  it('toggleCanvas() を2回呼ぶと menuVisible が true に戻る', async () => {
    const wrapper = await mountSuspended(Header)
    await wrapper.vm.toggleCanvas()
    await wrapper.vm.toggleCanvas()
    expect(wrapper.vm.menuVisible).toBe(true)
  })

  it('バーアイコンのリンクをクリックすると menuVisible がトグルする', async () => {
    const wrapper = await mountSuspended(Header)
    const barLink = wrapper.find('.bars a')
    await barLink.trigger('click')
    expect(wrapper.vm.menuVisible).toBe(false)
    await barLink.trigger('click')
    expect(wrapper.vm.menuVisible).toBe(true)
  })

  it('menuVisible が true のときメニュー要素が表示状態になる', async () => {
    const wrapper = await mountSuspended(Header)
    expect(wrapper.find('#menus').isVisible()).toBe(true)
  })
})
