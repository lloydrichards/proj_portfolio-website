import { TextField, withStyles } from '@material-ui/core';
import { useField, FieldAttributes } from 'formik';

type MySelectProps = { label: string } & FieldAttributes<{}>;

const CssTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      borderColor: '#F6F3F0',
      '& fieldset': {
        backgroundColor: 'white',
        borderColor: '#F6F3F0',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#8B7A70',
      },
      '&.Mui-selected': {
        borderColor: '#8B7A70',
      },
    },
  },
})(TextField);

export const MyTextField: React.FC<MySelectProps> = ({
  label,
  placeholder,
  ...props
}) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <CssTextField
      fullWidth
      variant='outlined'
      label={label}
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};
