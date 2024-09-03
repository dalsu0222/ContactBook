import { useState, useEffect } from "react";
import "./css/App.css";
import InputEl from "./components/InputEl";
import SelectEl from "./components/SelectEl";
import SearchCon from "./components/SearchCon";
import List from "./components/List";

// 로컬스토리지 연동 구현
const validateName = (name) => /^[가-힣]{2,}$/.test(name);
const validatePhone = (phone) => /^010-\d{4}-\d{4}$/.test(phone);

function App() {
  // const [list, setList] = useState([
  //   {
  //     id: 1,
  //     name: "김OO",
  //     phone: "010-0000-0000",
  //     group: "가족",
  //     memo: "가족입니다.",
  //   },
  //   {
  //     id: 2,
  //     name: "이OO",
  //     phone: "010-1111-1111",
  //     group: "친구",
  //     memo: "친구입니다.",
  //   },
  //   {
  //     id: 3,
  //     name: "박OO",
  //     phone: "010-2222-2222",
  //     group: "회사",
  //     memo: "회사입니다.",
  //   },
  //   {
  //     id: 4,
  //     name: "최OO",
  //     phone: "010-3333-3333",
  //     group: "기타",
  //     memo: "기타입니다.",
  //   },
  // ]);
  const [contactList, setContactList] = useState([]);
  // const [groupList, setGroupList] = useState([
  //   "가족",
  //   "친구",
  //   "회사",
  //   "스터디",
  // ]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [groupList, setGroupList] = useState([]);
  const [group, setGroup] = useState("");
  const [memo, setMemo] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
  });

  // 연락처와 그룹 데이터 로드
  useEffect(() => {
    const savedList = localStorage.getItem("contactList");
    console.log(savedList);
    if (savedList) {
      setContactList(JSON.parse(savedList));
    } else {
      setContactList([]);
    }
  }, []);
  useEffect(() => {
    const savedGroupList = localStorage.getItem("groups");
    let groupsToUse;

    if (savedGroupList) {
      groupsToUse = JSON.parse(savedGroupList);
      if (groupsToUse.length === 0) {
        groupsToUse = ["가족", "친구", "회사", "스터디"];
      }
    } else {
      groupsToUse = ["가족", "친구", "회사", "스터디"];
    }

    setGroupList(groupsToUse);
    setGroup(groupsToUse[0]);
    localStorage.setItem("groups", JSON.stringify(groupsToUse));
  }, []);

  // 연락처 변동 시 로컬스토리지에 반영
  useEffect(() => {
    if (contactList.length > 0)
      localStorage.setItem("contactList", JSON.stringify(contactList));
  }, [contactList]);
  // 조직 변경 시 로컬스토리지에 반영
  useEffect(() => {
    if (groupList.length > 0) {
      localStorage.setItem("groups", JSON.stringify(groupList));
    }
  }, [groupList]);

  const checkNotValidation = (name, phone) => {
    const nameError = validateName(name)
      ? ""
      : "이름은 한글로 두 글자 이상이어야 합니다.";
    const phoneError = validatePhone(phone)
      ? ""
      : "전화번호는 010-0000-0000 형식이어야 합니다.";
    setErrors({
      name: nameError,
      phone: phoneError,
    });
    return nameError || phoneError;
  };

  const initInput = () => {
    setName("");
    setPhone("");
    setGroup(groupList[0] || "가족");
    setMemo("");
  };

  const saveContact = () => {
    if (checkNotValidation(name, phone)) return;

    const newId =
      contactList.length > 0 ? contactList[contactList.length - 1].id + 1 : 1;
    const newContact = {
      id: newId,
      name: name,
      phone: phone,
      group: group,
      memo: memo,
    };

    // 연락처 업데이트
    setContactList([newContact, ...contactList]);

    initInput();
  };

  const deleteItem = (id) => {
    // 연락처 목록에서 삭제할 항목을 필터링
    const updatedList = contactList.filter((item) => item.id !== id);
    // 업데이트
    setContactList(updatedList);
    // 로컬스토리지에 업데이트된 목록을 저장
    localStorage.setItem("contactList", JSON.stringify(updatedList));
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // 검색어에 따라 필터링된 리스트
  let filteredList = contactList.filter(
    (item) =>
      item.name.includes(searchTerm) ||
      item.phone.includes(searchTerm) ||
      item.group.includes(searchTerm) ||
      item.memo.includes(searchTerm)
  );

  return (
    <>
      <main className="main">
        <h1>연락처 리스트</h1>
        <section className="inputCon">
          <InputEl
            title={"이름"}
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errors.name}
          />
          <InputEl
            title={"전화번호"}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            error={errors.phone}
          />
          <SelectEl
            value={group}
            onChange={(e) => setGroup(e.target.value)}
            groupList={groupList}
            setGroupList={setGroupList}
          />
          <InputEl
            title={"간단한기록"}
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
          />
          <button className="saveBtn" onClick={saveContact}>
            저장
          </button>
        </section>
        <section className="ListArea">
          <SearchCon
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSearch={handleSearch}
          />
          <ul className="listCon">
            {filteredList.map((item) => (
              <List key={item.id} item={item} deleteItem={deleteItem} />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
