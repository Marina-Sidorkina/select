import { v4 as uuidv4 } from 'uuid';
const russian = require("./icons/russian.jpg") as string;
const english = require("./icons/english.jpg") as string;
const spanish = require("./icons/spanish.jpg") as string;
const german = require("./icons/german.jpg") as string;
const italian = require("./icons/italian.jpg") as string;
const polish = require("./icons/polish.jpg") as string;

export interface IOption {
  id: string;
  value: string;
  src: string;
}

export type IOptions = Array<IOption>;

export const OPTIONS = [
  {
    id: uuidv4(),
    value: 'Русский',
    src: russian,
  },
  {
    id: uuidv4(),
    value: 'Английский',
    src: english,
  },
  {
    id: uuidv4(),
    value: 'Испансикй',
    src: spanish,
  },
  {
    id: uuidv4(),
    value: 'Немецкий',
    src: german,
  },
  {
    id: uuidv4(),
    value: 'Итальянский',
    src: italian,
  },
  {
    id: uuidv4(),
    value: 'Польский',
    src: polish,
  },
]
