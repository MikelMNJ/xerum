import { StyledMain, ContentArea } from './styles';
import { appConstants } from 'modules';
import { Formik, Form } from 'formik';
import { Button, Field, FieldError, Font, Search, Select, Spacer } from 'components';
import { getColor } from 'helpers';
import * as yup from 'yup';
import _ from 'lodash';

const { themes } = appConstants;
const { light, dark } = themes;
const defaults = { email: '', categories: '', sortOrder: '' };
const schema = yup.object().shape({
  email: yup
  .string()
  .email('Invalid email.')
  .required('Email is required.')
  .trim(),
  categories: yup.string().required('Categories is required.').notOneOf([ 'business clothing' ], 'Value is default.'),
  sortOrder: yup.string().required('Sort order is required.').notOneOf([ 'by due date' ], 'Value is default.'),
});

const categories = [ 'Business Clothing', 'Business Services', 'Business Supplies', 'Baby Supplies', 'Kids Clothing' ];
const sortOrder = [ 'By due date', 'By fund progress', 'By name (ascending)', 'By name (descending)' ];

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
                <Search
                  placeholder='Search...'
                  noButton={true}
                  borderRadius={0.5}
                  bottomBorder={true}
                  inputBGColor={getColor(props, 'primary')}
                  {...rest}
                />

                <Spacer size={1.5} />

                <Select
                  form={form}
                  name='categories'
                  data={categories}
                  iconSize={0.75}
                  borderRadius={0.25}
                  fontFamily='Inter-Medium'
                  loadingText='Loading categories...'
                  callback={_.noop}
                  {...props}
                />

                <FieldError indent={0.25} name='categories' {...rest} />

                <Spacer size={1.5} />

                <Select
                  form={form}
                  name='sortOrder'
                  data={sortOrder}
                  iconSize={0.75}
                  borderRadius={0.25}
                  fontFamily='Inter-Medium'
                  callback={_.noop}
                  {...props}
                />

                <FieldError indent={0.25} name='sortOrder' {...rest} />

                <Spacer size={1.5} />

                <Field
                  form={form}
                  label={<Font size={0.875} weight='semibold'>Email</Font>}
                  name='email'
                  type='email'
                  placeholder='Your input here...'
                  borderRadius={0.25}
                  bottomBorder={true}
                  fontFamily='Inter-Medium'
                  inputBGColor={getColor(props, 'primary')}
                  {...rest}
                />

                <FieldError indent={0.25} name='email' {...rest} />

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