<template>
  <div class="loader-container">
    <div class="loader">
      <div class="bar"></div>
      <div class="check-bar-container">
        <div></div>
        <div class="check">
          <svg
            stroke="white"
            stroke-width="2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m4.5 12.75 6 6 9-13.5"
              stroke-linejoin="round"
              stroke-linecap="round"
            ></path>
          </svg>
        </div>
        <div class="check">
          <svg
            stroke="white"
            stroke-width="2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m4.5 12.75 6 6 9-13.5"
              stroke-linejoin="round"
              stroke-linecap="round"
            ></path>
          </svg>
        </div>
        <div class="check">
          <svg
            stroke="white"
            stroke-width="2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m4.5 12.75 6 6 9-13.5"
              stroke-linejoin="round"
              stroke-linecap="round"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes loadingBar {
  0% {
    width: 0%;
    animation-timing-function: ease-out;
  }
  30% {
    width: 33%;
    animation-timing-function: ease-out;
  }
  60% {
    width: 66%;
    animation-timing-function: ease-out;
  }
  90% {
    width: 100%;
    animation-timing-function: ease-out;
  }
  100% {
    width: 100%;
    animation-timing-function: ease-out;
  }
}

@keyframes checkScale1 {
  0% {
    transform: scale(0.75);
    background-color: #535353;
  }
  28% {
    transform: scale(0.75);
    background-color: #535353;
  }
  29% {
    transform: scale(1);
    background-color: rgb(0, 205, 0);
  }
  100% {
    transform: scale(1);
    background-color: rgb(0, 205, 0);
  }
}

@keyframes checkScale2 {
  0% {
    transform: scale(0.75);
    background-color: #535353;
  }
  58% {
    transform: scale(0.75);
    background-color: #535353;
  }
  59% {
    transform: scale(1);
    background-color: rgb(0, 205, 0);
  }
  100% {
    transform: scale(1);
    background-color: rgb(0, 205, 0);
  }
}

@keyframes checkScale3 {
  0% {
    transform: scale(0.75);
    background-color: #535353;
  }
  88% {
    transform: scale(0.75);
    background-color: #535353;
  }
  89% {
    transform: scale(1);
    background-color: rgb(0, 205, 0);
  }
  100% {
    transform: scale(1);
    background-color: rgb(0, 205, 0);
  }
}

.loader {
  position: relative;
  background-color: #535353;
  border-radius: 1em;
  height: 1em;
  width: 330px;
}

.bar {
  position: relative;
  background-color: rgb(0, 205, 0);
  width: 40px;
  height: 100%;
  border-radius: 1em;
  animation: loadingBar 6s linear infinite;
}

.check-bar-container {
  position: absolute;
  left: 0px;
  top: -4px;
  z-index: 69;
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 0.5em;
}

.check {
  border-radius: 1em;
  height: 1.5em;
  width: 1.5em;
  padding: 3px;
  background-color: #535353;
  transform: scale(0.75);
}

.check-bar-container .check:nth-of-type(2) {
  animation: checkScale1 6s linear infinite;
}
.check-bar-container .check:nth-of-type(3) {
  animation: checkScale2 6s linear infinite;
}
.check-bar-container .check:nth-of-type(4) {
  animation: checkScale3 6s linear infinite;
  transform-origin: right;
}
</style>

<script>
export default {
  name: 'LoadingBar',
};
</script>