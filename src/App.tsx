import React from 'react';
import './App.scss';
import {OPTIONS} from "./data";

function App() {

  return (
      <>
        <div className="select">
          <h3 className="select-title">Язык</h3>
          <div className="select-container">
            <div className="select-field select-field_closed">
              <div className="select-text">
                <div className="select-placeholder">Выберите язык</div>
                <div className="select-tag">
                  <span className="select-tag-text">Тест</span>
                  <button type="button" className="select-tag-button">
                    <svg width="8" height="8" viewBox="0 0 8 8">
                      <path className="select-tag_icon" d="M7.55231 0.447703C7.81591 0.711307 7.81591 1.13869 7.55231 1.4023L4.95475 4L7.55231 6.59771C7.79394 6.83935 7.81408 7.21861 7.61272 7.48318L7.55231 7.55231C7.2887 7.81591 6.86132 7.81591 6.59771 7.55231L4 4.95475L1.4023 7.55231C1.13869 7.81591 0.711307 7.81591 0.447703 7.55231C0.184099 7.2887 0.184099 6.86132 0.447703 6.59771L3.04525 4L0.447703 1.4023C0.206066 1.16066 0.18593 0.781401 0.387294 0.516826L0.447703 0.447703C0.711307 0.184099 1.13869 0.184099 1.4023 0.447703L4 3.04525L6.59771 0.447703C6.86132 0.184099 7.2887 0.184099 7.55231 0.447703Z" />
                    </svg>
                  </button>
                </div>
              </div>
              <button type="button" className="select-button">
                <svg width="10" height="6" viewBox="0 0 10 6">
                  <path className="select-button_icon"  d="M1.45442 4.81225C1.06285 5.11842 0.497225 5.0492 0.19105 4.65763C-0.115124 4.26607 -0.0459015 3.70044 0.345663 3.39427L4.4423 0.190996C4.76791 -0.0636034 5.22507 -0.0636926 5.55078 0.190779L9.65074 3.39405C10.0424 3.70007 10.1119 4.26567 9.80585 4.65735C9.49983 5.04904 8.93423 5.11848 8.54255 4.81246L4.99691 2.04228L1.45442 4.81225Z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="popup">
            <div className="search">
              <input type="search" className="search-field" placeholder="Поиск"/>
              <img className="search-icon" alt="icon"/>
            </div>
            <div className="list">
              {OPTIONS.map(({id, value, src}) => {
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
        </div>
      </>
  );
}

export default App;
