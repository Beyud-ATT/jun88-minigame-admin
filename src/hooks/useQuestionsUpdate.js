import { updateQuestion } from "../services/questionsAPI";
import useMutationFactory from "./factory/mutationFactory";

export default function useQuestionsUpdate() {
  return useMutationFactory({
    queryKey: ["questions"],
    mutationFn: updateQuestion,
    successMessage: "Cập nhật câu hỏi thành công",
  });
}
