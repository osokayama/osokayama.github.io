import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mountSuspended, mockNuxtImport } from '@nuxt/test-utils/runtime'
import TimetablePage from '~/pages/timetable.vue'

vi.mock('~/data/timetable_data', () => ({
  default: {
    timetable: {
      aknow: { title: 'aknow タイトル', name: 'a-know' },
      hsjoihs: { title: 'hsjoihs タイトル', name: '佐藤 弘崇' },
      koba789: { title: 'koba789 タイトル', name: 'KOBA789' },
      majima: { title: 'majima タイトル', name: '間嶋 沙知' },
      kiryu: { title: 'kiryu タイトル', name: '桐生 あんず' },
      kyoro: { title: 'kyoro タイトル', name: 'きょろ' },
      serio: { company: 'セリオ株式会社', title: null, name: null },
      psc: { company: '株式会社PSC', title: 'psc タイトル', name: 'psc スピーカー' },
      subthread: { company: '株式会社サブスレッド', title: null, name: null },
      jobdraft: { company: '株式会社ジョブドラフト', title: null, name: null },
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

  it('aknow セッションクリックで navigateTo が呼ばれる', async () => {
    const wrapper = await mountSuspended(TimetablePage)
    const cells = wrapper.findAll('td.siimple-table-cell.hover')
    await cells[0].trigger('click')
    expect(navigateToMock).toHaveBeenCalledWith('/detail/?speaker=aknow')
  })

  it('hsjoihs セッションクリックで navigateTo が呼ばれる', async () => {
    const wrapper = await mountSuspended(TimetablePage)
    const cells = wrapper.findAll('td.siimple-table-cell.hover')
    await cells[1].trigger('click')
    expect(navigateToMock).toHaveBeenCalledWith('/detail/?speaker=hsjoihs')
  })

  it('koba789 セッションクリックで navigateTo が呼ばれる', async () => {
    const wrapper = await mountSuspended(TimetablePage)
    const cells = wrapper.findAll('td.siimple-table-cell.hover')
    await cells[2].trigger('click')
    expect(navigateToMock).toHaveBeenCalledWith('/detail/?speaker=koba789')
  })

  it('majima セッションクリックで navigateTo が呼ばれる', async () => {
    const wrapper = await mountSuspended(TimetablePage)
    const cells = wrapper.findAll('td.siimple-table-cell.hover')
    await cells[3].trigger('click')
    expect(navigateToMock).toHaveBeenCalledWith('/detail/?speaker=majima')
  })

  it('kiryu セッションクリックで navigateTo が呼ばれる', async () => {
    const wrapper = await mountSuspended(TimetablePage)
    const cells = wrapper.findAll('td.siimple-table-cell.hover')
    await cells[4].trigger('click')
    expect(navigateToMock).toHaveBeenCalledWith('/detail/?speaker=kiryu')
  })

  it('kyoro セッションクリックで navigateTo が呼ばれる', async () => {
    const wrapper = await mountSuspended(TimetablePage)
    const cells = wrapper.findAll('td.siimple-table-cell.hover')
    await cells[5].trigger('click')
    expect(navigateToMock).toHaveBeenCalledWith('/detail/?speaker=kyoro')
  })
})
