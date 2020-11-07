import admin = require('firebase-admin');
import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
});

// Take the text parameter passed to this HTTP endpoint and insert it into 
// Cloud Firestore under the path /messages/:documentId/original
exports.addMessage = functions.https.onRequest(async (req, res) => {
    // Grab the text parameter.
    const original = req.query.text;
    // Push the new message into Cloud Firestore using the Firebase Admin SDK.
    const writeResult = await admin.firestore().collection('messages').add({ original: original });
    // Send back a message that we've succesfully written the message
    res.json({ result: `Message with ID: ${writeResult.id} added.` });
});

exports.updateBoxPosition = functions.https.onRequest((req, res) => {
    const screenHeight = req.query.screenHeight as string;
    const screenWidth = req.query.screenWidth as string;
    const size = 50;

    const posX = Math.random() * (parseInt(screenWidth) - size);
    const posY = Math.random() * (parseInt(screenHeight) - size);

    res.json({ posX: posX, posY: posY })
})