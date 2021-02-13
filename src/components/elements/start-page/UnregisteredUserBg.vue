<template>
  <h4>{{ question }}</h4>

  <div class="wrapper">
    <div class="start-bg">
      <div class="features">
        <div class="feature-red">{{ featureA }}</div>
        <img v-bind:src="circleUrl" />
        <div class="feature">{{ featureB }}</div>
        <img v-bind:src="circleUrl" />
        <div class="feature">{{ featureC }}</div>
        <img v-bind:src="circleUrl" />
        <div class="feature">{{ featureD }}</div>
      </div>
    </div>
    <div class="sign-foo">
      <div class="install-padding">
        <div class="feature">{{ installto }}</div>
      </div>
      <a href="#" class="os-icon">
        <icon name="logo-apple"></icon>
      </a>
      <a href="#" class="os-icon">
        <icon name="logo-android"></icon>
      </a>
    </div>
  </div>
  <div class="left-block">
    Личный кабинет создан по&nbsp;технологии <nobr>PWA-приложения:</nobr>
  </div>
  <PwaList />
</template>

// TODO: добавить ссылки -- лучше всплывашки подсказки
<script>
import Icon from "@/components/elements/Icon.vue";
import PwaList from "@/components/elements/start-page/PwaList.vue";

export default {
  data() {
    return {
      question: "ЧТО ДАЕТ ЛИЧНЫЙ КАБИНЕТ?",
      featureA: "ДОСТУП К СПЕЦПРЕДЛОЖЕНИЯМ",
      featureB: "УДОБНАЯ ОПЛАТА",
      featureC: "ДОКУМЕНТЫ",
      featureD: "СИГНАЛИЗАЦИЯ",
      installto: "УСТАНОВИТЬ НА",
      circleUrl:
        "https://static.tildacdn.com/tild3562-6363-4036-a534-363631313534/circle.svg"
    };
  },
  components: { Icon, PwaList },
  name: "UnregisteredUserBg"
};
</script>

<style lang="scss" scoped>
//styles

@import "@/global-styles/styles.scss";

.wrapper {
  display: flex;
  flex-direction: column;
  padding-top: 4.08rem;
  height: -webkit-calc(100vh - 4.08rem);
  height: calc(100vh - 4.08rem);
  align-items: left;
  width: 100%;
}
//2 кнопки
.sign-foo {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 4.08rem;
  width: 70%;
}

.os-icon {
  display: flex;
  width: 15%;
  min-width: 5.8rem;
  height: 100%;
  align-items: center;
  justify-content: center;
  border: solid $neutral-200;
  border-width: 0px 0px 0px 1px;
  :hover {
    fill: $primary-500;
  }
}
//TODO: зона наведения
.install-padding {
  margin-right: 5%;
}
//модуль с картинкой
.start-bg {
  background-image: url("https://thumb.tildacdn.com/tild6238-3239-4234-a465-303964373663/-/format/webp/bgImage.png");
  background-size: 40rem;
  background-position: left 65% top 15%;

  background-repeat: no-repeat;
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  height: -webkit-calc(100vh - 8.08rem);
  height: calc(100vh - 8.08rem);
  padding: 6px 0px;
  width: 88%;
  border: solid $neutral-200;
  border-width: 1px 1px 1px 0px;
}
//серый типа-хедер
h4 {
  position: absolute;
  margin: 0px;
  padding: 2.875rem 1.375rem 0.25rem 4.5625rem;

  background: $neutral-050;
  border: solid $neutral-200;
  border-width: 0px 1px 1px 0px;
  box-sizing: border-box;
  left: 0px;
  top: 0px;
}

//features

.features {
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  animation: animate-enter 0.5s ease-in-out 0.5s 1 normal forwards;
  width: 43rem;
  min-width: 36rem;
  padding: 0.1rem 2rem 0rem 4.5625rem;
  @keyframes animate-enter {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}

//текст про технологии
.left-block {
  position: absolute;
  padding-right: 33%;
  width: 14.75rem;

  right: 0px;
  bottom: 83px;

  text-align: right;
}

@media (min-width: $br-md) {
  h4 {
    padding: 2.875rem 3.75rem 0.25rem 10.375rem;
  }
  .features {
    padding: 0rem 0rem 0rem 10.375rem;
    width: 48.5rem;
    z-index: $z-sticky;
  }
  .start-bg {
    width: 80%;
    background-size: 50rem;
  }
  .sign-foo {
    width: 70%;
  }
  .left-block {
    padding-right: 31%;
  }
}

@media (max-width: $br-sm) {
  body {
    position: fixed;
  }

  .wrapper {
    position: absolute;
    overflow: hidden;
    height: 100vh;
  }

  h4 {
    position: fixed;
    text-align: center;
    padding: 2.875rem 0rem 0.25rem 0rem;
    width: 100vw;
    animation: animh 1s ease-out 1 normal forwards;
    border-width: 0px 0px 1px 0px;
    z-index: $z-10;
    @keyframes animh {
      0% {
        transform: translateY(-4.08rem);
        opacity: 0;
      }
      100% {
        transform: translateY(0rem);
        opacity: 1;
      }
    }
  }
  .features {
    padding: 0rem 0rem 0rem -20rem;
    min-width: 43rem;
    animation: anim 20s linear infinite;
    opacity: 0;
    animation-delay: 1.3s;
    @keyframes anim {
      0% {
        transform: translateX(50%);
        opacity: 0;
      }
      3% {
        opacity: 100;
      }
      80%,
      100% {
        transform: translateX(-100%);
        opacity: 100;
      }
    }
  }
  .start-bg {
    width: 100%;
    background-position: left -4rem top -1.25rem;
    background-size: 80vh;
    align-items: bottom;
    height: 90vh;
    z-index: $z-zero;
    border-width: 0px;
    animation: animate-enter-1 0.8s ease-in 1 normal forwards;
    @keyframes animate-enter-1 {
      0% {
        transform: translateY(-4.08rem);
        opacity: 0;
      }
      100% {
        transform: translateY(0rem);
        opacity: 1;
      }
    }
  }

  .sign-foo {
    display: none;
  }

  .install-padding {
    display: none;
  }
  .left-block {
    display: none;
  }
}
</style>
