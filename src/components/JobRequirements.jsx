import { Globe, Clock3, Briefcase } from "lucide-react";

const SkillIcon = ({ skill }) => {
  const colors = {
    Figma: "bg-purple-500",
    "Adobe Illustrator": "bg-orange-500",
    "Adobe XD": "bg-pink-500",
  };

  return (
    <div
      className={`w-6 h-6 rounded ${
        colors[skill] || "bg-gray-500"
      } flex items-center justify-center text-white text-xs font-bold`}
    >
      {skill.charAt(0)}{" "}
    </div>
  );
};

const JobRequirements = ({ skills, language, type, experience }) => (
  <div className="mb-6 space-y-6 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4">
    <div>
      <h3 className="mb-2 font-semibold">Skills Required</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center px-3 py-1 space-x-2 bg-gray-100 rounded-full"
          >
            <SkillIcon skill={skill} />
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
    <div>
      <h3 className="mb-2 font-semibold">Preferred Language</h3>
      <div className="flex items-center px-3 py-1 space-x-2 bg-gray-100 rounded-full w-max">
        <Globe className="w-6 h-6 text-gray-500" />
        <span>{language}</span>
      </div>
    </div>
    <div>
      <h3 className="mb-2 font-semibold">Type</h3>
      <div className="flex items-center px-3 py-1 space-x-2 bg-gray-100 rounded-full w-max">
        <Briefcase className="w-6 h-6 text-gray-500" />
        <span>{type}</span>
      </div>
    </div>
    <div>
      <h3 className="mb-2 font-semibold">Years of Experience</h3>
      <div className="flex items-center px-3 py-1 space-x-2 bg-gray-100 rounded-full w-max">
        <Clock3 className="w-6 h-6 text-gray-500" />
        <span>{experience}</span>
      </div>
    </div>
  </div>
);


export default JobRequirements;