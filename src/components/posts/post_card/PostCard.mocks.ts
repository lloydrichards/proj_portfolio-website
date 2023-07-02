import { allLabs } from '../../../../.contentlayer/generated';
import { IPostCard } from './PostCard';

const base: IPostCard = {
  post: allLabs[0],
};

export const mockPostCardProps = {
  base,
};
