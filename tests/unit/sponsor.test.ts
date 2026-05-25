import { describe, it, expect, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import SponsorPage from '~/pages/sponsor.vue'

vi.mock('~/data/sponsor_data', () => ({
  default: {
    sponsor: {
      platina: [
        { name: 'プラチナ企業A', url: 'https://example-a.com/', image: 'sponsor/a.png' },
        { name: 'プラチナ企業B', url: 'https://example-b.com/', image: 'sponsor/b.png' },
      ],
      gold: [
        { name: 'ゴールド企業A', url: 'https://example-ga.com/', image: 'sponsor/ga.png' },
      ],
      silver: [],
      bronze: [],
    },
    tool: [
      { name: 'ツール支援A', url: 'https://example-tool.com/', image: 'sponsor/tool.png' },
    ],
    audio: [],
    moderator: [],
    support: [],
  }
}))

describe('pages/sponsor.vue', () => {
  it('renders correctly', async () => {
    const wrapper = await mountSuspended(SponsorPage)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
