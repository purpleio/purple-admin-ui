// import CodeMirror from "@uiw/react-codemirror";
import ReactQuill from "react-quill";

interface IQuillEditorCoreProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
      ["link", "image"],
    ],
  },
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const QuillEditorCore = ({ value, onChange, placeholder }: IQuillEditorCoreProps) => {
  return (
    <>
      <ReactQuill
        theme="snow"
        value={value || ""}
        modules={modules}
        formats={formats}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default QuillEditorCore;
