exports.handler = async (event) => {
  console.log('[subscribe] Function invoked, method:', event.httpMethod);

  if (event.httpMethod !== 'POST') {
    console.log('[subscribe] Rejected: method not allowed');
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed.' }) };
  }

  const { MAILCHIMP_API_KEY, MAILCHIMP_LIST_ID, MAILCHIMP_SERVER } = process.env;
  console.log('[subscribe] Env check — SERVER:', MAILCHIMP_SERVER, '| LIST_ID:', MAILCHIMP_LIST_ID, '| API_KEY set:', !!MAILCHIMP_API_KEY);

  const { email } = JSON.parse(event.body || '{}');
  console.log('[subscribe] Parsed email:', email);

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    console.log('[subscribe] Rejected: invalid email format');
    return { statusCode: 400, body: JSON.stringify({ error: 'Please enter a valid email address.' }) };
  }

  const url = `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`;
  console.log('[subscribe] Mailchimp URL:', url);

  try {
    console.log('[subscribe] Sending request to Mailchimp...');
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
    console.log('[subscribe] Mailchimp response status:', response.status);
    console.log('[subscribe] Mailchimp response body:', JSON.stringify(data));

    if (response.ok) {
      console.log('[subscribe] Success: email subscribed');
      return { statusCode: 200, body: JSON.stringify({ message: 'Subscribed successfully.' }) };
    }

    if (data.title === 'Member Exists') {
      console.log('[subscribe] Conflict: member already exists');
      return { statusCode: 409, body: JSON.stringify({ error: 'This email is already subscribed.' }) };
    }

    if (data.title === 'Invalid Resource') {
      console.log('[subscribe] Bad request: invalid resource');
      return { statusCode: 400, body: JSON.stringify({ error: 'Please enter a valid email address.' }) };
    }

    console.log('[subscribe] Other Mailchimp error:', data.title, data.detail);
    return {
      statusCode: response.status,
      body: JSON.stringify({ error: data.detail || 'Subscription failed. Please try again.' })
    };
  } catch (err) {
    console.error('[subscribe] Catch error:', err.message);
    return { statusCode: 500, body: JSON.stringify({ error: 'Server error. Please try again later.' }) };
  }
};
