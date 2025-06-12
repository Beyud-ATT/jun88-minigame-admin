import CustomModal from "../../../components/CustomModal";
import { Button, Input, Select, Switch, Flex, Typography } from "antd";
import { Form } from "antd";
import { useEffect } from "react";
import { DIFFICULTY, GAME_CATEGORY } from "../../../utils/constants";
import useQuestionsUpdate from "../../../hooks/useQuestionsUpdate";
import { useModal } from "../../../components/CompoundModal";

function UpdateModalContent({ record }) {
  const [form] = Form.useForm();
  const { closeModal } = useModal();

  const { mutate: updateQuestion, isPending } = useQuestionsUpdate();

  const onFinish = (values) => {
    updateQuestion(
      { id: record._id, body: { ...values, type: record.type } },
      {
        onSuccess: () => {
          form.resetFields();
          closeModal();
        },
      },
    );
  };

  useEffect(() => {
    if (record) {
      form.setFieldsValue(record);
    }
  }, [record, form]);

  return (
    <>
      <Typography.Title level={3}>Cập nhật câu hỏi</Typography.Title>
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
              defaultValue={record?.category}
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
            Cập nhật
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default function UpdateModal({ record }) {
  return <CustomModal content={<UpdateModalContent record={record} />} />;
}
