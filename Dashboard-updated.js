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
      containerClassName="absolute bottom-0 left-0 z-50 md:top-full md:bottom-auto"
    />
  </div>
</div>
