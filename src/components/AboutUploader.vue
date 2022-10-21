<script setup lang="ts">
const props = defineProps<{
  postedBy: {
    _id: string;
    image: string;
    userName: string;
  };
}>();
</script>

<template>
  <div class="flex gap-4 mb-4 bg-white w-full pl-10 cursor-pointer">
    <span
      style="
        box-sizing: border-box;
        display: inline-block;
        overflow: hidden;
        width: initial;
        height: initial;
        background: none;
        opacity: 1;
        border: 0px;
        margin: 0px;
        padding: 0px;
        position: relative;
        max-width: 100%;
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
          padding: 0px;
          max-width: 100%;
        "
        ><img
          alt=""
          aria-hidden="true"
          :src="props.postedBy.image"
          style="
            display: block;
            max-width: 100%;
            width: initial;
            height: initial;
            background: none;
            opacity: 1;
            border: 0px;
            margin: 0px;
            padding: 0px;
          "
        />
      </span>
    </span>
    <div>
      <div
        class="text-xl font-bold lowercase tracking-wider flex gap-2 items-center justify-center"
      >
        {{ props.postedBy.userName }}
        <!-- <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 16 16"
          class="text-blue-400 text-xl"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M15.67 7.066l-1.08-1.34a1.5 1.5 0 0 1-.309-.77l-.19-1.698a1.51 1.51 0 0 0-1.329-1.33l-1.699-.19c-.3-.03-.56-.159-.78-.329L8.945.33a1.504 1.504 0 0 0-1.878 0l-1.34 1.08a1.5 1.5 0 0 1-.77.31l-1.698.19c-.7.08-1.25.63-1.33 1.329l-.19 1.699c-.03.3-.159.56-.329.78L.33 7.055a1.504 1.504 0 0 0 0 1.878l1.08 1.34c.17.22.28.48.31.77l.19 1.698c.08.7.63 1.25 1.329 1.33l1.699.19c.3.03.56.159.78.329l1.339 1.08c.55.439 1.329.439 1.878 0l1.34-1.08c.22-.17.48-.28.77-.31l1.698-.19c.7-.08 1.25-.63 1.33-1.329l.19-1.699c.03-.3.159-.56.329-.78l1.08-1.339a1.504 1.504 0 0 0 0-1.878zM6.5 12.01L3 8.51l1.5-1.5 2 2 5-5L13 5.56l-6.5 6.45z"
          ></path>
        </svg> -->
        <Icon icon="octicon:verified" class="text-blue-400 text-xl" />
      </div>
      <p class="text-md">{{ props.postedBy.userName }}</p>
    </div>
  </div>
</template>
