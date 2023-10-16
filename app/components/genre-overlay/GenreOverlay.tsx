"use client";
import React, { useEffect, useState } from "react";
import "../../globals.css";
import "./GenreOverlay.css";
import NetTruyenGenres from "../../public/assets/genre-types/NetTruyen/tags.json";
import BaoTangTruyenGenres from "../../public/assets/genre-types/BaoTangTruyen/tags.json";
import CMangaGenres from "../../public/assets/genre-types/CManga/tags.json";
import YurinekoGenres from "../../public/assets/genre-types/Yurineko/tags.json";
import HentaiVNGenres from "../../public/assets/genre-types/HentaiVN/tags.json";
import LxMangaGenres from "../../public/assets/genre-types/LxManga/tags.json";
import SayHentaiGenres from "../../public/assets/genre-types/SayHentai/tags.json";
import { useGlobalContext } from "../../context/store";

type GenreOverlayProps = {
  onGenreSelect: (genre: number) => void;
};

const GenreOverlay: React.FC<GenreOverlayProps> = ({ onGenreSelect }) => {
  const [genres, setGenres] = useState<any>([]);
  const { selectedSource } = useGlobalContext();

  useEffect(() => {
    switch (selectedSource) {
      case "NetTruyen":
        setGenres(NetTruyenGenres);
        break;
      case "BaoTangTruyen":
        setGenres(BaoTangTruyenGenres);
        break;
      case "CManga":
        setGenres(CMangaGenres);
        break;
      case "Yurineko":
        setGenres(YurinekoGenres);
        break;
      case "HentaiVN":
        setGenres(HentaiVNGenres);
        break;
      case "LxManga":
        setGenres(LxMangaGenres);
        break;
      case "SayHentai":
        setGenres(SayHentaiGenres);
        break;
      default:
        break;
    }
  }, [selectedSource]);

  return (
    <div className="genre-wrapper bg-richBlack/60 backdrop-blur-[10px] rounded-3xl border-[1.5px] border-white/20 text-sm text-white/75 font-medium p-5">
      <div className="h-[422px] grid gap-x-[45px] gap-y-5 grid-cols-5 overflow-y-auto no-scrollbar">
        {genres.map((genre: any) => (
          <div
            key={genre.Id}
            className="genre-name"
            data-description={genre.Description}
            onClick={() => onGenreSelect(genre.Id)}
          >
            {genre.Name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreOverlay;
