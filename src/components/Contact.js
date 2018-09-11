import React from 'react';

//who we are page:::
const Contact = () => {
  return (
    <section id="About" class="about">
      <h2>Contact Us!</h2>
      <form>
        <input type="text" />
        <input type="text" />
      </form>

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
