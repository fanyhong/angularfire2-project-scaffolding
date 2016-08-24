[View in English](https://github.com/fanyhong/angularfire2-scaffolding/blob/master/README.md "View in English")

# Angular2(RC5) & Firebase(Angularfire2) Scaffolding (unofficial)
> `Angular2(RC5)` + `Firebase(Angularfire2)` 조합 프로젝트를 만들때 사용할 수 있는 프로젝트 뼈대 파일 입니다. 그 외
 `routes` & `firebase Goole authentication` & `firebase database` 관련 짧은 예제 코드가 구현되어 있습니다.

구성
- Angular2 (RC5) : https://github.com/angular/angular.io
- Angular-CLI (beta11) : https://github.com/angular/angular-cli
- Angularfire2 (3.3): https://github.com/angular/angularfire2

___

### 데모
https://angularfire2scaffoling.firebaseapp.com

### 데모 화면
![alt](https://firebasestorage.googleapis.com/v0/b/angularfire2scaffoling.appspot.com/o/angularfire2_scaffoling_snapshot.png?alt=media&token=94b5c6f4-2c73-454e-b53b-3519f7af1f60)

---

### 0. 사전 설치 항목

#### Node 6.0+
`Angular-CLI@webpack.beta11` 에서 사용하는 webpack 은 `node 6.0+` 이상을 요구 합니다. 
http://www.nodejs.org 에서 다운 가능합니다..

#### NPM 3.0+
`Angular-CLI@webpack.beta11` 는 `NPM 3.0+` 이상을 요구 합니다.
```bash
npm install -g npm@latest
```

#### Typescript 2.0.0+
`Angular-CLI@webpack.beta11` 는 `Typescript 2.0.0+` 이상을 요구 합니다.
```bash
# typesctipt@2.0.0+ 이 설치 됩니다.
npm install -g typescript@next
# typings 를 설치합니다.
npm install -g typings
```

#### Angular-CLI beta11 (support RC5)
```bash
npm install -g angular-cli@webpack
```
> `typescript version` 관련 에러가 발생할 수 있습니다, 그러나 `Angular-CLI issue` 이기 때문에 일단 무시하고 진행합니다.


Angular-CLI 참조문서: https://github.com/angular/angular-cli


#### Firebase 설정
1. 이 어플리케이션이 `Firebase` 에 접속하기위해서는 `앱과 연결 가능한 Firebase 관련 정보(apiKey 같은)` 가 필요합니다. 
2. 만약 `Firebase 계정`을 가지고 있지 않다면, https://firebase.google.com/ 에서 계정을 생성합니다.
3. 계정이 생성되고 나면 `firebase project` 를 생성합니다. 그러면 `앱과 연결 가능한 Firebase 관련 정보(apiKey 같은)`를 얻을 수 있습니다.
이 것은 `/app/firebaseconfig.ts`를 설정하는데 필요합니다.

Firebase 참조문서: https://firebase.google.com/docs/web/setup

---

### 1. 설치

1. 다운로드 혹은 클론

2. npm 패키지 설치
```bash
# 프로젝트 폴더 안에서 입력합니다
npm install
# node-gyp 관련 에러가 발생하는 경우는 --no-optional 로 설치합니다
npm install --no-optional 
```

3. typings 초기화
```bash
# typings.json 이 생성됩니다.
typings init
```

### 2. Firebase 설정
1. 파일 `/app/firebaseconfig.sample.ts` 이름을 `/app/firebaseconfig.ts`로 변경합니다.

2. `앱과 연결하기 위한 Firebase 관련 정보(apiKey 같은)` 를 `/app/firebaseconfig.ts` 파일에 넣습니다.

```js
// /app/firebaseconfig.ts
export class FirebaseConfig {
   public static get CONFIG_DATA(): any {
        return ({
            apiKey: "<해당키값을 넣습니다>",
            authDomain: "<해당키값을 넣습니다>",
            databaseURL: "<해당키값을 넣습니다>",
            storageBucket: "<해당키값을 넣습니다>"
        });
    }
}
```

### 3. 실행
```bash
ng serve
```
 
Angular-CLI 참조문서: https://github.com/angular/angular-cli

---


