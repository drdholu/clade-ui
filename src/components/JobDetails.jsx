import CompanyDetails from "./CompanyDetails";
import JobDescription from "./JobDescription";
import JobHeader from "./JobHeader";
import JobRequirements from "./JobRequirements";

const JobDetails = () => {
    const jobData = {
      title: "Senior Product Designer",
      location: "Delaware, USA",
      salary: "$300k-$400k",
      status: "Open",
      skills: ["Figma", "Adobe Illustrator", "Adobe XD"],
      language: "English",
      type: "Full time",
      experience: "3+ Years of Experience",
      description: [
        "Handle the UI/UX research design",
        "Work on researching on latest web applications designs & trends",
        "Work on conceptualizing and visualizing",
        "Work on creating graphics content and other graphic related works",
      ],
    };
  
    const companyData = {
      name: "Atlassian",
      size: "1k - 2k Employees",
      type: "Private",
      sector: "Information Technology, Infrastructure",
      funding: "Bootstrapped",
      foundedIn: "2019",
      foundedBy: "Scott Farquhar, Mike Cannon-Brookes",
    };
  
    return (
      <div className="p-6 px-7">
        <JobHeader
          title={jobData.title}
          location={jobData.location}
          salary={jobData.salary}
          status={jobData.status}
        />
        <hr className="my-6 border-gray-200" />
        <JobRequirements
          skills={jobData.skills}
          language={jobData.language}
          type={jobData.type}
          experience={jobData.experience}
        />
        <hr className="my-6 border-gray-200" />
        <JobDescription description={jobData.description} />
        <hr className="my-6 border-gray-200" />
        <CompanyDetails company={companyData} />
      </div>
    );
  };

export default JobDetails

