import { SuperfaceClient } from '@superfaceai/one-sdk';
import 'dotenv/config';

const sdk = new SuperfaceClient();

async function getWeather() {
  const profile = await sdk.getProfile('weather/current-city');

  const result = await profile
    .getUseCase('GetCurrentWeatherInCity')
    .perform({
      city: 'Prague, Czech Republic',
      units: 'C'
    });

  return result.unwrap();
}


async function sendTweet(weather) {
  // Load the installed profile
  const profile = await sdk.getProfile('social-media/publish-post');

  // Use the profile
  const result = await profile
    .getUseCase('PublishPost')
    .perform({
      text: JSON.stringify(weather) + ' at ' + Date.now(),
    });

  return result.unwrap();
}

async function sendEmail(post) {
  const profile = await sdk.getProfile('communication/send-email');
  const result = await profile
    .getUseCase('SendEmail')
    .perform({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: 'Your post was published',
      text: post.url,
    });

  return result.unwrap();
}

async function run() {
  const weather = await getWeather()
  const post = await sendTweet(weather)
  await sendEmail(post)
  console.log(post)
}

try {
  await run();
} catch (err) {
  console.log(err);
}