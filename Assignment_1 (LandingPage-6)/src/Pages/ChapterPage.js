import React from "react";
import Chapter from "../Components/ChapterPage_Components/Chapter";
import ChapterCards from "../Components/ChapterPage_Components/ChapterCards";
import { chapterCardData } from "../Components/Data/data";

const ChapterPage = () => {
  return (
    <>
      <Chapter />
      <ChapterCards chapterCardData={chapterCardData} />
    </>
  );
};

export default ChapterPage;
