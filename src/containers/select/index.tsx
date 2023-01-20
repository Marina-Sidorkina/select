import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import React, {useCallback, useEffect, useMemo, useState} from "react";
import {setMulti, setOptions, addTag, deleteTag} from "../../store/selectSlice";
import {IOption, IOptions} from "../../App";
import Select from "../../components/select";
import Tag from "../../components/tag";
import Control from "../../components/control";
import Dropdown from "../../components/dropdown";
import Item from "../../components/item";
import Failure from "../../components/failure";
import Placeholder from "../../components/placeholder";

const SelectContainer = (
  props: {
    multi: boolean,
    showIcon: boolean,
    options: IOptions,
    title: string;
    placeholder: string;
  }) => {
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
  }, [props.multi, props.options, dispatch]);

  const callbacks = {
    // Открытие и закрытие dropdown
    onControlButtonClick: useCallback(() => {
      setIsOpened((value) => !value);
    }, []),
    // Изменение состояния чекбокса элемента (добавление и удаление тега)
    onItemChange: useCallback((item: IOption, value: boolean) => {
      if (value && tags.findIndex(tag => tag.id === item.id) === -1) {
        dispatch(addTag(item));
      } else if (!value && tags.findIndex(tag => tag.id === item.id) !== -1) {
        dispatch(deleteTag(item.id));
      }
    }, [tags, dispatch]),
    // Поиск по элементам
    onSearch: useCallback((value: string) => {
      setSearchValue(value);
    }, []),
    // Удаление выбранного тега
    onTagClose: useCallback((id: string) => {
      dispatch(deleteTag(id));
    }, [dispatch]),
  };

  // Отфильтрованные по значению строки поиска элементы
  const filteredItems = useMemo(() => {
    return options
        .filter(item => item.value.toLowerCase().startsWith(searchValue.toLowerCase()))
        .map(({id, value, src}) => (
            <Item key={id}
                  id={id} value={value}
                  src={src} onChange={callbacks.onItemChange}
                  tags={tags} showIcon={props.showIcon}/>
        ));
  }, [searchValue, options, tags, props.showIcon, callbacks.onItemChange]);

  // Элементы выбранных тегов
  const tagsElements = useMemo(() => {
    return tags.map(tag => (
        <Tag key={tag.id} value={tag.value} id={tag.id} onClick={callbacks.onTagClose}/>
    ));
  }, [tags, callbacks.onTagClose]);

  return (
      <Select title={props.title}>
        <Control onClick={callbacks.onControlButtonClick} isOpen={isOpened}>
          {tags.length
            ? tagsElements
            :  <Placeholder value={props.placeholder}/>
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

export default React.memo(SelectContainer);
