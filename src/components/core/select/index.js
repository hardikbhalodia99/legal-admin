import { Select, Option } from "@/src/components/core/mui-tailwind";

const SelectField = (props) => {
  return (
    <Select
      variant="standard"
      value={props.value}
      label={props.label}
      className="font-mabry-medium focus:border-[#DDDDE6] border-b-[#DDDDE6] !text-sm text-primary-black pt-6"
      color="gray"
      labelProps={{
        className:
          "peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#575762] peer-focus:text-sm peer-focus:text-[#575762] peer-focus:after:text-sm text-sm text-[#575762] font-mabry-medium",
      }}
      containerProps={{
        className: "select-dropdown min-w-[150px] h-[48px]",
      }}
      onChange={props.onChange}
      disabled={props.disabled}
    >
      {props.options.map((value) => {
        return (
          <Option
            className="text-primary-black text-sm font-mabry-medium"
            key={value}
            value={value}
          >
            {value}
          </Option>
        );
      })}
    </Select>
  );
};

export default SelectField;
