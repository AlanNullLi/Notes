import React from 'react';
import './ListNotes.css'
import { Input, Form, Button } from 'antd'
import FlipMove from 'react-flip-move';

class ListNotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const list = this.props.noteList;
        const listNotes = list.map(note => {
            return <div className="Note">
                <Form id="noteCard">
                    <div className="NoteTitle">
                        <Input
                            type="text"
                            value={note.title}
                            onChange={(e) => { this.props.editTitle(e.target.value, note.title) }}
                            maxLength={30}
                        />
                    </div>
                    <div>
                        <Input.TextArea
                            value={note.text}
                            onChange={(e) => { this.props.editNote(e.target.value, note.title) }}
                            autoSize={{ minRows: 10, maxRows: 10 }}
                        />
                    </div>
                    <Button onClick={(e) => { this.props.removeNote(note.title) }} >Remove Note</Button>
                </Form>
                {/* <Card
                    title={note.title}
                    style={{ width: 300 }}
                    extra={<button onClick={() => this.props.removeNote()}>Remove</button>}
                >
                    <p>{note.text}</p>
                </Card> */}
            </div>
        })
        return (
            <div className="List">
                <FlipMove duration={300} easing="ease-in-out">
                    {listNotes}
                </FlipMove>
            </div>
        )
    }
}

export default ListNotes;