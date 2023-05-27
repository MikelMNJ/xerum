import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { Button, Checkbox, FieldError, Field, Font, Select, Spacer, Toggle } from 'components';
import { withTheme } from 'styled-components';
import * as yup from 'yup';
import _ from 'lodash';

export const categories = [
  { value: 0, label: 'Business Clothing' },
  { value: 1, label: 'Business Services' },
  { value: 2, label: 'Business Supplies' },
  { value: 3, label: 'Baby Supplies' },
  { value: 4, label: 'Kids Clothing' },
];

const TestForm = withTheme(props => {
  const { theme } = props;
  const { selectedTheme, expense } = useSelector(state => state.app);
  const primary = theme.modes[selectedTheme].primary;

  const defaults = useMemo(() => ({
    categories: _.toString(expense?.category?.value) || '',
    amount: expense?.amount || '',
    checkbox: expense?.checked || false,
    toggle: expense?.toggled || false,
  }), [ expense ]);

  const schema = yup.object().shape({
    categories: yup.string().required('Categories is required.'),
  });

  const handleSubmit = args => {
    const { values, setSubmitting } = args;
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={defaults}
      validationSchema={schema}
      enableReinitialize={true}
      onSubmit={(values, handlers) => {
        const { setSubmitting } = handlers;
        handleSubmit({ values, setSubmitting });
      }}>
        {form => (
          <Form>
            <Select
              theme={theme}
              selectedTheme={selectedTheme}
              form={form}
              name='categories'
              data={categories}
              iconSize={0.75}
              borderRadius={0.25}
              fontFamily='Inter-Medium'
              label='Categories'
              loadingText='Loading categories...'
              noResultsText={<Font weight='semibold'>No results found</Font>}
              callback={_.noop}
            />

            <FieldError theme={theme} selectedTheme={selectedTheme} indent={0.25} name='categories' />

            <Spacer size={1.5} />

            <Field
              theme={theme}
              selectedTheme={selectedTheme}
              form={form}
              label={<Font size={0.875} weight='semibold'>Amount</Font>}
              name='amount'
              type='text'
              placeholder='Dollar signs and commas are okay'
              borderRadius={0.25}
              bottomBorder={true}
              fontFamily='Inter-Medium'
              $inputBGColor={primary}
            />

            <FieldError
              theme={theme}
              selectedTheme={selectedTheme}
              indent={0.25}
              name='amount'
            />

            <Spacer />

            <Checkbox
              theme={theme}
              selectedTheme={selectedTheme}
              form={form}
              name='checkbox'
              label='Select me'
            />

            <FieldError
              theme={theme}
              selectedTheme={selectedTheme}
              indent={0.25}
              name='checkbox'
            />

            <Spacer />

            <Toggle
              theme={theme}
              selectedTheme={selectedTheme}
              form={form}
              name='toggle'
            />

            <FieldError
              theme={theme}
              selectedTheme={selectedTheme}
              indent={0.25}
              name='toggle'
            />

            <Spacer size={2} />

            <Button
              theme={theme}
              selectedTheme={selectedTheme}
              type='Submit'
              text={<Font weight='medium'>Submit</Font>}
              disabled={form.isSubmitting}
              callback={form.handleSubmit}
            />
          </Form>
        )}
    </Formik>
  );
});

export { TestForm };