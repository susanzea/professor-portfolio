import WritingIndex from '../shared components/WritingIndex/WritingIndex';
import { mockData } from './mockData';

const Chapters = () => {
  return (
    <div className="chapters page">
      <div className="content-container">
        <WritingIndex allItems={mockData} />
      </div>
    </div>
  );
};

export default Chapters;
