### MediCamp

A website where one can take medical treatment and training

Organizer Username : Sachiv
emai: sachivji@gmail.com
password: Aa1111

Features for users:

1. Available Camps : Various camps are shown here . User can enroll/join these camps easily. Soring and Searching options also provided
2. Payment: User can make payment for the choosen camps by Stripe.
3. Payment history: Here important informations about payment such as: total price paid, transaction id, camp Names and Payment Status are shown.
4. Analytics: Here the purchase informations are represented graphically.
5. Update profile: User can update his/her profile.
6. Review: Buyer can rate the service which will be shown in the review section of the website.

Features for Admin:

7. Create camp: Admin can create new camps.
8. Update & delete camp: Admin can delete or edit prevoius camps
9. Authrity: Admin has the authority to approve or decline camping requests from client.
10. Profile: Admin can update his/her profile.

### Getting started <br>

Go to - command prompt / powershell / terminal of your system and run these commands given bellow <br>

make sure `node` and `npm` slould be installed in your system

```
    git clone https://github.com/AsmShuvo/MediCamp---Client.git
    cd PROJECT_NAME
    npm install
```

Create a `.env.local` file to the root directory and paste this code given bellow

```
    VITE_apiKey = AIzaSyAhcX_pVt3QIDPwWsJ7_Tg5MEqLaqnOMGM
    VITE_authDomain = medicamp-a627f.firebaseapp.com
    VITE_projectId = medicamp-a627f
    VITE_storageBucket = medicamp-a627f.appspot.com
    VITE_messagingSenderId = 1044396647501
    VITE_appId = 1:1044396647501:web:80310cc9d46adb928d6804
    VITE_measurementId = G-8Z0HLZE1Y0
    VITE_imagebb_key = d73308e793f11dd230c5a6e49c7820aa
    VITE_payment_gateway_pk = pk_test_51POl5iP2wwN6asQHxkwM2nXL6zChNHm4vyuT27UjBlrzTBimZVyydbrEPpuq5d71isCKgXPXorQDYc8DrpjipN2E008ygNYR5k
```

Not type this command

```
    npm run dev
```

[Live Link](https://medicamp-a627f.web.app)
