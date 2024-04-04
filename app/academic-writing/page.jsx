import Image from 'next/image';
import { mockData } from './mockData';
import WritingIndex from '../shared components/WritingIndex/WritingIndex';
import './academicWriting.scss';

const AcademicWriting = () => {
  return (
    <div className={'academic-writing page'}>
      <div
        className="page-header"
        style={{ width: '101vw', position: 'absolute' }}
      >
        <Image
          alt="A bookshelf with a picture of Aníbal, a statuette of the letter 'A' and books."
          src="/bookshelf.jpeg"
          priority
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="content-container">
        <WritingIndex allItems={mockData} />
      </div>
    </div>
  );
};

export default AcademicWriting;
