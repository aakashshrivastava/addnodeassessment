import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import CustomEditButtonComponent from './CustomEditButtonComponent';
import CustomDeleteButtonComponent from './CustomDeleteButtonComponent';

function ConfigurationsGrid({ configurations, updateConfiguration, deleteConfiguration }) {
    const [colDefs, setColDefs] = useState([
        {
            field: "customField",
            headerName: "Custom Field",
        },
        {
            field: "jiraField.jiraField",
            headerName: "Jira Field",
        },
        {
            field: "edit",
            headerName: "Edit",
            cellRenderer: CustomEditButtonComponent,
        },
        {
            field: "delete",
            headerName: "delete",
            cellRenderer: CustomDeleteButtonComponent,
        }
    ]);

    return (
        <div
            className="ag-theme-quartz" // applying the Data Grid theme
            style={{ height: 500, width: 800, paddingTop: 30, paddingLeft: 30 }} // the Data Grid will fill the size of the parent container
        >
            <AgGridReact
                rowData={configurations}
                columnDefs={colDefs}
                context={{
                    updateConfiguration,
                    deleteConfiguration
                }}
            />
        </div>
    );
}


export default ConfigurationsGrid;