import { useSearchParams } from "react-router";
import { getAttendance } from "../services/attendanceAPI";
import useQueryFactory, { QUERY_TYPES } from "./factory/queryFactory";
import { useAuth } from "../context/AuthProvider";

export default function useAttendance() {
  const { isAuthenticated } = useAuth();
  const [searchParams] = useSearchParams();

  const account = searchParams.get("account") || "";
  const totalDays = Number(searchParams.get("totalDays")) || 0;
  const pageIndex = Number(searchParams.get("pageIndex")) || 1;
  const pageSize = Number(searchParams.get("pageSize")) || 20;

  const params = {
    "account[regex]": account,
    "totalDays[gte]": totalDays,
    pageIndex,
    pageSize,
  };

  return useQueryFactory({
    queryKey: ["attendance", account, totalDays],
    queryFn: () => getAttendance({ params }),
    type: QUERY_TYPES.PAGINATED,
    enabled: isAuthenticated,
  });
}
