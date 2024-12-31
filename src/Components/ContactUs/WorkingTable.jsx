import React from "react";

const WorkingAreaTable = () => {
  const data = [
    {
      district: "Matara",
      moh: "Dewndara",
      headOfMoh: "W.H. Sarath Perera",
      phone: "041 3456789",
      workingAreas: [
        {
          area: "Gandara",
          phi: "W.H. Idunil Perera",
          contact: "071 3456789",
        },
        {
          area: "Gandara",
          phi: "W.H. Idunil Perera",
          contact: "071 3456789",
        },
      ],
    },
    {
      district: "Colombo",
      moh: "Malabe",
      headOfMoh: "S.E. Ajith Bandara",
      phone: "041 3456789",
      workingAreas: [
        {
          area: "Gandara",
          phi: "W.H. Idunil Perera",
          contact: "071 3456789",
        },
        {
          area: "Gandara",
          phi: "W.H. Idunil Perera",
          contact: "071 3456789",
        },
      ],
    },
  ];

  return (
    <div className="p-4 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="overflow-auto w-full max-w-6xl max-h-96 border border-gray-400">
        <table className="table-auto w-full border-collapse border border-gray-400">
          <tbody>
            {data.map((entry, index) => (
              <tr key={index} className="bg-gray-200">
                <td className="w-1/2 border border-gray-400 p-4 align-top">
                  <p className="mb-2">
                    <span className="font-bold">District:</span>{" "}
                    {entry.district}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">MOH:</span> {entry.moh}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">Head Of MOH:</span>{" "}
                    {entry.headOfMoh}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">Phone:</span> {entry.phone}
                  </p>
                </td>
                <td className="w-1/2 border border-gray-400 p-4">
                  {entry.workingAreas.map((area, i) => (
                    <div
                      key={i}
                      className={`p-2 ${
                        i > 0 ? "border-t border-gray-400" : ""
                      }`}
                    >
                      <p className="mb-1">
                        <span className="font-bold">Working Area:</span>{" "}
                        {area.area}
                      </p>
                      <p className="mb-1">
                        <span className="font-bold">PHI:</span> {area.phi}
                      </p>
                      <p className="mb-1">
                        <span className="font-bold">Phone:</span> {area.contact}
                      </p>
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorkingAreaTable;
