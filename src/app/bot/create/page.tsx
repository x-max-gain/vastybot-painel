"use client";

import { createBotInformationsType } from "@/services/types/bot";
import { Formik, Form, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { ChevronLeft, Plus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CreateBotInformations() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [initialValuesInformations, setInitialValuesInformations] =
    useState<createBotInformationsType>({
      name: "",
      mode: "demo",
      close24hours: false,
      typeActive: "",
      active: "",
      companyActive: "",
      stoploss: false,
      stopgain: false,
    });
  // ? INFORMATIONS
  const validationSchemaInformations = Yup.object({
    name: Yup.string()
      .test(
        "no-only-spaces",
        "O campo não pode conter apenas espaços em branco",
        (value: string | undefined) => !!value?.trim().length,
      )
      .matches(
        /^[a-zA-ZáÁàÀâÂãÃéÉèÈêÊíÍìÌîÎóÓòÒôÔõÕúÚùÙûÛçÇ#_\-.]+$/,
        "Apenas esses caracteres especiais são permitidos: # - _ .",
      )
      .required("Nome é obrigatório")
      .min(3, "Nome deve ter pelo três caracteres"),
    mode: Yup.string(),
    close24hours: Yup.boolean().required("Fechar em 24 é obrigatório"),
  });

  const handleSubmitInformations = (values: createBotInformationsType) => {
    console.log("Form Data:", values);
    // router.push("/bot/view/123/algorithm");
  };

  useEffect(() => {
    setLoading(false);
    /**(async () => {
            const res = await getDataProfile();
            console.log(res);
            setInitialValuesInformations({ name: res.name, phone: res.phone, email: res.email });
        })()**/
  }, []);

  const modifyStateStoploss = (
    setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean,
    ) => Promise<any>,
    values: any,
    field: string,
  ) => {
    values[field]
      ? setFieldValue(field, false)
      : setFieldValue(field, {
          type: "percentage",
          value: 0,
        });
  };

  return (
    <div className="p-4 bg-background-primary rounded-lg">
      {!loading && (
        <>
          <Formik
            initialValues={initialValuesInformations}
            validationSchema={validationSchemaInformations}
            onSubmit={handleSubmitInformations}
          >
            {({
              isSubmitting,
              handleChange,
              handleBlur,
              values,
              handleSubmit,
              setFieldValue,
              errors,
              touched,
            }) => (
              <Form onSubmit={handleSubmit} className="">
                <h1 className="flex text-lg font-bold mb-6 text-gray-500 items-center">
                  <Link href="/bot">
                    <ChevronLeft className="mr-2 cursor-pointer" />
                  </Link>{" "}
                  Criar informações do robô
                </h1>
                <div className="grid gap-6 mb-6 md:grid-cols-12">
                  <div className="col-span-6">
                    <label
                      htmlFor="large-input"
                      className="block mb-2 text-sm font-medium text-text-primary"
                    >
                      Nome do robô
                    </label>
                    <input
                      type="text"
                      value={values.name}
                      name="name"
                      placeholder="Nome do robô"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="large-input"
                      className={`focus:outline-gray-300 block w-full px-4 py-2 text-text-primary border ${touched.name && errors.name ? "border-border-danger" : "border-gray-300"} rounded-lg bg-gray-50 text-base focus:border-gray-300`}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-text-danger text-sm p-1"
                    />
                  </div>
                  <div className="col-span-6">
                    <p className="block mb-2 text-sm font-medium text-text-primary">
                      Modo de operação
                    </p>
                    <div className="grid grid-cols-6">
                      <div className="col-span-3 grid grid-cols-12">
                        <div
                          onClick={() => setFieldValue("mode", "demo")}
                          className={`tracking-widest col-span-6 w-full flex justify-center py-2 rounded-l-lg font-bold ${values.mode === "demo" ? "cursor-default bg-background-main text-text-ligth" : "cursor-pointer border border-gray-300 text-text-primary"}`}
                        >
                          SIMULADO
                        </div>
                        <div
                          onClick={() => setFieldValue("mode", "real")}
                          className={`tracking-widest col-span-6 w-full flex justify-center py-2 rounded-r-lg font-bold  ${values.mode === "real" ? "cursor-default bg-background-main text-text-ligth" : "cursor-pointer border border-gray-300 text-text-primary"}`}
                        >
                          REAL
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-3">
                    <p className="block mb-2 text-sm font-medium text-text-primary">
                      Fechar operação após 24 horas
                    </p>
                    <div className="grid grid-cols-6">
                      <div className="col-span-3 grid grid-cols-12">
                        <div
                          onClick={() => setFieldValue("close24hours", true)}
                          className={`tracking-widest col-span-6 w-full flex justify-center py-2 rounded-l-lg font-bold ${values.close24hours ? "cursor-default bg-background-main text-text-ligth" : "cursor-pointer border border-gray-300 text-text-primary"}`}
                        >
                          SIM
                        </div>
                        <div
                          onClick={() => setFieldValue("close24hours", false)}
                          className={`tracking-widest col-span-6 w-full flex justify-center py-2 rounded-r-lg font-bold  ${!values.close24hours ? "cursor-default bg-background-main text-text-ligth" : "cursor-pointer border border-gray-300 text-text-primary"}`}
                        >
                          NÃO
                        </div>
                      </div>
                    </div>
                    <ErrorMessage
                      name="close24hours"
                      component="div"
                      className="text-text-danger text-sm p-1"
                    />
                  </div>
                  <div className="mb-6 col-span-3">
                    <label
                      htmlFor="large-input"
                      className="block mb-2 text-sm font-medium text-text-primary"
                    >
                      Tipo de ativo
                    </label>
                    <select
                      value={values.typeActive}
                      name="typeActive"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="large-input"
                      className="focus:outline-gray-300 block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:border-gray-300"
                    >
                      <option value="">Selecione um tipo de ativo</option>
                    </select>
                  </div>
                  <div className="mb-6 col-span-3">
                    <label
                      htmlFor="large-input"
                      className="block mb-2 text-sm font-medium text-text-primary"
                    >
                      Ativo
                    </label>
                    <select
                      value={values.active}
                      name="active"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="large-input"
                      className="focus:outline-gray-300 block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:border-gray-300"
                    >
                      <option value="">Selecione o ativo</option>
                    </select>
                  </div>
                  <div className="mb-6 col-span-3">
                    <label
                      htmlFor="large-input"
                      className="block mb-2 text-sm font-medium text-text-primary"
                    >
                      Corretora
                    </label>
                    <select
                      value={values.companyActive}
                      name="companyActive"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="large-input"
                      className="focus:outline-gray-300 block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:border-gray-300"
                    >
                      <option value="">Selecione a corretora</option>
                    </select>
                  </div>
                </div>
                <h2 className="text-lg font-bold mb-4 text-gray-500">
                  Stop Loss
                </h2>
                <div className="flex">
                  <div className="col-span-2 mr-4 flex items-center">
                    <div
                      onClick={() =>
                        modifyStateStoploss(setFieldValue, values, "stoploss")
                      }
                      className={`cursor-pointer h-2 w-10 border border-gray-400 flex items-center rounded-full ${values.stoploss ? "justify-end border-border-primary" : "justify-start"}`}
                    >
                      <div
                        className={`h-5 w-5 rounded-full ${values.stoploss ? "bg-background-success" : "bg-gray-500"}`}
                      ></div>
                    </div>
                  </div>
                  <div className="w-full mb-6 grid gap-6 md:grid-cols-12">
                    <div className="col-span-3">
                      <label
                        htmlFor="large-input"
                        className="block mb-2 text-sm font-medium text-text-primary"
                      >
                        Tipo do stop loss
                      </label>
                      <select
                        value={values.stoploss ? values.stoploss.type : ""}
                        name="stoploss.type"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="large-input"
                        disabled={!values.stoploss}
                        className="focus:outline-gray-300 block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:border-gray-300"
                      >
                        <option value="percentage">Porcentagem</option>
                        <option value="value">Valor</option>
                      </select>
                    </div>
                    <div className="col-span-3">
                      <label
                        htmlFor="large-input"
                        className="block mb-2 text-sm font-medium text-text-primary"
                      >
                        Valor do stop loss
                      </label>
                      <input
                        type="text"
                        value={values.stoploss ? values.stoploss.value : ""}
                        name="stoploss.value"
                        placeholder="0%"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="large-input"
                        disabled={!values.stoploss}
                        className="focus:outline-gray-300 block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:border-gray-300"
                      />
                    </div>
                  </div>
                </div>
                <h2 className="text-lg font-bold mb-4 text-gray-500">
                  Stop Gain
                </h2>
                <div className="flex">
                  <div className="col-span-2 mr-4 flex items-center">
                    <div
                      onClick={() =>
                        modifyStateStoploss(setFieldValue, values, "stopgain")
                      }
                      className={`cursor-pointer h-2 w-10 border border-gray-400 flex items-center rounded-full ${values.stopgain ? "justify-end border-border-primary" : "justify-start"}`}
                    >
                      <div
                        className={`h-5 w-5 rounded-full ${values.stopgain ? "bg-background-success" : "bg-gray-500"}`}
                      ></div>
                    </div>
                  </div>
                  <div className="w-full mb-6 grid gap-6 md:grid-cols-12">
                    <div className="col-span-3">
                      <label
                        htmlFor="large-input"
                        className="block mb-2 text-sm font-medium text-text-primary"
                      >
                        Tipo de stop gain
                      </label>
                      <select
                        value={values.stopgain ? values.stopgain.type : ""}
                        name="stopgain.type"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="large-input"
                        disabled={!values.stopgain}
                        className="focus:outline-gray-300 block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:border-gray-300"
                      >
                        <option value="percentage">Porcentagem</option>
                        <option value="value">Valor</option>
                      </select>
                    </div>
                    <div className="col-span-3">
                      <p className="block mb-2 text-sm font-medium text-text-primary">
                        Valor do stop gain
                      </p>
                      <input
                        type="text"
                        value={values.stopgain ? values.stopgain.value : ""}
                        name="stopgain.value"
                        placeholder="0%"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="large-input"
                        disabled={!values.stopgain}
                        className="focus:outline-gray-300 block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:border-gray-300"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-1 sm:px-4 py-2 bg-background-green rounded-md flex items-center justify-center"
                  >
                    <Plus className="mr-2" /> Criar robô
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </>
      )}
    </div>
  );
}
