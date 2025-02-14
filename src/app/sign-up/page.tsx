"use client";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import GoogleLogo from "../../../public/social/goolge-logo.png";
import DDDs from "@/services/phone/ptbr";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { createUserType } from "@/services/types/user";

// ICONS
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function SignUp() {
  const [viewPassword, setViewPassword] = useState(false);
  const [viewPasswordConfirm, setViewPasswordConfirm] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: {
      number: "",
      areaCode: "",
      countryCode: "55",
    },
  };

  const handleSubmit = (values: createUserType) => {
    console.log("Dados enviados:", values);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .test(
        "no-only-spaces",
        "O campo não pode conter apenas espaços em branco",
        (value: string | undefined) => !!value?.trim().length,
      )
      .required("E-mail é obrigatório")
      .email("E-mail inválido"),
    password: Yup.string().required("Senha é obrigatório"),
  });

  return (
    <div className="flex flex-col max-[400px]:px-4 items-center justify-center min-h-screen">
      <div className="bg-background-primary w-full max-w-md p-6 border border-border-primary rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-semibold text-center text-text-primary">
          Criar uma conta
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            isSubmitting,
            handleChange,
            handleBlur,
            values,
            handleSubmit,
            errors,
            touched,
          }) => (
            <Form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text-primary"
                >
                  Nome
                </label>
                <input
                  type="name"
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${touched.name && errors.name ? "border-border-danger" : "border-gray-300"} border-gray-400 w-full text-gray-600 px-4 py-2 mt-1 text-sm border rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none`}
                  placeholder="Digite seu nome"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-primary"
                >
                  E-mail
                </label>
                <input
                  type="name"
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${touched.name && errors.name ? "border-border-danger" : "border-gray-300"} border-gray-400 w-full text-gray-600 px-4 py-2 mt-1 text-sm border rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none`}
                  placeholder="Digite seu e-mail"
                />
              </div>
              <div className="flex">
                <div className="mr-2 w-24">
                  <label
                    htmlFor="phone.areaCode"
                    className="block text-sm font-medium text-text-primary"
                  >
                    DDD
                  </label>
                  <select
                    id="phone.areaCode"
                    name="phone.areaCode"
                    className="border-gray-400 w-full text-gray-700 px-4 py-2 mt-1 text-sm border rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
                  >
                    {DDDs.map((ddd, index) => (
                      <option key={index} value={ddd.code}>
                        {ddd.code}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="phone.number"
                    className="block text-sm font-medium text-text-primary"
                  >
                    Telefone
                  </label>
                  <input
                    type="text"
                    id="phone.number"
                    name="phone.number"
                    className="border-gray-400 w-full text-gray-600 px-4 py-2 mt-1 text-sm border rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
                    placeholder="Digite seu e-mail"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-text-primary"
                >
                  Senha
                </label>
                <div className="border-gray-400 w-full flex items-center bg-[#E8F0FE] mt-1 rounded-md cursor-pointer">
                  <input
                    type={viewPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    className="w-full text-gray-600 px-4 py-2 text-sm rounded-md border focus:ring-2 focus:ring-green-400 focus:outline-none"
                    placeholder="Digite sua senha"
                  />
                  {viewPassword ? (
                    <Eye
                      className="text-text-primary2 mx-2"
                      onClick={() => setViewPassword(!viewPassword)}
                    />
                  ) : (
                    <EyeOff
                      className="text-text-primary2 mx-2"
                      onClick={() => setViewPassword(!viewPassword)}
                    />
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-text-primary"
                >
                  Confirme sua senha
                </label>
                <div className="border-gray-400 w-full flex items-center bg-[#E8F0FE] mt-1 rounded-md cursor-pointer">
                  <input
                    type={viewPasswordConfirm ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    className="w-full text-gray-600 px-4 py-2 text-sm rounded-md border focus:ring-2 focus:ring-green-400 focus:outline-none"
                    placeholder="Confirme sua senha"
                  />
                  {viewPasswordConfirm ? (
                    <Eye
                      className="text-text-primary2 mx-2"
                      onClick={() =>
                        setViewPasswordConfirm(!viewPasswordConfirm)
                      }
                    />
                  ) : (
                    <EyeOff
                      className="text-text-primary2 mx-2"
                      onClick={() =>
                        setViewPasswordConfirm(!viewPasswordConfirm)
                      }
                    />
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 text-sm font-medium text-text-ligth bg-green-500 rounded-md hover:bg-green-600"
              >
                Criar conta
              </button>
            </Form>
          )}
        </Formik>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Já tem uma conta?{" "}
            <a href="/signin" className="text-green-500 hover:underline">
              Entrar
            </a>
          </p>
        </div>
        <div className="mt-4 flex items-center justify-center">
          <p className="text-sm text-gray-600">
            Ou cadastre-se com sua conta Google{" "}
          </p>
          <a href="/signup" className="ml-2 flex items-center justify-center">
            <Image
              src={GoogleLogo}
              alt="Google Logo"
              width={20}
              height={20}
              className="rounded-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
