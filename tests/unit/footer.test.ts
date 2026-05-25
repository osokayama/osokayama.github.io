import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Footer from '~/components/footer.vue'

describe('components/footer.vue', () => {
  it('renders correctly', async () => {
    const wrapper = await mountSuspended(Footer)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
