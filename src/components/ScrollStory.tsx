import WaveGallery from './editorial/WaveGallery';

// The former standalone pinned scene now belongs to the shared photo ribbon.
export default function ScrollStory() {
  return <WaveGallery id="galerija" main images={['ftrgatevCrowd', 'oderAudience', 'jazz', 'dobrodelnost', 'pisarna']} label="TO SMO MI." />;
}
