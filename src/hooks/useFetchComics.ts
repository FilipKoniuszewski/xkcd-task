import { useState, useEffect } from "react";
import axios from "axios";

import { Comic } from "../types/types";

const fetchComic = async (id: number): Promise<Comic> => {
  const response = await axios.get(`https://xkcd.com/${id}/info.0.json`);
  return {
    month: response.data.month,
    num: response.data.num,
    link: response.data.link,
    year: response.data.year,
    news: response.data.news,
    safe_title: response.data.safe_title,
    transcript: response.data.transcript,
    alt: response.data.alt,
    img: response.data.img,
    title: response.data.title,
    day: response.data.day,
  };
};

export const useFetchComics = () => {
  const [comics, setComics] = useState<Comic[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentComicId, setCurrentComicId] = useState<number | null>(null);

  const fetchComics = async (startId: number, count: number) => {
    const comicPromises = [];
    for (let i = 0; i < count; i++) {
      comicPromises.push(fetchComic(startId - i));
    }
    return await Promise.all(comicPromises);
  };

  useEffect(() => {
    const initializeComics = async () => {
      try {
        const currentComicResponse = await axios.get(
          "https://xkcd.com/info.0.json"
        );
        const currentComicId = currentComicResponse.data.num;
        setCurrentComicId(currentComicId);

        const comicsData = await fetchComics(currentComicId, 8);
        setComics(comicsData);
      } catch (error) {
        console.error("Error fetching comics:", error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeComics();
  }, []);

  const fetchMoreComics = async () => {
    if (currentComicId === null) return;

    try {
      const newComics = await fetchComics(currentComicId - comics.length, 8);
      setComics((prevComics) => [...prevComics, ...newComics]);
    } catch (error) {
      console.error("Error fetching more comics:", error);
    }
  };

  return { comics, isLoading, fetchMoreComics };
};
