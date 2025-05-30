import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Outlet } from "react-router";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#121113]">
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center h-1/2"
          style={{
            background: `linear-gradient(
              0deg,
              rgba(18, 17, 19, 1) 0%,
              rgba(18, 17, 19, 0.46) 49%,
              rgba(18, 17, 19, 1) 100%
            ), url('./src/assets/images/login-background.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <Header />


      <main className="relative z-10 flex-1 flex">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
