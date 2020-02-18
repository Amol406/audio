import React from 'react';

import logo from './logo.svg';

import './App.css';

import Box from'./Box';



import track1 from'./songs/1.wav';
import track2  from'./songs/2.wav';
import track3 from'./songs/3.wav';
import track4 from'./songs/4.wav';
import track5 from'./songs/5.wav';
import track6 from'./songs/6.wav';
import track7 from'./songs/7.mp3';
import track8 from'./songs/Camel3.mp3';
import track9 from'./songs/panther2.mp3';
import track10 from'./songs/10.wav';
import track11 from'./songs/11.mp3';
import track12 from'./songs/12.wav';
import track13 from'./songs/13.wav';
import track14 from'./songs/14.wav';
import track15 from'./songs/cheeta.mp3';
import track16 from'./songs/16.wav';


const songs= [
   track1,
    track2,
     strack3,
     track4,
      track5,
      track6,
      track7,
       track8,
        track9,
       track10,
         track11,
       track12,
       track13,
       track14,
       track15,
       track16,

    
]

function App() {
    return(
    <div className="main">
    <div className="section"> SOUND PAD  </div>
    {songs.map(songs=> {
        return <Box songs={songs}/>
    })}
    </div>
    
    
    
    )
}

export default App;
