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
    <section id="Contact" class="about">
      <h2>Contact Us!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
        veritatis eius nihil possimus vel reprehenderit officia dignissimos,
        maiores quod necessitatibus non quae, commodi, ad consequatur unde illum
        eum minus quibusdam?
      </p>

      <Form>
        {formApi => (
          <form onSubmit={formApi.submitForm} id="form1" className="mb-4">
            <label htmlFor="hello">Hello World</label>
            <Text field="hello" id="hello" validate={validate} />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        )}
      </Form>

      <h2>Customer Support</h2>
      <ul>
        <li>Phone: 1-800-111-1111</li>
        <li>
          Email:{' '}
          <a href="mailto:customersupport@rocknbox.com">
            customersupport@rocknbox.com
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
