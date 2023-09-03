test("DateSelected", () => {

    // render the App component
    render(<Calender />);

    // save the span in a variable
    const span = screen.getByTestId("date");

    // save the btn variable
    const btn = screen.getByTestId("selectedDate-5");

    // click the btn
    fireEvent.click(btn)

    // test assumption
    expected(span).toHaveTextContent("5")
})