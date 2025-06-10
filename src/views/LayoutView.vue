<template>
  <v-container class="pa-0" fluid>
    <!-- Basic Layout Section -->
    <v-sheet class="section-gap pa-4">
      <h2 class="text-h5">Basic Layout Components</h2>
      <v-card class="mb-4">
        <v-card-text>
          <p>Current layout uses:</p>
          <v-chip class="ma-1">v-app</v-chip>
          <v-chip class="ma-1">v-app-bar</v-chip>
          <v-chip class="ma-1">v-main</v-chip>
          <v-chip class="ma-1">v-navigation-drawer</v-chip>
        </v-card-text>
      </v-card>
    </v-sheet>

    <!-- Grid System -->
    <v-sheet class="section-gap pa-4">
      <h2 class="text-h5">Grid System</h2>
      <v-row>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-text>Column 1</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-text>Column 2</v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="mt-4">
        <v-col cols="12" md="4">
          <v-card>
            <v-card-text>Column 1</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card>
            <v-card-text>Column 2</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card>
            <v-card-text>Column 3</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>

    <!-- Spacing Components -->
    <v-sheet class="section-gap pa-4">
      <h2 class="text-h5">Spacing Components</h2>

      <!-- Spacer Example -->
      <v-card class="mb-4">
        <v-card-title>v-spacer Example</v-card-title>
        <v-card-text>
          <v-toolbar flat>
            <v-btn>Left</v-btn>
            <v-spacer />
            <v-btn>Right</v-btn>
          </v-toolbar>
        </v-card-text>
      </v-card>

      <!-- Divider Example -->
      <v-card>
        <v-card-title>v-divider Example</v-card-title>
        <v-card-text>
          <p>Content above divider</p>
          <v-divider />
          <p class="mt-4">Content below divider</p>

          <v-divider class="my-4" />

          <div class="d-flex">
            <span>Left</span>
            <v-divider class="mx-4" vertical />
            <span>Right</span>
          </div>
        </v-card-text>
      </v-card>
    </v-sheet>

    <!-- Container Types -->
    <v-sheet class="section-gap pa-4">
      <h2 class="text-h5">Container Types</h2>

      <v-card class="mb-4">
        <v-card-text>
          <v-container class="bg-grey-lighten-3">
            Default Container
          </v-container>

          <v-container class="bg-grey-lighten-3 mt-4" fluid>
            Fluid Container
          </v-container>
        </v-card-text>
      </v-card>
    </v-sheet>
  </v-container>
</template>

<script setup>
// No additional setup needed for this view
</script>

<style scoped lang="scss">
.section-gap {
  margin-bottom: 2rem;
}

.bg-grey-lighten-3 {
  background-color: rgb(var(--v-theme-grey-lighten-3));
}
</style>
