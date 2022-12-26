<script lang="ts">
  import { site } from '$lib/config/site'
  export let post: Urara.Post
</script>

<a
  href={`https://translate.google.com/translate?sl=auto&tl=${
    navigator.languages ? navigator.languages[0] : navigator.language
  }&u=${site.protocol + site.domain + post.path}`}
  class="btn btn-lg btn-circle btn-ghost bg-base-100 shadow-lg hover:shadow-xl">
  <span class="i-heroicons-outline-translate" />
</a>
