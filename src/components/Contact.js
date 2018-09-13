import React from 'react';
import { Form, Text } from 'react-form';

const validate = value => ({
  error:
    !value || !/Hello World/.test(value)
      ? "Input must contain 'Hello World'"
      : null,
  warning:
    !value || !/^Hello World$/.test(value)
      ? "Input should equal just 'Hello World'"
      : null,
  success:
    value && /Hello World/.test(value)
      ? "Thanks for entering 'Hello World'!"
      : null
});

//who we are page:::
const Contact = () => {
  return (
    <section id="Contact" className="content">
      <div className="contact__grid">
        <div className="contactForm col">
          <h2>Contact Us!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
            veritatis eius nihil possimus vel reprehenderit officia dignissimos,
            maiores quod necessitatibus non quae, commodi, ad consequatur unde
            illum eum minus quibusdam?
          </p>

          <Form>
            {formApi => (
              <form onSubmit={formApi.submitForm} id="form1" className="mb-4">
                <ul className="contactForm__container">
                  <li>
                    <label htmlFor="contactForm__name">Name:</label>
                    <Text
                      field="Name"
                      id="contactForm__name"
                      validate={validate}
                    />
                  </li>
                  <li>
                    <label htmlFor="contactForm__email">Email:</label>
                    <Text
                      field="Email"
                      id="contactForm__email"
                      validate={validate}
                    />
                  </li>
                  <li>
                    <label htmlFor="contactForm__comment">Comments:</label>
                    <textarea
                      field="Comments"
                      id="contactForm__comment"
                      validate={validate}
                      rows="3"
                      cols="33"
                      maxlength="200"
                      wrap="hard"
                    />
                  </li>
                  <li>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </li>
                </ul>
              </form>
            )}
          </Form>
        </div>
        <div className="customerSupport col">
          <h2>Customer Support</h2>
          <ul className="customerSupport__container">
            <li>Phone: 1-800-111-1111</li>
            <li>
              Email:
              <a href="mailto:customersupport@rocknbox.com">
                customersupport@rocknbox.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
