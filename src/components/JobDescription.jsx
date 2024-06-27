const JobDescription = ({ description }) => (
    <div className="mb-6">
      <h2 className="mb-2 text-sm text-gray-500">About the Job</h2>
      <ul className="space-y-2 list-disc list-inside">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );

export default JobDescription;