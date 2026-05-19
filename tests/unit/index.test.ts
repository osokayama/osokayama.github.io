import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import IndexPage from '~/pages/index.vue'

describe('pages/index.vue', () => {
  it('renders correctly', async () => {
    const wrapper = await mountSuspended(IndexPage)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
