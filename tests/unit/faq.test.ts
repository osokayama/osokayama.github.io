import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import FaqPage from '~/pages/faq.vue'

describe('pages/faq.vue', () => {
  it('renders correctly', async () => {
    const wrapper = await mountSuspended(FaqPage)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
