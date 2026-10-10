# Gaurav Kumar Yadav — Static Portfolio + UPI Payment Page

This merged project is built with plain HTML, CSS and JavaScript. It does not use Flask or any Python backend, so it can be hosted on GitHub Pages.

## Files
- `index.html` — portfolio home page
- `payment.html` — UPI QR and bank transfer page
- `style.css`, `script.js` — portfolio styles and interactions
- `payment.css`, `payment-script.js`, `payment-config.js` — payment page assets/configuration
- `certificates/` — certificate PDFs
- `gaurav-profile.png` — profile image

## Configure before publishing
1. Open `payment-config.js`.
2. Replace the sample `displayName`, `upiId`, `accountHolder`, `accountNumber`, `ifsc`, and `branch` values with your own details, or leave placeholders until ready.
3. Remember: files in a public GitHub repository and hosted website can be viewed by anyone. Only publish bank details you are comfortable making public.
4. Test the QR using a UPI app and confirm the recipient name shown in the app before paying. The page cannot independently confirm payments.

## Run locally
Simply open `index.html` in a browser. For best results, use VS Code Live Server. The QR-code library is loaded from cdnjs, so internet access is needed for QR generation.

## Publish with GitHub Pages
1. Create a GitHub repository and upload all files in this folder to the repository root. `index.html` must be at the root, not inside another nested folder.
2. Open repository **Settings → Pages**.
3. Under Build and deployment, choose **Deploy from a branch**, branch `main`, folder `/(root)`, then Save.
4. After deployment, your portfolio will be at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`. Payment page: append `payment.html`.

## Contact form note
The contact form opens the visitor's default email app using `mailto:`. It does not send or store messages on a server.

## Payment note
This is a static payment information page, not a payment gateway. Payers authorize payments in their own UPI/banking app. Confirm receipt in your bank/UPI app; do not rely on screenshots. Never request or store a UPI PIN, OTP, or banking password.
