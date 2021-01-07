import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import { Editor } from '@tinymce/tinymce-react';


import extendedFormsStyle from "assets/jss/material-dashboard-pro-react/views/extendedFormsStyle.jsx";

class TextEditor extends React.Component {
  
  render() {
    const { input, placeholder } = this.props;
    return (
      
            <FormControl >
                <Editor
                    apiKey='ciub0gjh4346udf5npj2yg77rt2ewkl162hcxz8cwn2z88io'
                    initialValue="<p>This is the initial content of the editor</p>"
                    init={{
                      height: 400,
                      width: 600,
                      menubar: 'file edit view insert format tools table help',
                      plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
                      toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
                      toolbar_sticky: false,
                      autosave_ask_before_unload: true,
                      autosave_interval: '30s',
                      autosave_prefix: '{path}{query}-{id}-',
                      autosave_restore_when_empty: false,
                      autosave_retention: '2m',
                      image_advtab: true,
                      branding:false
                    }}
                    value={input.value}
                    onEditorChange={input.onChange}
                />
            </FormControl>
    );
  }
}

TextEditor.propTypes = {
  classes: PropTypes.object
};

export default withStyles(extendedFormsStyle)(TextEditor);
