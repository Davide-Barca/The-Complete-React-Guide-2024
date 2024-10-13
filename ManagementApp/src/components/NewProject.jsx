import { useRef } from "react";

import Button from "./Button";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onSave, onCancel }) {
  const modalRef = useRef();

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;

    console.log(dueDate)

    if (
      title.trim() === "" ||
      description.trim() === "" ||
      dueDate.trim() === ""
    ) {
      modalRef.current.open();
    } else {
      onSave({
        title: title,
        description: description,
        dueDate: dueDate,
      });
    }
  }

  return (
    <>
      <Modal ref={modalRef}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-900"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <Button onClick={handleSave}>Save</Button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={titleRef} label={"Title"} />
          <Input textarea ref={descriptionRef} label={"Description"} />
          <Input type="date" ref={dueDateRef} label={"Due Date"} />
        </div>
      </div>
    </>
  );
}
