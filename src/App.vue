<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div class="xl:w-[1200px] m-auto overflow-hidden h-[100vh]">
    <Navbar />
    <div class="flex gap-6 md:gap-20">
      <div class="h-[92vh] overflow-hidden xl:hover:overflow-auto">
        <Sidebar />
      </div>
      <div
        class="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1"
      >
        <RouterView v-slot="{ Component }">
          <template v-if="Component">
            <Suspense>
              <!-- main content -->
              <component :is="Component" :key="route.fullPath"></component>

              <!-- loading state -->
              <template #fallback>
                <TailwindLoader />
              </template>
            </Suspense>
          </template>
        </RouterView>
      </div>
    </div>
  </div>
</template>
