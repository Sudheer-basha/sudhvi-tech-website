# SUDHVI TECH — Google Sheets & Instant Email Notification Setup

This zero-cost integration ensures that every time a student registers via `/enroll` or sends an inquiry via `/contact`:
1. **Google Sheet / Excel Sync**: A new row is automatically added to your Google Sheet with the student's name, email, phone, college, course, and message.
2. **Instant Email Alert**: An instant, beautifully formatted email is delivered immediately to **`ksudheerbasha@gmail.com`**.
3. **Excel Export**: You can download your Google Sheet as an `.xlsx` Excel file anytime with `File > Download > Microsoft Excel (.xlsx)`.

---

## 3-Minute Setup Guide

### Step 1: Create Your Google Sheet
1. Open [Google Sheets](https://sheets.google.com) in your browser.
2. Click **Blank spreadsheet (+)**.
3. Name the spreadsheet: **`SUDHVI TECH - Registrations & Inquiries`**.

---

### Step 2: Paste the Apps Script Code
1. In the Google Sheets menu, click **Extensions** > **Apps Script**.
2. A new tab will open with a code editor (`Code.gs`).
3. Delete any default code inside `Code.gs`.
4. Open [`google-apps-script.js`](./google-apps-script.js) from this folder, copy all code, and paste it into `Code.gs`.
5. Click the **Save** icon (Floppy disk icon or `Ctrl + S`).

---

### Step 3: Deploy as Web App
1. Click the blue **Deploy** button in the top-right corner > select **New deployment**.
2. Click the **Gear icon (⚙️)** next to "Select type" and choose **Web app**.
3. Configure the fields:
   - **Description**: `SUDHVI TECH Form Handler`
   - **Execute as**: `Me (ksudheerbasha@gmail.com)`
   - **Who has access**: `Anyone` *(Crucial so website visitors can submit)*
4. Click **Deploy**.
5. Click **Authorize access** when prompted:
   - Choose your Google account (`ksudheerbasha@gmail.com`).
   - Click **Advanced** > Click **Go to Untitled (unsafe)** > Click **Allow**.
6. Google will provide a **Web App URL** ending in `/exec`.
   *(Example: `https://script.google.com/macros/s/AKfycby.../exec`)*
7. **Copy this Web App URL**.

---

### Step 4: Add the URL to Your Website & Netlify
1. In your local `.env` file (or `sudhvi-tech-website/.env`):
   ```env
   VITE_GOOGLE_SHEET_URL=https://script.google.com/macros/s/YOUR_COPIED_ID/exec
   GOOGLE_SHEET_URL=https://script.google.com/macros/s/YOUR_COPIED_ID/exec
   ```
2. When deploying to Netlify:
   - Go to your **Netlify Dashboard** > select your site.
   - Go to **Site configuration** > **Environment variables**.
   - Add a new variable:
     - **Key**: `GOOGLE_SHEET_URL`
     - **Value**: `https://script.google.com/macros/s/YOUR_COPIED_ID/exec`
   - Add another variable:
     - **Key**: `VITE_GOOGLE_SHEET_URL`
     - **Value**: `https://script.google.com/macros/s/YOUR_COPIED_ID/exec`

---

## Netlify Native Email Notifications (Bonus)
Netlify also has built-in free email notifications:
1. In Netlify Dashboard, navigate to **Site configuration** > **Forms**.
2. Under **Form notifications**, click **Add notification** > **Email notification**.
3. Select **Email to address**: enter `ksudheerbasha@gmail.com`.
4. Select form: **Any form** (or select both `contact` and `enrollment`).
5. Click **Save**.

Now you will have redundant real-time notifications: both directly from Netlify and stored permanently in your Google Sheet & Excel!
