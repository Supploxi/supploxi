exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed.' }) };
  }

  const { MAILCHIMP_API_KEY, MAILCHIMP_LIST_ID, MAILCHIMP_SERVER } = process.env;
  const { email } = JSON.parse(event.body || '{}');

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Please enter a valid email address.' }) };
  }

  const url = `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + Buffer.from('anystring:' + MAILCHIMP_API_KEY).toString('base64')
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed'
      })
    });

    const data = await response.json();

    if (response.ok) {
      return { statusCode: 200, body: JSON.stringify({ message: 'Subscribed successfully.' }) };
    }

    if (data.title === 'Member Exists') {
      return { statusCode: 409, body: JSON.stringify({ error: 'This email is already subscribed.' }) };
    }

    if (data.title === 'Invalid Resource') {
      return { statusCode: 400, body: JSON.stringify({ error: 'Please enter a valid email address.' }) };
    }

    return {
      statusCode: response.status,
      body: JSON.stringify({ error: data.detail || 'Subscription failed. Please try again.' })
    };
  } catch (err) {
    console.error('Mailchimp error:', err.message);
    return { statusCode: 500, body: JSON.stringify({ error: 'Server error. Please try again later.' }) };
  }
};
