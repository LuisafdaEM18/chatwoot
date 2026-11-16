import { required, minLength } from '@vuelidate/validators';

export const validLabelCharacters = (str = '') => !!str && !str.includes(' ');

export const getLabelTitleErrorMessage = validation => {
  let errorMessage = '';
  if (!validation.title.$error) {
    errorMessage = '';
  } else if (validation.title.required.$invalid) {
    errorMessage = 'LABEL_MGMT.FORM.NAME.REQUIRED_ERROR';
  } else if (validation.title.minLength.$invalid) {
    errorMessage = 'LABEL_MGMT.FORM.NAME.MINIMUM_LENGTH_ERROR';
  } else if (validation.title.validLabelCharacters.$invalid) {
    errorMessage = 'LABEL_MGMT.FORM.NAME.VALID_ERROR';
  }
  return errorMessage;
};

export default {
  title: {
    required,
    minLength: minLength(2),
    validLabelCharacters,
  },
  description: {},
  color: {
    required,
  },
  showOnSidebar: {},
};
