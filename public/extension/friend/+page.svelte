<script lang="ts">
  // @ts-nocheck
  import type { Friend } from '$lib/config/friends'
  import { friends as allFriends } from '$lib/config/friends'
  import { title as storedTitle } from '$lib/stores/title'
  import Head from '$lib/components/head.svelte'
  import Masonry from 'svelte-bricks'
  import FriendComponent from '$lib/components/extra/friend.svelte'

  const rnd = Math.random()
  const fy = (a: Friend[], r = 0, c = a.length) => {
    while (c) (r = (rnd * c--) | 0), ([a[c], a[r]] = [a[r], a[c]])
    return a
  }
  let items: { id: string }[] = [...fy(allFriends as { id: string }[]), { id: 'footer' }]
  let width: number, height: number
  storedTitle.set('')
</script>

<Head page={{ title: 'Friends', path: '/friends' }} />

<Masonry
  {items}
  minColWidth={384}
  maxColWidth={384}
  gap={32}
  let:item
  class="mx-4 sm:mx-8 md:my-4 lg:mx-16 lg:my-8 xl:mx-32 xl:my-16"
  bind:width
  bind:height>
  <FriendComponent {item} />
</Masonry>