import { FaRegCircleQuestion } from "react-icons/fa6";
import { createSearchComponent } from "../../../components/factory/createSearchComponent";

export const QuestionTextSearch = createSearchComponent({
  type: "text",
  fieldName: "question",
  placeholder: "Tìm kiếm câu hỏi",
  icon: <FaRegCircleQuestion className="text-[var(--color-brand-primary)]" />,
});
