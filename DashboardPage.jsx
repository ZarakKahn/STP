<div className="flex flex-wrap items-center p-5 bg-gray-100">
        <div className="border-2 border-gray-400 m-2 w-64">
          <Datepicker
            value={value}
            onChange={handleValueChange}
            primaryColor={"red"}
            showShortcuts={true}
            placeholder={"DD-MM-YY to DD-MM-YY"}
          />
        </div>
        <div className=""><p >Date Select:</p></div>
        
        <div className="m-2 w-60">
          <Select
            options={options}
            className={dropStyle}
          />
          <p className="">Region:</p>
        </div>

        <div className="m-2 w-60">
          <Select
            options={handlers}
            className={dropStyle}
          />
          <p className="">Handler:</p>
        </div>

        <div className="m-2 w-60">
          <Select
            options={teams}
            className={dropStyle}
          />
          <p className="">Team:</p>
        </div>

        <button className="m-2 w-fit h-12 flex justify-center items-center rounded-md
   shadow-sm px-4 py-2 bg-red-700 text-white hover:bg-red-800">Search</button>
      </div>
