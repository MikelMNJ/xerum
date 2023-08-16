import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import {
  Button, Checkbox, FieldError, Field, Font, Select, Spacer, Toggle, Search, DatePicker, Filter,
} from 'components';
import { withTheme } from 'styled-components';
import * as yup from 'yup';
import _ from 'lodash';

export const categories = [
  { value: 0, label: 'Business Clothing' },
  { value: 1, label: 'Business Services' },
  { value: 2, label: 'Business Supplies' },
  { value: 3, label: 'Baby Supplies' },
  { value: 4, label: 'Kids Clothing' },
  { value: 5, label: 'Business Clothing 1' },
  { value: 6, label: 'Business Services 1' },
  { value: 7, label: 'Business Supplies 1' },
  { value: 8, label: 'Baby Supplies 1' },
  { value: 9, label: 'Kids Clothing 1' },
  { value: 10, label: 'Business Clothing 2' },
  { value: 11, label: 'Business Services 2' },
  { value: 12, label: 'Business Supplies 2' },
  { value: 13, label: 'Baby Supplies 2' },
  { value: 14, label: 'Kids Clothing 2' },
  { value: 15, label: 'Business Clothing 3' },
  { value: 16, label: 'Business Services 3' },
  { value: 17, label: 'Business Supplies 3' },
  { value: 18, label: 'Baby Supplies 3' },
  { value: 19, label: 'Kids Clothing 3' },
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
    dueDate: expense?.dueDate || '',
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
            <Search
              theme={theme}
              selectedTheme={selectedTheme}
              placeholder='Search for something'
            />

            <Spacer size={2} />

            <Filter
              theme={theme}
              selectedTheme={selectedTheme}
              placeholder='Filter something...'
              fontFamily='Inter-Medium'
              clearIconSize={1.125}
            />

            <Spacer size={2} />

            <DatePicker
              theme={theme}
              selectedTheme={selectedTheme}
              form={form}
              name='dueDate'
              iconSize={0.75}
              borderRadius={0.25}
              fontFamily='Inter-Medium'
              headerFontFamily='Inter-Bold'
              label='Due date'
              optional={false}
              disablePastDates={false}
              callback={_.noop}
            />

            <Spacer size={2} />

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