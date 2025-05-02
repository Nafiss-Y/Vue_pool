<template>
  <div class="user-list" data-testid="user-list">
    <ul class="user-list__container" data-testid="user-list-container">
      <li 
        v-for="(user, index) in users" 
        :key="index"
        class="user-list__item"
        :data-testid="`user-item-${index}`"
      >
        <span class="user-list__name" :data-testid="`user-name-${index}`">{{ user.name }}</span>
        <span class="user-list__age" :data-testid="`user-age-${index}`">{{ user.age }}</span>
      </li>
    </ul>
    
    <div 
      v-if="users.length > 0" 
      class="user-list__summary"
      data-testid="average-age-container"
    >
      <p class="user-list__average" data-testid="average-age-text">
        Average Age: <span data-testid="average-age-value">{{ averageAge.toFixed(1) }}</span>
      </p>
    </div>
    
    <p 
      v-else 
      class="user-list__empty"
      data-testid="empty-list-message"
    >
      No users available
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type User = {
  name: string;
  age: number;
};

const props = defineProps<{
  users: User[];
}>();

const averageAge = computed(() => {
  if (props.users.length === 0) return 0;
  const totalAge = props.users.reduce((sum, user) => sum + user.age, 0);
  return totalAge / props.users.length;
});
</script>

<style lang="scss" scoped>

@use "sass:color";

$border-color: #e0e0e0;
$hover-color: #f5f5f5;
$text-primary: #333;
$text-secondary: #666;
$accent-color: #4a90e2;

.user-list {
  max-width: 600px;
  margin: 0 auto;
  font-family: sans-serif;
  
  &__container {
    list-style-type: none;
    padding: 0;
    margin: 0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    background-color: white;
    
    @media (max-width: 480px) {
      border-radius: 4px;
    }
  }
  
  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    border-bottom: 1px solid $border-color;
    transition: background-color 0.2s;
    
    &:last-child {
      border-bottom: none;
    }
    
    &:hover {
      background-color: $hover-color;
    }
    
    @media (max-width: 480px) {
      padding: 12px 16px;
    }
  }
  
  &__name {
    font-weight: 500;
    color: $text-primary;
  }
  
  &__age {
    font-weight: 400;
    color: $text-secondary;
    background-color: color.adjust($accent-color, $lightness: 35%);
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 0.9em;
    
    @media (max-width: 480px) {
      padding: 2px 8px;
      font-size: 0.85em;
    }
  }
  
  &__summary {
    margin-top: 20px;
    background-color: white;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    
    @media (max-width: 480px) {
      padding: 12px;
      margin-top: 16px;
    }
  }
  
  &__average {
    margin: 0;
    font-weight: 600;
    color: $text-primary;
    
    span {
      color: $accent-color;
    }
  }
  
  &__empty {
    margin-top: 20px;
    text-align: center;
    color: $text-secondary;
    font-style: italic;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
}
</style>