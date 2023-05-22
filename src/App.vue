<script setup lang="ts"></script>

<template>
  <div class="flex min-h-screen w-full items-center justify-center">
    <div
      class="flex flex-col border-sky-800 border-2 rounded-md bg-white w-fit"
    >
      <div
        class="text-white text-lg text-center font-bold w-full bg-sky-800 p-2 rounded-sm"
      >
        Cadastro de Ingressantes
      </div>
      <div class="w-full p-4">
        <form class="flex gap-4 flex-col w-full rounded-sm">
          <div class="flex flex-col gap-1">
            <label class="font-semibold ml-2.5"> Nome </label>
            <input
              id="{props.label}"
              type="text"
              class="block p-2 w-full h-10 border-sky-800 border-2 rounded-md bg-white cursor-pointer hover:border-sky-600 transition-all duration-300 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700"
            />
          </div>
          <div class="flex flex-col gap-1">
            <label class="font-semibold ml-2.5"> Curso </label>
            <select
              id="{props.label}"
              class="block p-2 w-full h-10 border-sky-800 border-2 rounded-md bg-white cursor-pointer hover:border-sky-600 transition-all duration-300 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700"
            >
              <option value="{option.id}">Matemática</option>
              <option value="{option.id}">Letras</option>
              <option value="{option.id}">Geografia</option>
            </select>
          </div>
          <div class="flex flex-col gap-1">
            <label class="font-semibold ml-2.5"> Estado </label>
            <select
              id="{props.label}"
              class="block p-2 w-full h-10 border-sky-800 border-2 rounded-md bg-white cursor-pointer hover:border-sky-600 transition-all duration-300 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700"
            >
              <option value="{option.id}">São Paulo</option>
              <option value="{option.id}">Rio de Janeiro</option>
              <option value="{option.id}">Minas Gerais</option>
            </select>
          </div>
          <div class="flex flex-col gap-1">
            <label class="font-semibold ml-2.5"> Cidade </label>
            <select
              id="{props.label}"
              class="block p-2 w-full h-10 border-sky-800 border-2 rounded-md bg-white cursor-pointer hover:border-sky-600 transition-all duration-300 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700"
            >
              <option value="{option.id}">Mogi das Cruzes</option>
              <option value="{option.id}">Suzano</option>
              <option value="{option.id}">Poá</option>
              <option value="{option.id}">Guararema</option>
              <option value="{option.id}">Angra dos Reis</option>
              <option value="{option.id}">Niterói</option>
              <option value="{option.id}">Itaboraí</option>
              <option value="{option.id}">Belo Horizonte</option>
              <option value="{option.id}">Monte Azul</option>
              <option value="{option.id}">Muzambinho</option>
            </select>
          </div>

          <div class="flex justify-between w-full mt-2">
            <button
              class="bg-yellow-500 hover:bg-yellow-400 py-2 px-4 h-fit w-fit border-2 border-gray-300 rounded-lg text-lg font-medium transition-all duration-300 cursor-pointer text-white"
            >
              Voltar
            </button>
            <button
              class="bg-emerald-600 hover:bg-emerald-500 py-2 px-4 h-fit w-fit border-2 border-gray-300 rounded-lg text-lg font-medium transition-all duration-300 cursor-pointer text-white"
            >
              Gravar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
