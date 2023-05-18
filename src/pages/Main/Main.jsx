import { StyledMain, ContentArea } from './styles';
import { appConstants } from 'modules';
import { Formik, Form } from 'formik';
import { Button, Checkbox, Field, FieldError, Font, Select, Spacer, Toggle } from 'components';
import { getColor } from 'helpers';
import * as yup from 'yup';
import _ from 'lodash';

const { themes } = appConstants;
const { light, dark } = themes;

const defaults = {
  amount: '',
  categories: '',
  checkbox: false,
  toggle: false,
};

const schema = yup.object().shape({
  amount: yup
  .string()
  .required('Email is required.')
  .trim(),
  categories: yup.string().required('Categories is required.'),
  checkbox: yup.boolean().oneOf([ true ], 'Checkbox is required.'),
  toggle: yup.boolean().oneOf([ true ], 'Toggle is required.'),
});

const categories = [
  { value: 1, label: 'Business Clothing' },
  { value: 2, label: 'Business Services' },
  { value: 3, label: 'Business Supplies' },
  { value: 4, label: 'Baby Supplies' },
  { value: 5, label: 'Kids Clothing' },
];

const Main = props => {
  const { setTheme, ...rest } = props;
  const lightTheme = props.selectedTheme === 'light';

  const handleThemeChange = () => {
    setTheme(lightTheme ? dark : light);
  };

  const handleSubmit = args => {
    const { values, setSubmitting } = args;
    console.log(values);
    setSubmitting(false);
  };

  return (
    <StyledMain>
      <ContentArea>
        <Button
          icon={`fa-solid fa-${lightTheme ? 'sun' : 'moon'}`}
          noText={true}
          buttonType='transparent'
          callback={handleThemeChange}
          {...props}
        />

        <Spacer />

        <Formik
          initialValues={defaults}
          validationSchema={schema}
          enableReinitialization={true}
          onSubmit={(values, handlers) => {
            const { setSubmitting } = handlers;
            handleSubmit({ values, setSubmitting });
          }}>
            {form => (
              <Form>
                <Select
                  form={form}
                  name='categories'
                  data={categories}
                  iconSize={0.75}
                  borderRadius={0.25}
                  fontFamily='Inter-Medium'
                  label='Categories'
                  loadingText='Loading categories...'
                  callback={_.noop}
                  {...rest}
                />

                <FieldError indent={0.25} name='categories' {...rest} />

                <Spacer size={1.5} />

                <Field
                  form={form}
                  label={<Font size={0.875} weight='semibold'>Amount</Font>}
                  name='amount'
                  type='text'
                  placeholder='Dollar signs and commas are okay'
                  borderRadius={0.25}
                  bottomBorder={true}
                  fontFamily='Inter-Medium'
                  inputBGColor={getColor(props, 'primary')}
                  {...rest}
                />

                <FieldError indent={0.25} name='amount' {...rest} />

                <Spacer />

                <Checkbox form={form} name='checkbox' label='Select me' {...rest} />
                <FieldError indent={0.25} name='checkbox' {...rest} />

                <Spacer />

                <Toggle form={form} name='toggle' {...rest} />
                <FieldError indent={0.25} name='toggle' {...rest} />

                <Spacer size={3} />

                <Button
                  type='Submit'
                  text={<Font weight='medium'>Submit</Font>}
                  disabled={form.isSubmitting}
                  callback={form.handleSubmit}
                  {...rest}
                />
              </Form>
            )}
        </Formik>
      </ContentArea>
    </StyledMain>
  );
};

export { Main };