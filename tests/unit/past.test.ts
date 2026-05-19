import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import PastPage from '~/pages/past.vue'

describe('pages/past.vue', () => {
  it('17件のアイテムが表示される', async () => {
    const wrapper = await mountSuspended(PastPage)
    const links = wrapper.findAll('.past > a')
    expect(links).toHaveLength(17)
  })

  it('各アイテムのhrefが ../YEAR/index.html 形式になっている', async () => {
    const wrapper = await mountSuspended(PastPage)
    const links = wrapper.findAll('.past > a')
    links.forEach(link => {
      expect(link.attributes('href')).toMatch(/^\.\.\/\d{4}\/index\.html$/)
    })
  })

  it('2024年のリンクhrefが正しい', async () => {
    const wrapper = await mountSuspended(PastPage)
    const links = wrapper.findAll('.past > a')
    expect(links.some(a => a.attributes('href') === '../2024/index.html')).toBe(true)
  })

  it('2008年のリンクhrefが正しい', async () => {
    const wrapper = await mountSuspended(PastPage)
    const links = wrapper.findAll('.past > a')
    expect(links.some(a => a.attributes('href') === '../2008/index.html')).toBe(true)
  })

  it('背景画像がある年（2024年）はbackground-imageスタイルが設定される', async () => {
    const wrapper = await mountSuspended(PastPage)
    const boxes = wrapper.findAll('.past_bg')
    const box2024 = boxes.find(b => b.text().includes('2024'))
    expect(box2024).toBeDefined()
    expect(box2024!.attributes('style')).toContain('background-image')
    expect(box2024!.attributes('style')).not.toContain('none')
  })

  it('背景画像がない年（2008年）はbackground-imageがnoneになる', async () => {
    const wrapper = await mountSuspended(PastPage)
    const boxes = wrapper.findAll('.past_bg')
    const box2008 = boxes.find(b => b.text().includes('2008'))
    expect(box2008).toBeDefined()
    expect(box2008!.attributes('style')).toContain('none')
  })

  it('テーマがある年（2024年）はテーマテキストが表示される', async () => {
    const wrapper = await mountSuspended(PastPage)
    expect(wrapper.text()).toContain('【のびしろ】')
  })
})
