import React from "react";
import { useFormContext, useWatch } from "react-hook-form";
function BasicsTemplate({resumeData}) {

  return (
      <div className="text-white pt-10 pb-5">
        <div className="text-2xl font-bold text-center">{resumeData.data.basics.name? resumeData.data.basics.name :"Thanak Mech"}</div>
        <div className="gap-5">
          <div className="text-center px-5 pb-5 text-sm">
              <span> {resumeData.data.basics.number? resumeData.data.basics.number : "081790154"}</span>
              <span>|</span>
              <span> {resumeData.data.basics.email ? resumeData.data.basics.email : "thanakmech@gmail.com"}</span>
            <div>
              <div> {resumeData.data.basics.address}</div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default BasicsTemplate;
