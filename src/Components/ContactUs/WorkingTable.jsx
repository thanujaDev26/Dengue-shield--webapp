import React, { useState } from "react";

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
          area: "Weligama",
          phi: "K.A. Nimal Perera",
          contact: "071 1234567",
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
          area: "Nugegoda",
          phi: "J.M. Priyantha",
          contact: "071 9876543",
        },
        {
          area: "Kottawa",
          phi: "S.P. Pradeep",
          contact: "071 2345678",
        },
      ],
    },
  ];

  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedMoh, setSelectedMoh] = useState("");

  // Filter data based on district and moh selection
  const filteredDistricts = data.filter(
    (entry) =>
      !selectedDistrict || entry.district === selectedDistrict
  );

  const filteredMohAreas =
    selectedDistrict && selectedMoh
      ? data
          .find((entry) => entry.district === selectedDistrict)
          .workingAreas.filter((area) => area.phi === selectedMoh)
      : [];

  return (
    <div className="p-4 bg-white min-h-screen flex justify-center items-center">
      <div className="max-w-6xl w-full">
        {/* District Filter */}
        <div className="mb-4">
          <label className="mr-2">Select District:</label>
          <select
            className="border p-2"
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
          >
            <option value="">--Select District--</option>
            {data.map((entry) => (
              <option key={entry.district} value={entry.district}>
                {entry.district}
              </option>
            ))}
          </select>
        </div>

        {/* MOH Filter (Visible after selecting district) */}
        {selectedDistrict && (
          <div className="mb-4">
            <label className="mr-2">Select MOH:</label>
            <select
              className="border p-2"
              value={selectedMoh}
              onChange={(e) => setSelectedMoh(e.target.value)}
            >
              <option value="">--Select MOH--</option>
              {filteredDistricts
                .flatMap((entry) => entry.workingAreas)
                .map((area, index) => (
                  <option key={index} value={area.phi}>
                    {area.phi}
                  </option>
                ))}
            </select>
          </div>
        )}

        {/* First Table - Districts */}
        <div className="overflow-auto w-full max-h-96 border border-gray-400 mb-4">
          <table className="table-auto w-full border-collapse border border-gray-400">
            <thead>
              <tr>
                
                <th className="border border-gray-400 p-2">MOH</th>
                <th className="border border-gray-400 p-2">Head of MOH</th>
                <th className="border border-gray-400 p-2">Phone</th>
              </tr>
            </thead>
            <tbody>
              {filteredDistricts.map((entry, index) => (
                <tr key={index} className="bg-gray-200">
                 
                  <td className="border border-gray-400 p-2">{entry.moh}</td>
                  <td className="border border-gray-400 p-2">{entry.headOfMoh}</td>
                  <td className="border border-gray-400 p-2">{entry.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Second Table - MOH Areas */}
        {selectedDistrict && selectedMoh && (
          <div className="overflow-auto w-full max-h-96 border border-gray-400">
            <table className="table-auto w-full border-collapse border border-gray-400">
              <thead>
                <tr>
                  <th className="border border-gray-400 p-2">Area</th>
                  <th className="border border-gray-400 p-2">PHI</th>
                  <th className="border border-gray-400 p-2">Contact</th>
                </tr>
              </thead>
              <tbody>
                {filteredMohAreas.map((area, index) => (
                  <tr key={index} className="bg-gray-200">
                    <td className="border border-gray-400 p-2">{area.area}</td>
                    <td className="border border-gray-400 p-2">{area.phi}</td>
                    <td className="border border-gray-400 p-2">{area.contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkingAreaTable;
