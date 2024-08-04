import React, { useState, useEffect } from 'react';

function ConfigurationsForm({ addConfiguration, editConfiguration, updateConfiguration, setEditConfiguration }) {
    const [customField, setCustomField] = useState('');
    const [jiraField, setJiraField] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editConfiguration.id) {
            updateConfiguration({ id: editConfiguration.id, customField: customField, jiraField })
        }
        else {
            addConfiguration(customField, jiraField);
        }
        setCustomField('');
        setJiraField({ "jiraField": '' });
    };

    useEffect(() => {
        if (editConfiguration.id) {
            setCustomField(editConfiguration.customField);
            setJiraField(editConfiguration.jiraField);
        }
    }, [editConfiguration])

    const updateJiraField = (updatedValue) => {
        setJiraField({ "jiraField": updatedValue });
    }



    const options = [
        'jiraField1',
        'jiraField2',
        'jiraField3',
        'jiraField4',
        'jiraField5',
        'jiraField6',
        'jiraField7',
        'jiraField8',
        'jiraField9',
        'jiraField10',
    ];

    console.log("jiraField :", jiraField, jiraField.jiraField);

    return (
        <div className="container">

            <form onSubmit={handleSubmit}>
                <div className="box">
                    <label>
                        Custom Field :
        <input
                            type="text"
                            value={customField}
                            onChange={(e) => setCustomField(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="box">
                    <label htmlFor="dropdown">Jira Field :</label>
                    <select id="dropdown" defaultValue="" value={jiraField.jiraField} onChange={e => updateJiraField(e.target.value)}>
                        <option value="" disabled>Select an option</option>
                        {options.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div className="box">
                    <button type="submit">{editConfiguration.id ? "Edit Configuration" : "Add Configuration"}</button>
                </div>
                <div className="box">
                    {editConfiguration.id ?
                        <button onClick={() => {
                            setEditConfiguration({});
                            setCustomField('');
                            setJiraField({});
                        }}>Cancel</button>
                        : ''}
                </div>
            </form>
        </div>
    );
}

export default ConfigurationsForm;
