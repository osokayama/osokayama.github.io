import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import StaffPage from '~/pages/staff.vue'

describe('pages/staff.vue', () => {
  it('9名のスタッフが表示される', async () => {
    const wrapper = await mountSuspended(StaffPage)
    const staffBoxes = wrapper.findAll('.oso-staff-box')
    expect(staffBoxes).toHaveLength(9)
  })

  it('末田さんのGitHubリンクが存在する', async () => {
    const wrapper = await mountSuspended(StaffPage)
    const staffCols = wrapper.findAll('.siimple-grid-col.siimple-grid-col--2')
    const suedaCol = staffCols.find(col => col.text().includes('末田 卓巳'))
    expect(suedaCol).toBeDefined()
    const githubIcon = suedaCol!.find('.fa-github')
    expect(githubIcon.exists()).toBe(true)
  })

  it('末田さんのFacebookリンクが存在しない（データが空のためv-ifで制御）', async () => {
    const wrapper = await mountSuspended(StaffPage)
    const staffCols = wrapper.findAll('.siimple-grid-col.siimple-grid-col--2')
    const suedaCol = staffCols.find(col => col.text().includes('末田 卓巳'))
    expect(suedaCol).toBeDefined()
    const facebookIcon = suedaCol!.find('.fa-facebook-f')
    expect(facebookIcon.exists()).toBe(false)
  })

  it('角田さんのBlueskyリンクが存在する', async () => {
    const wrapper = await mountSuspended(StaffPage)
    const staffCols = wrapper.findAll('.siimple-grid-col.siimple-grid-col--2')
    const sumidaCol = staffCols.find(col => col.text().includes('角田 裕樹'))
    expect(sumidaCol).toBeDefined()
    const blueskyIcon = sumidaCol!.find('.fa-bluesky')
    expect(blueskyIcon.exists()).toBe(true)
  })

  it('角田さんはSNSアイコンが5つ全て表示される（twitter/facebook/github/bluesky/external）', async () => {
    const wrapper = await mountSuspended(StaffPage)
    const staffCols = wrapper.findAll('.siimple-grid-col.siimple-grid-col--2')
    const sumidaCol = staffCols.find(col => col.text().includes('角田 裕樹'))
    expect(sumidaCol).toBeDefined()
    const icons = sumidaCol!.findAll('.oso-staff-sns-icon')
    expect(icons).toHaveLength(5)
  })

  it('芝さんはSNSアイコンが2つ表示される（twitter/facebook）', async () => {
    const wrapper = await mountSuspended(StaffPage)
    const staffCols = wrapper.findAll('.siimple-grid-col.siimple-grid-col--2')
    const shibaCol = staffCols.find(col => col.text().includes('芝 世弐'))
    expect(shibaCol).toBeDefined()
    const icons = shibaCol!.findAll('.oso-staff-sns-icon')
    expect(icons).toHaveLength(2)
  })

  it('末田さんはSNSアイコンが3つ表示される（twitter/github/external）', async () => {
    const wrapper = await mountSuspended(StaffPage)
    const staffCols = wrapper.findAll('.siimple-grid-col.siimple-grid-col--2')
    const suedaCol = staffCols.find(col => col.text().includes('末田 卓巳'))
    expect(suedaCol).toBeDefined()
    const icons = suedaCol!.findAll('.oso-staff-sns-icon')
    expect(icons).toHaveLength(3)
  })

  it('各スタッフのプロフィール画像が存在する', async () => {
    const wrapper = await mountSuspended(StaffPage)
    const images = wrapper.findAll('.oso-staff-image img')
    expect(images).toHaveLength(9)
  })
})
