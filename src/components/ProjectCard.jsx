import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { ArrowUpRight, Code2 } from "lucide-react";
import { Technologies } from "./../data";

export default function Example({
  projectTitle,
  demoLink,
  description,
  usedTechnologies,
  projectImage,
  projectLink,
}) {
  return (
    <Card className="hover:shadow-2xl shadow-md hover:shadow-orange-400 relative lg:mx-0 mx-5 rounded-2xl duration-300 h-[550px] ">
      <CardHeader className="flex object-cover justify-center ">
        <a href={demoLink} target="_blank" rel="noreferrer">
          <img
            src={projectImage}
            alt="cover"
            className="rounded-md object-cover duration-500"
          />
        </a>
      </CardHeader>
      <CardBody className="space-y-8">
        <div>
          <div className=" flex items-baseline justify-between">
            <Typography
              variant="h5"
              color="blue-gray"
              className="font-semibold"
            >
              {projectTitle}
            </Typography>
            <a href={projectLink} target="_blank" rel="noreferrer">
              <Code2
                className="text-orange-500 bg-orange-100 rounded p-1 hover:text-orange-700 cursor-pointer"
                size={25}
              />
            </a>
          </div>
          <Typography color="gray" className="text-left font-Roboto ">
            {description}
          </Typography>
        </div>
        <div className="flex justify-center items-center gap-6">
          {Technologies.map((tech) => {
            if (usedTechnologies.includes(tech.name)) {
              return (
                <Tooltip key={tech.label}>
                  <span title={tech.label}>
                    <img
                      width={30}
                      height={30}
                      src={tech.icon}
                      alt={tech.label}
                    />
                  </span>
                </Tooltip>
              );
            } else {
              return null;
            }
          })}
        </div>
      </CardBody>
      <CardFooter className="bottom-0 w-full absolute">
        <a
          href={demoLink}
          target="_blank"
          rel="noreferrer"
          className="flex justify-center py-2 normal-case hover:bg-[#403d39] text-white bg-black hover:text-white duration-200  items-center gap-2 rounded-xl"
        >
          View Demo
          <ArrowUpRight size={15} />
        </a>
      </CardFooter>
    </Card>
  );
}
