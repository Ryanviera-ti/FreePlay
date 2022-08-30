import * as C from "./styles";
import IconWindows from "../../assets/Img/iconWindows.png";
import IconBrowser from "../../assets/Img/iconBrowser.png";
import { useEffect, useState } from "react";
import { dataGames, getGames } from "../../data/api";
import { gamesFilterType } from "../types/CarouselType";
import { gameType } from "../types/GamesType";

export const RenderedGame = ({ value, platform, genre }: gamesFilterType) => {
  const [state, setState] = useState<gameType[]>([]);
  const [originalGames, setOriginalGames] = useState<gameType[]>([]);
  const [data, setData] = useState<gameType[]>([]);

  useEffect(() => {
    getGames(platform, genre).then((result) => {
      setOriginalGames(result);
    });
    dataGames().then((result) => {
      setState(result);
    });
  }, [platform, genre, originalGames, state]);

  useEffect(() => {
    if (value.length < 1 && originalGames.length < 1) {
      setData(state);
      return;
    }
    if (value.length > 0 && originalGames.length > 0) {
      const filterData = originalGames.filter((item) =>
        item.title.toLowerCase().includes(value)
      );
      setData(filterData);
      return;
    }
    if (originalGames.length > 0) {
      setData(originalGames);
      return;
    }

    const filterData = state.filter((item) =>
      item.title.toLowerCase().includes(value)
    );
    setData(filterData);
  }, [state, value, originalGames]);

  function platformIcon(platform: string) { 
    return platform === "PC (Windows)" ? IconWindows : IconBrowser; 
} 

  return (
    <C.Container>
      <C.ContainerContent>
        {data.map((item, index) => (
          <div key={index}>
            <C.ContainerLink
              href={item.game_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <C.ContainerCard>
                <C.ContainerCardImg>
                  <C.ContainerImg src={item.thumbnail} />
                </C.ContainerCardImg>
                <C.ContainerCardTitle>{item.title}</C.ContainerCardTitle>
                <C.ContainerCardDesc>
                  {item.short_description.substring(0, 55) + "..."}
                </C.ContainerCardDesc>
                <C.ContainerCardGenre>
                  <C.ContainerCardGenreSpan>
                    {item.genre}
                  </C.ContainerCardGenreSpan>
                  <C.ContainerCardGenreImg src={platformIcon(item.platform)} />
                </C.ContainerCardGenre>
              </C.ContainerCard>
            </C.ContainerLink>
          </div>
        ))}
      </C.ContainerContent>
    </C.Container>
  );
};
