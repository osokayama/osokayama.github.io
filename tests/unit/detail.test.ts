import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mountSuspended, mockNuxtImport } from '@nuxt/test-utils/runtime'
import DetailPage from '~/pages/detail.vue'

const { useRouteMock } = vi.hoisted(() => ({
  useRouteMock: vi.fn(),
}))

mockNuxtImport('useRoute', () => useRouteMock)

describe('pages/detail.vue', () => {
  describe('有効な speaker クエリ（aknow）が与えられた場合', () => {
    beforeEach(() => {
      useRouteMock.mockReturnValue({ query: { speaker: 'aknow' } })
    })

    it('登壇者名が表示される', async () => {
      const wrapper = await mountSuspended(DetailPage)
      expect(wrapper.find('h2').text()).toContain('a-know')
    })

    it('登壇タイトルが存在する', async () => {
      const wrapper = await mountSuspended(DetailPage)
      expect(wrapper.find('h1').exists()).toBe(true)
    })

    it('プロフィールが表示される', async () => {
      const wrapper = await mountSuspended(DetailPage)
      expect(wrapper.find('.speaker_info p').exists()).toBe(true)
    })

    it('プロフィール写真が表示される', async () => {
      const wrapper = await mountSuspended(DetailPage)
      const img = wrapper.find('.speaker_photo img')
      expect(img.exists()).toBe(true)
      expect(img.attributes('alt')).toContain('a-know')
    })

    it('Twitter リンクが 1 件表示される', async () => {
      const wrapper = await mountSuspended(DetailPage)
      const icons = wrapper.findAll('.speaker_social_icons .fa-x-twitter')
      expect(icons).toHaveLength(1)
    })

    it('GitHub リンクが 1 件表示される', async () => {
      const wrapper = await mountSuspended(DetailPage)
      const icons = wrapper.findAll('.speaker_social_icons .fa-github')
      expect(icons).toHaveLength(1)
    })

    it('外部リンクが 1 件表示される', async () => {
      const wrapper = await mountSuspended(DetailPage)
      const icons = wrapper.findAll('.speaker_social_icons .fa-external-link-alt')
      expect(icons).toHaveLength(1)
    })

    it('Facebook リンクが表示されない（aknow は空）', async () => {
      const wrapper = await mountSuspended(DetailPage)
      const icons = wrapper.findAll('.speaker_social_icons .fa-facebook')
      expect(icons).toHaveLength(0)
    })

    it('「戻る」リンクが表示される', async () => {
      const wrapper = await mountSuspended(DetailPage)
      expect(wrapper.find('a[href="#"]').exists()).toBe(true)
    })

    it('「戻る」クリックで history.back() が呼ばれる', async () => {
      const backSpy = vi.spyOn(history, 'back').mockImplementation(() => {})
      const wrapper = await mountSuspended(DetailPage)
      await wrapper.find('a[href="#"]').trigger('click')
      expect(backSpy).toHaveBeenCalledOnce()
      backSpy.mockRestore()
    })
  })

  describe('speaker クエリに対応するデータが存在しない場合', () => {
    beforeEach(() => {
      useRouteMock.mockReturnValue({ query: { speaker: 'unknown_speaker' } })
    })

    it('コンテンツエリアが表示されない', async () => {
      const wrapper = await mountSuspended(DetailPage)
      expect(wrapper.find('.siimple-box').exists()).toBe(false)
    })
  })

  describe('speaker クエリが存在しない場合', () => {
    beforeEach(() => {
      useRouteMock.mockReturnValue({ query: {} })
    })

    it('コンテンツエリアが表示されない', async () => {
      const wrapper = await mountSuspended(DetailPage)
      expect(wrapper.find('.siimple-box').exists()).toBe(false)
    })
  })
})
