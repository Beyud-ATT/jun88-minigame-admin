import CustomModal from "../../../components/CustomModal";
import { Button, Switch, Flex, Input, Select, Typography } from "antd";
import { LuPlus } from "react-icons/lu";
import { Form } from "antd";
import { DIFFICULTY, GAME_CATEGORY } from "../../../utils/constants";
import useQuestionInsert from "../../../hooks/useQuestionInsert";
import { useModal } from "../../../components/CompoundModal";

function InsertModalContent() {
  const [form] = Form.useForm();
  const { closeModal } = useModal();
  const { mutate: insertQuestion, isPending } = useQuestionInsert();

  const onFinish = (values) => {
    const options = values.options.map((option) => ({
      text: option.text,
      isCorrect: option.isCorrect || false,
      image: "",
    }));
    const data = {
      ...values,
      difficulty: values.difficulty || DIFFICULTY[0].value,
      category: values.category || GAME_CATEGORY[0].value,
      options,
      type: "single",
    };
    insertQuestion(data, {
      onSuccess: () => {
        form.resetFields();
        closeModal();
      },
    });
  };

  return (
    <>
      <Typography.Title level={3}>Thêm câu hỏi</Typography.Title>
      <Form layout="vertical" form={form} className="!mt-5" onFinish={onFinish}>
        <Flex align="center" gap={20}>
          <Form.Item
            name="question"
            label="Câu hỏi"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="difficulty" label="Độ khó">
            <Select
              defaultValue={DIFFICULTY[0].value}
              options={DIFFICULTY.map((item) => ({
                value: item.value,
                label: item.label,
              }))}
            />
          </Form.Item>
          <Form.Item name="category" label="Loại trò chơi">
            <Select
              defaultValue={GAME_CATEGORY[0].value}
              options={GAME_CATEGORY.map((item) => ({
                value: item.value,
                label: item.label,
              }))}
            />
          </Form.Item>
        </Flex>

        <Form.Item name="image" label="Hình ảnh (link hình ảnh nếu có)">
          <Input />
        </Form.Item>

        <Flex align="center" gap={20}>
          <Form.Item
            name={["options", 0, "text"]}
            label="Đáp án 1"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={["options", 0, "isCorrect"]} label="Đáp án đúng">
            <Switch />
          </Form.Item>
        </Flex>

        <Flex align="center" gap={20}>
          <Form.Item
            name={["options", 1, "text"]}
            label="Đáp án 2"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={["options", 1, "isCorrect"]} label="Đáp án đúng">
            <Switch />
          </Form.Item>
        </Flex>

        <Flex align="center" gap={20}>
          <Form.Item
            name={["options", 2, "text"]}
            label="Đáp án 3"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={["options", 2, "isCorrect"]} label="Đáp án đúng">
            <Switch />
          </Form.Item>
        </Flex>

        <Flex align="center" gap={20}>
          <Form.Item
            name={["options", 3, "text"]}
            label="Đáp án 4"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={["options", 3, "isCorrect"]} label="Đáp án đúng">
            <Switch />
          </Form.Item>
        </Flex>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isPending}>
            Tạo
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default function InsertModal() {
  return (
    <CustomModal
      trigger={
        <Button
          className="!bg-[var(--color-brand-primary)] !font-semibold !text-white"
          icon={<LuPlus />}
        >
          Thêm
        </Button>
      }
      content={<InsertModalContent />}
    />
  );
}
