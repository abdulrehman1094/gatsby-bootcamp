import React from 'react'

import Layout from "../components/layout"

const ContactPage = () => {
    return (
        <Layout>
            <h1>Contact Us</h1>
            <p>
                The best way to reach me is via Email.
                rehman.dev01@gmail.com
            </p>
            <div class="container">
     <form>
     <label for="fname">First Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>

    <label for="lname">Last Name</label>
    <input input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

    <input type="submit" value="Submit"></input>
     </form>
</div>  
        </Layout>
    )
}

export default ContactPage