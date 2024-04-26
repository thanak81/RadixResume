import { useStore } from "@/app/resume/state/GlobalState";
import React from "react";
import parse from "html-react-parser";

function EducationTemplate({ resumeData }) {
  const data = {
    education: [
      {
        id: 1,
        institution: "Royal Phnom Penh University",
        startDate: "2021",
        endDate: "2024",
        level: "Intern",
        area: "I intern there for 3 months",
        summary: "I study there",
      },
    ],
  };
  let checked = false;
  if (
    resumeData.education[0].institution ||
    resumeData.education[0].level ||
    resumeData.education[0].startDate  ||
    resumeData.education[0].endDate  ||
    resumeData.education[0].summary ||
    resumeData.education[0].area 
  ) {
    checked = true;
  } else {
    checked = false;
  }
  return (
    <>
      {resumeData?.education?.length > 0 && checked && (
        <div>
          <div className=" font-bold text-[#005685] border-y border-black/25 p-2">
            Education
          </div>
          <div className="p-5 flex flex-col gap-5 text-black">
            {resumeData?.education.map((edu) => (
              <div key={edu.id} className="">
                <div className="flex justify-between">
                  <div className="font-bold w-[30rem]">{edu.institution}</div>
                  <div>
                    <span>{edu.startYear}</span> -{" "}
                    {edu.present ? (
                      <span>Present</span>
                    ) : (
                      <span>{edu.endYear}</span>
                    )}
                  </div>
                </div>
                <div className="text-sm flex flex-col gap-2 text-[#56606A]">
                  <div className="mt-2 font-semibold w-[30rem]">
                    {edu.level}, {edu.area}
                  </div>
                  <div className="w-[30rem] prose">{parse(edu.summary)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default EducationTemplate;
