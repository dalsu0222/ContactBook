<details>
<summary>📑 해야 할 일 (To-Do)</summary>

- [ ] 상태관리 라이브러리 적용(redux 또는 recoil) -> 공부도 같이...
- [ ] mongoDB 연결

</details>

<details>
<summary style="font-size: 24px;">👾 트러블 슈팅</summary>   
  
   1. 로컬 스토리지 데이터 초기화 문제

   - 로컬스토리지에 값이 새로고침 전 배열이 유지되지 못하고 빈 배열로 저장되는 문제 발생
   - 조건문을 통해 빈 배열이 로컬스토리지에 저장되는 것을 방지하여 해결
     ```javascript
     useEffect(() => {
       if (contactList.length > 0) {
         localStorage.setItem("contactList", JSON.stringify(contactList));
       }
     }, [contactList]);
     ```

2. 배포 시 repo 못찾는 문제

- commit 후 `npm run deploy` 명령어로 배포시도했는데, repo를 찾지못하는 문제 발생.
  
  ``` Error: Failed to get remote.origin.url (task must either be run in a git repository with a configured origin remote or must be configured with the "repo" option). ```
- origin 등록으로 해결
  
  ``` git remote add origin <your-repo-url> ```



# 연락처 관리 애플리케이션

이 프로젝트는 Vite로 생성한 React 기반의 연락처 관리 애플리케이션입니다.   
사용자는 이름, 전화번호, 그룹, 메모를 입력하여 연락처를 저장하고, 저장된 연락처를 조회하거나 검색할 수 있습니다.   
로컬 스토리지를 이용하여 데이터를 유지중입니다.

## 🔗배포 링크

해당 애플리케이션은 GitHub Pages를 통해 배포되었습니다. 아래 링크에서 애플리케이션을 직접 확인할 수 있습니다.   
[애플리케이션 바로가기](https://dalsu0222.github.io/ContactBook/)

## ⚙️주요 기능

- **연락처 추가**: 이름, 전화번호, 그룹, 간단한 메모를 입력하여 새로운 연락처를 추가할 수 있습니다.
- **그룹 관리**: 기본 제공되는 그룹(가족, 친구, 회사, 스터디) 외에도 새로운 그룹을 추가할 수 있습니다.
- **연락처 삭제**: 저장된 연락처를 삭제할 수 있습니다.
- **검색 기능**: 이름, 전화번호, 그룹, 메모를 기준으로 연락처를 검색할 수 있습니다.
- **반응형 디자인**: 다양한 화면 크기에서도 적절하게 표시되도록 반응형 디자인이 적용되었습니다.
- **로컬 스토리지 연동**: 브라우저의 로컬 스토리지를 사용하여 데이터가 유지됩니다.

## 📷사용 예시
### 연락처 리스트(메인) 화면
<img src="https://github.com/user-attachments/assets/54621a5f-fa90-47e3-8f29-c1c05a98abe8" alt="image" style="width: 50%;">   

### 그룹 추가 화면
<img src="https://github.com/user-attachments/assets/7570e9b1-3796-4115-b8a2-358e9cfb7a9e" alt="image" style="width: 50%;">   

### 상세보기 화면
<img src="https://github.com/user-attachments/assets/26216b52-91fd-480c-9dd3-e3f923f1bf95" alt="image" style="width: 50%;">   


## ⌨️ 설치 및 실행 방법

1. **리포지토리 클론**: 해당 리포지토리를 로컬 환경으로 클론합니다.
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. **의존성 설치**: 프로젝트의 의존성을 설치합니다.
   ```bash
    cd your-repo-name
    npm install
   ```

3. **개발 서버 실행**: 로컬 개발 서버를 시작합니다.
   ```bash
    npm run dev
   ```

