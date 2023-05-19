import { allProjects } from 'contentlayer/generated';
import { IProjectCard } from './ProjectCard';

const base: IProjectCard = {
  project: allProjects[0],
};

export const mockProjectCardProps = {
  base,
};
