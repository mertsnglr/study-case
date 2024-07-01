import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneMotion } from './components/Animation';
import { Tab } from './components/Tab';
import { tabData } from './components/database';

import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

export function App() {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [tabHeader, setTabHeader] = useState<string>(tabData[0].header);
  const [tabTitle, setTabTitle] = useState<string>(tabData[0].title);
  const [tabDescription, setTabDescription] = useState<string>(tabData[0].description);
  const [Animation, setAnimation] = useState<boolean>(false);

  const mediaquery = useMediaQuery('(min-width:900px)');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    data: { index: number; header: string; title: string; description: string } | null
  ) => {
    if (data && data.index !== tabIndex) {
      setAnimation(true);
      setTabIndex(data.index);
      setTimeout(() => {
        setAnimation(false);
        setTabHeader(data.header);
        setTabTitle(data.title);
        setTabDescription(data.description);
      }, 700);
    }
  };

  return (
    <Container sx={{ px: 0 }}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight={mediaquery ? '100vh' : 'auto'}
        position={mediaquery ? 'relative' : 'absolute'}
        bottom={mediaquery ? 'auto' : 0}
      >
        <Stack display={mediaquery ? 'flex' : 'grid'}>
          <Box
            display="flex"
            overflow="hidden"
            alignSelf={mediaquery ? 'flex-end' : 'center'}
            alignItems={mediaquery ? 'flex-end' : 'center'}
            flexDirection={mediaquery ? 'row' : 'column-reverse'}
            height={mediaquery ? 440 : '87.5vh'}
            sx={{ overflowY: mediaquery ? 'hidden' : 'scroll' }}
          >
            <PhoneMotion
              Animation={Animation}
              tabIndex={tabIndex}
              mediaquery={mediaquery}
            />
            <motion.div
              className="box"
              initial={{ opacity: 0 }}
              animate={{ opacity: Animation ? 0 : 1 }}
              transition={{ duration: 0.7 }}
              style={{ width: mediaquery ? '60%' : '90%', alignSelf: 'center' }}
            >
              <Stack textAlign={mediaquery ? 'end' : 'center'} pt={5}>
                <Typography
                  fontWeight={800}
                  fontSize={16}
                  color="#0381FF"
                  textTransform="uppercase"
                  mb={1}
                >
                  {tabHeader}
                </Typography>
                <Typography fontWeight={700} fontSize={32} color="#0B122A">
                  {tabTitle}
                </Typography>
                <Typography
                  fontWeight={400}
                  fontSize={20}
                  color="#0B172A"
                  my={2}
                >
                  {tabDescription}
                </Typography>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    maxWidth: 135,
                    alignSelf: mediaquery ? 'flex-end' : 'center',
                    color: '#0B122A',
                    borderColor: '#00000029',
                    borderWidth: 0.5,
                    borderRadius: 0,
                    textTransform: 'none',
                    fontWeight: 400,
                    fontSize: 20,
                    py: 1,
                    px: 2,
                    marginBottom: mediaquery ? 0 : 2,
                  }}
                >
                  Learn More
                </Button>
              </Stack>
            </motion.div>
          </Box>
          <ToggleButtonGroup
            value={tabIndex}
            exclusive
            onChange={handleChange}
            sx={{
              display: 'flex',
              flexWrap: 'nowrap',
              overflowX: 'auto',
              borderRadius: 0,
              alignSelf: 'center',
            }}
          >
            {tabData.map((tab, index) => [
              index !== 0 && <Divider key={`divider-${index}`} orientation="vertical" flexItem />,
              <Tab
                key={tab.header}
                index={index}
                header={tab.header}
                title={tab.title}
                description={tab.description}
                selectedTab={tabIndex}
                defaultIcon={tab.defaultIcon}
                selectedIcon={tab.selectedIcon}
              />
            ])}
          </ToggleButtonGroup>
        </Stack>
      </Box>
    </Container>
  );
}
