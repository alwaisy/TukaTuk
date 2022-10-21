<script setup lang="ts">
const activeTopicStyle =
  "xl:border-2 hover:bg-primary xl:border-[#F51997] px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-[#F51997]";
const topicStyle =
  "xl:border-2 hover:bg-primary xl:border-gray-300 px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-black";

// const setStyle
</script>

<template>
  <div class="flex gap-3 flex-wrap">
    <template v-for="topic in topics" :key="topic.id">
      <RouterLink :to="`/?topic=${topic.name}`">
        <div
          :class="
            $route.query.topic === topic.name ? activeTopicStyle : topicStyle
          "
        >
          <span class="font-bold text-2xl xl:text-md">
            <Icon :icon="topic?.icon" />
          </span>
          <span class="font-medium text-md hidden xl:block capitalize">
            {{ topic?.name }}
          </span>
        </div>
      </RouterLink>
    </template>
  </div>
</template>
