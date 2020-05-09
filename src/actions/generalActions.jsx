import {  SUCCESSFULL_EDIT, ERROR_REQUIRED_FIELDS,SUCCESS_REQUIRED_FIELDS, SUCCESSFUL_DELETE} from 'constants/actionTypes.jsx';
import { DISMATCH_PASSWORD, SUCCESSFULL_NEW,DELETE_SUCCESSFUL, UPDATE_FILE_NAME } from 'constants/actionTypes';

export const successfulEdit =() => ({ type: SUCCESSFULL_EDIT})
export const successfulNew =() => ({ type: SUCCESSFULL_NEW})
export const deleteSuccessful=() => ({ type:DELETE_SUCCESSFUL})
export const successfulDelete =() => ({ type: SUCCESSFUL_DELETE})
export const errorRequiredFields =() => ({ type: ERROR_REQUIRED_FIELDS})
export const successRequiredFields =() => ({ type: SUCCESS_REQUIRED_FIELDS})
export const dismatchPassword =() => ({ type: DISMATCH_PASSWORD})
export const updateFileName = (key) => ({ type: UPDATE_FILE_NAME, payload: key})

