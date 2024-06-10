import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select'; // Assuming you're using 'react-select'

const YourComponent = ({ user }) => {
  const [handlerOption, setHandlerOption] = useState([]);
  const [selectedHandler, setSelectedHandler] = useState('All');

  const getHandlers = async () => {
    try {
      const response = await axios.post(`http://portal.mashitec.com/SalesWebApi/api/GetHandler/?user=${user}&region=ALL`);
      const options = response.data.map(handler => ({ value: handler.id, label: handler.name })); // Modify according to your data structure
      setHandlerOption(options);
    } catch (error) {
      console.error("Error fetching handlers:", error);
    }
  };

  useEffect(() => {
    getHandlers();
  }, []);

  const handleDropdownChange = (selectedOption) => {
    setSelectedHandler(selectedOption.value);
  };

  return (
    <div className="w-auto sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-2">
      <p className="mb-1 text-center">Handler:</p>
      <Select
        options={handlerOption}
        onChange={handleDropdownChange}
        value={handlerOption.find(option => option.value === selectedHandler)}
        className="w-full h-auto text-sm border-2 border-gray-400 rounded-md"
      />
    </div>
  );
};

export default YourComponent;
