<img src="./public/images/favicon.png" alt="Logo" title="TESTful API" align="right" height="60" />
<br>


# Budgetify App 

Manage your daily expenses 💸 at your fingertip. React App from Andrew's React Web Developer Course

### Installation

If you want to run the latest code from git, here's how to get started:

1. Clone the code:

        git clone https://github.com/theinhtut/budgetify.git
        cd budgetify

2. Install budgetify dependencies

        npm install

3. Create ".env.development" file under the root folder `budgetify/.env.development` with your own Firebase's credentials

        FIREBASE_API_KEY=XX
        FIREBASE_AUTH_DOMAIN=XX
        FIREBASE_DATABASE_URL=XX
        FIREBASE_PROJECT_ID=XX
        FIREBASE_STORAGE_BUCKET=XX
        FIREBASE_MESSAGING_SENDER_ID=XX
4. Build for production before getting start *(IMPORTANT)*

        npm run build:prod

5. Run

        npm start
   or

        node server/server.js

Once the server has started, you will see the following in your console.
```sh        
$ node server/server.js
Server is running on PORT 3000
```

## Running Budgetify App

Everything is fully setup and now it is good to go. You can go to `http://localhost:3000` to use Budgetify.  