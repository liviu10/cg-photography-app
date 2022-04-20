<template>
  <q-page class="">
    <div class="">
      <q-carousel
        arrows
        animated
        v-model="slide"
        class="window-height"
      >
        <q-carousel-slide name="first" img-src="https://cdn.quasar.dev/img/mountains.jpg">
          <div class="absolute-bottom-right custom-caption">
            <div class="text-h2">First stop</div>
            <div class="text-subtitle1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Ipsa quo dolores deserunt repellendus doloribus eligendi sint consequatur,
              accusamus voluptatibus maiores perferendis ipsam et esse modi.
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="second" img-src="https://cdn.quasar.dev/img/parallax1.jpg">
          <div class="absolute-bottom-right custom-caption">
            <div class="text-h2">Second stop</div>
            <div class="text-subtitle1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Ipsa quo dolores deserunt repellendus doloribus eligendi sint consequatur,
              accusamus voluptatibus maiores perferendis ipsam et esse modi.
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="third" img-src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-bottom-right custom-caption">
            <div class="text-h2">Third stop</div>
            <div class="text-subtitle1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Ipsa quo dolores deserunt repellendus doloribus eligendi sint consequatur,
              accusamus voluptatibus maiores perferendis ipsam et esse modi.
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </q-page>
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'HomePage',
  setup () {
    const { t } = useI18n()
    const slide = ref('first')
    return {
      t,
      slide
    }
  }
});
</script>
<style lang="scss">
  .custom-caption {
    text-align: center;
    padding: 12px;
    color: white;
    background-color: rgba(0, 0, 0, .3);
    bottom: 20%;
    right: 5%;
    max-width: 40%;
  }
</style>