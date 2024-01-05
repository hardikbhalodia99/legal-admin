import { Textarea } from "@/src/components/core/mui-tailwind";

const TextareaField = (props) => {
  return (
    <Textarea
      variant="standard"
      color="gray"
      type={props.type}
      label={props.label}
      value={props.value}
      className={`!border-b-[#DDDDE6] focus:!border-b-[#DDDDE6] !font-mabry-medium !text-sm text-primary-black min-h-[70px] pt-5`}
      labelProps={{
        className:
          "peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#575762] peer-focus:text-sm peer-focus:text-[#575762] peer-focus:after:text-sm text-sm !text-[#575762] font-mabry-medium",
      }}
      onChange={props.onChange}
    />
  );
};

export default TextareaField;
