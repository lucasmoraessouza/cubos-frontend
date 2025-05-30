import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import { useAuth } from "../hooks/useAuth";
import { initialValuesSignup, validationSignupSchema } from "../schemas/auth";

export function Signup() {
  const navigate = useNavigate();
  const { signUp, isSigningUp } = useAuth();

  const formik = useFormik({
    initialValues: initialValuesSignup,
    validationSchema: validationSignupSchema,
    onSubmit: async (values) => {
      await signUp({
        name: values.name,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
      });
    },
  });

  return (
    <div className="flex-1 flex items-center justify-center px-4">
      <div className="bg-mauve-dark-300 rounded-sm p-4 w-full max-w-[412px]">
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
              disabled={isSigningUp}
            />
            {formik.touched.name && formik.errors.name && (
              <span className="text-red-500 text-sm">{formik.errors.name}</span>
            )}
          </div>

          <div className="flex flex-col space-y-2">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Digite seu e-mail"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={isSigningUp}
            />
            {formik.touched.email && formik.errors.email && (
              <span className="text-red-500 text-sm">{formik.errors.email}</span>
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
              disabled={isSigningUp}
            />
            {formik.touched.password && formik.errors.password && (
              <span className="text-red-500 text-sm">
                {formik.errors.password}
              </span>
            )}
          </div>

          <div className="flex flex-col space-y-2">
            <Label>Confirmar Senha</Label>
            <Input
              type="password"
              placeholder="Confirme sua senha"
              id="confirmPassword"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={isSigningUp}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {formik.errors.confirmPassword}
              </span>
            )}
          </div>

          <div className="flex w-full justify-between items-center mt-2">
            <span
              className="text-purple-dark-900 underline cursor-pointer"
              onClick={() => navigate("/")}
            >
              Já possui uma conta?
            </span>
            <Button variant="primary" type="submit" disabled={isSigningUp}>
              {isSigningUp ? "Criando conta..." : "Criar conta"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
