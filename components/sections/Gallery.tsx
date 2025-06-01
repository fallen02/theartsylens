export function Gallery({ photos }: { photos: string[] }) {
  return photos.map((photo, idx) => (
    <div key={idx} className="mb-3 break-inside-avoid rounded-lg">
      <img
        src={photo}
        alt={`photo_${idx}`}
        className="h-full object-cover rounded-lg"
      />
    </div>
  ));
}
