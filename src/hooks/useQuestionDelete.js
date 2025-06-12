import { deleteQuestion } from "../services/questionsAPI";
import useMutationFactory from "./factory/mutationFactory";

export default function useQuestionDelete() {
  return useMutationFactory({
    queryKey: ["questions"],
    mutationFn: deleteQuestion,
    successMessage: "Xóa câu hỏi thành công",
  });
}
