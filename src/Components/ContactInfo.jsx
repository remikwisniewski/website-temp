import React from 'react'

function ContactInfo() {
    return (
        <div id='contact'> {/* link to index.CSS */}
            <h3>My email</h3>
            <div className='contact-input'>
                <input type='email' placeholder='rwisni736@gmail.com'/>
                <a href="#"> Contact me</a>

            </div>
        </div>
    )
}

export default ContactInfo
