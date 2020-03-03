import {  SUCCESSFULL_EDIT, ERROR_REQUIRED_FIELDS,SUCCESS_REQUIRED_FIELDS, SUCCESSFUL_DELETE} from 'constants/actionTypes.jsx';

export const successfulEdit =() => ({ type: SUCCESSFULL_EDIT})
export const successfulDelete =() => ({ type: SUCCESSFUL_DELETE})
export const errorRequiredFields =() => ({ type: ERROR_REQUIRED_FIELDS})
export const successRequiredFields =() => ({ type: SUCCESS_REQUIRED_FIELDS})

