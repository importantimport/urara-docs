<script lang="ts" context="module">
  export const prerender = true
</script>

<script lang="ts">
  import { site } from '$lib/config/site'
  export let avatar: string
  export let name: string
  export let subname: string
  export let bio: string
</script>

<div
  class="relative w-auto min-h-48 rounded-box overflow-hidden bg-gradient-to-b from-primary to-secondary text-primary-content transition-shadow duration-200 shadow-xl hover:shadow-2xl p-4 md:p-8 my-4">
  <div class="absolute -top-4 opacity-10 text-[12rem] text-neutral leading-tight rotate-[30deg]">
    {name ?? site.author.name}
  </div>
  <div class="avatar mb-4">
    <div class="rounded-full border-2 border-white shadow-xl w-16 h-16">
      <img
        class="hover:rotate-[360deg] transition-transform duration-1000 ease-in-out m-0"
        src={avatar ?? site.author.avatar}
        alt={name ?? site.author.name}
        loading="lazy"
        decoding="async" />
    </div>
  </div>
  {#if subname}
    <div class="opacity-50">{subname}</div>
  {/if}
  <div class="text-2xl mb-2">{name ?? site.author.name}</div>
  {#if bio || site.author.bio}
    <div>{@html bio ?? site.author.bio}</div>
  {/if}
  <slot />
</div>