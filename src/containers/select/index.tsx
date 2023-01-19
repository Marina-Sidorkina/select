import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import React, {useCallback, useEffect, useMemo, useState} from "react";
import {setMulti, setOptions} from "../../store/selectSlice";
import {IOption, IOptions} from "../../data";
import Select from "../../components/select";
import Tag from "../../components/tag";
import Control from "../../components/control";
import Dropdown from "../../components/dropdown";
import Item from "../../components/item";
import Failure from "../../components/failure";

const SelectContainer = (props: {multi: boolean, showIcon: boolean, options: IOptions}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useAppDispatch();

  const {options, tags} = useAppSelector(state => ({
    options: state.select.options,
    tags: state.select.tags,
  }));

  useEffect(() => {
    dispatch(setMulti(props.multi));
    dispatch(setOptions(props.options));
  }, [props.multi, props.options]);

  const callbacks = {
    onControlButtonClick: useCallback(() => {
      setIsOpened((value) => !value);
    }, []),
    onItemChange: useCallback((item: IOption) => {
      if (tags.findIndex(tag => tag.id === item.id) !== -1) {
        dispatch(setOptions(props.options));
      }
    }, [props.options, tags]),
    onSearch: useCallback((value: string) => {
      setSearchValue(value);
    }, []),
  };

  const filteredItems = useMemo(() => {
    return options
        .filter(item => item.value.toLowerCase().startsWith(searchValue.toLowerCase()))
        .map(({id, value, src}) => (
            <Item key={id} id={id} value={value} src={src} onChange={() => {}} tags={tags}/>
        ));
  }, [searchValue, options, tags]);

  return (
      <Select>
        <Control onClick={callbacks.onControlButtonClick} isOpen={isOpened}>
          {tags.length
            ?  <Tag value={"Тест"} onClick={() => {}}/>
            :  <div className="select-placeholder">Выберите язык</div>
          }
        </Control>
        {isOpened
          ? <Dropdown onChange={callbacks.onSearch} value={searchValue}>
              {filteredItems.length ? filteredItems : <Failure/>}
            </Dropdown>
          : null
        }
      </Select>
  );
}

export default SelectContainer;
