<template>
  <div class="loader">
    <div class="circle left-circle"></div>
    <div class="circle right-circle"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
:root {
  --aqua: #00f2ea;
  --pink: #ff0050;
  --black: white;
  --scale: 1.2;
  --x: 80px;
}
.loader {
  display: flex;
}
.circle {
  height: 5rem;
  width: 5rem;
  border-radius: 18rem;
  animation: c 3s infinite;
}
.left-circle {
  background: var(--pink);
  z-index: 1;
  animation: left-c 1s infinite;
  box-shadow: 0 0 12px 6px var(--pink);
}
.right-circle {
  z-index: 2;
  background: var(--aqua);
  box-shadow: 0 0 12px 6px var(--aqua);
  animation: right-c 1s infinite;
}
* {
  margin: 0;
  padding: 0;
}
body {
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  background: var(--black);
}
@keyframes left-c {
  0% {
    z-index: 1;
    transform: scale(1) translatex(0);
  }
  49% {
    z-index: 1;
    transform: scale(var(--scale)) translatex(var(--x));
  }
  51% {
    z-index: 3;
    transform: scale(var(--scale)) translatex(var(--x));
  }
  99% {
    z-index: 3;
    transform: scale(1) translatex(0);
  }
}
@keyframes right-c {
  0% {
    z-index: 2;
    transform: scale(var(--scale)) translatex(0);
  }
  49% {
    z-index: 2;
    transform: scale(1) translatex(-75px);
  }
  51% {
    z-index: 2;
    transform: scale(1) translatex(-75px);
  }
  99% {
    z-index: 2;
    transform: scale(var(--scale)) translatex(0);
  }
}
</style>
