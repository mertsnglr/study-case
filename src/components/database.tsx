import DocumentScanner from '../assets/DocumentScanner.svg';
import DocumentScannerSelected from '../assets/DocumentScannerSelected.svg';
import SignStamp from '../assets/SignStamp.svg';
import SignStampSelected from '../assets/SignStampSelected.svg';
import BatchScanning from '../assets/BatchScanning.svg';
import BatchScanningSelected from '../assets/BatchScanningSelected.svg';
import AdvancedFilters from '../assets/AdvancedFilters.svg';
import AdvancedFiltersSelected from '../assets/AdvancedFiltersSelected.svg';
import ExportShare from '../assets/ExportShare.svg';
import ExportShareSelected from '../assets/ExportShareSelected.svg';

export interface DataProps {
    index: number;
    header: string;
    title: string;
    description: string;
    defaultIcon: string;
    selectedIcon: string;
  }
  
  export const tabData: DataProps[] = [
    {
        index: 0,
        header: 'Document Scanner',
        title: 'Scan with Ease',
        description:
          'Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.',
        defaultIcon: DocumentScanner,
        selectedIcon: DocumentScannerSelected,
      },
      {
        index: 1,
        header: 'Sign & Stamp',
        title: 'One-Tap Focus',
        description:
          'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!',
        defaultIcon: SignStamp,
        selectedIcon: SignStampSelected,
      },
      {
        index: 2,
        header: 'Batch Scanning',
        title: 'Multiple Page Scan',
        description:
          'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
        defaultIcon: BatchScanning,
        selectedIcon: BatchScanningSelected,
      },
      {
        index: 3,
        header: 'Advanced Filters',
        title: 'Unique Filters',
        description:
          'Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.',
        defaultIcon: AdvancedFilters,
        selectedIcon: AdvancedFiltersSelected,
      },
      {
        index: 4,
        header: 'Export & Share',
        title: 'All-Round Conversion',
        description: 'Export your scans as PDF,JPG,ZIP,TXT and Word.',
        defaultIcon: ExportShare,
        selectedIcon: ExportShareSelected,
      },
    ];