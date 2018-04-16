// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

//solo se copia el json de firebase 
export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyAT3hlSaJy8WdkHqIq38U04pqzyYEfKvdc",
    authDomain: "angular-primera-clase.firebaseapp.com",
    databaseURL: "https://angular-primera-clase.firebaseio.com",
    projectId: "angular-primera-clase",
    storageBucket: "",
    messagingSenderId: "1045321035477"
  }
};
