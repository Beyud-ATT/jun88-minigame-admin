import { createSearchComponent } from "../../../components/factory/createSearchComponent";

export const AnswerTextSearch = createSearchComponent({
  type: "text",
  fieldName: "answer",
  placeholder: "Tìm kiếm theo đáp án",
});
