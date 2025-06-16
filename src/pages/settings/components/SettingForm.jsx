import {
  Button,
  Col,
  Collapse,
  DatePicker,
  Divider,
  Flex,
  Form,
  Input,
  Row,
  Space,
  Switch,
  Typography,
} from "antd";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import useSettings from "../../../hooks/useSettings";
import { useEffect } from "react";
import useSettingsUpdate from "../../../hooks/useSettingsUpdate";
import dayjs from "dayjs";

var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (
        var i = 0, _p = Object.getOwnPropertySymbols(s);
        i < _p.length;
        i++
      ) {
        if (
          e.indexOf(_p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, _p[i])
        )
          t[_p[i]] = s[_p[i]];
      }
    return t;
  };

export default function SettingForm() {
  const { data } = useSettings();
  const [form] = Form.useForm();
  const { mutate } = useSettingsUpdate();

  const onFinish = (values) => {
    mutate({
      ...values,
      site: import.meta.env.VITE_SITE,
    });
  };

  useEffect(() => {
    const dataValue = data?.data?.data;
    if (dataValue) {
      const periodValue = dataValue?.attendance?.period;
      form.setFieldsValue({
        ...dataValue,
        attendance: {
          ...dataValue?.attendance,
          period: {
            start: periodValue?.start ? dayjs(periodValue?.start) : dayjs(),
            end: periodValue?.end ? dayjs(periodValue?.end) : dayjs(),
          },
        },
      });
    }
  }, [data, form]);

  return (
    <Form form={form} onFinish={onFinish}>
      <Collapse
        ghost
        size="large"
        items={[
          {
            key: "general",
            label: <Typography.Title level={2}>Cài đặt chung</Typography.Title>,
            children: (
              <>
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item name="vipAccount" label="TK VIP mới tham gia">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item name="numberDeposit" label="Số lần nạp tiền">
                      <Input />
                    </Form.Item>
                  </Col>
                  {/* <Col span={6}>
                    <Form.Item name="dayDeposit" label="Số ngày nạp tiền">
                      <Input />
                    </Form.Item>
                  </Col> */}
                  <Col span={8}>
                    <Form.Item name="totalDayDeposit" label="Tổng số tiền nạp">
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item name="lam_dung" label="Lạm dụng">
                      <Input placeholder="Nhập lạm dụng" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item name="urlApp" label="URL App">
                      <Input placeholder="Nhập URL App" />
                    </Form.Item>
                  </Col>
                </Row>
              </>
            ),
          },
        ]}
      />

      {/* Trả lời câu hỏi - Now grouped under 'quiz' */}
      {/* <Divider />
      <Collapse
        ghost
        size="large"
        items={[
          {
            key: "quiz",
            label: (
              <Typography.Title level={2}>Trả lời câu hỏi</Typography.Title>
            ),
            children: (
              <>
                <Form.Item name={["quiz", "status"]} label="Trạng thái">
                  <Switch />
                </Form.Item>
                <Form.Item
                  name={["quiz", "portalMemo"]}
                  label="Lời nhắn trang thành viên"
                >
                  <Input />
                </Form.Item>
                <Row gutter={16}>
                  <Col span={6}>
                    <Form.Item
                      name={["quiz", "timeLimit"]}
                      label="Thời gian tối đa mỗi bộ câu hỏi (giây)"
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item
                      name={["quiz", "questionCount"]}
                      label="Số lượng câu hỏi"
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item name={["quiz", "point"]} label="Điểm thưởng">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item
                      name={["quiz", "maxAttemptsPerDay"]}
                      label="Số lượt chơi tối đa mỗi ngày"
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  name={["quiz", "content"]}
                  label="Nội dung tham gia trả lời câu hỏi"
                >
                  <Input placeholder="Nhập nội dung" />
                </Form.Item>
                <Flex justify="space-between">
                  <Flex vertical>
                    <Form.List name={["quiz", "pointRanges"]}>
                      {(fields, { add, remove }) => (
                        <>
                          {fields.map((_a) => {
                            var { key, name } = _a,
                              restField = __rest(_a, ["key", "name"]);
                            return (
                              <Space
                                key={key}
                                style={{ display: "flex", marginBottom: 8 }}
                                align="baseline"
                              >
                                <Form.Item
                                  {...restField}
                                  label="Từ %"
                                  name={[name, "correctPercentMin"]}
                                  rules={[
                                    {
                                      required: true,
                                      message: "Missing correctPercentMin",
                                    },
                                  ]}
                                >
                                  <Input placeholder="Nhập số" />
                                </Form.Item>
                                <Form.Item
                                  {...restField}
                                  label="Đến %"
                                  name={[name, "correctPercentMax"]}
                                  rules={[
                                    {
                                      required: true,
                                      message: "Missing correctPercentMax",
                                    },
                                  ]}
                                >
                                  <Input placeholder="Nhập số" />
                                </Form.Item>
                                <Form.Item
                                  {...restField}
                                  label="Điểm"
                                  name={[name, "point"]}
                                  rules={[
                                    {
                                      required: true,
                                      message: "Missing point",
                                    },
                                  ]}
                                >
                                  <Input placeholder="Nhập số" />
                                </Form.Item>
                                <FaMinusCircle onClick={() => remove(name)} />
                              </Space>
                            );
                          })}

                          <Form.Item>
                            <Button
                              type="dashed"
                              onClick={() => add()}
                              block
                              icon={<FaPlusCircle />}
                            >
                              Thêm
                            </Button>
                          </Form.Item>
                        </>
                      )}
                    </Form.List>
                  </Flex>
                </Flex>
              </>
            ),
          },
        ]}
      /> */}

      {/* Đuổi hình bắt chữ - Now grouped under 'wordGuessing' */}
      {/* <Divider />
      <Collapse
        ghost
        size="large"
        items={[
          {
            key: "wordguess",
            label: (
              <Typography.Title level={2}>Đuổi hình bắt chữ</Typography.Title>
            ),
            children: (
              <>
                <Form.Item name={["wordGuessing", "status"]} label="Trạng thái">
                  <Switch />
                </Form.Item>
                <Form.Item
                  name={["wordGuessing", "portalMemo"]}
                  label="Lời nhắn trang thành viên"
                >
                  <Input />
                </Form.Item>
                <Row gutter={16}>
                  <Col span={6}>
                    <Form.Item
                      name={["wordGuessing", "timeLimit"]}
                      label="Thời gian mỗi lượt chơi (giây)"
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item
                      name={["wordGuessing", "questionCount"]}
                      label="Số lượng câu hỏi"
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item
                      name={["wordGuessing", "point"]}
                      label="Điểm thưởng"
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item
                      name={["wordGuessing", "maxAttemptsPerDay"]}
                      label="Số lượt chơi tối đa mỗi ngày"
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  name={["wordGuessing", "content"]}
                  label="Nội dung tham gia đoán chữ"
                >
                  <Input placeholder="Nhập nội dung" />
                </Form.Item>

                <Flex justify="space-between">
                  <Flex vertical>
                    <Form.List name={["wordGuessing", "pointRanges"]}>
                      {(fields, { add, remove }) => (
                        <>
                          {fields.map((_a) => {
                            var { key, name } = _a,
                              restField = __rest(_a, ["key", "name"]);
                            return (
                              <Space
                                key={key}
                                style={{ display: "flex", marginBottom: 8 }}
                                align="baseline"
                              >
                                <Form.Item
                                  {...restField}
                                  label="Từ %"
                                  name={[name, "correctPercentMin"]}
                                  rules={[
                                    { required: true, message: "Nhập số" },
                                  ]}
                                >
                                  <Input placeholder="Nhập số" />
                                </Form.Item>
                                <Form.Item
                                  {...restField}
                                  label="Đến %"
                                  name={[name, "correctPercentMax"]}
                                  rules={[
                                    { required: true, message: "Nhập số" },
                                  ]}
                                >
                                  <Input placeholder="Nhập số" />
                                </Form.Item>
                                <Form.Item
                                  {...restField}
                                  label="Điểm"
                                  name={[name, "point"]}
                                  rules={[
                                    { required: true, message: "Nhập số" },
                                  ]}
                                >
                                  <Input placeholder="Nhập số" />
                                </Form.Item>
                                <FaMinusCircle onClick={() => remove(name)} />
                              </Space>
                            );
                          })}

                          <Form.Item>
                            <Button
                              type="dashed"
                              onClick={() => add()}
                              block
                              icon={<FaPlusCircle />}
                            >
                              Thêm trường
                            </Button>
                          </Form.Item>
                        </>
                      )}
                    </Form.List>
                  </Flex>
                </Flex>
              </>
            ),
          },
        ]}
      /> */}

      <Divider />
      <Collapse
        ghost
        size="large"
        items={[
          {
            key: "attendance",
            label: <Typography.Title level={2}>Điểm danh</Typography.Title>,
            children: (
              <>
                <Form.Item name={["attendance", "status"]} label="Trạng thái">
                  <Switch />
                </Form.Item>

                <Row gutter={[16, 16]}>
                  <Col span={8}>
                    <Form.Item
                      name={["attendance", "portalMemo"]}
                      label="Lời nhắn trang thành viên"
                    >
                      <Input placeholder="Nhập lời nhắn" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      name={["attendance", "sportBet"]}
                      label="Tổng cược hợp lệ thể thao"
                    >
                      <Input placeholder="Nhập số" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[16, 16]}>
                  <Col span={6}>
                    <Form.Item
                      name={["attendance", "period", "start"]}
                      label="Thời gian bắt đầu"
                    >
                      <DatePicker showTime />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item
                      name={["attendance", "period", "end"]}
                      label="Thời gian kết thúc"
                    >
                      <DatePicker showTime />
                    </Form.Item>
                  </Col>
                </Row>
                <Flex justify="space-between">
                  <Flex vertical>
                    <Form.List name={["attendance", "milestones"]}>
                      {(fields, { add, remove }) => (
                        <>
                          {fields.map((_a) => {
                            var { key, name } = _a,
                              restField = __rest(_a, ["key", "name"]);
                            return (
                              <Space
                                key={key}
                                style={{ display: "flex", marginBottom: 8 }}
                                align="baseline"
                              >
                                <Form.Item
                                  {...restField}
                                  label="Số ngày điểm danh"
                                  name={[name, "streak"]}
                                  rules={[
                                    {
                                      required: true,
                                      message: "Nhập số ngày điểm danh",
                                    },
                                  ]}
                                >
                                  <Input placeholder="Nhập số ngày điểm danh" />
                                </Form.Item>
                                <Form.Item
                                  {...restField}
                                  label="Điểm"
                                  name={[name, "point"]}
                                  rules={[
                                    { required: true, message: "Nhập số điểm" },
                                  ]}
                                >
                                  <Input placeholder="Nhập số điểm" />
                                </Form.Item>
                                <FaMinusCircle onClick={() => remove(name)} />
                              </Space>
                            );
                          })}

                          <Form.Item>
                            <Button
                              type="dashed"
                              onClick={() => add()}
                              block
                              icon={<FaPlusCircle />}
                            >
                              Thêm trường
                            </Button>
                          </Form.Item>
                        </>
                      )}
                    </Form.List>
                  </Flex>
                </Flex>
              </>
            ),
          },
        ]}
      />

      <Divider />
      <Form.Item>
        <Flex justify="end">
          <button
            type="submit"
            className="cursor-pointer rounded-xl bg-[var(--color-brand-primary)] px-5 py-2 font-semibold text-white"
          >
            Lưu
          </button>
        </Flex>
      </Form.Item>
    </Form>
  );
}
