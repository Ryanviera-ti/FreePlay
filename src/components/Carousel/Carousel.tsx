import { BarMenu } from "../BarMenu/BarMenu";
import * as C from "./styles";
import { carouselData } from "./CarouselData";
import React, { useState } from "react";

export const Carousel = () => {
  const [index, setIndex] = useState(0);
  let i = carouselData[index];
  const { title, img, description } = i;

  const arrowReturn = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  const arrowNext = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (index < 2) {
      setIndex(index + 1);
    }
  };

  return (
    <C.Container>
      <C.Banner style={{ backgroundImage: `url(${img})` }}>
        <C.ContainerContent>
          <BarMenu />
          <C.ContainerBannerSpanPC>PC</C.ContainerBannerSpanPC>
          <C.ContainerBannerTitle>{title}</C.ContainerBannerTitle>
          <C.ContainerBannerDesc>{description}</C.ContainerBannerDesc>
          <C.ContainerBannerArrows>
            <C.ContainerBannerArrowsReturn onClick={arrowReturn}>
              {"<"}
            </C.ContainerBannerArrowsReturn>
            <C.ContainerBannerArrowsNext onClick={arrowNext}>
              {">"}
            </C.ContainerBannerArrowsNext>
          </C.ContainerBannerArrows>
        </C.ContainerContent>
      </C.Banner>
    </C.Container>
  );
};
