import React from 'react';
import './App.css';
import ListNotes from './ListNotes';
import { Input, Button, Form } from 'antd';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteList: [],
      currentTitle: '',
      currentText: ''
    };

    this.addNote = this.addNote.bind(this);
    this.handleTitleInput = this.handleTitleInput.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.editTitle = this.editTitle.bind(this);
    this.editNote = this.editNote.bind(this);
  }

  addNote(e) {
    e.preventDefault();
    const newNote = {
      title: this.state.currentTitle,
      text: this.state.currentText,
      currentTime: Date.now()
    };
    if (newNote.title !== '') {
      const newList = [...this.state.noteList, newNote];
      this.setState({
        noteList: newList,
        currentTitle: '',
        currentText: ''
      })
    }
  }
  handleTitleInput(e) {
    console.log("hi")
    this.setState({
      currentTitle: e.target.value
    })
  }
  handleTextInput(e) {
    console.log("hi")
    this.setState({
      currentText: e.target.value
    })
  }
  removeNote = (key) => {
    const newNotes = this.state.noteList.filter(
      note => note.title !== key
    );
    this.setState({ noteList: newNotes })
  }
  editTitle(newTitle, key) {
    const list = this.state.noteList
    list.map(note => {
      if (note.title === key) {
        note.title = newTitle
      }
    });
    this.setState({
      noteList: list
    })
  }
  editNote(newText, key) {
    const list = this.state.noteList
    list.map(note => {
      if (note.title === key) {
        note.text = newText
      }
    });
    this.setState({
      noteList: list
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Alan's Note Taking App</h1>
        <div className="Notepad" >
          <Form id="add-form" >
            <Input
              type="text"
              placeholder="Title Here"
              value={this.state.currentTitle}
              onChange={this.handleTitleInput}
            />
            <Input.TextArea
              placeholder="notes here"
              value={this.state.currentText}
              onChange={this.handleTextInput}
            />
            <Button onClick={this.addNote} type="submit">Add note</Button>
          </Form>
        </div>

        <div>
          <ListNotes
            noteList={this.state.noteList}
            removeNote={this.removeNote}
            editTitle={this.editTitle}
            editNote={this.editNote}>
          </ListNotes>
        </div>

      </div>
    )
  }
}

//randomize colors of note
//maybe add a change color button

export default App;