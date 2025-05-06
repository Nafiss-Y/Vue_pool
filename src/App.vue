<template>
  <div class="app">
    <nav class="nav">
      <div class="nav__container">
        <h1 class="nav__title">Vue Components</h1>
        <div class="nav__links">
          <RouterLink to="/" class="nav__link">Home</RouterLink>
          <RouterLink to="/button" class="nav__link">Button</RouterLink>
          <RouterLink to="/input" class="nav__link">Input</RouterLink>
          <RouterLink to="/list" class="nav__link">List</RouterLink>
          <RouterLink to="/calculator" class="nav__link">Calculator</RouterLink>
          <RouterLink to="/table" class="nav__link">Table</RouterLink>
        </div>
      </div>
    </nav>
    
    <main class="content">
      <RouterView
        label="Username"
        placeholder="Enter your username"
        v-model="inputValue"
      />
      <div v-if="currentRoute === 'InputExample'" class="input-result">
        <h3>Input Value:</h3>
        <p class="value-display">{{ inputValue }}</p>
      </div>
    </main>
    
    <footer class="footer">
      <p>Vue Component Examples - 2024</p>
    </footer>
  </div>
</template>


<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const inputValue = ref('');

const currentRoute = computed(() => route.name);

const handleInput = (event) => {
  if (currentRoute.value === 'InputExample') {
    inputValue.value = event.detail;
  }
};

onMounted(() => {
  window.addEventListener('update:modelValue', handleInput);
});

watch(() => route.path, (newPath) => {
  if (newPath !== '/input') {
    inputValue.value = '';
  }
});
</script>



<style lang="scss">
:root {
  --primary-color: #4a90e2;
  --primary-color-dark: #3a7bc8;
  --background-color: #f8f9fa;
  --text-color: #333;
  --border-color: #ddd;
  --placeholder-color: #999;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', 'Segoe UI', sans-serif;
  color: var(--text-color);
  background-color: var(--background-color);
  line-height: 1.5;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.nav {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  
  &__title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--primary-color);
  }
  
  &__links {
    display: flex;
    gap: 1.5rem;
  }
  
  &__link {
    color: var(--text-color);
    text-decoration: none;
    padding: 0.5rem 0;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--primary-color);
      transition: width 0.3s;
    }
    
    &:hover::after,
    &.RouterLink-active::after {
      width: 100%;
    }
  }
  
  @media (max-width: 768px) {
    &__container {
      flex-direction: column;
      gap: 1rem;
    }
    
    &__links {
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
    }
  }
}

.content {
  flex-grow: 1;
  padding: 2rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
}

.footer {
  background-color: #fff;
  text-align: center;
  padding: 1rem;
  border-top: 1px solid var(--border-color);
  font-size: 0.875rem;
  color: #666;
}

.input-result {
  margin-top: 2rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  
  .value-display {
    font-size: 1.25rem;
    padding: 0.5rem;
    background-color: #f5f5f5;
    border-radius: 4px;
    font-family: monospace;
  }
}
</style>