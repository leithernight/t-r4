import React from "react";

class Form extends React.Component {
    // render() {
    //     return <div>
    //         <input type="text" />
    //     </div>
    // }

    // state = {
    //     UserName: '',
    // }
    // handleChange = (event) => {
    //     this.setState({ UserName: event.target.value });
    // }
    // render() {
    //     const { UserName } = this.state;
    //     return <div>
    //         <input
    //             type="text"
    //             name="User_name"
    //             placeholder="User_name"
    //             value={UserName}
    //             onChange={this.handleChange}
    //             />
    //     </div>
    // }

    // state = {
    //     User_name: '',
    //     User_email: '',
    //     UserPassword: '',
    // }

    // handleChange = (event) => {
    //     this.setState({ [event.target.name]: event.target.value });
    // }

    // render() {
    //     const { User_name, User_email, UserPassword} = this.state;
    //     return <div>
    //         <input
    //             type="text"
    //             name="User_name"
    //             placeholder="User_name"
    //             value={User_name}
    //             onChange={this.handleChange}
    //             />
    //         <input
    //             type="email"
    //             name="User_email"
    //             placeholder="User_email"
    //             value={User_email}
    //             onChange={this.handleChange}
    //             />
    //         <input
    //             type="password"
    //             name="UserPassword"
    //             placeholder="UserPassword"
    //             value={UserPassword}
    //             onChange={this.handleChange}
    //             />
    //     </div>
    // }
    
    // state = {
    //     User_name: '',
    //     User_email: '',
    //     UserPassword: '',
    // }
    // handleChange = (event) => {
    //     this.setState({ [event.target.name]: event.target.value });
    // }
    // validateName = () => {
    //     if (this.state.User_name.length < 5) {
    //         alert('name error')
    //     }
    // }
    // validateEmail = () => {
    //     if (!/^[a-zA-Z0-9.!#$%&'*+/=^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[[a-zA-Z0-9-]+)*$/.test(this.state.User_email)) {
    //         alert('email error')
    //     }
    // }
    // validatePassword = () => {
    //     if (!/^[a-zA-Z0-9]+/.test(this.state.UserPassword)) {
    //         alert('password error')
    //     }
    // }
    // render() {
    //     const { User_name, User_email, UserPassword } = this.state;
    //     return <div>
    //         <input
    //             type="text"
    //             name="User_name"
    //             placeholder="User_name"
    //             value={User_name}
    //             onChange={this.handleChange}
    //             onBlur={this.validateName}
    //         />
    //         <input
    //             type="email"
    //             name="User_email"
    //             placeholder="User_email"
    //             value={User_email}
    //             onChange={this.handleChange}
    //             onBlur={this.validateEmail}
    //         />
    //         <input
    //             type="password"
    //             name="UserPassword"
    //             placeholder="UserPassword"
    //             value={UserPassword}
    //             onChange={this.handleChange}
    //             onBlur={this.validatePassword}
    //         />
    //     </div>
    // }

    // state = {
    //     username: '',
    //     useremail: '',
    //     userpass: '',
    //     msgtxt: '',
    //     msgselect: '',
    //     sub: false,
    //     gender: '',
    // }

    // handleChange = (event) => {
    //     this.setState({ [event.target.name]: event.target.value});
    // }
    // handleCheck = (event) => {
    //     this.setState({ [event.target.name]: event.target.checked});
    // }

    // render() {
    //     const { username, useremail, userpass, msgtxt, msgselect, sub } = this.state;
    //     return <div>
    //         <input type="text" name="username" placeholder="name" value={username} onChange={this.handleChange} />
    //         <input type="email" name="useremail" placeholder="email" value={useremail} onChange={this.handleChange} />
    //         <input type="password" name="userpass" placeholder="pass" value={userpass} onChange={this.handleChange} />
    //         <br />
    //         <textarea name="msgtxt" value={msgtxt} onChange={this.handleChange}></textarea>
    //         <br />
    //         <select name="msgselect" value={msgselect} onChange={this.handleChange}>
    //             <option value="1">1</option>
    //             <option value="2">2</option>
    //             <option value="3">3</option>
    //         </select>
    //         <br />
    //         <label>
    //             <input type="checkbox" name="sub" checked={sub} onChange={this.handleChange} />
    //             <span>text</span>
    //         </label>
    //         <br />
    //         <label>
    //             <input type="radio" name="gender" value="f" onChange={this.handleChange} />
    //             <span>f</span>
    //         </label>
    //         <label>
    //             <input type="radio" name="gender" value="m" onChange={this.handleChange} />
    //             <span>m</span>
    //         </label>
    //     </div>
    // }


    // state = {
    //     useremail: '',
    //     sub: false,
    // }
    // validateEmail = () => {
    //     if (!/^[a-zA-Z0-9.!#$%&'*+/=^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[[a-zA-Z0-9-]+)*$/.test(this.state.useremail)) {
    //         alert('err')
    //     }
    // }

    // handleChange = (event) => {
    //     this.setState({ [event.target.name]: event.target.value });
    // }
    // handleCheck = (event) => {
    //     this.setState({ [event.target.name]: event.target.checked });
    // }
    // render() {
    //     const { useremail, sub } = this.state;
    //     return <form>
    //         <input type="email" name="useremail" placeholder="email" value={useremail} onChange={this.handleChange} onBlur={this.validateEmail} />
    //         <br />
    //         <label>
    //             <input type="checkbox" name="sub" checked={sub} onChange={this.handleChange} />
    //             <span>text</span> 
    //         </label>
    //         <br />
    //         <button type="submit">send</button>
    //     </form>
    // }


    // state = {
    //     email: '',
    //     pi: ''
    // }
    // handleEmail = (event) => {
    //     this.setState({ email: event.target.value });
    // }
    // handleCheck = (event) => {
    //     this.setState({ pi: event.target.checked });
    // }
    // handleSubmit = () => {
    //     const isValidEmail = /^[a-zA-Z0-9.!#$%&'*+/=^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[[a-zA-Z0-9-]+)*$/.test(this.state.email);
    //     const isValidCheck = this.state.pi;

    //     if (!isValidEmail) {
    //         alert('err email')
    //         return
    //     }
    //     if (!isValidCheck) {
    //         alert('err info')
    //         return
    //     }
    //     this.setState({
    //         email: '',
    //         pi: false,
    //     })
    //     alert('good')
    // }
    // render() {
    //     const { email, pi } = this.state;
    //     return (
    //         <div>
    //             <input
    //                 type="email"
    //                 name="email"
    //                 placeholder="email"
    //                 value={email}
    //                 onChange={this.handleEmail}
    //             />
    //             <br />
    //             <label>
    //                 <input
    //                     type="checkbox"
    //                     name="pi"
    //                     checked={pi}
    //                     onChange={this.handleCheck}
    //                 />
    //                 <span>text</span>
    //             </label>
    //             <br />
    //             <button onClick={this.handleSubmit}></button>
    //         </div>
    //     )
    // }

    constructor() {
        super();
        this.state = {
            card: '',
            email: '',
        }
        this.cardref = React.createRef();
        this.emailref = React.createRef();
    }
    handleChange = (event) => {
        this.setState(() => ({ [event.target.name]: event.target.value }), () => {
            if (this.state.card.length === 16) {
                this.emailref.current.focus();
            }
        });
    }
    componentDidMount() {
        this.cardref.current.focus();
    }
    render() {
        const { card, email } = this.state;
        return <div>
            <input 
                type="text"
                name="card"
                placeholder="card"
                value={card}
                onChange={this.handleChange}
                ref={this.cardref}
            />   
            <input 
                type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={this.handleChange}
                ref={this.emailref}
            />  
        </div>
    }
}

export { Form }