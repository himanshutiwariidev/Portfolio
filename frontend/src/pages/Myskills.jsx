import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-4xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-4xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400 text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-800 text-4xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl" /> },
  { name: "Git & GitHub", icon: <FaGithub className="text-black text-4xl" /> },
];

export default function MySkills() {
  return (
    <div className="py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-cyan-500 mb-8">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-lg transition duration-300"
          >
            {skill.icon}
            <p className="mt-4 font-semibold text-gray-800">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
