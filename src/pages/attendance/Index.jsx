import AttendanceTable from "./components/AttendanceTable";
import { AccountTextSearch } from "../../components/AccountTextSearch";
import { Flex } from "antd";
import { TotalDaysSelectSearch } from "./components/TotalDaysSelectSearch";

export default function Attendance() {
  return (
    <Flex vertical>
      <Flex justify="end" className="w-[50%]" gap={20}>
        <AccountTextSearch />
        <TotalDaysSelectSearch />
      </Flex>
      <AttendanceTable />
    </Flex>
  );
}
