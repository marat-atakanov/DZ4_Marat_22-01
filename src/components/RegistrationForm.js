import React from "react";

export default class RegistrationForm extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            name: "",
            number: "",
            date: "",
            invalid: ""
        }

        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeNumber = this.handleChangeNumber.bind(this)
        this.handleChangeDate = this.handleChangeDate.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChangeName(event) {
        this.setState({
            name: event.target.value
        })
    }
    handleChangeNumber(event) {
        this.setState({
            number: event.target.value
        })
    }
    handleChangeDate(event) {
        this.setState({
            date: event.target.value
        })
    }

    handleSubmit(event) {
        const regExp = /^\+996 [0-9]{3} [0-9]{2}-[0-9]{2}-[0-9]{2}$/
        if (regExp.test(this.state.number) || this.state.number === ""){
            this.setState({
                invalid: ""
            })
            alert("Name: " + this.state.name + "     Number: " + this.state.number + "     Date: " + this.state.date)
            console.log(this.state.name, this.state.number, this.state.date)
            event.preventDefault()
        }else{
            this.setState({
                invalid: "Неправильный формат"
            })
            event.preventDefault()
        }
    }

    render() {
        return(
            <form className="form" onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        <span className="name">ФИО:</span>
                        <input className="input" placeholder="Shishkebek Sashlykov" type="text" onChange={this.handleChangeName}/>
                    </label>
                </div>
                <div>
                    <label>
                        <span className="number">НОМЕР:</span>
                        <input className="input" placeholder="+996 777 77-77-77" type="text" onChange={this.handleChangeNumber}/>
                        <span className="invalid">{this.state.invalid}</span>
                    </label>
                </div>
                <div>
                    <label>
                        <span className="date">ДАТА:</span>
                        <input className="input" type="date" onChange={this.handleChangeDate}/>
                    </label>
                </div>
                <input className="submit" type="submit" value="отправить"/>
            </form>
        )
    }
}