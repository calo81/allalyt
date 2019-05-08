import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MultiGrid} from 'react-virtualized';
import Measure from 'react-measure';
import moment from 'moment';
import 'react-virtualized/styles.css';

class StreamResult extends React.PureComponent {
    renderValue = (input, fieldMeta) => {
        if (input === null || input === undefined) {
            return <em>null</em>;
        } else if (input === true || input === false) {
            return input.toString();
        } else if (fieldMeta.datatype === 'date') {
            return moment.utc(input).format('MM/DD/YYYY HH:mm:ss');
        } else if (typeof input === 'object') {
            return JSON.stringify(input, null, 2);
        } else {
            return input;
        }
    };

    dataCellRenderer = ({columnIndex, key, rowIndex, style}) => {
        return (<div
                className={'relative bb b--light-gray ph2 '}
                key={key}
                style={Object.assign({}, style, {lineHeight: '30px'})}>
                <div className="truncate">{this.renderValue("some_value", {})}</div>
            </div>
        );
    };

    headerCellRenderer = ({ columnIndex, key, style }) => {
        return (
            <div
                className={
                    'flex bb b--moon-gray justify-between ph2 fw7 bg-near-white'
                }
                key={key}
                style={Object.assign({}, style, { lineHeight: '30px' })}
            >
                <div>header</div>
            </div>
        );
    };

    cellRenderer = params => {
        if (params.rowIndex === 0) {
            return this.headerCellRenderer(params);
        }
        return this.dataCellRenderer(params);
    };

    render() {
        return (
            <Measure
                bounds
                onResize={contentRect => {
                    this.setState({dimensions: contentRect.bounds});
                }}
            >
                {({measureRef}) => (
                    <div
                        ref={measureRef}
                        id="result-grid"
                        className="h-100 w-100 aspect-ratio--object "
                    >
                        <MultiGrid
                            width={500}
                            height={300}
                            rowHeight={30}
                            columnWidth={200}
                            columnCount={2}
                            rowCount={50}
                            cellRenderer={this.cellRenderer}
                            fixedRowCount={1}
                        />
                    </div>
                )}
            </Measure>
        );
    }
}

export default StreamResult;
