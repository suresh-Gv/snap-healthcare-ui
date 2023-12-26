import React, { useState } from 'react';
import RichTextEditor from 'react-rte';

export const RichText = () => {
  const [editorValue, setEditorValue] = useState(
    RichTextEditor.createEmptyValue()
  );

  const handleChange = (value) => {
    setEditorValue(value);
  };

  const toolbarConfig = {
    display: [
      'INLINE_STYLE_BUTTONS',
      'BLOCK_TYPE_BUTTONS',
      'LINK_BUTTONS',
      'BLOCK_TYPE_DROPDOWN',
      'HISTORY_BUTTONS',
    ],
    INLINE_STYLE_BUTTONS: [
      { label: 'Bold', style: 'BOLD' },
      { label: 'Italic', style: 'ITALIC' },
      { label: 'Underline', style: 'UNDERLINE' },
      { label: 'Strikethrough', style: 'STRIKETHROUGH' },
      { label: 'Code', style: 'CODE' },
    ],
    BLOCK_TYPE_BUTTONS: [
      { label: 'UL', style: 'unordered-list-item' },
      { label: 'OL', style: 'ordered-list-item' },
      // { label: 'H1', style: 'header-one' },
      // { label: 'H2', style: 'header-two' },
      // { label: 'H3', style: 'header-three' },
      // { label: 'H4', style: 'header-four' },
      // { label: 'H5', style: 'header-five' },
      // { label: 'H6', style: 'header-six' },
      { label: 'Blockquote', style: 'blockquote' },
      { label: 'Code Block', style: 'code-block' },
    ],
    LINK_BUTTONS: [
      { label: 'Link', style: 'LINK' },
      { label: 'Unlink', style: 'unstyled' },
    ],
    BLOCK_TYPE_DROPDOWN: [
      { label: 'Normal', style: 'unstyled' },
      { label: 'Heading 1', style: 'header-one' },
      { label: 'Heading 2', style: 'header-two' },
      { label: 'Heading 3', style: 'header-three' },
      { label: 'Heading 4', style: 'header-four' },
      { label: 'Heading 5', style: 'header-five' },
      { label: 'Heading 6', style: 'header-six' },
      { label: 'Blockquote', style: 'blockquote' },
      { label: 'Code Block', style: 'code-block' },
    ],
    HISTORY_BUTTONS: [
      { label: 'Undo', style: 'undo' },
      { label: 'Redo', style: 'redo' },
    ],
  };
  const styleMap = {
		CODE: {
	    	backgroundColor: '#f3f3f3',
	    	fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
	    	fontSize: 16,
	    	padding: 2,
	  	},
	};

  return (
    <RichTextEditor
      value={editorValue}
      onChange={handleChange}
      toolbarConfig={toolbarConfig}
      showToolbar={false}
      placeholder="Click here to reply"
      editorClassName="texteditor_height"
      toolbarClassName = "ddddddddddddd"
      customStyleMap={styleMap}




    />
  );
};
