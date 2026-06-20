import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mountSuspended, mockNuxtImport } from '@nuxt/test-utils/runtime'
import SpeakersPage from '~/pages/speakers.vue'

vi.mock('~/data/timetable_data', () => ({
  default: {
    timetable: {
      daiksy: { name: '粕谷 大輔 (だいくしー)' },
      tamacona: { name: '河内 一弘（Kawachi Kazuhiro）' },
      lucas: { name: 'ゴールドナ ルーカス' },
      soudai: { name: '曽根 壮大(そね たけとも)' },
      miyake: { name: '三宅 大樹 (まょけ)' },
      umeta: { name: 'Yuuki Umeta' },
    },
  },
}))

const { navigateToMock } = vi.hoisted(() => ({
  navigateToMock: vi.fn(),
}))

mockNuxtImport('navigateTo', () => navigateToMock)

describe('pages/speakers.vue', () => {
  beforeEach(() => {
    navigateToMock.mockReset()
  })

  it('renders correctly', async () => {
    const wrapper = await mountSuspended(SpeakersPage)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('daiksy 行クリックで navigateTo が呼ばれる', async () => {
    const wrapper = await mountSuspended(SpeakersPage)
    const cell = wrapper.find('td[class*="hover"]')
    await cell.trigger('click')
    expect(navigateToMock).toHaveBeenCalledWith('/detail/?speaker=daiksy')
  })

  it('tamacona 行クリックで navigateTo が呼ばれる', async () => {
    const wrapper = await mountSuspended(SpeakersPage)
    const cells = wrapper.findAll('td.siimple-table-cell.hover')
    await cells[1].trigger('click')
    expect(navigateToMock).toHaveBeenCalledWith('/detail/?speaker=tamacona')
  })

  it('lucas 行クリックで navigateTo が呼ばれる', async () => {
    const wrapper = await mountSuspended(SpeakersPage)
    const cells = wrapper.findAll('td.siimple-table-cell.hover')
    await cells[2].trigger('click')
    expect(navigateToMock).toHaveBeenCalledWith('/detail/?speaker=lucas')
  })

  it('soudai 行クリックで navigateTo が呼ばれる', async () => {
    const wrapper = await mountSuspended(SpeakersPage)
    const cells = wrapper.findAll('td.siimple-table-cell.hover')
    await cells[3].trigger('click')
    expect(navigateToMock).toHaveBeenCalledWith('/detail/?speaker=soudai')
  })

  it('miyake 行クリックで navigateTo が呼ばれる', async () => {
    const wrapper = await mountSuspended(SpeakersPage)
    const cells = wrapper.findAll('td.siimple-table-cell.hover')
    await cells[4].trigger('click')
    expect(navigateToMock).toHaveBeenCalledWith('/detail/?speaker=miyake')
  })

  it('umeta 行クリックで navigateTo が呼ばれる', async () => {
    const wrapper = await mountSuspended(SpeakersPage)
    const cells = wrapper.findAll('td.siimple-table-cell.hover')
    await cells[5].trigger('click')
    expect(navigateToMock).toHaveBeenCalledWith('/detail/?speaker=umeta')
  })
})
