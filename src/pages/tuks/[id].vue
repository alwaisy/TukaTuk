<script setup lang="ts">
const route = useRoute();
const query = postDetailQuery(route.params.id);

interface ITuk {
  _id: string;
  caption: string;
  postedBy: {
    _id: string;
    image: string;
    userName: string;
  };
  video: {
    asset: {
      url: string;
    };
  };
}

type TTuk = ITuk[];
const data: TTuk = await client.fetch(query);
const tuk = data[0];
</script>

<template>
  <div
    class="flex w-full absolute left-0 top-0 bg-white flex-wrap lg:flex-nowrap"
  >
    <videoCard :tuk="tuk" />
    <div class="relative w-[1000px] md:w-[900px] lg:w-[700px]">
      <div class="lg:mt-20 mt-10">
        <AboutUploader :postedBy="tuk.postedBy" />
        <div class="px-10">
          <p class="text-md text-gray-600">{{ tuk.caption }}</p>
        </div>

        <div class="mt-10 px-10"></div>

        <VideoComments />
      </div>
    </div>
  </div>
</template>
