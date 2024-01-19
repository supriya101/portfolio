import React, { useState } from 'react';

function Test() {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [submittedMessage, setSubmittedMessage] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setIsLoading(true);
  
      try {
        // Simulate message sending (replace with actual server communication)
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setMessage('Message sent successfully!');
        setSubmittedMessage(event.target.messageInput.value);
      } catch (error) {
        console.error('Error sending message:', error);
        setMessage('Error sending message!');
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="messageInput" placeholder="Enter your message" />
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </form>
        {message && (
          <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 10 }}>
            {message}
          </div>
        )}
      </div>
    );
}
export default Test