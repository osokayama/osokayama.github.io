import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { injectHead } from '#imports'
import { defineComponent } from 'vue'
import IndexPage from '~/pages/index.vue'

async function resolvePageTitle(Page: Parameters<typeof mountSuspended>[0]): Promise<string> {
  let headInstance: ReturnType<typeof injectHead> | null = null
  const Wrapper = defineComponent({
    setup() {
      headInstance = injectHead()
      return {}
    },
    components: { Page: Page as any },
    template: '<Page />',
  })
  await mountSuspended(Wrapper)
  if (!headInstance) return ''
  const tags = await (headInstance as ReturnType<typeof injectHead>).resolveTags()
  return tags.find((t) => t.tag === 'title')?.textContent ?? ''
}

describe('pages/index.vue', () => {
  it('ページタイトルが設定される', async () => {
    const title = await resolvePageTitle(IndexPage)
    expect(title).toContain('オープンセミナー2025@岡山')
  })

  it('「テーマ」セクション見出しが存在する', async () => {
    const wrapper = await mountSuspended(IndexPage)
    const headings = wrapper.findAll('h2')
    expect(headings.some((h) => h.text().includes('テーマ'))).toBe(true)
  })

  it('「オープンセミナーとは」セクション見出しが存在する', async () => {
    const wrapper = await mountSuspended(IndexPage)
    const headings = wrapper.findAll('h2')
    expect(headings.some((h) => h.text().includes('オープンセミナーとは'))).toBe(true)
  })

  it('「参加費」セクション見出しが存在する', async () => {
    const wrapper = await mountSuspended(IndexPage)
    const headings = wrapper.findAll('h2')
    expect(headings.some((h) => h.text().includes('参加費'))).toBe(true)
  })

  it('「注意事項」セクション見出しが存在する', async () => {
    const wrapper = await mountSuspended(IndexPage)
    const headings = wrapper.findAll('h2')
    expect(headings.some((h) => h.text().includes('注意事項'))).toBe(true)
  })

  it('「懇親会」セクション見出しが存在する', async () => {
    const wrapper = await mountSuspended(IndexPage)
    const headings = wrapper.findAll('h2')
    expect(headings.some((h) => h.text().includes('懇親会'))).toBe(true)
  })

  it('「日時・場所」セクション見出しが存在する', async () => {
    const wrapper = await mountSuspended(IndexPage)
    const headings = wrapper.findAll('h2')
    expect(headings.some((h) => h.text().includes('日時・場所'))).toBe(true)
  })

  it('「アンチハラスメントポリシー」セクション見出しが存在する', async () => {
    const wrapper = await mountSuspended(IndexPage)
    const headings = wrapper.findAll('h2')
    expect(headings.some((h) => h.text().includes('アンチハラスメントポリシー'))).toBe(true)
  })

  it('X（Twitter）シェアリンクが存在する', async () => {
    const wrapper = await mountSuspended(IndexPage)
    const links = wrapper.findAll('a')
    expect(links.some((a) => a.attributes('href')?.includes('twitter.com/intent/tweet'))).toBe(true)
  })

  it('Facebookシェアリンクが存在する', async () => {
    const wrapper = await mountSuspended(IndexPage)
    const links = wrapper.findAll('a')
    expect(links.some((a) => a.attributes('href')?.includes('facebook.com/sharer.php'))).toBe(true)
  })

  it('申し込みボタンが存在する', async () => {
    const wrapper = await mountSuspended(IndexPage)
    expect(wrapper.text()).toContain('お申し込みはこちらから')
  })
})
