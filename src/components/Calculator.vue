<template>
    <div class="calculator">
      <div class="calculator__inputs">
        <div class="calculator__input-group">
          <label class="calculator__label">First Number:</label>
          <input 
            type="number" 
            v-model.number="firstNumber" 
            class="calculator__number-input"
          />
        </div>
        <div class="calculator__input-group">
          <label class="calculator__label">Second Number:</label>
          <input 
            type="number" 
            v-model.number="secondNumber" 
            class="calculator__number-input"
          />
        </div>
      </div>
      <div class="calculator__result">
        <p class="calculator__sum">Sum: <strong>{{ sum }}</strong></p>
        <p class="calculator__parity">
          The result is 
          <span class="calculator__badge" :class="{ 'calculator__badge--even': oddOrEven === 'even', 'calculator__badge--odd': oddOrEven === 'odd' }">{{ oddOrEven }}</span>
        </p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, watch } from 'vue';
  
  const firstNumber = ref(0);
  const secondNumber = ref(0);
  
  const sum = computed(() => {
    if ((firstNumber.value + secondNumber.value) < 0) {
      alert('Only positive numbers are allowed!');
      firstNumber.value = 0;
      secondNumber.value = 0;
      return 0;
    }
    return firstNumber.value + secondNumber.value;
  });
  
  const oddOrEven = computed(() => {
    return sum.value % 2 === 0 ? 'even' : 'odd';
  });
  </script>
  
  <style lang="scss" scoped>
  .calculator {
    padding: 1.5rem;
    border-radius: 0.75rem;
    margin: 0 auto;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    background-color: #fff;
    
    &__inputs {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.5rem;
      
      @media (max-width: 480px) {
        flex-direction: column;
      }
    }
    
    &__input-group {
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    
    &__label {
      margin-bottom: 0.5rem;
      font-size: 0.875rem;
      font-weight: 600;
      color: #333;
    }
    
    &__number-input {
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 0.375rem;
      font-size: 1rem;
      transition: border-color 0.2s, box-shadow 0.2s;
      
      &:focus {
        outline: none;
        border-color: #4a90e2;
        box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
      }
      
      @media (max-width: 480px) {
        font-size: 0.875rem;
        padding: 0.625rem;
      }
    }
    
    &__result {
      padding: 1.25rem;
      background-color: #f8f9fa;
      border-radius: 0.5rem;
      margin-top: 1rem;
    }
    
    &__sum {
      font-size: 1.25rem;
      margin-bottom: 0.75rem;
      
      @media (max-width: 480px) {
        font-size: 1.125rem;
      }
    }
    
    &__parity {
      font-size: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    &__badge {
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-weight: 600;
      font-size: 0.875rem;
      
      &--even {
        background-color: #4caf50;
        color: white;
      }
      
      &--odd {
        background-color: #ff9800;
        color: white;
      }
    }
    
    @media (max-width: 768px) {
      padding: 1.25rem;
      margin: 0 1rem;
    }
  }
  </style>