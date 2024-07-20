const express = require('express');
const cors = require('cors');
const moment = require('moment-timezone');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/time', (req, res) => {
  const currentTime = new Date().toLocaleTimeString();
  res.json({ time: currentTime });
});

app.get("/timezones", (req, res) => {
  const timeZones = moment.tz.names();
  res.json(timeZones);
});
app.get("/timezones", (req, res) => {
  const timeZones = moment.tz.names();
  res.json(timeZones);
});

app.listen(9000, () => {
  console.log('Server is running on port 9000');
});
