import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import React, {useCallback, useEffect, useState} from "react";
import {setMulti, setOptions} from "../../store/selectSlice";
import {IOptions} from "../../data";
import Select from "../../components/select";
import Tag from "../../components/tag";
import Control from "../../components/control";

const SelectContainer = (props: {multi: boolean, showIcon: boolean, options: IOptions}) => {
  const [isOpened, setIsOpened] = useState(false);
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
  };

  return (
      <Select>
        <Control onClick={callbacks.onControlButtonClick} isOpen={isOpened}>
          {tags.length
              ?  <Tag value={"Тест"} onClick={() => {}}/>
              :  <div className="select-placeholder">Выберите язык</div>
          }
        </Control>
        <div className="popup">
          <div className="search">
            <input type="search" className="search-field" placeholder="Поиск"/>
            <img className="search-icon" alt="icon"/>
          </div>
          <div className="list">
            {options.map(({id, value, src}) => {
              return (
                  <div className="item" key={id}>
                    <div className="item-info">
                      <img className="item-icon" src={src} width="21" height="15" alt="flag"/>
                      <div className="item-title">{value}</div>
                    </div>
                    <div className="item-control">
                      <input className="item-check" type="checkbox" value={value} id={id}/>
                      <label htmlFor={id}></label>
                    </div>
                  </div>
              );
            })}
            <div className="item item_info">
              <div className="item-info">
                <div className="item-title">Поиск...</div>
              </div>
            </div>
          </div>
        </div>
      </Select>
  );
}

export default SelectContainer;
