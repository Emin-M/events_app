import { Footer } from "../footer/footer";
import { Header } from "../header/header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
