import { useState } from "react";
import GroupModal from "./Modal/GroupModal";
export default function SelectEl({ value, onChange, groupList, setGroupList }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleGroupModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <div className="SelectEl">
        <span>그룹</span>
        <div className="groupCon">
          <select id="group" value={value} onChange={onChange}>
            {/* <option value="가족">가족</option>
          <option value="친구">친구</option>
          <option value="회사">회사</option>
          <option value="스터디">스터디</option> */}
            {groupList.map((group) => (
              <option key={group} value={group}>
                {group}
              </option>
            ))}
          </select>
          <button className="addGroupBtn" onClick={toggleGroupModal}>
            조직추가
          </button>
        </div>
      </div>
      {isModalOpen && (
        <GroupModal
          groupList={groupList}
          setGroupList={setGroupList}
          onClose={toggleGroupModal}
        />
      )}
    </>
  );
}
