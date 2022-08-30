import { BarMenu } from "../BarMenu/BarMenu";
import * as C from "./styles";
import BannerImg from "../../assets/Img/bannerImage.png";


export const Banner = () => {
  return (
    <C.Container>
      <C.ContainerBanner>
        <C.ContainerContent>
          <BarMenu />

          <C.ContainerInfo>
            <C.ContainerInfoContent>
              <C.ContainerTitle>
                Nós somos Free<span style={{ color: "#1991eb" }}>Play</span>.
                Ajudamos você a encontrar jogos gratuitos.
              </C.ContainerTitle>

              <C.ContainerDesc>
                Somos um hub de jogos gratuitos para que você não perca tempo
                escolhendo o que vai jogar. Fomos projetado para aqueles
                jogadores que querem se divertir.
              </C.ContainerDesc>
            </C.ContainerInfoContent>


            <C.ContainerImg>
              <C.Image src={BannerImg} alt="" />
            </C.ContainerImg>
          </C.ContainerInfo>
        </C.ContainerContent>
      </C.ContainerBanner>
    </C.Container>
  );
};
