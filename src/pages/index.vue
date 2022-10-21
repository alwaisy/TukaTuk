<script setup lang="ts">
const route = useRoute();

const query = ref(
  route.query.topic
    ? topicPostsQuery(route.query.topic.toString())
    : allPostsQuery()
);

const tuktuks = ref();

tuktuks.value = await client.fetch(query.value);
useHead({
  // Can be static or computed
  title: () => "Tiktok clone with Nuxt3",
});

console.log(tuktuks.value);

/*

const query = `*[_type == "post"]`;
const data = await client.fetch(query); */
const auth = useAuthStore();
await auth.getAuthState();
</script>

<template>
  <!-- {{ data }} -->
  <div class="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">
    {{ $route.query.topic?.toString() }}
    <PostCard v-for="tuk in tuktuks" :key="tuk.uid" :tuk="tuk" />
    <template v-if="route.query.topic?.toString()">
      <div>Nothing there</div>
    </template>
  </div>
</template>
