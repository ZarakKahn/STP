 const [handlerOption , setHandlerOption] = useState([]);
  const [selectedHandler, setSelectedHandler] = useState('All');
const getHandlers = async () => {
    try {
      const response = await axios.post(`http://portal.mashitec.com/SalesWebApi/api/GetHandler/?user=${user}&region=ALL`);
      setHandlerOption(response.data);
    } catch (error) {
      console.error("Error fetching handlers:",error);
    };
  };
  useEffect(() => {
    getHandlers();},[])

 const handleDropdownChange = (value, field) => {
    setDropdownValues(prevState => ({
      ...prevState,
      [field]: value[0].value
    }));
    setSelectedHandler(value.value);
  };



how can i put the result of the above function in the below select component

 <div className="w-auto sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-2">
          <p className="mb-1 text-center">Handler:</p>
          <Select
          options={handlerOption}
            onChange={handleDropdownChange}
              values={[{ value: selectedHandler }]}
            className="w-full h-auto text-sm border-2 border-gray-400 rounded-md"
          />
        </div>
