import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Dialog,
  DialogBody,
  DialogHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { ArrowUpRight, Code2, X } from "lucide-react";
import { useState } from "react";
import { Technologies } from "./../data";
import { IconButton } from "@material-tailwind/react";

export default function Example({
  projectTitle,
  demoLink,
  description,
  usedTechnologies,
  projectImage,
  projectLink,
}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Dialog size="md" open={open} handler={handleOpen}>
        <DialogHeader className="flex justify-end">
          <IconButton onClick={() => setOpen(false)}>
            <X size={25} className="text-black" />
          </IconButton>
        </DialogHeader>
        <DialogBody>
          <img
            src={projectImage}
            alt="cover"
            width={500}
            height={500}
            className="rounded-md"
          />
        </DialogBody>
      </Dialog>
      <Card
        data-aos="fade-in"
        data-aos-delay="200"
        data-aos-duration="1000"
        className="hover:shadow-2xl shadow-lg  lg:mx-0 mx-5 rounded-2xl duration-200 "
      >
        <CardHeader className="flex  justify-center ">
          <img
            onClick={handleOpen}
            src={projectImage}
            alt="cover"
            className="rounded-md object-cover duration-500"
          />
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
        <CardFooter>
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
    </>
  );
}
