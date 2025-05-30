import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required("Nome/Email é obrigatório")
    .min(3, "Nome/Email deve ter no mínimo 3 caracteres"),
  password: yup
    .string()
    .required("Senha é obrigatória")
    .min(6, "Senha deve ter no mínimo 6 caracteres"),
});

export function Signin() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      // localStorage.setItem("token", "1234567890");
      // navigate("/home");
    },
  });

  function handleSignup() {
    navigate("/signup");
  }

  return (
    <div className="flex-1 flex items-center justify-center px-4">
      <div className="bg-mauve-dark-300 rounded-sm p-4 w-full max-w-[412px] ">
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col space-y-2">
            <Label>Nome/Email</Label>
            <Input
              type="text"
              placeholder="Digite seu nome/e-mail"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <span className="text-red-500 text-sm">
                {formik.errors.email}
              </span>
            )}
          </div>

          <div className="flex flex-col space-y-2">
            <Label>Senha</Label>
            <Input
              type="password"
              placeholder="Digite sua senha"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <span className="text-red-500 text-sm">
                {formik.errors.password}
              </span>
            )}
          </div>

          <div className="flex w-full justify-between items-center mt-2">
            <span
              className="text-purple-dark-900 underline cursor-pointer"
              onClick={handleSignup}
            >
              Criar uma conta
            </span>
            <Button variant="primary" type="submit">
              Entrar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
