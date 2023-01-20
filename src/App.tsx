import React, {useMemo} from 'react';
import SelectContainer from "./containers/select";
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

const App = () => {
  const options = {
    settings: useMemo(() => ({
      title: 'Язык',
      placeholder: 'Выберите язык',
    }), []),
    select: useMemo(() => ([
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
    ] as IOptions), []),
  }

  return (
    <SelectContainer multi={true}
                     showIcon={true}
                     options={options.select}
                     title={options.settings.title}
                     placeholder={options.settings.placeholder}/>
  );
};

export default React.memo(App);
