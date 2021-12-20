import React, {Component} from 'react';
import './PersonalInfo.css';

class PersonalInfo extends Component {
  constructor() {
    super();
    this.state = {
      characterName: '',
      playerName: '',
      species: '',
      talent: '',
      speciality: '',
      classLvl:'',
      classLvl2: '',
      classLvl3: '',
      gender: '',
      age: '',
      height: '',
      weight: '',
      eyes: '',
      hair: ''
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <section className='personal-info'>
        <h2>Personal Information:</h2>
        <form className = 'personal-info-form'>
          <div className='form-style'>
            <label for='characterName'>Character Name:</label>
            <input type='text' name='characterName' placeholder='Character Name' value={this.state.characterName} onChange={event => this.handleChange(event)}/>
          </div>
          <div className='form-style'>
            <label for='playerName'>Player Name:</label>
            <input type='text' name='playerName' placeholder='Player Name' value={this.state.playerName} onChange={event => this.handleChange(event)}/>
          </div>
          <div className='form-style'>
            <label for='species'>Species:</label>
            <input type='text' name='species' placeholder='Species' value={this.state.species} onChange={event => this.handleChange(event)}/>
          </div>
          <div className='form-style'>
            <label for='talent'>Talent:</label>
            <input type='text' name='talent' placeholder='Talent' value={this.state.talent} onChange={event => this.handleChange(event)}/>
          </div>
          <div className='form-style'>
            <label for='speciality'>Speciality:</label>
            <input type='text' name='speciality' placeholder='Speciality' value={this.state.speciality} onChange={event => this.handleChange(event)}/>
          </div>
          <div className='form-style'>
            <label for='classLvl'>Class/Level:</label>
            <input type='text' name='classLvl' placeholder='First Class and Level' value={this.state.classLvl} onChange={event => this.handleChange(event)}/>
          </div>
          <div className='form-style'>
            <label for='classLvl2'>Class/Level:</label>
            <input type='text' name='classLvl2' placeholder='Second Class and Level' value={this.state.classLvl2} onChange={event => this.handleChange(event)}/>
          </div>
          <div className='form-style'>
            <label for='classLvl3'>Class/Level:</label>
            <input type='text' name='classLvl3' placeholder='Third Class and Level' value={this.state.classLvl3} onChange={event => this.handleChange(event)}/>
          </div>
          <div className='form-style'>
            <label for='gender'>Gender:</label>
            <input type='text' name='gender' placeholder='Gender' value={this.state.gender} onChange={event => this.handleChange(event)}/>
          </div>
          <div className='form-style'>
            <label for='age'>Age:</label>
            <input type='number' name='age' min='0' value={this.state.age} onChange={event => this.handleChange(event)}/>
          </div>
          <div className='form-style'>
            <label for='height'>Height:</label>
            <input type='text' name='height' placeholder='height' value={this.state.height} onChange={event => this.handleChange(event)}/>
          </div>
          <div className='form-style'>
            <label for='weight'>Weight:</label>
            <input type='text' name='weight' placeholder='Weight' value={this.state.weight} onChange={event => this.handleChange(event)}/>
          </div>
          <div className='form-style'>
            <label for='eyes'>Eyes:</label>
            <input type='text' name='eyes' placeholder='Eyes' value={this.state.eyes} onChange={event => this.handleChange(event)}/>
          </div>
          <div className='form-style'>
            <label for='hair'>Hair:</label>
            <input type='text' name='hair' placeholder='Hair' value={this.state.hair} onChange={event => this.handleChange(event)}/>
          </div>
        </form>
      </section>
    )
  }
}

export default PersonalInfo;