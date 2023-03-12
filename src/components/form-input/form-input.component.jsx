import { FormInputs, FormInputLabels, Group } from "./form-input.styles.jsx";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <FormInputs {...otherProps} />
      {label && (
        <FormInputLabels shrink={otherProps.value.length}>
          {label}
        </FormInputLabels>
      )}
    </Group>
  );
};

export default FormInput;
