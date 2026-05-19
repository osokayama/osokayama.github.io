import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mountSuspended, mockNuxtImport } from '@nuxt/test-utils/runtime'
import TimetablePage from '~/pages/timetable.vue'

const { navigateToMock } = vi.hoisted(() => ({
  navigateToMock: vi.fn(),
}))

mockNuxtImport('navigateTo', () => navigateToMock)

describe('pages/timetable.vue', () => {
  beforeEach(() => {
    navigateToMock.mockReset()
  })

  it('セッション行（.session クラス）が6件存在する', async () => {
    const wrapper = await mountSuspended(TimetablePage)
    const rows = wrapper.findAll('tr.session')
    expect(rows).toHaveLength(6)
  })

  it('「オープニング」テキストが存在する', async () => {
    const wrapper = await mountSuspended(TimetablePage)
    expect(wrapper.text()).toContain('オープニング')
  })

  it('「クロージング」テキストが存在する', async () => {
    const wrapper = await mountSuspended(TimetablePage)
    expect(wrapper.text()).toContain('クロージング')
  })

  it('aknow セッションクリックで navigateTo が呼ばれる', async () => {
    const wrapper = await mountSuspended(TimetablePage)
    const cells = wrapper.findAll('td.siimple-table-cell.hover')
    await cells[0].trigger('click')
    expect(navigateToMock).toHaveBeenCalledWith('detail/?speaker=aknow')
  })

  it('hsjoihs セッションクリックで navigateTo が呼ばれる', async () => {
    const wrapper = await mountSuspended(TimetablePage)
    const cells = wrapper.findAll('td.siimple-table-cell.hover')
    await cells[1].trigger('click')
    expect(navigateToMock).toHaveBeenCalledWith('detail/?speaker=hsjoihs')
  })

  it('koba789 セッションクリックで navigateTo が呼ばれる', async () => {
    const wrapper = await mountSuspended(TimetablePage)
    const cells = wrapper.findAll('td.siimple-table-cell.hover')
    await cells[2].trigger('click')
    expect(navigateToMock).toHaveBeenCalledWith('detail/?speaker=koba789')
  })

  it('majima セッションクリックで navigateTo が呼ばれる', async () => {
    const wrapper = await mountSuspended(TimetablePage)
    const cells = wrapper.findAll('td.siimple-table-cell.hover')
    await cells[3].trigger('click')
    expect(navigateToMock).toHaveBeenCalledWith('detail/?speaker=majima')
  })

  it('kiryu セッションクリックで navigateTo が呼ばれる', async () => {
    const wrapper = await mountSuspended(TimetablePage)
    const cells = wrapper.findAll('td.siimple-table-cell.hover')
    await cells[4].trigger('click')
    expect(navigateToMock).toHaveBeenCalledWith('detail/?speaker=kiryu')
  })

  it('kyoro セッションクリックで navigateTo が呼ばれる', async () => {
    const wrapper = await mountSuspended(TimetablePage)
    const cells = wrapper.findAll('td.siimple-table-cell.hover')
    await cells[5].trigger('click')
    expect(navigateToMock).toHaveBeenCalledWith('detail/?speaker=kyoro')
  })
})
