import { Flex, Typography } from "antd";
import useQueryFactory, {
  QUERY_TYPES,
} from "../../../hooks/factory/queryFactory";
import { getRegisterQuestion } from "../../../services/adminAPI";
import { BsAlphabetUppercase } from "react-icons/bs";
import { GiBrain } from "react-icons/gi";
import { FaGift } from "react-icons/fa6";

function RegisterItem({ item }) {
  const { label, question, guessWord, receiveCode } = item;
  return (
    <Flex
      vertical
      gap={5}
      className="w-[23%] rounded-lg !p-6"
      style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
    >
      <Typography.Title level={3}>{label}</Typography.Title>
      <Typography.Text>
        <Flex align="center" gap={8}>
          <Flex align="center" gap={5}>
            <GiBrain className="!text-pink-300" />
            <span>Trả lời câu hỏi: </span>
          </Flex>
          <span className="font-bold">{question}</span>
        </Flex>
      </Typography.Text>
      <Typography.Text>
        <Flex align="center" gap={8}>
          <Flex align="center" gap={5}>
            <BsAlphabetUppercase className="!text-blue-500" />
            <span>Đoán chữ: </span>
          </Flex>
          <span className="font-bold">{guessWord}</span>
        </Flex>
      </Typography.Text>
      <Typography.Text>
        <Flex align="center" gap={8}>
          <Flex align="center" gap={5}>
            <FaGift className="!text-yellow-500" />
            <span>Nhận code: </span>
          </Flex>
          <span className="font-bold">{receiveCode}</span>
        </Flex>
      </Typography.Text>
    </Flex>
  );
}

export default function RegisterQuestions() {
  const { data, isLoading, error } = useQueryFactory({
    queryKey: ["register-questions"],
    queryFn: () => getRegisterQuestion(),
    type: QUERY_TYPES.SIMPLE,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div
      className="rounded-lg p-7"
      style={{ boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)" }}
    >
      <Typography.Title level={3}>
        Thống kê người chơi ( Theo giờ +7 )
      </Typography.Title>
      <Flex justify="space-between">
        {data?.data?.data?.map?.((item, index) => (
          <RegisterItem key={index} item={item} />
        ))}
      </Flex>
    </div>
  );
}
