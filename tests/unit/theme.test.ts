import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { injectHead } from '#imports'
import { defineComponent } from 'vue'
import ThemePage from '~/pages/theme.vue'

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

describe('pages/theme.vue', () => {
  it('ページタイトルが設定される', async () => {
    const title = await resolvePageTitle(ThemePage)
    expect(title).toContain('エンジニアリング x ○○')
  })

  it('テーマ「エンジニアリング x ○○」の見出しが存在する', async () => {
    const wrapper = await mountSuspended(ThemePage)
    const headings = wrapper.findAll('h2')
    expect(headings.some((h) => h.text().includes('エンジニアリング x ○○'))).toBe(true)
  })

  it('署名テキストが存在する', async () => {
    const wrapper = await mountSuspended(ThemePage)
    const signature = wrapper.find('.signature')
    expect(signature.exists()).toBe(true)
    expect(signature.text()).toContain('オープンセミナー2020@岡山 実行委員長 井上大輔(a-know)')
  })
})
