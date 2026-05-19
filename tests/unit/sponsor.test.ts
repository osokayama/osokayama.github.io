import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import SponsorPage from '~/pages/sponsor.vue'

describe('pages/sponsor.vue', () => {
  it('プラチナスポンサーが5件表示される', async () => {
    const wrapper = await mountSuspended(SponsorPage)
    const items = wrapper.findAll('.platina .sponsor-list-item')
    expect(items).toHaveLength(5)
  })

  it('ゴールドスポンサーが4件表示される', async () => {
    const wrapper = await mountSuspended(SponsorPage)
    const items = wrapper.findAll('.gold .sponsor-list-item')
    expect(items).toHaveLength(4)
  })

  it('ツール支援が1件表示される', async () => {
    const wrapper = await mountSuspended(SponsorPage)
    const items = wrapper.findAll('.tool .sponsor-list-item')
    expect(items).toHaveLength(1)
  })

  it('シルバースポンサーの見出しが非表示（データ0件のためv-ifで制御）', async () => {
    const wrapper = await mountSuspended(SponsorPage)
    const headings = wrapper.findAll('h3')
    expect(headings.every(h => !h.text().includes('シルバースポンサー'))).toBe(true)
  })

  it('ブロンズスポンサーの見出しが非表示（データ0件のためv-ifで制御）', async () => {
    const wrapper = await mountSuspended(SponsorPage)
    const headings = wrapper.findAll('h3')
    expect(headings.every(h => !h.text().includes('ブロンズスポンサー'))).toBe(true)
  })

  it('音源提供の見出しが非表示（データ0件のためv-ifで制御）', async () => {
    const wrapper = await mountSuspended(SponsorPage)
    const headings = wrapper.findAll('h3')
    expect(headings.every(h => !h.text().includes('音源提供'))).toBe(true)
  })

  it('司会の見出しが非表示（データ0件のためv-ifで制御）', async () => {
    const wrapper = await mountSuspended(SponsorPage)
    const headings = wrapper.findAll('h3')
    expect(headings.every(h => !h.text().includes('司会'))).toBe(true)
  })

  it('後援セクションが非表示（データ0件のためv-ifで制御）', async () => {
    const wrapper = await mountSuspended(SponsorPage)
    expect(wrapper.find('.support').exists()).toBe(false)
  })
})
