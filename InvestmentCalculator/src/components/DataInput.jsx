export default function DataInput({type, title, objectKey, handleKeyEnter}) {
  return (
    <p>
      <label htmlFor="">{title}</label>
      <input type={type} name="" id="" onChange={(e) => handleKeyEnter(e.target.value, objectKey)} />
    </p>
  );
}
