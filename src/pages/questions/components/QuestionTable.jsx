import { Flex, Space, Tag } from "antd";
import { UniversalTable } from "../../../components/TableLayout";
import { DIFFICULTY, GAME_CATEGORY } from "../../../utils/constants";
import { LuCheckCheck } from "react-icons/lu";
import DeleteModal from "./DeleteModal";
import useQuestions from "../../../hooks/useQuestions";
import UpdateModal from "./UpdateModal";

export default function QuestionTable() {
  const questionData = useQuestions();

  const questionColumns = [
    { key: "question", title: "Câu hỏi", dataIndex: "question" },
    {
      key: "category",
      title: "Loại trò chơi",
      dataIndex: "category",
      align: "center",
      render: (value) => {
        const { label, color } = GAME_CATEGORY.find(
          (item) => item.value === value,
        );
        return <Tag color={color}>{label}</Tag>;
      },
    },
    {
      key: "difficulty",
      title: "Độ khó",
      dataIndex: "difficulty",
      align: "center",
      render: (value) => {
        const { label, color } = DIFFICULTY.find(
          (item) => item.value === value,
        );
        return <Tag color={color}>{label}</Tag>;
      },
    },
    {
      key: "options",
      title: "Đáp án",
      dataIndex: "options",
      render: (options) => {
        return options.map((option) => (
          <Flex align="center">
            <span className="mr-1">{option.text}</span>
            <span>
              {option.isCorrect ? (
                <LuCheckCheck className="text-green-500" />
              ) : (
                ""
              )}
            </span>
          </Flex>
        ));
      },
    },
    {
      key: "action",
      title: "Hành động",
      dataIndex: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <UpdateModal record={record} />
          <DeleteModal record={record} />
        </Space>
      ),
    },
  ];

  return (
    <UniversalTable
      queryData={questionData}
      columns={questionColumns}
      scroll={{ x: 500, y: 550 }}
    />
  );
}
