import React, {Component} from 'react';
import SongList from '../Components/SongList.js'
import './Top20Box.css'

class Top20Box extends Component{
  constructor(props){
    super(props);
    this.state={
      songs:[]
    };
  }

  componentDidMount(){
    console.log("Mounted!!! STUFF!!");
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    const request = new XMLHttpRequest();
    request.open("GET", url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return(<p>the top 20 will go here</p>);
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({songs: data.feed.entry})
    });
    request.send();
  }

  render(){
    console.log("rendering top 20 box container");
    return(
      <div className="top-box">
      <SongList songs = {this.state.songs}/>
      </div>
      // <p>the top 20 will go here</p>
    )
  }


}

export default Top20Box;
