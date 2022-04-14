import Quill from "quill";
import React, { useCallback } from "react";
import "quill/dist/quill.snow.css";

const toolbarConfig = [
  [{ header: [1, 2, 3, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"],
];

export default function Editor() {
  // usecallback used to only 'print' the component once
  const wrapperRef = useCallback((wrapper) => {
    if (wrapper != null) {
      wrapper.innerHTML = "";
      const editor = document.createElement("div");
      wrapper.append(editor);
      new Quill(editor, { theme: "snow", modules: { toolbar: toolbarConfig } });
    }
  }, []);

  return <div className="container" ref={wrapperRef}></div>;
}
