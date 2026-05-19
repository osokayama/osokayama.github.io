import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mountSuspended, mockNuxtImport } from '@nuxt/test-utils/runtime'
import SpeakersPage from '~/pages/speakers.vue'

const { navigateToMock } = vi.hoisted(() => ({
  navigateToMock: vi.fn(),
}))

mockNuxtImport('navigateTo', () => navigateToMock)

describe('pages/speakers.vue', () => {
  beforeEach(() => {
    navigateToMock.mockReset()
  })

  it('テーブル行（.session）が6件存在する', async () => {
    const wrapper = await mountSuspended(SpeakersPage)
    const rows = wrapper.findAll('tr.session')
    expect(rows).toHaveLength(6)
  })

  it('aknow 行クリックで navigateTo が呼ばれる', async () => {
    const wrapper = await mountSuspended(SpeakersPage)
    const cell = wrapper.find('td[class*="hover"]')
    await cell.trigger('click')
    expect(navigateToMock).toHaveBeenCalledWith('detail/?speaker=aknow')
  })

  it('kyoro 行クリックで navigateTo が呼ばれる', async () => {
    const wrapper = await mountSuspended(SpeakersPage)
    const cells = wrapper.findAll('td.siimple-table-cell.hover')
    const kyoroCell = cells[1]
    await kyoroCell.trigger('click')
    expect(navigateToMock).toHaveBeenCalledWith('detail/?speaker=kyoro')
  })

  it('kiryu 行クリックで navigateTo が呼ばれる', async () => {
    const wrapper = await mountSuspended(SpeakersPage)
    const cells = wrapper.findAll('td.siimple-table-cell.hover')
    await cells[2].trigger('click')
    expect(navigateToMock).toHaveBeenCalledWith('detail/?speaker=kiryu')
  })

  it('koba789 行クリックで navigateTo が呼ばれる', async () => {
    const wrapper = await mountSuspended(SpeakersPage)
    const cells = wrapper.findAll('td.siimple-table-cell.hover')
    await cells[3].trigger('click')
    expect(navigateToMock).toHaveBeenCalledWith('detail/?speaker=koba789')
  })

  it('hsjoihs 行クリックで navigateTo が呼ばれる', async () => {
    const wrapper = await mountSuspended(SpeakersPage)
    const cells = wrapper.findAll('td.siimple-table-cell.hover')
    await cells[4].trigger('click')
    expect(navigateToMock).toHaveBeenCalledWith('detail/?speaker=hsjoihs')
  })

  it('majima 行クリックで navigateTo が呼ばれる', async () => {
    const wrapper = await mountSuspended(SpeakersPage)
    const cells = wrapper.findAll('td.siimple-table-cell.hover')
    await cells[5].trigger('click')
    expect(navigateToMock).toHaveBeenCalledWith('detail/?speaker=majima')
  })
})
