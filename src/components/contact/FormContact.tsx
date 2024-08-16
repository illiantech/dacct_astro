import "../../styles/contact/form.css";

const FormContact = () => {
  return (
    <form class="form-block">
      <div class="form-block--group-information">
        <h3>Information</h3>
        <p>
          <img
            loading="lazy"
            decoding="async"
            src="/icons/phone.svg"
            alt="phone-icon"
          />
          +1 203-913-5370
        </p>
        <p>
          <img
            loading="lazy"
            decoding="async"
            src="/icons/location.svg"
            alt="location-icon"
          />
          853 Fairfield Ave 2nd Bridgeport CT 06605
        </p>

        <p>
          <img
            loading="lazy"
            decoding="async"
            src="/icons/email.svg"
            alt="mail-icon"
          />
          contact@dacct.org
        </p>
      </div>
      <div class="form-block--group-inputs">
        <label for="name">Full name:</label>

        <input placeholder="John Doe" type="text" name="Name" />
        <p>Only alphabetic characters with a space between each word</p>
        <p>Mandatory field</p>

        <label for="email">Email:</label>

        <input placeholder="example@gmail.com" type="text" name="Email" />
        <p>Please enter a valid email address</p>
        <p>Mandatory field</p>

        <label for="phone">Phone:</label>

        <input type="text" name="Phone" placeholder="+1 (555) 123-45-67" />
        <p>Please Input a valid phone number</p>
        <p>Mandatory field</p>

        <label for="message">Message:</label>

        <textarea placeholder="Share your ideas" name="Message"></textarea>

        <p>ERROR: Incorrect data</p>
        <input type="submit" value="Send" />
        <p>Your form was successfully submitted</p>
      </div>
    </form>
  );
};

export default FormContact;
