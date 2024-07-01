import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import CircularProgress from '@mui/material/CircularProgress';
import { motion } from 'framer-motion';

export interface TabProps {
  index: number;
  header: string;
  title: string;
  description: string;
  selectedTab: number;
  defaultIcon: string;
  selectedIcon: string;
}

export function Tab({
  index,
  header,
  title,
  description,
  selectedTab,
  defaultIcon,
  selectedIcon,
}: TabProps) {
  const isSelected = selectedTab === index;

  return (
    <ToggleButton
      value={{ index, header, title, description }}
      sx={{
        padding: 3,
        textTransform: 'none',
        bgcolor: isSelected ? 'rgba(3, 129, 255, 0.03)' : 'white',
      }}
      style={{
        margin: 0,
        border: 0,
        borderColor: 'white',
      }}
    >
      <motion.div
        whileHover={{
          border: '3px solid #0381FF',
          transition: { duration: 0.1 },
        }}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
        }}
      />
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: 'white',
            borderRadius: '50%',
          }}
        >
          <CircularProgress
            sx={{ color: 'lightgray' }}
            variant="determinate"
            thickness={1}
            size={50}
            value={100}
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        >
          <img
            src={isSelected ? selectedIcon : defaultIcon}
            alt="icon"
          />
        </Box>
        <CircularProgress
          variant="determinate"
          thickness={1}
          size={50}
          value={isSelected ? 100 : 0}
        />
      </Box>
      <Typography
        ml={2}
        color="text.primary"
        width={130}
        noWrap
        overflow="hidden"
        textOverflow="ellipsis"
      >
        {header}
      </Typography>
    </ToggleButton>
  );
}
