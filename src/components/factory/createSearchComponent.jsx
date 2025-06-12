import { DatePicker, Form, Input, Select } from "antd";
import { FaSearch } from "react-icons/fa";
import { useSearchParams } from "react-router";

export function createSearchComponent(config) {
  const {
    type = "text",
    fieldName,
    placeholder,
    options = [],
    icon = <FaSearch className="text-[var(--color-brand-primary)]" />,
    className = "!my-5 w-[50%]",
    allowClear = true,
    showSearch = false,
    filterOption = true,
    ...props
  } = config;

  return function SearchComponent() {
    const [form] = Form.useForm();
    const [searchParams, setSearchParams] = useSearchParams();

    function handleFinish(values) {
      searchParams.set(fieldName, values[fieldName]);
      searchParams.set("page", 1);
      setSearchParams(searchParams);
    }

    function handleChange(value) {
      handleFinish({
        [fieldName]: value,
      });
    }

    const renderField = () => {
      switch (type) {
        case "select":
          return (
            <Select
              placeholder={placeholder}
              options={options}
              className="w-full"
              allowClear={allowClear}
              showSearch={showSearch}
              filterOption={filterOption}
              onChange={handleChange}
              {...props}
            />
          );

        case "text":
          return (
            <Input
              placeholder={placeholder}
              prefix={icon}
              className="w-full"
              onChange={(e) => handleChange(e.target.value)}
              {...props}
            />
          );

        case "date":
          return (
            <DatePicker
              placeholder={placeholder}
              className="w-full"
              onChange={(date) => handleChange(date.format("YYYY-MM-DD"))}
              allowClear={false}
              {...props}
            />
          );

        default:
          return null;
      }
    };

    return (
      <Form
        form={form}
        onFinish={handleFinish}
        layout="vertical"
        className={className}
      >
        <Form.Item name={fieldName} className="!m-0">
          {renderField()}
        </Form.Item>
      </Form>
    );
  };
}
