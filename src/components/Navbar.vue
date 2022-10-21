<script setup lang="ts">
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useAuth } from "@vueuse/firebase/useAuth";
import type { IdentifiedSanityDocumentStub } from "@sanity/client";

const auth = getAuth();
const { isAuthenticated, user } = useAuth(getAuth(fireApp));

interface IDoc {
  _id: number | undefined;
  _type: string;
  userName: string | null | undefined;
  image: string | null | undefined;
}

// type TDoc = IdentifiedSanityDocumentStub<IDoc>;

// IdentifiedSanityDocumentStub<IDoc>

const signIn = async () => {
  signInWithPopup(auth, new GoogleAuthProvider()).then(() => {
    const doc: any = reactive({
      _id: user.value?.uid,
      _type: "user",
      userName: user.value?.displayName,
      image: user.value?.photoURL,
    });
    client
      .createIfNotExists(doc)
      .then((res) => {
        console.log("user created successfully", res);
      })
      .catch((err: Error) => {
        console.log(err, "something went wrong");
      });
    console.log("login successfully");
    console.log(user.value?.uid);
  });
};
console.log(user.value?.uid, typeof user.value?.uid);

const logout = () => signOut(auth);
</script>

<template>
  <div
    class="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4"
  >
    <RouterLink to="/">
      <div class="w-[100px] md:w-[129px] md:h-[30px] h-[38px]">
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
              padding: 28.3029% 0px 0px;
            "
          ></span
          ><img
            alt="logo"
            src="https://i.ibb.co/z2qrkYm/tiktik-logo.png"
            decoding="async"
            data-nimg="responsive"
            class="cursor-pointer"
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
        /></span>
      </div>
    </RouterLink>
    <div class="relative hidden md:block">
      <form class="absolute md:static top-10 -left-20 bg-white">
        <input
          class="bg-primary p-3 md:text-md font-medium border-2 border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 w-[300px] md:w-[350px] rounded-full md:top-0"
          placeholder="Search accounts and videos"
          value=""
          spellcheck="false"
          data-ms-editor="true"
        /><button
          class="absolute md:right-5 right-6 top-4 border-l-2 border-gray-300 pl-4 text-2xl text-gray-400"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
            ></path>
          </svg>
        </button>
      </form>
    </div>
    <!-- <div>
      <div style="height: 40px">
        <div class="S9gUrf-YoZ4jf" style="position: relative">
          <div></div>
          <iframe
            src="https://accounts.google.com/gsi/button?type=standard&amp;theme=outline&amp;size=large&amp;text=undefined&amp;shape=undefined&amp;logo_alignment=undefined&amp;width=undefined&amp;locale=undefined&amp;client_id=152285551512-4motag0rr9kd2ite4saef6r07go5e50c.apps.googleusercontent.com&amp;iframe_id=gsi_400147_741242&amp;as=PCqhh%2BxZZNB9eYkZE5Fxjg"
            id="gsi_400147_741242"
            title="Sign in with Google Button"
            style="
              display: block;
              position: relative;
              top: 0px;
              left: 0px;
              height: 44px;
              width: 203px;
              border: 0px;
              margin: -2px -10px;
            "
          ></iframe>
        </div>
      </div>
    </div> -->
    <button
      v-if="!isAuthenticated"
      @click="signIn"
      class="border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 512 512"
        class="text-xl"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M416 277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416v42.666z"
        ></path>
      </svg>
      <span class="hidden md:block">login with google </span>
    </button>

    <template v-else>
      <RouterLink to="/upload">
        <button
          class="border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            class="text-xl"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M416 277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416v42.666z"
            ></path>
          </svg>
          <span class="hidden md:block">Upload </span>
        </button>
      </RouterLink>
      <button
        class="border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2"
        @click="logout"
      >
        Logout
      </button>
    </template>
  </div>
</template>
