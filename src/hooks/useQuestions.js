import { useSearchParams } from "react-router";
import { getFullQuestions } from "../services/questionsAPI";
import useQueryFactory, { QUERY_TYPES } from "./factory/queryFactory";
import { useAuth } from "../context/AuthProvider";

export default function useQuestions() {
  const { isAuthenticated } = useAuth();
  const [searchParams] = useSearchParams();
  const answer = searchParams.get("answer");
  const question = searchParams.get("question");
  const category = searchParams.get("category");

  const params = { answer, question, category };

  return useQueryFactory({
    queryKey: ["questions", answer, question, category],
    queryFn: () => getFullQuestions({ params }),
    type: QUERY_TYPES.SIMPLE,
    enabled: isAuthenticated,
  });
}
