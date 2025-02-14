"use client";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

// service
import { Login } from "@/services/modules/auth.module";
import { AuthBodyType } from "@/services/types/auth";

// Images
import GoogleLogo from "../../../public/social/goolge-logo.png";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function SignIn() {
  const [viewPassword, setViewPassword] = useState(false);
  const router = useRouter();
  const initialValues = {
    email: "",
    password: "",
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

  const handleSubmit = async (values: AuthBodyType) => {
    try {
      const responseLogin = await Login(values);
      console.log(responseLogin);
      // if (responseLogin) router.push("/");
    } catch (err: any) {
      const message = err.response.data.message;
      toast.error(message);
    }
  };

  return (
    <div className="flex flex-col max-[400px]:px-4 items-center justify-center min-h-screen">
      <div className="bg-background-primary w-full  max-w-md p-6 border border-border-primary rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-semibold text-center text-text-primary">
          Entrar na sua conta
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
                  htmlFor="email"
                  className="block text-sm font-medium text-text-primary"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${touched.email && errors.email ? "border-border-danger" : "border-gray-300"} border-gray-400 w-full text-gray-600 px-4 py-2 mt-1 text-sm border rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none`}
                  placeholder="Digite seu e-mail"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-text-danger text-sm p-1"
                />
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
                    value={values.password}
                    onChange={handleChange}
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
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-text-danger text-sm p-1"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 text-sm font-medium text-white ${isSubmitting ? "bg-gray-500 rounded-md hover:bg-gray-600" : "bg-green-500 rounded-md hover:bg-green-600"}`}
              >
                {isSubmitting ? "Carregando..." : "Entrar"}
              </button>
            </Form>
          )}
        </Formik>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Não tem uma conta?{" "}
            <a href="/sign-up" className="text-green-500 hover:underline">
              Cadastre-se
            </a>
          </p>
        </div>
        <div className="mt-4 flex items-center justify-center">
          <p className="text-sm text-gray-600">Entre com sua conta Google </p>

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
