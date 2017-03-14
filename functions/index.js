var functions = require('firebase-functions');

// // Start writing Firebase Functions
// // https://firebase.google.com/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// })


'use strict';

const functions = require('firebase-functions');
const rp = require('request-promise');
const crypto = require('crypto');

/**
 * Webhook that will be called each time there is a new GitHub commit and will post a message to
 * Slack.
 */
exports.githubWebhook = functions.https.onRequest((req, res) => {
  const cipher = 'sha1';
  const signature = req.headers['x-hub-signature'];

  // TODO: Configure the `github.secret` Google Cloud environment variables.
  const hmac = crypto.createHmac(cipher, functions.config().github.secret)
      // The JSON body is automatically parsed by Cloud Functions so we re-stringify it.
      .update(JSON.stringify(req.body, null, 0))
      .digest('hex');
  const expectedSignature = `${cipher}=${hmac}`;

  // Check that the body of the request has been signed with the GitHub Secret.
  if (signature === expectedSignature) {
    postToSlack(req.body.compare, req.body.commits.length, req.body.repository).then(() => {
      res.end();
    }).catch(error => {
      console.error(error);
      res.status(500).send('Something went wrong while posting the message to Slack.');
    });
  } else {
    console.error('x-hub-signature', signature, 'did not match', expectedSignature);
    res.status(403).send('Your x-hub-signature\'s bad and you should feel bad!');
  }
});

/**
 * Post a message to Slack about the new GitHub commit.
 */
function postToSlack(url, commits, repo) {
  return rp({
    method: 'POST',
    // TODO: Configure the `slack.webhook_url` Google Cloud environment variables.
    uri: functions.config().slack.webhook_url,
    body: {
      text: `<${url}|${commits} new commit${commits > 1 ? 's' : ''}> pushed to <${repo.url}|${repo.full_name}>.`
    },
    json: true
  });
}