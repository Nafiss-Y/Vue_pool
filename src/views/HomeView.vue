<template>
    <div class="home">
      <h1 class="home__title">Vue Component Examples</h1>
      <p class="home__description">
        A collection of reusable Vue 3 components with tests, using best practices
      </p>
      
      <div class="home__cards">
        <div 
          v-for="(card, index) in cards" 
          :key="index" 
          class="card"
          @click="navigateTo(card.route)"
        >
          <h2 class="card__title">{{ card.title }}</h2>
          <p class="card__description">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const cards = [
    {
      title: 'Button',
      description: 'Customizable button with disabled state',
      route: '/button'
    },
    {
      title: 'Input Field',
      description: 'Text input with label and v-model support',
      route: '/input'
    },
    {
      title: 'User List',
      description: 'Display users with age calculation',
      route: '/list'
    },
    {
      title: 'Calculator',
      description: 'Simple calculator with real-time results',
      route: '/calculator'
    },
    {
      title: 'Table',
      description: 'Interactive table with add/delete functionality',
      route: '/table'
    }
  ];
  
  const navigateTo = (route: string) => {
    router.push(route);
  };
  </script>
  
  <style lang="scss" scoped>
  .home {
    &__title {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: var(--primary-color);
    }
    
    &__description {
      font-size: 1.125rem;
      margin-bottom: 2.5rem;
      max-width: 600px;
    }
    
    &__cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.5rem;
    }
  }
  
  .card {
    background-color: #fff;
    border-radius: 0.75rem;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    }
    
    &__title {
      font-size: 1.25rem;
      margin-bottom: 0.75rem;
      color: var(--primary-color);
    }
    
    &__description {
      color: #666;
    }
  }
  </style>