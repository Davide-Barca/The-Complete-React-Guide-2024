import DataInput from "./DataInput";

export default function UserInput({ userData, setUserData }) {
  const data = {...userData};

  function handleKeyEnter(value, elementTitle) {
    setUserData((curData) => {
        const newData = {...curData, [elementTitle]: +value}
        return newData
    });
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <DataInput
          type="number"
          title="Initial Investment"
          objectKey="initialInvestment"
          handleKeyEnter={handleKeyEnter}
        />
        <DataInput
          type="number"
          title="Annual Investment"
          objectKey="annualInvestment"
          handleKeyEnter={handleKeyEnter}
        />
      </div>
      <div className="input-group">
        <DataInput
          type="number"
          title="Expected Return"
          objectKey="expectedReturn"
          handleKeyEnter={handleKeyEnter}
        />
        <DataInput
          type="number"
          title="Duration"
          objectKey="duration"
          handleKeyEnter={handleKeyEnter}
        />
      </div>
    </div>
  );
}
