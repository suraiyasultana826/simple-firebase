/**
 * 1. visit: console.firebase.google.com
 * 2.create project(skip google analytics)
 * 3.register app (create config)
 * 4.install fire base : npm install firebase
 * 5.add config file to your project
 * 6. Danger: do not publish or make firebase config to public by pushing them to github.
 * 7. Visit : Go to docs > build > authentication > web > get started 
 * 8. export app from the firebase.config.js file: export default app
 * 9. Login .jsx : import getAuth from firebase/auth
 * 10. create const auth = getAuth(app)
 * 11. import googleAuthProvider and create a new provider 
 * 12. use signInWithPopUp and pass auth and provider
 * 13.activate sign-in method (google, facebook, github, etc.)
 * 
 */