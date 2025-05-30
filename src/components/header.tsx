import { Separator } from "./ui/separator";
import { useLocation, useNavigate, Link } from "react-router";

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const isAuthenticated = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <header className="relative z-10 flex items-center justify-between px-6 py-4 ">
        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <Link to="/home">
              <img
                src="/src/assets/images/header-cubos.png"
                alt="logo"
                className="hidden md:block"
              />
              <img
                src="/src/assets/images/header-cubos-mobile.png"
                alt="logo"
                className="block md:hidden"
              />
            </Link>
          ) : (
            <>
              <img
                src="/src/assets/images/header-cubos.png"
                alt="logo"
                className="hidden md:block"
              />
              <img
                src="/src/assets/images/header-cubos-mobile.png"
                alt="logo"
                className="block md:hidden"
              />
            </>
          )}
        </div>

        <div className="flex items-center gap-4">
          {location.pathname !== "/" && location.pathname !== "/signup" && (
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-purple-dark-900 text-white rounded hover:bg-purple-dark-800 transition-colors cursor-pointer"
            >
              Logout
            </button>
          )}
        </div>
      </header>
      <Separator />
    </>
  );
}
