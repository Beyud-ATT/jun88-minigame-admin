import { bulkUploadQuestion } from "../services/questionsAPI";
import useMutationFactory from "./factory/mutationFactory";

export default function useQuestionsBulkUpload() {
  return useMutationFactory({
    queryKey: ["questions"],
    mutationFn: bulkUploadQuestion,
    successMessage: "Upload thành công",
  });
}
