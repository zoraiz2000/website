import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({ ref, className }) => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState(''); // State for success/error messages
  const [statusType, setStatusType] = useState(''); // State for message type: 'success' or 'error'

  // Function to clear the status message after a delay
  const clearMessageAfterDelay = () => {
    setTimeout(() => {
      setStatusMessage('');
      setStatusType('');
    }, 10000); // Message will disappear after 10 seconds
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Get form values
    const formData = new FormData(form.current);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const message = formData.get('message');

    // Validate fields
    if (!name || !email || !message) {
      setStatusMessage('All fields are required.');
      setStatusType('error');
      clearMessageAfterDelay();
      return;
    }

    emailjs
      .sendForm('service_fmpcbc5', 'template_m3q3fcs', form.current, {
        publicKey: 'KsiunZxKW3AljTtGr',
      })
      .then(
        () => {
          setStatusMessage('Message successfully sent!');
          setStatusType('success');
          clearMessageAfterDelay();
        },
        (error) => {
          setStatusMessage('Failed to send the message. Please try again.');
          setStatusType('error');
          clearMessageAfterDelay();
          console.error('FAILED...', error.text);
        },
      );

    // Clear the form fields after submission
    form.current.reset();
  };

  return (
    <div ref={ref} className={`${className}`}>
      <div className="mb-24 font-poppins text-4xl md2:text-6xl">
        <span className="block text-white font-extrabold">Let's</span>
        <span className="block text-blue-500 font-extrabold">Connect</span>
        <hr className="my-3 border-stone-50/30 w-[90%]"></hr>
        <form ref={form} onSubmit={sendEmail} className="relative z-10">
          {/* Flex container for Name and Email side by side */}
          <div className="flex flex-col md:flex-row gap-2 md2:gap-6">
            {/* Name Input */}
            <div className="flex-1">
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                className="w-full p-2 rounded-lg bg-[rgb(53,52,51)] text-white-500 text-sm border border-gray-600 hover:border-white duration-300 ease-in-out"
              />
            </div>

            {/* Email Input */}
            <div className="flex-1">
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                className="w-full p-2 rounded-lg bg-[rgb(53,52,51)] text-white-500 text-sm border border-gray-600 hover:border-white duration-300 ease-in-out"
              />
            </div>
          </div>

          {/* Message Input */}
          <div>
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              className="w-full mt-4 md2:mt-8 mb-4 p-2 rounded-lg bg-[rgb(53,52,51)] text-white-500 text-sm border border-gray-600 hover:border-white duration-300 ease-in-out"
            />
          </div>

          {/* Submit Button */}
          <input
            type="submit"
            value="Send"
            className="flex mx-auto py-2 px-6 bg-[rgb(10,102,194)] border border-transparent hover:border-white text-sm text-white font-bold rounded-3xl cursor-pointer transition duration-200"
          />
        </form>

        {/* Status Message */}
        {statusMessage && (
          <div
            className={`mt-2 text-center text-sm ${
              statusType === 'success' ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {statusMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
