// app/contest/page.tsx
import Image from "next/image";

export default function Contest() {
  const contests = [
    {
      id: 1,
      name: "Adobe India Hackathon",
      writers: "Adobe",
      start: "Nov 2024",
      cert: "https://unstop.com/certificate-preview/242aa1d3-eb66-4e13-91b7-ac1b204ce751",
    },
    {
      id: 2,
      name: "L'Oréal Sustainability Challenge 2025",
      writers: "L'Oréal",
      start: "Oct 2024",
      cert: "https://unstop.com/certificate-preview/f389d711-9ec1-451d-a8fb-b034e95b1249",
    },
  
  ];

  return (
    <div className="bg-[#E1E1E1] min-h-screen flex flex-col items-center py-1 rounded-sm">
      {/* Header */}
      <span
        className="text-[14px] flex items-center gap-1 mb-2 self-start my-1"
        style={{
          fontFamily: "Verdana, Arial, sans-serif",
          marginLeft: "10px",
        }}
      >
        Participated Contests
        <img
          src="https://img.icons8.com/ios-filled/50/list.png"
          alt="list icon"
          width={16}
          height={16}
          style={{
            position: "relative",
            cursor: "pointer",
            opacity: 0.9,
          }}
        />
      </span>

      {/* Table */}
      <table
        className="w-[calc(100%-10px)] mx-[1px] border border-gray-300 border-separate rounded-t-lg text-center shadow-sm bg-white"
        style={{
          fontFamily: "Verdana, Arial, sans-serif",
          borderSpacing: "0",
          boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <thead>
          <tr className="bg-gray-100 text-black text-[14px]">
            <th className="border border-gray-300 w-[140 px] h-[40px] rounded-tl-lg">
              Name
            </th>
            <th className="border border-gray-300 w-[120px]">Writers</th>
            <th className="border border-gray-300 w-[97px]">Start</th>
            <th className="border border-gray-300 w-[60px]"></th>
            <th className="border border-gray-300 w-[91px]">Score</th>
            <th className="border border-gray-300 w-[109px] rounded-tr-lg">
              Certificate
            </th>
          </tr>
        </thead>

        <tbody className="text-[13px] text-gray-800">
          {contests.map((contest, index) => (
            <tr
              key={contest.id}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-[#F8F8F8]"
              } hover:bg-gray-50 transition`}
            >
              {/* Name */}
              <td className="border border-gray-300 h-[92px] align-middle px-2 text-center">
                <span className="text-[13px]  cursor-pointer hover:text-[#551a8b]">
                  {contest.name}
                </span>
              </td>

              {/* Writers */}
              <td className="border border-gray-300 align-middle text-red-500 font-bold ">
                {contest.writers}
              </td>

              {/* Start */}
              <td className="border border-gray-300 align-middle">
                {contest.start}
              </td>

              {/* Empty column */}
              <td className="border border-gray-300 align-middle"></td>

              {/* Fake "Score" column */}
              <td className="border border-gray-300 align-middle">
                {Math.floor(Math.random() * 100)}%
              </td>

              {/* Certificate */}
              <td className="border border-gray-300 align-middle">
                {contest.cert !== "#" ? (
                  <a
                    href={contest.cert}
                    className="text-[#0000cc] underline hover:text-[#551a8b]"
                    target="_blank"
                  >
                    View
                  </a>
                ) : (
                  <span className="text-gray-400">N/A</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer note */}
      <p
        className="mt-4 text-gray-700 text-[13px] italic"
        style={{ fontFamily: "Verdana, Arial, sans-serif" }}
      >
        🏆 Every contest adds a story — and a skill.
      </p>
    </div>
  );
}
