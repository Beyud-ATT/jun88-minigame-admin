import { insertQuestion } from "../services/questionsAPI";
import useMutationFactory from "./factory/mutationFactory";

export default function useQuestionInsert() {
  return useMutationFactory({
    queryKey: ["questions"],
    mutationFn: insertQuestion,
    successMessage: "Thêm câu hỏi thành công",
  });
}
