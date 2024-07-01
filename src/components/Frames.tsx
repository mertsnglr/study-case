import { motion } from 'framer-motion';
import Frame from '../assets/Frame.png';
import Frame1 from '../assets/Frame1.png';
import Frame2 from '../assets/Frame2.png';
import Frame3 from '../assets/Frame3.png';
import Frame4 from '../assets/Frame4.png';
import FilePreview from '../assets/FilePreview.png';
import Brightness from '../assets/Brightness.png';
import Contrast from '../assets/Contrast.png';
import Vector from '../assets/Vector.png';
import PdfIcon from '../assets/PdfIcon.png';
import JpgIcon from '../assets/JpgIcon.png';
import TxtIcon from '../assets/TxtIcon.png';
import Sign from '../assets/Sign.png';
import Stamp from '../assets/Stamp.png';

interface Props {
  Animation: boolean;
  mediaquery: boolean;
}

const ContainerStyle = (mediaquery: boolean) => ({
  width: mediaquery ? 400 : '60%',
  marginLeft: mediaquery ? 150 : 0,
  marginRight: mediaquery ? 150 : 0,
});

const AnimationProps = {
  initial: { y: 480 },
  animate: { opacity: 1, y: 5 },
  transition: { duration: 0.7, ease: 'easeOut' },
};

const FrameComponent = ({ Animation, mediaquery }: Props) => (
  <motion.div
    key={0}
    {...AnimationProps}
    animate={{ opacity: Animation ? 0 : 1, y: 5 }}
    style={ContainerStyle(mediaquery)}
  >
    <img src={Frame} alt="frame" style={{ width: '100%' }} />
  </motion.div>
);

const Frame1Component = ({ Animation, mediaquery }: Props) => (
  <motion.div
    key={1}
    {...AnimationProps}
    animate={{ opacity: Animation ? 0 : 1, y: 5 }}
    style={ContainerStyle(mediaquery)}
  >
    <img src={Frame1} alt="frame1" style={{ width: '100%' }} />
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '50%' }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
      style={{ position: 'absolute', bottom: '20%', left: '-21%' }}
    >
      <img src={Sign} alt="sign" style={{ width: '100%' }} />
    </motion.div>
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
      style={{ position: 'absolute', top: '30%', left: '68%', marginRight: -250 }}
    >
      <img src={Stamp} alt="stamp" style={{ width: '50%' }} />
    </motion.div>
  </motion.div>
);

const Frame2Component = ({ Animation, mediaquery }: Props) => (
  <motion.div
    key={2}
    {...AnimationProps}
    animate={{ opacity: Animation ? 0 : 1, y: 5 }}
    style={ContainerStyle(mediaquery)}
  >
    <img src={Frame2} alt="frame2" style={{ width: '100%' }} />
    {[0.5, 0.7, 0.9].map((delay, index) => (
      <motion.div
        key={index}
        initial={{ y: 480 }}
        animate={{ y: 35 * index }}
        transition={{ duration: 0.7, ease: 'easeOut', delay }}
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0, textAlign: 'center' }}
      >
        <img src={FilePreview} alt={`preview-${index}`} style={{ width: `${70 + 5 * index}%` }} />
      </motion.div>
    ))}
  </motion.div>
);

const Frame3Component = ({ Animation, mediaquery }: Props) => (
  <motion.div
    key={3}
    {...AnimationProps}
    animate={{ opacity: Animation ? 0 : 1, y: 5 }}
    style={ContainerStyle(mediaquery)}
  >
    <img src={Frame3} alt="frame3" style={{ width: '100%' }} />
    {[{ src: Brightness, bottom: 15, left: -85 }, { src: Contrast, bottom: 15, right: -85}].map(
      (item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 + 0.2 * index }}
          style={{
            position: 'absolute',
            bottom: item.bottom,
            ...(item.left !== undefined ? { left: item.left } : { right: item.right }),
            textAlign: 'center',
          }}
        >
          <img src={item.src} alt={`icon-${index}`} style={{ width: '18%' }} />
        </motion.div>
      )
    )}
  </motion.div>
);

const Frame4Component = ({ Animation, mediaquery }: Props) => (
  <motion.div
    key={4}
    {...AnimationProps}
    animate={{ opacity: Animation ? 0 : 1, y: 5 }}
    style={ContainerStyle(mediaquery)}
  >
    <img src={Frame4} alt="frame4" style={{ width: '100%' }} />
    {[
      { src: Vector, bottom: 20, x: 300, delay: 0.5, width: '80%' },
      { src: PdfIcon, bottom: 30, right: 50, left: 0, x: 50, delay: 0.7, width: '50%' },
      { src: JpgIcon, bottom: 55, left: 90, top: 0, y:0, delay: 0.9, width: '50%' },
      { src: TxtIcon, bottom: 30, right: -130, left: 200, top: 0, delay: 1.1, width: '50%' },
    ].map((item, index) => (
      <motion.div
        key={index}
        initial={{ y: 480, x: item.x || 0 }}
        animate={{ 
          y: item.y || 0,
          x: item.x !== undefined ? (item.x ? -30 : item.x) : 0 
        }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: item.delay }}
        style={{ position: 'absolute', bottom: item.bottom, left: item.left, right: item.right }}
      >
        <img src={item.src} alt={`icon-${index}`} style={{ width: item.width || 'auto' }} />
      </motion.div>
    ))}
  </motion.div>
);


export const frames = [
  FrameComponent,
  Frame1Component,
  Frame2Component,
  Frame3Component,
  Frame4Component,
];
