import CodeMirror from "@uiw/react-codemirror";
import React from "react";
import style from "./codemirror-editor.module.css";

interface ICodemirrorEditorCoreProps {
  value?: string;
  onChange?: (value: string) => void;
  height?: string;
}

const CodemirrorEditorCore = ({ value, onChange, height }: ICodemirrorEditorCoreProps) => {
  return (
    <CodeMirror
      value={value || ""}
      width="100%"
      height={height || "200px"}
      onChange={onChange}
      className={style.container}
    />
  );
};

export default React.memo(CodemirrorEditorCore);
