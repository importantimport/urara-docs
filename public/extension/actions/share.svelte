<script lang="ts">
  import { site } from '$lib/config/site'
  export let post: Urara.Post
</script>

<a
  href={`https://www.addtoany.com/share#url=${site.protocol + site.domain + post.path}&title=${encodeURI(
    post.title ?? post.path.slice(1)
  )}`}
  class="btn btn-lg btn-circle btn-ghost bg-base-100 shadow-lg hover:shadow-xl">
  <span class="i-heroicons-outline-share" />
</a>
