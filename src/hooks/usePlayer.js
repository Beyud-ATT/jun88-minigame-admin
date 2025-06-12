import { useSearchParams } from "react-router";
import { getListPlayer } from "../services/adminAPI";
import useQueryFactory from "./factory/queryFactory";

export default function usePlayer() {
  const [searchParams] = useSearchParams();
  const account = searchParams.get("account");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const category = searchParams.get("category");

  const params = { account, startDate, endDate, category };

  return useQueryFactory({
    queryKey: ["players", account, startDate, endDate, category],
    queryFn: () => getListPlayer({ params }),
  });
}
