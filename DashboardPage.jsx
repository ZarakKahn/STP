<div className="flex flex-wrap items-center p-5 bg-gray-100">
  <div className="w-full m-2">
    <p className="mb-1">Date Select:</p>
    <div className="border-2 border-gray-400 w-64">
      <Datepicker
        value={value}
        onChange={handleValueChange}
        primaryColor={"red"}
        showShortcuts={true}
        placeholder={"DD-MM-YY to DD-MM-YY"}
      />
    </div>
  </div>
  
  <div className="m-2 w-60">
    <p className="mb-1">Region:</p>
    <Select
      options={options}
      className={dropStyle}
    />
  </div>

  <div className="m-2 w-60">
    <p className="mb-1">Handler:</p>
    <Select
      options={handlers}
      className={dropStyle}
    />
  </div>

  <div className="m-2 w-60">
    <p className="mb-1">Team:</p>
    <Select
      options={teams}
      className={dropStyle}
    />
  </div>

  <button className="m-2 w-fit h-12 flex justify-center items-center rounded-md shadow-sm px-4 py-2 bg-red-700 text-white hover:bg-red-800">Search</button>
</div>
