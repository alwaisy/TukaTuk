<template>
  <div class="xl:border-b-2 border-gray-200 pb-4">
    <p class="text-gray-500 font-semibold m-3 mt-4 hidden xl:block">
      Suggested accounts
    </p>
    <div>
      <div
        v-for="(acc, i) in 4"
        :key="i"
        class="flex gap-3 hover:bg-primary p-2 cursor-pointer font-semibold rounded"
      >
        <div class="w-8 h-8">
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
            ></span>
            <img
              alt="user-profile"
              src="https://i.ibb.co/Bn6qzTc/pexels-senuscape-1658967.jpg"
              decoding="async"
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
              sizes="100vw"
            />
          </span>
        </div>
        <div class="hidden xl:block">
          <p
            class="flex gap-1 items-center text-md font-bold text-primary lowercase"
          >
            aurearnaud
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              class="text-blue-400"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M15.67 7.066l-1.08-1.34a1.5 1.5 0 0 1-.309-.77l-.19-1.698a1.51 1.51 0 0 0-1.329-1.33l-1.699-.19c-.3-.03-.56-.159-.78-.329L8.945.33a1.504 1.504 0 0 0-1.878 0l-1.34 1.08a1.5 1.5 0 0 1-.77.31l-1.698.19c-.7.08-1.25.63-1.33 1.329l-.19 1.699c-.03.3-.159.56-.329.78L.33 7.055a1.504 1.504 0 0 0 0 1.878l1.08 1.34c.17.22.28.48.31.77l.19 1.698c.08.7.63 1.25 1.329 1.33l1.699.19c.3.03.56.159.78.329l1.339 1.08c.55.439 1.329.439 1.878 0l1.34-1.08c.22-.17.48-.28.77-.31l1.698-.19c.7-.08 1.25-.63 1.33-1.329l.19-1.699c.03-.3.159-.56.329-.78l1.08-1.339a1.504 1.504 0 0 0 0-1.878zM6.5 12.01L3 8.51l1.5-1.5 2 2 5-5L13 5.56l-6.5 6.45z"
              ></path>
            </svg>
          </p>
          <p class="capitalize text-gray-400 text-xs">aure arnaud</p>
        </div>
      </div>
    </div>
  </div>
</template>
