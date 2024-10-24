const Skills = () => {
  return (
    <div
      id="skills"
      className="bg-gradient-to-b from-white to-[#00d9a5] text-gray-900 p-16 grid gap-10 rounded-xl shadow-lg transform hover:rotate-1 transition duration-500 ease-in-out"
    >
      {/* Title */}
      <h1 className="text-5xl font-bold text-center mb-6">🎨✨ SKILLS ✨🎨</h1>

      {/* Skills Section */}
      <div className="grid grid-cols-1 gap-10">
        {/* Skills */}
        <div className="animate-bounce-slow">
          <h2 className="text-3xl font-semibold mb-4">🚀 Skills</h2>
          <div className="space-y-7">
            <SkillBar skill="Creativity 🎨" percentage="90" color="bg-teal-500" />
            <SkillBar skill="Communication 💬" percentage="80" color="bg-blue-500" />
            <SkillBar skill="Project Management 📊" percentage="70" color="bg-orange-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillBar = ({ skill, percentage, color }) => {
  return (
    <div className="shadow-xl p-3 rounded-lg transition-transform transform hover:scale-110 hover:rotate-2 duration-300 ease-in-out bg-white">
      <div className="flex justify-between mb-2">
        <span className="text-lg font-bold">{skill}</span>
        <span className="text-lg font-bold">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-4 relative">
        <div
          className={`h-4 rounded-full ${color} absolute left-0 top-0`}
          style={{ width: `${percentage}%` }}
        >
          <span className="text-white text-xs absolute right-1 bottom-0.5 animate-pulse">✨</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
