import {render, screen, cleanup, fireEvent, getByTestId} from "@testing-library/react"
import {useState, useEffect} from "react"

afterEach(() => {
    cleanup();
})

function UserDetailsForm (){

    // Form Values
    const [firstName, setFirstName] = useState("")
    const [firstNameValid, setFirstNameValid] = useState(false)
    const [lastName, setLastName] = useState("")
    const [lastNameValid, setLastNameValid] = useState(false)
    const [email, setEmail] = useState("")
    const [emailValid, setEmailValid] = useState(false)
    const [phone, setPhone] = useState("")
    const [phoneValid, setPhoneValid] = useState(false)
    const [submitDisabled, setSubmitDisabled] = useState(true)

    const changeFirstName = (event) => {
        const firstNameInput = event.target.value
        setFirstName(firstNameInput)

        const firstNameValidTest = /^[A-Za-z]+$/.test(firstNameInput) && firstNameInput.length >= 2

        setFirstNameValid(firstNameValidTest)

    }

    const changeLastName = (event) => {
        const lastNameInput = event.target.value
        setLastName(lastNameInput)

        const lastNameValidTest = /^[A-Za-z]+$/.test(lastNameInput) && lastNameInput.length >= 2

        setLastNameValid(lastNameValidTest)
    }

    const changeEmail = (event) => {
        const emailInput = event.target.value
        setEmail(emailInput)

        const emailValidTest = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(emailInput)

        setEmailValid(emailValidTest)
    }

    const changePhone = (event) => {
        const phoneInput = event.target.value
        setPhone(phoneInput)

        const phoneValidTest = phoneInput.length >= 10
        const phoneValidFormatTest = /^\d{3}-\d{3}-\d{4}$/g.test(phoneInput)

        if(phoneValidTest && phoneValidFormatTest) {
            setPhoneValid(phoneValidTest)
        }
    }

    const handleSubmit =(event) => {
        event.preventDefault()
    }

    useEffect(() => {
        if(firstNameValid && lastNameValid && phoneValid && emailValid){
            setSubmitDisabled(false)
        }
    },[firstNameValid, lastNameValid, phoneValid, emailValid])



    return (
        <form onSubmit={handleSubmit} >
            <input data-testid="firstname-input" type="text" onChange={changeFirstName} name="first-name" id="confirm-first-name" placeholder="FirstName" autoComplete="on" required value={firstName} aria-label="First Name" />

            <input data-testid="lastname-input" type="text" onChange={changeLastName} name="last-name" id="confirm-last-name" placeholder="LastName" autoComplete="on" required value={lastName} aria-label="Last Name" />

            <input data-testid="email-input" type="email" onChange={changeEmail} name="email" id="confirm-email" placeholder="Email Address" autoComplete="on" required value={email} aria-label="Email Address" />

            <input data-testid="phone-input" type="tel" onChange={changePhone} name="phone" id="confirm-phone" placeholder="Phone Number  (Format: 123-456-7890)" autoComplete="on" required value={phone} aria-label="Phone Number"/>


            <button data-testid="submit-button" disabled={submitDisabled} >
                <h2>Confirm</h2>
            </button>

        </form>
    )
}

test("Should enabled the submit button", () => {
    render(<UserDetailsForm />)
    const firstNameInput = screen.getByTestId("firstname-input")
    const lastNameInput = screen.getByTestId("lastname-input")
    const emailInput = screen.getByTestId("email-input")
    const phoneInput = screen.getByTestId("phone-input")
    const submitButton = screen.getByTestId("submit-button")

    fireEvent.change(firstNameInput, {target:{value: "Lejon"}})
    fireEvent.change(lastNameInput,{target:{value: "Lewis"}})
    fireEvent.change(emailInput,{target:{value: "emailname@gmail.com"}})
    fireEvent.change(phoneInput,{target:{value: "123-457-7890"}})

    expect(firstNameInput.value).toBe("Lejon")
    expect(lastNameInput.value).toBe("Lewis")
    expect(phoneInput.value).toBe("123-457-7890")
    expect(emailInput.value).toBe("emailname@gmail.com")
    expect(submitButton).not.toBeDisabled()
})

test("Should disable the submit button", () => {
    render(<UserDetailsForm />)
    const firstNameInput = screen.getByTestId("firstname-input")
    const lastNameInput = screen.getByTestId("lastname-input")
    const emailInput = screen.getByTestId("email-input")
    const phoneInput = screen.getByTestId("phone-input")
    const submitButton = screen.getByTestId("submit-button")

    fireEvent.change(firstNameInput, {target:{value: "L"}})
    fireEvent.change(lastNameInput,{target:{value: "L"}})
    fireEvent.change(emailInput,{target:{value: "emailname@.com"}})
    fireEvent.change(phoneInput,{target:{value: "1234577890"}})

    expect(firstNameInput.value).toBe("L")
    expect(lastNameInput.value).toBe("L")
    expect(phoneInput.value).toBe("1234577890")
    expect(emailInput.value).toBe("emailname@.com")
    expect(submitButton).toBeDisabled()
})