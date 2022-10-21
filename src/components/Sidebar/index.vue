<template>
  <div class="h-[92vh] overflow-hidden xl:hover:overflow-auto">
    <div>
      <!-- <div class="block xl:hidden m-2 ml-4 mt-3 text-xl">
        <Icon icon="material-symbols:cancel-outline" size="25" />
      </div> -->

      <div
        class="xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3"
      >
        <RouterLink to="/?topic=development">
          <div class="xl:border-b-2 border-gray-200 xl:pb-4">
            <div
              class="flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded"
            >
              <p class="text-2xl">
                <Icon icon="ant-design:home-filled" style="display: block" />
              </p>
              <span class="capitalize text-xl hidden xl:block">For You</span>
            </div>
          </div>
        </RouterLink>
        <div class="xl:border-b-2 xl:border-gray-200 pb-6">
          <p class="text-gray-500 font-semibold m-3 mt-4 hidden xl:block">
            Popular Topics
          </p>
          <SidebarDiscover />
        </div>
        <SidebarSuggestedAcc />
        <SidebarFooter />
      </div>
    </div>
  </div>
</template>
