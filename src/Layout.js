import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <h1>Bruh.com</h1>
        </nav>
      </header>
      <main>
        <div>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
