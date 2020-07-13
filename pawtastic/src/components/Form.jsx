import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <div className="main">

                <div className="sidestory">
                    <div>
                        <p>We offer a range of preventative and wellness services - including exams, vaccinations, nutrition, and more. We can also treat your pet should they become sick from illness or injury. At this time, we do not see critical and/or emergency care, though there are several clinics we work with throughout the area that can provide these services if needed.</p>
                        <img src="" alt=""/>
                    </div>
                    <div>
                        <p>Wellness Exams
                        Preventative medicine is the key to keeping your pet happy and healthy. We believe that all pets should undergo a comprehensive wellness exam annually, which focuses on all body systems and helps us identify health conditions in your pet before they become difficult and expensive to treat. These exams enable us to create an overall picture of your pet's health status, combining aspects of your pet's at home routine and history with physical exam findings to create straightforward recommendations for your pet's continued wellbeing.
                        </p>
                        <img src="" alt=""/>
                    </div>

                </div>
              
              
                <div className="form">
                    <form action="">
                        <label htmlFor="">Name</label>
                        <input id="" type="text" placeholder="Ladybird Randle"/>

                        <label htmlFor="">Image</label>

                        <label htmlFor="">Breed</label>
                        <input id="" type="text" placeholder=""/>

                        <label htmlFor="">Birthday</label>
                        <input type="number"/>

                        <label htmlFor="">Sex</label>

                        <label htmlFor="">Spayed or neutered</label>

                        <label htmlFor="">Weight</label>

                        <label htmlFor="">Any existing conditions and medications</label>

                        
                    </form>
                </div>
                
            </div>
        )
    }
}

export default Form