<Select
            options={[{ value: 'All', label: 'All' }, ...handlers]}
            onChange={(value) => handleDropdownChange(value)}
            className="w-full text-sm p-2 border-2 border-gray-400 rounded-md "
          />

              when i select a value from the select list there is an extra line with cursor which effect the seletc box
