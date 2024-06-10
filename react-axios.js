import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

const HandlerDropdown = () => {
  const [handlers, setHandlers] = useState([]);

  useEffect(() => {
    const fetchHandlers = async () => {
      try {
        const response = await axios.get('http://portal.mashitec.com/SalesWebApi/api/GetHandler/?user=asim&region=ALL');
        const handlerOptions = response.data.map(handler => ({ value: handler, label: handler }));
        setHandlers(handlerOptions);
      } catch (error) {
        console.error('Error fetching handlers:', error);
      }
    };

    fetchHandlers();
  }, []);

  const handleDropdownChange = (selectedOption) => {
    console.log('Selected handler:', selectedOption);
  };

  return (
    <div className="w-auto sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-2">
      <p className="mb-1 text-center">Handler:</p>
      <Select
        options={[{ value: 'All', label: 'All' }, ...handlers]}
        onChange={(value) => handleDropdownChange(value)}
        className="w-full border-2 border-gray-400 rounded-md"
      />
    </div>
  );
};

export default HandlerDropdown;
