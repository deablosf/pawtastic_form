import React, { Component } from 'react'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            braker: true
        }
    }

    changeText = () => {
        this.setState({
            braker: true
          })
    }
    render() {
        return (
            <div className="main">

                <div className="sidestory">
                    <div id="partOne">
                        <p>We offer a range of preventative and wellness services - including exams, vaccinations, nutrition, and more. We can also treat your pet should they become sick from illness or injury. At this time, we do not see critical and/or emergency care, though there are several clinics we work with throughout the area that can provide these services if needed.</p>
                    </div>
                    <div id="partTwo">
                        <p>Preventative medicine is the key to keeping your pet happy and healthy. We believe that all pets should undergo a comprehensive wellness exam annually, which focuses on all body systems and helps us identify health conditions in your pet before they become difficult and expensive to treat. These exams enable us to create an overall picture of your pet's health status, combining aspects of your pet's at home routine and history with physical exam findings to create straightforward recommendations for your pet's continued wellbeing.
                        </p>
                        <img src="" alt=""/>
                    </div>

                </div>
              
              
                <div className="form">
                    <form action="">
                        <div className="title">
                            <h3>Tell us about K-9 Kin</h3>
                        </div>
                        <div className="name">
                            <label htmlFor="">Name</label>
                            <input id="" type="text" placeholder="Ladybird Randle"/>
                        </div>
                        
                        <div className="breed">
                            <label htmlFor="">Breed</label>
                            <input id="" type="text" placeholder="Boxer"/>
                        </div>
                        
                        <div className="birthday">
                            <label htmlFor="">Birthday</label>
                            <input type="number" placeholder="4"/>
                        </div>
                        
                        <div className="spayed">
                            <label htmlFor="">Spayed or neutered</label>
                            <input id="" type="text" placeholder="Yes or No"/>
                        </div>
                        
                        <div className="weight">
                            <label htmlFor="">Weight</label>
                            <input id="" type="text"placeholder=""/>
                        </div>
                        
                        <div className="gender">
                            <label htmlFor="">Gender</label>
                            <input id="gender" type="text" placeholder="Male or Female"/>
                        </div>
                        
                    </form>
                </div>
                
            </div>
        )
    }
}

export default Form