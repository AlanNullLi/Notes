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

    /*If you use arrow functions throughout your document, you do not need to use .bind(this). 
    Using arrow functions will reduce amount of lines you have to write / improve readability.
    */
    this.addNote = this.addNote.bind(this);
    this.handleTitleInput = this.handleTitleInput.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.editTitle = this.editTitle.bind(this);
    this.editNote = this.editNote.bind(this);
  }

  //For example, make this an arrow function like you did with removeNote
  addNote(e) {
    e.preventDefault();
    const newNote = {
      title: this.state.currentTitle,
      text: this.state.currentText,
      currentTime: Date.now()
    };
    if (newNote.title !== '') {
      //I like how you created newList
      const newList = [...this.state.noteList, newNote];
      this.setState({
        noteList: newList,
        currentTitle: '',
        currentText: ''
      })
    }
  }
  
  //Remove console.logs in the finished product
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
    //Great use of filter
    /*Suggestion: give newNotes a more descriptive name so that we know what's happening within newNotes.
    Think about how within newNotes we're removing a note, shortening the notes list, etc.
    */
    const newNotes = this.state.noteList.filter(
      note => note.title !== key
    );
    this.setState({ noteList: newNotes })
  }
  editTitle(newTitle, key) {
    //Another way to write this (not necessarily preferred but just so you're aware) is const {noteList} = this.state
    //Useful if you want to multiple items out of state like const {noteList, currentTitle} = this.state
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
        {/* <h1 className="Header">Alan's Note Taking App</h1> */}
        <div className="Notepad" >
          <Form id="add-form" >
            <div className="InputTitle">
              <Input
                type="text"
                placeholder="Title Here"
                value={this.state.currentTitle}
                onChange={this.handleTitleInput}
                maxLength={30}
              />
            </div>
            <div className="InputNote">
              <Input.TextArea
                placeholder="notes here"
                value={this.state.currentText}
                onChange={this.handleTextInput}
                autoSize={{ maxRows: 6 }}
              />
            </div>
            <div className="ButtonNote">
              <Button onClick={this.addNote} type="submit">Add note</Button>
            </div>
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

/*On your note about randomizing colors, I would actually recommend against this if you're talking about making each individual
note a different color from the others in the list. Color should be used sparingly and with meaning. You could
change the color of notes if, for example, a user wanted to group notes together and to denote difference across
groups set a color on a group. But if there is no meaning behind changing the color, it is preferred we leave it
uniform.*/

//randomize colors of note
//maybe add a change color button

export default App;
