### Package란?

package: 완성된 프로그램

- 다른 패키지의 부품으로써 사용되는 package
    
    ```jsx
    $ var my = require('my-package'); 
    ```
    
- package 자체가 완제품으로써 사용되는 것
    
    ```jsx
    $ my-package
    ```

<br/><br/><br/>
### Package publish&install

![image](https://github.com/user-attachments/assets/0647eaea-cab0-4293-8dc1-f092c74d3885)


`npm publish` : 패키지를 **NPM registry** 라는 곳에 업로드를 시킴

`npm install` : 패키지를 다운로드

ex) 왼쪽 : 만든 패키지, 오른쪽 : 패키지를 사용할 프로젝트
![image](https://github.com/user-attachments/assets/d0d99b6a-d52d-47e3-a7c7-18fc84fdd806)


1. 부품으로써 사용
    ![image](https://github.com/user-attachments/assets/2bef749c-9a51-4d23-9779-61a99016a011)
    
    왼쪽 부품 이름이 @egoing/hi 라면, 오른쪽에서 `npm i @egoing/hi`를 통해 가져다가 쓸 수 있음
    
2. 완제품으로 사용
   ![image](https://github.com/user-attachments/assets/b80edaa8-8633-4399-a19f-cb6ef87b627c)
    
    say-hi-all.app.js라는 파일이 실제로 사용자들에게 사용될 때는,
    
    ![image](https://github.com/user-attachments/assets/81526c47-43d0-480f-bf3d-0d8355c8eca3)

    
    say-hi 라는 이름으로 사용됨
    
    ![image](https://github.com/user-attachments/assets/309e9129-4a77-40ca-808f-4defcbb1d0ae)

    package를 사용할 오른쪽 프로젝트에서 `npm i -g @egoing/hi` 를 통해 전역적으로 설치한 후에
    
    ![image](https://github.com/user-attachments/assets/285c8259-a3c2-48d1-89f6-1d34b8db3b7b)

    
    say-hi라고 입력하면, 정상적으로 패키지가 실행됨
    
<br/><br/><br/>
### Package 만들기

1. npm-producer 폴더 생성 후, `npm init` 을 통해 패키지 있다라고 선언

![image](https://github.com/user-attachments/assets/d8ff941c-d32c-4166-af87-2542ecf81564)

name

- 패키지 이름을 선언
- 인사를 하는 패키지를 만든다고 가정, 이름을 선언할 때는 앞에 @를 통해 스코프를 설정
- 스코프는 중복을 피하기 위해 사용. 보통 자신의 이름을 넣거나 자신이 만들고자 하는 앱의 이름 등을 사용

version

- 버전 설정

description

- package 설명

entry point

- 내 패키지를 다른 사람이 부품으로 가져다가 쓸 때 어떤 파일의 내용을 입구 파일로할지 결정

test command, git repository, keywords, author 생략

![image](https://github.com/user-attachments/assets/5c0039c0-a33c-46b2-924e-12721dbda2a7)


위와 같은 package.json이 생성됨

![image](https://github.com/user-attachments/assets/ddaea895-04be-4ae6-b720-42f4c110ceee)


main.js를 생성 후 위와 같이 작성하면, 다른 프로젝트에서 main.js를 required했을 때 export 뒤쪽의 값이 전달됨
<br/><br/><br/>
### Package 올리기

만든 패키지를 다른사람이 사용하도록 하기 위해서는 npm registry에 내 package를 업로드해야 함

![image](https://github.com/user-attachments/assets/cc40289f-9bd4-4bff-be95-a31aedb90f64)


먼저 npm.js 홈페이지에서 계정 생성

 

![image](https://github.com/user-attachments/assets/18aaf3cb-e1e2-41eb-8363-1f02ab66bd67)


`npm` 이라고 치면, 사용가능한 명령어들이 나옴

package를 누구나 사용가능하게 하고싶으면,

`npm publish —access public`

![image](https://github.com/user-attachments/assets/8d62785f-780f-4075-b33c-b7d9c85edc6d)


위 사진과 같은 에러가 발생 → `npm login`  필요

![image](https://github.com/user-attachments/assets/7a8bfaed-f1f3-41ea-93ee-874b704f0dc9)

입력 후 npmjs 페이지에서 로그인 후 돌아오면 위와 같이 로그인 되었다고 로그가 나옴

 

이후, `npm publish —access public`  이 명령어를 입력하면

![image](https://github.com/user-attachments/assets/78b47bcb-5403-4fb5-9b59-8fe9e24af02b)


위와 같이 404 에러가 나옴

![image](https://github.com/user-attachments/assets/723c78dd-4469-43d1-9402-3d6ebab6230e)
<br/>
npmjs의 내 계정 이름이 jiohjung98이어서 패키지 이름을 jiohjung/hi → jiojung98/hi로 바꾸고 다시 재시도해보았더니,

![image](https://github.com/user-attachments/assets/a1e9cc91-f420-42d7-8e27-3f2fa1f193f8)

위처럼 정상적으로 실행됨을 확인할 수 있었음

![image](https://github.com/user-attachments/assets/873fcf64-2485-447f-a0d5-773a6509200d)

이후 npm.js를 접속해보면 위 사진처럼 @jiohjung98/hi 패키지가 정상적으로 업로드되었음
<br/><br/><br/>
### Package 설치하기

![image](https://github.com/user-attachments/assets/8a9767ae-23fb-405d-8430-ae7457f0579e)

위에서 발행한 package를 사용할 새로운 프로젝트를 하나 생성(npm-consumer)

`npm init -y` 를 통해 package.json을 기본값으로 생성

![image](https://github.com/user-attachments/assets/bb35fc4a-fbc2-4d95-a62b-a7d71fb0d3c6)

`npm i @jiohung98/hi` 를 통해 package를 install하면

![image](https://github.com/user-attachments/assets/69b6f5d2-5b18-49e7-8549-0ebd817309ca)

package.json의 dependencies에 내가 생성한 package.json이 설치된 것을 확인할 수 있고

node_modules와 package-lock.json이 생성됨

![image](https://github.com/user-attachments/assets/e0c1daa2-c39c-4fe8-a3ce-61e7fe56bdcd)

이후 index.js를 생성하고 package를 불러온 후에

![image](https://github.com/user-attachments/assets/e1a734b9-af46-4532-8265-4426be20dbda)

`node index.js` 를 통해 package의 내용을 가져옴을 확인

<br/><br/><br/>
### Package 업데이트

![image](https://github.com/user-attachments/assets/aefb39ec-96ce-4c86-aebc-0ba2adffeaa0)

npm producer 프로젝트에서 main 내용을 변경한 후에

![image](https://github.com/user-attachments/assets/3bef6eec-9fb2-4991-bf96-0d9ca91af2e5)

package.json 버전을 꼭 업데이트해줘야 함

![image](https://github.com/user-attachments/assets/7bcbc4c6-ed1e-4079-b7b9-0be06ba19277)

이후, `npm publish` 를 통해 패키지를 업데이트 해줌

![image](https://github.com/user-attachments/assets/3d11ab0d-1caf-480a-8d7e-574ec42d228f)

npm-consumer 프로젝트에서 `npm outdated` 를 입력하면, 위 사진처럼 패키지의 현재 버전과 최신 버전을 확인할 수 있음

이 상황에서, `npm update` 를 하면 업데이트가 안됨(그대로 유지)

![image](https://github.com/user-attachments/assets/fded3d5f-6264-42de-8de2-46e88ad7a647)

이유는 아래처럼, 버전을 명시해뒀기 때문임

![image](https://github.com/user-attachments/assets/333aa7c2-ade1-4426-8397-df2a2311ad87)

![image](https://github.com/user-attachments/assets/0e1c5a80-3809-4684-88c2-9c5082fe52ae)


위처럼 패키지 버전에 `~` 를 넣으면, 두 번째 자리의 버전이 같은 범위에서 세 번째 자리는 가장 최신 버전을 채택한다는 의미를 가짐

[npm semantic version calculator](https://semver.npmjs.com/)

위 사이트에서 원하는 패키지 버전을 찾고 기호를 통해 범위가 어떻게 되는지 확인할 수 있음

![image](https://github.com/user-attachments/assets/0781e9b9-e347-4e68-bce8-778a938f1e06)


이후 npm update, npm outdated 를 통해 버전 업데이트 및 최신현황을 확인 가능

npm outdated 결과로 아무것도 나오지 않으면 업데이트가 이루어진 것

![image](https://github.com/user-attachments/assets/d41480eb-9dcd-4480-b427-29ce92e9597c)

업데이트된 패키지 결과가 잘 나오는 것을 확인할 수 있음

<br/><br/><br/>
### 완제품으로서의 Package 만들기

Command Line에서 명령어로써 내가 만든 package를 실행하도록 하는 것

CLI.js라는 파일을 많이 사용

![image](https://github.com/user-attachments/assets/3c3febdb-b3a4-416b-9ac1-1cd37fb7d3ad)

npm-producer 프로젝트에서 cli.js 생성 후, 위 사진처럼 입력

![image](https://github.com/user-attachments/assets/069d55dc-a8e1-43fe-9910-943ae89e6360)

`node cli.js`  → en의 내용이 출력

만약 한글을 출력하고 싶으면, cli.js에 greeting.en 을 greeting.ko로 바꿔야하는데 이걸 입력하는 기능으로 바꾸면 간편하지 않을까? → process.argv 활용

![image](https://github.com/user-attachments/assets/d60b6329-5c06-4f1f-a436-e29787275d54)

![image](https://github.com/user-attachments/assets/35db3ffb-29b4-4763-a525-7802a08b3123)

process.argv는 

```jsx
[
  '/Users/floyd/.local/share/fnm/node-versions/v22.14.0/installation/bin/node',
  '/Users/floyd/Desktop/npm-producer/cli.js'
]
```

이렇게 생긴 배열임을 확인할 수 있음

node 런타임이 첫 번째 원소, 두번째 원소는 우리가 실행중인 프로그램

만약 `node cli.js ko`  라고 작성하면,

![image](https://github.com/user-attachments/assets/68110d4f-60e2-4559-b5a5-c460841f74bc)

위처럼 3번째 원소가 우리의 입력값인 인자가 파라미터인 값인 ko가 출력됨을 확인할 수 있음
![image](https://github.com/user-attachments/assets/93326f4f-5625-400a-9579-aa745cfa9faa)
![image](https://github.com/user-attachments/assets/abcda284-59ee-45b4-9bcd-61118b1d6851)

process.argv의 2번째 index를 출력하는 코드를 작성, `node cli.js ko`  → ko가 출력됨을 확인

이 점에서 착안하여, 객체의 프로퍼티가 위치하는 곳에 배열 표기법 사용

![image](https://github.com/user-attachments/assets/79b5905c-4ab3-4107-bdfc-8c4008196cc2)
![image](https://github.com/user-attachments/assets/7b4c6ac3-e44e-4dfe-a4a5-821c7325c0a6)

이후 다음과 같이 출력할 수 있음

근데 실행할 때마다 앞에 node를 붙이는게 번거로워서 ./cli.js fr 를 입력하면 다음과 같이 나옴(Mac)
![image](https://github.com/user-attachments/assets/d33787c7-8824-49ac-bd02-93f0ca3f343d)


파일 권한을 확인
![image](https://github.com/user-attachments/assets/b7f3a3f6-81d6-4e0d-8ce9-0d1318d85f42)


앞 3자리 - 소유자(rw-) : read, write 권한 있음, excute 권한은 없음

소유자인 나는 실행 가능하게 바꾸고자 함

![image](https://github.com/user-attachments/assets/4f5bd745-a0af-44b5-b000-9c3ccb12b144)

chmod +ux cli.js → 실행 권한이 생긴 것을 확인할 수 있음

![image](https://github.com/user-attachments/assets/d0eea6b1-8952-40f2-9742-7472926b8625)

하지만 여전히 오류가 발생함

cli.js는 node.js의 파일임(js)

운영체제한테 그냥 이거 실행하라하면 안됨

node.js로 만들어졌으니까 node.js runtime 프로그램을 통해 얘를 실행시켜라 라고 명령해야 함
![image](https://github.com/user-attachments/assets/259a171c-cbb8-42ab-8392-e851e0b941e9)

`#!/usr/bin/env node` → 운영체제에게 이 파일은 node.js로 만든거니까 그걸로 실행시키라는 명령

![image](https://github.com/user-attachments/assets/5e82ed7a-d707-474b-99fa-5551f20cbe9a)
이후 실행이 잘 됨을 확인할 수 있음

이제, 다른 사람이 쓸 수 있게 해야 함

![image](https://github.com/user-attachments/assets/5f781b8a-6abf-4cb7-9188-d1aa4c03bf86)

package.json에 bin을 생성하고 아래처럼 입력

이 패키지를 설치한 사람이 say-hi라고 하면 cli.js 파일을 실행할 수 있다는 의미

```jsx
  "bin":{
    "say-hi":"./cli.js"
  },
```

![image](https://github.com/user-attachments/assets/a9e91f53-38a4-41bf-b524-970e39103116)

이후 바뀐 내용을 저장하고 버전을 수정한 후에 다시 publish


<br/><br/><br/>
### 완제품으로서의 Package 사용하기

사용자가 다른 패키지를 명령어로써 사용하는 방법에는 크게 3가지가 있음

1. 자신의 로컬 패키지(npm-consumer/package.json)에 설치 → nodemodules에 설치됨
2. 컴퓨터 어디에서든지 명령어를 통해 실행할 수 있게 전역적으로 설치
3. 설치를 하지 않고 패키지를 다운로드 받고 실행하고 삭제하는 1회성

[ 1번 방법 ]

![image](https://github.com/user-attachments/assets/59bf015a-f20d-44c2-8837-0ea5ba54e892)

npm-consumer 프로젝트에서 로컬 패키지로 설치하기 위해 npm update 실행

![image](https://github.com/user-attachments/assets/b7f0f230-abe2-4a71-90a3-b3691c03bb58)

이후 앞에서 작성했던 명령어를 실행하면 위처럼 정상적으로 출력됨을 확인할 수 있음
