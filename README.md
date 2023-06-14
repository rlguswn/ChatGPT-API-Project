# **여행 계획 생성기**
## **개요** 📋
>**프로젝트명** : 여행 계획 생성기 (Travel Plan Generator) <br>
**배포 링크** : (미배포)
**기획 및 제작** : 주기현<br>
**주요 기능** : 사용자 입력에 따라 임시 여행 계획을 자동으로 생성 <br>
**사용 툴** : HTML, JavaScript, CSS

**주제**
chatGPT API를 활용하여 여행 계획을 생성해 테이블 형태로 보여주는 서비스

## **프로젝트의 목표**
1. chatGPT API를 활용하여 인공지능 기능이 포함된 서비스를 구현한다.
2. HTML, CSS, JavaScript로 사용자 인터페이스를 구현한다.
3. HTML요소를 올바르게 작성하고 사용하는 방법을 습득한다.
4. CSS로 각 요소들의 디자인을 설정한다.
5. JavaScript 코드를 기능 단위로 분할하여 독립적인 모듈로 만든다.

## **사용 예시**
### 여행 계획 생성 기능
![사용예시](https://github.com/rlguswn/ChatGPT-API-Project/assets/95518318/97bd29d5-c761-4380-9ddc-313753e6a32c)
> 여행 계획 생성기에서 여행 출발일, 여행 도착일, 원하는 여행지, 특이사항을 입력하고 여행 계획 만들기 버튼을 클릭하면 약 20초정도의 로딩 후 생성된 여행 일정이 테이블 형태로 출력된다.

## **프로젝트 구조**
|   index.html
|   README.md
|
\---assets
    +---css
    |       style.css
    |
    +---img
    |       background.jpg
    |       iconGithub.png
    |       logo.png
    |
    \---js
            answer.js
            chatGPTAPI.js
            data.js
            loading.js
            question.js