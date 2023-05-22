"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { dataCoutryCity, dataCurse } from "@/Mock/Ingressantes";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";

const Form: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [CurseSelected, setCurseSelected] = useState<number>(1);
  const [countrySelected, setCountrySelected] = useState<number>(1);
  const [citySelected, setCitySelected] = useState<number>(1);

  return (
    <form
      className="flex gap-4 flex-col w-full rounded-sm"
      onSubmit={(e) => {
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
  );
};

export default Form;
