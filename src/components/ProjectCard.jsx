import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Dialog,
  DialogBody,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Technologies } from "./../data";

export default function Example({
  projectTitle,
  demoLink,
  description,
  usedTechnologies,
  projectImage,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <Card
      data-aos="fade-in"
      data-aos-delay="200"
      data-aos-duration="1000"
      className="hover:shadow-2xl col-span-2 shadow-xl mt-6 bg-white dark:bg-gray-900  border-2 dark:border-gray-800/30 text-black dark:text-white  lg:mx-0 mx-5 rounded-2xl duration-200 "
    >
      <Dialog size="xl" open={open} handler={handleOpen}>
        <DialogBody>
          <img
            src={projectImage}
            alt="cover"
            className="rounded-md object-contain"
          />
        </DialogBody>
      </Dialog>
      <CardHeader className="cursor-pointer ">
        <img
          onClick={handleOpen}
          src={projectImage}
          alt="cover"
          className="rounded-md  duration-500"
        />
      </CardHeader>

      <CardBody className="space-y-8">
        <div className="space-y-3">
          <div className=" flex items-baseline justify-between">
            <Typography variant="h6" className="font-Obviously">
              {projectTitle}
            </Typography>
          </div>
          <Typography variant="small" className="text-left font-Roboto ">
            {description}
          </Typography>
        </div>
        <div className="flex justify-center items-center gap-6">
          {Technologies.map((tech) => {
            if (usedTechnologies.includes(tech.name)) {
              return (
                <Tooltip
                  content={tech.label}
                  placement="bottom"
                  key={tech.label}
                >
                  <span title={tech.label}>
                    <img className="w-8 h-8" src={tech.icon} alt={tech.label} />
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
        <a href={demoLink} target="_blank" rel="noreferrer">
          <Button
            variant="gradient"
            fullWidth
            color="orange"
            className="flex rounded-lg gap-3 justify-center font-semibold items-end"
          >
            Live Preview
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
