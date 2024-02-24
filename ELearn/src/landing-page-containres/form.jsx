import Button from "./button";
function Form() {
  return (
    <div className="div_form">
      <h2 className="form_h2">Log in to your account</h2>
      <form className="form">
        <ul className="form_ul">
          <li className="form_ul_li">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              placeholder="Elitesstudent@gmail.com"
              id="email"
              className="form_email from_element"
            />
          </li>
          <li className="form_ul_li">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              placeholder="Your password"
              id="password"
              className="form_pass from_element"
              required
            />
          </li>
          <li className="form_ul_li">
            <label htmlFor="roll">Sign in as</label>
            <br />
            <select id="roll" className="form_select from_element" required>
              <option value="" disabled selected>
                Select here
              </option>
              <option value="">Teacher</option>
              <option value="">student</option>
            </select>
          </li>
          <li className="form_ul_li">
            <Button text="Sign in" clas={"full_width display_block"} />
          </li>
        </ul>
      </form>
    </div>
  );
}
export default Form;