<script>
  import { page } from "$app/stores";
  import "../../../app.css";
  import DashboardSideNavbar from "$lib/components/DashboardSideNavbar.svelte";
</script>

<div class="h-full">
  <div class="flex h-full">
    <DashboardSideNavbar />
    <div class="w-full ml-16 bg-blackBackground">
      <h1>An error occured!</h1>
      <h1>{$page.status}: {$page.error?.message}</h1>
    </div>
  </div>
</div>
