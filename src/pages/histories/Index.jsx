import { Flex } from "antd";
import RegisterQuestions from "./components/RegisterQuestions";
import PlayerTable from "./components/PlayerTable";
import { StartDateSearch } from "./components/StartDateSearch";
import { EndDateSearch } from "./components/EndDateSearch";
import { CategorySelectSearch } from "../../components/CategorySelectSearch";
import ExportExcelButton from "./components/ExportExcelButton";
import { AccountTextSearch } from "../../components/AccountTextSearch";

export default function Histories() {
  return (
    <Flex vertical>
      <RegisterQuestions />
      <Flex align="center" justify="space-between">
        <Flex>
          <ExportExcelButton />
        </Flex>
        <Flex gap={20}>
          <AccountTextSearch />
          <StartDateSearch />
          <EndDateSearch />
          <CategorySelectSearch />
        </Flex>
      </Flex>
      <PlayerTable />
    </Flex>
  );
}
