import { useState } from "react";
import "../../css/GroupModal.css";

export default function GroupModal({ groupList, setGroupList, onClose }) {
  const [newGroup, setNewGroup] = useState("");

  const addGroup = () => {
    if (newGroup && !groupList.includes(newGroup)) {
      setGroupList([...groupList, newGroup]);
      setNewGroup("");
    }
  };

  const deleteGroup = (groupToDelete) => {
    setGroupList(groupList.filter((group) => group !== groupToDelete));
  };

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <button className="closeBtn" onClick={onClose}>
          닫기
        </button>
        <h2>그룹 관리</h2>
        <ul className="groupList">
          {groupList.map((group) => (
            <li key={group} className="groupItem">
              {group}
              <button className="deleteBtn" onClick={() => deleteGroup(group)}>
                x
              </button>
            </li>
          ))}
        </ul>
        <div className="addGroupCon">
          <input
            type="text"
            placeholder="새 그룹 이름"
            value={newGroup}
            onChange={(e) => setNewGroup(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addGroup()}
          />
          <button className="addBtn" onClick={addGroup}>
            추가
          </button>
        </div>
      </div>
    </div>
  );
}
