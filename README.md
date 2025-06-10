# Vuetify Components Demo

A comprehensive demonstration of Vuetify 3 components using Vue 3 and TypeScript. This project serves as both a learning resource and a reference implementation for various Vuetify components.

## Project Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
vuetify-project/
├── src/
│   ├── components/     # Reusable components
│   ├── layouts/       # Page layouts
│   │   └── default/   # Default layout
│   ├── views/         # Page components
│   ├── router/        # Vue Router configuration
│   ├── plugins/       # Vue plugins (Vuetify)
│   ├── App.vue        # Root component
│   └── main.ts        # Application entry point
├── public/           # Static assets
└── package.json      # Project dependencies
```

## Features

- 🎨 Modern UI with Vuetify 3
- 📱 Fully responsive design
- 🔍 Interactive component demos
- 🌗 Light/Dark theme support
- 📦 TypeScript support
- 🚦 Vue Router integration

## Technology Stack

- Vue 3
- Vuetify 3
- TypeScript
- Vue Router
- Vite

## Component Categories

### 1. Layout Components
- **App Structure**
  - `v-app` - Root component
  - `v-app-bar` - Top navigation bar
  - `v-main` - Main content area
- **Grid System**
  - `v-container` - Responsive container
  - `v-row` - Flexbox row
  - `v-col` - Grid column
  - `v-spacer` - Flexible spacing
  - `v-divider` - Visual separator

**Example:**
```vue
<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>My App</v-app-bar-title>
    </v-app-bar>
    
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            Column 1
            <v-divider class="my-4"></v-divider>
            Content
          </v-col>
          <v-col cols="12" md="6">
            Column 2
            <v-divider class="my-4"></v-divider>
            Content
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
```

### 2. Navigation Components
- `v-navigation-drawer` - Side navigation panel
- `v-list` - Versatile list component
- `v-tabs` - Tab navigation
- `v-breadcrumbs` - Page navigation breadcrumbs
- `v-btn-toggle` - Button group navigation

**Example:**
```vue
<template>
  <v-navigation-drawer v-model="drawer">
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        :title="item.title"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-tabs v-model="tab">
    <v-tab value="tab-1">Tab 1</v-tab>
    <v-tab value="tab-2">Tab 2</v-tab>
  </v-tabs>

  <v-breadcrumbs :items="['Home', 'Category', 'Item']"></v-breadcrumbs>
</template>
```

### 3. Form Components
- `v-form` - Form wrapper
- `v-text-field` - Text input
- `v-select` - Dropdown selection
- `v-checkbox` - Checkbox input
- `v-radio-group` - Radio button group
- `v-switch` - Toggle switch
- `v-date-picker` - Date selection

**Example:**
```vue
<template>
  <v-form v-model="valid">
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="Email"
    ></v-text-field>

    <v-select
      v-model="selected"
      :items="items"
      label="Select"
    ></v-select>

    <v-checkbox
      v-model="checked"
      label="Remember me"
    ></v-checkbox>

    <v-radio-group v-model="radioGroup">
      <v-radio label="Option 1" value="1"></v-radio>
      <v-radio label="Option 2" value="2"></v-radio>
    </v-radio-group>
  </v-form>
</template>
```

### 4. Data Display Components
- `v-data-table` - Data grid
- `v-data-table-server` - Server-side data table
- `v-table` - Simple table
- `v-timeline` - Vertical timeline
- `v-expansion-panels` - Collapsible content

**Example:**
```vue
<template>
  <v-data-table
    :headers="[
      { title: 'Name', key: 'name' },
      { title: 'Age', key: 'age' },
    ]"
    :items="[
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 },
    ]"
  ></v-data-table>

  <v-timeline>
    <v-timeline-item>
      <template v-slot:opposite>
        <span>Event 1</span>
      </template>
      <div>Content 1</div>
    </v-timeline-item>
  </v-timeline>
</template>
```

### 5. UI Elements
- `v-card` - Content containers
- `v-sheet` - Colored surfaces
- `v-alert` - User notifications
- `v-progress-circular` - Loading indicators
- `v-chip` - Compact elements
- `v-tooltip` - Hover information
- `v-icon` - Material Design icons
- `v-img` - Image handling
- `v-skeleton-loader` - Loading placeholders

**Example:**
```vue
<template>
  <v-card>
    <v-card-title>Card Title</v-card-title>
    <v-card-text>
      <v-alert type="success">Success message</v-alert>
      <v-progress-circular indeterminate></v-progress-circular>
      
      <v-tooltip text="Helpful tip">
        <template v-slot:activator="{ props }">
          <v-chip v-bind="props">Hover me</v-chip>
        </template>
      </v-tooltip>
    </v-card-text>
  </v-card>
</template>
```

### 6. Interactive Components
- `v-dialog` - Modal windows
- `v-menu` - Popup menus

**Example:**
```vue
<template>
  <v-dialog v-model="dialog">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props">Open Dialog</v-btn>
    </template>
    <v-card>
      <v-card-title>Dialog Title</v-card-title>
      <v-card-text>Dialog content goes here</v-card-text>
      <v-card-actions>
        <v-btn @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props">Menu</v-btn>
    </template>
    <v-list>
      <v-list-item title="Item 1"></v-list-item>
      <v-list-item title="Item 2"></v-list-item>
    </v-list>
  </v-menu>
</template>
```

