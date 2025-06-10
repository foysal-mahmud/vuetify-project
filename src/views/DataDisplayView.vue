<template>
  <v-container>
    <h1 class="text-h3 mb-6">Data Display Components</h1>

    <!-- Tables Section -->
    <v-row class="mb-6">
      <v-col cols="12">
        <v-card>
          <v-card-title>Data Tables</v-card-title>
          <v-card-text>
            <v-data-table
              class="elevation-1"
              :headers="headers"
              hover
              :items="desserts"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Lists and Timeline Section -->
    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Lists</v-card-title>
          <v-card-text>
            <v-list lines="two">
              <v-list-subheader>User Activity</v-list-subheader>
              <v-list-item
                v-for="(item, index) in timelineItems"
                :key="index"
                :subtitle="item.text"
                :title="item.title"
              >
                <template #prepend>
                  <v-avatar
                    color="white"
                    :icon="item.icon"
                  />
                </template>
                <template #append>
                  <v-chip size="small">{{ item.time }}</v-chip>
                </template>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Timeline</v-card-title>
          <v-card-text>
            <v-timeline side="end">
              <v-timeline-item
                v-for="(item, index) in timelineItems"
                :key="index"
                :dot-color="item.color"
                size="small"
              >
                <template #icon>
                  <v-icon :icon="item.icon" />
                </template>
                <v-card>
                  <v-card-title class="text-h6">
                    {{ item.title }}
                  </v-card-title>
                  <v-card-text>
                    {{ item.text }}
                    <div class="text-caption">{{ item.time }}</div>
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Chips and Badges Section -->
    <v-row class="mt-6">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Chips</v-card-title>
          <v-card-text>
            <div class="d-flex flex-wrap gap-2">
              <v-chip
                v-for="tech in technologies"
                :key="tech.label"
                class="ma-1"
                closable
                :color="tech.color"
                label
              >
                {{ tech.label }}
              </v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Badges</v-card-title>
          <v-card-text>
            <div class="d-flex align-center gap-4">
              <v-badge
                color="error"
                :content="notifications"
                location="top end"
              >
                <v-icon icon="mdi-bell" size="large" />
              </v-badge>

              <v-badge
                color="primary"
                :content="messages"
                location="top end"
              >
                <v-icon icon="mdi-email" size="large" />
              </v-badge>

              <v-badge
                color="success"
                dot
                location="bottom end"
              >
                <v-avatar color="primary" size="36">
                  <span class="text-h6 white--text">JD</span>
                </v-avatar>
              </v-badge>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Avatars Section -->
    <v-row class="mt-6">
      <v-col cols="12">
        <v-card>
          <v-card-title>Avatars</v-card-title>
          <v-card-text>
            <div class="d-flex align-center gap-4">
              <v-avatar
                v-for="(user, index) in users"
                :key="index"
                :color="user.color"
                :image="user.avatar"
                size="48"
              >
                <span v-if="user.initials" class="text-h6 white--text">
                  {{ user.initials }}
                </span>
              </v-avatar>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Component Reference -->
    <v-row class="mt-6">
      <v-col cols="12">
        <v-card>
          <v-card-title>Data Display Components Reference</v-card-title>
          <v-card-text>
            <v-list lines="two">
              <v-list-item>
                <v-list-item-title>v-data-table</v-list-item-title>
                <v-list-item-subtitle>
                  Powerful data table component with sorting, filtering, and pagination
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>v-list</v-list-item-title>
                <v-list-item-subtitle>
                  Versatile list component for displaying items with various layouts
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>v-timeline</v-list-item-title>
                <v-list-item-subtitle>
                  Display chronological information in a visually appealing timeline
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>v-chip</v-list-item-title>
                <v-list-item-subtitle>
                  Small, interactive elements for displaying information, filtering, or taking action
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>v-badge</v-list-item-title>
                <v-list-item-subtitle>
                  Add notifications and status indicators to any content
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>v-avatar</v-list-item-title>
                <v-list-item-subtitle>
                  Display user profile pictures or decorative elements in a circular format
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  // Sample data for tables
  const desserts = [
    {
      name: 'Frozen Yogurt',
      calories: 159,
      fat: 6,
      carbs: 24,
      protein: 4,
      iron: '1%',
    },
    {
      name: 'Ice cream sandwich',
      calories: 237,
      fat: 9,
      carbs: 37,
      protein: 4.3,
      iron: '1%',
    },
    {
      name: 'Eclair',
      calories: 262,
      fat: 16,
      carbs: 23,
      protein: 6,
      iron: '7%',
    },
  ]

  // Table headers
  const headers = [
    { title: 'Dessert (100g serving)', key: 'name' },
    { title: 'Calories', key: 'calories' },
    { title: 'Fat (g)', key: 'fat' },
    { title: 'Carbs (g)', key: 'carbs' },
    { title: 'Protein (g)', key: 'protein' },
    { title: 'Iron (%)', key: 'iron' },
  ]

  // Sample timeline items
  const timelineItems = [
    {
      color: 'primary',
      icon: 'mdi-account',
      title: 'User Registration',
      text: 'John Doe registered an account',
      time: '10:00 AM',
    },
    {
      color: 'success',
      icon: 'mdi-check',
      title: 'Task Completed',
      text: 'Project milestone achieved',
      time: '11:30 AM',
    },
    {
      color: 'info',
      icon: 'mdi-email',
      title: 'New Message',
      text: 'You received a new email',
      time: '2:15 PM',
    },
  ]

  // Sample data for chips
  const technologies = ref([
    { label: 'Vue.js', color: 'success' },
    { label: 'React', color: 'info' },
    { label: 'Angular', color: 'error' },
    { label: 'Svelte', color: 'warning' },
  ])

  // Sample data for badges
  const notifications = ref(3)
  const messages = ref(5)

  // Sample data for avatar
  const users = [
    { name: 'John Doe', avatar: 'https://cdn.vuetifyjs.com/images/john.jpg' },
    { name: 'Jane Smith', avatar: 'https://cdn.vuetifyjs.com/images/jane.jpg' },
    { name: 'Bob Johnson', initials: 'BJ', color: 'primary' },
  ]
</script>

<style scoped>
.gap-2 {
  gap: 8px;
}

.gap-4 {
  gap: 16px;
}
</style>
