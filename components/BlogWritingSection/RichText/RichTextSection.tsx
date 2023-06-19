import { FunctionComponent, useState } from "react";
import { ContentState, convertToRaw, EditorState } from "draft-js";
import {
  getJsonStringifyOfContent,
  saveContentOnLocalStorage,
} from "components/BlogWritingSection/RichText/utils/helperFunction/editorHelperFunction";
import dynamic from "next/dynamic";
import { EditorProps } from "react-draft-wysiwyg";
const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
import styles from "styles/RichText.module.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Autocomplete, Button, TextField } from "@mui/material";
import MultiSelectTextBox, {
  MultiSelectObjectInterface,
} from "components/common/From/MultiSelectTextBox";
import { createBlogApi } from "components/Profile/redux/BlogApi";
import draftToHtml from "draftjs-to-html";
import { BlogInterface } from "components/Profile/redux/BlogInterface";
import { useRouter } from "next/router";
import { routesPath } from "routes";
import { toast } from "react-toastify";

interface Props {}

const WritingSection: FunctionComponent<Props> = ({}) => {
  const router = useRouter();
  const [editorState, setEditorState] = useState<EditorState>(() =>
    EditorState.createWithContent(ContentState.createFromText(""))
  );
  const [tagList, setTagList] = useState<Array<MultiSelectObjectInterface>>([]);
  const updateEditorState = (editorState: EditorState) => {
    saveContentOnLocalStorage(editorState.getCurrentContent());
    setEditorState(editorState);
  };

  const onAddBlogs = async () => {
    try {
      const content = convertToRaw(editorState.getCurrentContent());
      const rawHtml = draftToHtml(content);
      const createBlogInstance = await createBlogApi(
        rawHtml,
        tagList.map((tag) => tag.title)
      );
      if (createBlogInstance.data)
        router.push(`${routesPath.BLOG_PAGE}/${createBlogInstance.data.id}`);
    } catch (e) {
      toast.error("failed to save data");
      console.log(e);
    }
  };

  return (
    <div className="py-8 w-full gap-4">
      <div className="border border-gray-200 rounded">
        <Editor
          editorState={editorState}
          onEditorStateChange={updateEditorState}
          toolbarClassName={[styles.toolbarClass].join(" ")}
          wrapperClassName="wrapperClassName"
          editorClassName="px-4"
        />
      </div>
      <div className="py-4">
        <div className="max-w-[50%]">
          <MultiSelectTextBox
            label="Tags"
            initialValue={[]}
            onChangeSelectValue={(data) => setTagList(data)}
            placeholder="Enter Tags"
            maxItems={5}
          />
        </div>
      </div>
      <div>
        <Button color="primary" onClick={onAddBlogs}>
          Add Blog
        </Button>
      </div>
    </div>
  );
};
export default WritingSection;
