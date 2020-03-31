import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";


class App extends React.Component<any, any> {

  state = {videos: [], selectedVideo: null};


  onTermSubmit = async (term: any) => {
    console.log(term);

    const response = await youtube.get("/search", {
      params: {
        part      : "snippet",
        maxResults: 5,
        key       : "AIzaSyCUh83VOoQahMmUAVoqvE6z89NdSQUJ4ng",
        q         : term
      }
    });
    this.setState({
      videos       : response.data.items,
      selectedVideo: response.data.items[0],
    });

    console.log(response);
  };

  onVideoSelect = (video: any) => {
    this.setState({selectedVideo: video})
  };

  render() {
    return (
      <div className = {"ui container"}>
        <SearchBar onFormSubmit = {this.onTermSubmit}/>
        <div className = {"ui row"}>
          <div className = {"eleven wide column"}>
            <VideoDetail video = {this.state.selectedVideo}/>
          </div>
          <div className = {"five wide column"}>
            <VideoList
              onVideoSelect = {this.onVideoSelect}
              videos = {this.state.videos}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;