import { About } from "../../components/About/About";
import { Banner } from "../../components/Banner/Banner";
import { Cards } from "../../components/Cards/Cards";
import { Community } from "../../components/Community/Community";
import { Baseboard } from "../../components/Baseboard/Baseboard";

export const Home = () => {
  return (
    <>
      <Banner />
      <Cards />
      <About />
      <Community />

      < Baseboard/>
    </>
  );
};
