<template>
  <div class="input-field">
    <label v-if="label" class="input-field__label">{{ label }}</label>
    <input
      type="text"
      class="input-field__control"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateValue($event)"
    />
  </div>

</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:modelValue', 'input']);

const updateValue = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  emit('input', value);
  emit('update:modelValue', value);
};
</script>

<style lang="scss" scoped>
.input-field {
  margin-bottom: 1.25rem;
  width: 100%;
  
  &__label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--text-color, #333);
  }
  
  &__control {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    line-height: 1.5;
    border: 1px solid var(--border-color, #ddd);
    border-radius: 0.375rem;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    
    &:focus {
      outline: none;
      border-color: var(--primary-color, #4a90e2);
      box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
    }
    
    &::placeholder {
      color: var(--placeholder-color, #999);
    }
  }
  
  @media (max-width: 768px) {
    &__label {
      font-size: 0.75rem;
    }
    
    &__control {
      padding: 0.625rem 0.875rem;
      font-size: 0.875rem;
    }
  }
}
</style>