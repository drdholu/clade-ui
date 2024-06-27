
const CompanyDetails = ({ company }) => (
    <div className="p-6 mt-6 rounded-lg bg-gray-50">
      <div className="flex items-center mb-4 space-x-2">
        <div className="flex items-center justify-center w-8 h-8 text-xl font-bold text-white bg-blue-500 rounded">
          A
        </div>
        <h2 className="text-xl font-bold">{company.name}</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <p className="text-sm text-gray-500">Company size</p>
          <p className="font-medium">{company.size}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Type</p>
          <p className="font-medium">{company.type}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Sector</p>
          <p className="font-medium">{company.sector}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Funding</p>
          <p className="font-medium">{company.funding}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Founded in</p>
          <p className="font-medium">{company.foundedIn}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Founded by</p>
          <p className="font-medium">{company.foundedBy}</p>
        </div>
      </div>
    </div>
  );

export default CompanyDetails;