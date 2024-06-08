import * as React from 'react';

import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function MasonryImagePhones() {
  return (
    <Box className="name" sx={{ width: 350, height: 550, overflowY: 'scroll'}}>
      <ImageList variant="masonry" cols={2} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'img/photos/Shauravdas- (1).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (2).jpg',
    title: 'ShauravDas',
  },
  {
   img: 'img/photos/Shauravdas- (3).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (4).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (5).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (6).jpg',
    title: 'ShauravDas',
  },
  {
   img: 'img/photos/Shauravdas- (7).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (8).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (9).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (10).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (11).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (12).jpg',
    title: 'ShauravDas',
  },
  {
   img: 'img/photos/Shauravdas- (13).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (14).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (15).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (16).jpg',
    title: 'ShauravDas',
  },
  {
   img: 'img/photos/Shauravdas- (17).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (18).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (19).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (20).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (21).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (22).jpg',
    title: 'ShauravDas',
  },
  {
   img: 'img/photos/Shauravdas- (23).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (24).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (25).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (26).jpg',
    title: 'ShauravDas',
  },
  {
   img: 'img/photos/Shauravdas- (27).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (28).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (29).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (30).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (31).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (32).jpg',
    title: 'ShauravDas',
  },
  {
   img: 'img/photos/Shauravdas- (33).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (34).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (35).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (36).jpg',
    title: 'ShauravDas',
  },
  {
   img: 'img/photos/Shauravdas- (37).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (38).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (39).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (40).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (41).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (42).jpg',
    title: 'ShauravDas',
  },
  {
   img: 'img/photos/Shauravdas- (43).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (44).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (45).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (46).jpg',
    title: 'ShauravDas',
  },
  {
   img: 'img/photos/Shauravdas- (47).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (48).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (49).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (50).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (51).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (52).jpg',
    title: 'ShauravDas',
  },
  {
   img: 'img/photos/Shauravdas- (53).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (54).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (55).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (56).jpg',
    title: 'ShauravDas',
  },
  {
   img: 'img/photos/Shauravdas- (57).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (58).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (59).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (60).jpg',
    title: 'ShauravDas',
  },
{
    img: 'img/photos/Shauravdas- (61).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (62).jpg',
    title: 'ShauravDas',
  },
  {
   img: 'img/photos/Shauravdas- (63).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (64).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (65).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (66).jpg',
    title: 'ShauravDas',
  },
  {
   img: 'img/photos/Shauravdas- (67).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (68).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (69).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (70).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (71).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (72).jpg',
    title: 'ShauravDas',
  },
  {
   img: 'img/photos/Shauravdas- (73).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (74).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (75).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (76).jpg',
    title: 'ShauravDas',
  },
  {
   img: 'img/photos/Shauravdas- (77).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (78).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (79).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (80).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (81).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (82).jpg',
    title: 'ShauravDas',
  },
  {
   img: 'img/photos/Shauravdas- (83).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (84).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (85).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (86).jpg',
    title: 'ShauravDas',
  },
  {
   img: 'img/photos/Shauravdas- (87).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (88).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (89).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (90).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (91).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (92).jpg',
    title: 'ShauravDas',
  },
  {
   img: 'img/photos/Shauravdas- (93).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (94).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (95).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (96).jpg',
    title: 'ShauravDas',
  },
  {
   img: 'img/photos/Shauravdas- (97).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (98).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (99).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (100).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (101).jpg',
    title: 'ShauravDas',
  },
  {
    img: 'img/photos/Shauravdas- (102).jpg',
    title: 'ShauravDas',
  },
];