import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mountSuspended, mockNuxtImport } from '@nuxt/test-utils/runtime'
import TimetablePage from '~/pages/timetable.vue'

vi.mock('~/data/timetable_data', () => ({
  default: {
    timetable: {
      daiksy: { title: 'dailsy タイトル', name: '粕谷 大輔 (だいくしー)' },
      tamacona: { title: 'tamacona タイトル', name: '河内 一弘（Kawachi Kazuhiro）' },
      lucas: { title: 'lucas タイトル', name: 'ゴールドナ ルーカス' },
      soudai: { title: 'soudai タイトル', name: '曽根 壮大(そね たけとも)' },
      miyake: { title: 'miyake タイトル', name: '三宅 大樹 (まょけ)' },
      umeta: { title: 'umeta タイトル', name: 'Yuuki Umeta' },
      sponsor1: { company: '調整中', title: null, name: null },
      sponsor2: { company: '調整中', title: null, name: null },
      sponsor3: { company: '調整中', title: null, name: null },
    },
  },
}))

const { navigateToMock } = vi.hoisted(() => ({
  navigateToMock: vi.fn(),
}))

mockNuxtImport('navigateTo', () => navigateToMock)

describe('pages/timetable.vue', () => {
  beforeEach(() => {
    navigateToMock.mockReset()
  })

  it('renders correctly', async () => {
    const wrapper = await mountSuspended(TimetablePage)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('daiksy セッションクリックで navigateTo が呼ばれる', async () => {
    const wrapper = await mountSuspended(TimetablePage)
    const cells = wrapper.findAll('td.siimple-table-cell.hover')
    await cells[4].trigger('click')
    expect(navigateToMock).toHaveBeenCalledWith('/detail/?speaker=daiksy')
  })

  it('tamacona セッションクリックで navigateTo が呼ばれる', async () => {
    const wrapper = await mountSuspended(TimetablePage)
    const cells = wrapper.findAll('td.siimple-table-cell.hover')
    await cells[2].trigger('click')
    expect(navigateToMock).toHaveBeenCalledWith('/detail/?speaker=tamacona')
  })

  it('lucas セッションクリックで navigateTo が呼ばれる', async () => {
    const wrapper = await mountSuspended(TimetablePage)
    const cells = wrapper.findAll('td.siimple-table-cell.hover')
    await cells[0].trigger('click')
    expect(navigateToMock).toHaveBeenCalledWith('/detail/?speaker=lucas')
  })

  it('soudai セッションクリックで navigateTo が呼ばれる', async () => {
    const wrapper = await mountSuspended(TimetablePage)
    const cells = wrapper.findAll('td.siimple-table-cell.hover')
    await cells[5].trigger('click')
    expect(navigateToMock).toHaveBeenCalledWith('/detail/?speaker=soudai')
  })

  it('miyake セッションクリックで navigateTo が呼ばれる', async () => {
    const wrapper = await mountSuspended(TimetablePage)
    const cells = wrapper.findAll('td.siimple-table-cell.hover')
    await cells[1].trigger('click')
    expect(navigateToMock).toHaveBeenCalledWith('/detail/?speaker=miyake')
  })

  it('umeta セッションクリックで navigateTo が呼ばれる', async () => {
    const wrapper = await mountSuspended(TimetablePage)
    const cells = wrapper.findAll('td.siimple-table-cell.hover')
    await cells[3].trigger('click')
    expect(navigateToMock).toHaveBeenCalledWith('/detail/?speaker=umeta')
  })
})
