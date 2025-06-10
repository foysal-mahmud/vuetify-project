<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      temporary
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in menuItems"
          :key="i"
          :prepend-icon="item.icon"
          :title="item.title"
          :to="item.to"
        />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-app-bar-title>Vuetify Components Demo</v-app-bar-title>
      <v-spacer />
      <v-btn icon="mdi-theme-light-dark" @click="toggleTheme" />
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useTheme } from 'vuetify'

  const theme = useTheme()
  const drawer = ref(false)

  const toggleTheme = () => {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  }

  const menuItems = [
    {
      title: 'Layout Components',
      icon: 'mdi-view-dashboard',
      to: '/layout',
    },
    {
      title: 'Navigation Components',
      icon: 'mdi-menu',
      to: '/navigation',
    },
    {
      title: 'Form Components',
      icon: 'mdi-form-select',
      to: '/forms',
    },
    {
      title: 'Data Display',
      icon: 'mdi-table',
      to: '/data-display',
    },
    {
      title: 'UI Elements',
      icon: 'mdi-card',
      to: '/ui-elements',
    },
    {
      title: 'Interactive Components',
      icon: 'mdi-gesture-tap-button',
      to: '/interactive',
    },
  ]
</script>

<style lang="scss">
  .v-application {
    .text-h5 {
      margin-bottom: 1rem;
    }

    .section-gap {
      margin-bottom: 2rem;
    }
  }
</style>
