<template>
  <q-page class="q-mx-xl">
    <div class="text-center q-my-lg">
      <h3>
        {{ t('user.services_page.title') }}
      </h3>
    </div>
  </q-page>
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ServicesPage',
  setup () {
    const { t } = useI18n()
    return {
      t
    }
  }
});
</script>
