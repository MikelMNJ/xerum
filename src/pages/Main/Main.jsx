import { StyledMain, ContentArea } from './styles';
import { appConstants } from 'modules';
import { Formik, Form } from 'formik';
import { Button, Field, FieldError, Font, Search, Spacer } from 'components';
import * as yup from 'yup';
import { getColor } from 'helpers';

const { themes } = appConstants;
const { light, dark } = themes;
const defaults = { email: '' };
const schema = yup.object().shape({
  email: yup
  .string()
  .email('Invalid email.')
  .required('Field is required.')
  .trim(),
});

const Main = props => {
  const { setTheme, ...rest } = props;
  const lightTheme = props.selectedTheme === 'light';

  const handleThemeChange = () => {
    setTheme(lightTheme ? dark : light);
  };

  const handleSubmit = args => {
    const { values, setSubmitting } = args;
    console.log({ values, setSubmitting });
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
                  borderSize={0.125}
                  inputBGColor={getColor(props, 'primary')}
                  {...rest}
                />

                <Spacer />

                <Field
                  form={form}
                  label={<Font size={0.875} weight='semibold'>Email</Font>}
                  name='email'
                  type='text'
                  placeholder='Your input here...'
                  borderRadius={0.5}
                  bottomBorder={true}
                  borderSize={0.125}
                  inputBGColor={getColor(props, 'primary')}
                  {...rest}
                />

                <FieldError name='email' {...rest} />

                <Spacer />
                <Button
                  type='submit'
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