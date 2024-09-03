import { useState } from "react";
import DetailModal from "./Modal/DetailModal";

export default function List({ item, deleteItem }) {
  // {id: 1, name: '김OO', phone: '010-0000-0000', group: '가족', memo: '가족입니다.'}
  const [isGroupModalOpen, setIsGroupModalOpen] = useState(false);
  const toggleGroupModal = () => {
    setIsGroupModalOpen(!isGroupModalOpen);
  };
  return (
    <>
      {isGroupModalOpen && (
        <DetailModal onClose={toggleGroupModal} item={item} />
      )}
      <li className="listDetail">
        {`${item.name} ${item.phone} ${item.group}`}
        <div className="detailCon">
          <button className="detailBtn" onClick={toggleGroupModal}>
            세부사항
          </button>
          <button className="deleteBtn" onClick={() => deleteItem(item.id)}>
            삭제
          </button>
        </div>
      </li>
    </>
  );
}
