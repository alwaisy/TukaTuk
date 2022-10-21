<script setup lang="ts">
import type { SanityAssetDocument } from "@sanity/client";
import { useAuth } from "@vueuse/firebase/useAuth";
import { getAuth } from "firebase/auth";

const { isAuthenticated, user } = useAuth(getAuth(fireApp));

type TAsset = SanityAssetDocument | null;
type TError = Error | string | boolean;

const topicSelected = ref<string>("development");
const caption = ref<string>("");
const isLoading = ref<boolean>(false);
const isWrongFileType = ref<boolean>(false);
const videoAsset = ref<TAsset>(null);
const savingPost = ref<boolean>(false);
const error = ref<TError>(false);

const setVideoAsset = (val: TAsset) => {
  videoAsset.value = val;
};
const setError = (err: TError) => {
  error.value = err;
};
const setSavingPost = (val: boolean) => {
  savingPost.value = val;
};

const userProfile = reactive({
  _id: user.value?.uid,
  _type: "user",
  userName: user.value?.displayName,
  image: user.value?.photoURL,
});

const router = useRouter();

if (!isAuthenticated.value) {
  router.push("/");
}

const uploadVideo = async (e: any) => {
  const selectedFile = e.target.files[0];
  const fileTypes = ["video/mp4", "video/webm", "video/ogg"];

  console.log(e.target.files[0].type);

  // uploading asset to sanity
  if (fileTypes.includes(selectedFile.type)) {
    isWrongFileType.value = false;
    isLoading.value = true;

    client.assets
      .upload("file", selectedFile, {
        contentType: selectedFile.type,
        filename: selectedFile.name,
      })
      .then((data) => {
        setVideoAsset(data);
        isLoading.value = false;
      });
  } else {
    isWrongFileType.value = true;
    isLoading.value = true;
    console.log("error");
  }
};

const handlePost = async () => {
  if (videoAsset.value) {
    setError(false);
    setSavingPost(true);
    console.log("creating video");
  } else {
    setError(true);
    console.log("error");
    setSavingPost(false);
  }

  if (caption && videoAsset.value?._id && topicSelected.value) {
    setSavingPost(true);

    const doc = {
      _type: "post",
      caption: caption.value,
      video: {
        _type: "file",
        asset: {
          _type: "reference",
          _ref: videoAsset.value?._id,
        },
      },
      userId: userProfile?._id,
      postedBy: {
        _type: "postedBy",
        _ref: userProfile?._id,
      },
      topic: topicSelected.value,
    };

    client
      .create(doc)
      .then(() => {
        console.log("video created");
      })
      .catch((err: Error) => console.log(err, "something went wrong"));

    router.push("/");
  }
};

const handleDiscard = () => {
  setSavingPost(false);
  setVideoAsset(null);
  caption.value = "";
  topicSelected.value = "";
};

useHead({
  // Can be static or computed
  title: () => "Upload - Tiktok clone with Nuxt3",
});
</script>

<template>
  <div
    class="flex w-full h-full absolute left-0 top-[60px] lg:top-[70px] mb-10 pt-10 lg:pt-20 bg-[#F8F8F8] justify-center"
  >
    <div
      class="bg-white rounded-lg xl:h-[80vh] flex gap-6 flex-wrap justify-center items-center p-14 pt-6"
    >
      <div>
        <div>
          <p class="text-2xl font-bold">Upload Video</p>
          <p class="text-md text-gray-400 mt-1">Post a video to your account</p>
          <span
            class="text-red-400"
            v-if="
              (error && !videoAsset) ||
              (error && !caption) ||
              (error && !topicSelected)
            "
          >
            Error => fields can not be empty
          </span>
        </div>

        <div
          class="border-dashed rounded-xl border-4 border-gray-200 flex flex-col justify-center items-center outline-none mt-10 w-[260px] h-[458px] p-10 cursor-pointer hover:border-red-300 hover:bg-gray-100"
        >
          <p
            class="text-center text-3xl text-green-400 font-semibold"
            v-if="isLoading"
          >
            Uploading...
          </p>
          <div v-else-if="!videoAsset">
            <label class="cursor-pointer">
              <div class="flex flex-col items-center justify-center h-full">
                <div class="flex flex-col justify-center items-center">
                  <p class="font-bold text-xl">
                    <Icon
                      icon="fa-solid:cloud-upload-alt"
                      class="text-gray-300 text-6xl"
                    />
                  </p>
                  <p class="text-xl font-semibold">Select video to upload</p>
                </div>
                <p class="text-gray-400 text-center mt-10 text-sm leading-10">
                  MP4 or WebM or ogg <br />720x1280 resolution or higher
                  <br />Up to 10 minutes <br />Less than 2 GB
                </p>
                <p
                  class="bg-[#F51997] text-center mt-8 rounded text-white text-md font-medium p-2 w-52 outline-none"
                >
                  Select file
                </p>
              </div>
              <input
                type="file"
                name="upload-video"
                @change="uploadVideo($event)"
                class="w-0 h-0"
              />
            </label>
          </div>
          <div
            v-else
            class="rounded-3xl w-[300px] p-4 flex flex-col gap-6 justify-center items-center"
          >
            <video
              class="rounded-xl h-[462px] mt-16 bg-black"
              controls
              loop
              :src="videoAsset?.url"
            />
            <div class="flex justify-between gap-20">
              <p class="text-lg">{{ videoAsset.originalFilename }}</p>
              <button
                type="button"
                class="rounded-full bg-gray-200 text-red-400 p-2 text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out"
                @click="() => setVideoAsset(null)"
              >
                <Icon icon="mdi:delete" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-3 pb-10">
        <label class="text-md font-medium">Caption:{{ caption }}</label>
        <input
          type="text"
          class="rounded lg:after:w-650 outline-none text-md border-2 border-gray-200 p-2"
          v-model="caption"
          spellcheck="false"
          data-ms-editor="true"
        />
        <label class="text-md font-medium"
          >Choose a topic: {{ topicSelected }}</label
        >

        <select
          class="outline-none lg:w-650 border-2 border-gray-200 text-md capitalize lg:p-4 p-2 rounded cursor-pointer"
          v-model="topicSelected"
        >
          <option
            class="outline-none capitalize bg-white text-gray-700 text-md p-2 hover:bg-slate-300"
            v-for="topic in topics"
            :key="topic.id"
            :value="topic.name"
          >
            {{ topic.name }}
          </option>
        </select>
        <div class="flex gap-6 mt-10">
          <button
            @click="handleDiscard"
            type="button"
            class="border-gray-300 border-2 text-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
          >
            Discard
          </button>
          <button
            @click="handlePost()"
            :disabled="isLoading || savingPost ? true : false"
            type="button"
            class="bg-[#F51997] text-white text-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
          >
            {{ savingPost ? "Posting..." : "Post" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
