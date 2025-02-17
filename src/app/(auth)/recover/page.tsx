"use client";
/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

// service
import { recoverAccountBodyType } from "@/services/types/account";
import { recoverAccount } from "@/services/modules/account.module";

export default function SignIn() {
  const router = useRouter();
  const initialValues = {
    email: "",
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
  });

  const handleSubmit = async (values: recoverAccountBodyType) => {
    try {
      const responseLogin = await recoverAccount(values);
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
          Recuperar sua conta
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

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 text-sm font-medium text-white ${isSubmitting ? "bg-gray-500 rounded-md hover:bg-gray-600" : "bg-green-500 rounded-md hover:bg-green-600"}`}
              >
                {isSubmitting ? "Carregando..." : "Recuperar"}
              </button>
            </Form>
          )}
        </Formik>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Tem conta?{" "}
            <a href="/sign-up" className="text-green-500 hover:underline">
              Fazer login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
