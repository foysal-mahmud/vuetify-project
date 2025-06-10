<template>
  <v-container>
    <h1 class="text-h3 mb-6">Interactive Components</h1>

    <!-- Dialogs Section -->
    <v-row class="mb-6">
      <v-col cols="12">
        <v-card>
          <v-card-title>Dialogs</v-card-title>
          <v-card-text>
            <div class="d-flex gap-4">
              <v-btn
                color="primary"
                @click="dialog = true"
              >
                Open Dialog
              </v-btn>

              <v-btn
                color="warning"
                @click="dialogPersistent = true"
              >
                Persistent Dialog
              </v-btn>

              <v-btn
                color="success"
                @click="sheet = true"
              >
                Bottom Sheet
              </v-btn>
            </div>

            <!-- Basic Dialog -->
            <v-dialog
              v-model="dialog"
              width="500"
            >
              <v-card>
                <v-card-title>Basic Dialog</v-card-title>
                <v-card-text>
                  This is a basic dialog example. Click outside or the close button to dismiss.
                </v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    color="primary"
                    @click="dialog = false"
                  >
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <!-- Persistent Dialog -->
            <v-dialog
              v-model="dialogPersistent"
              persistent
              width="500"
            >
              <v-card>
                <v-card-title>Persistent Dialog</v-card-title>
                <v-card-text>
                  This dialog can only be closed using the actions buttons.
                </v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    color="error"
                    @click="dialogPersistent = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    color="success"
                    @click="dialogPersistent = false"
                  >
                    Confirm
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <!-- Bottom Sheet -->
            <v-bottom-sheet v-model="sheet">
              <v-list>
                <v-list-subheader>Share via</v-list-subheader>
                <v-list-item
                  v-for="(item, i) in ['Email', 'Twitter', 'Facebook']"
                  :key="i"
                  :value="item"
                  @click="sheet = false"
                >
                  <template #prepend>
                    <v-icon
                      class="me-3"
                      :icon="['mdi-email', 'mdi-twitter', 'mdi-facebook'][i]"
                    />
                  </template>
                  <v-list-item-title>{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-bottom-sheet>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Carousel Section -->
    <v-row class="mb-6">
      <v-col cols="12">
        <v-card>
          <v-card-title>Carousel</v-card-title>
          <v-card-text>
            <v-carousel
              v-model="carouselModel"
              cycle
              height="400"
              hide-delimiter-background
              show-arrows="hover"
            >
              <v-carousel-item
                v-for="(item, i) in carouselItems"
                :key="i"
                cover
                :src="item.src"
              >
                <div class="fill-height d-flex align-center justify-center">
                  <div class="text-h3 text-white">{{ item.title }}</div>
                </div>
              </v-carousel-item>
            </v-carousel>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Expansion Panels Section -->
    <v-row class="mb-6">
      <v-col cols="12">
        <v-card>
          <v-card-title>Expansion Panels</v-card-title>
          <v-card-text>
            <v-expansion-panels v-model="panel" multiple>
              <v-expansion-panel>
                <v-expansion-panel-title>Panel 1</v-expansion-panel-title>
                <v-expansion-panel-text>
                  Content for panel 1. This panel can be expanded and collapsed.
                </v-expansion-panel-text>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-title>Panel 2</v-expansion-panel-title>
                <v-expansion-panel-text>
                  Content for panel 2. Multiple panels can be open simultaneously.
                </v-expansion-panel-text>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-title>Panel 3</v-expansion-panel-title>
                <v-expansion-panel-text>
                  Content for panel 3. Click the header to toggle the panel.
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Stepper Section -->
    <v-row class="mb-6">
      <v-col cols="12">
        <v-card>
          <v-card-title>Stepper</v-card-title>
          <v-card-text>
            <v-stepper
              v-model="currentStep"
              alt-labels
            >
              <v-stepper-header>
                <v-stepper-item
                  v-for="(step, i) in steps"
                  :key="i"
                  :complete="Boolean(stepValidation[i])"
                  :value="i + 1"
                >
                  <v-icon>{{ step.icon }}</v-icon>
                  {{ step.title }}
                </v-stepper-item>

                <v-divider
                  v-for="i in steps.length - 1"
                  :key="`divider-${i}`"
                />
              </v-stepper-header>

              <v-stepper-window>
                <v-stepper-window-item
                  v-for="(step, i) in steps"
                  :key="i"
                  :value="i + 1"
                >
                  <v-card-text>
                    <div class="text-h6 mb-2">{{ step.title }}</div>
                    <v-checkbox
                      v-model="stepValidation[i]"
                      :label="`Complete ${step.title}`"
                      :rules="step.rules"
                    />
                  </v-card-text>
                </v-stepper-window-item>
              </v-stepper-window>

              <v-divider />

              <v-card-actions>
                <v-btn
                  :disabled="currentStep === 1"
                  @click="currentStep--"
                >
                  Back
                </v-btn>
                <v-spacer />
                <v-btn
                  color="primary"
                  :disabled="!canProceed"
                  @click="currentStep = Math.min(steps.length, currentStep + 1)"
                >
                  {{ currentStep === steps.length ? 'Finish' : 'Continue' }}
                </v-btn>
              </v-card-actions>
            </v-stepper>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Bottom Navigation -->
    <v-bottom-navigation v-model="bottomNav">
      <v-btn value="recent">
        <v-icon>mdi-history</v-icon>
        Recent
      </v-btn>

      <v-btn value="favorites">
        <v-icon>mdi-heart</v-icon>
        Favorites
      </v-btn>

      <v-btn value="nearby">
        <v-icon>mdi-map-marker</v-icon>
        Nearby
      </v-btn>
    </v-bottom-navigation>

    <!-- Component Reference -->
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Interactive Components Reference</v-card-title>
          <v-card-text>
            <v-list lines="two">
              <v-list-item>
                <v-list-item-title>v-dialog</v-list-item-title>
                <v-list-item-subtitle>
                  Modal dialogs for displaying critical information or gathering user input
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>v-bottom-sheet</v-list-item-title>
                <v-list-item-subtitle>
                  A bottom sheet variant of dialogs for mobile-friendly interaction
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>v-carousel</v-list-item-title>
                <v-list-item-subtitle>
                  Slideshow component for cycling through images or content
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>v-expansion-panels</v-list-item-title>
                <v-list-item-subtitle>
                  Accordion-style containers for organizing and hiding content
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>v-stepper</v-list-item-title>
                <v-list-item-subtitle>
                  Multi-step process indicator with validation and navigation
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>v-bottom-navigation</v-list-item-title>
                <v-list-item-subtitle>
                  Mobile-friendly bottom navigation bar for primary actions
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
  import { computed, ref } from 'vue'

  // Dialog state
  const dialog = ref(false)
  const dialogPersistent = ref(false)

  // Bottom sheet state
  const sheet = ref(false)

  // Carousel state
  const carouselModel = ref(0)
  const carouselItems = [
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Squirrel',
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      title: 'Sky',
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      title: 'Bird',
    },
  ]

  // Expansion panels state
  const panel = ref([0])

  // Stepper state
  const currentStep = ref(1)
  const steps = [
    {
      title: 'Select Product',
      icon: 'mdi-cart',
      rules: [(v: boolean) => !!v || 'You must select a product'],
    },
    {
      title: 'Configure',
      icon: 'mdi-cog',
      rules: [(v: boolean) => !!v || 'Configuration is required'],
    },
    {
      title: 'Confirm',
      icon: 'mdi-check',
      rules: [(v: boolean) => !!v || 'Please confirm your choices'],
    },
  ]

  // Stepper validation
  const stepValidation = ref(Array.from({ length: steps.length }).fill(false))
  const canProceed = computed(() => Boolean(stepValidation.value[currentStep.value - 1]))

  // Bottom navigation state
  const bottomNav = ref('recent')

</script>

<style scoped>
.gap-4 {
  gap: 16px;
}
</style>
