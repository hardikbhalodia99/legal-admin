import { Typography } from "@material-tailwind/react";
import React from "react";

export default function PageHeader({title,description}) {
	return (
    <div className="ml-1">
     <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                {title}
              </Typography>
              <Typography color="gray" className="mt-1 font-normal text-sm">
               {description}
              </Typography>
            </div>
          </div>
    </div>

	);
}
