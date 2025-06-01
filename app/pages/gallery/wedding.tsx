import { Container } from "@/Container";
import { Gallery } from "@/sections/Gallery";
import { weddingphotos } from "contants/weddingPhoto";

export default function Wedding() {
  return (
    <Container>
      <div className="flex justify-between py-10">
        <h1 className="text-4xl font-bold font-Sansation max-w-xl">
          Your wedding is an unforgettable day of union, a milestone that you’ll
          remember most fondly in life.
        </h1>
        <p className="max-w-lg">
          Photography is the art of capturing moments and expressing emotions
          through visual storytelling and it involves skillfully using cameras,
          lenses and editing tools to create.
        </p>
      </div>
      <div className="p-2.5 columns-2 sm:columns-3 lg:columns-4 gap-2.5">
        <Gallery photos={weddingphotos} />
      </div>
    </Container>
  );
}
