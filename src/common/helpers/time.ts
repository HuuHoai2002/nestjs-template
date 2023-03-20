import { TIME } from '../constants/time';

export const toReadingTime = (content: string) => {
  return Math.floor(content.length / TIME.WORDS_PER_MINUTE);
};
