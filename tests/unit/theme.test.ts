import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ThemePage from '~/pages/theme.vue'

describe('pages/theme.vue', () => {
  it('renders correctly', async () => {
    const wrapper = await mountSuspended(ThemePage)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
