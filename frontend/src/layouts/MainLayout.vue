<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label header />
        <EssentialLink :essential-links="essentialLinks" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated>
      <q-toolbar>
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n'
import EssentialLink from '../components/EssentialLink.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const { t } = useI18n()
    const leftDrawerOpen = ref(false)
    const linksList = [
      // TODO: include the url's from /router/routes.ts
      {
        id: 'home',
        title: t('user.navigation_menu.home'),
        link: window.location.origin
      },
      {
        id: 'services',
        title: t('user.navigation_menu.services'),
        link: window.location.origin + '#/services'
      },
      {
        id: 'portfolio',
        title: t('user.navigation_menu.portfolio'),
        link: window.location.origin + '#/portfolio',
        child_urls: [
          {
            id: 'portfolio_photo',
            title: t('user.navigation_menu.portfolio_photo'),
            link: window.location.origin + '#/portfolio/photo'
          },
          {
            id: 'portfolio_video',
            title: t('user.navigation_menu.portfolio_video'),
            link: window.location.origin + '#/portfolio/video'
          }
        ]
      },
      {
        id: 'deals',
        title: t('user.navigation_menu.deals'),
        link: window.location.origin + '#/deals'
      },
      {
        id: 'about_me',
        title: t('user.navigation_menu.about_me'),
        link: window.location.origin + '#/about-me'
      },
      {
        id: 'contact_me',
        title: t('user.navigation_menu.contact_me'),
        link: window.location.origin + '#/contact-me'
      },
      {
        id: 'terms_and_conditions',
        title: t('user.navigation_menu.terms_and_conditions'),
        link: window.location.origin + '#/terms-and-conditions'
      }
    ]
    return {
      t,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
});
</script>
