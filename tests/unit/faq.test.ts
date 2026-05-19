import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { injectHead } from '#imports'
import { defineComponent } from 'vue'
import FaqPage from '~/pages/faq.vue'

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

describe('pages/faq.vue', () => {
  it('ページタイトルが設定される', async () => {
    const title = await resolvePageTitle(FaqPage)
    expect(title).toContain('よくある質問')
  })

  it('「どのような開催形式になりますか？」の質問が存在する', async () => {
    const wrapper = await mountSuspended(FaqPage)
    const headings = wrapper.findAll('h2')
    expect(headings.some((h) => h.text().includes('どのような開催形式になりますか？'))).toBe(true)
  })

  it('「懇親会はありますか？」の質問が存在する', async () => {
    const wrapper = await mountSuspended(FaqPage)
    const headings = wrapper.findAll('h2')
    expect(headings.some((h) => h.text().includes('懇親会はありますか？'))).toBe(true)
  })

  it('「最寄り駅はどこですか？」の質問が存在する', async () => {
    const wrapper = await mountSuspended(FaqPage)
    const headings = wrapper.findAll('h2')
    expect(headings.some((h) => h.text().includes('最寄り駅はどこですか？'))).toBe(true)
  })

  it('「会場での飲食は可能ですか？」の質問が存在する', async () => {
    const wrapper = await mountSuspended(FaqPage)
    const headings = wrapper.findAll('h2')
    expect(headings.some((h) => h.text().includes('会場での飲食は可能ですか？'))).toBe(true)
  })

  it('「来年もやりますか？」の質問が存在する', async () => {
    const wrapper = await mountSuspended(FaqPage)
    const headings = wrapper.findAll('h2')
    expect(headings.some((h) => h.text().includes('来年もやりますか？'))).toBe(true)
  })

  it('「オフライン形式」の回答テキストが存在する', async () => {
    const wrapper = await mountSuspended(FaqPage)
    expect(wrapper.text()).toContain('オフライン形式')
  })

  it('「開催します」の回答テキストが存在する', async () => {
    const wrapper = await mountSuspended(FaqPage)
    expect(wrapper.text()).toContain('開催します')
  })

  it('「岡山駅」の回答テキストが存在する', async () => {
    const wrapper = await mountSuspended(FaqPage)
    expect(wrapper.text()).toContain('岡山駅')
  })

  it('「可能です」の回答テキストが存在する', async () => {
    const wrapper = await mountSuspended(FaqPage)
    expect(wrapper.text()).toContain('可能です')
  })

  it('「やります」の回答テキストが存在する', async () => {
    const wrapper = await mountSuspended(FaqPage)
    expect(wrapper.text()).toContain('やります')
  })
})
