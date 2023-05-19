import { allExperiments } from 'contentlayer/generated';
import { IPostCard } from './PostCard';

const base: IPostCard = {
  post: allExperiments[0],
};

export const mockPostCardProps = {
  base,
};
