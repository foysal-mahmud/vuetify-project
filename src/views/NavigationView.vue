<template>
  <v-container class="pa-0" fluid>
    <!-- Breadcrumbs Section -->
    <v-sheet class="section-gap pa-4">
      <h2 class="text-h5">Breadcrumbs</h2>
      <v-card class="mb-4">
        <v-card-text>
          <v-breadcrumbs
            divider="/"
            :items="breadcrumbItems"
          />

          <v-breadcrumbs class="mt-4">
            <template #prepend>
              <v-icon>mdi-home</v-icon>
            </template>
            <v-breadcrumbs-item
              v-for="item in breadcrumbItems"
              :key="item.title"
              :disabled="item.disabled"
              :title="item.title"
            />
          </v-breadcrumbs>
        </v-card-text>
      </v-card>
    </v-sheet>

    <!-- Tabs Section -->
    <v-sheet class="section-gap pa-4">
      <h2 class="text-h5">Tabs</h2>
      <v-card>
        <v-tabs
          v-model="activeTab"
          align-tabs="center"
        >
          <v-tab value="tab-1">Tab 1</v-tab>
          <v-tab value="tab-2">Tab 2</v-tab>
          <v-tab value="tab-3">Tab 3</v-tab>
        </v-tabs>

        <v-window v-model="activeTab">
          <v-window-item value="tab-1">
            <v-card-text>
              Content for tab 1
            </v-card-text>
          </v-window-item>

          <v-window-item value="tab-2">
            <v-card-text>
              Content for tab 2
            </v-card-text>
          </v-window-item>

          <v-window-item value="tab-3">
            <v-card-text>
              Content for tab 3
            </v-card-text>
          </v-window-item>
        </v-window>
      </v-card>
    </v-sheet>

    <!-- List Section -->
    <v-sheet class="section-gap pa-4">
      <h2 class="text-h5">Lists</h2>
      <v-row>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>Basic List</v-card-title>
            <v-list lines="one">
              <v-list-item
                v-for="(item, i) in listItems"
                :key="i"
                :prepend-icon="item.icon"
                :subtitle="item.subtitle"
                :title="item.title"
              />
            </v-list>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>List with Actions</v-card-title>
            <v-list lines="two" select-strategy="classic">
              <v-list-item
                v-for="(item, i) in listItems"
                :key="i"
                :prepend-icon="item.icon"
                :subtitle="item.subtitle"
                :title="item.title"
              >
                <template #append>
                  <v-btn
                    icon="mdi-information"
                    size="small"
                    variant="text"
                    @click.stop="showInfo(item)"
                  />
                </template>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>

    <!-- Button Toggle Section -->
    <v-sheet class="section-gap pa-4">
      <h2 class="text-h5">Button Toggle</h2>
      <v-card>
        <v-card-text>
          <v-btn-toggle
            v-model="toggleValue"
            color="primary"
            mandatory
          >
            <v-btn value="left">
              Left
            </v-btn>
            <v-btn value="center">
              Center
            </v-btn>
            <v-btn value="right">
              Right
            </v-btn>
          </v-btn-toggle>

          <div class="mt-4">
            Selected value: {{ toggleValue }}
          </div>
        </v-card-text>
      </v-card>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const activeTab = ref('tab-1')
  const toggleValue = ref('center')

  const breadcrumbItems = [
    {
      title: 'Home',
      disabled: false,
    },
    {
      title: 'Components',
      disabled: false,
    },
    {
      title: 'Navigation',
      disabled: true,
    },
  ]

  const listItems = [
    {
      title: 'Inbox',
      subtitle: 'Check your messages',
      icon: 'mdi-inbox',
    },
    {
      title: 'Starred',
      subtitle: 'Favorite items',
      icon: 'mdi-star',
    },
    {
      title: 'Sent',
      subtitle: 'Sent messages',
      icon: 'mdi-send',
    },
  ]

  const showInfo = (item: any) => {
    console.log(`Showing info for ${item.title}`)
  }
</script>

<style scoped lang="scss">
.section-gap {
  margin-bottom: 2rem;
}
</style>
