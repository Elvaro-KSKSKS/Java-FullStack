<script setup>
  import { reactive, computed } from 'vue';

  const state = reactive({
    operation: '+',
    firstNumber: 0,
    secondNumber: 0,
  });

  const result = computed(() => {
    const { operation, firstNumber, secondNumber } = state;

    if (firstNumber === '' && secondNumber === '') {
      return 0;
    }

    switch (operation) {
      case '+':
        return firstNumber + secondNumber;
      case '-':
        return firstNumber - secondNumber;
      case '*':
        return firstNumber * secondNumber;
      case '/':
        return firstNumber / secondNumber;
    }
  });
</script>

<template>
  <div class="container vh-100 d-flex flex-column justify-content-center align-items-center">
    <div class="w-75 mb-4 p-4 bg-light rounded-3">
      <div class="row">
        <div class="col">
          <h3>Calculadora Aritmética</h3>
        </div>
      </div>
    </div>
    <div class="w-75 p-5 bg-light rounded-3">
      <div class="row">
        <div class="col">
          <h5 class="mb-3">Selecionar operação</h5>
          <select v-model="state.operation" class="form-control w-25">
            <option value="+">Adição</option>
            <option value="-">Subtração</option>
            <option value="*">Multiplicação</option>
            <option value="/">Divisão</option>
          </select>
        </div>
      </div>
      <hr class="border-1 mt-4 mb-3">
      <div class="row">
        <h5 class="mb-3">Cálculo</h5>
        <div class="col-md-9 d-flex align-items-center gap-2">
          <input v-model.number="state.firstNumber" class="form-control">
          <span v-text="state.operation"></span>
          <input v-model.number="state.secondNumber" class="form-control">
          <span>=</span>
        </div>
        <div class="col d-flex align-items-center">
            <span>{{ result }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  #app {
    background-color: #90cbfb;
  }
</style>
