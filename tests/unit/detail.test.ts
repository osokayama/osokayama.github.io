import { describe, it, expect, vi } from 'vitest'
import { mountSuspended, mockNuxtImport } from '@nuxt/test-utils/runtime'
import DetailPage from '~/pages/detail.vue'

vi.mock('~/data/timetable_data', () => ({
  default: {
    timetable: {
      testSpeaker: {
        title: 'テストタイトル',
        name: 'テストスピーカー',
        affiliation: 'テスト所属',
        image: 'test.png',
        detail: '<p>テスト詳細</p>',
        twitter: ['https://x.com/test'],
        facebook: [],
        github: ['https://github.com/test'],
        externals: ['https://example.com'],
        profile: 'テストプロフィール',
      },
    },
  },
}))

const { useRouteMock } = vi.hoisted(() => ({
  useRouteMock: vi.fn(),
}))

mockNuxtImport('useRoute', () => useRouteMock)

describe('pages/detail.vue', () => {
  describe('有効な speaker クエリ（testSpeaker）が与えられた場合', () => {
    it('renders correctly', async () => {
      useRouteMock.mockReturnValue({ query: { speaker: 'testSpeaker' } })
      const wrapper = await mountSuspended(DetailPage)
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('「戻る」クリックで history.back() が呼ばれる', async () => {
      useRouteMock.mockReturnValue({ query: { speaker: 'testSpeaker' } })
      const backSpy = vi.spyOn(history, 'back').mockImplementation(() => {})
      const wrapper = await mountSuspended(DetailPage)
      await wrapper.find('a[href="#"]').trigger('click')
      expect(backSpy).toHaveBeenCalledOnce()
      backSpy.mockRestore()
    })
  })

  describe('speaker クエリに対応するデータが存在しない場合', () => {
    it('renders correctly', async () => {
      useRouteMock.mockReturnValue({ query: { speaker: 'unknown_speaker' } })
      const wrapper = await mountSuspended(DetailPage)
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  describe('speaker クエリが存在しない場合', () => {
    it('renders correctly', async () => {
      useRouteMock.mockReturnValue({ query: {} })
      const wrapper = await mountSuspended(DetailPage)
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})
