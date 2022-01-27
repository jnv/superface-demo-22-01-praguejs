# Superface OneSDK Demo Jan 2022

This demo shows the setup with the following profiles:

- [wather/current-city](https://superface.ai/weather/current-city) with wttr.in and OpenWeatherMap (optional)
- [social-media/publish-post](https://superface.ai/social-media/publish-post) with Twitter
- [communication/send-email](https://superface.ai/communication/send-email) with Sendgrid and Postmark

## Setup

1. Install dependencies with `npm i`
2. Copy `.env.example` file to `.env`
3. In `.env` file fill in tokens for providers and adjust email addresses
  - `TWITTER_ACCESSTOKEN` requires a valid Twitter OAuth 2.0 access token with `tweet.write` scope, see [social-media-demo](https://github.com/superfaceai/social-media-demo) for complete setup with authorization flow
3. Run with `node index.mjs`
