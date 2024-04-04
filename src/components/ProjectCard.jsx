import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Dialog,
  DialogBody,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { ArrowUpRight, Code2 } from "lucide-react";
import { useState } from "react";
import { Technologies } from "./../data";
import ExternalLink from "../assets/svg/external-link.svg";

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
    <Card
      data-aos="fade-in"
      data-aos-delay="200"
      data-aos-duration="1000"
      className="hover:shadow-2xl shadow-xl mt-6  lg:mx-0 mx-5 rounded-2xl duration-200 "
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
            <Typography variant="h5" color="blue-gray">
              {projectTitle}
            </Typography>
            <a href={projectLink} target="_blank" rel="noreferrer">
              <IconButton variant="gradient" color="orange" size="sm">
                <Code2 size={15} />
              </IconButton>
            </a>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="text-left font-Roboto "
          >
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
            className="flex rounded-lg gap-3 justify-center font-semibold items-end"
          >
            View Demo
            <img
              src={ExternalLink}
              alt="external link"
              width={18}
              height={18}
            />
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
