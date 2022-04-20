<template>
  <q-page class="q-mx-xl">
    <div class="text-center q-my-lg">
      <h3>
        {{ t('user.portfolio_page.portfolio_photo.title') }}
      </h3>
    </div>
  </q-page>
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PortfolioPhotoPage',
  setup () {
    const { t } = useI18n()
    return {
      t
    }
  }
});
</script>
