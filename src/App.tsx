import React from 'react';
import './App.css';
import { TAppState } from 'types/AppTypes';

const BASE_URL = 'https://query1.finance.yahoo.com/v7/finance/download'

class App extends React.Component<{}, TAppState> {
  org = 'TSLA'
  url = `${BASE_URL}/${this.org}?period1=${0}&period2=${new Date()}&interval=1mo&events=history&includeAdjustedClose=true`;

  render() {
    return(
      <div></div>
    )
  }
}

export default App;
