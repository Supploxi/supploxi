const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// ── Mailchimp config ──
const MAILCHIMP_API_KEY  = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_LIST_ID  = process.env.MAILCHIMP_LIST_ID;
const MAILCHIMP_SERVER   = process.env.MAILCHIMP_SERVER;
const MAILCHIMP_URL      = `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`;

// ── Middleware ──
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// ── POST /subscribe ──
app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  try {
    const response = await fetch(MAILCHIMP_URL, {
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
      return res.json({ message: 'Subscribed successfully.' });
    }

    if (data.title === 'Member Exists') {
      return res.status(409).json({ error: 'This email is already subscribed.' });
    }

    if (data.title === 'Invalid Resource') {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }

    return res.status(response.status).json({ error: data.detail || 'Subscription failed. Please try again.' });
  } catch (err) {
    console.error('Mailchimp error:', err.message);
    return res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

// ── Fallback → index.html ──
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Supploxi running on http://localhost:${PORT}`);
});
