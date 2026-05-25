import { describe, it, expect, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import StaffPage from '~/pages/staff.vue'

vi.mock('~/data/staff_data', () => ({
  default: {
    staffs: [
      {
        name: 'スタッフA',
        roll: '実行委員長',
        image: 'a.jpg',
        twitter: 'https://x.com/staffa',
        facebook: '',
        github: 'https://github.com/staffa',
        bluesky: '',
        external: 'https://example-a.com/',
      },
      {
        name: 'スタッフB',
        roll: '事務局長',
        image: 'b.jpg',
        twitter: 'https://x.com/staffb',
        facebook: 'https://www.facebook.com/staffb',
        github: '',
        bluesky: '',
        external: '',
      },
      {
        name: 'スタッフC',
        roll: '',
        image: 'c.jpg',
        twitter: 'https://x.com/staffc',
        facebook: 'https://www.facebook.com/staffc',
        github: 'https://github.com/staffc',
        bluesky: 'https://bsky.app/profile/staffc.bsky.social',
        external: 'https://example-c.com/',
      },
    ]
  }
}))

describe('pages/staff.vue', () => {
  it('renders correctly', async () => {
    const wrapper = await mountSuspended(StaffPage)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
