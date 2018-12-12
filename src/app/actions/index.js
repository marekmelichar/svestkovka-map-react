// // const ROOT_URL = window.ROOT_URL;
//
// // import axios from 'axios';
//
// import { getFormatData } from '../helpers';
//
// /*
//  * action types
//  */
//
// export const FETCH_DATA = 'FETCH_DATA';
// export const UPDATE_DATA = 'UPDATE_DATA';
// export const FILES_SELECTED = 'FILES_SELECTED';
// // export const on_files_added = 'on_files_added';
// export const UPLOAD = 'UPLOAD';
// export const CHECKBOX = 'CHECKBOX';
// export const START_TRANSFER = 'START_TRANSFER';
// export const PROGRESS = 'PROGRESS';
// export const REMOVE_PKG_NAME = 'REMOVE_PKG_NAME';
// export const ERROR_MESSAGE = 'ERROR_MESSAGE';
// export const STATE_OF_PACKAGE = 'STATE_OF_PACKAGE';
// export const ADD_ROW = 'ADD_ROW';
// export const CLEAR_VALIDATION_MODAL = 'CLEAR_VALIDATION_MODAL';
// export const CURRENTLY_ACTIVE_VERSIONS = 'CURRENTLY_ACTIVE_VERSIONS';
// export const LOCAL_DATA_MAIN_TABLE = 'LOCAL_DATA_MAIN_TABLE';
// export const POLLING = 'POLLING';
// export const CANCEL_UPLOAD = 'CANCEL_UPLOAD';
// export const CANCEL_ERROR = 'CANCEL_ERROR';
// export const START_POLLING = 'START_POLLING';
// export const CANCEL_PROGRESS = 'CANCEL_PROGRESS';
// export const STOP_TRANSFER = 'STOP_TRANSFER';
// export const UNIQUE_ID = 'UNIQUE_ID';
// export const SERVER_UNAVAILABLE = 'SERVER_UNAVAILABLE';
// export const LOGS_TO_SERVER = 'LOGS_TO_SERVER';
// export const OBJECTS_TO_BE_DELETED = 'OBJECTS_TO_BE_DELETED';
//
// export const OBJECTS_TO_BE_TRANSFERRED_INIT = 'OBJECTS_TO_BE_TRANSFERRED_INIT';
// // export const OBJECTS_TO_BE_TRANSFERRED = 'OBJECTS_TO_BE_TRANSFERRED';
// export const OBJECTS_TO_BE_TRANSFERRED_UPDATE = 'OBJECTS_TO_BE_TRANSFERRED_UPDATE';
// export const OBJECTS_TO_BE_TRANSFERRED_REMOVE = 'OBJECTS_TO_BE_TRANSFERRED_REMOVE';
//
// export const IS_UPLOAD_RUNNING = 'IS_UPLOAD_RUNNING';
// export const DISABLE_REMOVING = 'DISABLE_REMOVING';
// export const FILES_PREPARED_FOR_TRANSFER = 'FILES_PREPARED_FOR_TRANSFER';
// // export const SHOW_VALIDATED_INFO = 'SHOW_VALIDATED_INFO';
// // export const IS_UPLOAD_RUNNING = 'IS_UPLOAD_RUNNING';
// export const ON_FILES_ADDED = 'ON_FILES_ADDED';
// // export const STATE_OF_CHECKBOXES = 'STATE_OF_CHECKBOXES';
// // export const STATE_OF_CHECKBOXES_INIT = 'STATE_OF_CHECKBOXES_INIT';
// // export const STATE_OF_CHECKBOXES_ADD = 'STATE_OF_CHECKBOXES_ADD';
// // export const STATE_OF_CHECKBOXES_REMOVE = 'STATE_OF_CHECKBOXES_REMOVE';
// // export const STATE_OF_CHECKBOXES_UPDATE = 'STATE_OF_CHECKBOXES_UPDATE';
// // export const STATE_OF_CHECKBOXES_FLUSH = 'STATE_OF_CHECKBOXES_FLUSH';
//
// export const FIND_DEPENDENCIES = 'FIND_DEPENDENCIES';
// export const FILE_TO_BE_TRANSFERRED = 'FILE_TO_BE_TRANSFERRED';
//
// export const SHOW_BEFORE_TRANSFER_MODAL = 'SHOW_BEFORE_TRANSFER_MODAL';
//
// export const PROGRESS_BAR_INDETERMINATED = 'PROGRESS_BAR_INDETERMINATED';
// export const PROGRESS_BAR_LOADING_TEXT = 'PROGRESS_BAR_LOADING_TEXT';
//
// export const UPLOAD_RUNNING_FILES_ADD = 'UPLOAD_RUNNING_FILES_ADD';
// export const UPLOAD_RUNNING_FILES_EMPTY = 'UPLOAD_RUNNING_FILES_EMPTY';
//
// export const AMOUNT_OF_OBJECTS_TO_BE_TRANSFERRED = 'AMOUNT_OF_OBJECTS_TO_BE_TRANSFERRED';
//
// /*
//  * action creators
//  */
//
//
// export const fetchData = (mode) => {
//     // this is for redux-promise
//   let request;
//
//   if (mode) {
//     request = $.ajax({
//       url: `${ROOT_URL}/initstate?${mode}`,
//       type: 'GET',
//     }).catch(error => {
//       return {
//         type: ERROR_MESSAGE,
//         code: error.status,
//         errorMessage: error.statusText,
//         payload: error
//       }
//     })
//   } else {
//     request = $.ajax({
//       url: `${ROOT_URL}/initstate`,
//       type: 'GET',
//     }).catch(error => {
//       return {
//         type: ERROR_MESSAGE,
//         code: error.status,
//         errorMessage: error.statusText,
//         payload: error
//       }
//     })
//   }
//
//   return {
//     type: FETCH_DATA,
//     payload: request,
//   };
// };
//
// export const filesSelected = files => {
//   // console.log('filesSelected', files);
//
//   return {
//     type: FILES_SELECTED,
//     payload: files,
//   }
// }
//
// export const onUpload = response => ({
//   type: UPLOAD,
//     // payload: response
//   payload: response || response.responseJSON,
// });
//
// export const onCheckbox = (checked, name, dependencies) => ({
//   type: CHECKBOX,
//   payload: checked,
//   name,
//   dependencies
// });
//
// export const startTransfer = (trigger, conditional) => ({
//   type: START_TRANSFER,
//   payload: trigger,
//   conditional,
// });
//
// export const askForProgress = response =>
//   ({
//     type: PROGRESS,
//       // payload: res
//     payload: response || response.responseJSON,
//   });
//
// export const selectedFile = file => {
//   // console.log('selectedFile', file);
//   return {
//     type: FILE,
//     payload: file,
//   }
// }
//
// // when the file is added inside the modal window
// // it was this.props.onFileAdded before
// // export const filesValidated = file => ({
// export const onFileAdded = files => {
//   // console.log('onFileAdded', files);
//
//   return {
//     type: ON_FILES_ADDED,
//     payload: files,
//   }
// }
//
// // // when the file is added inside the modal window
// // export const onFileAdded = file => ({
// //   type: on_files_added,
// //   payload: file,
// // });
// export const fileToBeTransferred = file => {
//   // console.log('fileToBeTransferred', file);
//   return {
//     type: FILE_TO_BE_TRANSFERRED,
//     payload: file,
//   }
// }
// //
// // // when the file is added inside the modal window
// // export const onFileAdded = file => {
// //   // console.log('onFileAdded', file);
// //   return {
// //     type: ON_FILE_ADDED,
// //     payload: file,
// //   }
// // }
//
// // this removes name of the package inside modal, when the modal is being closed
// export const removePkgName = remove => ({
//   type: REMOVE_PKG_NAME,
//   payload: remove,
// });
//
// export const errorMessage = (code, m) => ({
//   type: ERROR_MESSAGE,
//   code,
//   payload: m,
// });
//
// export const stateOfPackage = status => ({
//   type: STATE_OF_PACKAGE,
//   payload: status,
// });
//
// export const addRow = a =>
//   ({
//     type: ADD_ROW,
//     payload: a,
//   });
//
//
// export const currentlyActiveVersions = row =>
//   ({
//     type: CURRENTLY_ACTIVE_VERSIONS,
//     payload: row,
//   });
//
// export const localDataMainTable = data => ({
//   type: LOCAL_DATA_MAIN_TABLE,
//   payload: data,
// });
//
// export const cancelUpload = () => ({
//   type: CANCEL_UPLOAD,
// });
// export const cancelProgress = () => ({
//   type: CANCEL_PROGRESS,
// });
// export const cancelTransfer = () => ({
//   type: STOP_TRANSFER,
// });
//
// export const cancelError = error => ({
//   type: CANCEL_ERROR,
//   error,
// });
//
// export const startPolling = start => ({
//   type: START_POLLING,
//   start,
// });
//
// export const uniqueID = id =>
//   ({
//     type: UNIQUE_ID,
//     id,
//   });
//
// export const serverUnavailable = i => ({
//   type: SERVER_UNAVAILABLE,
//   payload: i
// })
//
// export const sendLogsToServer = (payload) => {
//
//   let request = $.ajax({
//     url: `${ROOT_URL}/uploadLog`,
//     type: 'POST',
//     data: getFormatData({
//       binaryString: window.btoa(unescape(encodeURIComponent(payload)))
//     })
//   }).catch(error => ({
//       code: error.status,
//       errorMessage: error.statusText,
//       payload: error
//     })
//   )
//
//   return {
//     type: LOGS_TO_SERVER,
//     payload: request
//   }
// }
//
// export const objectsToBeDeleted = (checked, pkgType, swType, version, index, reset) => {
//   // console.log('objectsToBeDeleted', checked, swType, version, index);
//   return {
//     type: OBJECTS_TO_BE_DELETED,
//     index,
//     item: {
//       checked,
//       pkgType,
//       swType,
//       version,
//       reset
//     }
//   }
// }
//
// export const filesPreparedForTransfer = array => {
//   // console.log('filesPreparedForTransfer', array);
//   return {
//     type: FILES_PREPARED_FOR_TRANSFER,
//     array
//   }
// }
//
// export const isUploadRunning = i => ({
//   type: IS_UPLOAD_RUNNING,
//   payload: i
// })
//
// export const disableRemoving = i => ({
//   type: DISABLE_REMOVING,
//   payload: i
// })
//
// // // when the file is added inside the modal window
// // export const onFileAdded = file => ({
// //   type: on_files_added,
// //   payload: file,
// // });
//
// // export const objectsToBeTransferred = (checked, pkgType, swType, version, index) => {
// //   // console.log(checked, swType, version, index);
// //   return {
// //     type: OBJECTS_TO_BE_TRANSFERRED,
// //     index,
// //     item: {
// //       checked,
// //       pkgType,
// //       swType,
// //       version,
// //     }
// //   }
// // }
//
// export const objectsToBeTransferredInit = data => ({
//   type: OBJECTS_TO_BE_TRANSFERRED_INIT,
//   payload: data,
// });
//
// export const objectsToBeTransferredUpdate = (name, checked, pkgType, version) => {
//   // console.log('objectsToBeTransferredUpdate', name, checked, dependencies, version, to_be_deleted, reset);
//   return {
//     type: OBJECTS_TO_BE_TRANSFERRED_UPDATE,
//     name,
//     checked,
//     pkgType,
//     version,
//   }
// }
//
// export const objectsToBeTransferredRemove = (name) => {
//   return {
//     type: OBJECTS_TO_BE_TRANSFERRED_REMOVE,
//     name
//   }
// }
//
// export const showBeforeTransferModal = (decision, content) => {
//   return {
//     type: SHOW_BEFORE_TRANSFER_MODAL,
//     decision,
//     content
//   }
// }
//
// export const progressBarIndeterminated = (payload) => {
//   return {
//     type: PROGRESS_BAR_INDETERMINATED,
//     payload
//   }
// }
//
// export const progressBarLoadingText = (text) => {
//   return {
//     type: PROGRESS_BAR_LOADING_TEXT,
//     text
//   }
// }
//
// export const uploadRunningFilesAdd = (obj) => {
//   return {
//     type: UPLOAD_RUNNING_FILES_ADD,
//     obj
//   }
// }
//
// export const uploadRunningFilesEmpty = (d) => {
//   return {
//     type: UPLOAD_RUNNING_FILES_EMPTY,
//     payload: d
//   }
// }
//
// export const amountOfObjectsToBeTransferred = (n) => {
//   return {
//     type: AMOUNT_OF_OBJECTS_TO_BE_TRANSFERRED,
//     payload: n
//   }
// }
//
//
//
//
//
// // export const stateOfCheckboxesInit = data => ({
// //   type: STATE_OF_CHECKBOXES_INIT,
// //   payload: data,
// // });
//
// // export const stateOfCheckboxesAdd = (name, checked, dependencies, version, to_be_deleted, reset, pkgType, swType, dateTime) => {
// //   // console.log('stateOfCheckboxesAdd', checked, swType, version);
// //   return {
// //     type: STATE_OF_CHECKBOXES_ADD,
// //     name,
// //     checked,
// //     dependencies,
// //     version,
// //     to_be_deleted,
// //     reset,
// //      pkgType,
// //      swType,
// //      dateTime
// //   }
// // }
//
// // export const stateOfCheckboxesRemove = (name, checked, dependencies, version, to_be_deleted, reset) => {
// //   // console.log(checked, swType, version, index);
// //   return {
// //     type: STATE_OF_CHECKBOXES_REMOVE,
// //     name,
// //     checked,
// //     dependencies,
// //     version,
// //     to_be_deleted,
// //     reset
// //   }
// // }
//
// // export const stateOfCheckboxesUpdate = (name, checked, dependencies, version, to_be_deleted, reset, pkgType, swType, dateTime) => {
// //   // console.log('stateOfCheckboxesUpdate', name, checked, dependencies, version, to_be_deleted, reset);
// //   return {
// //     type: STATE_OF_CHECKBOXES_UPDATE,
// //     name,
// //     checked,
// //     dependencies,
// //     version,
// //     to_be_deleted,
// //     reset,
// //     pkgType,
// //     swType,
// //     dateTime
// //   }
// // }
//
// // export const stateOfCheckboxes = (name, checked, dependencies, version, to_be_deleted, reset) => {
// //   // console.log(checked, swType, version, index);
// //   return {
// //     type: STATE_OF_CHECKBOXES,
// //     name,
// //     checked,
// //     dependencies,
// //     version,
// //     to_be_deleted,
// //     reset
// //   }
// // }
//
// // export const stateOfCheckboxesFlush = (i) => {
// //   // console.log(checked, swType, version, index);
// //   return {
// //     type: STATE_OF_CHECKBOXES_FLUSH,
// //     payload: i
// //   }
// // }
//
// // export const findDependencies = (arr, name) => {
// //   // console.log('findDependencies', name);
// //   return {
// //     type: FIND_DEPENDENCIES,
// //     arr,
// //     name
// //   }
// // }
