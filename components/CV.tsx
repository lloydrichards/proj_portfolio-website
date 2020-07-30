import React, { useState, useEffect } from 'react';
import TimeLine, { Category } from './d3/TimeLine';
import { ButtonGroup, Button } from '@material-ui/core';
import { occupationData, lifeEventData } from './data/CVData';

function CV() {
  const [events] = useState(lifeEventData);
  const [occupations, setOccupations] = useState(occupationData);
  const [categories, setCategories] = useState<Category>({
    Education: true,
    Work: true,
    Volunteer: true,
  });

  useEffect(() => {
    setOccupations(
      occupationData.map((i) => {
        return { ...i, selected: categories[i.category] };
      })
    );
  }, [categories]);
  return (
    <div>
      <ButtonGroup
        variant='text'
        size='large'
        style={{ width: '100%', justifyContent: 'center', padding: '2em' }}
      >
        <Button
          onClick={() =>
            setCategories({
              Education: true,
              Work: true,
              Volunteer: true,
            })
          }
          style={{
            color:
              categories.Education && categories.Work && categories.Volunteer
                ? '#8B7A70'
                : '#F0ECE8',
          }}
        >
          All
        </Button>
        <Button
          onClick={() =>
            setCategories({ Education: false, Work: true, Volunteer: false })
          }
          style={{
            color: categories.Work ? '#CBE0F2' : '#F0ECE8',
          }}
        >
          Work
        </Button>
        <Button
          onClick={() =>
            setCategories({ Education: true, Work: false, Volunteer: false })
          }
          style={{
            color: categories.Education ? '#EECEC9' : '#F0ECE8',
          }}
        >
          Education
        </Button>
        <Button
          onClick={() =>
            setCategories({ Education: false, Work: false, Volunteer: true })
          }
          style={{
            color: categories.Volunteer ? '#F0E2CE' : '#F0ECE8',
          }}
        >
          Volunteer
        </Button>
      </ButtonGroup>
      <TimeLine
        background='white'
        height={1800}
        width={800}
        events={events}
        occupations={occupations}
      />
    </div>
  );
}

export default CV;
