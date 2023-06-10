import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const LatestValuesButton = ({ onClick }) => {
  return (
    <button className="btn btn-primary me-2" onClick={onClick}>
      Latest values
    </button>
  );
};

const HighlightValuesButton = ({ onClick }) => {
  return (
    <button className="btn btn-secondary me-2" onClick={onClick}>
      Highest subset values
    </button>
  );
};

const LuminosityTable = () => {
  const [entries, setEntries] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:4000/luminosity/latest-values');
      const data = response.data;
      setEntries(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleClick = useCallback(() => {
    fetchData();
  }, [fetchData]);

  const handleHighlight = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:4000/luminosity/highest-subset-values');
      const highlightedValues = response.data.map(entry => entry.value);

      const updatedEntries = entries.map(entry => {
        if (highlightedValues.includes(entry.value)) {
          return { ...entry, highlighted: true };
        }
        return entry;
      });

      setEntries(updatedEntries);
    } catch (error) {
      console.error(error);
    }
  }, [entries]);
  
  return (
    <div>
      <h1>Luminosity Table</h1>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Value</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr  key={index} className={entry.highlighted === true ? 'table-primary' : ''}>
              <td>{entry.value}</td>
              <td>{entry.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
      <div class="btn-group">
        <LatestValuesButton onClick={handleClick} />
        <HighlightValuesButton onClick={handleHighlight} />
      </div>
    </div>
    </div>
  );
};

export default LuminosityTable;