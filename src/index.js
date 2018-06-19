
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; // import the component from the js file
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'


const API_KEY = 'AIzaSyC9vJDT6m65UqKB-2Sw_0awxGU8bDkaKTA';

// Create a new component. This component should produce some HTML

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'perfect'}, (videos) => {
      this.setState({ videos });
    });

  };

  render(){
      return (
        <div>
          <SearchBar />
          <VideoDetail video={this.state.videos[0]}/>
          <VideoList videos={this.state.videos} />
        </div>
      );
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container') );