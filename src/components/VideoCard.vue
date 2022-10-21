<script setup lang="ts">
const videoRef = ref();

const [isPlaying, setIsPlaying] = useState(false);
const [isVideoMuted, setIsVideoMuted] = useState(false);

const onVideoClick = () => {
  if (isPlaying.value) {
    videoRef.value.pause();
    setIsPlaying(false);
    console.log("playing -- paused");
  } else {
    videoRef.value.play();
    setIsPlaying(true);
    console.log("paused . playing");
  }
};

watch(isVideoMuted, () => {
  if (videoRef.value) {
    videoRef.value.muted = isVideoMuted.value;
  }
});

const props = defineProps<{ tuk: { video: { asset: { url: string } } } }>();
</script>

<template>
  <div
    class="relative flex-2 w-[1000px] lg:w-9/12 flex justify-center items-center bg-blurred-img bg-no-repeat bg-cover bg-center"
  >
    <div class="opacity-90 absolute top-6 left-2 lg:left-6 flex gap-6 z-50">
      <p class="cursor-pointer">
        <RouterLink to="/">
          <Icon
            icon="material-symbols:cancel-outline"
            color="white"
            style="font-size: 35px"
          />
        </RouterLink>
      </p>
    </div>
    <div class="relative">
      <div class="lg:h-[100vh] h-[60vh]">
        <video
          ref="videoRef"
          @click="onVideoClick"
          loop="false"
          :src="props.tuk.video.asset.url"
          class="h-full cursor-pointer"
          __idm_id__="2293812"
        />
      </div>
      <div class="absolute top-[45%] left-[40%] cursor-pointer">
        <button @click="onVideoClick" v-if="!isPlaying">
          <Icon icon="bi:play-fill" class="text-white text-6xl lg:text-8xl" />
        </button>
      </div>
    </div>
    <div
      class="absolute bottom-5 lg:bottom-10 right-5 lg:right-10 cursor-pointer"
    >
      <button v-if="isVideoMuted" @click="setIsVideoMuted(false)">
        <Icon
          icon="heroicons-outline:volume-off"
          class="text-white text-3xl lg:text-4xl"
        />
      </button>
      <button v-else @click="setIsVideoMuted(true)">
        <Icon
          icon="heroicons-outline:volume-up"
          class="text-white text-3xl lg:text-4xl"
        />
      </button>
    </div>
  </div>
</template>
