import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router";

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome é obrigatório")
    .min(3, "Nome deve ter no mínimo 3 caracteres"),
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  password: yup
    .string()
    .required("Senha é obrigatória")
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .matches(
      /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
      "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número ou caractere especial"
    ),
  confirmPassword: yup
    .string()
    .required("Confirmação de senha é obrigatória")
    .oneOf([yup.ref("password")], "As senhas não coincidem"),
});

export function Signup() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // Aqui você pode implementar a lógica de cadastro
      console.log(values);
    },
  });

  function handleSignin() {
    navigate("/");
  }

  return (
    <div className="flex-1 flex items-center justify-center px-4">
      <div className="bg-mauve-dark-300 rounded-sm p-4 w-full max-w-[412px] ">
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col space-y-2">
            <Label>Nome</Label>
            <Input
              type="text"
              placeholder="Digite seu nome"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <span className="text-red-500 text-sm">{formik.errors.name}</span>
            )}
          </div>

          <div className="flex flex-col space-y-2">
            <Label>E-mail</Label>
            <Input
              type="email"
              placeholder="Digite seu e-mail"
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

          <div className="flex flex-col space-y-2">
            <Label>Confirmação de senha</Label>
            <Input
              type="password"
              placeholder="Digite sua senha novamente"
              id="confirmPassword"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <span className="text-red-500 text-sm">
                  {formik.errors.confirmPassword}
                </span>
              )}
          </div>

          <div className="flex w-full justify-between items-center mt-2">
            <span
              className="text-purple-dark-900 underline cursor-pointer"
              onClick={handleSignin}
            >
              Já tenho uma conta
            </span>
            <Button variant="primary" type="submit">
              Cadastrar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
