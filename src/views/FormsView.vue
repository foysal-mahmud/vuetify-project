<script setup lang="ts">
  import { computed, ref } from 'vue'

  // Form validation state
  const isValid = ref(false)
  const showResults = ref(false)

  // Basic form data
  const formData = ref({
    name: '',
    email: '',
    country: null as string | null,
    message: '',
    subscribe: false,
  })

  // Advanced form data
  const advancedForm = ref({
    preference: '1',
    notifications: true,
    rating: 5,
    tags: [],
    date: new Date().toISOString().slice(0, 10),
  })

  // Date picker menu state
  const dateMenu = ref(false)

  // Validation rules
  const nameRules = [
    (v: string) => !!v || 'Name is required',
    (v: string) => v.length >= 2 || 'Name must be at least 2 characters',
  ]

  const emailRules = [
    (v: string) => !!v || 'E-mail is required',
    (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
  ]

  const messageRules = [
    (v: string) => !!v || 'Message is required',
    (v: string) => v.length <= 500 || 'Message must be less than 500 characters',
  ]

  // Form data
  const countries = [
    'United States',
    'Canada',
    'United Kingdom',
    'Australia',
    'Germany',
    'France',
    'Japan',
    'China',
  ]

  const availableTags = [
    'Important',
    'Work',
    'Personal',
    'Shopping',
    'Travel',
    'Family',
  ]

  // Computed property for displaying form results
  const formResults = computed(() => {
    return {
      basicForm: { ...formData.value },
      advancedForm: { ...advancedForm.value },
    }
  })

  // Form submission handler
  const handleSubmit = () => {
    if (isValid.value) {
      showResults.value = true
      // In a real application, you would typically make an API call here
      console.log('Form submitted:', formResults.value)
    }
  }
</script>

<template>
  <v-container>
    <h1 class="text-h3 mb-6">Form Components</h1>

    <!-- Basic Form with Validation -->
    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Basic Form with Validation</v-card-title>
          <v-card-text>
            <v-form v-model="isValid" @submit.prevent="handleSubmit">
              <v-text-field
                v-model="formData.name"
                clearable
                hint="Enter your full name"
                label="Name"
                required
                :rules="nameRules"
              />

              <v-text-field
                v-model="formData.email"
                label="Email"
                prepend-inner-icon="mdi-email"
                required
                :rules="emailRules"
                type="email"
              />

              <v-select
                v-model="formData.country"
                class="mb-4"
                hint="Select your country from the list"
                :items="countries"
                label="Country"
                :menu-props="{ closeOnContentClick: true }"
                persistent-hint
                placeholder="Select a country"
                required
                return-object
                :rules="[(v) => !!v || 'Country is required']"
                single-line
                variant="outlined"
              />

              <v-textarea
                v-model="formData.message"
                counter
                label="Message"
                maxlength="500"
                rows="3"
                :rules="messageRules"
              />

              <v-checkbox
                v-model="formData.subscribe"
                color="primary"
                label="Subscribe to newsletter"
              />

              <v-btn
                block
                class="mt-4"
                color="primary"
                :disabled="!isValid"
                type="submit"
              >
                Submit
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Advanced Form Controls -->
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Advanced Form Controls</v-card-title>
          <v-card-text>
            <v-radio-group v-model="advancedForm.preference" label="Preference">
              <v-radio label="Option 1" value="1" />
              <v-radio label="Option 2" value="2" />
              <v-radio label="Option 3" value="3" />
            </v-radio-group>

            <v-switch
              v-model="advancedForm.notifications"
              class="mb-4"
              color="success"
              hide-details
              label="Enable notifications"
            />

            <v-slider
              v-model="advancedForm.rating"
              class="mb-4"
              label="Rating"
              :max="10"
              :min="0"
              :step="1"
              thumb-label
            />

            <v-combobox
              v-model="advancedForm.tags"
              chips
              class="mb-4"
              closable-chips
              :items="availableTags"
              label="Tags"
              multiple
            />

            <v-menu
              ref="menu"
              v-model="dateMenu"
              :close-on-content-click="false"
              offset-y
              transition="scale-transition"
            >
              <template #activator="{ props }">
                <v-text-field
                  v-model="advancedForm.date"
                  label="Date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="props"
                />
              </template>
              <v-date-picker
                v-model="advancedForm.date"
                @update:model-value="dateMenu = false"
              />
            </v-menu>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Form Results -->
    <v-row class="mt-6">
      <v-col cols="12">
        <v-card v-if="showResults">
          <v-card-title>Form Results</v-card-title>
          <v-card-text>
            <pre>{{ formResults }}</pre>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Form Components Reference -->
    <v-row class="mt-6">
      <v-col cols="12">
        <v-card>
          <v-card-title>Form Components Reference</v-card-title>
          <v-card-text>
            <v-list lines="two">
              <v-list-item>
                <v-list-item-title>v-form</v-list-item-title>
                <v-list-item-subtitle>
                  Form wrapper component with built-in validation support
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>v-text-field</v-list-item-title>
                <v-list-item-subtitle>
                  Text input with validation, icons, and various display options
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>v-select</v-list-item-title>
                <v-list-item-subtitle>
                  Dropdown selection with support for multiple selection and chips
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>v-checkbox</v-list-item-title>
                <v-list-item-subtitle>
                  Checkbox input with customizable colors and labels
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>v-radio-group & v-radio</v-list-item-title>
                <v-list-item-subtitle>
                  Radio button group for single selection from multiple options
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>v-switch</v-list-item-title>
                <v-list-item-subtitle>
                  Toggle switch for boolean values with custom colors
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>v-slider</v-list-item-title>
                <v-list-item-subtitle>
                  Slider input for numerical ranges with customizable steps
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>v-date-picker</v-list-item-title>
                <v-list-item-subtitle>
                  Date selection with calendar interface
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-card-text {
  padding-top: 20px;
}

pre {
  background-color: #f5f5f5;
  padding: 16px;
  border-radius: 4px;
  overflow-x: auto;
}
</style>
