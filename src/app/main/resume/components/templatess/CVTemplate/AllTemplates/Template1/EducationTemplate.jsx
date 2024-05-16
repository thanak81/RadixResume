import React, { useState } from "react";
import parse from "html-react-parser";
import { cn } from "@/util/cn";

function EducationTemplate({ resumeData , gap }) {
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
  if (resumeData.data.education) {
    checked = true;
  } else {
    checked = false;
  }


  return (
    <>
      {resumeData?.data.education?.length > 0 && checked && (
        <div>
          <div className=" font-bold text-[#005685] border-y border-black/25 p-2">
            Education
          </div>
          <div className={cn("p-5 flex flex-col text-black",gap)}>
            {resumeData?.data.education.map((edu) => (
              <div key={edu.id} className="">
                  <div className="flex justify-between">
                    <div className="font-bold w-[40rem]">{edu.institution}</div>
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
                  <div className="mt-2 font-semibold w-[40rem]">
                    {edu.level}, {edu.area}
                  </div>
                  <div className="w-[40rem] marker:text-black prose text-sm text-black list-disc">
                    {" "}
                    {edu?.summary && parse(edu.summary)}
                  </div>
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
