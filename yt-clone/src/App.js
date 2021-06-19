//import './App.css';
import { Grid } from '@material-ui/core';
import React from 'react';
import youtube from './api/youtube';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
class App extends React.Component {
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {params:  {
          part: "snippet",
          maxResults: 5,
          key: "AIzaSyB7lviaSoFt68d0FrROmcSd-eHDH8kJqto",
          q: "searchTerm"
     }
  });
  console.log(response.data.items);
}
  
  render() {
    return (
      <div className="App">
        {/* <h1> Youtube Clone App </h1>       */}
        <Grid justify="center" container spacing={10}>
          <Grid item xs={12}>
            <Grid xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid xs={8}>
              <VideoDetail />
            </Grid>
            <Grid xs={4}>
              {/* VIDEO LIST */}
            </Grid>  
          </Grid> 
        </Grid>
      </div>
    );
  }


}

export default App;
