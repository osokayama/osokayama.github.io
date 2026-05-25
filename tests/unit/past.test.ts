import { describe, it, expect, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import PastPage from '~/pages/past.vue'

vi.mock('~/data/past_data', () => ({
  default: {
    histories: [
      { year: 2024, theme: '【テーマA】', image: '../2024/images/top.png' },
      { year: 2020, theme: '【テーマB】', image: '../2020/images/top.jpg' },
      { year: 2010 },
    ]
  }
}))

describe('pages/past.vue', () => {
  it('renders correctly', async () => {
    const wrapper = await mountSuspended(PastPage)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
