<div className="w-auto sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-2">
          <p className="mb-1 text-center">Handler:</p>
          <Select
            options={[
              { value: 'All', label: 'All' },
              { value: 'AL GHANI LUBRICANTS-HANDLER', label: 'AL GHANI LUBRICANTS-HANDLER' },
              { value: 'AL HASSAN TRADERS', label: 'AL HASSAN TRADERS' },
              { value: 'TRADE N MOVE (PRIVATE) LIMITED', label: 'TRADE N MOVE (PRIVATE) LIMITED' },
              { value: 'TOPLINK ENTERPRISES', label: 'TOPLINK ENTERPRISES' },
              { value: 'DYNAMIC ENTERPRISES', label: 'DYNAMIC ENTERPRISES' },
              { value: 'UMID OIL AGENCY', label: 'UMID OIL AGENCY' },
              { value: 'KHATTAK ENTERPRISES', label: 'KHATTAK ENTERPRISES' },
              { value: 'SN ENTERPRISES', label: 'SN ENTERPRISES' },
              { value: 'KHAIRPUR ENTERPRISES HANDLER (INTERIOR SINDH)', label: 'KHAIRPUR ENTERPRISES HANDLER (INTERIOR SINDH)' },
            ]}
            onChange={(value) => handleDropdownChange(value, 'handler')}
            className="w-full border-2 border-gray-400 rounded-md"
          />
        </div>
