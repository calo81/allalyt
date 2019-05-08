import React from 'react';
import logo from './logo.svg';
import './App.css';
import Measure from 'react-measure';
import AceEditor from 'react-ace';
import 'brace';
import 'brace/ext/searchbox';
import 'brace/mode/sql';
import 'brace/theme/sqlserver';

class Editor extends React.Component {

    constructor(dependencies) {
        super();
    }

    handleChange(){
        console.log("changed");
    }
    render() {
        return (
            <div className="Editor">
                <Measure bounds>
                    {({ measureRef }) => (
                        <div ref={measureRef} className="h-100 w-100">
                            <AceEditor
                                focus={true}
                                editorProps={{ $blockScrolling: Infinity }}
                                enableBasicAutocompletion
                                enableLiveAutocompletion
                                height={300 + 'px'}
                                highlightActiveLine={true}
                                mode="sql"
                                name="query-ace-editor"
                                onChange={this.handleChange}
                                showGutter={true}
                                showPrintMargin={true}
                                theme="sqlserver"
                                readOnly={false}
                                value=""
                                width={500 + 'px'}
                            />
                        </div>
                    )}
                </Measure>
            </div>
        );
    }
}

export default Editor;
