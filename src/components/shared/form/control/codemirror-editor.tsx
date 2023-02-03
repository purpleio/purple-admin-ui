import dynamic from "next/dynamic";

export default dynamic(() => import("./codemirror-editor-core"), {
  ssr: false,
});
