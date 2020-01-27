import './App.css';

import { Button, Form, FormControl } from 'react-bootstrap';

import AgeStats from './AgeStats';
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newDate: '',
            birthday: '2002-03-20',
            showStats: false,
        }
    }

    changeBirthday() {
        if (this.state.newDate === '') return
        
        this.setState({ 
            birthday: this.state.newDate,
            showStats: true
        });
    }

    render() {
        return(
            <div className="App">
                <Form inline>
                    <h2>Input Your Birthday!</h2>
                    
                    <FormControl 
                        type="date"
                        onChange={ event => this.setState({ newDate: event.target.value }) }
                    />

                    {' '}
                    
                    <Button onClick={() => this.changeBirthday()}>Submit</Button>

                    { this.state.showStats && (
                        <div className="fade age-stats">
                            <AgeStats date={this.state.birthday} />
                        </div>
                    ) }
                </Form>
            </div>
        );
    }
}

export default App;