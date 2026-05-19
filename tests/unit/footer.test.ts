import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Footer from '~/components/footer.vue'

describe('components/footer.vue', () => {
  it('「オープンセミナー岡山実行委員会」テキストが表示される', async () => {
    const wrapper = await mountSuspended(Footer)
    expect(wrapper.text()).toContain('オープンセミナー岡山実行委員会')
  })

  it('footer 要素が存在する', async () => {
    const wrapper = await mountSuspended(Footer)
    expect(wrapper.find('footer').exists()).toBe(true)
  })
})
