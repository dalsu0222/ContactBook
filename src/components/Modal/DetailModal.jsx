import "../../css/DetailModal.css";

export default function DetailModal({ onClose, item }) {
  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <button className="closeBtn" onClick={onClose}>
          닫기
        </button>
        <h2>연락처 상세 정보</h2>
        <p>
          <strong>이름:</strong> {`${item.name}`}
        </p>
        <p>
          <strong>전화번호:</strong> {`${item.phone}`}
        </p>
        <p>
          <strong>그룹:</strong> {`${item.group}`}
        </p>
        <p>
          <strong>메모:</strong> {`${item.memo}`}
        </p>
      </div>
    </div>
  );
}
