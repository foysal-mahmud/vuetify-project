<template>
  <v-container>
    <h1 class="text-h3 mb-6">UI Elements</h1>

    <!-- Alerts Section -->
    <v-row class="mb-6">
      <v-col cols="12">
        <v-card>
          <v-card-title>Alerts</v-card-title>
          <v-card-text>
            <v-alert
              v-model="showAlert"
              closable
              color="info"
              icon="mdi-information"
              title="Information"
            >
              This is an information alert with an icon and close button.
            </v-alert>

            <v-alert
              color="success"
              icon="mdi-check-circle"
              title="Success"
            >
              Operation completed successfully!
            </v-alert>

            <v-alert
              color="warning"
              icon="mdi-alert"
              prominent
              title="Warning"
            >
              Please review your input before proceeding.
            </v-alert>

            <v-alert
              color="error"
              icon="mdi-alert-circle"
              title="Error"
              variant="tonal"
            >
              An error occurred while processing your request.
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Progress Indicators Section -->
    <v-row class="mb-6">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Progress Indicators</v-card-title>
          <v-card-text>
            <div class="mb-4">
              <v-progress-circular
                :color="progressColor"
                :model-value="progress"
                :size="50"
              />
            </div>

            <v-progress-linear
              :buffer-value="progressBuffer"
              color="primary"
              height="8"
              :model-value="progress"
              stream
            />

            <div class="mt-4">
              <v-btn
                color="primary"
                :loading="loading"
                @click="simulateProgress"
              >
                Start Progress
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Rating Section -->
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Rating</v-card-title>
          <v-card-text>
            <v-rating
              v-model="rating"
              color="warning"
              half-increments
              hover
            />

            <v-rating
              :color-value="ratingColors"
              density="compact"
              :length="5"
              :model-value="3"
              readonly
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Interactive Elements Section -->
    <v-row class="mb-6">
      <v-col cols="12">
        <v-card>
          <v-card-title>Interactive Elements</v-card-title>
          <v-card-text>
            <div class="d-flex align-center flex-wrap gap-4">
              <!-- Tooltips -->
              <v-tooltip
                location="top"
                text="Delete item"
              >
                <template #activator="{ props }">
                  <v-btn
                    color="error"
                    icon="mdi-delete"
                    v-bind="props"
                  />
                </template>
              </v-tooltip>

              <!-- Menu -->
              <v-menu>
                <template #activator="{ props }">
                  <v-btn
                    color="primary"
                    v-bind="props"
                  >
                    Menu
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item
                    v-for="(item, index) in ['Option 1', 'Option 2', 'Option 3']"
                    :key="index"
                    :value="index"
                  >
                    <v-list-item-title>{{ item }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>

              <!-- Snackbar trigger -->
              <v-btn
                color="success"
                @click="snackbar = true"
              >
                Show Snackbar
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Component Reference -->
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>UI Elements Reference</v-card-title>
          <v-card-text>
            <v-list lines="two">
              <v-list-item>
                <v-list-item-title>v-alert</v-list-item-title>
                <v-list-item-subtitle>
                  Contextual notification system with various styles and states
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>v-progress-circular & v-progress-linear</v-list-item-title>
                <v-list-item-subtitle>
                  Loading and progress indicators with customizable appearances
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>v-rating</v-list-item-title>
                <v-list-item-subtitle>
                  Star rating component with customizable icons and behaviors
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>v-tooltip</v-list-item-title>
                <v-list-item-subtitle>
                  Informative popup that appears when hovering over an element
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>v-menu</v-list-item-title>
                <v-list-item-subtitle>
                  Popup menu for displaying lists of actions or options
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>v-snackbar</v-list-item-title>
                <v-list-item-subtitle>
                  Toast-style notification system for temporary messages
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Snackbar -->
    <v-snackbar
      v-model="snackbar"
      :timeout="snackbarTimeout"
    >
      {{ snackbarText }}

      <template #actions>
        <v-btn
          color="primary"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  // Alert state
  const showAlert = ref(true)

  // Progress state
  const loading = ref(false)
  const progress = ref(0)
  const progressColor = ref('primary')
  const progressBuffer = ref(0)

  // Rating state
  const rating = ref(4.5)
  const ratingColors = ['error', 'warning', 'warning', 'success', 'success']

  // Snackbar state
  const snackbar = ref(false)
  const snackbarText = ref('This is a snackbar message!')
  const snackbarTimeout = ref(2000)

  // Progress simulation
  function simulateProgress () {
    loading.value = true
    progress.value = 0
    progressBuffer.value = 0

    const interval = setInterval(() => {
      progress.value += 10
      progressBuffer.value = Math.min(100, progress.value + 10)

      if (progress.value === 100) {
        clearInterval(interval)
        loading.value = false
        setTimeout(() => {
          progress.value = 0
          progressBuffer.value = 0
        }, 1000)
      }
    }, 1000)
  }
</script>

<style scoped>
.gap-4 {
  gap: 16px;
}
</style>
