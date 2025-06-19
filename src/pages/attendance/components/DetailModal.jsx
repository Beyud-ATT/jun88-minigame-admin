import { FaEye } from "react-icons/fa";
import CustomModal from "../../../components/CustomModal";
import { Button, Flex, Table, Typography } from "antd";
import moment from "moment";

function AttendanceTable({ attendanceDates }) {
  const dates = attendanceDates?.map((date) => ({
    date: moment(date).format("DD/MM/YYYY HH:mm:ss"),
  }));

  return (
    <Table
      columns={[
        {
          title: "Ngày điểm danh",
          dataIndex: "date",
          key: "date",
        },
      ]}
      dataSource={dates}
      pagination={false}
      size="small"
      bordered
      scroll={{ y: 200 }}
    />
  );
}

function DetailModalContent({ record }) {
  const { milestones, attendanceDates } = record || {};
  return (
    <Flex vertical gap={20}>
      <Typography.Title level={2}>Chi tiết</Typography.Title>

      <Typography.Text>
        <Flex gap={5}>
          Tài khoản: <b>{record.account}</b>
        </Flex>
      </Typography.Text>

      <Flex vertical gap={5}>
        {milestones.map((milestone) => (
          <>
            <Typography.Title level={5}>
              Các mốc thưởng đã đạt được:
            </Typography.Title>
            <Flex
              vertical
              align="start"
              className="rounded-lg bg-cyan-50 !p-6"
              style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
            >
              <Flex gap={5}>
                Mốc điểm danh: <b>{milestone.streak}</b>
              </Flex>
              <Flex gap={5}>
                Điểm thưởng: <b>{milestone.point}</b>
              </Flex>
              <Flex gap={5}>
                Mã code: <b>{milestone.promoCode}</b>
              </Flex>
              <Flex gap={5}>
                Thời gian nhận thưởng:{" "}
                <b>
                  {moment(milestone.receivedAt).format("DD/MM/YYYY HH:mm:ss")}
                </b>
              </Flex>
            </Flex>
          </>
        ))}
      </Flex>

      <Flex vertical gap={5}>
        <Typography.Title level={5}>Danh sách ngày điểm danh:</Typography.Title>
        <AttendanceTable attendanceDates={attendanceDates} />
      </Flex>
    </Flex>
  );
}

export default function DetailModal({ record, ...rest }) {
  return (
    <CustomModal
      trigger={
        <Button
          icon={
            <FaEye className="!text-2xl !text-[var(--color-brand-primary)]" />
          }
          type="text"
        />
      }
      content={<DetailModalContent record={record} />}
      {...rest}
    />
  );
}
