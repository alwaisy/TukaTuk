<script setup lang="ts">
interface IProps {
  postedBy: {
    _id: string;
    image: string;
    userName: string;
  };
  _id: string;
  caption: string;
  video: {
    asset: {
      url: string;
    };
  };
}

const props = defineProps<{ tuk: IProps }>();

const [isPlaying, setIsPlaying] = useState(false);
const [isVideoMuted, setIsVideoMuted] = useState(false);
const [isHover, setIsHover] = useState(false);

const videoRef = ref();

const onVideoPress = () => {
  if (isPlaying.value) {
    videoRef.value.pause();
    setIsPlaying(false);
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
</script>

<template>
  <div class="flex flex-col border-b-2 border-gray-200 pb-6">
    <div class="flex gap-3 p-2 cursor-pointer font-semibold rounded">
      <RouterLink
        :to="{ name: 'profile-id', params: { id: props.tuk.postedBy._id } }"
      >
        <div class="md:w-16 md:h-16 w-10 h-10">
          <span
            style="
              box-sizing: border-box;
              display: block;
              overflow: hidden;
              width: initial;
              height: initial;
              background: none;
              opacity: 1;
              border: 0px;
              margin: 0px;
              padding: 0px;
              position: relative;
            "
            ><span
              style="
                box-sizing: border-box;
                display: block;
                width: initial;
                height: initial;
                background: none;
                opacity: 1;
                border: 0px;
                margin: 0px;
                padding: 100% 0px 0px;
              "
            >
            </span>
            <img
              alt="user-profile"
              sizes="100vw"
              :src="props.tuk.postedBy.image"
              data-nimg="responsive"
              class="rounded-full"
              style="
                position: absolute;
                inset: 0px;
                box-sizing: border-box;
                padding: 0px;
                border: none;
                margin: auto;
                display: block;
                width: 0px;
                height: 0px;
                min-width: 100%;
                max-width: 100%;
                min-height: 100%;
                max-height: 100%;
              "
            />
          </span>
        </div>
      </RouterLink>
      <div>
        <RouterLink
          :to="{ name: 'profile-id', params: { id: props.tuk.postedBy._id } }"
        >
          <div class="flex items-center gap-2">
            <p
              class="flex gap-2 items-center md:text-md font-bold text-primary"
            >
              {{ props.tuk.postedBy.userName }}
              <Icon icon="octicon:verified" class="text-blue-400 text-xl" />
            </p>
            <p
              class="capitalize font-medium text-xs text-gray-500 hidden md:block"
            >
              {{ props.tuk.postedBy.userName }}
            </p>
          </div>
        </RouterLink>
        <p class="mt-2 font-normal">{{ props.tuk.caption }}</p>
      </div>
    </div>

    <div class="lg:ml-20 flex gap-4 relative">
      <div
        class="rounded-3xl"
        @mouseenter="() => setIsHover(true)"
        @mouseleave="() => setIsHover(false)"
      >
        <RouterLink :to="{ name: 'tuks-id', params: { id: props.tuk._id } }">
          <video
            ref="videoRef"
            loop="true"
            :src="props.tuk?.video?.asset?.url"
            class="lg:w-[600px] h-[300px] md:h-[400px] lg:h-[528px] w-[200px] rounded-2xl cursor-pointer bg-gray-100"
            __idm_id__="319593"
          ></video>
        </RouterLink>
        <div
          v-if="isHover"
          class="absolute bottom-6 cursor-pointer left-8 md:left-14 lg:left-0 flex gap-10 lg:justify-between w-[100px] md:w-[50px] lg:w-[600px] p-3"
        >
          <button v-if="isPlaying" @click="onVideoPress">
            <Icon
              icon="bi:pause-fill"
              class="text-black text-2xl lg:text-4xl"
            />
          </button>
          <button @click="onVideoPress" v-else>
            <Icon icon="bi:play-fill" class="text-black text-2xl lg:text-4xl" />
          </button>

          <button v-if="isVideoMuted" @click="() => setIsVideoMuted(false)">
            <Icon
              icon="heroicons-outline:volume-off"
              class="text-black text-2xl lg:text-4xl"
            />
          </button>

          <button v-else @click="() => setIsVideoMuted(true)">
            <Icon
              icon="heroicons-outline:volume-up"
              class="text-black text-2xl lg:text-4xl"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- <RouterLink to="/tuks/tukID3024023">
    <div class="flex flex-col gap-10 videos h-full">
    </div>
  </RouterLink> -->
</template>
