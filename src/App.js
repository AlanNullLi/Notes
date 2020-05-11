import React, { Component } from 'react';
import './App.css';
import { Input } from 'antd';

const { TextArea } = Input;
//can use input as the actual notecard component too 
//unless there is a better card component
//set the default as what is in state already
//then when they press enter they can just see the new stuff 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteList: []
    };
  }

  addNote = (tit, not) => {
    var d = new Date();
    this.setState(prevState => {
      var newNote = { title: tit, notes: not, time: d.toLocaleString() }
      return { ...prevState.noteList, newNote }
    });
  }
  removeNote = (tit) => {
    const newNotes = this.state.noteList.filter(
      note => note.title !== tit
    );
    this.setState(prevState => {
      return { noteList: newNotes }
    });
  }

  render() {
    //use form instead for this part
    return (
      <div className="inputText">
        <div><TextArea autoSize={{ minRows: 1, maxRows: 2 }} maxLength="38" /></div>
        <div><TextArea onPressEnter={value => this.addNote(value, value)} allowClear={true} /></div>
      </div>
    )
  }
}

export default App;