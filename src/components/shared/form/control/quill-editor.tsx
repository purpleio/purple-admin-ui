import dynamic from "next/dynamic";

export default dynamic(() => import("./quill-editor-core"), {
  ssr: false,
});
