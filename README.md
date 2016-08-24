[한국어로 보기](https://github.com/fanyhong/angularfire2-scaffolding/blob/master/README.ko.md "한국어로 보기")

# Angular2(RC5) & Firebase(Angularfire2) Scaffolding (unofficial)
> This is a scaffolding for `Angular2 & Firebase(Andgularfire2)` project.
And It includes some example codes (`routes` & `firebase Goole authentication` & `firebase database`).

Composed of
- Angular2 (RC5) : https://github.com/angular/angular.io
- Angular-CLI (beta11) : https://github.com/angular/angular-cli
- Angularfire2 (3.3): https://github.com/angular/angularfire2

___

### DEMO
https://angularfire2scaffoling.firebaseapp.com

### Snapshot
![alt](https://firebasestorage.googleapis.com/v0/b/angularfire2scaffoling.appspot.com/o/angularfire2_scaffoling_snapshot.png?alt=media&token=94b5c6f4-2c73-454e-b53b-3519f7af1f60)

---

### 0. Prerequisites

#### Node 6.0+
Webpack of `Angular-CLI@webpack.beta11` requires `node 6.0+`. 
You can download it from http://www.nodejs.org .

#### NPM 3.0+
`Angular-CLI@webpack.beta11` requires `NPM 3.0+`.
```bash
npm install -g npm@latest
```

#### Typescript 2.0.0+
`Angular-CLI@webpack.beta11` requires `Typescript 2.0.0+`.
```bash
# This will install typesctipt@2.0.0+
npm install -g typescript@next
# Install typings globally
npm install -g typings
```

#### Angular-CLI beta11 (support RC5)
```bash
npm install -g angular-cli@webpack
```
> You could get errors about `typescript version`, 
but you can ignore it because it is from `Angular-CLI issue`.

Angular-CLI Ref: https://github.com/angular/angular-cli


#### Firebase set up
1. It needs `your FirebaseApp-info including apiKey` to connect `your Firebase`
2. If you don't have `firebase account`, create it from https://firebase.google.com/
3. Make `your firebase project`, then you can get `your FirebaseApp-info including apiKey` in `your Firebase Console`.
It needs set the file `/app/firebaseconfig.ts`.

Firebase Ref: https://firebase.google.com/docs/web/setup

---

### 1. Install

1. Download or Clone

2. Install npm packages
```bash
# in the project folder
npm install
# if you got 'node-gyp error', then install node pakages again with '--no-optional'
npm install --no-optional 
```

3. Init typings
```bash
# This command will create typings.json
typings init
```

### 2. Firebase Sets Up
1. Rename `/app/firebaseconfig.sample.ts` to `/app/firebaseconfig.ts`

2. Put `your FirebaseApp-info like apiKey` into the file `/app/firebaseconfig.ts`

```js
// /app/firebaseconfig.ts
export class FirebaseConfig {
   public static get CONFIG_DATA(): any {
        return ({
            apiKey: "<your-key>",
            authDomain: "<your-project-authdomain>",
            databaseURL: "<your-database-URL>",
            storageBucket: "<your-storage-bucket>"
        });
    }
}
```

### 3. Run
```bash
ng serve
```
Angular-CLI Ref: https://github.com/angular/angular-cli

---


