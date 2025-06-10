<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="text-h3 font-weight-bold mb-4">
          Vuetify Components
        </h1>

        <p class="text-body-1 mb-6">
          This demo showcases various Vuetify components and their usage. Use the navigation drawer to explore different component categories.
        </p>

        <v-row justify="center">
          <v-col cols="12" lg="8" md="10">
            <v-card>
              <v-card-title class="text-h5">Component Categories</v-card-title>
              <v-card-text>
                <v-expansion-panels>
                  <!-- Layout Components -->
                  <v-expansion-panel>
                    <v-expansion-panel-title>
                      <v-row no-gutters>
                        <v-col cols="4">Layout Components</v-col>
                        <v-col class="text-grey" cols="8">
                          App structure and grid system
                        </v-col>
                      </v-row>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                      <v-chip-group>
                        <v-chip>v-app</v-chip>
                        <v-chip>v-app-bar</v-chip>
                        <v-chip>v-main</v-chip>
                        <v-chip>v-container</v-chip>
                        <v-chip>v-row</v-chip>
                        <v-chip>v-col</v-chip>
                        <v-chip>v-spacer</v-chip>
                        <v-chip>v-divider</v-chip>
                      </v-chip-group>
                    </v-expansion-panel-text>
                  </v-expansion-panel>

                  <!-- Navigation Components -->
                  <v-expansion-panel>
                    <v-expansion-panel-title>
                      <v-row no-gutters>
                        <v-col cols="4">Navigation Components</v-col>
                        <v-col class="text-grey" cols="8">
                          Navigation and menu elements
                        </v-col>
                      </v-row>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                      <v-chip-group>
                        <v-chip>v-navigation-drawer</v-chip>
                        <v-chip>v-list</v-chip>
                        <v-chip>v-tabs</v-chip>
                        <v-chip>v-breadcrumbs</v-chip>
                        <v-chip>v-btn-toggle</v-chip>
                      </v-chip-group>
                    </v-expansion-panel-text>
                  </v-expansion-panel>

                  <!-- Form Components -->
                  <v-expansion-panel>
                    <v-expansion-panel-title>
                      <v-row no-gutters>
                        <v-col cols="4">Form Components</v-col>
                        <v-col class="text-grey" cols="8">
                          Input and form controls
                        </v-col>
                      </v-row>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                      <v-chip-group>
                        <v-chip>v-form</v-chip>
                        <v-chip>v-text-field</v-chip>
                        <v-chip>v-select</v-chip>
                        <v-chip>v-checkbox</v-chip>
                        <v-chip>v-radio-group</v-chip>
                        <v-chip>v-switch</v-chip>
                        <v-chip>v-date-picker</v-chip>
                      </v-chip-group>
                    </v-expansion-panel-text>
                  </v-expansion-panel>

                  <!-- Data Display -->
                  <v-expansion-panel>
                    <v-expansion-panel-title>
                      <v-row no-gutters>
                        <v-col cols="4">Data Display</v-col>
                        <v-col class="text-grey" cols="8">
                          Tables and data presentation
                        </v-col>
                      </v-row>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                      <v-chip-group>
                        <v-chip>v-data-table</v-chip>
                        <v-chip>v-data-table-server</v-chip>
                        <v-chip>v-table</v-chip>
                        <v-chip>v-timeline</v-chip>
                        <v-chip>v-expansion-panels</v-chip>
                      </v-chip-group>
                    </v-expansion-panel-text>
                  </v-expansion-panel>

                  <!-- UI Elements -->
                  <v-expansion-panel>
                    <v-expansion-panel-title>
                      <v-row no-gutters>
                        <v-col cols="4">UI Elements</v-col>
                        <v-col class="text-grey" cols="8">
                          Basic UI components and feedback
                        </v-col>
                      </v-row>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                      <v-chip-group>
                        <v-chip>v-card</v-chip>
                        <v-chip>v-sheet</v-chip>
                        <v-chip>v-alert</v-chip>
                        <v-chip>v-progress-circular</v-chip>
                        <v-chip>v-chip</v-chip>
                        <v-chip>v-tooltip</v-chip>
                        <v-chip>v-icon</v-chip>
                        <v-chip>v-img</v-chip>
                        <v-chip>v-skeleton-loader</v-chip>
                      </v-chip-group>
                    </v-expansion-panel-text>
                  </v-expansion-panel>

                  <!-- Interactive Components -->
                  <v-expansion-panel>
                    <v-expansion-panel-title>
                      <v-row no-gutters>
                        <v-col cols="4">Interactive Components</v-col>
                        <v-col class="text-grey" cols="8">
                          Dialogs and interactive elements
                        </v-col>
                      </v-row>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                      <v-chip-group>
                        <v-chip>v-dialog</v-chip>
                        <v-chip>v-menu</v-chip>
                      </v-chip-group>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="mt-6" justify="center">
          <v-col cols="12" lg="8" md="10">
            <v-card>
              <v-card-title class="text-h5">Quick Navigation</v-card-title>
              <v-card-text>
                <v-list lines="one">
                  <v-list-item
                    v-for="(item, i) in menuItems"
                    :key="i"
                    :prepend-icon="item.icon"
                    :title="item.title"
                    :to="item.to"
                  />
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  const menuItems = [
    { title: 'Layout Components', icon: 'mdi-view-dashboard', to: '/layout' },
    { title: 'Navigation Components', icon: 'mdi-menu', to: '/navigation' },
    { title: 'Form Components', icon: 'mdi-form-select', to: '/forms' },
    { title: 'Data Display', icon: 'mdi-table', to: '/data-display' },
    { title: 'UI Elements', icon: 'mdi-card', to: '/ui-elements' },
    { title: 'Interactive Components', icon: 'mdi-gesture-tap-button', to: '/interactive' },
  ]
</script>

<style scoped>
  .v-expansion-panel-text__wrapper {
    padding: 12px !important;
  }
</style>
