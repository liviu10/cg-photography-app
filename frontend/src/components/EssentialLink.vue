<template>
  <div>
    <div class="text-h6 text-center q-my-md">
      MENU
    </div>
    <q-item v-for="item in essentialLinks" :key="item.id">
      <q-item-section>
        <q-item-label v-if="item.id === 'portfolio'">
          <q-expansion-item
            expand-separator
            :label="item.title"
            default-opened
            :header-inset-level="-0.25"
            :content-inset-level="0.5"
          >
            <q-item v-for="child in item.child_urls" :key="child.id">
              <q-item-section>
                <q-item-label>
                  <a :href="child.link">
                    {{ child.title }}
                  </a>
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-expansion-item>
        </q-item-label>
        <q-item-label v-else>
          <a :href="item.link">
            {{ item.title }}
          </a>
        </q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EssentialLink',
  props: {
    essentialLinks: {
      type: Object,
      required: true
    }
  }
});
</script>
