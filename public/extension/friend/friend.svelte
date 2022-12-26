<script lang="ts">
  import type { Friend } from '$lib/config/friends'
  import Footer from '$lib/components/footer.svelte'
  export let item: unknown
  let friend = item as unknown as Friend
</script>

{#if friend.id === 'footer'}
  <Footer rounded={true} class="p-4 md:p-8" />
{:else if friend.html}
  <a id={friend.id} rel={friend.rel} href={friend.link} class="h-card u-url">
    {@html friend.html}
  </a>
{:else}
  <a
    id={friend.id}
    rel={friend.rel}
    href={friend.link}
    class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow h-card u-url">
    <div class="absolute text-4xl font-bold opacity-5 rotate-6 leading-tight top-4">
      {friend.name ?? ''}<br>{friend.title ?? ''}
    </div>
    <div class="card-body p-4">
      <div class="flex items-center gap-4">
        {#if friend.avatar}
          <div class="avatar {friend.class?.avatar} shrink-0 w-16 mb-auto">
            <img class="{friend.class?.img ?? 'rounded-xl'} u-photo" src={friend.avatar} alt={friend.title} />
          </div>
        {:else}
          <div class="avatar {friend.class?.avatar} placeholder mb-auto">
            <div class="{friend.class?.img ?? 'bg-neutral-focus text-neutral-content shadow-inner rounded-xl'} w-16">
              <span class="text-3xl">{(friend.name ?? friend.title).charAt(0)}</span>
            </div>
          </div>
        {/if}
        <div class="card-title flex-col gap-0 flex-1 items-end">
          <span class="text-right p-name">{friend.name ?? ''}</span>
          <span class="opacity-50 text-right">{friend.title}</span>
        </div>
      </div>
      {#if friend.descr}
        <div class="prose opacity-70 p-note">
          {friend.descr}
        </div>
      {/if}
    </div>
  </a>
{/if}