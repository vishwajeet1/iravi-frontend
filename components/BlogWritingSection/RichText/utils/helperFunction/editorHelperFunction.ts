import { ContentState, convertFromRaw, convertToRaw } from "draft-js";

export const getJsonStringifyOfContent = (contentState: ContentState) => {
  return JSON.stringify(convertToRaw(contentState));
};

export const getJsonParseOfContent = (rawData: string) => {
  const jsonData = JSON.parse(rawData);
  return convertFromRaw(jsonData);
};

export const getContentFromLocalStorage = (): ContentState | null => {
  const rawData = localStorage.getItem("EDITOR_STORAGE_KEY");
  if (!rawData) return null;
  return getJsonParseOfContent(rawData);
};
export const saveContentOnLocalStorage = (contentState: ContentState) => {
  const contentStateJson = getJsonStringifyOfContent(contentState);
  localStorage.setItem("EDITOR_STORAGE_KEY", contentStateJson);
};
