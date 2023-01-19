import React from 'react';
import './App.scss';
import {OPTIONS} from "./data";
import SelectContainer from "./containers/select";

const App = () => <SelectContainer multi={true} showIcon={true} options={OPTIONS}/>;

export default App;
