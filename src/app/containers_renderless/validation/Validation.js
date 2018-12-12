// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import * as actions from '../../actions';
//
// import { getFormatData, parseDataFromServer, hashChunk } from '../../helpers';
//
// const VALIDATION_FIRST_BYTES_START = window.VALIDATION_FIRST_BYTES_START || 0;
// const VALIDATION_FIRST_BYTES_END = window.VALIDATION_FIRST_BYTES_END || 100000;
//
// class Validation extends Component {
//   constructor(props) {
//     super(props)
//
//     this.state = {
//       filesArray: []
//     }
//   }
//
//   componentWillReceiveProps(nextProps) {
//     // console.log('nextProps.files.length, this.props.files.length', nextProps.files.length, this.props.files.length);
//     // if (nextProps.files.length > this.props.files.length) {
//     //   console.log('YES');
//     // }
//
//     const {files} = nextProps
//
//     // console.log('componentWillReceiveProps', files);
//
//     this.setState({
//       files,
//       filesArray: []
//     })
//
//     this.prepareFilesToValidation(files)
//   }
//
//   componentDidMount() {
//     const {files} = this.props
//
//     // console.log('componentDidMount', files);
//
//     this.setState({
//       files,
//       filesArray: []
//     })
//
//     this.prepareFilesToValidation(files)
//   }
//
//   prepareFilesToValidation = (files) => {
//
//     // this.props.filesSelected([])
//     this.props.onFileAdded(0);
//
//     // console.log('Validation', this.props);
//
//     // e.preventDefault();
//     //
//     // const files = e.target.files;
//
//     // const {files} = this.state
//
//     // console.log('files inside Validation', files);
//
//     // const validatedFiles = this.props.on_files_added
//
//     // FileList object, to be casted to Array
//     let filesArray = []
//
//     // // only the names Array
//     let fileNamesArr = []
//
//     // Array of objects with metadata included
//     let filesArrayOfObjects = []
//
//     // Array of content which goes to AJAX /validation (content of validated files + newly dropped Files)
//     let goToAjaxArrayOfObjects = []
//
//     // cast FileList object to Array
//     for (var file in files) {
//       var obj = files[file];
//       if (typeof obj === "object") {
//         // console.log('typeof obj === "object"', obj);
//         filesArray.push(obj)
//       }
//     }
//
//     // console.log('filesArray 000', filesArray);
//
//     filesArray.forEach(file => {
//
//       // fill the array of names for validation AddedFiles.js
//       fileNamesArr.push({
//         'fileName': file.name,
//       })
//     })
//
//     this.setState({ filesArray }, () => {
//
//       // console.log('this.state.filesArray', this.state.filesArray);
//       this.state.filesArray.forEach((file, i) => {
//
//         // hash what is left (not validated files)
//         hashChunk(file, VALIDATION_FIRST_BYTES_START, VALIDATION_FIRST_BYTES_END).then(data => {
//           let encodedData = data[0]
//
//           // console.log('file.name', file.name);
//           // use the output from hashChunk to be sent to /validation
//           filesArrayOfObjects.push({
//             'fileName': file.name,
//             'metadata': window.btoa(encodedData),
//             'fileSize': file.size,
//           })
//
//           // console.log('filesArray.length, filesArrayOfObjects.length', filesArray.length, filesArrayOfObjects.length);
//
//           // when last chunk has been HASHED, do /validation request
//           if (filesArray.length === filesArrayOfObjects.length) {
//             // goToAjaxArrayOfObjects = _.concat(validatedFiles, filesArrayOfObjects)
//             this.sendingAjaxToValidation(filesArrayOfObjects)
//           }
//         })
//         .catch(err => {
//
//           LOGS ? console.log('error in hashChunk in Validation.js', err) : ''
//         })
//       })
//     })
//
//
//
//     //  prepare array of full sized files from drop for later transfer in <IconsRow />
//     this.props.filesPreparedForTransfer(filesArray)
//
//     // array of files which are selected by user, they need to be displayed after drop, in the validation list component
//     this.props.filesSelected(fileNamesArr)
//   }
//
//   sendingAjaxToValidation(arr) {
//
//     // console.log('sendingAjaxToValidation', arr);
//
//     let _this = this;
//
//     $.ajax({
//       url: `${ROOT_URL}/validation`,
//       type: 'POST',
//       data: getFormatData({
//         ...arr
//       })
//     }).done(function(res, status, xhr){
//
//       if (xhr.getResponseHeader('Content-Location')) {
//         window.location.href = '/' + xhr.getResponseHeader('Content-Location')
//       }
//
//       return _this.ajaxResult(parseDataFromServer(res))
//     }).fail(function(res){
//       LOGS ? console.log('RESPONSE /VALIDATION ERROR', res) : ''
//
//       return _this.props.errorMessage(res.status, res.statusText)
//     })
//   }
//
//   ajaxResult(result) {
//     // console.log('ajaxResult', result);
//     this.props.onFileAdded(result.validationResponse);
//
//     if (this.props.action === 'Transfer' && result.validationResponse.every(obj => obj.validation === true)) {
//       // console.log('this.props', this.props);
//       // console.log('ajaxResult', result);
//
//       this.props.startTransfer(true, true);
//       // this.props.askForProgress({
//       //   phase: 'upload',
//       //   progress: '',
//       //   reset: false,
//       // });
//     } else if (this.props.action === 'Transfer' && !result.validationResponse.every(obj => obj.validation === true)) {
//
//       // console.log('VALIDATION RESULT ELSE', result);
//
//       this.props.showBeforeTransferModal(1, result)
//     }
//   }
//
//   componentWillUnmount() {
//     this.setState({ filesArray: [] })
//   }
//
//   render() {
//     return null;
//   }
// }
//
// // reading data from the state
// const mapStateToProps = state =>
//   // whatever is returned here, gets in as a prop
//   ({
//     // on_files_added: state.on_files_added.payload || [],
//   })
//
// export default connect(mapStateToProps, actions)(Validation);
