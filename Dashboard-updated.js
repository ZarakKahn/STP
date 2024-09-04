<div className="relative">
  <Datepicker
    value={dateRange}
    onChange={handleValueChange}
    primaryColor={"red"}
    showShortcuts={true}
    placeholder={"DD-MM-YY to DD-MM-YY"}
    theme={"light"}
    popperPlacement="bottom-start" // or "top-end", depending on your layout
    popperModifiers={[
      {
        name: 'preventOverflow',
        options: {
          boundary: 'viewport',
        },
      },
      {
        name: 'flip',
        options: {
          fallbackPlacements: ['top-start'], // Tries top-start if there’s no space at bottom
        },
      },
    ]}
  />
</div>
