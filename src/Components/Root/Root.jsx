import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";

const Root = () => {
  const nav = useNavigation();

  return (
    <div className="space-y-8 bg-[#dcdcdc]">

      <div className="max-w-6xl mx-auto">
        <Header />
        <div>
          {nav.state === 'loading' ? (
            <div className="text-center">
              <div
                className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"
              ></div>
              <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
            </div>
          ) : (
            <Outlet />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
