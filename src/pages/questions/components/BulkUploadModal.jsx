import { LuUpload } from "react-icons/lu";
import CustomModal from "../../../components/CustomModal";
import { Button, Form, Select, Typography } from "antd";
import { GAME_CATEGORY } from "../../../utils/constants";
import { useState } from "react";
import ExcelFileReader from "../../../components/UploadButton";
import useQuestionsBulkUpload from "../../../hooks/useQuestionsBulkUpload";
import { useModal } from "../../../components/CompoundModal";

function BulkUploadModalContent() {
  const [form] = Form.useForm();
  const { closeModal } = useModal();
  const [fileData, setFileData] = useState();

  const { mutate: bulkUpload, isPending } = useQuestionsBulkUpload();

  const onFinish = (values) => {
    const data = fileData.map((item) => ({
      ...item,
      category: values.category,
      type: "single",
    }));
    bulkUpload(data, {
      onSuccess: () => {
        closeModal();
      },
    });
  };

  const handleFileRead = (data) => {
    setFileData(data);
  };

  return (
    <>
      <Typography.Title level={3}>Tải lên hàng loạt</Typography.Title>
      <Form form={form} onFinish={onFinish}>
        <Form.Item name="category" label="Loại trò chơi">
          <Select
            options={GAME_CATEGORY.map((item) => ({
              value: item.value,
              label: item.label,
            }))}
          />
        </Form.Item>
        <ExcelFileReader onFileRead={handleFileRead} />
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="mt-3"
            loading={isPending}
          >
            Tải lên
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default function BulkUploadModal() {
  return (
    <CustomModal
      trigger={
        <Button
          icon={<LuUpload />}
          className="!border-[var(--color-brand-primary)] !text-[var(--color-brand-primary)]"
        >
          Tải lên hàng loạt
        </Button>
      }
      content={<BulkUploadModalContent />}
    />
  );
}
