<script lang="ts">
  import "../../app.css";
  import { navigating } from "$app/stores";
  import { goto } from "$app/navigation";
  import Transition from "$lib/components/PageTransition.svelte";
  import type { PageData } from "./$types";
  import { parseCookie } from "$lib/utils";
  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";

  inject({ mode: dev ? "development" : "production" });

  $: if ($navigating) {
    if ($navigating.to?.route.id?.includes("dashboard")) {
      if (!document.cookie || !parseCookie(document.cookie).session) {
        goto("/signup");
      }
    }
    if ($navigating.from?.route.id === "/(home-page)") {
      if ($navigating.to?.route.id?.includes("signup")) {
        if (!document.cookie) {
          goto("/signup");
        } else if (!parseCookie(document.cookie).session) {
          goto("/dashboard");
        }
      }
    }
  }

  export let data: PageData;
</script>

<div class="content h-full bg-background">
  <Transition refresh={data.pathname}>
    <slot />
  </Transition>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");
</style>
