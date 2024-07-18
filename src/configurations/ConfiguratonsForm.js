import React, { useState, useEffect } from 'react';

function ConfigurationsForm({ addConfiguration, editConfiguration, updateConfiguration, setEditConfiguration }) {
    const [customField, setCustomField] = useState('');
    const [jiraField, setJiraField] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editConfiguration.id) {
            updateConfiguration({ id: editConfiguration.id, customField: customField, jiraField: jiraField })
        }
        else {
            addConfiguration(customField, jiraField);
        }
        setCustomField('');
        setJiraField('');
    };

    useEffect(() => {
        if (editConfiguration.id) {
            setCustomField(editConfiguration.customField);
            setJiraField(editConfiguration.jiraField);
        }
    }, [editConfiguration])

    return (
        <div className="container">

            <form onSubmit={handleSubmit}>
                <div className="box">
                    <label>
                        Custom Field:
        <input
                            type="text"
                            value={customField}
                            onChange={(e) => setCustomField(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="box">
                    <label>
                        Jira Field:
        <input

                            type="text"
                            value={jiraField}
                            onChange={(e) => setJiraField(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="box">
                    <button type="submit">{editConfiguration.id ? "Edit Configuration" : "Add Configuration"}</button>
                </div>
                <div className="box">
                    {editConfiguration.id ?
                        <button onClick={() => {
                            setEditConfiguration({});
                            setCustomField('');
                            setJiraField('');
                        }}>Cancel</button>
                        : ''}
                </div>
            </form>
        </div>
    );
}

export default ConfigurationsForm;
