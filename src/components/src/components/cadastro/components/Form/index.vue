<script setup lang="ts">
</script>

<template>
  <form className="flex gap-4 flex-col w-full rounded-sm"       onSubmit={() => {
        e.preventDefault();
      }}
    >
      <Input
        label="Nome"
        propsInput={{
          disabled: false,
          placeholder: "Digite o nome do Ingressante",
          value: name,
          onChange: (e) => setName(e.target.value),
        }}
      />

      <Select
        label="Curso"
        options={dataCurse}
        propsSelect={{
          disabled: false,
          value: dataCurse[CurseSelected - 1]?.id.toString(),
          onChange: (e) => setCurseSelected(Number(e.target.value)),
        }}
      />
      <Select
        label="Estado"
        options={dataCoutryCity}
        propsSelect={{
          disabled: false,
          value: dataCoutryCity[countrySelected - 1]?.id.toString(),
          onChange: (e) => setCountrySelected(Number(e.target.value)),
        }}
      />
      <Select
        label="Cidade"
        options={
          dataCoutryCity.find((country) => country.id === countrySelected)
            ?.citys
        }
        propsSelect={{
          required: true,
          disabled: false,
          value:
            dataCoutryCity[countrySelected - 1]?.citys[
              citySelected - 1
            ]?.id.toString(),
          onChange: (e) => setCitySelected(Number(e.target.value)),
        }}
      />
      <div className="flex justify-between w-full mt-2">
        <Button
          classProps="bg-yellow-500 hover:bg-yellow-400"
          text="Voltar"
          propsButton={{
            type: "reset",
            onClick: () => router.push("/"),
          }}
        />
        <Button
          classProps="bg-emerald-600 hover:bg-emerald-500"
          text="Gravar"
          propsButton={{ type: "submit" }}
        />
      </div>
    </form>
</template>

<style scoped>

</style>
