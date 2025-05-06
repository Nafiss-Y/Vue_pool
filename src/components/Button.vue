<template>
    <button
      :class="{'button--disabled': !isButtonEnabled}"
      :disabled="!isButtonEnabled"
      class="button"
    >
      <slot />
    </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

  const isButtonEnabled = ref<boolean>(true);
</script>
<style lang="scss" scoped>
.button {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: var(--primary-color, #4a90e2);
  color: #fff;
  border: none;
  font-size: 1rem;
  
  &:hover:not(:disabled) {
    background-color: var(--primary-color-dark, #3a7bc8);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  &--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
}

.switch-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.switch-label {
  font-size: 0.9rem;
  color: #333;
}

.switch {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
    
    &:checked + .slider {
      background-color: var(--primary-color, #4a90e2);
      
      &:before {
        transform: translateX(24px);
      }
    }
    
    &:focus + .slider {
      box-shadow: 0 0 2px var(--primary-color, #4a90e2);
    }
    
    &:disabled + .slider {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .3s;
  border-radius: 24px;
  
  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: .3s;
    border-radius: 50%;
  }
}

// Demo Container Styles
.button-demo {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 300px;
  margin: 2rem auto;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: #f8f9fa;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.toggle-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 768px) {
  .switch {
    width: 40px;
    height: 20px;
    
    input:checked + .slider:before {
      transform: translateX(20px);
    }
  }
  
  .slider:before {
    height: 14px;
    width: 14px;
  }
}
</style>