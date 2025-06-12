import { Flex } from "antd";
import { AnswerTextSearch } from "./components/AnswerTextSearch";
import QuestionTable from "./components/QuestionTable";
import { QuestionTextSearch } from "./components/QuestionTextSearch";
import { CategorySelectSearch } from "../../components/CategorySelectSearch";
import InsertModal from "./components/InsertModal";
import BulkUploadModal from "./components/BulkUploadModal";

export default function Questions() {
  return (
    <div>
      <Flex gap={20} justify="space-between">
        <Flex gap={10}>
          <InsertModal />
          <BulkUploadModal />
        </Flex>
        <Flex gap={10}>
          <AnswerTextSearch />
          <QuestionTextSearch />
          <CategorySelectSearch />
        </Flex>
      </Flex>
      <QuestionTable />
    </div>
  );
}
