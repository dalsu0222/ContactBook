export default function InputEl({ title, value, onChange, error }) {
  return (
    <div className="inputEl">
      <span>{title}</span>
      <div className="inputTagCon">
        <input
          type="text"
          placeholder={`${title}`}
          value={value}
          onChange={onChange}
        />
        {error && <span className="error">{error}</span>}
      </div>
    </div>
  );
}
