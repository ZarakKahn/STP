<div className="w-full sm:w-1/2 md:w-60 m-2">
  <p className="mb-1 text-center">Date Select:</p>
  <div className="border-2 border-gray-400 w-full relative">
    <Datepicker
      value={dateRange}
      onChange={handleValueChange}
      primaryColor={"red"}
      showShortcuts={true}
      placeholder={"DD-MM-YY to DD-MM-YY"}
      portal={true}
      popperPlacement="bottom"  // Ensures the dropdown opens downwards
      popperProps={{
        modifiers: [
          {
            name: 'preventOverflow',
            options: {
              boundary: 'viewport',
            },
          },
          {
            name: 'flip',
            enabled: false,  // Prevent flipping upwards
          },
        ],
      }}
    />
  </div>
</div>
