const JobDescription = ({ description }) => (
    <div className="mb-6">
      <h2 className="mb-4 text-xl font-bold">About the Job</h2>
      <ul className="space-y-2 list-disc list-inside">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );

export default JobDescription;