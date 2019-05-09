import React from 'react';
import './App.css';
import AceEditor from 'react-ace';
import 'brace';
import 'brace/ext/searchbox';
import 'brace/mode/sql';
import 'brace/theme/sqlserver';
import 'brace/ext/language_tools';
import _ from 'lodash';


class Editor extends React.Component {

    customAceEditorCompleter = {
        getCompletions: (editor, session, caretPosition2d, prefix, callback) => {
            console.log(prefix);
            let wordList = ["select", "from"];
            callback(null, wordList.map(function(word) {
                return {
                    caption: word,
                    value: word,
                    meta: "static"
                };
            }));
        },
        getDocTooltip: (item) => {
        }
    };

    constructor(things){
        super(things);
    }
    handleChange(value)  {
        const parser = require('js-sql-parser');
        try {
            console.log("changed " + parser.parse(value));
        } catch(err) {
            console.log("not parseable");
        }
    };
    render() {
        return (
            <div className="Editor">
                            <AceEditor
                                focus={true}
                                editorProps={{ $blockScrolling: Infinity }}
                                height={300 + 'px'}
                                highlightActiveLine={true}
                                mode="sql"
                                name="codeEditor"
                                onChange={this.hafndleChange}
                                showGutter={true}
                                showPrintMargin={true}
                                theme="sqlserver"
                                readOnly={false}
                                value=""
                                width={500 + 'px'}
                                setOptions={{
                                    enableBasicAutocompletion: [this.customAceEditorCompleter],
                                    enableLiveAutocompletion: [this.customAceEditorCompleter],
                                    showLineNumbers: true,
                                    enableSnippets: true,
                                    tabSize: 2
                                }}
                            />
            </div>
        );
    }
}

export default Editor;
