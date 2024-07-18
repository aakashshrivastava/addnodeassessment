import React, { useState, useEffect } from 'react';
import ConfigurationsForm from './ConfiguratonsForm';
import ConfigurationsGrid from './ConfigurationsGrid';
import { async } from 'q';

const Configurations = () => {

    const [configurations, setConfigurations] = useState([]);
    const [editConfiguration, setEditConfiguration] = useState({});

    const fetchConfigurations = async () => {
        try {
            const response = await fetch('http://localhost:8080/configurations');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setConfigurations(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchConfigurations();
    }, [])

    const addConfiguration = async (customField, jiraField) => {
        try {
            const response = await fetch('http://localhost:8080/configurations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ customField, jiraField })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            fetchConfigurations();
        } catch (error) {
            console.error('Error sending POST request:', error);
        }


    }
    const deleteConfiguration = async (id) => {
        try {
            await fetch('http://localhost:8080/configurations/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id })
            });

            fetchConfigurations();
        } catch (error) {
            console.error('Error sending POST request:', error);
        }


    }
    const updateConfiguration = async (data) => {
        try {
            const response = await fetch('http://localhost:8080/configurations/' + data.id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: data.id, customField: data.customField, jiraField: data.jiraField })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            fetchConfigurations();
            setEditConfiguration({});
        } catch (error) {
            console.error('Error sending POST request:', error);
        }


    }

    return (
        <>
            <h1>Configurations</h1>
            <ConfigurationsForm addConfiguration={addConfiguration}
                updateConfiguration={updateConfiguration}
                editConfiguration={editConfiguration}
                setEditConfiguration={setEditConfiguration}

            />
            <ConfigurationsGrid configurations={configurations}
                updateConfiguration={setEditConfiguration}
                deleteConfiguration={deleteConfiguration}
            />
        </>
    )
}

export default Configurations;