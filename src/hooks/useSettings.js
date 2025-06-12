import { getSettings } from "../services/setttingsAPI";
import useQueryFactory, { QUERY_TYPES } from "./factory/queryFactory";

export default function useSettings() {
  return useQueryFactory({
    queryKey: ["settings"],
    queryFn: getSettings,
    type: QUERY_TYPES.SIMPLE,
  });
}
