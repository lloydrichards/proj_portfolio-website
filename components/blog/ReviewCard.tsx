import React from 'react';
import { CardContent, CardHeader, Card } from '@material-ui/core';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import { H4, Content } from '../layout/StyledLayoutComponents';

interface Review {
  reviewer: string;
  date: string;
  stars: number;
  review: string;
  color: string;
}

const ReviewCard: React.FC<Review> = ({
  color,
  reviewer,
  date,
  stars,
  review,
}) => {
  const starRating = (star: number) => {
    const rating: Array<boolean> = [];
    for (var i = 0; i < 5; i++) {
      i < star ? rating.push(true) : rating.push(false);
    }
    console.log(rating);
    return rating;
  };

  return (
    <Card>
      <CardHeader></CardHeader>
      <CardContent>
        {starRating(stars).map((i) =>
          i ? (
            <StarRoundedIcon style={{ color: color }} />
          ) : (
            <StarBorderRoundedIcon style={{ color: color }} />
          )
        )}
        <H4>{date}</H4>
        <Content>{review}</Content>
        <H4>~{reviewer}</H4>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
